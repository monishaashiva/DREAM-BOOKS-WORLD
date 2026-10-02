import React from 'react';
import { BRAND_INFO } from '../data/dbfData';
import { BookOpen, MapPin, Calendar, Building2, Quote, Sparkles } from 'lucide-react';

export default function CompanyStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-dbf-cream/30 via-white to-dbf-ivory relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Block */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-dbf-cream/40 to-white rounded-3xl p-8 sm:p-12 border-2 border-dbf-gold/40 shadow-xl space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
              <Building2 className="w-4 h-4 text-dbf-gold" />
              <span>Institutional Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-dbf-navy tracking-tight">
              FROM DREAM BOOKS WORLD TO <br className="hidden sm:inline" />
              <span className="text-gradient-gold">DREAM BOOKS FAIR</span>
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-dbf-charcoal/85 leading-relaxed font-sans text-center max-w-3xl mx-auto">
            <p>
              Established in <strong className="text-dbf-navy font-bold">2010</strong>, <strong className="text-dbf-navy font-bold">Dream Books World</strong> has grown around a simple belief — every child deserves the opportunity to discover books that spark curiosity, imagination and learning.
            </p>
            <p>
              <strong className="text-dbf-navy font-bold">Dream Books Fair</strong> brings that philosophy directly into the school environment through curated book fairs, library supply, and dedicated educational book distribution across Bengaluru.
            </p>
          </div>

          {/* Heritage Quick Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-dbf-gold/20 text-center text-xs sm:text-sm font-semibold text-dbf-navy">
            <div className="bg-dbf-pastel-yellow p-4 rounded-2xl border border-dbf-gold/30 flex flex-col items-center justify-center space-y-1">
              <MapPin className="w-5 h-5 text-dbf-gold" />
              <span>Bengaluru-Based Hub</span>
              <span className="text-[11px] text-dbf-charcoal/70 font-normal">Vidhyaranyapura HQ</span>
            </div>
            <div className="bg-dbf-pastel-peach p-4 rounded-2xl border border-dbf-gold/30 flex flex-col items-center justify-center space-y-1">
              <Calendar className="w-5 h-5 text-dbf-gold" />
              <span>15+ Years Experience</span>
              <span className="text-[11px] text-dbf-charcoal/70 font-normal">Established 2010</span>
            </div>
            <div className="bg-dbf-pastel-mint p-4 rounded-2xl border border-dbf-gold/30 flex flex-col items-center justify-center space-y-1">
              <BookOpen className="w-5 h-5 text-dbf-gold" />
              <span>500+ Schools Served</span>
              <span className="text-[11px] text-dbf-charcoal/70 font-normal">Across Karnataka</span>
            </div>
          </div>

        </div>

        {/* Brand Philosophy Ribbon Quote Section */}
        <div className="mt-16 max-w-5xl mx-auto bg-gradient-to-r from-dbf-pastel-yellow via-white to-dbf-pastel-peach rounded-3xl p-8 sm:p-14 border-2 border-dbf-gold shadow-2xl relative text-center space-y-6 overflow-hidden">
          
          <div className="inline-flex items-center space-x-2 bg-gold-gradient text-dbf-navy-deep px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Tagline</span>
          </div>

          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-dbf-navy tracking-tight leading-tight">
            "TO EVERY BOOK LOVER, <br />
            <span className="text-gradient-gold">A NEW BOOK TO ENJOY."</span>
          </h3>

          <p className="text-base sm:text-xl text-dbf-charcoal/90 font-serif italic max-w-2xl mx-auto">
            "Because sometimes, one book is enough to begin a lifelong love of reading."
          </p>

          <div className="pt-2 text-xs text-dbf-gold uppercase tracking-widest font-sans font-bold">
            Dream Books Fair • A Unit of Dream Books World
          </div>

        </div>

      </div>
    </section>
  );
}
