import { useTranslation } from "next-i18next"
import { useState } from "react"
import classNames from "classnames"

const ServiceSection = ({
  loc,
  serviceCate,
  handlerServiceCate,
}: {
  loc: string
  serviceCate: number
  handlerServiceCate(cateogry: number): void
}) => {
  const { t } = useTranslation("common")

  const Service0 = () => {
    return (
      <article className="solution-article">
        <div className="smart-dms">
          <h3>
            SMART DMS <small>(AI PREDICTION)</small>
          </h3>
          <div className="article-content">
            <div className="texts">
              <span>{t("service.body.solution.0")}</span>
              <p>{t("service.body.solution.1")}</p>
            </div>
            <div className="smart-dms-img">
              <img src="/images/service/smart-dms.png" alt="smart-dms" />
            </div>
          </div>
          <div className="article-detail">
            <p>{t("service.body.solution.3")}</p>
            <div className="big-data">
              <img
                src={
                  loc === "ko"
                    ? "/images/service/dms-plms3x-0823-kr.png"
                    : "/images/service/dms-plms3x-0823-en.png"
                }
                alt="dms-plms"
              />
              <img
                src={
                  loc === "ko"
                    ? "/images/service/dms-plms3x-mo.png"
                    : "/images/service/dms-plms3x-en-mo.png"
                }
                alt="dms-plms"
                className="solution-img-mo"
              />
            </div>
            <span>{t("service.body.solution.4")}</span>
          </div>
        </div>
        <div className="plms">
          <h3>
            PIMS <small>(Data Management)</small>
          </h3>
          <span>{t("service.body.solution.2")}</span>
          <div className="pims-imgs">
            <img src="/images/plms_0610.png" alt="plms-total" style={{ width: "100%", maxWidth: "100%" }} />
            {/* <img src="/images/service/plms-0.png" alt="plms-0" />
            <img src="/images/service/logo_fixed2_1.png" alt="plms-1" />
            <img src="/images/service/logo_fixed2_2.png" alt="plms-2" /> */}
          </div>
        </div>
      </article>
    )
  }
  const Service1 = () => {
    return (
      <article className="monitoring-article">
        <h3>
          Monitoring <small>(LRU,SRU,COTS,Components)</small>
        </h3>
        <span>{t("service.body.monitoring.0")}</span>
        <div className="bom-monitoring">
          <span>BOM Monitoring</span>
          <img
            src={
              loc === "ko"
                ? "/images/service/monitoring-2.png"
                : "/images/service/monitoring-2-eng.png"
            }
            alt="monitoring-2"
          />
        </div>
        {/* <div className="table-service">
                    <table>
                        <tr className="table-dates">
                            <th colSpan={4}></th>
                            <th colSpan={4}>2020</th>
                            <th colSpan={4}>2022</th>
                            <th colSpan={4}>2023</th>
                            <th colSpan={4}>2026</th>
                            <th colSpan={4}>2027</th>
                            <th colSpan={4}>2028</th>
                        </tr>
                        <tr className="table-title">
                            <th>NO</th>
                            <th>Part Number</th>
                            <th>Description</th>
                            <th>Vendor</th>
                            {Array.from({ length: 24 }, (_, index) => (
                                <th key={index}></th>
                            ))}
                        </tr>
                        <tr className="tr-blue">
                            <td>01</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 4,
                                red: index >= 21 && index <= 24,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-light-blue">
                            <td>02</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 0,
                                yellow: index >= 1 && index <= 2,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-blue">
                            <td>03</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 4,
                                red: index >= 21 && index <= 24,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-light-blue">
                            <td>04</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 0,
                                yellow: index >= 1 && index <= 2,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-blue">
                            <td>05</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 4,
                                red: index >= 21 && index <= 24,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-light-blue">
                            <td>06</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 0,
                                yellow: index >= 1 && index <= 2,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-blue">
                            <td>07</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 4,
                                red: index >= 21 && index <= 24,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-light-blue">
                            <td>08</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 0,
                                yellow: index >= 1 && index <= 2,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-blue">
                            <td>09</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 4,
                                red: index >= 21 && index <= 24,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-light-blue">
                            <td>10</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 0,
                                yellow: index >= 1 && index <= 2,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-blue">
                            <td>11</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 4,
                                red: index >= 21 && index <= 24,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                        <tr className="tr-light-blue">
                            <td>12</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            <td>내용삽입</td>
                            {Array.from({ length: 24 }, (_, index) => {
                            let backgroundColor = classNames({
                                green: index >= 0 && index <= 0,
                                yellow: index >= 1 && index <= 2,
                            });
                            if (backgroundColor === '') backgroundColor = 'gray'

                            return (
                                <th key={index} className={backgroundColor}>
                                </th>
                            );
                            })}
                        </tr>
                    </table>
                </div> */}
      </article>
    )
  }
  const Service2 = () => {
    return (
      <article className="ai-article">
        <h3>Research/Analysis/AI Prediction</h3>
        <span>{t("service.body.ai.0")}</span>
        <div className="ai-imgs">
          <div className="ai-img">
            <img src="/images/service/ai-0.png" alt="ai-0" />
            <strong>1,400,000,000+</strong>
            <span>{t("service.body.ai.1")}</span>
          </div>
          <div className="ai-img">
            <img src="/images/service/ai-1.png" alt="ai-1" />
            <strong>24,000+</strong>
            <span>{t("service.body.ai.2")}</span>
          </div>
          <div className="ai-img">
            <img src="/images/service/ai-2.png" alt="ai-2" />
            <strong>12,000+</strong>
            <span>{t("service.body.ai.3")}</span>
          </div>
        </div>
      </article>
    )
  }
  const Service3 = () => {
    return (
      <article className="mang-report">
        <h3>{t("service.body.mang-report.0")}</h3>
        <span>{t("service.body.mang-report.1")}</span>
        {/* <img src="/images/service/report-0.png" alt="report-0" className="mang-report-top"/> */}
        <div className="mang-report-imgs">
          {/* <p>{t('service.body.mang-report.2')}</p> */}
          <img src="/images/about/management_img.png" alt="report-1" />
        </div>
        {/* <img src={loc === 'ko' ? '/images/service/report-2.png' : '/images/service/report-2-en.png'} alt="report-2" className="mang-report-bottom"/> */}
      </article>
    )
  }
  const Service4 = () => {
    return (
      <article className="monitoring-article">
        <h3>{t("service.body.tracking.0")}</h3>
        <span>{t("service.body.tracking.1")}</span>
        <img src="/images/about/icon0530.png" alt="" className="recircle" />
        <div className="tracking-service">
          <span>Tracking Service</span>
          <img
            src="/images/service/monitoring-1.png"
            alt="monitoring-1"
            className="tracking-service-img"
          />
          <img
            src="/images/service/monitoring-1-mo.png"
            alt="monitoring-1"
            className="tracking-service-img-mo"
          />
        </div>
        {/* <img src="/images/service/report-0.png" alt="report-0" className="mang-report-top"/>
                <div className="mang-report-imgs">
                    <p>{t('service.body.mang-report.2')}</p>
                    <img src="/images/service/report-1.png" alt="report-1" />
                </div> */}
        {/* <img src="/images/service/report-2.png" alt="report-2" className="mang-report-bottom"/> */}
      </article>
    )
  }
  return (
    <section className="service">
      <div className="service-header">
        <div className="inner">
          <div className="logo">
            <img src="/images/service/service-logo.png" alt="service-logo" />
          </div>
          <div className="service-desc">
            <h3>SERVICE</h3>
            <p>{t("service.header.0")}</p>
          </div>
          <div className="service-img">
            <div className="left">
              <div className="imgs">
                <img src="/images/weekly_ico_v2.png" alt="plms" style={{ maxWidth: "201px" }} />
                <img src="/images/service/box-right.png" alt="actions" />
              </div>
              <img
                src="/images/service/box-right2.png"
                alt="box-right2"
                className="service-header-mo"
              />
              <p>{t("service.header.1")}</p>
            </div>
            <div className="right">
              <img src="/images/service/box-right2.png" alt="box-right2" />
            </div>
          </div>
        </div>
      </div>
      <div className="service-body" id="service">
        <div className="inner">
          <div className="service-category">
            <span
              className={serviceCate === 0 ? "active" : ""}
              onClick={() => handlerServiceCate(0)}
            >
              Solution
            </span>
            <span
              className={serviceCate === 1 ? "active" : ""}
              onClick={() => handlerServiceCate(1)}
            >
              Tracking Service
            </span>
            <span
              className={serviceCate === 2 ? "active" : ""}
              onClick={() => handlerServiceCate(2)}
            >
              Monitoring
            </span>
            <span
              className={serviceCate === 3 ? "active" : ""}
              onClick={() => handlerServiceCate(3)}
            >
              Research/Analysis/
              <br />
              AI Prediction
            </span>
            <span
              className={serviceCate === 4 ? "active" : ""}
              onClick={() => handlerServiceCate(4)}
            >
              {loc === "ko" ? (
                <>
                  단종관리
                  <br />
                  보고서 작성
                </>
              ) : (
                <>
                  DTaQ DMSMS
                  <br />
                  reports
                </>
              )}
            </span>
          </div>
          <div className="service-content">
            {
              {
                0: <Service0 />,
                1: <Service4 />,
                2: <Service1 />,
                3: <Service2 />,
                4: <Service3 />,
              }[serviceCate]
            }
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServiceSection
