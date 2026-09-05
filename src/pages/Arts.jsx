import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { CheckCircle2 } from 'lucide-react';

export default function Arts() {
  return (
    <div>
      <PageHero
        title="Arts & Humanities Stream (Class 11 & 12)"
        subtitle="History, Political Science, Geography, Economics & Language Preparation"
        category="Stream"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Intermediate Arts</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Analytical & Humanities <br />
                <span className="gradient-text">Excellence in Ranchi</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Arts and Humanities provide critical analytical thinking and form the foundation for competitive examinations, civil services, law, journalism, and higher academics.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📜 History</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Ancient, Medieval, Modern Indian & World history with structured answer writing.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🏛️ Political Science</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Indian constitution, political theory, international relations, and governance.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🗺️ Geography</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Physical geography, human geography, map work, and environmental studies.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>✍️ Economics & Languages</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>English core, Hindi elective, and economic concepts for board exams.</p>
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
