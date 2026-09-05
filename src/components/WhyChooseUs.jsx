import React from 'react';
import {
  Brain,
  Target,
  Users,
  Layers,
  Laptop,
  CheckCircle,
  HelpCircle,
  Compass
} from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Brain size={26} />,
      title: 'Strong Concept Building',
      desc: 'We focus 100% on core fundamentals so students can solve complex problems independently.'
    },
    {
      icon: <Target size={26} />,
      title: 'Board-Focused Preparation',
      desc: 'Tailored test series, pattern-based revision, and board exam strategy for CBSE, ICSE & JAC.'
    },
    {
      icon: <Users size={26} />,
      title: 'School & Non-Schooling Support',
      desc: 'Dedicated learning modules for both regular school goers and private/non-schooling candidates.'
    },
    {
      icon: <Layers size={26} />,
      title: 'Arts, Commerce & Science',
      desc: 'Complete stream-specific academic guidance under expert faculties for Class 11 & 12.'
    },
    {
      icon: <Laptop size={26} />,
      title: 'Computer & Career Skills',
      desc: 'Practical training in DCA, DTP, Tally, Graphic Design, Animation, AI & Java in our modern tech lab.'
    },
    {
      icon: <CheckCircle size={26} />,
      title: 'Practical Learning Focus',
      desc: 'Hands-on practical sessions and real-world application building for technical courses.'
    },
    {
      icon: <HelpCircle size={26} />,
      title: 'Individual Doubt Clearing',
      desc: 'Small batch sizes ensure personalized supervision and zero lingering student doubts.'
    },
    {
      icon: <Compass size={26} />,
      title: 'Career-Oriented Education',
      desc: 'Academic excellence paired with practical skills to ensure a bright, sustainable career path.'
    }
  ];

  return (
    <section className="section-pad" style={{ background: '#fcfaff' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Life Care Education</span>
          <h2 className="section-title">
            Academic Excellence <span className="highlight">+ Career Skills</span>
          </h2>
          <p className="section-subtitle">
            What makes Life Care Education the preferred institute for hundreds of students across Ranchi.
          </p>
        </div>

        <div className="features-grid">
          {pillars.map((item, idx) => (
            <div className="feature-box" key={idx}>
              <div className="feature-icon-round">{item.icon}</div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
