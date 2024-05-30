import { useTranslation } from "next-i18next"

const PartnersSection = () => {
    const { t } = useTranslation("common")
    return (
        <section className="partners" id="partners">
            <div className="partners-header">
                <span>Partners</span>
            </div>
            <div className="partners-bg">
                <div className="inner">
                    <div className="partners-body">
                        <div className="partners-left">
                            <h3>Solution / DMSMS data</h3>
                            <ul>
                                <li>RAC <a href="http://mysmart-rac.com/rac/index.html">(http://mysmart-rac.com/rac/index.html)</a></li>
                                <li>Source intelligence_Otec <a href="https://www.sourceintelligence.com">(https://www.sourceintelligence.com)</a></li>
                                <li>CMCA UK <a href="https://www.cmcauk.co.uk">(https://www.cmcauk.co.uk)</a></li>
                                <li>IIOM <a href="https://www.theiiom.org">(https://www.theiiom.org)</a></li>
                            </ul>
                        </div>
                        <div className="partners-right">
                            <h3>{t('partners.title-2')}</h3>
                            <ul>
                                <li>RSL: <a href="http://www.rsl-electronics.com">http://www.rsl-electronics.com</a></li>
                                <li>DESSC, ABC, DFMC, MVR</li>
                                <li></li>
                                <li>UAV ({t('partners.uav')}) TEKEVER : <a href="https://www.tekever.com">https://www.tekever.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PartnersSection