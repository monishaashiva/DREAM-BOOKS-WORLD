import React from 'react';
import { HOW_IT_WORKS } from '../data/dbfData';
import { CalendarCheck, Compass, Library, Truck, Compass as CompassIcon, Home, Sparkles, ArrowRight } from 'lucide-react';

const STEP_ICONS = [CalendarCheck, Compass, Library, Truck, CompassIcon, Home];
const STEP_COLORS = ['bg-dbf-pastel-yellow', 'bg-dbf-pastel-peach', 'bg-dbf-pastel-blue', 'bg-dbf-pastel-mint', 'bg-dbf-pastel-purple', 'bg-dbf-pastel-pink'];

export default function HowItWorks({ onRequestClick }) {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white via-dbf-cream/20 to-dbf-ivory relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <Sparkles className="w-4 h-4 text-dbf-gold" />
            <span>Turnkey School Setup</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-dbf-navy tracking-tight">
            FROM IDEA TO <span className="text-gradient-gold">BOOK FAIR.</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans leading-relaxed">
            Organizing a book fair at your school is completely effortless. We handle 100% of curation, transport, display setup, and staff coordination.
          </p>
        </div>

        {/* 6 Step Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOW_IT_WORKS.map((item, idx) => {
            const Icon = STEP_ICONS[idx] || CalendarCheck;
            const bgClass = STEP_COLORS[idx] || 'bg-dbf-cream';

            return (
              <div
                key={item.step}
                className={`${bgClass} rounded-3xl p-8 border-2 border-dbf-gold/30 shadow-light-card hover:shadow-premium-hover hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between`}
              >
                {/* Step Pill */}
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-white text-dbf-navy font-serif font-bold text-lg flex items-center justify-center shadow-sm group-hover:bg-dbf-navy group-hover:text-dbf-gold transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-dbf-navy shadow-sm">
                    <Icon className="w-5 h-5 text-dbf-gold" />
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <h3 className="font-serif text-xl font-bold text-dbf-navy group-hover:text-dbf-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-dbf-charcoal/85 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-dbf-navy/10 text-[11px] font-bold text-dbf-navy/70 flex items-center justify-between">
                  <span>Step {idx + 1} of 6</span>
                  <span className="text-dbf-gold font-bold">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onRequestClick}
            className="inline-flex items-center space-x-2 bg-gold-gradient text-dbf-navy-deep font-bold px-8 py-4 rounded-xl text-base shadow-gold-glow hover:brightness-105 transition-all"
          >
            <span>START STEP 01 — TELL US YOUR DATE</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
