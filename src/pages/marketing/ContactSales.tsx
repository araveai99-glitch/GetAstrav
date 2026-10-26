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
  ShieldCheck,
  Clock,
  Globe2,
  HelpCircle,
  ChevronDown,
  Layers,
  Zap,
} from 'lucide-react';
import { IllustratedCardBadge } from '../../components/common/IllustratedCardBadge';

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  teamSize: string;
  primaryFocus: string;
  notes: string;
}

export const ContactSales: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    companyName: '',
    teamSize: '11-50',
    primaryFocus: 'rollups',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-12 sm:space-y-16 selection:bg-brand-orange selection:text-white">
      {/* Section 1: Compact Hero */}
      <div className="text-left w-full max-w-5xl space-y-2.5 sm:space-y-3">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left"
        >
          Let's Find the Right Setup <span className="text-brand-orange">for Your Team.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="text-base sm:text-lg lg:text-xl text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Tell us what your organization needs. We'll show you how Astrav maps your strategy to daily execution with zero guesswork.
        </motion.p>
      </div>

      {/* Section 2: Contact Form + Supporting Visual (2-Column Desktop Layout) */}
      <div className="!mt-6 sm:!mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
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
                    primaryFocus: 'rollups',
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

              {/* Primary Focus Area Selection */}
              <div>
                <label className="block text-sm font-heading font-bold text-espresso mb-2">
                  Primary Focus Area
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'rollups', label: 'Rollup Engine', icon: Sparkles },
                    { id: 'pods', label: 'Team Pods', icon: Layers },
                    { id: 'goals', label: 'Goal Alignment', icon: Compass },
                    { id: 'security', label: 'Enterprise RBAC', icon: ShieldCheck },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = formData.primaryFocus === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        type="button"
                        whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                        onClick={() => setFormData({ ...formData, primaryFocus: item.id })}
                        className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border text-xs sm:text-sm font-heading font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-brand-orange-light text-brand-orange border-brand-orange shadow-2xs font-bold'
                            : 'bg-surface-tier1/50 text-terracotta border-brand-peach/60 hover:border-brand-peach hover:bg-white'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-brand-orange' : 'text-terracotta-muted'}`} />
                        <span>{item.label}</span>
                      </motion.button>
                    );
                  })}
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
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="w-full btn-brand-primary py-3.5 text-base font-heading font-bold rounded-xl shadow-md shadow-brand-orange/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer select-none disabled:opacity-60"
              >
                <span>{isSubmitting ? 'Sending Request...' : 'Send Message to Sales'}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Right Column: Visual Walkthrough Hub & Direct Channels */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="lg:col-span-5 space-y-5"
        >
          {/* Walkthrough Preview Card */}
          <div className="p-6 sm:p-7 bg-surface-tier1/70 rounded-3xl border border-brand-peach/70 shadow-warm-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-brand-peach/40">
              <span className="text-xs font-mono font-bold text-terracotta-muted tracking-wider">
                WHAT TO EXPECT IN YOUR SESSION
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-orange">
                <Sparkles className="w-3.5 h-3.5" />
                Zero Pitch Decks
              </span>
            </div>

            <div className="space-y-3.5">
              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-3.5 bg-white rounded-2xl border border-brand-peach/50 shadow-warm-2xs flex items-start gap-3 cursor-pointer transition-all hover:border-brand-peach hover:shadow-warm-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-espresso">
                    Tailored Workspace Architecture
                  </h4>
                  <p className="text-xs sm:text-sm text-terracotta leading-relaxed mt-0.5">
                    Live demo showing how your engineering, product, and leadership teams organize without context fragmentation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-3.5 bg-white rounded-2xl border border-brand-peach/50 shadow-warm-2xs flex items-start gap-3 cursor-pointer transition-all hover:border-brand-peach hover:shadow-warm-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-espresso">
                    Automated Rollup Simulation
                  </h4>
                  <p className="text-xs sm:text-sm text-terracotta leading-relaxed mt-0.5">
                    See how completed subtasks calculate status up to strategic objectives automatically, replacing manual reporting.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-3.5 bg-white rounded-2xl border border-brand-peach/50 shadow-warm-2xs flex items-start gap-3 cursor-pointer transition-all hover:border-brand-peach hover:shadow-warm-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm sm:text-base text-espresso">
                    Security & RBAC Review
                  </h4>
                  <p className="text-xs sm:text-sm text-terracotta leading-relaxed mt-0.5">
                    Review role boundaries, row-level controls, audit logging, and single sign-on integration blueprints.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Direct Channels Card */}
          <div className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm space-y-4">
            <h4 className="text-base font-heading font-extrabold text-espresso flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-brand-orange" /> Direct Communication Channels
            </h4>
            <div className="space-y-3 text-sm">
              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="flex items-center justify-between p-3 rounded-xl bg-surface-tier1/60 border border-brand-peach/40 cursor-pointer hover:bg-surface-tier1 hover:border-brand-peach transition-all"
              >
                <span className="text-terracotta font-medium">Enterprise Inquiries</span>
                <a
                  href="mailto:sales@getastrav.com"
                  className="font-mono text-xs font-bold text-brand-orange hover:underline"
                >
                  sales@getastrav.com
                </a>
              </motion.div>
              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="flex items-center justify-between p-3 rounded-xl bg-surface-tier1/60 border border-brand-peach/40 cursor-pointer hover:bg-surface-tier1 hover:border-brand-peach transition-all"
              >
                <span className="text-terracotta font-medium">Security & Compliance</span>
                <a
                  href="mailto:security@getastrav.com"
                  className="font-mono text-xs font-bold text-brand-orange hover:underline"
                >
                  security@getastrav.com
                </a>
              </motion.div>
              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="flex items-center justify-between p-3 rounded-xl bg-surface-tier1/60 border border-brand-peach/40 cursor-pointer hover:bg-surface-tier1 hover:border-brand-peach transition-all"
              >
                <span className="text-terracotta font-medium">Guaranteed Response SLA</span>
                <span className="font-heading font-bold text-xs text-brand-green flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> &lt; 2 business hours
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 3: What Happens Next (Step Timeline) */}
      <div className="space-y-5 pt-2">
        <div className="text-left w-full max-w-5xl space-y-1 sm:space-y-1.5">
          <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
            Clear, Predictable Engagement
          </span>
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso tracking-tight text-left">
            What Happens Next.
          </h2>
          <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-3xl text-left">
            A transparent 3-step path so your team knows precisely what to anticipate after contacting us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between hover:border-brand-peach transition-all cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-mono font-bold text-sm">
                  01
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-tier1 text-terracotta text-xs font-mono font-medium border border-brand-peach/40">
                  Step 1 • &lt; 2h
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-lg text-espresso mb-2">
                Requirements Review
              </h3>
              <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                Our solutions engineering team reviews your organizational structure, current toolchain friction, and deployment goals.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-xs font-mono font-bold text-brand-orange flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Tailored Agenda Prepared
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between hover:border-brand-peach transition-all cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center font-mono font-bold text-sm">
                  02
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-tier1 text-terracotta text-xs font-mono font-medium border border-brand-peach/40">
                  Step 2 • 30 mins
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-lg text-espresso mb-2">
                Architecture Walkthrough
              </h3>
              <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                We demonstrate real examples of pod isolation, automated mathematical rollup, and cross-functional visibility tailored to your pods.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-xs font-mono font-bold text-brand-green flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Interactive Sandbox Access
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between hover:border-brand-peach transition-all cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center font-mono font-bold text-sm">
                  03
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-tier1 text-terracotta text-xs font-mono font-medium border border-brand-peach/40">
                  Step 3 • Custom Plan
                </span>
              </div>
              <h3 className="font-heading font-extrabold text-lg text-espresso mb-2">
                Deployment Blueprint
              </h3>
              <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                Receive an actionable implementation plan, pilot trial parameters, and enterprise pricing options suited to your seat scale.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-xs font-mono font-bold text-amber-700 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Zero Long-Term Commitment
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 4: Enterprise FAQ Accordion */}
      <div className="space-y-6 pt-4">
        <div className="text-left w-full max-w-5xl space-y-1.5">
          <span className="text-xs font-mono font-bold text-brand-green uppercase tracking-wider flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso tracking-tight text-left">
            Clear Answers for Technology Leaders.
          </h2>
          <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-3xl text-left">
            Everything you need to know about testing, deploying, and securing Astrav across your teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              question: 'How quickly can our organization get started with Astrav?',
              answer:
                'Astrav can be deployed within an hour. Teams can immediately configure their Pods, invite members with scoped RBAC roles, and map strategic goals without requiring lengthy IT consultations or custom script writing.',
            },
            {
              question: 'Can we invite external contractors or partner pods without leaking company goals?',
              answer:
                'Yes. Astrav features deterministic Row-Level Security (RLS) and Pod Boundary Isolation. External contractors only see the tasks and deliverables inside their assigned Pod workspace, completely shielding broader company strategies.',
            },
            {
              question: 'How does the Automated Rollup Engine calculate progress?',
              answer:
                'Astrav uses deterministic weighted mathematics based on verified subtask completion and deliverable milestones, rather than arbitrary manual percentage guesses. This ensures executive visibility reflects actual working reality.',
            },
            {
              question: 'What enterprise compliance and security standards are supported?',
              answer:
                'Astrav is designed according to SOC2 Type II principles, featuring end-to-end TLS 1.3 transit encryption, AES-256 data storage encryption, immutable audit trails, and strict zero-owner tenancy safeguards.',
            },
          ].map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-brand-peach/70 shadow-warm-2xs overflow-hidden transition-all"
              >
                <motion.button
                  type="button"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-start justify-between gap-3 cursor-pointer hover:bg-surface-tier1/40 transition-colors"
                >
                  <span className="font-heading font-extrabold text-base text-espresso leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-terracotta shrink-0 mt-1 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-orange' : ''
                    }`}
                  />
                </motion.button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-terracotta leading-relaxed border-t border-brand-peach/30 bg-surface-tier1/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

