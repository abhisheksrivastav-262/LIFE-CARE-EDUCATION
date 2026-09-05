import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Mail,
  GraduationCap,
  MessageCircle,
  ChevronRight,
  ExternalLink,
  Award
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Identity */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div className="brand-icon-box" style={{ width: 40, height: 40 }}>
                <GraduationCap size={22} />
              </div>
              <div>
                <h2>LIFE CARE EDUCATION</h2>
                <div className="footer-tagline">“A Flight for Career”</div>
              </div>
            </div>
            <p className="footer-about">
              Empowering students in Ranchi with comprehensive school tuition, rigorous board examination mentoring, intermediate stream coaching, and high-demand computer & technology skills.
            </p>
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: 8, fontSize: '0.8125rem' }}>
                <Award size={16} color="#f59e0b" />
                <span>Founder & Academic Director: <strong>Shahbaj Sir</strong> (Maths Expert)</span>
              </div>
            </div>
            <div className="footer-social-links">
              <a
                href="https://wa.me/916200093379"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-circle"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div>
            <h4 className="footer-heading">Academic Courses</h4>
            <ul className="footer-links">
              <li>
                <Link to="/school-tuition"><ChevronRight size={14} /> School Tuition (Class 6–12)</Link>
              </li>
              <li>
                <Link to="/board-preparation"><ChevronRight size={14} /> Target Batch 2028 (Class 9 & 10)</Link>
              </li>
              <li>
                <Link to="/intermediate"><ChevronRight size={14} /> Intermediate (Class 11 & 12)</Link>
              </li>
              <li>
                <Link to="/science"><ChevronRight size={14} /> Science Stream (Phy, Chem, Maths, Bio)</Link>
              </li>
              <li>
                <Link to="/commerce"><ChevronRight size={14} /> Commerce Stream (Accounts, B.St)</Link>
              </li>
              <li>
                <Link to="/arts"><ChevronRight size={14} /> Arts Stream (History, Pol Sci, Geo)</Link>
              </li>
              <li>
                <Link to="/graduation"><ChevronRight size={14} /> Graduation & College Prep</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Professional Courses */}
          <div>
            <h4 className="footer-heading">Career Skills Lab</h4>
            <ul className="footer-links">
              <li>
                <Link to="/dca"><ChevronRight size={14} /> DCA (Diploma Comp. App.)</Link>
              </li>
              <li>
                <Link to="/dtp"><ChevronRight size={14} /> DTP & Document Publishing</Link>
              </li>
              <li>
                <Link to="/tally"><ChevronRight size={14} /> Tally Prime & E-Accounting</Link>
              </li>
              <li>
                <Link to="/graphics-design"><ChevronRight size={14} /> Graphic Designing</Link>
              </li>
              <li>
                <Link to="/animation-vfx"><ChevronRight size={14} /> Animation & VFX Multimedia</Link>
              </li>
              <li>
                <Link to="/ai-technology"><ChevronRight size={14} /> AI Tools & Technology</Link>
              </li>
              <li>
                <Link to="/java-programming"><ChevronRight size={14} /> Java Programming & OOPs</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Campus */}
          <div>
            <h4 className="footer-heading">Ranchi Campus</h4>
            <ul className="footer-links" style={{ gap: 14 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={18} color="#c4b5fd" style={{ flexShrink: 0, marginTop: 4 }} />
                <span>P.P. Compound, Near Guru Nanak School, Ranchi, Jharkhand, India</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Phone size={18} color="#c4b5fd" style={{ flexShrink: 0 }} />
                <a href="tel:6200093379" style={{ color: '#fcd34d', fontWeight: 700 }}>+91 6200093379</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <MessageCircle size={18} color="#c4b5fd" style={{ flexShrink: 0 }} />
                <a href="https://wa.me/916200093379" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
              </li>
            </ul>

            <div style={{ marginTop: 20 }}>
              <Link to="/admissions" className="btn btn-gold btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Admission Enquiry
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {currentYear} <strong>Life Care Education</strong>. All rights reserved. “A Flight for Career”.
          </div>
          <div>
            CBSE • ICSE • JAC Board Tuition & Professional Computer Skill Center | Ranchi, Jharkhand
          </div>
        </div>
      </div>
    </footer>
  );
}
