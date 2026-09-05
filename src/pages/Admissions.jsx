import React from 'react';
import PageHero from '../components/PageHero';
import CreativeShowcase from '../components/CreativeShowcase';
import EnquiryForm from '../components/EnquiryForm';
import { Sparkles, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export default function Admissions() {
  return (
    <div>
      <PageHero
        title="Admissions Open 2025–26"
        subtitle="School Tuition, Board Target Batches, Intermediate & Career Computer Courses in Ranchi"
        category="Admissions"
      />

      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Enrollment Guidelines</span>
            <h2 className="section-title">
              Start Your Admission Journey <span className="highlight">at Life Care Education</span>
            </h2>
            <p className="section-subtitle">
              Admissions are open for Junior Academy (Class 1-5), School Tuition (Class 6-12), Target Batch 2028, Intermediate Streams, and Computer Courses.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: 'flex-start', marginBottom: 60 }}>
            <div>
              <div className="card-purple" style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--purple-950)', marginBottom: 12 }}>
                  Admission Categories Available:
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <CheckCircle2 size={18} color="#6d28d9" />
                    <strong>Life Care Junior Academy:</strong> Class 1 to 5 (Foundation & Activity Learning)
                  </li>
                  <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <CheckCircle2 size={18} color="#6d28d9" />
                    <strong>Class 6 to 8 Tuition:</strong> CBSE, ICSE & JAC Board Foundations
                  </li>
                  <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <CheckCircle2 size={18} color="#6d28d9" />
                    <strong>Target Batch 2028 (Class 9 & 10):</strong> Science & Maths (First 50 FREE Offer)
                  </li>
                  <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <CheckCircle2 size={18} color="#6d28d9" />
                    <strong>Class 11 & 12 Intermediate:</strong> Science, Commerce & Arts
                  </li>
                  <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <CheckCircle2 size={18} color="#6d28d9" />
                    <strong>Professional Computer Lab:</strong> DCA, DTP, Tally, Graphics, VFX, AI & Java
                  </li>
                </ul>
              </div>

              <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', padding: 20, borderRadius: 16 }}>
                <h4 style={{ color: '#b45309', fontWeight: 800, fontSize: '1.1rem', marginBottom: 6 }}>
                  ⚡ Limited Seats Notice:
                </h4>
                <p style={{ fontSize: '0.9375rem', color: '#78350f', lineHeight: 1.6 }}>
                  To maintain high academic standards, batch sizes are capped. Please submit your enquiry or contact Director <strong>Shahbaj Sir at 6200093379</strong> to reserve your seat.
                </p>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="Target Batch 2028 (Class 9-10)" />
            </div>
          </div>

          <CreativeShowcase />
        </div>
      </section>
    </div>
  );
}
