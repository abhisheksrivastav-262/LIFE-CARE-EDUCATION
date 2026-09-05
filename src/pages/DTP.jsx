import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function DTP() {
  return (
    <div>
      <PageHero
        title="DTP (Desktop Publishing)"
        subtitle="Page Layout, Document Publishing, Printing Prep & Graphics Basics"
        category="Creative Skill"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Publishing & Printing</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Desktop Publishing & <br />
                <span className="gradient-text">Print Media Layouts</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Learn how to design books, pamphlets, visiting cards, banners, and magazines with practical hands-on training in publishing software.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📄 PageMaker & Document Composition</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Multi-page layout design, typography, book printing alignment, and page margins.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🖼️ Photoshop Basics for DTP</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Image cropping, color correction, photo enhancement, background removal, and print resolution.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🎨 CorelDraw Vector Graphics</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Logo creation, visiting cards, flex banners, wedding cards, and vector artwork.</p>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="DTP Desktop Publishing" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
