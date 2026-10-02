import React from 'react';
import { WHY_CHOOSE_US_PILLARS } from '../data/dbfData';
import { Award, BookOpen, Heart, Truck, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

const PILLAR_ICONS = [BookOpen, Award, Heart, Truck, Layers];

export default function WhyChooseUs({ onRequestClick }) {
  return (
    <section className="py-20 bg-dbf-ivory text-dbf-navy relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <ShieldCheck className="w-4 h-4 text-dbf-gold" />
            <span>The DBF Institutional Distinction</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-dbf-navy">
            WHY <span className="text-gradient-gold">DREAM BOOKS FAIR?</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans leading-relaxed">
            Founded on a passion for reading and backed by 15+ years of educational experience, we offer school management complete confidence in every event we host.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || BookOpen;

            return (
              <div
                key={pillar.title}
                className={`${pillar.bg} rounded-3xl p-8 border-2 border-dbf-gold/30 hover:border-dbf-gold shadow-light-card hover:shadow-premium-hover hover:-translate-y-1.5 transition-all duration-300 space-y-4 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-dbf-gold/30 text-dbf-gold font-bold flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 text-dbf-gold" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-dbf-gold tracking-widest uppercase">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-dbf-navy tracking-wide">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-sm font-bold text-dbf-navy font-serif">
                    {pillar.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-dbf-charcoal/85 font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-dbf-navy/10 flex items-center text-xs text-dbf-navy font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-dbf-gold mr-1.5" />
                  <span>Proven across 500+ Bengaluru schools</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
