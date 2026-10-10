import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section id="conversion-cta" className="w-full py-10 md:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-[1400px] mx-auto rounded-3xl bg-gradient-to-br from-white via-ivory to-champagne/50 p-8 sm:p-12 md:p-16 border border-brand-peach/80 shadow-architectural relative overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-brand-orange-light via-coral-soft to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-peach/80 shadow-warm-2xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
            </span>
            <span className="text-[11px] font-mono font-extrabold text-espresso uppercase tracking-wider">
              FOUNDEROS TEAM WORKSPACE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-espresso tracking-tight leading-[1.08]">
            Your Organization. One Operating System.
          </h2>

          <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-2xl">
            Bring goals, projects, and everyday work together with FounderOS.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/product"
              className="inline-flex items-center justify-center gap-2.5 text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-8 py-4 rounded-2xl shadow-glow-orange hover:-translate-y-0.5 transition-all group"
            >
              <Layers className="w-5 h-5" />
              <span>Explore FounderOS</span>
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 text-base font-bold text-espresso bg-white hover:bg-surface-tier1 px-7 py-4 rounded-2xl shadow-warm-sm border border-brand-peach/80 transition-all hover:border-brand-orange"
            >
              <Calendar className="w-5 h-5 text-brand-orange" />
              <span>Book a Demo</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-brand-peach/60 text-xs font-semibold text-terracotta">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-green" /> Instant Team Alignment
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-green" /> Automatic Progress Updates
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-green" /> Sub-15 Min Setup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

