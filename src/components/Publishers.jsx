import React from 'react';
import { INTERNATIONAL_PUBLISHERS, INDIAN_PUBLISHERS } from '../data/dbfData';
import { ShieldCheck, Globe, Building } from 'lucide-react';

export default function Publishers() {
  return (
    <section id="publishers" className="py-20 bg-gradient-to-b from-white via-dbf-cream/30 to-dbf-ivory text-dbf-navy relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <ShieldCheck className="w-4 h-4 text-dbf-gold" />
            <span>Trusted Publisher Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-dbf-navy">
            BOOKS FROM PUBLISHERS <br className="hidden sm:inline" />
            <span className="text-gradient-gold">YOU KNOW & TRUST.</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans max-w-2xl mx-auto leading-relaxed">
            We partner with premier international publishing houses and acclaimed Indian publication trusts to bring authentic, high-quality literature directly to school campuses.
          </p>
        </div>

        {/* Publishers Section */}
        <div className="mt-14 space-y-10">
          
          {/* International Publishers */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-dbf-gold/20 pb-2">
              <span className="text-xs uppercase tracking-widest text-dbf-navy font-bold flex items-center space-x-2">
                <Globe className="w-4 h-4 text-dbf-gold" />
                <span>International Publishing Houses</span>
              </span>
              <span className="text-xs text-dbf-navy/60 font-semibold">16 Global Houses</span>
            </div>

            <div className="relative overflow-hidden marquee-container py-2">
              <div className="flex space-x-4 animate-marquee whitespace-nowrap marquee-content">
                {INTERNATIONAL_PUBLISHERS.concat(INTERNATIONAL_PUBLISHERS).map((pub, idx) => (
                  <div
                    key={`${pub}-${idx}`}
                    className="inline-flex items-center px-6 py-3.5 rounded-2xl bg-white border-2 border-dbf-gold/30 hover:border-dbf-gold shadow-sm hover:shadow-md transition-all cursor-default group"
                  >
                    <span className="font-serif text-base font-bold text-dbf-navy group-hover:text-dbf-gold transition-colors">
                      {pub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Indian Publishers */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between border-b border-dbf-gold/20 pb-2">
              <span className="text-xs uppercase tracking-widest text-dbf-navy font-bold flex items-center space-x-2">
                <Building className="w-4 h-4 text-dbf-gold" />
                <span>Acclaimed Indian Publication Trusts</span>
              </span>
              <span className="text-xs text-dbf-navy/60 font-semibold">18 National Trusts</span>
            </div>

            <div className="relative overflow-hidden marquee-container py-2">
              <div className="flex space-x-4 animate-marquee whitespace-nowrap marquee-content" style={{ animationDirection: 'reverse' }}>
                {INDIAN_PUBLISHERS.concat(INDIAN_PUBLISHERS).map((pub, idx) => (
                  <div
                    key={`${pub}-${idx}`}
                    className="inline-flex items-center px-6 py-3.5 rounded-2xl bg-white border-2 border-dbf-gold/30 hover:border-dbf-gold shadow-sm hover:shadow-md transition-all cursor-default group"
                  >
                    <span className="font-serif text-base font-bold text-dbf-navy group-hover:text-dbf-gold transition-colors">
                      {pub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Authenticity Note */}
        <div className="mt-12 bg-dbf-cream/80 p-4 rounded-2xl border border-dbf-gold/30 text-center text-xs text-dbf-navy font-medium max-w-2xl mx-auto shadow-sm">
          All books supplied by Dream Books Fair are sourced directly from authorized publishing partners and official distributors, guaranteeing 100% genuine print quality.
        </div>

      </div>
    </section>
  );
}
