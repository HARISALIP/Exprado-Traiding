import SectionHeading from "./SectionHeading";

export default function BrandExperience() {
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
          <div style={{ padding: "4rem 3.5rem", textAlign: "center" }}>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              WHO WE ARE
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
              EXPRADO TRADING &amp; CONTRACTING CO.
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
              A <strong style={{ color: "var(--navy)" }}>100% Saudi-owned enterprise</strong> executing
              multidisciplinary infrastructure, industrial, and commercial projects across the Kingdom of
              Saudi Arabia. Our mission is to support KSA infrastructure development through world-class
              civil contracting, electrical contracting, mechanical contracting, and trading solutions —
              delivering <strong style={{ color: "var(--navy)" }}>100% Local Value &amp; Quality Standard</strong> aligned
              with <strong style={{ color: "var(--navy)" }}>Saudi Vision 2030</strong>.
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
                    {pillar.label}
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
                    {pillar.desc}
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
