import React, { useState } from 'react';
import { AGE_GROUPS } from '../data/dbfData';
import { Sparkles, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

export default function AgeDiscovery({ onRequestClick }) {
  const [activeAge, setActiveAge] = useState("6–8");

  const currentGroup = AGE_GROUPS.find(g => g.range === activeAge) || AGE_GROUPS[2];

  return (
    <section className="py-20 bg-dbf-ivory relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <Sparkles className="w-4 h-4 text-dbf-gold" />
            <span>Developmental Reading Stages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-dbf-navy tracking-tight">
            A BOOK FOR EVERY STAGE OF <span className="text-gradient-gold">GROWING UP.</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans leading-relaxed">
            From sensory board books for early toddlers to complex literature and competitive exam prep for high schoolers — our collection scales seamlessly with student development.
          </p>
        </div>

        {/* Age Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex p-1.5 bg-dbf-cream rounded-2xl border border-dbf-gold/30 shadow-sm overflow-x-auto max-w-full">
            {AGE_GROUPS.map((group) => (
              <button
                key={group.range}
                onClick={() => setActiveAge(group.range)}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center space-x-2 ${
                  activeAge === group.range
                    ? 'bg-gold-gradient text-dbf-navy-deep shadow-sm scale-105'
                    : 'text-dbf-navy/80 hover:text-dbf-navy hover:bg-white/50'
                }`}
              >
                <span className="font-serif text-base">{group.range}</span>
                <span className="text-xs font-normal opacity-90 hidden sm:inline">Years</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Age Group Card */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className={`${currentGroup.bg} rounded-3xl p-6 sm:p-10 border-2 border-dbf-gold/40 shadow-xl transition-all duration-300 relative overflow-hidden`}>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Info */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl sm:text-4xl font-serif font-extrabold text-dbf-navy">
                      Ages {currentGroup.range}
                    </span>
                    <span className="bg-white text-dbf-navy border border-dbf-gold/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {currentGroup.label}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-gradient-gold">
                    {currentGroup.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-dbf-charcoal/90 leading-relaxed font-sans">
                  {currentGroup.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-dbf-navy">Key Collection Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentGroup.highlights.map((item) => (
                      <div key={item} className="flex items-center space-x-2.5 bg-white/90 p-3 rounded-xl border border-dbf-gold/20 text-xs sm:text-sm text-dbf-navy font-semibold shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-dbf-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={onRequestClick}
                    className="inline-flex items-center space-x-2 bg-dbf-navy text-dbf-gold hover:bg-dbf-navy-dark font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md"
                  >
                    <span>Request Fair for Ages {currentGroup.range}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Right Illustrative Box */}
              <div className="lg:col-span-5">
                <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-dbf-gold/30 shadow-md text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-dbf-pastel-yellow border border-dbf-gold/40 flex items-center justify-center text-dbf-gold">
                    <BookOpen className="w-7 h-7 text-dbf-gold" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-lg font-bold text-dbf-navy">Curated Selection Guarantee</h4>
                    <p className="text-xs text-dbf-charcoal/80 leading-relaxed font-sans">
                      Every single title for {currentGroup.range} years is pre-screened to align with school ethics, age curiosity, and educational value.
                    </p>
                  </div>
                  <div className="bg-dbf-cream p-2.5 rounded-xl border border-dbf-gold/20 text-xs text-dbf-navy font-bold">
                    100% Age-Appropriate Literature
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
