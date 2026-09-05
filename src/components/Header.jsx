import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Laptop,
  Award,
  Calendar,
  MapPin
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicDropdown, setAcademicDropdown] = useState(false);
  const [proDropdown, setProDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAcademicDropdown(false);
    setProDropdown(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header className={`site-header-wrapper ${scrolled ? 'scrolled' : ''}`}>
        {/* Top Announcement Bar */}
        <div className="top-bar">
          <div className="container top-bar-inner">
            <div className="top-bar-contact">
              <a href="tel:6200093379" className="top-bar-link">
                <Phone size={14} color="#fcd34d" />
                <span>+91 6200093379</span>
              </a>
              <span className="top-bar-link">
                <MapPin size={14} color="#fcd34d" />
                <span>P.P. Compound, Near Guru Nanak School, Ranchi</span>
              </span>
            </div>
            <div className="top-bar-tagline">
              <span className="top-bar-badge">Admissions 2025–26</span>
              <span>Target Batch 2028 Open | Junior Academy Class 1–5</span>
            </div>
          </div>
        </div>

        {/* Main Navigation Header */}
        <div className="site-header-main">
          <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="brand-logo">
            <div className="brand-icon-box">
              <GraduationCap size={26} />
            </div>
            <div className="brand-text">
              <span className="brand-title">LIFE CARE EDUCATION</span>
              <span className="brand-subtitle">“A Flight for Career”</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>

            {/* Academic Courses Dropdown */}
            <div className="nav-item-dropdown">
              <Link
                to="/school-tuition"
                className={`nav-link ${
                  ['/school-tuition', '/board-preparation', '/intermediate', '/graduation', '/science', '/commerce', '/arts'].includes(location.pathname)
                    ? 'active'
                    : ''
                }`}
              >
                School Tuition <ChevronDown size={14} />
              </Link>
              <div className="nav-dropdown-menu">
                <Link to="/school-tuition" className="dropdown-link">
                  <div className="dropdown-icon"><BookOpen size={16} /></div>
                  <div>
                    <div>Class 6–12 Tuition</div>
                    <small className="text-muted">CBSE, ICSE & JAC</small>
                  </div>
                </Link>
                <Link to="/board-preparation" className="dropdown-link">
                  <div className="dropdown-icon"><Award size={16} /></div>
                  <div>
                    <div>Board Preparation</div>
                    <small className="text-muted">Target Batch Class 9–10</small>
                  </div>
                </Link>
                <Link to="/intermediate" className="dropdown-link">
                  <div className="dropdown-icon"><GraduationCap size={16} /></div>
                  <div>
                    <div>Class 11 & 12 (Intermediate)</div>
                    <small className="text-muted">Science, Commerce & Arts</small>
                  </div>
                </Link>
                <Link to="/science" className="dropdown-link">
                  <div className="dropdown-icon">🔬</div>
                  <div>
                    <div>Science Stream</div>
                    <small className="text-muted">Physics, Chem, Maths, Bio</small>
                  </div>
                </Link>
                <Link to="/commerce" className="dropdown-link">
                  <div className="dropdown-icon">📊</div>
                  <div>
                    <div>Commerce Stream</div>
                    <small className="text-muted">Accounts, B.St, Eco</small>
                  </div>
                </Link>
                <Link to="/arts" className="dropdown-link">
                  <div className="dropdown-icon">📜</div>
                  <div>
                    <div>Arts Stream</div>
                    <small className="text-muted">History, Pol Sci, Geo</small>
                  </div>
                </Link>
                <Link to="/graduation" className="dropdown-link">
                  <div className="dropdown-icon">🎓</div>
                  <div>
                    <div>Graduation / College Prep</div>
                    <small className="text-muted">Academic Support & Guidance</small>
                  </div>
                </Link>
              </div>
            </div>

            {/* Professional Courses Dropdown */}
            <div className="nav-item-dropdown">
              <Link
                to="/professional-courses"
                className={`nav-link ${
                  ['/professional-courses', '/dca', '/dtp', '/tally', '/animation-vfx', '/graphics-design', '/ai-technology', '/java-programming'].includes(location.pathname)
                    ? 'active'
                    : ''
                }`}
              >
                Professional Courses <ChevronDown size={14} />
              </Link>
              <div className="nav-dropdown-menu">
                <Link to="/professional-courses" className="dropdown-link">
                  <div className="dropdown-icon"><Laptop size={16} /></div>
                  <div>
                    <div>All Career Courses</div>
                    <small className="text-muted">Practical Technology Lab</small>
                  </div>
                </Link>
                <Link to="/dca" className="dropdown-link">
                  <div className="dropdown-icon">💻</div>
                  <div>
                    <div>DCA (Diploma Comp. App.)</div>
                    <small className="text-muted">Computer Fundamentals & Office</small>
                  </div>
                </Link>
                <Link to="/dtp" className="dropdown-link">
                  <div className="dropdown-icon">📑</div>
                  <div>
                    <div>DTP (Desktop Publishing)</div>
                    <small className="text-muted">Publishing & Document Design</small>
                  </div>
                </Link>
                <Link to="/tally" className="dropdown-link">
                  <div className="dropdown-icon">📈</div>
                  <div>
                    <div>Tally & E-Accounting</div>
                    <small className="text-muted">Business Accounting & GST</small>
                  </div>
                </Link>
                <Link to="/graphics-design" className="dropdown-link">
                  <div className="dropdown-icon">🎨</div>
                  <div>
                    <div>Graphics Design</div>
                    <small className="text-muted">Photoshop, Vector & UI Layout</small>
                  </div>
                </Link>
                <Link to="/animation-vfx" className="dropdown-link">
                  <div className="dropdown-icon">🎬</div>
                  <div>
                    <div>Animation & VFX</div>
                    <small className="text-muted">2D/3D & Multimedia Editing</small>
                  </div>
                </Link>
                <Link to="/ai-technology" className="dropdown-link">
                  <div className="dropdown-icon">🤖</div>
                  <div>
                    <div>AI & Technology</div>
                    <small className="text-muted">Next-Gen AI Skills & Tools</small>
                  </div>
                </Link>
                <Link to="/java-programming" className="dropdown-link">
                  <div className="dropdown-icon">☕</div>
                  <div>
                    <div>Java Programming</div>
                    <small className="text-muted">OOPs & Software Foundations</small>
                  </div>
                </Link>
              </div>
            </div>

            <Link
              to="/admissions"
              className={`nav-link ${location.pathname === '/admissions' ? 'active' : ''}`}
            >
              Admissions
            </Link>
            <Link
              to="/gallery"
              className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Nav CTAs */}
          <div className="nav-actions">
            <a href="tel:6200093379" className="nav-call-btn">
              <Phone size={16} />
              <span>6200093379</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            <div className="brand-icon-box" style={{ width: 38, height: 38, fontSize: '1.1rem' }}>
              <GraduationCap size={20} />
            </div>
            <div className="brand-text">
              <span className="brand-title" style={{ fontSize: '1.1rem' }}>LIFE CARE</span>
              <span className="brand-subtitle" style={{ fontSize: '0.6875rem' }}>A Flight for Career</span>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            aria-label="Close menu"
          >
            <X size={24} color="#111827" />
          </button>
        </div>

        <div className="mobile-drawer-nav">
          <Link to="/" className={`mobile-drawer-link ${location.pathname === '/' ? 'active' : ''}`}>
            <span>Home</span>
          </Link>
          <Link to="/about" className={`mobile-drawer-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <span>About Us</span>
          </Link>

          {/* Mobile Academic Submenu Accordion */}
          <div>
            <div
              className="mobile-drawer-link"
              onClick={() => setAcademicDropdown(!academicDropdown)}
              style={{ cursor: 'pointer' }}
            >
              <span>School Tuition & Boards</span>
              <ChevronDown
                size={18}
                style={{ transform: academicDropdown ? 'rotate(180deg)' : 'none', transition: '0.2s' }}
              />
            </div>
            {academicDropdown && (
              <div className="mobile-submenu">
                <Link to="/school-tuition">Class 6–12 Tuition</Link>
                <Link to="/board-preparation">Target Batch (Class 9 & 10)</Link>
                <Link to="/intermediate">Intermediate (Class 11 & 12)</Link>
                <Link to="/science">Science Stream</Link>
                <Link to="/commerce">Commerce Stream</Link>
                <Link to="/arts">Arts Stream</Link>
                <Link to="/graduation">Graduation Preparation</Link>
              </div>
            )}
          </div>

          {/* Mobile Professional Submenu Accordion */}
          <div>
            <div
              className="mobile-drawer-link"
              onClick={() => setProDropdown(!proDropdown)}
              style={{ cursor: 'pointer' }}
            >
              <span>Professional & Computer</span>
              <ChevronDown
                size={18}
                style={{ transform: proDropdown ? 'rotate(180deg)' : 'none', transition: '0.2s' }}
              />
            </div>
            {proDropdown && (
              <div className="mobile-submenu">
                <Link to="/professional-courses">All Professional Courses</Link>
                <Link to="/dca">DCA Computer Course</Link>
                <Link to="/dtp">DTP Publishing</Link>
                <Link to="/tally">Tally & Accounting</Link>
                <Link to="/graphics-design">Graphics Design</Link>
                <Link to="/animation-vfx">Animation & VFX</Link>
                <Link to="/ai-technology">AI & Technology</Link>
                <Link to="/java-programming">Java Programming</Link>
              </div>
            )}
          </div>

          <Link to="/admissions" className={`mobile-drawer-link ${location.pathname === '/admissions' ? 'active' : ''}`}>
            <span>Admissions</span>
          </Link>
          <Link to="/gallery" className={`mobile-drawer-link ${location.pathname === '/gallery' ? 'active' : ''}`}>
            <span>Campus Gallery</span>
          </Link>
          <Link to="/contact" className={`mobile-drawer-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            <span>Contact Us</span>
          </Link>

          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="tel:6200093379" className="btn btn-outline" style={{ justifyContent: 'center' }}>
              <Phone size={16} /> Call 6200093379
            </a>
            <Link to="/admissions" className="btn btn-primary" style={{ justifyContent: 'center' }}>
              Admission Enquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
