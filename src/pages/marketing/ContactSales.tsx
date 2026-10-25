import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Mail,
  User,
  Building2,
  Users,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Calendar,
  Compass,
  Check,
} from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  teamSize: string;
  notes: string;
}

export const ContactSales: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    teamSize: '11-50',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Sales — Let’s Find the Right Setup for Your Team — Astrav';
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.companyName.trim()) {
      errs.companyName = 'Please enter your company name';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12 selection:bg-brand-orange selection:text-white">
      {/* Section 1: Compact Hero */}
      <div className="text-left w-full max-w-5xl space-y-1.5 sm:space-y-2 mb-2 sm:mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left lg:whitespace-nowrap"
        >
          Let's Find the Right Setup for Your Team.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left lg:whitespace-nowrap"
        >
          Tell us what your team needs. We'll help you explore how Astrav can fit your workflow.
        </motion.p>
      </div>

      {/* Section 2: Contact Form + Supporting Visual (2-Column Desktop Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-brand-peach/80 shadow-warm-md"
        >
          {isSubmitted ? (
            <div className="py-8 sm:py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-3xl bg-brand-green-light text-brand-green flex items-center justify-center mx-auto shadow-warm-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-heading font-extrabold text-espresso">
                  Thank You, {formData.fullName.split(' ')[0]}!
                </h3>
                <p className="text-base sm:text-lg text-terracotta leading-relaxed">
                  We've received your requirements for <span className="font-heading font-bold text-espresso">{formData.companyName}</span>. Our team will review your workflow goals and reach out to explore the best setup.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    companyName: '',
                    teamSize: '11-50',
                    notes: '',
                  });
                }}
                className="btn-brand-secondary px-6 py-2.5 text-sm font-heading font-bold rounded-xl mt-4 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="pb-4 border-b border-brand-peach/40">
                <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
                  Get in Touch
                </h2>
                <p className="text-sm sm:text-base text-terracotta mt-0.5">
                  Fill in your details below and we'll prepare a tailored walkthrough.
                </p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-heading font-bold text-espresso mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-terracotta-muted pointer-events-none" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-base text-espresso bg-surface-tier1/50 placeholder:text-terracotta-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-all ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-brand-peach/70 hover:border-brand-peach'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Work Email */}
              <div>
                <label className="block text-sm font-heading font-bold text-espresso mb-1.5">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-terracotta-muted pointer-events-none" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="sarah@company.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-base text-espresso bg-surface-tier1/50 placeholder:text-terracotta-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-brand-peach/70 hover:border-brand-peach'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Company Name & Team Size Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-heading font-bold text-espresso mb-1.5">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-terracotta-muted pointer-events-none" />
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => {
                        setFormData({ ...formData, companyName: e.target.value });
                        if (errors.companyName) setErrors({ ...errors, companyName: '' });
                      }}
                      placeholder="Acme Innovations"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border text-base text-espresso bg-surface-tier1/50 placeholder:text-terracotta-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-all ${
                        errors.companyName ? 'border-red-400 bg-red-50/20' : 'border-brand-peach/70 hover:border-brand-peach'
                      }`}
                    />
                  </div>
                  {errors.companyName && (
                    <p className="text-xs sm:text-sm text-red-600 mt-1">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-heading font-bold text-espresso mb-1.5">
                    Team Size (Optional)
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-terracotta-muted pointer-events-none" />
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-peach/70 text-base text-espresso bg-surface-tier1/50 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 cursor-pointer transition-all"
                    >
                      <option value="1-10">1 – 10 members</option>
                      <option value="11-50">11 – 50 members</option>
                      <option value="51-200">51 – 200 members</option>
                      <option value="201+">201+ enterprise</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* What would you like to discuss? */}
              <div>
                <label className="block text-sm font-heading font-bold text-espresso mb-1.5">
                  What would you like to discuss? (Optional)
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your current workflow, challenges, or pods..."
                    className="w-full px-4 py-3 rounded-xl border border-brand-peach/70 text-base text-espresso bg-surface-tier1/50 placeholder:text-terracotta-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-brand-primary py-3.5 text-base font-heading font-bold rounded-xl shadow-md shadow-brand-orange/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer select-none disabled:opacity-60"
              >
                <span>{isSubmitting ? 'Sending Request...' : 'Send Message to Sales'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>

        {/* Right Column: Visual Explanation (3-Step Animated Flow) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="p-6 sm:p-8 bg-surface-tier1/70 rounded-3xl border border-brand-peach/70 shadow-warm-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-brand-peach/40">
              <span className="text-xs font-mono font-bold text-terracotta-muted">
                HOW WE WORK TOGETHER
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-brand-orange">
                <Sparkles className="w-3.5 h-3.5" />
                Zero Pressure
              </span>
            </div>

            {/* 3 Step Flow */}
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-2xl border border-brand-peach/50 shadow-warm-2xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0 font-mono font-bold text-xs min-[375px]:text-sm mt-0.5">
                  01
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-espresso">
                    Share Your Needs
                  </h4>
                  <p className="text-sm min-[375px]:text-base text-terracotta leading-relaxed mt-1">
                    Tell us your team size, key goals, and current toolchain challenges.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-brand-peach/50 shadow-warm-2xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center shrink-0 font-mono font-bold text-xs min-[375px]:text-sm mt-0.5">
                  02
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-espresso">
                    Explore Astrav
                  </h4>
                  <p className="text-sm min-[375px]:text-base text-terracotta leading-relaxed mt-1">
                    We'll walk through how automatic progress rollups and pods map to your company structure.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-brand-peach/50 shadow-warm-2xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center shrink-0 font-mono font-bold text-xs min-[375px]:text-sm mt-0.5">
                  03
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-espresso">
                    Plan Your Next Steps
                  </h4>
                  <p className="text-sm min-[375px]:text-base text-terracotta leading-relaxed mt-1">
                    Get a clear rollout recommendation tailored for your leadership and pod leads.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/80 border border-brand-peach/40 text-sm text-terracotta leading-relaxed">
              <span className="font-heading font-bold text-espresso block mb-1">
                Zero Commitment Walkthrough
              </span>
              We focus on understanding your organizational goals first. No aggressive sales tactics or generic pitch decks.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 3: What Happens Next */}
      <div className="space-y-4">
        <div className="text-left w-full max-w-5xl space-y-1 sm:space-y-1.5">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso tracking-tight text-left lg:whitespace-nowrap">
            What Happens Next.
          </h2>
          <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-3xl text-left lg:whitespace-nowrap">
            A simple, predictable process so you know exactly what to expect after reaching out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4 font-mono font-bold text-sm">
                1
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
                Share Your Requirements
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Submit the form with your team focus areas so we can prepare relevant workflow examples.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-sm font-heading font-semibold text-brand-orange">
              Requirement Review
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4 font-mono font-bold text-sm">
                2
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
                Discuss Your Team's Needs
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                We'll walk through real examples of goals, milestones, and pod tracking tailored to your company.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-sm font-heading font-semibold text-brand-green">
              Tailored Walkthrough
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4 font-mono font-bold text-sm">
                3
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
                Explore the Next Steps
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Decide if Astrav is the right fit with clear guidance on onboarding, setup, and pod architecture.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-sm font-heading font-semibold text-amber-700">
              Clear Rollout Path
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
