import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { Code, CheckCircle2 } from 'lucide-react';

export default function JavaProgramming() {
  return (
    <div>
      <PageHero
        title="Java Programming Fundamentals"
        subtitle="Object-Oriented Programming (OOPs), Logic Building & Application Foundations"
        category="Programming"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Software Logic</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Master Core Java & <br />
                <span className="gradient-text">Logic Building Principles</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Java is one of the most reliable and widely taught programming languages in school curricula (ICSE/CBSE/JAC) and college computer courses.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>☕ Java Syntax & Variables</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Data types, operators, conditional statements (if-else, switch), and loops (for, while).</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🧩 Object-Oriented Concepts (OOPs)</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Classes, objects, encapsulation, inheritance, polymorphism, and abstraction.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📊 Arrays & Exception Handling</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>1D/2D arrays, string manipulation, method overloading, and basic error handling.</p>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="Java Programming" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
