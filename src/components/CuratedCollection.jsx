import React, { useState } from 'react';
import { BOOK_CATEGORIES } from '../data/dbfData';
import { BookOpen, Search, X, Library, Sparkles, ChevronRight } from 'lucide-react';

export default function CuratedCollection({ onRequestClick }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filterTabs = ['All', 'Early Learning', 'Stories & Fiction', 'Academic & STEM', 'Activities & Toys'];

  const getGroupForCategory = (cat) => {
    if (['Preschool Books', 'Picture Books', 'Handwriting', 'Fairy Tales'].includes(cat.name)) return 'Early Learning';
    if (['Story Books', 'Fiction', 'Non-Fiction', 'Biographies', 'Classics'].includes(cat.name)) return 'Stories & Fiction';
    if (['Study Skills', 'Reference Books', 'Olympiad Books', 'Encyclopedias', 'Science & Maths', 'Atlas & Quiz', 'Academic Books', 'Textbooks'].includes(cat.name)) return 'Academic & STEM';
    return 'Activities & Toys';
  };

  const filteredCategories = BOOK_CATEGORIES.filter(cat => {
    const group = getGroupForCategory(cat);
    const matchesFilter = activeFilter === 'All' || group === activeFilter;
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase()) || cat.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="collection" className="py-20 bg-gradient-to-b from-white via-dbf-cream/20 to-dbf-ivory relative overflow-hidden border-b border-dbf-gold/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-dbf-navy">
            <Library className="w-4 h-4 text-dbf-gold" />
            <span>Digital Bookstore Exploration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-dbf-navy tracking-tight">
            WE DON'T JUST BRING BOOKS. <br className="hidden sm:inline" />
            <span className="text-gradient-gold">WE CURATE THEM.</span>
          </h2>

          <p className="text-base sm:text-lg text-dbf-charcoal/85 font-sans leading-relaxed">
            Our strength lies in bringing together a thoughtfully selected range of books across ages, interests, subjects and reading levels — ensuring every student finds something inspiring.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-dbf-gold/30 shadow-sm">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeFilter === tab
                    ? 'bg-gold-gradient text-dbf-navy-deep shadow-sm scale-105'
                    : 'bg-dbf-cream/60 text-dbf-navy hover:bg-dbf-cream'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-dbf-navy/50" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy font-sans"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                aria-label="Clear category search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-dbf-navy/40 hover:text-dbf-navy"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Celebratory Pastel Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className={`${cat.color} rounded-2xl p-6 border-2 border-dbf-gold/30 hover:border-dbf-gold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group`}
            >
              <div className="space-y-3">
                
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-dbf-navy shadow-sm group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5 text-dbf-gold" />
                  </div>
                  <span className="text-[10px] font-bold text-dbf-navy bg-white/90 px-2.5 py-1 rounded-full border border-dbf-gold/20">
                    {cat.ageRange}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-dbf-navy group-hover:text-dbf-gold transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-dbf-navy/70 font-semibold pt-0.5">
                    {cat.count}
                  </p>
                </div>

                <p className="text-xs text-dbf-charcoal/80 line-clamp-2 leading-relaxed font-sans">
                  {cat.desc}
                </p>

              </div>

              <div className="pt-3 mt-3 border-t border-dbf-navy/10 flex items-center justify-between text-xs text-dbf-navy font-bold group-hover:text-dbf-gold">
                <span>View details</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal Inspection */}
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dbf-navy/75 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 border-2 border-dbf-gold shadow-2xl relative space-y-6">
              
              <button
                onClick={() => setSelectedCategory(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 p-2 rounded-full text-dbf-navy/60 hover:text-dbf-navy hover:bg-dbf-cream transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-dbf-pastel-yellow border border-dbf-gold/40 text-dbf-navy flex items-center justify-center shrink-0 shadow-sm">
                  <BookOpen className="w-7 h-7 text-dbf-gold" />
                </div>
                <div>
                  <span className="text-xs font-bold text-dbf-gold uppercase tracking-wider">
                    {selectedCategory.ageRange}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-dbf-navy">
                    {selectedCategory.name}
                  </h3>
                  <p className="text-xs text-dbf-navy/70 font-semibold">
                    {selectedCategory.count} available for school fairs
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-dbf-navy">Category Overview</h4>
                <p className="text-sm text-dbf-charcoal/80 leading-relaxed font-sans bg-dbf-cream/50 p-4 rounded-xl border border-dbf-gold/20">
                  {selectedCategory.desc}
                </p>
              </div>

              <div className="space-y-2 text-xs text-dbf-navy font-medium">
                <div className="flex items-center space-x-2">
                  <span className="text-dbf-gold font-bold">✓</span>
                  <span>Handpicked for age appropriateness & academic ethics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-dbf-gold font-bold">✓</span>
                  <span>Directly sourced from top national & international publishers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-dbf-gold font-bold">✓</span>
                  <span>Eligible for 15% educator privilege discount</span>
                </div>
              </div>

              <div className="pt-4 flex space-x-3">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    onRequestClick();
                  }}
                  className="w-full bg-gold-gradient text-dbf-navy-deep font-bold py-3.5 rounded-xl shadow-md hover:brightness-105 transition-all text-sm"
                >
                  Include Category in School Book Fair
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
