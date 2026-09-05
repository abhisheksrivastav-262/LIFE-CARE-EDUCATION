import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, MessageCircle, ArrowRight, Sparkles, Award } from 'lucide-react';

export default function CreativeShowcase() {
  const whatsappMsg1 = encodeURIComponent(
    "Hello Life Care Education,\n\nI want to enquire about JAC & CBSE Board Target Batch 2028 (Class 9 & 10) with Shahbaj Sir."
  );

  const whatsappMsg2 = encodeURIComponent(
    "Hello Life Care Education,\n\nI want to enquire about Admissions for Life Care Junior Academy (Class 1 to 5)."
  );

  return (
    <section className="creatives-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Official Admission Announcements</span>
          <h2 className="section-title">
            Current Admission Batches <span className="highlight">& Special Offers</span>
          </h2>
          <p className="section-subtitle">
            Explore our featured academic programs for 2025–26 with expert supervision by Academic Director <strong>Shahbaj Sir</strong>.
          </p>
        </div>

        <div className="creative-showcase-grid">
          {/* Creative 1: Target Batch 2028 */}
          <div className="creative-card">
            <div className="creative-tag" style={{ background: '#fef3c7', color: '#b45309' }}>
              🔥 Special Admission Offer
            </div>

            <div className="creative-img-frame">
              <img
                src="/images/creative-jac-cbse.jpg"
                alt="Life Care Education - JAC & CBSE Board Target Batch 2028 Class 9 and 10 Shahbaj Sir"
                loading="lazy"
              />
            </div>

            <div className="creative-content">
              <h3 className="creative-title">JAC & CBSE Board Target Batch 2028</h3>
              <p className="text-body" style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
                Class 9th & 10th Students • Science & Mathematics Foundation under <strong>Shahbaj Sir (Mathematics Expert)</strong>.
              </p>

              <ul className="creative-points">
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>First 50 Students Admission FREE!</strong></span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Up to 50% OFF</strong> on Course Fees</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Science & Maths: Basic to Advanced Level Preparation</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Personal Attention in Small Batches + Performance Analysis</span>
                </li>
              </ul>

              <div className="creative-cta">
                <a
                  href={`https://wa.me/916200093379?text=${whatsappMsg1}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <MessageCircle size={16} />
                  <span>Claim 50% Offer</span>
                </a>
                <a href="tel:6200093379" className="btn btn-outline btn-sm">
                  <Phone size={16} />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Creative 2: Junior Academy */}
          <div className="creative-card">
            <div className="creative-tag" style={{ background: '#ede9fe', color: '#6d28d9' }}>
              🌱 Strong Foundation
            </div>

            <div className="creative-img-frame">
              <img
                src="/images/creative-junior-academy.png"
                alt="Life Care Junior Academy Admissions Open Class 1 to 5 Ranchi"
                loading="lazy"
              />
            </div>

            <div className="creative-content">
              <h3 className="creative-title">Life Care Junior Academy (Class 1 to 5)</h3>
              <p className="text-body" style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
                “Sirf Padhai Nahi, Bachchon Ke Future Ki Strong Foundation” — Activity & Skill-based early childhood learning.
              </p>

              <ul className="creative-points">
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>School Learning:</strong> Maths, English, Hindi, EVS Easy & Activity Learning</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Future Skills:</strong> Computer, Digital Awareness & Logical Thinking</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span><strong>Extra Activities:</strong> Creativity, Confidence & Personality Development</span>
                </li>
                <li>
                  <CheckCircle2 size={18} />
                  <span>Happy & Safe Environment with Individual Student Attention</span>
                </li>
              </ul>

              <div className="creative-cta">
                <a
                  href={`https://wa.me/916200093379?text=${whatsappMsg2}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <MessageCircle size={16} />
                  <span>Enquire Junior Academy</span>
                </a>
                <a href="tel:6200093379" className="btn btn-outline btn-sm">
                  <Phone size={16} />
                  <span>Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
