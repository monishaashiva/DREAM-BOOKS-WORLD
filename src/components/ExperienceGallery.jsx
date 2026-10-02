import React from 'react';
import { GALLERY_ITEMS } from '../data/dbfData';
import { Sparkles, Camera } from 'lucide-react';

export default function ExperienceGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-dbf-cream/20 to-dbf-ivory relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <Camera className="w-4 h-4 text-dbf-gold" />
            <span>Visual Atmosphere</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-dbf-navy tracking-tight">
            A GLIMPSE INTO THE <br className="hidden sm:inline" />
            <span className="text-gradient-gold">DREAM BOOKS FAIR EXPERIENCE</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans leading-relaxed">
            Visual representations of our multi-tier book display setups, height-adjusted student racks, and interactive reading environments brought directly to school campuses across Bengaluru.
          </p>
        </div>

        {/* Realistic AI Image Gallery Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden border-2 border-dbf-gold/30 shadow-light-card hover:shadow-premium-hover transition-all duration-300 group flex flex-col justify-between"
            >
              
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-dbf-cream overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-dbf-navy border border-dbf-gold/40 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {item.category}
                </div>

                {/* Sub-label */}
                <div className="absolute bottom-3 right-3 bg-dbf-navy/80 text-white text-[10px] font-sans px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                  Illustrative DBF Experience
                </div>
              </div>

              {/* Text Information */}
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-lg font-bold text-dbf-navy group-hover:text-dbf-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-dbf-charcoal/80 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Subtext Disclaimer */}
        <div className="mt-10 text-center text-xs text-dbf-charcoal/60 font-sans italic">
          Note: Visual representations depict typical Dream Books Fair campus installations and curated display standards across Bengaluru.
        </div>

      </div>
    </section>
  );
}
