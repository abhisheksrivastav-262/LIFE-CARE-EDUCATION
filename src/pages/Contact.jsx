import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { Phone, MapPin, MessageCircle, Clock, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Contact Us & Visit Ranchi Campus"
        subtitle="We are located at P.P. Compound, Near Guru Nanak School, Ranchi"
        category="Contact Us"
      />

      <section className="section-pad">
        <div className="container">
          <div className="contact-grid">
            {/* Left Info Panel */}
            <div className="contact-info-panel">
              <h3>LIFE CARE EDUCATION</h3>
              <p>“A Flight for Career” — Academic Tuition & Professional Computer Institute</p>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <MapPin size={22} />
                </div>
                <div className="contact-detail-text">
                  <h4>Campus Address</h4>
                  <p>
                    P.P. Compound, Near Guru Nanak School, <br />
                    Ranchi, Jharkhand, India
                  </p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Phone size={22} />
                </div>
                <div className="contact-detail-text">
                  <h4>Phone & Enquiry Line</h4>
                  <p>
                    <a href="tel:6200093379" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fcd34d' }}>
                      6200093379
                    </a>
                  </p>
                  <small style={{ color: 'var(--brand-lavender)' }}>Founder & Academic Director: Shahbaj Sir</small>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <MessageCircle size={22} />
                </div>
                <div className="contact-detail-text">
                  <h4>Direct WhatsApp</h4>
                  <p>
                    <a
                      href="https://wa.me/916200093379?text=Hello%20Life%20Care%20Education%2C%20I%20want%20to%20visit%20the%20campus."
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#25D366', fontWeight: 700 }}
                    >
                      +91 6200093379 (Click to Chat)
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Clock size={22} />
                </div>
                <div className="contact-detail-text">
                  <h4>Institute Timings</h4>
                  <p>Monday – Saturday: 7:00 AM to 7:00 PM</p>
                </div>
              </div>

              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="tel:6200093379" className="btn btn-gold btn-sm">
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=P.P.+Compound,+Near+Guru+Nanak+School,+Ranchi,+Jharkhand"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-white btn-sm"
                >
                  <Navigation size={16} /> Get Directions
                </a>
              </div>

              {/* Map Container */}
              <div className="map-embed-container">
                <iframe
                  title="Life Care Education Ranchi Location Map"
                  src="https://maps.google.com/maps?q=PP+Compound+Ranchi+Guru+Nanak+School&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Form Panel */}
            <div>
              <EnquiryForm defaultCourse="General Admission Query" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
