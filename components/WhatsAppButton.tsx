// src/components/WhatsAppButton.tsx

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9987175449"
      target="_blank"
      className="
      fixed
      bottom-6
      right-6
      bg-green-500
      text-white
      p-4
      rounded-full
      shadow-xl
      text-3xl
      z-50
      "
    >
      <FaWhatsapp />
    </a>
  );
}
