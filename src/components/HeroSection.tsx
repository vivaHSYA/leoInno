import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, EffectFade } from "swiper"

import { useTranslation } from "next-i18next"

import "swiper/css"
import "swiper/css/effect-fade"

const HeroSection = ({
  isMobile,
  loading,
  hideSpinner,
}: {
  isMobile: boolean
  loading: boolean
  hideSpinner(): void
}) => {
  const swiperRef = useRef<SwiperCore>()

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const { t } = useTranslation("common")

  const handlerIsAutoplay = () => {
    if (isAutoplay) {
      swiperRef.current?.autoplay.stop()
    } else {
      swiperRef.current?.autoplay.start()
    }
    setIsAutoplay(!isAutoplay)
  }

  const handlerNextBtn = (isNext: boolean) => {
    isNext ? swiperRef.current?.slideNext() : swiperRef.current?.slidePrev()
    setIsAutoplay(false)
  }

  return (
    <main className={`hero`}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
        }}
        onSlideChange={(e) => setCurrentSlide(e.realIndex)}
        modules={[Autoplay, EffectFade]}
        effect="fade"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className={`slide-image slide-image-${index}`}>
              <div className="inner">
                <div className="hero-content">
                  <div className="hero-move">
                    {/* <div className="main-circle">
                      <img src="/images/hero-circle-0824.png" alt="gif" />
                    </div>
                    <div className="circle-group">
                      <div className="circle">
                        <img src="/images/hero-circle-1.png" alt="gif" />
                        <img src="/images/arrow-2.png" alt="gif" id="arrow-2" />
                      </div>
                      <div className="circle">
                        <img src="/images/hero-circle-1.png" alt="gif" />
                        <img src="/images/arrow-1.png" alt="gif" id="arrow-3" />
                      </div>
                      <div className="circle">
                        <img src="/images/hero-circle-1.png" alt="gif" />
                        <img src="/images/arrow-0.png" alt="gif" id="arrow-4" />
                      </div>
                    </div> */}
                  </div>
                  <div className="hero-txtgroup">
                    <p className="hero-mainTxt">{t("heroSection.0")}</p>
                    <div className="hero-subTxt">
                      <span>
                        ARE YOU READY TO MAKE AN <strong>IMPACT</strong>?
                      </span>
                      <br />
                      <span>IF So, the SMART DMS is solution for you.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="inner">
        <div className="btn-group">
          <div className="btn-autoplay" onClick={handlerIsAutoplay}>
            {isAutoplay ? (
              <i className="fa fa-pause-circle-o fa-2x"></i>
            ) : (
              <i className="fa fa-play-circle-o fa-2x"></i>
            )}
          </div>
          <div className="btn-previous" onClick={() => handlerNextBtn(false)}>
            <i className="fa fa-arrow-circle-o-left fa-2x"></i>
          </div>
          <span>
            {" "}
            <b>{`0${currentSlide + 1}`}</b> / 05
          </span>
          <div className="btn-next" onClick={() => handlerNextBtn(true)}>
            <i className="fa fa-arrow-circle-o-right fa-2x"></i>
          </div>
        </div>
      </div>
    </main>
  )
}
export default HeroSection
