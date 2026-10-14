import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Calendar, Building2, Mail, User, Users } from 'lucide-react';

export const openDemoModal = () => {
  window.dispatchEvent(new CustomEvent('open-demo-modal'));
};

export const DemoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '11-50',
  });

  useEffect(() => {
    const handleOpen = () => {
      setSubmitted(false);
      setIsOpen(true);
    };
    window.addEventListener('open-demo-modal', handleOpen);
    return () => window.removeEventListener('open-demo-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso/60 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-warm-xl border border-brand-peach/80 overflow-hidden flex flex-col max-h-[92vh] animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#faf6f0] border-b border-brand-peach/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-sm shadow-brand-orange/30">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-extrabold text-espresso leading-tight">
                Schedule Astrav Demo
              </h3>
              <p className="text-[11px] text-terracotta-muted font-medium">
                FounderOS Executive Command Center Walkthrough
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-xl text-terracotta-muted hover:text-brand-orange hover:bg-brand-orange-light transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-green flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-heading font-extrabold text-espresso">
                  Demo Request Confirmed
                </h4>
                <p className="text-xs sm:text-sm text-terracotta leading-relaxed max-w-sm mx-auto">
                  Thank you, <span className="font-bold text-espresso">{formData.name}</span>. Our executive architecture team has received your request for <span className="font-bold text-espresso">{formData.company || 'your company'}</span> and will email calendar invites to <span className="font-bold text-brand-orange">{formData.email}</span> within 2 hours.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-brand-orange text-white text-xs font-heading font-bold shadow-md shadow-brand-orange/30 hover:bg-brand-orange-hover transition-all cursor-pointer"
              >
                Close & Explore Astrav
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-terracotta leading-relaxed">
                Connect goals, teams, and daily execution across every department. Experience the automated rollup engine live with our architects.
              </p>

              <div>
                <label className="block text-[11px] font-heading font-bold text-espresso uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-terracotta-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Marcus Thorne"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-peach/80 text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-heading font-bold text-espresso uppercase tracking-wider mb-1.5">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-terracotta-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-peach/80 text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-heading font-bold text-espresso uppercase tracking-wider mb-1.5">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-terracotta-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-peach/80 text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white shadow-2xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold text-espresso uppercase tracking-wider mb-1.5">
                    Team Size
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-terracotta-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-brand-peach/80 text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white shadow-2xs cursor-pointer"
                    >
                      <option value="1-10">1 - 10 people</option>
                      <option value="11-50">11 - 50 people</option>
                      <option value="51-200">51 - 200 people</option>
                      <option value="200+">200+ enterprise</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-heading font-bold shadow-lg shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Request Executive Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-terracotta-muted pt-1">
                Zero spam. NDA-backed architecture discussions for executive leadership.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
