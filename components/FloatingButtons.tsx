"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/33608274902?text=Bonjour%2C%20je%20souhaite%20un%20devis%20pour%20des%20travaux%20%C3%A9lectriques."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Nous contacter sur WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Phone Button (Mobile only) */}
      <a
        href="tel:0608274902"
        className="phone-float"
        aria-label="Appeler CD-ELEC"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
}
