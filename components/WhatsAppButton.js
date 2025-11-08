import Link from "next/link";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

const WHATSAPP_NUMBER = "917200841581"; // Trimsel's WhatsApp contact in international format without +
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hi Trimsel team! I'd like to chat about a project."
);

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Trimsel on WhatsApp"
      className="whatsapp-floating"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </Link>
  );
}
