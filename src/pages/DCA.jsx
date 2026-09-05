import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { Laptop, CheckCircle2, Award } from 'lucide-react';

export default function DCA() {
  return (
    <div>
      <PageHero
        title="DCA (Diploma in Computer Applications)"
        subtitle="Computer Fundamentals, Office Productivity & Practical Digital Skills"
        category="Computer Course"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Computer Foundation</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Master Essential <br />
                <span className="gradient-text">Computer & Office Skills</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                DCA (Diploma in Computer Applications) is the ideal foundational course for students and job-seekers wanting comprehensive knowledge of operating computers and office software.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>💻 Computer Fundamentals & Operating Systems</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Hardware awareness, Windows OS navigation, file management, and system maintenance.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📝 MS Word (Document Processing)</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Creating professional documents, formatting, tables, mail merge, and official correspondence.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📊 MS Excel (Spreadsheet & Data Analysis)</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Worksheets, formulas, functions (VLOOKUP, IF), charts, data filtering, and reporting.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🌐 Internet, Email & Cyber Awareness</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Web browsing, online transactions, email etiquette, cloud storage, and cyber security basics.</p>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="DCA Computer Course" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
