import React from 'react';
import { WHAT_SCHOOL_GETS } from '../data/dbfData';
import { Gift, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function WhatSchoolGets({ onRequestClick }) {
  return (
    <section className="py-20 bg-dbf-ivory relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <Gift className="w-4 h-4 text-dbf-gold" />
            <span>Institutional Deliverables</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-dbf-navy tracking-tight">
            WHAT YOUR <span className="text-gradient-gold">SCHOOL GETS</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans leading-relaxed">
            Organizing a Dream Books Fair brings direct tangible value to your school library, teaching staff, students, and parent community.
          </p>
        </div>

        {/* Editorial Deliverable Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_SCHOOL_GETS.map((item, idx) => (
            <div
              key={item.title}
              className={`${item.bg} rounded-3xl p-8 border-2 border-dbf-gold/30 hover:border-dbf-gold shadow-light-card hover:shadow-premium-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div className="space-y-4">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-dbf-navy/10 pb-3">
                  <span className="w-8 h-8 rounded-xl bg-white text-dbf-navy font-bold font-serif flex items-center justify-center text-sm shadow-sm group-hover:bg-dbf-gold group-hover:text-dbf-navy transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-dbf-navy bg-white/90 px-3 py-1 rounded-full border border-dbf-gold/20">
                    {item.highlight}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-dbf-navy group-hover:text-dbf-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dbf-charcoal/85 leading-relaxed font-sans pt-2">
                    {item.description}
                  </p>
                </div>

              </div>

              <div className="pt-4 mt-6 border-t border-dbf-navy/10 flex items-center text-xs font-bold text-dbf-navy">
                <Check className="w-4 h-4 text-dbf-gold mr-1.5" />
                <span>Included in every school book fair</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Card */}
        <div className="mt-14 bg-gradient-to-r from-dbf-pastel-yellow via-white to-dbf-pastel-peach rounded-3xl p-8 border-2 border-dbf-gold/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-extrabold text-dbf-navy">
              Enrich Your School Book Fair Experience
            </h3>
            <p className="text-sm text-dbf-charcoal/85 max-w-2xl font-sans">
              Dream Books Fair manages 100% of transport, setup, display organization, personnel, and operations seamlessly.
            </p>
          </div>
          <button
            onClick={onRequestClick}
            className="shrink-0 bg-gold-gradient text-dbf-navy-deep font-bold px-8 py-4 rounded-xl shadow-gold-glow hover:brightness-105 active:scale-95 transition-all text-sm flex items-center space-x-2"
          >
            <span>BOOK YOUR SCHOOL DATE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
