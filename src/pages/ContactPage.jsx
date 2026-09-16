import { useState } from "react";
import { Phone, Mail, MapPin, Globe, Send, User } from "lucide-react";
import { contactInfo } from "../assets/siteData";
import { WhatsAppIconSVG } from "../components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappText = `*New Inquiry — EXPRADO Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || "[not provided]"}%0A*Service:* ${formData.service}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${whatsappText}`;

    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", phone: "", email: "", subject: "", service: "", message: "" });
  };

  return (
    <div className="page-layout">
      {/* Page header */}
      <div
        className="page-header"
        style={{
          padding: "6.5rem 0 4rem",
          background:
            'linear-gradient(rgba(13, 33, 55, 0.9), rgba(13, 33, 55, 0.8)), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--gold)", marginBottom: "0.6rem" }}>
            Get In Touch
          </p>
          <h1>Contact Us</h1>
          <p>
            Reach out to EXPRADO TRADING & CONTRACTING CO. for project inquiries, quotations, or general information.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: "5.5rem 0" }}>
        <div className="contact-split-grid">
          {/* Form */}
          <div className="contact-form-side">
            <h3>Send an Inquiry</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div className="input-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="input-field">
                  <label>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+966 XXXXXXXXX"
                  />
                </div>
              </div>

              <div className="input-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com (optional)"
                />
              </div>

              <div className="input-field">
                <label>Service Division *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select the service you need
                  </option>
                  <option value="Civil Construction & Infrastructure">Civil Construction & Infrastructure</option>
                  <option value="Electrical & Instrumentation (E&I)">Electrical & Instrumentation (E&I)</option>
                  <option value="Mechanical & Steel Fabrication">Mechanical & Steel Fabrication</option>
                  <option value="Asphalt & Paving Contracting">Asphalt & Paving Contracting</option>
                  <option value="Scaffolding & Structural Support">Scaffolding & Structural Support</option>
                  <option value="Waterproofing">Waterproofing</option>
                  <option value="Equipment & Logistics Support">Equipment & Logistics Support</option>
                  <option value="Technical Manpower & Trading">Technical Manpower & Trading</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="input-field">
                <label>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Project Quotation Request"
                />
              </div>

              <div className="input-field">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Describe your project or inquiry..."
                  style={{ resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                className="button button-primary"
                style={{
                  padding: "1.1rem",
                  justifyContent: "center",
                  fontSize: "1rem",
                  width: "100%",
                }}
              >
                Send via WhatsApp <Send size={18} style={{ marginLeft: "0.5rem" }} />
              </button>

              <p
                style={{
                  margin: "0.75rem 0 0",
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  textAlign: "center",
                }}
              >
                Your inquiry will be sent directly to our WhatsApp for a quick response.
              </p>
            </form>
          </div>

          {/* Details */}
          <div className="contact-details-side">
            <div className="detail-item-box">
              <div className="detail-icon">
                <User size={22} />
              </div>
              <div className="detail-text">
                <h4>Lead Representative</h4>
                <p>
                  <strong>{contactInfo.representative}</strong>
                  <br />
                  {contactInfo.title}
                </p>
              </div>
            </div>

            <div className="detail-item-box">
              <div className="detail-icon">
                <Phone size={22} />
              </div>
              <div className="detail-text">
                <h4>Phone / WhatsApp</h4>
                <a href={`tel:${contactInfo.whatsapp}`}>{contactInfo.phone}</a>
              </div>
            </div>

            <div className="detail-item-box">
              <div className="detail-icon">
                <Globe size={22} />
              </div>
              <div className="detail-text">
                <h4>Website</h4>
                <a
                  href={`https://${contactInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <div className="detail-item-box">
              <div className="detail-icon">
                <Mail size={22} />
              </div>
              <div className="detail-text">
                <h4>Email</h4>
                <p style={{ color: "var(--muted)", fontStyle: "italic", fontSize: "0.875rem" }}>
                  {contactInfo.email}
                </p>
              </div>
            </div>

            <div className="detail-item-box">
              <div className="detail-icon">
                <MapPin size={22} />
              </div>
              <div className="detail-text">
                <h4>Office Address</h4>
                <p style={{ color: "var(--muted)", fontStyle: "italic", fontSize: "0.875rem" }}>
                  {contactInfo.address}
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hello EXPRADO, I have an inquiry about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                background: "#25D366",
                color: "white",
                padding: "1.1rem",
                borderRadius: "var(--radius-md)",
                fontWeight: "700",
                fontSize: "1rem",
                textDecoration: "none",
                transition: "filter 0.2s",
                marginTop: "0.5rem",
              }}
            >
              <WhatsAppIconSVG size={22} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="container" style={{ paddingBottom: "5rem" }}>
        <h3 style={{ fontSize: "1.6rem", color: "var(--navy)", marginBottom: "1.5rem", fontWeight: "800" }}>
          Location
        </h3>
        <div
          className="placeholder-box"
          style={{
            height: "400px",
            borderRadius: "var(--radius-lg)",
            fontSize: "0.95rem",
          }}
        >
          [Google Maps Location Placeholder — Add office address to embed map]
        </div>
      </div>
    </div>
  );
}
