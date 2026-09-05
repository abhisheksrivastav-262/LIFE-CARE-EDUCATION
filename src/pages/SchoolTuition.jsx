import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { BookOpen, CheckCircle2, Award, Users, Brain, Shield } from 'lucide-react';

export default function SchoolTuition() {
  return (
    <div>
      <PageHero
        title="School Tuition (Class 6 to 12)"
        subtitle="CBSE, ICSE & JAC Board Tuition for Schooling & Non-Schooling Students"
        category="Academic Program"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Academic Foundations</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Comprehensive School Tuition <br />
                <span className="gradient-text">for Class 6 to 12</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Life Care Education offers dedicated coaching for students from Class 6 to Class 12 across all major recognized education boards in Ranchi.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12, borderLeft: '4px solid var(--brand-primary)' }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>CBSE, ICSE & JAC Boards Supported</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Tailored syllabus coverage strictly aligned with official board exam patterns and guidelines.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12, borderLeft: '4px solid var(--gold)' }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>Schooling & Non-Schooling Students</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Special flexible morning and evening batch timings for private and non-schooling candidates.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12, borderLeft: '4px solid var(--brand-primary)' }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>Core Subjects Covered</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Mathematics (by Shahbaj Sir), Physics, Chemistry, Biology, English, Hindi, Social Science & Computer.</p>
                </div>
              </div>

              <div className="creative-card" style={{ marginBottom: 24 }}>
                <h4 style={{ fontWeight: 800, color: 'var(--purple-950)', marginBottom: 8 }}>Key Pedagogical Pillars:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.9375rem' }}>
                  <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> 100% Concept Building & Doubt Resolution</li>
                  <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> Weekly Chapter Tests & Performance Tracking</li>
                  <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> Individual Attention in Small Batch Sizes</li>
                  <li style={{ display: 'flex', gap: 8 }}><CheckCircle2 size={18} color="#6d28d9" /> Revision Sessions & Sample Paper Practice</li>
                </ul>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="School Tuition (Class 6-12)" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
