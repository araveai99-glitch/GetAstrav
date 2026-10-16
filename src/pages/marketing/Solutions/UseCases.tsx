import React, { useEffect } from 'react';
import { Building2, Rocket, Briefcase, CheckCircle2, TrendingUp, Layers, ArrowRight } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const UseCases: React.FC = () => {
  useEffect(() => {
    document.title = 'Enterprise & Growth Use Cases — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 shadow-warm-2xs">
          <Briefcase className="w-3.5 h-3.5 text-brand-orange" />
          <span className="text-xs font-heading font-extrabold text-brand-orange uppercase tracking-wider">
            ORGANIZATIONAL USE CASES
          </span>
        </div>
        <h1 className="brand-h1 text-espresso tracking-tight">
          Engineered for Every Stage of Organizational Scale
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Whether you are coordinating autonomous product squads or orchestrating multi-tier enterprise departments, Astrav ensures alignment without administrative drag.
        </p>
      </div>

      {/* 3 Symmetric Use Case Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <Rocket className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider">
              SEED TO SERIES B
            </span>
            <h3 className="font-heading font-bold text-lg text-espresso mt-1 mb-2">
              High-Velocity Scaleups
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Scale headcount from 15 to 100+ without drowning in middle management layers. Maintain founder speed, clear cross-pod ownership, and automatic milestone rollups.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 space-y-1.5 text-xs text-terracotta-muted">
            <div className="flex items-center gap-1.5 font-medium text-espresso">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
              <span>Zero-Meeting Status Tracking</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-espresso">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
              <span>Unified Product & Engineering Board</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono font-bold text-brand-green uppercase tracking-wider">
              ENTERPRISE ORGS
            </span>
            <h3 className="font-heading font-bold text-lg text-espresso mt-1 mb-2">
              Multi-Tier Enterprises
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Break monolithic department silos. Orchestrate complex multi-quarter OKRs across Product, Engineering, Marketing, and Operations with granular RBAC governance.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 space-y-1.5 text-xs text-terracotta-muted">
            <div className="flex items-center gap-1.5 font-medium text-espresso">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
              <span>Enterprise RBAC & SOC2 Compliance</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-espresso">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
              <span>Multi-Level Department Rollups</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <Layers className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider">
              CLIENT SERVICES & PODS
            </span>
            <h3 className="font-heading font-bold text-lg text-espresso mt-1 mb-2">
              Product & Dev Agencies
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Manage client retainers and deliverables with verifiable progress tracking. Share read-only executive portals with clients while protecting internal cost metrics.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 space-y-1.5 text-xs text-terracotta-muted">
            <div className="flex items-center gap-1.5 font-medium text-espresso">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
              <span>Client Portal Scoping</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium text-espresso">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
              <span>SLA Accountability & Verifiable Output</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wide Operational Results Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              Proven Architectural Benefits
            </h3>
            <p className="text-xs text-terracotta-muted">
              Measurable organizational impact across executive and delivery teams
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
            Efficiency Gains
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-terracotta">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <h4 className="font-heading font-bold text-espresso text-base">
              Eliminate Status Decks
            </h4>
            <p className="text-xs leading-relaxed">
              Founders and VP leads save 4+ hours per week previously wasted assembling manual status spreadsheets and update decks.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <h4 className="font-heading font-bold text-espresso text-base">
              Resolve Blockers 3x Faster
            </h4>
            <p className="text-xs leading-relaxed">
              Automated SLA breach countdowns alert management to stalled reviews and dependency locks days before delivery dates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <h4 className="font-heading font-bold text-espresso text-base">
              100% Goal Alignment
            </h4>
            <p className="text-xs leading-relaxed">
              Every contributor understands exactly how their daily deliverables move quarterly board milestones and revenue targets forward.
            </p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
