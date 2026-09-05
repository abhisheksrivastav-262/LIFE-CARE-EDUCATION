import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { CheckCircle2 } from 'lucide-react';

export default function Commerce() {
  return (
    <div>
      <PageHero
        title="Commerce Stream (Class 11 & 12)"
        subtitle="Accountancy, Business Studies, Economics & Computerized Accounting Coaching"
        category="Stream"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Intermediate Commerce</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Master Financial & <br />
                <span className="gradient-text">Business Fundamentals</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Commerce education forms the backbone of corporate careers, accounting, banking, and entrepreneurship. At Life Care Education, Ranchi, we offer practical clarity in numerical accounts and theory.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📊 Accountancy</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Financial accounting, partnership accounts, company accounts, and balance sheet prep.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>💼 Business Studies</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Management principles, business environment, marketing, and corporate finance.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📈 Economics</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Microeconomics, macroeconomics, Indian economic development, and statistics.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>💻 Tally & E-Accounting Integration</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Option to combine commerce tuition with practical Tally Prime computer training.</p>
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
