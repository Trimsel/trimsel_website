import Link from "next/link";
import { useRouter } from "next/router";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";
import { trackEvent } from "../lib/analytics";

const WHATSAPP_NUMBER = "917200841581"; // Trimsel&rsquo;s WhatsApp contact in international format without +
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hi Trimsel team! I&rsquo;d like to chat about a project."
);

export default function WhatsAppButton() {
  const router = useRouter();
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`;
  const handleClick = () => {
    trackEvent("whatsapp_click", {
      event_category: "lead",
      event_label: router?.pathname || "global",
    });
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Trimsel on WhatsApp"
      className="whatsapp-floating"
      onClick={handleClick}
    >
      <FaWhatsapp className="whatsapp-icon" />
    </Link>
  );
}
