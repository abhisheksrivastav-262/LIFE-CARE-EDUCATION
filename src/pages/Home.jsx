import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Award,
  GraduationCap,
  Laptop,
  ArrowRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  Users,
  Brain,
  Layers,
  Code,
  Image as ImageIcon
} from 'lucide-react';
import QuickStats from '../components/QuickStats';
import CreativeShowcase from '../components/CreativeShowcase';
import WhyChooseUs from '../components/WhyChooseUs';

export default function Home() {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="home-hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left Hero Text */}
            <div>
              <div className="hero-pill">
                <span className="hero-pill-dot" />
                <span>Premier Education Brand in Ranchi</span>
              </div>

              <h1 className="hero-heading">
                Build Strong Concepts. <br />
                <span className="brand-highlight">Build a Strong Career.</span>
              </h1>

              <p className="hero-description">
                School Tuition, Board Examination Preparation, Intermediate Streams & Professional Skill Courses — <strong>All Under One Roof</strong> at Life Care Education, Ranchi.
              </p>

              <div className="hero-tags">
                <span className="hero-tag">Classes 6 to 12</span>
                <span className="hero-tag">CBSE • ICSE • JAC</span>
                <span className="hero-tag">Schooling & Non-Schooling</span>
                <span className="hero-tag">Arts • Commerce • Science</span>
                <span className="hero-tag">Computer & Tech Skills</span>
              </div>

              <div className="hero-cta-group">
                <Link to="/school-tuition" className="btn btn-primary btn-lg">
                  <span>Explore Courses</span>
                  <ArrowRight size={18} />
                </Link>

                <Link to="/admissions" className="btn btn-gold btn-lg">
                  <Sparkles size={18} />
                  <span>Admission Enquiry</span>
                </Link>

                <a href="tel:6200093379" className="btn btn-outline btn-lg">
                  <Phone size={18} />
                  <span>6200093379</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="hero-visual-card">
              {/* Floating Academic Pills */}
              <div className="float-academic-pill float-pill-1">
                <span>📐 Mathematics Expert</span>
              </div>
              <div className="float-academic-pill float-pill-2">
                <span>💻 Modern Tech Lab</span>
              </div>

              <div className="hero-creative-wrapper">
                <img
                  src="/images/creative-jac-cbse.jpg"
                  alt="Life Care Education Admission Creative Target Batch 2028 Shahbaj Sir"
                />
                <div className="hero-badge-floating">
                  <div>
                    <div className="director-name">Shahbaj Sir</div>
                    <div className="director-sub">Founder & Academic Director (Maths Expert)</div>
                  </div>
                  <a
                    href="https://wa.me/916200093379?text=Hello%20Shahbaj%20Sir%2C%20I%20want%20to%20enquire%20about%20admission."
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold btn-sm"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / QUICK STATS */}
      <QuickStats />

      {/* 3. ABOUT SECTION */}
      <section className="section-pad">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="section-label">About Life Care Education</span>
              <h2 className="text-heading-lg" style={{ color: 'var(--purple-950)', margin: '12px 0 16px' }}>
                More Than Tuition. <br />
                <span className="gradient-text">A Complete Learning Journey.</span>
              </h2>
              <p className="text-body-lg" style={{ color: 'var(--text-body)', marginBottom: 20 }}>
                Life Care Education in Ranchi provides complete academic tutoring alongside job-oriented professional computer training. We bridge the gap between classroom syllabus and career success.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--purple-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>Academic Foundation (Class 1 to 12 CBSE, ICSE, JAC)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--purple-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>Non-Schooling & Private Student Comprehensive Support</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--purple-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>Stream Mentoring: Science, Commerce & Arts</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--purple-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)' }}>
                    <CheckCircle2 size={20} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>Career Computer Skills: DCA, DTP, Tally, Graphic Design, AI & Java</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 14 }}>
                <Link to="/about" className="btn btn-primary">
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </Link>
                <a href="tel:6200093379" className="btn btn-outline">
                  <Phone size={16} />
                  <span>Speak with Director</span>
                </a>
              </div>
            </div>

            <div className="card-purple" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, background: 'rgba(109,40,217,0.1)', borderRadius: '50%' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 50, height: 50, borderRadius: 12, background: 'var(--gradient-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Award size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--purple-950)' }}>Academic Leadership</h3>
                  <div style={{ fontSize: '0.875rem', color: 'var(--gold-dark)', fontWeight: 700 }}>Shahbaj Sir (Mathematics Expert)</div>
                </div>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 20 }}>
                “Har student par personal guidance aur complete academic supervision. Humara lakshya – Har student ki 100% Success!”
              </p>
              <div style={{ background: 'var(--white)', padding: 16, borderRadius: 12, border: '1px solid var(--purple-100)' }}>
                <div style={{ fontWeight: 700, color: 'var(--purple-950)', marginBottom: 4 }}>Institute Location:</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  P.P. Compound, Near Guru Nanak School, Ranchi, Jharkhand
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--brand-primary)', fontWeight: 700, marginTop: 6 }}>
                  Contact: 6200093379
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADMISSION CREATIVES SHOWCASE */}
      <CreativeShowcase />

      {/* 5. ACADEMIC PROGRAMS & BOARDS */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Academic Foundations</span>
            <h2 className="section-title">
              School Tuition & <span className="highlight">Board Examination Prep</span>
            </h2>
            <p className="section-subtitle">
              Structured concept building, small batch focus, and rigorous regular testing for Class 6 to 12.
            </p>
          </div>

          <div className="grid-3">
            <div className="card" style={{ padding: 'var(--space-xl)' }}>
              <div className="course-icon"><BookOpen color="white" /></div>
              <h3 className="text-heading-sm" style={{ color: 'var(--purple-950)', marginBottom: 8 }}>Class 6 to 8 Tuition</h3>
              <p className="text-muted" style={{ fontSize: '0.9375rem', marginBottom: 16 }}>
                Building robust analytical skills in Science, Mathematics, English & Computer for junior students.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20, fontSize: '0.875rem' }}>
                <li style={{ display: 'flex', gap: 6 }}><CheckCircle2 size={16} color="#6d28d9" /> CBSE, ICSE & JAC Board Alignment</li>
                <li style={{ display: 'flex', gap: 6 }}><CheckCircle2 size={16} color="#6d28d9" /> Activity-Based Concept Clarity</li>
                <li style={{ display: 'flex', gap: 6 }}><CheckCircle2 size={16} color="#6d28d9" /> Regular Homework & Doubt Sessions</li>
              </ul>
              <Link to="/school-tuition" className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Class 6–8 Details
              </Link>
            </div>

            <div className="card" style={{ padding: 'var(--space-xl)', border: '2px solid var(--purple-400)', boxShadow: 'var(--shadow-brand)' }}>
              <div style={{ background: 'var(--gold)', color: 'white', fontSize: '0.7rem', fontWeight: 800, padding: '3px 10px', borderRadius: 20, alignSelf: 'flex-start', textTransform: 'uppercase', marginBottom: 12 }}>
                High Demand
              </div>
              <div className="course-icon" style={{ background: 'var(--gradient-royal)' }}><Award color="white" /></div>
              <h3 className="text-heading-sm" style={{ color: 'var(--purple-950)', marginBottom: 8 }}>Target Batch 2028 (Class 9 & 10)</h3>
              <p className="text-muted" style={{ fontSize: '0.9375rem', marginBottom: 16 }}>
                Matric & Board Exam mastery in Science & Mathematics supervised directly by <strong>Shahbaj Sir</strong>.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20, fontSize: '0.875rem' }}>
                <li style={{ display: 'flex', gap: 6 }}><CheckCircle2 size={16} color="#6d28d9" /> Up to 50% Course Fee Discount</li>
                <li style={{ display: 'flex', gap: 6 }}><CheckCircle2 size={16} color="#6d28d9" /> First 50 Admissions FREE Offer</li>
                <li style={{ display: 'flex', gap: 6 }}><CheckCircle2 size={16} color="#6d28d9" /> Chapter-wise Board Test Series</li>
              </ul>
              <Link to="/board-preparation" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Target Batch Details
              </Link>
            </div>

            <div className="card" style={{ padding: 'var(--space-xl)' }}>
              <div className="course-icon"><GraduationCap color="white" /></div>
              <h3 className="text-heading-sm" style={{ color: 'var(--purple-950)', marginBottom: 8 }}>Class 11 & 12 (Intermediate)</h3>
              <p className="text-muted" style={{ fontSize: '0.9375rem', marginBottom: 16 }}>
                Deep stream-based academic preparation for Science, Commerce & Arts intermediate board exams.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20, fontSize: '0.875rem' }}>
                <li style={{ display: 'flex', gap: 6 }}><CheckCircle2 size={16} color="#6d28d9" /> Subject-wise Specialised Guidance</li>
                <li style={{ display: 'flex', gap: 6 }}><CheckCircle2 size={16} color="#6d28d9" /> Non-Schooling Student Special Modules</li>
                <li style={{ display: 'flex', gap: 6 }}><CheckCircle2 size={16} color="#6d28d9" /> College Entrance Foundation</li>
              </ul>
              <Link to="/intermediate" className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Intermediate Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STREAMS SECTION (SCIENCE, COMMERCE, ARTS) */}
      <section className="section-pad" style={{ background: '#f5f3ff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Intermediate Streams</span>
            <h2 className="section-title">
              Choose Your Academic Path <span className="highlight">(Class 11 & 12)</span>
            </h2>
            <p className="section-subtitle">
              Dedicated coaching across all three major streams with expert faculty and subject guidance.
            </p>
          </div>

          <div className="stream-grid">
            {/* Science */}
            <div className="stream-card featured">
              <div className="stream-icon-badge">🔬</div>
              <h3 className="stream-name">Science Stream</h3>
              <p className="stream-desc">Comprehensive concepts in Physics, Chemistry, Mathematics & Biology.</p>
              <ul className="stream-subject-list">
                <li><CheckCircle2 size={16} /> Physics (Theory & Numerical clarity)</li>
                <li><CheckCircle2 size={16} /> Mathematics (by Shahbaj Sir)</li>
                <li><CheckCircle2 size={16} /> Chemistry (Organic & Physical)</li>
                <li><CheckCircle2 size={16} /> Biology & Computer Science</li>
              </ul>
              <Link to="/science" className="btn btn-gold btn-sm" style={{ justifyContent: 'center' }}>
                Science Stream Details
              </Link>
            </div>

            {/* Commerce */}
            <div className="stream-card">
              <div className="stream-icon-badge">📊</div>
              <h3 className="stream-name">Commerce Stream</h3>
              <p className="stream-desc">Strong financial and accounting analytical skills for corporate careers.</p>
              <ul className="stream-subject-list">
                <li><CheckCircle2 size={16} /> Accountancy & Bookkeeping</li>
                <li><CheckCircle2 size={16} /> Business Studies & Management</li>
                <li><CheckCircle2 size={16} /> Micro & Macro Economics</li>
                <li><CheckCircle2 size={16} /> Business Mathematics & Tally</li>
              </ul>
              <Link to="/commerce" className="btn btn-outline btn-sm" style={{ justifyContent: 'center' }}>
                Commerce Stream Details
              </Link>
            </div>

            {/* Arts */}
            <div className="stream-card">
              <div className="stream-icon-badge">📜</div>
              <h3 className="stream-name">Arts Stream</h3>
              <p className="stream-desc">Humane & social science foundation for civil service and higher academics.</p>
              <ul className="stream-subject-list">
                <li><CheckCircle2 size={16} /> History & Ancient Civilizations</li>
                <li><CheckCircle2 size={16} /> Political Science & Governance</li>
                <li><CheckCircle2 size={16} /> Geography & Environmental Science</li>
                <li><CheckCircle2 size={16} /> Economics & Languages</li>
              </ul>
              <Link to="/arts" className="btn btn-outline btn-sm" style={{ justifyContent: 'center' }}>
                Arts Stream Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMPUTER & PROFESSIONAL COURSES */}
      <section className="section-pad" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Career Skills Lab</span>
            <h2 className="section-title">
              Computer & <span className="highlight">Professional Courses</span>
            </h2>
            <p className="section-subtitle">
              Acquire job-ready digital skills in computer applications, graphic design, accounting, AI & programming.
            </p>
          </div>

          <div className="course-grid-dense">
            {/* DCA */}
            <div className="course-item-card">
              <span className="course-badge-top">Essential Skill</span>
              <h3 className="course-title">DCA (Diploma Comp. App.)</h3>
              <p className="course-brief">Master computer fundamentals, MS Office, Windows, Internet & digital productivity.</p>
              <div className="course-skills-tags">
                <span>MS Word</span>
                <span>Excel</span>
                <span>PowerPoint</span>
                <span>Internet</span>
              </div>
              <Link to="/dca" className="btn btn-outline btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                Explore DCA
              </Link>
            </div>

            {/* DTP */}
            <div className="course-item-card">
              <span className="course-badge-top">Publishing</span>
              <h3 className="course-title">DTP (Desktop Publishing)</h3>
              <p className="course-brief">Document design, printing basics, PageMaker, Photoshop & CorelDraw skills.</p>
              <div className="course-skills-tags">
                <span>PageMaker</span>
                <span>Photoshop</span>
                <span>Print Layout</span>
              </div>
              <Link to="/dtp" className="btn btn-outline btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                Explore DTP
              </Link>
            </div>

            {/* Tally */}
            <div className="course-item-card">
              <span className="course-badge-top">Finance Skill</span>
              <h3 className="course-title">Tally & E-Accounting</h3>
              <p className="course-brief">Practical computerized accounting, GST filing, inventory management & payroll.</p>
              <div className="course-skills-tags">
                <span>Tally Prime</span>
                <span>GST Filing</span>
                <span>Voucher Entry</span>
              </div>
              <Link to="/tally" className="btn btn-outline btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                Explore Tally
              </Link>
            </div>

            {/* Graphics Design */}
            <div className="course-item-card">
              <span className="course-badge-top">Creative Lab</span>
              <h3 className="course-title">Graphics Design</h3>
              <p className="course-brief">Create stunning posters, branding elements, social media graphics & vector art.</p>
              <div className="course-skills-tags">
                <span>Photoshop</span>
                <span>Vector Design</span>
                <span>Branding</span>
              </div>
              <Link to="/graphics-design" className="btn btn-outline btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                Explore Graphics
              </Link>
            </div>

            {/* Animation & VFX */}
            <div className="course-item-card">
              <span className="course-badge-top">Multimedia</span>
              <h3 className="course-title">Animation & VFX</h3>
              <p className="course-brief">2D/3D animation fundamentals, video editing, compositing & visual effects.</p>
              <div className="course-skills-tags">
                <span>Video Editing</span>
                <span>3D Concepts</span>
                <span>VFX Basic</span>
              </div>
              <Link to="/animation-vfx" className="btn btn-outline btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                Explore Animation
              </Link>
            </div>

            {/* AI & Tech */}
            <div className="course-item-card">
              <span className="course-badge-top">Next-Gen</span>
              <h3 className="course-title">AI & Technology</h3>
              <p className="course-brief">Modern AI tools, prompt engineering, digital automation & tech awareness.</p>
              <div className="course-skills-tags">
                <span>AI Tools</span>
                <span>Prompting</span>
                <span>Automation</span>
              </div>
              <Link to="/ai-technology" className="btn btn-outline btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                Explore AI
              </Link>
            </div>

            {/* Java */}
            <div className="course-item-card">
              <span className="course-badge-top">Coding Foundation</span>
              <h3 className="course-title">Java Programming</h3>
              <p className="course-brief">Object-Oriented Programming (OOPs), logic building, syntax & algorithm basics.</p>
              <div className="course-skills-tags">
                <span>OOPs</span>
                <span>Classes & Objects</span>
                <span>Logic</span>
              </div>
              <Link to="/java-programming" className="btn btn-outline btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                Explore Java
              </Link>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link to="/professional-courses" className="btn btn-primary btn-lg">
              <Laptop size={18} />
              <span>View All Professional Courses</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 9. ADMISSION CTA BANNER */}
      <section className="cta-banner-section">
        <div className="container">
          <span className="top-bar-badge" style={{ background: 'var(--gold)', color: '#0f0a1e', marginBottom: 16 }}>
            Limited Seats Available
          </span>
          <h2 className="cta-banner-heading">
            Start Your Journey with Life Care Education Today!
          </h2>
          <p className="cta-banner-sub">
            Visit our P.P. Compound campus in Ranchi or contact Academic Director <strong>Shahbaj Sir</strong> directly on WhatsApp.
          </p>
          <div className="cta-banner-buttons">
            <Link to="/admissions" className="btn btn-gold btn-lg">
              <Sparkles size={18} />
              <span>Submit Admission Enquiry</span>
            </Link>
            <a
              href="https://wa.me/916200093379?text=Hello%20Life%20Care%20Education%2C%20I%20want%20to%20know%20more%20about%20admissions."
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us: 6200093379</span>
            </a>
            <a href="tel:6200093379" className="btn btn-outline-white btn-lg">
              <Phone size={18} />
              <span>Call 6200093379</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
