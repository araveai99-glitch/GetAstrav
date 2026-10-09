import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, LayoutDashboard, ShieldCheck, CheckCircle } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section id="conversion-cta" className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface-ambient">
      <div className="max-w-[1280px] mx-auto rounded-3xl bg-gradient-to-br from-white via-surface-ambient to-surface-tier1 p-8 sm:p-12 md:p-16 border border-brand-peach/80 shadow-warm-xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-peach shadow-warm-sm">
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
            <span className="text-[11px] font-bold text-espresso uppercase tracking-wider">
              Architectural Certainty Guarantee
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-espresso tracking-tight leading-tight">
            One Operating System for Your Organization.
          </h2>

          <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal">
            Experience FounderOS in action. Schedule a live architectural walkthrough with our engineering systems team to inspect 7-level cascade mechanics, row-level isolation, and real-time rollups.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2.5 text-base font-bold text-white bg-brand-orange hover:bg-primary-hover px-8 py-4 rounded-2xl shadow-glow-orange hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-5 h-5" /> Book a Demo
            </Link>

            <Link
              to="/app/dashboard"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-espresso bg-white hover:bg-surface-tier1 px-7 py-4 rounded-2xl shadow-warm-sm border border-brand-peach transition-all"
            >
              <LayoutDashboard className="w-5 h-5 text-brand-orange" /> Explore Command Console
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-brand-peach/60 text-xs font-semibold text-terracotta-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-green" /> SOC2 Type II Aligned
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-green" /> Deterministic Zero-Drift Rollup
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-brand-green" /> Sub-15 Min Deployment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
