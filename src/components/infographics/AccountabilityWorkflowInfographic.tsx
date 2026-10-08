import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { CheckCircle2, Clock, UserCheck, ShieldCheck, FileCheck, ArrowRight, Lock, AlertCircle } from 'lucide-react';

export const AccountabilityWorkflowInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[680px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-tertiary uppercase tracking-wider">
          End-to-End Accountability Architecture
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Clear Accountability for Every Team Member
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed">
          Every task moves through a structured, audited approval lifecycle with explicit owner assignment, dependency tracking, and manager sign-off.
        </p>
      </div>

      {/* Annotated Interface Flow */}
      <div className="p-6 sm:p-8 rounded-xl bg-surface-ambient border border-brand-peach/70 shadow-warm-sm space-y-6 relative">
        {/* Horizontal Workflow Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-3">
          {[
            { step: '1', title: 'Task Created', desc: 'Assigned with SLA', status: 'Assigned', badge: 'bg-amber-100 text-amber-800' },
            { step: '2', title: 'Subtasks', desc: '4 Checklist Items', status: 'In Progress', badge: 'bg-blue-100 text-blue-800' },
            { step: '3', title: 'Dependency', desc: 'API Gate Cleared', status: 'Unlocked', badge: 'bg-emerald-100 text-emerald-800' },
            { step: '4', title: 'Execution', desc: 'Code / Work Done', status: 'Submitted', badge: 'bg-purple-100 text-purple-800' },
            { step: '5', title: 'Review', desc: 'Peer Review Passed', status: 'Reviewing', badge: 'bg-amber-100 text-amber-800' },
            { step: '6', title: 'Manager Gate', desc: 'Sign-off Verified', status: 'Approved', badge: 'bg-emerald-100 text-emerald-800' },
            { step: '7', title: 'Completed', desc: 'Rollup Activated', status: '100% Synced', badge: 'bg-brand-orange text-white' },
          ].map((item, idx) => (
            <MotionWrapper key={idx} delay={idx * 0.06} direction="up">
              <div className="p-3.5 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs hover:border-brand-orange transition-all space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-[10px] flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${item.badge}`}>
                    {item.status}
                  </span>
                </div>
                <h4 className="text-xs font-extrabold text-espresso">{item.title}</h4>
                <p className="text-[10px] text-terracotta leading-tight">{item.desc}</p>

                {/* Connecting arrow indicator for desktop */}
                {idx < 6 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-3.5 h-3.5 text-brand-peach" />
                  </div>
                )}
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Annotated Interface Breakdown */}
        <div className="p-5 sm:p-6 rounded-xl bg-white border border-brand-peach shadow-warm-md grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-espresso">
              <UserCheck className="w-4 h-4 text-brand-orange" />
              <span>Explicit Ownership</span>
            </div>
            <p className="text-xs text-terracotta leading-relaxed">
              Every task has exactly one assigned owner. Subtasks feed fractional weights directly into the task's completion meter.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-espresso">
              <Lock className="w-4 h-4 text-brand-green" />
              <span>Gated Approval Safeguard</span>
            </div>
            <p className="text-xs text-terracotta leading-relaxed">
              When approval is required, task completion is held in pending review status until the designated manager authorizes sign-off.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-extrabold text-espresso">
              <FileCheck className="w-4 h-4 text-tertiary" />
              <span>Immutable Audit Record</span>
            </div>
            <p className="text-xs text-terracotta leading-relaxed">
              Every state change, timestamp, assignation, and review feedback is immutably logged into PostgreSQL audit triggers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
