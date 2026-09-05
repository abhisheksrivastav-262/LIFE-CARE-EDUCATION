import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHero({ title, subtitle, category = 'Program' }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>{category}</span>
          <ChevronRight size={14} />
          <span style={{ color: 'white' }}>{title}</span>
        </div>
        <h1 className="text-heading-xl">{title}</h1>
        {subtitle && <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.85)' }}>{subtitle}</p>}
      </div>
    </section>
  );
}
