import React from 'react';
import { SCHOOL_EVENTS } from '../data/dbfData';
import { Calendar, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SchoolEvents({ onRequestClick }) {
  const ptmEvent = SCHOOL_EVENTS.find(e => e.id === 'ptm');
  const otherEvents = SCHOOL_EVENTS.filter(e => e.id !== 'ptm');

  return (
    <section className="py-20 bg-dbf-ivory relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <Calendar className="w-4 h-4 text-dbf-gold" />
            <span>Academic Calendar Integration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-dbf-navy tracking-tight">
            DESIGNED AROUND YOUR <span className="text-gradient-gold">SCHOOL CALENDAR.</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans leading-relaxed">
            Whether it's your quarterly PTM, annual day fete, or children's reading week — we align our book fair logistics around your existing school schedule.
          </p>
        </div>

        {/* Featured PTM Card */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-dbf-pastel-yellow via-white to-dbf-pastel-peach rounded-3xl p-6 sm:p-10 border-2 border-dbf-gold shadow-xl relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-6">
                
                <div className="inline-flex items-center space-x-2 bg-gold-gradient text-dbf-navy-deep px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>PRIMARY USE CASE: PTM FAIR</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-dbf-navy">
                    {ptmEvent.name}
                  </h3>
                  <p className="text-base text-dbf-gold font-bold font-serif italic">
                    "{ptmEvent.tagline}"
                  </p>
                </div>

                <p className="text-sm sm:text-base text-dbf-charcoal/85 leading-relaxed font-sans">
                  {ptmEvent.description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {ptmEvent.reasons.map((reason) => (
                    <div key={reason} className="flex items-center space-x-2.5 text-xs sm:text-sm text-dbf-navy font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-dbf-gold shrink-0" />
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={onRequestClick}
                    className="inline-flex items-center space-x-2 bg-gold-gradient text-dbf-navy-deep font-bold px-8 py-4 rounded-xl text-base shadow-gold-glow hover:brightness-105 active:scale-95 transition-all"
                  >
                    <span>PLAN YOUR NEXT PTM BOOK FAIR</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

              {/* Callout Quote */}
              <div className="lg:col-span-4 bg-white/90 p-6 rounded-2xl border-2 border-dbf-gold/30 text-center space-y-4 shadow-sm">
                <div className="text-3xl font-serif text-dbf-navy font-bold">
                  "Planning a PTM?"
                </div>
                <div className="text-lg font-serif text-dbf-gold font-bold">
                  Let us bring the books.
                </div>
                <p className="text-xs text-dbf-charcoal/80 font-sans leading-relaxed">
                  We handle 100% of display setup, transport, and event staffing with zero school disruption.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Other School Events Grid */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h4 className="text-xs font-bold uppercase tracking-wider text-dbf-navy text-center mb-6">
            Other School Calendar Opportunities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherEvents.map((evt) => (
              <div 
                key={evt.id}
                className="bg-white p-6 rounded-2xl border-2 border-dbf-gold/20 hover:border-dbf-gold shadow-sm hover:shadow-md transition-all space-y-2"
              >
                <div className="text-[11px] font-bold text-dbf-gold uppercase tracking-wider">
                  {evt.tagline}
                </div>
                <h5 className="font-serif text-lg font-bold text-dbf-navy">
                  {evt.name}
                </h5>
                <p className="text-xs text-dbf-charcoal/80 leading-relaxed font-sans">
                  {evt.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
