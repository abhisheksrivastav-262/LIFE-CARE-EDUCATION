import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { Cpu, CheckCircle2 } from 'lucide-react';

export default function AITechnology() {
  return (
    <div>
      <PageHero
        title="AI & Technology Awareness"
        subtitle="Modern AI Fundamentals, Prompt Engineering & Digital Productivity Tools"
        category="Tech Skill"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Future Skills</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Understand Modern AI & <br />
                <span className="gradient-text">Smart Digital Workflows</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Artificial Intelligence is transforming how we learn, code, and work. Gain practical awareness of modern AI tools to boost academic productivity and tech literacy.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🤖 AI Tools & Generative AI Basics</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Understanding LLMs, AI assistants, ChatGPT, and automated research helpers.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>✍️ Prompt Engineering Fundamentals</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Writing clear instructions for AI tools to generate text, summaries, code, and ideas.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>⚡ Digital Productivity & Automation</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Combining computer skills with smart technology to streamline daily tasks.</p>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="AI & Modern Technology" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
