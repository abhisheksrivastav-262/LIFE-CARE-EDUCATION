import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const defaultMsg = encodeURIComponent(
    "Hello Life Care Education,\n\nI would like to enquire about admission and course details.\n\nPlease share details."
  );

  return (
    <a
      href={`https://wa.me/916200093379?text=${defaultMsg}`}
      target="_blank"
      rel="noreferrer"
      className="float-whatsapp"
      aria-label="Chat on WhatsApp"
      title="Direct Admission Enquiry on WhatsApp"
    >
      <MessageCircle size={32} color="#ffffff" fill="#ffffff" />
    </a>
  );
}
