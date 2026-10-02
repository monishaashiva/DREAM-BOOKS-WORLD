import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PtmJourney from './components/PtmJourney';
import StatsCounter from './components/StatsCounter';
import CuratedCollection from './components/CuratedCollection';
import AgeDiscovery from './components/AgeDiscovery';
import Publishers from './components/Publishers';
import WhatSchoolGets from './components/WhatSchoolGets';
import Services from './components/Services';
import SchoolEvents from './components/SchoolEvents';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import ExperienceGallery from './components/ExperienceGallery';
import CompanyStory from './components/CompanyStory';
import RequestFormModal from './components/RequestFormModal';
import Footer from './components/Footer';
import MobileQuickBar from './components/MobileQuickBar';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleExploreClick = () => {
    const element = document.querySelector('#why-us');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-dbf-ivory font-sans text-dbf-charcoal selection:bg-dbf-gold selection:text-dbf-navy-deep pb-16 md:pb-0">
      
      {/* Header */}
      <Header onRequestClick={handleOpenModal} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero 
          onRequestClick={handleOpenModal} 
          onExploreClick={handleExploreClick} 
        />

        {/* PTM Hero Message & Visual Journey */}
        <PtmJourney onRequestClick={handleOpenModal} />

        {/* Stats Counter */}
        <StatsCounter />

        {/* Curated Book Collection */}
        <CuratedCollection onRequestClick={handleOpenModal} />

        {/* Age-Based Book Discovery */}
        <AgeDiscovery onRequestClick={handleOpenModal} />

        {/* Publishers Wall */}
        <Publishers />

        {/* What Your School Gets */}
        <WhatSchoolGets onRequestClick={handleOpenModal} />

        {/* Services & Possibilities */}
        <Services onRequestClick={handleOpenModal} />

        {/* School Events Integration */}
        <SchoolEvents onRequestClick={handleOpenModal} />

        {/* How It Works */}
        <HowItWorks onRequestClick={handleOpenModal} />

        {/* Why Choose Us */}
        <WhyChooseUs onRequestClick={handleOpenModal} />

        {/* Visual Experience Gallery */}
        <ExperienceGallery />

        {/* Company Story & Brand Philosophy */}
        <CompanyStory />

        {/* Inline Request Form */}
        <RequestFormModal inline={true} />
      </main>

      {/* Footer */}
      <Footer onRequestClick={handleOpenModal} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar onRequestClick={handleOpenModal} />

      {/* Request Form Popup Modal */}
      <RequestFormModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        inline={false} 
      />

    </div>
  );
}
