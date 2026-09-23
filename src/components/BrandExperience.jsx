import SectionHeading from "./SectionHeading";
import { useTranslation } from "react-i18next";

export default function BrandExperience() {
  const { t } = useTranslation();
  return (
    <section id="about" className="section section-muted" style={{ padding: "6rem 0" }}>
      <div className="container">
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            background: "white",
            borderRadius: "var(--radius-lg)",
            boxShadow: "0 20px 60px rgba(13, 33, 55, 0.08)",
            border: "1px solid var(--border)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "clamp(2.5rem, 6vw, 4rem) clamp(1.2rem, 5vw, 3.5rem)", textAlign: "center" }}>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              {t("BrandExperience.eyebrow")}
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
              {t("BrandExperience.title")}
            </h2>
            <p
              style={{
                color: "var(--muted)",
                marginBottom: "2.5rem",
                fontSize: "1.1rem",
                lineHeight: "1.75",
                maxWidth: "750px",
                margin: "0 auto 3rem",
              }}
            >
              {t("BrandExperience.descriptionPart1")}
              <strong style={{ color: "var(--navy)" }}>{t("BrandExperience.descriptionStrong1")}</strong>
              {t("BrandExperience.descriptionPart2")}
              <strong style={{ color: "var(--navy)" }}>{t("BrandExperience.descriptionStrong2")}</strong>
              {t("BrandExperience.descriptionPart3")}
              <strong style={{ color: "var(--navy)" }}>{t("BrandExperience.descriptionStrong3")}</strong>
              {t("BrandExperience.descriptionPart4")}
            </p>

            {/* Three pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                textAlign: "left",
              }}
            >
              {[
                {
                  label: "10+ Years",
                  desc: "Engineering Expertise",
                  color: "var(--navy)",
                },
                {
                  label: "100% Saudi Owned",
                  desc: "Local Value & Quality Standard",
                  color: "var(--gold)",
                },
                {
                  label: "Vision 2030",
                  desc: "Aligned & Contributing",
                  color: "var(--navy)",
                },
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.5rem",
                    background: "var(--surface)",
                    borderRadius: "16px",
                    border: "1px solid var(--border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: "900",
                      fontSize: "1.3rem",
                      color: pillar.color,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {t(`BrandExperience.pillars.${idx}.label`)}
                  </span>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: "700",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                    }}
                  >
                    {t(`BrandExperience.pillars.${idx}.desc`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
