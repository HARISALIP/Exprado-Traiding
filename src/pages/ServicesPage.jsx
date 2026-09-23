import { serviceItems } from "../assets/siteData";
import { CheckCircle, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { useTranslation } from "react-i18next";

export default function ServicesPage({ navigateTo }) {
  const { t } = useTranslation();
  return (
    <div className="page-layout">
      {/* Page header */}
      <div
        className="page-header"
        style={{
          padding: "7rem 0 4.5rem",
          background:
            'linear-gradient(rgba(13, 33, 55, 0.88), rgba(13, 33, 55, 0.8)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: "0.6rem" }}>
            {t("ServicesPage.eyebrow")}
          </p>
          <h1>{t("ServicesPage.title")}</h1>
          <p>
            {t("ServicesPage.description")}
          </p>
        </div>
      </div>

      {/* Services overview */}
      <section className="section" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="division-grid">
            {serviceItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="division-card">
                  <div className="division-card-header">
                    <div className="division-card-icon">
                      <Icon size={28} />
                    </div>
                    <div className="division-card-title">
                      <span>{t("Services.division")} {item.division}</span>
                      <h3>{t(`Services.items.${parseInt(item.division)-1}.title`)}</h3>
                    </div>
                  </div>
                  <div className="division-card-body">
                    <p>{t(`Services.items.${parseInt(item.division)-1}.description`)}</p>
                    <div className="division-sub-items">
                      {[0, 1, 2].map((subIdx) => (
                        <div key={subIdx} className="division-sub-item">
                          <CheckCircle size={16} className="division-sub-icon" />
                          <span>{t(`Services.items.${parseInt(item.division)-1}.subItems.${subIdx}`)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA under services */}
          <div
            style={{
              marginTop: "5rem",
              textAlign: "center",
              padding: "4rem 2rem",
              background: "linear-gradient(135deg, var(--navy), #0f2d50)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              {t("ServicesPage.ctaEyebrow")}
            </span>
            <h2
              style={{
                fontFamily: "'Barlow', 'Inter', sans-serif",
                color: "white",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: "900",
                margin: "0.75rem 0 1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              {t("ServicesPage.ctaTitle")}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>
              {t("ServicesPage.ctaDescription")}
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                className="button button-primary button-large"
                onClick={() => navigateTo("contact")}
              >
                {t("ServicesPage.contactUs")} <ArrowRight size={18} className="icon-move" />
              </button>
              <a
                href="https://wa.me/+966563189556?text=Hello%2C%20I%20am%20interested%20in%20Exprado%27s%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary button-large"
              >
                {t("ServicesPage.whatsappInquiry")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
