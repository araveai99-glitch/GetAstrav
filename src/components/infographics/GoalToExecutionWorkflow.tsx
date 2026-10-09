import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Target, Flag, FolderGit2, CheckSquare, ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Clock } from 'lucide-react';

export const GoalToExecutionWorkflow: React.FC = () => {
  return (
    <div className="w-full bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Visual B • Goal-to-Execution Workflow
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          From Strategic Vision to Verified Task Completion
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto">
          See exactly how a high-level company objective cascades through milestones, active project containers, assigned leaf tasks, manager review, and mathematical rollup completion.
        </p>
      </div>

      {/* Connected 6-Step Workflow Canvas */}
      <div className="relative p-4 sm:p-8 rounded-xl bg-surface-ambient border border-brand-peach/70 shadow-warm-sm space-y-8 w-full">
        {/* Step Flow Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative w-full">
          {[
            {
              step: '01',
              level: 'Company Goal',
              title: 'Expand Enterprise Market Share to 35%',
              detail: 'Target ARR: $10M • Priority 1',
              owner: 'Chief Executive Officer',
              icon: Target,
              badge: 'bg-brand-orange/10 text-brand-orange border-brand-orange/30',
              status: '84.5% Effective Progress',
            },
            {
              step: '02',
              level: 'Milestone',
              title: 'Pass SOC2 Audit & Launch SAML SSO',
              detail: 'Due Q4 • Weight Multiplier: 1.5x',
              owner: 'Head of Security',
              icon: Flag,
              badge: 'bg-brand-yellow/20 text-espresso border-brand-yellow/40',
              status: '90% Progress Rollup',
            },
            {
              step: '03',
              level: 'Project Container',
              title: 'SSO & Enterprise Security Hardening',
              detail: 'Container ID: prj_sec_99',
              owner: 'DevOps & Sec Squad',
              icon: FolderGit2,
              badge: 'bg-brand-peach/40 text-espresso border-brand-peach',
              status: '78% Sprint Complete',
            },
            {
              step: '04',
              level: 'Assigned Task',
              title: 'Implement OAuth PKCE & Session Tokens',
              detail: 'SLA: 48 Hrs • 4 Subtasks',
              owner: 'Alex M. (Lead Engineer)',
              icon: CheckSquare,
              badge: 'bg-brand-orange/10 text-brand-orange border-brand-orange/30',
              status: 'Work Submitted',
            },
            {
              step: '05',
              level: 'Human Review',
              title: 'Manager Verification Gate',
              detail: 'Audit Logged • Zero Bypass',
              owner: 'Priya K. (Engineering Manager)',
              icon: ShieldCheck,
              badge: 'bg-brand-yellow/20 text-espresso border-brand-yellow/40',
              status: 'Sign-off Granted',
            },
            {
              step: '06',
              level: 'Verified Completion',
              title: 'Mathematical Rollup Triggered',
              detail: '+18.4% Impact on Core Goal',
              owner: 'FounderOS Automated Engine',
              icon: CheckCircle2,
              badge: 'bg-brand-green/10 text-brand-green border-brand-green/30',
              status: '100% Synced',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <MotionWrapper key={idx} delay={idx * 0.06} direction="up">
                <div className="p-4 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs hover:border-brand-orange hover:shadow-warm-md transition-all space-y-3 relative w-full group h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-terracotta-muted">STEP {item.step}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${item.badge}`}>
                        {item.level}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-surface-tier1 border border-brand-peach/60 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>

                    <h4 className="text-xs sm:text-sm font-extrabold text-espresso leading-snug">{item.title}</h4>
                    <p className="text-[11px] text-terracotta leading-relaxed">{item.detail}</p>
                  </div>

                  <div className="pt-2 border-t border-brand-peach/40 space-y-1">
                    <div className="flex items-center gap-1 text-[10px] text-terracotta font-semibold truncate">
                      <UserCheck className="w-3 h-3 text-brand-orange shrink-0" />
                      <span className="truncate">{item.owner}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-brand-green">
                      <Clock className="w-3 h-3 shrink-0" />
                      <span>{item.status}</span>
                    </div>
                  </div>

                  {/* Connecting Arrow for Desktop */}
                  {idx < 5 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-6.5 h-6.5 rounded-full bg-white border border-brand-peach shadow-warm-xs flex items-center justify-center text-brand-orange">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};
