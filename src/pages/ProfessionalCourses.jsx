import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Laptop, Code, FileText, BarChart, Palette, Film, Cpu, ArrowRight } from 'lucide-react';

export default function ProfessionalCourses() {
  const courses = [
    {
      title: 'DCA (Diploma in Computer Applications)',
      link: '/dca',
      tag: 'Computer Basics',
      icon: <Laptop size={28} />,
      desc: 'Computer fundamentals, Windows, MS Office (Word, Excel, PowerPoint), Internet operations & digital literacy.',
      skills: ['MS Word', 'Advanced Excel', 'PowerPoint', 'Internet & Security']
    },
    {
      title: 'DTP (Desktop Publishing)',
      link: '/dtp',
      tag: 'Publishing',
      icon: <FileText size={28} />,
      desc: 'Master document layout, printing prep, Adobe Photoshop, CorelDraw & PageMaker for publishing jobs.',
      skills: ['Photoshop', 'CorelDraw', 'PageMaker', 'Document Layout']
    },
    {
      title: 'Tally & E-Accounting',
      link: '/tally',
      tag: 'Accounting',
      icon: <BarChart size={28} />,
      desc: 'Practical business accounting, Tally Prime software, GST returns, voucher entries, inventory & payroll.',
      skills: ['Tally Prime', 'GST Filing', 'Vouchers', 'Financial Reports']
    },
    {
      title: 'Graphics Design',
      link: '/graphics-design',
      tag: 'Creative',
      icon: <Palette size={28} />,
      desc: 'Visual design principles, vector artwork, social media graphics, branding identity & photo editing.',
      skills: ['Photoshop', 'Vector Art', 'Branding', 'Poster Layout']
    },
    {
      title: 'Animation & VFX Multimedia',
      link: '/animation-vfx',
      tag: 'Multimedia',
      icon: <Film size={28} />,
      desc: '2D/3D animation basics, video editing, compositing, sound editing & visual effects production.',
      skills: ['Video Editing', '2D/3D Animation', 'VFX Compositing', 'Audio']
    },
    {
      title: 'AI & Modern Technology',
      link: '/ai-technology',
      tag: 'Next-Gen',
      icon: <Cpu size={28} />,
      desc: 'Understanding AI tools, ChatGPT, prompt engineering, digital workflow automation & future tech.',
      skills: ['AI Tools', 'Prompt Engineering', 'Automation', 'Tech Literacy']
    },
    {
      title: 'Java Programming',
      link: '/java-programming',
      tag: 'Software',
      icon: <Code size={28} />,
      desc: 'Logic building, Object-Oriented Programming (OOPs), classes, inheritance, control structures & arrays.',
      skills: ['Java Syntax', 'OOPs Concepts', 'Logic Building', 'Data Structures']
    }
  ];

  return (
    <div>
      <PageHero
        title="Computer & Professional Skill Courses"
        subtitle="Practical Technology & Career-Oriented Learning at Life Care Education Tech Lab"
        category="Career Skills"
      />

      <section className="section-pad">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Job-Oriented Training</span>
            <h2 className="section-title">
              Empower Your Career <span className="highlight">with Practical Skills</span>
            </h2>
            <p className="section-subtitle">
              Our career skills lab provides hands-on practical computer training designed for students, job seekers, and working professionals.
            </p>
          </div>

          <div className="course-grid-dense">
            {courses.map((c, i) => (
              <div className="course-item-card" key={i}>
                <span className="course-badge-top">{c.tag}</span>
                <div style={{ color: 'var(--brand-primary)', marginBottom: 10 }}>{c.icon}</div>
                <h3 className="course-title">{c.title}</h3>
                <p className="course-brief">{c.desc}</p>
                <div className="course-skills-tags">
                  {c.skills.map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
                <Link to={c.link} className="btn btn-outline btn-sm" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                  <span>Course Details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
