import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';

export default function MobileQuickBar({ onRequestClick }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-dbf-navy-dark/95 backdrop-blur-md border-t border-dbf-gold/30 p-2.5 px-4 flex items-center justify-between space-x-2 shadow-2xl">
      <a
        href="https://wa.me/919538123677"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-md"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onRequestClick}
        className="flex-1 inline-flex items-center justify-center space-x-1.5 bg-gold-gradient text-dbf-navy-deep font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-gold-glow"
      >
        <Calendar className="w-4 h-4" />
        <span>Request Fair</span>
      </button>

      <a
        href="tel:+919538123677"
        className="inline-flex items-center justify-center p-2.5 bg-white/10 text-dbf-gold border border-dbf-gold/40 rounded-xl hover:bg-white/20 transition-all"
        aria-label="Call DBF Team"
      >
        <Phone className="w-4 h-4" />
      </a>
    </div>
  );
}
