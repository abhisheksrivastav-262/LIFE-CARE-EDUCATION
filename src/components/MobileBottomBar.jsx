import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Send } from 'lucide-react';

export default function MobileBottomBar() {
  const defaultMsg = encodeURIComponent(
    "Hello Life Care Education,\n\nI would like to enquire about admission details."
  );

  return (
    <div className="mobile-cta-bar">
      <div className="cta-buttons">
        <a href="tel:6200093379" className="cta-btn call">
          <Phone size={18} />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/916200093379?text=${defaultMsg}`}
          target="_blank"
          rel="noreferrer"
          className="cta-btn whatsapp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>
        <Link to="/admissions" className="cta-btn enquire">
          <Send size={18} />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  );
}
