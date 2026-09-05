import React from 'react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';
import { BarChart, CheckCircle2 } from 'lucide-react';

export default function Tally() {
  return (
    <div>
      <PageHero
        title="Tally & E-Accounting"
        subtitle="Computerized Accounting, Tally Prime Software & GST Fundamentals"
        category="Finance Course"
      />

      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-label">Computerized Accounting</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                Practical Business <br />
                <span className="gradient-text">Accounting & Tally Prime</span>
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 20 }}>
                Tally Prime is India's most widely used accounting software. This practical course prepares students for entry-level accounting and billing roles in businesses.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📈 Accounting Fundamentals & Ledger Creation</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Rules of accounting, ledger posting, voucher creation, trial balance & final accounts.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>🧾 GST (Goods & Services Tax) Filing</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>CGST, SGST, IGST calculation, tax invoicing, and e-way bill generation in Tally.</p>
                </div>
                <div style={{ background: 'var(--purple-50)', padding: 16, borderRadius: 12 }}>
                  <h4 style={{ fontWeight: 700, color: 'var(--purple-950)' }}>📦 Inventory & Stock Management</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Stock groups, items, units of measure, purchase/sales orders, and stock evaluation.</p>
                </div>
              </div>
            </div>

            <div>
              <EnquiryForm defaultCourse="Tally & Accounting" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
