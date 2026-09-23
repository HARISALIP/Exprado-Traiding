import { useState, useEffect } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { contactInfo } from "../assets/siteData";
import { useTranslation } from "react-i18next";

// Construction/engineering hero images from Unsplash (clearly labeled as reference images)
const heroImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80",
];

export default function Hero({ navigateTo }) {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInquiryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry — EXPRADO Website*%0A%0A*Name:* ${inquiryData.name}%0A*Phone:* ${inquiryData.phone}%0A*Service Needed:* ${inquiryData.service}%0A*Message:* ${inquiryData.message}`;
    const url = `https://wa.me/${contactInfo.whatsapp}?text=${text}`;
    window.open(url, "_blank");
    setInquiryData({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="home" className="hero-wrapper">
      <div className="hero">
        {/* Background image with overlay */}
        <div
          className="hero-media"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(13, 33, 55, 0.82) 0%, rgba(13, 33, 55, 0.55) 60%, rgba(13, 33, 55, 0.75) 100%), url(${heroImages[currentImageIndex]})`,
            transition: "background-image 1.5s ease-in-out",
          }}
        />

        {/* Hero content */}
        <div
          className="container hero-content"
          style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
        >
          <div className="hero-copy">
            <span className="eyebrow" style={{ color: "var(--gold)", marginBottom: "1rem" }}>
              {t("Hero.eyebrow")}
            </span>
            <h1 className="hero-title">
              {t("Hero.titleBuilding")}
              <span style={{ color: "var(--gold)" }}>{t("Hero.titleKSA")}</span>
              <br />
              {t("Hero.titleInfrastructure")}
              <br />
              {t("Hero.titleFuture")}
            </h1>
            <p className="hero-description">
              {t("Hero.description")}
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary button-large"
                onClick={() => navigateTo("services")}
              >
                {t("Hero.exploreServices")} <ArrowRight size={18} className="icon-move" />
              </button>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hello, I would like to request a quote from Exprado Trading & Contracting Co.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary button-large"
              >
                <Phone size={18} />
                {t("Hero.requestQuote")}
              </a>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.5rem",
            zIndex: 5,
          }}
        >
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              style={{
                width: idx === currentImageIndex ? "28px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: idx === currentImageIndex ? "var(--gold)" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Inquiry bar — adapted from Delta Flygo's conversion form */}
      <div className="hero-conversion-bar">
        <div className="container">
          <form className="conversion-form-grid" onSubmit={handleInquirySubmit}>
            <div className="form-group">
              <label>{t("Hero.form.yourName")}</label>
              <input
                type="text"
                name="name"
                value={inquiryData.name}
                onChange={handleInputChange}
                placeholder={t("Hero.form.fullName")}
                required
              />
            </div>

            <div className="form-group">
              <label>{t("Hero.form.phone")}</label>
              <input
                type="tel"
                name="phone"
                value={inquiryData.phone}
                onChange={handleInputChange}
                placeholder={t("Hero.form.phonePlaceholder")}
                required
              />
            </div>

            <div className="form-group">
              <label>{t("Hero.form.serviceNeeded")}</label>
              <select
                name="service"
                value={inquiryData.service}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  {t("Hero.form.selectService")}
                </option>
                <option value="Civil Construction & Infrastructure">{t("Hero.form.services.civil")}</option>
                <option value="Electrical & Instrumentation">{t("Hero.form.services.electrical")}</option>
                <option value="Mechanical & Steel Fabrication">{t("Hero.form.services.mechanical")}</option>
                <option value="Asphalt & Paving">{t("Hero.form.services.asphalt")}</option>
                <option value="Scaffolding & Structural Support">{t("Hero.form.services.scaffolding")}</option>
                <option value="Waterproofing">{t("Hero.form.services.waterproofing")}</option>
                <option value="Equipment & Logistics">{t("Hero.form.services.equipment")}</option>
                <option value="Technical Manpower & Trading">{t("Hero.form.services.manpower")}</option>
                <option value="General Inquiry">{t("Hero.form.services.general")}</option>
              </select>
            </div>

            <div className="form-group">
              <label>{t("Hero.form.briefDescription")}</label>
              <input
                type="text"
                name="message"
                value={inquiryData.message}
                onChange={handleInputChange}
                placeholder={t("Hero.form.briefPlaceholder")}
              />
            </div>

            <div className="form-group submit-group">
              <button
                type="submit"
                className="button button-primary"
              >
                {t("Hero.form.sendInquiry")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
