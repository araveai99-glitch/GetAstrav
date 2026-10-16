import React, { useEffect } from 'react';
import { UserCheck, Clock, ShieldCheck, CheckSquare, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const Managers: React.FC = () => {
  useEffect(() => {
    document.title = 'Astrav for Managers & Team Leads — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 shadow-warm-2xs">
          <UserCheck className="w-3.5 h-3.5 text-brand-green" />
          <span className="text-xs font-heading font-extrabold text-brand-green uppercase tracking-wider">
            SOLUTIONS • MANAGERS & POD LEADS
          </span>
        </div>
        <h1 className="brand-h1 text-espresso tracking-tight">
          Keep Pods Unblocked and Projects on Schedule
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Balance team capacity, streamline PR and task verification, and let automatic progress calculations eliminate administrative busywork.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <CheckSquare className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Automated Rollup Engine
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Never manually compile sprint completion decks again. When your engineers and designers check off subtasks, milestone and project bars update automatically for everyone.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Zero Manual Reporting</span>
            <span>Always Accurate</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              SLA Risk Escalations
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Identify blocked deliverables before they breach SLAs. Get notified when pull requests or review gates linger, so you can reassign help and protect sprint commitments.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Early Intervention</span>
            <span>SLA Safeguards</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Balanced Pod Workloads
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              View individual capacity meters in real time. Avoid burning out your senior contributors while surfacing opportunities for junior team members to take on ownership.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Capacity Analytics</span>
            <span>Burnout Prevention</span>
          </div>
        </div>
      </div>

      {/* Wide Manager Workflow Snapshot */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              The Engineering & Product Lead Playbook
            </h3>
            <p className="text-xs text-terracotta-muted">
              Built to make team leadership fast, objective, and transparent
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full border border-brand-green/30">
            Manager Console
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-terracotta">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              1. One-Click Approvals
            </h4>
            <p className="text-xs leading-relaxed">
              Review completed deliverables against PRD acceptance criteria with 1-click verification or revision notes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              2. Dependency Unlocking
            </h4>
            <p className="text-xs leading-relaxed">
              Unblock downstream design and backend pods automatically as soon as prerequisite deliverables clear review.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              3. Objective Sprint Velocity
            </h4>
            <p className="text-xs leading-relaxed">
              Evaluate real sprint throughput based on weighted execution metrics rather than subjective standup estimates.
            </p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
