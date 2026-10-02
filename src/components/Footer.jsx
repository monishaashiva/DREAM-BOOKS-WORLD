import React from 'react';
import { BRAND_INFO } from '../data/dbfData';
import { Phone, Mail, MapPin, MessageCircle, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import ColorfulCompanyName from './ColorfulCompanyName';

export default function Footer({ onRequestClick }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
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
    <footer id="contact" className="bg-dbf-ivory text-dbf-navy relative border-t border-dbf-gold/30">
      
      {/* Final CTA Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-dbf-gold/20 bg-gradient-to-b from-dbf-cream/50 via-white to-dbf-ivory">
        
        <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
          
          <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-4 py-1.5 rounded-full text-xs sm:text-sm text-dbf-navy font-bold">
            <Sparkles className="w-4 h-4 text-dbf-gold" />
            <span>Book Fair • Library Supply • Educational Resources</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-dbf-navy tracking-tight leading-tight">
            YOUR NEXT PTM <br />
            <span className="text-gradient-gold">COULD OPEN A NEW WORLD.</span>
          </h2>

          <p className="text-lg sm:text-xl text-dbf-charcoal/85 font-serif italic max-w-2xl mx-auto">
            Bring Dream Books Fair to your school and give students and families a chance to discover something new.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Request Fair */}
            <button
              onClick={onRequestClick}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gold-gradient text-dbf-navy-deep font-bold px-8 py-4 rounded-xl text-base shadow-gold-glow hover:brightness-105 active:scale-95 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>REQUEST A BOOK FAIR</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Schedule Meeting */}
            <a
              href="https://wa.me/919538123677?text=Hello%2C%20I%20would%20like%20to%20schedule%20a%20meeting%20for%20a%20Dream%20Books%20Fair%20at%20our%20school."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white text-dbf-navy border-2 border-dbf-gold/40 hover:border-dbf-gold font-bold px-6 py-4 rounded-xl text-base shadow-sm transition-all"
            >
              <span>SCHEDULE A MEETING</span>
            </a>

            {/* WhatsApp Us */}
            <a
              href="https://wa.me/919538123677"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-700 text-white hover:bg-emerald-800 font-bold px-6 py-4 rounded-xl text-base shadow-md transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WHATSAPP US</span>
            </a>

          </div>

          <div className="pt-2 text-xs text-dbf-charcoal/70">
            Direct Outreach: <a href="tel:+919538123677" className="text-dbf-gold hover:underline font-bold">+91 9538123677</a> | <a href="tel:+918618677006" className="text-dbf-gold hover:underline font-bold">+91 8618677006</a>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Contact Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Identity with Emblem Logo and Colorful Name */}
          <div className="lg:col-span-4 space-y-4 min-w-0 overflow-hidden">
            {/* Logo + Name stacked vertically to prevent overflow */}
            <div className="flex flex-col items-start space-y-2">
              {/* Logo */}
              <div
                style={{
                  background: '#ffffff',
                  padding: '8px',
                  borderRadius: '12px',
                  border: '2px solid #D4AF37',
                  boxShadow: '0 2px 12px rgba(212,175,55,0.25)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src="/dbf-logo.png"
                  alt="Dream Books Fair Emblem"
                  style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
              {/* Company name below logo, constrained to column width */}
              <div className="min-w-0 overflow-hidden">
                <ColorfulCompanyName size="small" />
                <div className="text-xs text-dbf-gold font-bold uppercase tracking-wider pt-0.5">A Unit of Dream Books World</div>
              </div>
            </div>

            <p className="text-xs text-dbf-charcoal/80 leading-relaxed font-sans max-w-sm">
              Established in 2010. Bringing curated school book fairs, library supply, and educational literature to 500+ schools across Bengaluru.
            </p>

            <div className="text-xs text-dbf-gold font-serif italic font-bold">
              "{BRAND_INFO.tagline}"
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-dbf-navy uppercase tracking-widest border-b border-dbf-gold/30 pb-2">
              Navigation Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-dbf-charcoal/85 font-sans font-medium">
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-dbf-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="hover:text-dbf-gold transition-colors">Why Dream Books Fair</a>
              </li>
              <li>
                <a href="#collection" onClick={(e) => handleNavClick(e, '#collection')} className="hover:text-dbf-gold transition-colors">Book Collection (21 Categories)</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-dbf-gold transition-colors">Services & Library Supply</a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="hover:text-dbf-gold transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#publishers" onClick={(e) => handleNavClick(e, '#publishers')} className="hover:text-dbf-gold transition-colors">Publisher Partners</a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-dbf-navy uppercase tracking-widest border-b border-dbf-gold/30 pb-2">
              Contact & Outreach
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-dbf-charcoal/85 font-sans">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-dbf-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-dbf-navy">Location & Operating Scale</div>
                  <div className="text-dbf-charcoal/80">Vidhyaranyapura, Bengaluru, Karnataka, India</div>
                  <div className="text-[11px] text-dbf-gold font-semibold pt-0.5">Operating 6+ book fairs every week across Bengaluru</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-dbf-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-dbf-navy">Phone Contacts</div>
                  <div className="space-x-3 pt-0.5">
                    <a href="tel:+919538123677" className="hover:text-dbf-gold transition-colors underline font-bold">+91 9538123677</a>
                    <span>|</span>
                    <a href="tel:+918618677006" className="hover:text-dbf-gold transition-colors underline font-bold">+91 8618677006</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-dbf-navy">WhatsApp Direct Links</div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a 
                      href="https://wa.me/919538123677" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-1 rounded-lg hover:bg-emerald-200 transition-colors"
                    >
                      WhatsApp +91 9538123677
                    </a>
                    <a 
                      href="https://wa.me/918618677006" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-1 rounded-lg hover:bg-emerald-200 transition-colors"
                    >
                      WhatsApp +91 8618677006
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-dbf-gold shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-dbf-navy">Email Addresses</div>
                  <div className="space-x-3 pt-0.5">
                    <a href="mailto:dreambooksfair@gmail.com" className="hover:text-dbf-gold transition-colors underline font-medium">dreambooksfair@gmail.com</a>
                    <span>|</span>
                    <a href="mailto:dreambooksworld@gmail.com" className="hover:text-dbf-gold transition-colors underline font-medium">dreambooksworld@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Copyright */}
        <div className="pt-12 mt-12 border-t border-dbf-gold/20 flex flex-col sm:flex-row items-center justify-between text-xs text-dbf-charcoal/60 space-y-2 sm:space-y-0">
          <div>
            © {currentYear} Dream Books Fair. A Unit of Dream Books World. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 font-medium">
            <span>Vidhyaranyapura, Bengaluru</span>
            <span>•</span>
            <span>Est. 2010</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
