import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, MessageCircle, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/dbfData';
import ColorfulCompanyName from './ColorfulCompanyName';

export default function Header({ onRequestClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Book Collection', href: '#collection' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Publishers', href: '#publishers' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Banner Bar for Contact */}
      <div className="bg-dbf-cream border-b border-dbf-gold/30 text-dbf-navy text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5 font-medium">
              <span className="text-dbf-gold font-bold">Dream Books Fair</span>
              <span className="text-dbf-navy/30">•</span>
              <span className="text-dbf-navy/80">A Unit of Dream Books World (Est. 2010)</span>
            </span>
            <span className="text-dbf-navy/20">|</span>
            <span className="text-dbf-navy/70 flex items-center space-x-1">
              <MapPin className="w-3 h-3 text-dbf-gold" />
              <span>Vidhyaranyapura, Bengaluru</span>
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a href="tel:+919538123677" className="hover:text-dbf-gold transition-colors flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-dbf-gold" />
              <span className="font-semibold">+91 9538123677</span>
            </a>
            <a 
              href="https://wa.me/919538123677" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-700 hover:text-emerald-800 transition-colors flex items-center space-x-1 font-bold bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-300/50"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header - Clean & Roomy No-Overlap Layout */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dbf-ivory/95 backdrop-blur-md shadow-light-card py-2.5 border-b border-dbf-gold/30' 
          : 'bg-dbf-ivory py-3.5 border-b border-dbf-gold/20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Header Brand: Logo Emblem + Single Line Big Dancing Text */}
            <a href="#hero" className="flex items-center space-x-3 shrink-0 group">
              
              {/* Emblem Logo */}
              <div className="relative bg-white p-1.5 rounded-2xl border-2 border-dbf-gold/40 shadow-sm group-hover:border-dbf-gold transition-colors shrink-0">
                <img 
                  src="/dbf-logo.png" 
                  alt="Dream Books Fair Emblem" 
                  className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              {/* Company Name (One Single Line, Bigger, Left-Right Bending) */}
              <div className="flex flex-col justify-center shrink-0">
                <div className="py-0.5">
                  <ColorfulCompanyName size="header" animate={true} />
                </div>
                <div className="text-[10px] sm:text-[11px] text-dbf-gold font-sans font-black tracking-widest uppercase pt-0.5">
                  A Unit of Dream Books World
                </div>
              </div>

            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden 2xl:flex items-center space-x-1 xl:space-x-2 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-dbf-navy/85 hover:text-dbf-gold hover:bg-dbf-cream/60 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Primary CTA & Mobile Toggle */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={onRequestClick}
                className="hidden sm:inline-flex items-center space-x-2 bg-gold-gradient text-dbf-navy-deep font-bold px-5 py-2.5 rounded-xl text-sm shadow-gold-glow hover:brightness-105 active:scale-95 transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                <span>Request a Book Fair</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="2xl:hidden p-2 rounded-lg text-dbf-navy hover:text-dbf-gold hover:bg-dbf-cream focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="2xl:hidden bg-dbf-ivory border-t border-dbf-gold/30 shadow-2xl animate-fadeIn">
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="px-3 py-2 text-xs uppercase font-bold text-dbf-gold tracking-widest border-b border-dbf-gold/20 mb-2">
                Navigation & Proposals
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-dbf-navy hover:text-dbf-gold hover:bg-dbf-cream/70 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-dbf-gold/20 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestClick();
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gold-gradient text-dbf-navy-deep font-bold py-3 px-4 rounded-xl shadow-md text-base"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Request a Book Fair</span>
                </button>

                <a
                  href="https://wa.me/919538123677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold py-2.5 px-4 rounded-xl text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp (+91 9538123677)</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
