import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const GoalsProgress: React.FC = () => {
  useEffect(() => {
    document.title = 'Goals & Progress Rollups — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-left md:text-center w-full max-w-none md:max-w-3xl mx-0 md:mx-auto space-y-2.5 sm:space-y-3">
        <h1 className="text-[26px] xs:text-[28px] sm:text-4xl md:brand-h1 font-heading font-extrabold text-espresso tracking-tight text-left md:text-center leading-tight">
          Automated Mathematical Rollup Engine
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg w-full max-w-none md:max-w-2xl mx-0 md:mx-auto font-normal text-left md:text-center leading-relaxed">
          Track work from individual tasks up to executive dashboards with mathematical precision and founder override control.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Weighted Subtask Rollup
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Every subtask carries defined mathematical weight. As engineering and product complete individual tasks, progress rolls up in real time without manual reporting.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Granular Precision</span>
            <span>100% Deterministic</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Milestone & Project Sync
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Milestones aggregate active deliverables across multiple pods. Deadlines, SLA status, and dependencies calculate automatically so leadership spots risks days earlier.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Cross-Department</span>
            <span>Real-Time SLAs</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Founder Override Governance
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Executive leadership retains override authority on strategic targets. Any manual adjustment is logged with audit timestamps, rationale, and owner tags for governance.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Enterprise RBAC</span>
            <span>Audit Trail</span>
          </div>
        </div>
      </div>

      {/* Wide Formula Architecture Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-orange text-white flex items-center justify-center">
              <Target className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
                The Rollup Formula Architecture
              </h3>
              <p className="text-xs text-terracotta-muted">
                How work cascades upwards through 7 architectural tiers
              </p>
            </div>
          </div>

          <Link
            to="/product/automated-progress-rollups"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
          >
            <span>Explore Interactive Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-brand-green uppercase tracking-wider">
              LEVEL 1: TASK EXECUTION
            </span>
            <h4 className="font-heading font-bold text-sm text-espresso">
              Task Progress Formula
            </h4>
            <p className="text-xs font-mono text-terracotta bg-white p-2.5 rounded-lg border border-brand-peach/40">
              Completed Weights / Total Subtask Weights × 100
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-wider">
              LEVEL 2: MILESTONES
            </span>
            <h4 className="font-heading font-bold text-sm text-espresso">
              Milestone Progress Formula
            </h4>
            <p className="text-xs font-mono text-terracotta bg-white p-2.5 rounded-lg border border-brand-peach/40">
              ∑ (Task Weight × Task Progress) / Total Project Weight
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider">
              LEVEL 3: STRATEGIC GOAL
            </span>
            <h4 className="font-heading font-bold text-sm text-espresso">
              Goal Effective Progress
            </h4>
            <p className="text-xs font-mono text-terracotta bg-white p-2.5 rounded-lg border border-brand-peach/40">
              Executive Override ?? Mathematical Computed Progress
            </p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
