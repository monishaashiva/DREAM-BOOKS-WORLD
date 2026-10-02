import React from 'react';
import { Calendar, BookOpen, ChevronRight, Award, MapPin, Sparkles, Heart } from 'lucide-react';
import { BRAND_INFO } from '../data/dbfData';

export default function Hero({ onRequestClick, onExploreClick }) {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-dbf-ivory via-dbf-cream/40 to-white text-dbf-navy overflow-hidden pt-8 pb-16 lg:py-20 border-b border-dbf-gold/20">
      
      {/* Soft Background Accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-dbf-pastel-yellow/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-dbf-pastel-peach/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Ribbon Tagline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Category Sub-badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs sm:text-sm text-dbf-navy font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-dbf-gold animate-pulse" />
              <span>School Book Fairs • Library Supply • Educational Resources</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold text-dbf-navy leading-[1.1] tracking-tight">
              YOUR NEXT PTM <br />
              <span className="text-gradient-gold">CAN OPEN A NEW WORLD.</span>
            </h1>

            {/* Floating Brand Ribbon Tagline */}
            <div className="pt-1 pb-2">
              <div className="inline-block ribbon-banner px-6 sm:px-8 py-3 shadow-ribbon animate-ribbonFloat">
                <div className="text-xs sm:text-sm font-serif font-extrabold uppercase tracking-widest text-dbf-navy flex items-center space-x-2">
                  <span className="text-dbf-gold text-lg">“</span>
                  <span>{BRAND_INFO.tagline}</span>
                  <span className="text-dbf-gold text-lg">”</span>
                </div>
              </div>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-dbf-charcoal/85 font-sans font-normal max-w-2xl leading-relaxed">
              Bring a thoughtfully curated world of books to your school and give students and families a chance to discover something new during Parent-Teacher Meetings.
            </p>

            {/* Trust Micro Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl text-xs sm:text-sm text-dbf-navy font-semibold">
              <div className="flex items-center space-x-2 bg-white/80 p-3 rounded-xl border border-dbf-gold/30 shadow-sm">
                <Award className="w-4 h-4 text-dbf-gold shrink-0" />
                <span><strong>15+ Years</strong> Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 p-3 rounded-xl border border-dbf-gold/30 shadow-sm">
                <BookOpen className="w-4 h-4 text-dbf-gold shrink-0" />
                <span><strong>500+</strong> Schools Served</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 p-3 rounded-xl border border-dbf-gold/30 shadow-sm col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-dbf-gold shrink-0" />
                <span>Bengaluru Hub</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onRequestClick}
                className="inline-flex items-center justify-center space-x-3 bg-gold-gradient text-dbf-navy-deep font-bold px-8 py-4 rounded-xl text-base sm:text-lg shadow-gold-glow hover:brightness-105 active:scale-95 transition-all duration-200 group"
              >
                <Calendar className="w-5 h-5 text-dbf-navy-deep group-hover:rotate-6 transition-transform" />
                <span>REQUEST A BOOK FAIR</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-dbf-cream/50 text-dbf-navy border-2 border-dbf-gold/40 hover:border-dbf-gold font-bold px-6 py-4 rounded-xl text-base transition-all duration-200 shadow-sm"
              >
                <BookOpen className="w-5 h-5 text-dbf-gold" />
                <span>EXPLORE OUR EXPERIENCE</span>
              </button>
            </div>

            {/* Sub-note */}
            <p className="text-xs text-dbf-charcoal/60 italic">
              Complete turnkey setup & operations managed by Dream Books Fair team
            </p>

          </div>

          {/* Right Column: High Quality Realistic AI Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-3 bg-white border-2 border-dbf-gold/40 shadow-2xl overflow-hidden group">
              
              {/* Realistic Hero Photo Asset */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-dbf-cream">
                <img 
                  src="/hero-fair.png" 
                  alt="Dream Books Fair School Experience" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-dbf-gold/30 shadow-md text-left">
                  <div className="text-xs font-bold text-dbf-navy flex items-center justify-between">
                    <span className="font-serif text-sm">School Book Fair Experience</span>
                    <span className="text-dbf-gold text-[10px] uppercase font-sans font-bold bg-dbf-gold/15 px-2 py-0.5 rounded">
                      Bengaluru
                    </span>
                  </div>
                  <div className="text-[11px] text-dbf-charcoal/70 font-sans mt-0.5">
                    Curated book displays bringing joy & discovery to school corridors
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="text-[11px] text-dbf-charcoal/60 italic text-center pt-2 font-sans">
                Illustrative representation of the Dream Books Fair experience
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
