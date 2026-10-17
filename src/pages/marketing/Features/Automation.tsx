import React, { useEffect } from 'react';
import { Zap, GitBranch, Bell, RefreshCw, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const Automation: React.FC = () => {
  useEffect(() => {
    document.title = 'Event-Driven Workflow Automation — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="brand-h1 text-espresso tracking-tight">
          Event-Driven Workflow & Progress Automation
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Automate repetitive operational handoffs, trigger SLA escalations, and synchronize status changes instantly across your entire company.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Continuous Rollup Engine
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Whenever a subtask or task is checked off, our reactive event pipeline recalculates project, milestone, and goal completion rates in under 50 milliseconds.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Sub-50ms Latency</span>
            <span>Zero Sync Delay</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <Bell className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              SLA Breach Escalations
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Set automated escalation triggers for blocked tasks. Alert managers when review approvals sit idle for more than 24 hours to prevent downstream delivery bottlenecks.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Automated Pagers</span>
            <span>Zero Dropped Balls</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Dependency Unlocking
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              When a prerequisite deliverable clears manager verification, all downstream tasks unlock automatically and notify designated assignees with full context.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Dynamic Cascades</span>
            <span>Instant Handoffs</span>
          </div>
        </div>
      </div>

      {/* Wide Automation Pipeline Architecture */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              Enterprise Automation Architecture
            </h3>
            <p className="text-xs text-terracotta-muted">
              Connect external development pipelines into the executive command center
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
            Event-Driven
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <span className="text-[10px] font-mono font-bold text-brand-orange">EVENT 01</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Git Commit Trigger</h4>
            <p className="text-xs text-terracotta">PR merges automatically update matching task statuses and code links.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <span className="text-[10px] font-mono font-bold text-amber-700">EVENT 02</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Milestone Complete</h4>
            <p className="text-xs text-terracotta">Triggers stakeholder notifications and updates the strategic board.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <span className="text-[10px] font-mono font-bold text-brand-green">EVENT 03</span>
            <h4 className="font-heading font-bold text-sm text-espresso">SLA Warning</h4>
            <p className="text-xs text-terracotta">Alerts engineering lead when task approaches 80% SLA threshold.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <span className="text-[10px] font-mono font-bold text-espresso">EVENT 04</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Audit Logging</h4>
            <p className="text-xs text-terracotta">Immutable recording of all workflow changes and state transitions.</p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
