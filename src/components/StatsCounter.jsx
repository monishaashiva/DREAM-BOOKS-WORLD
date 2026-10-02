import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data/dbfData';
import { Award, BookOpen, Calendar, Building2, Sparkles } from 'lucide-react';

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStatIcon = (index) => {
    switch (index) {
      case 0: return Building2;
      case 1: return Calendar;
      case 2: return BookOpen;
      case 3: return Award;
      default: return BookOpen;
    }
  };

  return (
    <section id="why-us" ref={sectionRef} className="py-20 bg-dbf-ivory text-dbf-navy relative overflow-hidden border-b border-dbf-gold/20">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dbf-pastel-yellow/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <Sparkles className="w-4 h-4 text-dbf-gold" />
            <span>Proven Educational Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight text-dbf-navy">
            BUILT ON EXPERIENCE. <br className="hidden sm:inline" />
            <span className="text-gradient-gold">DRIVEN BY BOOKS.</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Since 2010, Dream Books World has been empowering schools across Bengaluru with curated literature, seamless event management, and dedicated educational support.
          </p>
        </div>

        {/* 4 Soft Pastel Statistic Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = getStatIcon(idx);
            return (
              <div
                key={stat.label}
                className={`${stat.bg} p-8 rounded-3xl border-2 border-dbf-gold/30 hover:border-dbf-gold shadow-light-card hover:shadow-premium-hover hover:-translate-y-1.5 transition-all duration-300 text-center space-y-4 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-white flex items-center justify-center text-dbf-navy shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-dbf-gold" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-4xl sm:text-5xl font-serif font-extrabold text-gradient-gold tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-base sm:text-lg font-bold text-dbf-navy font-serif">
                      {stat.label}
                    </div>
                  </div>

                  <p className="text-xs text-dbf-charcoal/80 leading-relaxed font-sans pt-2 border-t border-dbf-navy/10">
                    {stat.description}
                  </p>
                </div>

                <div className="text-[11px] font-bold text-dbf-navy/60 uppercase tracking-wider pt-2">
                  Institutional Guarantee
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
