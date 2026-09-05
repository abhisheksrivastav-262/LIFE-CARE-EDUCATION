import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Intermediate() {
  return (
    <div>
      <PageHero
        title="Class 11 & 12 (Intermediate)"
        subtitle="Prepare Today. Perform Better Tomorrow. Science, Commerce & Arts Streams"
        category="Intermediate"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', marginBottom: 60 }}>
            <div>
              <span className="section-label">Senior Secondary Coaching</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Prepare Today. <br />
                <span className="gradient-text">Perform Better Tomorrow.</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                The intermediate years (Class 11 & 12) shape a student's entire career trajectory. At Life Care Education, Ranchi, we offer structured stream coaching for regular school students as well as non-schooling candidates.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <CheckCircle2 size={20} color="#6d28d9" />
                  <span style={{ fontWeight: 600 }}>JAC, CBSE & ICSE Board Alignment</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <CheckCircle2 size={20} color="#6d28d9" />
                  <span style={{ fontWeight: 600 }}>Subject-wise Specialized Faculties</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <CheckCircle2 size={20} color="#6d28d9" />
                  <span style={{ fontWeight: 600 }}>Special Guidance for Non-Schooling / Private Candidates</span>
                </div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <CheckCircle2 size={20} color="#6d28d9" />
                  <span style={{ fontWeight: 600 }}>Comprehensive Board Revision & Sample Tests</span>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="Intermediate Class 11-12" />
            </div>
          </div>

          {/* Streams Grid */}
          <div className="section-header">
            <h3 className="section-title">Explore Intermediate Streams</h3>
          </div>

          <div className="stream-grid">
            <div className="stream-card">
              <div className="stream-icon-badge">🔬</div>
              <h3 className="stream-name">Science Stream</h3>
              <p className="stream-desc">Physics, Chemistry, Mathematics & Biology with numerical and concept clarity.</p>
              <Link to="/science" className="btn btn-primary btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                View Science Details <ArrowRight size={14} />
              </Link>
            </div>

            <div className="stream-card">
              <div className="stream-icon-badge">📊</div>
              <h3 className="stream-name">Commerce Stream</h3>
              <p className="stream-desc">Accountancy, Business Studies, Economics & Business Mathematics.</p>
              <Link to="/commerce" className="btn btn-primary btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                View Commerce Details <ArrowRight size={14} />
              </Link>
            </div>

            <div className="stream-card">
              <div className="stream-icon-badge">📜</div>
              <h3 className="stream-name">Arts Stream</h3>
              <p className="stream-desc">History, Political Science, Geography, Economics & Languages.</p>
              <Link to="/arts" className="btn btn-primary btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                View Arts Details <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
