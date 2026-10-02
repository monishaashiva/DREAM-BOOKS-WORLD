import React from 'react';
import { UserCheck, Users, BookOpen, Heart, Home, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function PtmJourney({ onRequestClick }) {
  const journeySteps = [
    {
      num: "01",
      icon: UserCheck,
      title: "Parent Arrives",
      desc: "Parents enter the school campus for the scheduled Parent-Teacher Meeting.",
      tag: "School Arrival",
      bg: "bg-dbf-pastel-blue"
    },
    {
      num: "02",
      icon: Users,
      title: "PTM Discussion",
      desc: "Parents engage with class educators to discuss student progress and milestones.",
      tag: "Academic Check",
      bg: "bg-dbf-pastel-yellow"
    },
    {
      num: "03",
      icon: BookOpen,
      title: "Child Discovers Books",
      desc: "While waiting or after the meeting, children explore height-adjusted, thematic book racks.",
      tag: "Literary Spark",
      bg: "bg-dbf-pastel-peach"
    },
    {
      num: "04",
      icon: Heart,
      title: "Family Explores",
      desc: "Parents and children browse titles together, encouraging quality decision-making.",
      tag: "Shared Experience",
      bg: "bg-dbf-pastel-pink"
    },
    {
      num: "05",
      icon: Home,
      title: "A New Book Goes Home",
      desc: "Students take home new books that kindle curiosity, knowledge, and lifelong reading habits.",
      tag: "Lifelong Habit",
      bg: "bg-dbf-pastel-mint"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-dbf-cream/30 to-dbf-ivory relative overflow-hidden border-b border-dbf-gold/20">
      
      {/* Background Soft Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-dbf-pastel-peach/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dbf-pastel-blue/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <Sparkles className="w-4 h-4 text-dbf-gold" />
            <span>Primary School Use Case</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-dbf-navy tracking-tight">
            MAKE YOUR NEXT PTM A <span className="text-gradient-gold">READING EXPERIENCE.</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans leading-relaxed">
            While parents meet teachers, children can discover something new to read. Dream Books Fair brings a thoughtfully curated collection of children's books directly to your school — making reading accessible, exciting and convenient for families.
          </p>
        </div>

        {/* Editorial Photo Showcase + Value Callout */}
        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border-2 border-dbf-gold/30 shadow-xl">
          
          {/* PTM Realistic Image */}
          <div className="lg:col-span-7 relative group">
            <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-dbf-cream shadow-md border border-dbf-gold/20">
              <img 
                src="/ptm-scene.png" 
                alt="Parents and children exploring books during school PTM" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="text-[11px] text-dbf-charcoal/60 italic text-center pt-2 font-sans">
              Illustrative representation of the Dream Books Fair experience
            </p>
          </div>

          {/* Value Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-dbf-pastel-yellow p-4 rounded-2xl border border-dbf-gold/30 space-y-1">
              <h3 className="font-serif text-xl font-bold text-dbf-navy">
                Why Principals Prefer PTM Book Fairs
              </h3>
              <p className="text-xs text-dbf-charcoal/80 leading-relaxed font-sans">
                PTM days bring over 90% parent footfall. Introducing Dream Books Fair turns waiting time into a memorable family reading celebration.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-dbf-navy font-semibold">
              <div className="flex items-center space-x-2.5 bg-dbf-cream/60 p-2.5 rounded-xl border border-dbf-gold/20">
                <CheckCircle2 className="w-4 h-4 text-dbf-gold shrink-0" />
                <span>Zero disruption to academic schedules</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-dbf-cream/60 p-2.5 rounded-xl border border-dbf-gold/20">
                <CheckCircle2 className="w-4 h-4 text-dbf-gold shrink-0" />
                <span>Managed 100% by Dream Books Fair team</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-dbf-cream/60 p-2.5 rounded-xl border border-dbf-gold/20">
                <CheckCircle2 className="w-4 h-4 text-dbf-gold shrink-0" />
                <span>Enriches school library collections</span>
              </div>
            </div>

            <button
              onClick={onRequestClick}
              className="w-full inline-flex items-center justify-center space-x-2 bg-gold-gradient text-dbf-navy-deep font-bold py-3.5 px-6 rounded-xl shadow-gold-glow hover:brightness-105 active:scale-95 transition-all text-sm"
            >
              <span>BRING A BOOK FAIR TO YOUR SCHOOL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Visual Journey Flowchart */}
        <div className="mt-16">
          <h3 className="text-center font-serif text-2xl font-bold text-dbf-navy mb-8">
            The PTM Family Journey
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.num}
                  className={`${step.bg} p-6 rounded-2xl border border-dbf-gold/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="w-9 h-9 rounded-xl bg-white text-dbf-navy font-bold font-serif flex items-center justify-center text-sm shadow-sm group-hover:bg-dbf-navy group-hover:text-dbf-gold transition-colors">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-bold text-dbf-navy bg-white/80 px-2 py-0.5 rounded">
                        {step.tag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center text-dbf-navy shadow-sm">
                      <Icon className="w-6 h-6 text-dbf-navy" />
                    </div>

                    <h4 className="font-serif text-base font-bold text-dbf-navy">
                      {step.title}
                    </h4>

                    <p className="text-xs text-dbf-charcoal/80 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-dbf-navy/10 flex items-center justify-between text-[11px] font-semibold text-dbf-navy/60">
                    <span>Phase {idx + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-dbf-gold" />
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
