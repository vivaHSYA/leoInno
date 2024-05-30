import { useTranslation } from "next-i18next"
import { useEffect, useState } from "react"
import { ApiResponse, Part } from "@/types/reports"
import { format } from "date-fns"

const AboutSection = ({ loc }: { loc: string }) => {
  const { t } = useTranslation("common")
  const [reports, setReports] = useState<Part[]>([])
  const [error, setError] = useState<null | string>(null)
  const [loading, setLoading] = useState(true)

  // 현재 날짜와 시간을 가져옵니다.
  const currentDateTime = new Date()
  // 한국 시간으로 변경하고 원하는 형식으로 포맷합니다.
  const koreanDateTime = format(currentDateTime, "yyyy-MM-dd")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `/proxy/${process.env.NEXT_PUBLIC_API_REPORTS}`
        )
        const data: ApiResponse = await response.json()

        if (response.ok) {
          if (data.success) {
            setReports(data.parts)
          } else {
            setError(data.message ?? "")
          }
        } else {
          setError("HTTP Error: " + response.status + response.statusText)
        }
        setLoading(false)
      } catch (error) {
        setError("Catch Error: " + error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const RenderReports = () => {
    if (error !== null) {
      return <div className="empty">{error}</div>
    }

    if (reports.length === 0) {
      return <div className="empty">There are no PCN/PDN to report.</div>
    }

    return (
      <ul className="reports">
        {reports.map((report, index) => (
          <li className="report" key={index}>
            <div className="report-txt">PCN/PDN date : {koreanDateTime}</div>
            <div className="report-txt">Part number : {report.part_number}</div>
            <div className="report-txt">Category : {report.category}</div>
            <div className="report-txt">Supplier : {report.supplier}</div>
            <div className="report-txt">Status : {report.status}</div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <section className="about">
      <div className="inner">
        <div className="about-content">
          <div className="about-us" id="about-us">
            <h1>About US</h1>
            <h3>{t("about-us.0")}</h3>
            <div className="desc">
              <div className="texts">
                <p>{t("about-us.1")}</p>
              </div>
              <div className="about-imgs">
                <img src="/images/about/about-us.png" alt="about-us" />
              </div>
            </div>
          </div>
          <div className="about-article" id="company-experts">
            <img
              src={
                loc === "ko"
                  ? "/images/about/company-experts.png"
                  : "/images/about/company-experts-en.png"
              }
              alt="company-experts"
            />
            <div className="desc">
              <h3>Company Experts</h3>
              <img
                src={
                  loc === "ko"
                    ? "/images/about/company-experts.png"
                    : "/images/about/company-experts-en.png"
                }
                style={{ maxWidth: "58rem" }}
                alt="company-experts"
              />
              <p>{t("about-article.company-experts.0")}</p>
            </div>
          </div>
          <div className="about-article" id="research-experts">
            <img
              src="/images/about/research-experts.png"
              alt="research-experts"
            />
            <div className="desc">
              <h3>Research Experts</h3>
              <img
                src="/images/about/research-experts.png"
                style={{ maxWidth: "58rem" }}
                alt="research-experts"
              />
              <p>{t("about-article.research-experts.0")}</p>
            </div>
          </div>
          <div className="part-info">
            <div className="part-info-img">
              <img src="images/about/fixed_0530.png" alt="part-info" />
            </div>
            <div className="desc">
              <h3>Research Experts_part information</h3>
              <div className="part-info-ols">
                <ol>
                  <li>Part Number</li>
                  <li>Specification</li>
                  <li>Manufacturer</li>
                  <li>Cage Code</li>
                  <li>Company Name</li>
                  <li>Availability</li>
                  <li>LTB</li>
                  <li>LCC</li>
                  <li>YTEOL</li>
                  <li>Generic YTEOL</li>
                  <li>Family code</li>
                  <li>Category</li>
                  <li>Function Description</li>
                </ol>
                <ol start={14}>
                  <li>Package</li>
                  <li>Lead</li>
                  <li>Moisture</li>
                  <li>ROHS</li>
                  <li>Pb Free</li>
                  <li>Pb,Pb Free</li>
                  <li>Generic NBR</li>
                  <li>Quality Level</li>
                  <li>Data Sheet</li>
                  <li>PCN Data Sheet</li>
                  <li>Production Data</li>
                  <li>Obsolescence Data</li>
                  <li>Updata Data</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="about-dms" id="what-dms">
            <div className="about-article">
              <img src="/images/about/what-dms.png" alt="smart-dms" />
              <div className="desc">
                <h3>What is Smart DMS</h3>
                <img
                  src="/images/about/what-dms.png"
                  alt="smart-dms"
                  style={{ maxWidth: "58rem" }}
                />
                <p>{t("about-article.smart-dms.0")}</p>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t("about-article.smart-dms.1").toString(),
                  }}
                />
                <p
                  style={{
                    letterSpacing: "-0.38px",
                  }}
                >
                  {t("about-article.smart-dms.2")}
                </p>
              </div>
            </div>
            <p>{t("about-article.smart-dms.3")}</p>
            <div className="dms-imgs">
              <div className="dms-icon">
                <img src="/images/about/dms-icon-1.png" alt="dms-icon-1" />
                <span>{t("about-article.smart-dms.5")}</span>
              </div>
              <div className="dms-icon">
                <img src="/images/about/dms-icon-2.png" alt="dms-icon-1" />
                <span>{t("about-article.smart-dms.6")}</span>
              </div>
              <div className="dms-icon">
                <img src="/images/about/dms-icon-3.png" alt="dms-icon-1" />
                <span>{t("about-article.smart-dms.7")}</span>
              </div>
              <div className="dms-icon">
                <img src="/images/about/dms-icon-4.png" alt="dms-icon-1" />
                <span>{t("about-article.smart-dms.8")}</span>
              </div>
              <div className="dms-icon">
                <img src="/images/about/dms-icon-5.png" alt="dms-icon-1" />
                <span>{t("about-article.smart-dms.9")}</span>
              </div>
            </div>
            <div className="dms-plms">
              <img src="/images/smartdms-logo2.png" alt="plms-logo" />
              <p>{t("about-article.smart-dms.4")}</p>
            </div>
          </div>
          <div className="what-we-do" id="what-we-do">
            <h3>What we do</h3>
            <div className="content">
              <img
                src="/images/about/what_we_do.png"
                alt="wedo-left"
                style={{ width: "100%", maxWidth: "58rem" }}
              />
              <div className="desc">
                <div className="icon-imgs">
                  <div className="icon">
                    <img src="/images/about/wedo-1.png" alt="솔루션 공급" />
                    <span>{t("about-article.what-we-do.0")}</span>
                  </div>
                  <div className="icon">
                    <img src="/images/about/wedo-2.png" alt="솔루션 공급" />
                    <span>{t("about-article.what-we-do.1")}</span>
                  </div>
                  <div className="icon">
                    <img src="/images/about/wedo-3.png" alt="솔루션 공급" />
                    <span>{t("about-article.what-we-do.2")}</span>
                  </div>
                  <div className="icon">
                    <img src="/images/about/wedo-4.png" alt="솔루션 공급" />
                    <span>{t("about-article.what-we-do.3")}</span>
                  </div>
                </div>
                <div className="text">
                  <img src="/images/about/wedo-arrow.png" alt="arrow" />
                  <span>Monitoring</span>
                </div>
                <div className="monitor-img">
                  <img src="/images/about/what_we_do_02.png" alt="wedo-right" />
                  <span>{t("about-article.what-we-do.4")}</span>
                </div>
              </div>
            </div>
            <div className="content-sub">
              <span>{t("about-article.what-we-do.5")}</span>
              <ul>
                <li>SOP (start of production)</li>
                <li>EOS(end of sales(LTB)</li>
                <li>EOP(end of production)</li>
                <li>LTD (last time delivery)</li>
                <li>EOSR (end of service and repair)</li>
              </ul>
            </div>
          </div>
          <div className="weekly-report" id="weekly-report">
            <h3>Weekly PCN/PDN Report</h3>
            <div style={{ display: "flex", justifyContent: "start", alignItems: "start" }}>
              <img src="/images/about/weekly_ico.png" alt="weekly-left" style={{ maxWidth: "280px" }} />
              {!loading && <RenderReports />}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
