import React, { useState } from 'react';
import { X, Calendar, Send, MessageCircle, Mail, Phone, School, User, MapPin, Hash, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/dbfData';

export default function RequestFormModal({ isOpen, onClose, inline = false }) {
  const [formData, setFormData] = useState({
    name: '',
    designation: 'Principal',
    schoolName: '',
    schoolLocation: 'Bengaluru',
    phone: '',
    email: '',
    preferredEvent: 'PTM',
    preferredDate: '',
    studentStrength: '500-1000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const designations = [
    'School Principal',
    'School Librarian',
    'School Management',
    'Academic Coordinator',
    'Teacher / Educator',
    'Event Coordinator',
    'Parent Association Member',
    'Other'
  ];

  const events = [
    'PTM (Parent-Teacher Meeting)',
    'Result Day & Graduation',
    'School Carnival & Fete',
    'Science Exhibition',
    'Annual Day & Founder\'s Day',
    'Children\'s Day & Reading Week',
    'Library Book Supply Inquiry',
    'Other Special Event'
  ];

  const studentStrengths = [
    'Under 300 Students',
    '300 - 600 Students',
    '600 - 1,000 Students',
    '1,000 - 2,500 Students',
    '2,500+ Students'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Dream Books Fair,\n\nI would like to request a Book Fair for our school.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Designation:* ${formData.designation}\n` +
      `*School Name:* ${formData.schoolName}\n` +
      `*Location:* ${formData.schoolLocation}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Preferred Event:* ${formData.preferredEvent}\n` +
      `*Preferred Date:* ${formData.preferredDate || 'To be finalized'}\n` +
      `*Approx. Student Strength:* ${formData.studentStrength}\n` +
      `*Message:* ${formData.message || 'None'}\n\n` +
      `Looking forward to discussing the setup!`
    );
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.schoolName || !formData.phone) {
      alert('Please fill in your Name, School Name, and Phone Number.');
      return;
    }

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/919538123677?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    if (!formData.name || !formData.schoolName || !formData.phone) {
      alert('Please fill in your Name, School Name, and Phone Number.');
      return;
    }

    const subject = encodeURIComponent(`Book Fair Request - ${formData.schoolName}`);
    const body = generateWhatsAppMessage();
    const mailtoUrl = `mailto:dreambooksfair@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const formContent = (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 bg-dbf-gold/15 border border-dbf-gold/40 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-dbf-navy">
          <Calendar className="w-3.5 h-3.5 text-dbf-gold" />
          <span>School Booking Request</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dbf-navy tracking-tight">
          LET'S BRING BOOKS TO YOUR SCHOOL.
        </h3>

        <p className="text-xs sm:text-sm text-dbf-charcoal/70 font-sans max-w-lg mx-auto">
          Fill out the details below to schedule your preferred PTM date. Our Bengaluru outreach team will contact you within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
          <h4 className="font-serif text-xl font-bold text-emerald-900">
            Request Transmitted Successfully!
          </h4>
          <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed font-sans">
            Thank you, <strong>{formData.name}</strong> from <strong>{formData.schoolName}</strong>. Your proposal inquiry has been formatted and opened via WhatsApp/Email.
          </p>
          <div className="pt-2 flex justify-center space-x-3">
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-bold text-emerald-700 underline hover:text-emerald-900"
            >
              Submit another request
            </button>
            {!inline && (
              <button
                onClick={onClose}
                className="bg-emerald-700 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-800"
              >
                Close Modal
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-dbf-navy/40" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Dr. Sunita Rao"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy"
                />
              </div>
            </div>

            {/* Designation */}
            <div>
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                Designation *
              </label>
              <select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy font-sans"
              >
                {designations.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            {/* School Name */}
            <div>
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                School Name *
              </label>
              <div className="relative">
                <School className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-dbf-navy/40" />
                <input
                  type="text"
                  name="schoolName"
                  required
                  placeholder="e.g. National Public School"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy"
                />
              </div>
            </div>

            {/* School Location */}
            <div>
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                School Location / Area *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-dbf-navy/40" />
                <input
                  type="text"
                  name="schoolLocation"
                  required
                  placeholder="e.g. Yelahanka, Bengaluru"
                  value={formData.schoolLocation}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                Phone / WhatsApp Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-dbf-navy/40" />
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-dbf-navy/40" />
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. principal@school.edu.in"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy"
                />
              </div>
            </div>

            {/* Preferred Event */}
            <div>
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                Preferred Event
              </label>
              <select
                name="preferredEvent"
                value={formData.preferredEvent}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy font-sans"
              >
                {events.map(ev => <option key={ev} value={ev}>{ev}</option>)}
              </select>
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                Preferred Event Date
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy font-sans"
              />
            </div>

            {/* Approx Student Strength */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                Approximate Student Strength
              </label>
              <select
                name="studentStrength"
                value={formData.studentStrength}
                onChange={handleChange}
                className="w-full px-3 py-2.5 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy font-sans"
              >
                {studentStrengths.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            {/* Additional Message */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-dbf-navy uppercase tracking-wider mb-1">
                Additional Requirements / Message
              </label>
              <textarea
                name="message"
                rows={2}
                placeholder="Specific genres, language requirements, or special notes for our team..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-dbf-ivory rounded-xl text-xs sm:text-sm border border-dbf-gold/30 focus:outline-none focus:border-dbf-gold text-dbf-navy font-sans"
              />
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-3 space-y-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-gold-gradient text-dbf-navy-deep font-bold py-3.5 px-4 rounded-xl shadow-gold-glow hover:brightness-110 active:scale-95 transition-all text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>REQUEST A BOOK FAIR VIA WHATSAPP</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              className="w-full flex items-center justify-center space-x-2 bg-dbf-navy/10 text-dbf-navy border border-dbf-navy/30 font-semibold py-2.5 px-4 rounded-xl hover:bg-dbf-navy/20 transition-all text-xs sm:text-sm"
            >
              <Mail className="w-4 h-4 text-dbf-gold" />
              <span>Submit Request via Email (dreambooksfair@gmail.com)</span>
            </button>
          </div>

        </form>
      )}
    </div>
  );

  if (inline) {
    return (
      <section id="request-form" className="py-20 bg-gradient-to-b from-white to-dbf-ivory relative border-b border-dbf-gold/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-dbf-gold/40 shadow-2xl">
            {formContent}
          </div>
        </div>
      </section>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dbf-navy/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 border-2 border-dbf-gold shadow-2xl relative">
        <button
          onClick={onClose}
          aria-label="Close request modal"
          className="absolute top-4 right-4 p-2 rounded-full text-dbf-navy/60 hover:text-dbf-navy hover:bg-dbf-cream transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {formContent}
      </div>
    </div>
  );
}
