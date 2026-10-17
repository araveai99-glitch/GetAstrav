import React, { useEffect } from 'react';
import { Target, TrendingUp, ShieldCheck, Zap, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const Founders: React.FC = () => {
  useEffect(() => {
    document.title = 'Astrav for Founders & CEOs — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="brand-h1 text-espresso tracking-tight">
          Run Your Entire Company in One View
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Eliminate status check meetings. Connect high-level company strategy directly to everyday task execution with mathematical certainty.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Zero-Meeting Telemetry
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Stop waiting for Friday status decks. Open the command center and see exactly which milestones are on track, which pods have excess capacity, and what requires founder attention.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Instant Executive Clarity</span>
            <span>Always Fresh</span>
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
              Maintain complete executive control over strategic targets. Override calculated progress with full audit logging and board-ready commentary whenever business conditions shift.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Executive Authority</span>
            <span>Full Audit Trail</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Board & Investor Ready
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Generate executive summaries with transparent mathematical rollups. Provide board members with read-only views into organizational health, velocity run-rates, and SLA adherence.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Board Confidence</span>
            <span>Deterministic Metrics</span>
          </div>
        </div>
      </div>

      {/* Wide Founder Command Center Snapshot */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              The Founder’s Daily Decision Architecture
            </h3>
            <p className="text-xs text-terracotta-muted">
              Designed specifically for CEOs managing 10 to 500+ person technology companies
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
            Executive View
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-terracotta">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Spot Execution Drift Early
            </h4>
            <p className="text-xs leading-relaxed">
              Detect when department deliverables drift away from the core strategic target weeks before end-of-quarter surprises.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Align Department Leads
            </h4>
            <p className="text-xs leading-relaxed">
              Give engineering, design, and product leaders a single source of truth for dependencies and cross-pod handoffs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Focus on High-Leverage Decisions
            </h4>
            <p className="text-xs leading-relaxed">
              Spend executive energy unblocking strategic bottlenecks rather than interrogating managers about task statuses.
            </p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
