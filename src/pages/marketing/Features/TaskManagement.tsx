import React, { useEffect } from 'react';
import { CheckSquare, Clock, ShieldCheck, UserCheck, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const TaskManagement: React.FC = () => {
  useEffect(() => {
    document.title = 'Task Execution & SLAs — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="brand-h1 text-espresso tracking-tight">
          Deterministic Task Execution & SLAs
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Enforce quality checks, subtask weightings, SLA countdowns, and manager approval gates with clear accountable ownership.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Automated SLA Timers
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Every deliverable operates with defined SLA targets. Real-time countdowns highlight imminent breaches 48 hours prior so managers can rebalance resources proactively.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Live Countdown</span>
            <span>Breach Prevention</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Manager Approval Gates
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Define sign-off criteria for critical path deliverables. Completed tasks enter a structured review queue where leads approve or request adjustments with contextual notes.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Structured Signoff</span>
            <span>Zero Slip-ups</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Weighted Subtask Verification
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Break complex tasks into measurable subtasks with percentage weights. Progress updates smoothly as items are checked off, maintaining mathematical integrity across the hierarchy.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Granular Tracking</span>
            <span>Live Calculations</span>
          </div>
        </div>
      </div>

      {/* Wide Execution Architecture Details */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              The Task-to-Goal Lifecycle
            </h3>
            <p className="text-xs text-terracotta-muted">
              Built for speed without sacrificing governance or executive alignment
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full border border-brand-green/30">
            100% Traceable
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-terracotta">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              1. Clear Ownership
            </h4>
            <p className="text-xs leading-relaxed">
              Every task has exactly one primary owner and a target pod. No orphaned work items or vague multi-owner confusion.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              2. Real-Time Telemetry
            </h4>
            <p className="text-xs leading-relaxed">
              Progress, time logs, and blocker flags feed directly into the department command center without status meetings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              3. Automatic Milestone Rollup
            </h4>
            <p className="text-xs leading-relaxed">
              As soon as a task is verified complete, connected milestones and company goals update their percentages instantly.
            </p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
