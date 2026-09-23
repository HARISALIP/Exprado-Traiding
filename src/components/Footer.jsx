import { Phone, Globe, Mail, MapPin } from "lucide-react";
import { contactInfo } from "../assets/siteData";
import { WhatsAppIconSVG } from "./Icons";
import { LinkedInIcon } from "./Icons";
import { useTranslation } from "react-i18next";

export default function Footer({ navigateTo }) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); navigateTo("home"); }}
              style={{ display: "inline-block", marginBottom: "1.25rem", textDecoration: "none" }}
              aria-label="Exprado — Home"
            >
              {/* Text logo — replace with <img> when actual logo is available */}
              <div
                style={{
                  fontFamily: "'Barlow', 'Inter', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "900",
                  letterSpacing: "-0.02em",
                  color: "var(--navy)",
                }}
              >
                EX<span style={{ color: "var(--gold)" }}>PRADO</span>
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: "700",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--navy)",
                  marginTop: "2px",
                }}
              >
                {t("Footer.tradingCo")}
              </div>
            </a>
            <p>
              {t("Footer.description")}
            </p>

            <div className="footer-contact-list" style={{ marginTop: "1.5rem" }}>
              <a href={`tel:${contactInfo.whatsapp}`}>
                <Phone size={16} style={{ color: "var(--gold)" }} />
                {contactInfo.phone}
              </a>
              <a
                href={`https://${contactInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={16} style={{ color: "var(--gold)" }} />
                {contactInfo.website}
              </a>
              <div>
                <Mail size={16} style={{ color: "var(--gold)" }} />
                <span style={{ color: "var(--muted)", fontStyle: "italic", fontSize: "0.875rem" }}>
                  {contactInfo.email}
                </span>
              </div>
              <div>
                <MapPin size={16} style={{ color: "var(--gold)" }} />
                <span style={{ color: "var(--muted)", fontStyle: "italic", fontSize: "0.875rem" }}>
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>{t("Footer.quickLinks")}</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); navigateTo("home"); }}>{t("Navbar.home")}</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateTo("about"); }}>{t("Navbar.aboutUs")}</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateTo("services"); }}>{t("Navbar.ourServices")}</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo("contact"); }}>{t("Navbar.contact")}</a></li>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); navigateTo("privacy"); }}>{t("Footer.privacyPolicy")}</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); navigateTo("terms"); }}>{t("Footer.termsConditions")}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3>{t("Footer.serviceDivisions")}</h3>
            <ul className="footer-links">
              <li>{t("Hero.form.services.civil")}</li>
              <li>{t("Hero.form.services.electrical")}</li>
              <li>{t("Hero.form.services.mechanical")}</li>
              <li>{t("Hero.form.services.asphalt")}</li>
              <li>{t("Hero.form.services.scaffolding")}</li>
              <li>{t("Hero.form.services.waterproofing")}</li>
              <li>{t("Hero.form.services.equipment")}</li>
              <li>{t("Hero.form.services.manpower")}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3>{t("Footer.contactUs")}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hello EXPRADO, I have an inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontWeight: "700",
                  color: "#25D366",
                  fontSize: "0.95rem",
                }}
              >
                <WhatsAppIconSVG size={18} />
                WhatsApp Chat
              </a>

              <div style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
                <strong style={{ color: "var(--navy)", display: "block", marginBottom: "0.2rem" }}>
                  {contactInfo.representative}
                </strong>
                {contactInfo.title}
              </div>

              <div
                style={{
                  marginTop: "0.5rem",
                  padding: "1rem",
                  background: "rgba(232, 134, 26, 0.08)",
                  borderRadius: "12px",
                  border: "1px solid rgba(232, 134, 26, 0.2)",
                  fontSize: "0.8rem",
                  color: "var(--navy)",
                  fontWeight: "600",
                  textAlign: "center",
                  whiteSpace: "pre-line"
                }}
              >
                {t("Footer.saudiOwned")}
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); navigateTo("privacy"); }}>
              {t("Footer.privacyPolicy")}
            </a>
            <span className="divider">|</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); navigateTo("terms"); }}>
              {t("Footer.termsConditions")}
            </a>
            <span className="divider">|</span>
            <a href="#services" onClick={() => navigateTo("services")}>
              {t("Navbar.ourServices")}
            </a>
          </div>
          <p style={{ textAlign: "inherit" }}>
            {t("Footer.copyright", { year: currentYear })}<br/>
            {t("Footer.designedBy")} <a href="https://skillspot.in" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", fontWeight: "600" }}>skillspot.in</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
