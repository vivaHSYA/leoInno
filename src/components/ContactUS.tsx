import { useTranslation } from "next-i18next"

const ContactUSSection = () => {
  const { t } = useTranslation("common")
  return (
    <section className="contactus" id="contact-us">
      <div className="get-in-touch">
        <h3>GET IN TOUCH</h3>
        <img src="/images/contactus/email.png" alt="email" />
        <p>{t("contact-us")}</p>
        <span>T. +82 - 2 - 2027 - 5591</span>
      </div>
      <div className="contact-info">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.217385373724!2d126.88511547711012!3d37.4791961873889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b61ddf7dfd90f%3A0x9732a36080e5ea01!2zSVTrr7jrnpjtg4Dsm4w!5e0!3m2!1sko!2skr!4v1689145953596!5m2!1sko!2skr"
            style={{ border: "0", width: "100%", height: "99%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="info">
          <h3>Contact Info</h3>
          <span>{t("contact-name")}</span>
          <p>{t("contact-address")}</p>
          <div className="numbers">
            <div className="tel">
              <img
                src="/images/contactus/maps-and-flags.png"
                alt="maps-and-flags"
              />
              <span>+ 82-2-2027-5591</span>
            </div>
            <div className="tel">
              <img src="/images/contactus/fax-machine.png" alt="fax" />
              <span>+ 82-2-2027-5597</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactUSSection
