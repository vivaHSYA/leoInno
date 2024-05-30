import { useState } from "react"
import { useRouter } from "next/router"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { i18n } from "next-i18next"
import { GetStaticPropsContext } from "next"
import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ServiceSection from "@/components/ServiceSection"
import ClientsSection from "@/components/ClientsSection"
import PartnersSection from "@/components/PartnersSection"
import ContactUSSection from "@/components/ContactUS"
import { useEffect } from "react"

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  if (process.env.NODE_ENV === "development") {
    await i18n?.reloadResources()
  }
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  }
}

const Home = ({
  serviceCate,
  handlerServiceCate,
}: {
  serviceCate: number
  handlerServiceCate(): void
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const [loc, setLoc] = useState("ko")

  // 이미지 로드가 완료된 후 실행되는 함수
  const hideSpinner = () => {
    setLoading(false)
  }

  useEffect(() => {
    // 화면 크기가 767px 미만인지 확인하는 함수
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()

    // 이벤트 리스너 추가
    window.addEventListener("resize", checkIsMobile)

    // 컴포넌트가 unmount될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  useEffect(() => {
    setLoc(router.locale ?? "ko")
  }, [router.locale])

  return (
    <>
      {/* 로딩 스피너 */}
      {loading && <div className="loading-spinner"></div>}
      <HeroSection
        isMobile={isMobile}
        loading={loading}
        hideSpinner={hideSpinner}
      />
      <AboutSection loc={loc} />
      <ServiceSection
        loc={loc}
        serviceCate={serviceCate}
        handlerServiceCate={handlerServiceCate}
      />
      <ClientsSection />
      <PartnersSection />
      <ContactUSSection />
    </>
  )
}
export default Home
