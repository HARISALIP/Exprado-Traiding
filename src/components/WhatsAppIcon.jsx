import { WhatsAppIconSVG } from "./Icons";
import { contactInfo } from "../assets/siteData";

export default function WhatsAppIcon() {
  const message = "Hello! I would like to know more about Exprado Trading & Contracting Co. services.";
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIconSVG size={30} />
      <span className="tooltip">Chat with us</span>
    </a>
  );
}
