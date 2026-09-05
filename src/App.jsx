import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileBottomBar from './components/MobileBottomBar';
import useScrollReveal from './hooks/useScrollReveal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import SchoolTuition from './pages/SchoolTuition';
import BoardPreparation from './pages/BoardPreparation';
import Intermediate from './pages/Intermediate';
import Graduation from './pages/Graduation';
import Arts from './pages/Arts';
import Commerce from './pages/Commerce';
import Science from './pages/Science';
import ProfessionalCourses from './pages/ProfessionalCourses';
import DCA from './pages/DCA';
import DTP from './pages/DTP';
import Tally from './pages/Tally';
import AnimationVFX from './pages/AnimationVFX';
import GraphicsDesign from './pages/GraphicsDesign';
import AITechnology from './pages/AITechnology';
import JavaProgramming from './pages/JavaProgramming';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import './App.css';

function AppContent() {
  useScrollReveal();

  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/school-tuition" element={<SchoolTuition />} />
          <Route path="/board-preparation" element={<BoardPreparation />} />
          <Route path="/intermediate" element={<Intermediate />} />
          <Route path="/graduation" element={<Graduation />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/science" element={<Science />} />
          <Route path="/professional-courses" element={<ProfessionalCourses />} />
          <Route path="/dca" element={<DCA />} />
          <Route path="/dtp" element={<DTP />} />
          <Route path="/tally" element={<Tally />} />
          <Route path="/animation-vfx" element={<AnimationVFX />} />
          <Route path="/graphics-design" element={<GraphicsDesign />} />
          <Route path="/ai-technology" element={<AITechnology />} />
          <Route path="/java-programming" element={<JavaProgramming />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
