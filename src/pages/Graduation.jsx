import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { GraduationCap, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export default function Graduation() {
  return (
    <div>
      <PageHero
        title="Graduation & College-Oriented Academic Support"
        subtitle="Academic Tuition, Concept Foundation & Career Skill Alignment for College Students"
        category="Higher Education"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Graduation Level Guidance</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Academic Tuition & <span className="highlight">Career Skill Guidance</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Life Care Education provides specialized academic support, subject tutoring, and skill development for undergraduate students pursuing Bachelor degree courses in Ranchi.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>Subject Tuition Support</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Academic clarification in core streams including Mathematics, Accounts, Economics, and Computer Science.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>Career Skill Enhancement</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Parallel training in Tally Prime, Graphic Design, Animation, Java & AI tools to build job readiness.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>Flexible Timings</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Batches structured around college lecture schedules for maximum convenience.</p>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="Graduation / College Student" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
