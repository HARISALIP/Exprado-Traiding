import { ArrowRight, Phone, Globe, Mail, User } from "lucide-react";
import { contactInfo } from "../assets/siteData";
import { WhatsAppIconSVG } from "./Icons";

export default function CtaSection({ navigateTo }) {
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
    "Hello, I would like to get a quote from EXPRADO TRADING & CONTRACTING CO."
  )}`;

  return (
    <section className="cta-section">
      <div className="cta-glow cta-glow-right" />
      <div className="cta-glow cta-glow-left" />

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        <div className="cta-split-grid">
          {/* Left: CTA text */}
          <div className="cta-text-side">
            <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: "1rem", letterSpacing: "0.2em" }}>
              START YOUR PROJECT
            </p>
            <h2>
              Ready to Build with Exprado?
            </h2>
            <p>
              Contact our team today for project inquiries, quotations, or to learn more about our
              8 integrated service divisions across KSA. We are committed to delivering
              100% Local Value & Quality Standard.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary button-large"
              >
                <WhatsAppIconSVG size={20} />
                WhatsApp Us
              </a>
              <button
                onClick={() => navigateTo("contact")}
                className="button button-secondary button-large"
              >
                Contact Page <ArrowRight size={18} className="icon-move" />
              </button>
            </div>
          </div>

          {/* Right: Contact info cards */}
          <div className="cta-contact-info">
            <div className="cta-contact-item">
              <div className="cta-contact-item-icon">
                <User size={22} />
              </div>
              <div className="cta-contact-item-text">
                <strong>Lead Representative</strong>
                <span>
                  {contactInfo.representative} — {contactInfo.title}
                </span>
              </div>
            </div>

            <div className="cta-contact-item">
              <div className="cta-contact-item-icon">
                <Phone size={22} />
              </div>
              <div className="cta-contact-item-text">
                <strong>Phone / WhatsApp</strong>
                <a href={`tel:${contactInfo.whatsapp}`}>{contactInfo.phone}</a>
              </div>
            </div>

            <div className="cta-contact-item">
              <div className="cta-contact-item-icon">
                <Globe size={22} />
              </div>
              <div className="cta-contact-item-text">
                <strong>Website</strong>
                <a
                  href={`https://${contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <div className="cta-contact-item">
              <div className="cta-contact-item-icon">
                <Mail size={22} />
              </div>
              <div className="cta-contact-item-text">
                <strong>Email</strong>
                <span style={{ color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}>
                  {contactInfo.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
