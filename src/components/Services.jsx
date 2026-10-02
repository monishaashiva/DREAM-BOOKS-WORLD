import React from 'react';
import { SERVICES } from '../data/dbfData';
import { BookOpen, Library, FileText, Compass, Users, Volume2, ArrowRight, Check } from 'lucide-react';

const SERVICE_ICONS = {
  'school-book-fair': BookOpen,
  'library-book-supply': Library,
  'textbook-supply': FileText,
  'reference-books': Compass,
  'author-visits': Users,
  'storytelling': Volume2
};

export default function Services({ onRequestClick }) {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white via-dbf-cream/30 to-dbf-ivory relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Dedicated Library Setup Showcase */}
        <div className="bg-gradient-to-r from-dbf-pastel-mint via-white to-dbf-pastel-blue rounded-3xl p-6 sm:p-10 border-2 border-dbf-gold/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 bg-white border border-dbf-gold/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy shadow-sm">
                <Library className="w-4 h-4 text-dbf-gold" />
                <span>School Library Procurement</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-dbf-navy tracking-tight">
                EXTEND THE EXPERIENCE TO YOUR <span className="text-gradient-gold">SCHOOL LIBRARY.</span>
              </h2>

              <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans leading-relaxed">
                Alongside our book fairs, Dream Books Fair provides curated library supply solutions across age groups, subjects and reading interests — helping schools build collections that support reading, learning, and discovery.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-dbf-navy font-semibold pt-2">
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-dbf-gold shrink-0" />
                  <span>Custom catalog matching CBSE, ICSE & State curriculum</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-dbf-gold shrink-0" />
                  <span>15% special discount for teacher & librarian recommendations</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-dbf-gold shrink-0" />
                  <span>Hardbound editions & durable school library bindings</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onRequestClick}
                  className="inline-flex items-center space-x-2 bg-dbf-navy text-dbf-gold hover:bg-dbf-navy-dark font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-md"
                >
                  <span>Explore Library Curation Options</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* School Library Image */}
            <div className="lg:col-span-5 relative group">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white border-2 border-dbf-gold/30 shadow-md">
                <img 
                  src="/school-library.png" 
                  alt="Modern school library with colorful bookshelves" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[11px] text-dbf-charcoal/60 italic text-center pt-2 font-sans">
                Illustrative representation of Dream Books Fair library supply solutions
              </p>
            </div>

          </div>
        </div>

        {/* Services Overview Grid */}
        <div className="space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
              <BookOpen className="w-4 h-4 text-dbf-gold" />
              <span>Comprehensive Educational Portfolio</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-dbf-navy tracking-tight">
              ONE PARTNER. <span className="text-gradient-gold">MANY POSSIBILITIES.</span>
            </h3>

            <p className="text-base text-dbf-charcoal/85 font-sans leading-relaxed">
              Serving as an end-to-end partner for school book fairs, library supplies, academic textbooks, author sessions, and reading activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const IconComponent = SERVICE_ICONS[service.id] || BookOpen;
              const isPrimary = service.id === 'school-book-fair';
              const isSecondary = service.id === 'library-book-supply';

              return (
                <div
                  key={service.id}
                  className={`rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col justify-between group ${
                    isPrimary
                      ? 'bg-gradient-to-b from-dbf-pastel-yellow via-white to-dbf-pastel-peach border-dbf-gold shadow-xl'
                      : isSecondary
                      ? 'bg-gradient-to-b from-dbf-pastel-mint via-white to-dbf-pastel-blue border-dbf-gold/60 shadow-md'
                      : 'bg-white border-dbf-gold/30 shadow-sm hover:border-dbf-gold hover:-translate-y-1'
                  }`}
                >
                  <div className="space-y-4">
                    
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-dbf-gold/30 flex items-center justify-center text-dbf-navy shadow-sm group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7 text-dbf-gold" />
                      </div>

                      <span className="text-[11px] font-bold text-dbf-navy bg-white px-3 py-1 rounded-full border border-dbf-gold/30 shadow-sm uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>

                    <h4 className="font-serif text-2xl font-bold text-dbf-navy">
                      {service.title}
                    </h4>

                    <p className="text-sm text-dbf-charcoal/80 leading-relaxed font-sans">
                      {service.description}
                    </p>

                    <div className="space-y-2 pt-2 text-xs font-semibold text-dbf-navy">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center space-x-2">
                          <Check className="w-3.5 h-3.5 text-dbf-gold shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  <div className="pt-6 mt-6 border-t border-dbf-navy/10">
                    <button
                      onClick={onRequestClick}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-dbf-navy text-dbf-gold hover:bg-dbf-navy-dark shadow-sm flex items-center justify-center space-x-2 transition-all"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
