import { whyChooseItems, stats } from "../assets/siteData";
import SectionHeading from "./SectionHeading";

export default function WhyChooseUs() {
  return (
    <section className="section" style={{ background: "white", padding: "6rem 0" }}>
      <div className="container">
        <div className="why-grid">
          {/* Left: text content */}
          <div>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              WHY CHOOSE US
            </span>
            <h2
              style={{
                fontFamily: "'Barlow', 'Inter', sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--navy)",
                marginBottom: "1.5rem",
                lineHeight: "1.1",
                fontWeight: "900",
                letterSpacing: "-0.02em",
              }}
            >
              Your Project,
              <br />
              Our Commitment
            </h2>
            <p
              style={{
                color: "var(--muted)",
                marginBottom: "2.5rem",
                fontSize: "1.05rem",
                lineHeight: "1.7",
              }}
            >
              EXPRADO TRADING & CONTRACTING CO. is a 100% Saudi-owned enterprise executing
              multidisciplinary infrastructure, industrial, and commercial projects across the Kingdom.
              Our integrated service model ensures every project benefits from civil, electrical, and
              mechanical expertise — all under one responsible contractor.
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
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: stats card */}
          <div>
            <div className="stats-card-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card-item">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1.5rem",
                background: "rgba(232, 134, 26, 0.1)",
                borderRadius: "16px",
                border: "1px solid rgba(232, 134, 26, 0.25)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "var(--gold)",
                  fontWeight: "700",
                  fontSize: "0.9rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Supporting KSA Infrastructure · Vision 2030 Aligned
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
