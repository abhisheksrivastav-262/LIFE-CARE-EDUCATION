import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { Film, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AnimationVFX() {
  return (
    <div>
      <PageHero
        title="Animation, VFX & Multimedia"
        subtitle="Visual Production, Video Editing, 2D/3D Concepts & Motion Graphics"
        category="Creative Tech"
      />

      <section className="section-pad" style={{ background: '#0f0a1e', color: 'white' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(109,40,217,0.3)', color: '#c4b5fd', padding: '6px 14px', borderRadius: 20, fontSize: '0.8125rem', fontWeight: 700, marginBottom: 12 }}>
                <Sparkles size={16} /> Creative Technology Lab
              </div>
              <h2 className="text-heading-lg" style={{ color: 'white', marginBottom: 16 }}>
                Animation, VFX & <br />
                <span style={{ color: '#fcd34d' }}>Multimedia Production</span>
              </h2>
              <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 24 }}>
                Step into the high-growth field of digital media content creation. Learn video editing, 2D/3D animation basics, motion graphics, and visual effect compositing.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div className="glass-panel" style={{ padding: 18 }}>
                  <h4 style={{ color: '#fcd34d', fontWeight: 700, marginBottom: 4 }}>🎬 Video Editing & Post-Production</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Timeline editing, transitions, color grading, audio synchronization, and export formats.</p>
                </div>
                <div className="glass-panel" style={{ padding: 18 }}>
                  <h4 style={{ color: '#c4b5fd', fontWeight: 700, marginBottom: 4 }}>✨ 2D & 3D Animation Concepts</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Keyframing, timeline animation, character rigging basics, and 3D space fundamentals.</p>
                </div>
                <div className="glass-panel" style={{ padding: 18 }}>
                  <h4 style={{ color: '#fcd34d', fontWeight: 700, marginBottom: 4 }}>💥 Visual Effects (VFX) Compositing</h4>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>Green screen removal (Chroma keying), particle effects, motion tracking, and layering.</p>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--white)', color: 'var(--text-body)', borderRadius: 24, padding: 8 }}>
              <EnquiryForm defaultCourse="Animation & VFX" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
