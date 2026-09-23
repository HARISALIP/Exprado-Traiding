import { ShieldCheck, HardHat, AlertTriangle, ClipboardCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useTranslation } from "react-i18next";

const safetyPoints = [
  {
    icon: ShieldCheck,
    title: "Strict Site Safety Standards",
    description:
      "All service divisions operate under strict site safety protocols, ensuring worker protection and regulatory compliance on every project.",
  },
  {
    icon: HardHat,
    title: "Certified Scaffold Inspection",
    description:
      "Our Scaffolding & Structural Support division provides certified scaffold inspection services, confirming structural integrity before and during use.",
  },
  {
    icon: ClipboardCheck,
    title: "Safety-Focused Operations",
    description:
      "Safety is embedded in every aspect of our operations — from equipment logistics to electrical installations and civil earthworks.",
  },
  {
    icon: AlertTriangle,
    title: "Compliance-Driven Delivery",
    description:
      "Projects are executed in accordance with applicable KSA regulations and industry standards across all 8 service divisions.",
  },
];

export default function SafetySection() {
  const { t } = useTranslation();
  return (
    <section
      className="section"
      style={{ background: "var(--surface)", padding: "6rem 0" }}
    >
      <div className="container">
        <SectionHeading
          eyebrow={t("SafetySection.eyebrow")}
          title={t("SafetySection.title")}
          description={t("SafetySection.description")}
          light={false}
        />

        <div className="safety-grid">
          {safetyPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="safety-card">
                <div className="safety-icon">
                  <Icon size={28} />
                </div>
                <h4>{t(`SafetySection.points.${idx}.title`)}</h4>
                <p>{t(`SafetySection.points.${idx}.description`)}</p>
              </div>
            );
          })}
        </div>

        {/* Placeholder for certifications */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "2rem",
            background: "white",
            borderRadius: "16px",
            border: "1px dashed var(--border)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--muted)",
              fontSize: "0.875rem",
              fontStyle: "italic",
            }}
          >
            {t("SafetySection.certificationPlaceholder")}
          </p>
        </div>
      </div>
    </section>
  );
}
