import { CheckCircle, Target, Globe, Award, Users, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutPage({ navigateTo }) {
  const { t } = useTranslation();
  return (
    <div className="page-layout">
      {/* Page header */}
      <div
        className="page-header"
        style={{
          padding: "7rem 0 4.5rem",
          background:
            'linear-gradient(rgba(13, 33, 55, 0.88), rgba(13, 33, 55, 0.8)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: "0.6rem" }}>
            {t("AboutPage.headerEyebrow")}
          </p>
          <h1>{t("AboutPage.headerTitle")}</h1>
          <p>
            {t("AboutPage.headerDescription")}
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section" style={{ padding: "7rem 0" }}>
        <div className="container" style={{ padding: "0 2rem" }}>
          <div className="about-mission-grid">
            <div
              className="about-mission-card"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--navy)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--gold)",
                  marginBottom: "1.5rem",
                }}
              >
                <Target size={30} />
              </div>
              <h3 style={{ fontSize: "1.7rem", color: "var(--navy)", marginBottom: "1rem", fontWeight: "800" }}>
                {t("AboutPage.missionTitle")}
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.75", fontSize: "1rem" }}>
                {t("AboutPage.missionDescription")}
              </p>
            </div>

            <div
              className="about-mission-card"
              style={{
                background: "var(--white)",
                border: "1px solid var(--border)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "var(--gold)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--navy)",
                  marginBottom: "1.5rem",
                }}
              >
                <Globe size={30} />
              </div>
              <h3 style={{ fontSize: "1.7rem", color: "var(--navy)", marginBottom: "1rem", fontWeight: "800" }}>
                {t("AboutPage.visionTitle")}
              </h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.75", fontSize: "1rem" }}>
                {t("AboutPage.visionDescription")}
              </p>
            </div>
          </div>

          {/* Who We Are — split layout */}
          <div className="about-split-grid" style={{ marginTop: "5rem" }}>
            <div>
              {/* Construction image — replace with actual company image when available */}
              <div
                className="placeholder-box"
                style={{
                  height: "420px",
                  borderRadius: "var(--radius-lg)",
                  background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  border: "2px dashed rgba(232, 134, 26, 0.4)",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.9rem",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "rgba(232, 134, 26, 0.15)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold)",
                    marginBottom: "0.5rem",
                  }}
                >
                  <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                [Add Company / Project Photography Here]
              </div>
            </div>

            <div>
              <span className="eyebrow" style={{ color: "var(--gold)" }}>
                {t("AboutPage.whoWeAreEyebrow")}
              </span>
              <h2
                style={{
                  fontFamily: "'Barlow', 'Inter', sans-serif",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  color: "var(--navy)",
                  marginBottom: "1.5rem",
                  lineHeight: "1.1",
                  fontWeight: "900",
                }}
              >
                {t("AboutPage.whoWeAreTitle")}
              </h2>
              <p style={{ color: "var(--muted)", marginBottom: "1.5rem", fontSize: "1.05rem", lineHeight: "1.8" }}>
                {t("AboutPage.whoWeAreDesc1Part1")}
                <strong>{t("AboutPage.whoWeAreDesc1Strong")}</strong>
                {t("AboutPage.whoWeAreDesc1Part2")}
                <strong>{t("AboutPage.whoWeAreDesc1Strong2")}</strong>
                {t("AboutPage.whoWeAreDesc1Part3")}
              </p>
              <p style={{ color: "var(--muted)", marginBottom: "2.5rem", fontSize: "1.05rem", lineHeight: "1.8" }}>
                {t("AboutPage.whoWeAreDesc2")}
              </p>

              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
              >
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      color: "var(--navy)",
                      fontWeight: "700",
                      fontSize: "0.9rem",
                    }}
                  >
                    <CheckCircle size={18} color="var(--gold)" />
                    {t(`AboutPage.whoWeAreFeatures.${idx}`)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section section-muted" style={{ padding: "6rem 0" }}>
        <div className="container" style={{ padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              {t("AboutPage.valuesEyebrow")}
            </span>
            <h2
              style={{
                fontFamily: "'Barlow', 'Inter', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--navy)",
                fontWeight: "900",
                marginTop: "0.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              {t("AboutPage.valuesTitle")}
            </h2>
          </div>

          <div className="about-values-grid">
            {[Award, ShieldCheck, Users, Globe].map((Icon, idx) => {
              return (
                <div key={idx} className="value-card">
                  <div className="value-icon">
                    <Icon size={44} color="var(--gold)" />
                  </div>
                  <h4 style={{ fontSize: "1.3rem", marginBottom: "0.75rem", color: "var(--navy)", fontWeight: "800" }}>
                    {t(`AboutPage.values.${idx}.title`)}
                  </h4>
                  <p style={{ opacity: 0.8, fontSize: "0.95rem", lineHeight: "1.7", color: "var(--muted)", margin: 0 }}>
                    {t(`AboutPage.values.${idx}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
