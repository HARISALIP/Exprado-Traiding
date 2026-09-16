import { ShieldCheck, HardHat, AlertTriangle, ClipboardCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

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
  return (
    <section
      className="section"
      style={{ background: "linear-gradient(135deg, var(--navy-dark), var(--navy))", padding: "6rem 0" }}
    >
      <div className="container">
        <SectionHeading
          eyebrow="Safety & Quality"
          title="Safety is Our Foundation"
          description="We place strong emphasis on site safety across all divisions. Every project is planned and executed with safety at the core."
          light={true}
        />

        <div className="safety-grid">
          {safetyPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="safety-card">
                <div className="safety-icon">
                  <Icon size={28} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Placeholder for certifications */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "2rem",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "16px",
            border: "1px dashed rgba(255,255,255,0.2)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.875rem",
              fontStyle: "italic",
            }}
          >
            [Certification / Accreditation Placeholder — Add official certifications when available]
          </p>
        </div>
      </div>
    </section>
  );
}
