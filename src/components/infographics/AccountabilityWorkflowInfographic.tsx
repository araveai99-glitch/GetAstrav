import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { UserCheck, Lock, FileCheck, ArrowRight, ShieldCheck } from 'lucide-react';

export const AccountabilityWorkflowInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-light border border-sage text-xs font-bold text-brand-green uppercase tracking-wider">
          Visual F • Execution & Accountability Architecture
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Clear Accountability & Zero-Bypass Sign-Off Gates
        </h2>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto">
          Every task moves through a transparent, audited approval lifecycle with explicit single-owner assignment, dependency resolution, and manager sign-off gates.
        </p>
      </div>

      {/* Annotated Interface Flow */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/70 shadow-warm-sm space-y-8 relative w-full">
        
        {/* Horizontal Workflow Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 w-full">
          {[
            { step: '1', title: 'Task Created', desc: 'Assigned with SLA', status: 'Assigned', badge: 'bg-brand-orange-light text-brand-orange border-brand-orange/30' },
            { step: '2', title: 'Subtasks', desc: '4 Checklist Items', status: 'In Progress', badge: 'bg-champagne text-espresso border-champagne-gold' },
            { step: '3', title: 'Dependency', desc: 'API Gate Cleared', status: 'Unlocked', badge: 'bg-sage-light text-brand-green border-sage' },
            { step: '4', title: 'Execution', desc: 'Code / Work Done', status: 'Submitted', badge: 'bg-coral-soft text-brand-orange border-brand-orange/30' },
            { step: '5', title: 'Peer Review', desc: 'Review Passed', status: 'Reviewing', badge: 'bg-brand-yellow-light text-espresso border-brand-yellow/40' },
            { step: '6', title: 'Manager Gate', desc: 'Sign-off Verified', status: 'Approved', badge: 'bg-mint-soft text-brand-green border-brand-green/30' },
            { step: '7', title: 'Completed', desc: 'Rollup Activated', status: '100% Synced', badge: 'bg-brand-orange text-white border-brand-orange' },
          ].map((item, idx) => (
            <MotionWrapper key={idx} delay={idx * 0.04} direction="up">
              <div className="p-4 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-2xs hover:border-brand-orange transition-all space-y-3 relative w-full group h-full flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-5 h-5 rounded-full bg-brand-orange-light text-brand-orange font-mono font-bold text-xs flex items-center justify-center border border-brand-orange/30">
                      {item.step}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.badge}`}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-espresso">{item.title}</h3>
                  <p className="text-[11px] text-terracotta leading-tight">{item.desc}</p>
                </div>

                {/* Arrow indicator for desktop */}
                {idx < 6 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-center text-brand-orange">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Annotated Interface Breakdown Cards */}
        <div className="p-6 rounded-2xl bg-white border border-brand-peach shadow-warm-md grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-espresso">
              <div className="w-8 h-8 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                <UserCheck className="w-4.5 h-4.5" />
              </div>
              <span>Explicit Single Ownership</span>
            </div>
            <p className="text-xs sm:text-sm text-terracotta leading-relaxed font-normal">
              Every task has exactly one assigned owner. Subtasks feed fractional progress weights directly into the leaf task completion meter.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-espresso">
              <div className="w-8 h-8 rounded-xl bg-sage-light text-brand-green flex items-center justify-center">
                <Lock className="w-4.5 h-4.5" />
              </div>
              <span>Gated Manager Sign-Off</span>
            </div>
            <p className="text-xs sm:text-sm text-terracotta leading-relaxed font-normal">
              When review is required, task completion is held in pending status until the designated engineering or department lead authorizes sign-off.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-espresso">
              <div className="w-8 h-8 rounded-xl bg-champagne text-espresso flex items-center justify-center">
                <FileCheck className="w-4.5 h-4.5 text-brand-orange" />
              </div>
              <span>Immutable Audit Logs</span>
            </div>
            <p className="text-xs sm:text-sm text-terracotta leading-relaxed font-normal">
              Every state transition, SLA timestamp, assignee reassignment, and review feedback is immutably logged into PostgreSQL audit triggers.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
