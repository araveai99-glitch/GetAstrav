import React, { useEffect } from 'react';
import { FolderGit2, Flag, GitBranch, Target, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Project Portfolios & Milestones — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="brand-h1 text-espresso tracking-tight">
          Project Portfolios & Critical Paths
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Manage multi-project initiatives, map cross-departmental dependencies, and keep all milestone deliverables on the critical path to completion.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Portfolio Orchestration
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Consolidate dozens of initiatives into unified portfolios with real-time health scores, resource allocations, and automatic executive rollup summaries.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Portfolio Visibility</span>
            <span>Real-Time Health</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <GitBranch className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Dependency Mapping
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Link deliverables across teams. When an API or design dependency shifts, dependent tasks and milestone projections update immediately with clear impact alerts.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Dynamic Cascades</span>
            <span>Zero Blockers</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <Flag className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Milestone Gateways
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Anchor projects around major release checkpoints. Track readiness percentages, QA signoffs, and launch checklists in one auditable command view.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Milestone Health</span>
            <span>Audit-Ready</span>
          </div>
        </div>
      </div>

      {/* Wide Project Intelligence Architecture Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              Integrated Project Delivery Architecture
            </h3>
            <p className="text-xs text-terracotta-muted">
              Built to eradicate communication silos and phantom progress
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
            Automated Tracking
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-terracotta">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Real-Time Run-Rate
            </h4>
            <p className="text-xs leading-relaxed">
              See projected completion dates calculated dynamically from actual commit and task completion velocities.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              SLA Risk Early Warning
            </h4>
            <p className="text-xs leading-relaxed">
              Automatic escalation alerts when milestone critical paths fall behind expected burn-down rates.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Strategic Rollup
            </h4>
            <p className="text-xs leading-relaxed">
              Every completed milestone directly ticks up the overarching company goal in the executive dashboard.
            </p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
