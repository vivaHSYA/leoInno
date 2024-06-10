import { useTranslation } from "next-i18next"

const ClientsSection = () => {
    const { t } = useTranslation("common")
    return (
        <section className="clients">
            <div className="clients-header">
                <span>Clients</span>
            </div>
            <div className="clients-body">
                <div className="inner">
                    <div className="agency">
                        <span>{t('client.0')}</span>
                        <div className="agency-imgs">
                            <a href="https://www.mnd.go.kr" target="_blank">
                                <img src="/images/client/logo-1.png" alt="logo-1" />
                            </a>
                            <a href="http://dapa.go.kr" target="_blank">
                                <img src="/images/client/logo-2.png" alt="logo-2" />
                            </a>
                            <a href="https://www.army.mil.kr" target="_blank">
                                <img src="/images/client/logo-3.png" alt="logo-3" />
                            </a>
                            <a href="https://www.navy.mil.kr" target="_blank">
                                <img src="/images/client/logo-4.png" alt="logo-4" />
                            </a>
                            <a href="https://rokaf.airforce.mil.kr" target="_blank">
                                <img src="/images/client/logo-5.png" alt="logo-5" />
                            </a>
                            <a href="https://www.dtaq.re.kr" target="_blank">
                                <img src="/images/client/logo-6.png" alt="logo-6" />
                            </a>
                            <a href="https://www.add.re.kr/kps" target="_blank">
                                <img src="/images/client/logo-7.png" alt="logo-7" />
                            </a>
                        </div>
                    </div>
                    <div className="enterprise">
                        <span>{t('client.1')}</span>
                        <div className="enterprise-imgs">
                            <a href="https://www.hanwhasystems.com/kr/index.do" target="_blank">
                                <img src="/images/client/logo-8.png" alt="logo-8" />
                            </a>
                            <a target="_blank">
                                <img src="/images/client/logo-9.png" alt="logo-9" />
                            </a>
                            <a target="_blank">
                                <img src="/images/client/logo-10.png" alt="logo-9" style={{ maxWidth: "222px" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ClientsSection