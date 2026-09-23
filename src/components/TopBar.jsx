import { Phone, Mail, Globe } from "lucide-react";
import { WhatsAppIconSVG } from "./Icons";
import { contactInfo } from "../assets/siteData";
import { useTranslation } from "react-i18next";

export default function TopBar() {
  const { t } = useTranslation();
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-contact">
          <div className="contact-item">
            <Phone size={13} />
            <a href={`tel:${contactInfo.whatsapp}`}>{contactInfo.phone}</a>
          </div>
          <div className="contact-item">
            <Globe size={13} />
            <a
              href={`https://${contactInfo.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.website}
            </a>
          </div>
        </div>

        <div className="topbar-actions">
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hello, I am interested in Exprado's services.")}`}
            className="topbar-btn whatsapp-btn"
            aria-label="Contact on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIconSVG size={13} />
            {t("TopBar.contactOnWhatsapp")}
          </a>
          <div style={{ fontSize: "0.8rem", opacity: 0.75 }}>
            {t("TopBar.tagline")}
          </div>
        </div>
      </div>
    </div>
  );
}
