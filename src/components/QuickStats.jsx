import React from 'react';

export default function QuickStats() {
  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">Class 1–12</div>
            <div className="stat-title">Academic Tuition</div>
            <div className="stat-desc">Junior Academy to Senior Secondary</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">3 Boards</div>
            <div className="stat-title">CBSE • ICSE • JAC</div>
            <div className="stat-desc">Board-Oriented Concept Clarity</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">3 Streams</div>
            <div className="stat-title">Arts • Commerce • Science</div>
            <div className="stat-desc">Intermediate & College Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10+ Skills</div>
            <div className="stat-title">Career Computer Lab</div>
            <div className="stat-desc">DCA, DTP, Tally, AI, VFX & Java</div>
          </div>
        </div>
      </div>
    </section>
  );
}
