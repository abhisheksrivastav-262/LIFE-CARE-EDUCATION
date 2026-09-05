import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { Palette, CheckCircle2 } from 'lucide-react';

export default function GraphicsDesign() {
  return (
    <div>
      <PageHero
        title="Graphics Design"
        subtitle="Visual Design, Photoshop, Vector Art, Branding & Social Media Graphics"
        category="Creative Course"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Creative Visual Design</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Master Modern Graphic <br />
                <span className="gradient-text">Design Tools & Techniques</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Graphic design is essential across advertising, branding, web media, and social marketing. Learn practical layout design and photo manipulation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🖼️ Adobe Photoshop</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Layering, masking, photo retouching, color grading, and banner graphics.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🎨 Vector Design & Branding</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Logo designing, typography hierarchy, iconography, and vector illustrations.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📱 Social Media & Poster Design</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Creating engaging Instagram/Facebook banners, flyers, posters, and YouTube thumbnails.</p>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="Graphics Design" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
