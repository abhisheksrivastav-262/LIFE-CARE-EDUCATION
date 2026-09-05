import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { CheckCircle2 } from 'lucide-react';

export default function Science() {
  return (
    <div>
      <PageHero
        title="Science Stream (Class 11 & 12)"
        subtitle="Physics, Chemistry, Mathematics & Biology Coaching in Ranchi"
        category="Stream"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Intermediate Science</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Build Master Concepts in <br />
                <span className="gradient-text">Physics, Chem, Maths & Bio</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Science requires deep conceptual understanding and problem-solving speed. Our experienced faculties ensure every topic is explained from basic principles to advanced applications.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📐 Mathematics (by Shahbaj Sir)</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Calculus, Algebra, Trigonometry & Coordinate Geometry mastered step-by-step.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>⚡ Physics</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Mechanics, Electricity, Optics & Modern Physics with numerical problem solving.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🧪 Chemistry</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Physical, Organic & Inorganic chemistry with formula revision and reaction practice.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🧬 Biology</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Botany & Zoology diagrammatic clarity and board exam question strategies.</p>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="Intermediate Class 11-12" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
