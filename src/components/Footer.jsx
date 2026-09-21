import { Phone, Globe, Mail, MapPin } from "lucide-react";
import { contactInfo } from "../assets/siteData";
import { WhatsAppIconSVG } from "./Icons";
import { LinkedInIcon } from "./Icons";

export default function Footer({ navigateTo }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); navigateTo("home"); }}
              style={{ display: "inline-block", marginBottom: "1.25rem", textDecoration: "none" }}
              aria-label="Exprado — Home"
            >
              {/* Text logo — replace with <img> when actual logo is available */}
              <div
                style={{
                  fontFamily: "'Barlow', 'Inter', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: "900",
                  letterSpacing: "-0.02em",
                  color: "var(--navy)",
                }}
              >
                EX<span style={{ color: "var(--gold)" }}>PRADO</span>
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  fontWeight: "700",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--navy)",
                  marginTop: "2px",
                }}
              >
                Trading & Contracting Co.
              </div>
            </a>
            <p>
              A 100% Saudi-owned engineering and contracting company executing
              multidisciplinary infrastructure, industrial, and commercial projects
              across the Kingdom of Saudi Arabia. Aligned with Saudi Vision 2030.
            </p>

            <div className="footer-contact-list" style={{ marginTop: "1.5rem" }}>
              <a href={`tel:${contactInfo.whatsapp}`}>
                <Phone size={16} style={{ color: "var(--gold)" }} />
                {contactInfo.phone}
              </a>
              <a
                href={`https://${contactInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={16} style={{ color: "var(--gold)" }} />
                {contactInfo.website}
              </a>
              <div>
                <Mail size={16} style={{ color: "var(--gold)" }} />
                <span style={{ color: "var(--muted)", fontStyle: "italic", fontSize: "0.875rem" }}>
                  {contactInfo.email}
                </span>
              </div>
              <div>
                <MapPin size={16} style={{ color: "var(--gold)" }} />
                <span style={{ color: "var(--muted)", fontStyle: "italic", fontSize: "0.875rem" }}>
                  {contactInfo.address}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); navigateTo("home"); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateTo("about"); }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateTo("services"); }}>Our Services</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo("contact"); }}>Contact</a></li>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); navigateTo("privacy"); }}>Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); navigateTo("terms"); }}>Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3>Service Divisions</h3>
            <ul className="footer-links">
              <li>Civil Construction</li>
              <li>Electrical & Instrumentation</li>
              <li>Mechanical & Steel</li>
              <li>Asphalt & Paving</li>
              <li>Scaffolding & Support</li>
              <li>Waterproofing</li>
              <li>Equipment & Logistics</li>
              <li>Manpower & Trading</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact Us</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hello EXPRADO, I have an inquiry.")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  fontWeight: "700",
                  color: "#25D366",
                  fontSize: "0.95rem",
                }}
              >
                <WhatsAppIconSVG size={18} />
                WhatsApp Chat
              </a>

              <div style={{ fontSize: "0.875rem", color: "var(--muted)" }}>
                <strong style={{ color: "var(--navy)", display: "block", marginBottom: "0.2rem" }}>
                  {contactInfo.representative}
                </strong>
                {contactInfo.title}
              </div>

              <div
                style={{
                  marginTop: "0.5rem",
                  padding: "1rem",
                  background: "rgba(232, 134, 26, 0.08)",
                  borderRadius: "12px",
                  border: "1px solid rgba(232, 134, 26, 0.2)",
                  fontSize: "0.8rem",
                  color: "var(--navy)",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                🇸🇦 100% Saudi Owned<br />Vision 2030 Aligned
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); navigateTo("privacy"); }}>
              Privacy Policy
            </a>
            <span className="divider">|</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); navigateTo("terms"); }}>
              Terms & Conditions
            </a>
            <span className="divider">|</span>
            <a href="#services" onClick={() => navigateTo("services")}>
              Our Services
            </a>
          </div>
          <p>
            Copyright © {currentYear} EXPRADO TRADING & CONTRACTING CO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
