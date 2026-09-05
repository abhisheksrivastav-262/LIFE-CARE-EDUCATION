import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'posters',
      title: 'JAC & CBSE Board Target Batch 2028 Creative',
      subtitle: 'Class 9 & 10 Science & Maths Special Offer - Shahbaj Sir',
      src: '/images/creative-jac-cbse.jpg',
      isPoster: true
    },
    {
      id: 2,
      category: 'posters',
      title: 'Life Care Junior Academy Creative',
      subtitle: 'Admissions Open Class 1 to 5 - Strong Foundation',
      src: '/images/creative-junior-academy.png',
      isPoster: true
    },
    {
      id: 3,
      category: 'classroom',
      title: 'Interactive Academic Classroom',
      subtitle: 'Concept-building session for Class 9 & 10 Mathematics',
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      isPoster: false
    },
    {
      id: 4,
      category: 'computer',
      title: 'Career Computer Lab Station',
      subtitle: 'Students practicing DCA, DTP & Tally Prime accounting',
      src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80',
      isPoster: false
    },
    {
      id: 5,
      category: 'classroom',
      title: 'Board Exam Preparation Batch',
      subtitle: 'Regular test series and doubt clearing at Ranchi campus',
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      isPoster: false
    },
    {
      id: 6,
      category: 'computer',
      title: 'Graphic Design & VFX Workstation',
      subtitle: 'Practical training in Photoshop, CorelDraw & video editing',
      src: 'https://images.unsplash.com/photo-1542744094-3a3172720449?auto=format&fit=crop&w=800&q=80',
      isPoster: false
    }
  ];

  const filteredItems =
    filter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <div>
      <PageHero
        title="Campus & Learning Gallery"
        subtitle="Explore Admission Creatives, Classrooms, Computer Labs & Student Life"
        category="Gallery"
      />

      <section className="section-pad">
        <div className="container">
          {/* Filter Bar */}
          <div className="gallery-filter-bar">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Photos
            </button>
            <button
              className={`filter-btn ${filter === 'posters' ? 'active' : ''}`}
              onClick={() => setFilter('posters')}
            >
              Admission Posters
            </button>
            <button
              className={`filter-btn ${filter === 'classroom' ? 'active' : ''}`}
              onClick={() => setFilter('classroom')}
            >
              Classroom & Board Prep
            </button>
            <button
              className={`filter-btn ${filter === 'computer' ? 'active' : ''}`}
              onClick={() => setFilter('computer')}
            >
              Computer Lab & Skills
            </button>
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`gallery-item ${item.isPoster ? 'poster-item' : ''}`}
                onClick={() => setActiveImage(item)}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <div>
                    <div className="gallery-caption-title">{item.title}</div>
                    <div className="gallery-caption-sub">{item.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-backdrop" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setActiveImage(null)}
              aria-label="Close Preview"
            >
              <X size={32} />
            </button>
            <img src={activeImage.src} alt={activeImage.title} />
            <div style={{ color: 'white', textAlign: 'center', marginTop: 14 }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{activeImage.title}</h4>
              <p style={{ fontSize: '0.9rem', color: '#c4b5fd' }}>{activeImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
