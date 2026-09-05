import React from 'react';
import PageHero from '../components/PageHero';
import CreativeShowcase from '../components/CreativeShowcase';
import EnquiryForm from '../components/EnquiryForm';
import { Award, CheckCircle2, Flame } from 'lucide-react';

export default function BoardPreparation() {
  return (
    <div>
      <PageHero
        title="Board Examination Preparation"
        subtitle="JAC & CBSE Board Target Batch 2028 • Class 9th & 10th Special Science & Mathematics"
        category="Target Batch"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', marginBottom: 60 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fef3c7', color: '#b45309', padding: '6px 14px', borderRadius: 20, fontWeight: 700, fontSize: '0.8125rem', marginBottom: 12 }}>
                <Flame size={16} /> Target Batch 2028 Admission Open
              </div>

              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', marginBottom: 16 }}>
                Class 9 & 10 Board Mastery <br />
                <span className="gradient-text">Under Shahbaj Sir</span>
              </h2>

              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Prepare for matriculation and high board percentages with structured coaching in <strong>Science & Mathematics</strong> from basic to advanced levels.
              </p>

              <div className="card-purple" style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--purple-950)', marginBottom: 12 }}>
                  🎁 Special Admission Offers Announced:
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1rem', fontWeight: 700, color: '#b45309' }}>
                    <CheckCircle2 size={20} color="#f59e0b" /> FIRST 50 STUDENTS ADMISSION FREE!
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '1rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                    <CheckCircle2 size={20} color="#6d28d9" /> COURSE FEE UP TO 50% OFF
                  </div>
                </div>
              </div>

              <h4 style={{ fontWeight: 700, color: 'var(--purple-950)', marginBottom: 12 }}>Kya Milega Aapko?</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: '0.9375rem' }}>
                <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> Science & Maths Basic to Advanced</li>
                <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> Doubt Clearing Sessions</li>
                <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> 100% Concept Clarity</li>
                <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> Board Exam Pattern Based Prep</li>
                <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> Regular Tests & Analysis</li>
                <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> Small Batch Personal Attention</li>
              </ul>
            </div>

            <div>
              <EnquiryForm defaultCourse="Target Batch 2028 (Class 9-10)" />
            </div>
          </div>

          <CreativeShowcase />
        </div>
      </section>
    </div>
  );
}
