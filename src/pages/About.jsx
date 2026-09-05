import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import QuickStats from '../components/QuickStats';
import WhyChooseUs from '../components/WhyChooseUs';
import { Award, BookOpen, CheckCircle2, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div>
      <PageHero
        title="About Life Care Education"
        subtitle="Empowering Students in Ranchi with Academic Foundation & Professional Career Skills"
        category="About Us"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">Our Educational Philosophy</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Academic Foundation <br />
                <span className="gradient-text">+ Career Readiness</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 16 }}>
                At <strong>Life Care Education</strong>, located in P.P. Compound near Guru Nanak School, Ranchi, we believe every student deserves personalized attention, strong conceptual clarity, and practical skill training.
              </p>
              <p className="text-body" style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
                Under the visionary guidance of Academic Director <strong>Shahbaj Sir (Mathematics Expert)</strong>, our institute provides a complete education ecosystem covering school tuition (Class 1 to 12), board examination target coaching (JAC, CBSE, ICSE), intermediate stream guidance (Arts, Commerce, Science), and professional computer career programs.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
                <div className="card-purple" style={{ padding: 16 }}>
                  <ShieldCheck size={24} color="#6d28d9" style={{ marginBottom: 6 }} />
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>Concept Building</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Focus on understanding core fundamentals rather than rote memorization.</p>
                </div>
                <div className="card-purple" style={{ padding: 16 }}>
                  <Award size={24} color="#f59e0b" style={{ marginBottom: 6 }} />
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>Small Batches</h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Limited batch strength to ensure every student receives personal guidance.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 14 }}>
                <Link to="/admissions" className="btn btn-primary">
                  <span>Enquire for Admission</span>
                </Link>
                <a href="tel:6200093379" className="btn btn-outline">
                  <Phone size={16} />
                  <span>Call 6200093379</span>
                </a>
              </div>
            </div>

            <div>
              <div className="creative-card">
                <div className="creative-img-frame" style={{ marginBottom: 16 }}>
                  <img
                    src="/images/creative-jac-cbse.jpg"
                    alt="Shahbaj Sir Life Care Education Ranchi Director"
                  />
                </div>
                <div style={{ padding: '0 8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--purple-950)' }}>Shahbaj Sir</h3>
                  <div style={{ color: 'var(--gold-dark)', fontWeight: 700, fontSize: '0.875rem', marginBottom: 8 }}>
                    Founder & Academic Director (Mathematics Expert)
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    “Our goal is to build strong mathematical and scientific concepts in every student while equipping them with practical digital skills to excel in modern careers.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickStats />
      <WhyChooseUs />
    </div>
  );
}
