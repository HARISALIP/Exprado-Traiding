import { whyChooseItems, stats } from "../assets/siteData";
import SectionHeading from "./SectionHeading";
import { useTranslation } from "react-i18next";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  return (
    <section className="section" style={{ background: "white", padding: "6rem 0" }}>
      <div className="container">
        <div className="why-grid">
          {/* Left: text content */}
          <div>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              {t("WhyChooseUs.eyebrow")}
            </span>
            <h2
              style={{
                fontFamily: "'Barlow', 'Inter', sans-serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "var(--navy)",
                marginBottom: "1.5rem",
                lineHeight: "1.1",
                fontWeight: "900",
                letterSpacing: "-0.02em",
              }}
            >
              {t("WhyChooseUs.titleLine1")}
              <br />
              {t("WhyChooseUs.titleLine2")}
            </h2>
            <p
              style={{
                color: "var(--muted)",
                marginBottom: "2.5rem",
                fontSize: "1.05rem",
                lineHeight: "1.7",
              }}
            >
              {t("WhyChooseUs.description")}
            </p>

            <div className="why-features">
              {whyChooseItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="why-feature-item">
                    <div className="why-feature-icon">
                      <Icon size={22} />
                    </div>
                    <div className="why-feature-text">
                      <h4>{t(`WhyChooseUs.features.${idx}.title`)}</h4>
                      <p>{t(`WhyChooseUs.features.${idx}.description`)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Premium Stats Display */}
          <div style={{ position: "relative" }}>
            {/* Decorative background glow */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "80%",
                height: "80%",
                background: "var(--gold)",
                filter: "blur(100px)",
                opacity: 0.15,
                zIndex: 0,
              }}
            />
            
            <div
              style={{
                position: "relative",
                zIndex: 1,
                background: "var(--navy)",
                borderRadius: "32px",
                padding: "3.5rem 2.5rem",
                boxShadow: "0 25px 60px rgba(13, 33, 55, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
              }}
            >
              {stats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: "center", position: "relative" }}>
                  <h3
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                      color: "var(--gold)",
                      fontWeight: "900",
                      lineHeight: "1",
                      marginBottom: "0.75rem",
                      letterSpacing: "-0.03em",
                      textShadow: "0 4px 20px rgba(232, 134, 26, 0.3)",
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      margin: 0,
                      lineHeight: "1.5",
                    }}
                  >
                    {t(`WhyChooseUs.stats.${idx}.label`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Floating Vision Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "50%",
                transform: "translateX(50%)",
                zIndex: 2,
                background: "linear-gradient(135deg, var(--gold), #ff9a1f)",
                color: "var(--navy)",
                padding: "1.2rem 2rem",
                borderRadius: "100px",
                fontWeight: "800",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                boxShadow: "0 15px 35px rgba(232, 134, 26, 0.4)",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                whiteSpace: "nowrap",
              }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--navy)", boxShadow: "0 0 10px var(--navy)" }} />
              {t("WhyChooseUs.visionAligned")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
