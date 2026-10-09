import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Target, Flag, FolderGit2, CheckSquare, ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Clock, Sparkles } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    step: '01',
    level: 'Company Objective',
    title: 'Expand Enterprise Market Share to 35%',
    detail: 'Target ARR: $24M • Strategic Priority 1',
    owner: 'Chief Executive Officer',
    icon: Target,
    badge: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
    status: '84.5% Cascade Progress',
    impact: 'Base Root Node',
  },
  {
    step: '02',
    level: 'Milestone Gate',
    title: 'Pass SOC2 Audit & Launch SAML SSO',
    detail: 'Due Q4 • Weight Multiplier: 1.5x',
    owner: 'Head of Security & Governance',
    icon: Flag,
    badge: 'bg-champagne text-espresso border-champagne-gold',
    status: '90.0% Rollup Progress',
    impact: 'Weighted Gate',
  },
  {
    step: '03',
    level: 'Project Container',
    title: 'SSO & Enterprise Security Hardening',
    detail: 'Container ID: prj_sec_99 • Spec v3.4',
    owner: 'DevOps & Infrastructure Pod',
    icon: FolderGit2,
    badge: 'bg-sage-light text-brand-green border-sage',
    status: '78% Sprint Execution',
    impact: 'Container Bound',
  },
  {
    step: '04',
    level: 'Assigned Leaf Task',
    title: 'Implement OAuth PKCE Session Tokens',
    detail: 'SLA: 48 Hrs • 4 Checklist Items Passed',
    owner: 'Alex M. (Lead Staff Engineer)',
    icon: CheckSquare,
    badge: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
    status: 'Work Code Submitted',
    impact: 'Leaf Execution',
  },
  {
    step: '05',
    level: 'Manager Review Gate',
    title: 'Code & Security Sign-off Gate',
    detail: 'Immutable Audit Logged • Zero Bypass',
    owner: 'Priya K. (Engineering Director)',
    icon: ShieldCheck,
    badge: 'bg-mint-soft text-brand-green border-brand-green/30',
    status: 'Manager Sign-off Granted',
    impact: 'Verification Passed',
  },
  {
    step: '06',
    level: 'Automated Rollup',
    title: 'Cascade Formula Execution',
    detail: '+18.4% Instant Weight Impact on Core Goal',
    owner: 'FounderOS Real-Time Kernel',
    icon: CheckCircle2,
    badge: 'bg-brand-green/10 text-brand-green border-brand-green/30',
    status: '100% Synced (12ms)',
    impact: 'Cascade Propagated',
  },
];

export const GoalToExecutionWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sage-light border border-sage text-xs font-bold text-brand-green uppercase tracking-wider">
          Visual B • Goal-to-Execution Workflow Pipeline
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          From Strategic Vision to Verified Task Completion
        </h2>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto">
          Trace how a founder objective flows into milestones, project containers, assigned tasks, manager review gates, and real-time mathematical rollups.
        </p>
      </div>

      {/* Connected 6-Step Interactive Workflow Pipeline */}
      <div className="relative p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/70 shadow-warm-sm space-y-8 w-full">
        
        {/* Workflow Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative w-full">
          {WORKFLOW_STEPS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;
            return (
              <MotionWrapper key={idx} delay={idx * 0.05} direction="up">
                <div
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 space-y-4 relative w-full group cursor-pointer h-full flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-brand-orange shadow-warm-lg scale-102 ring-2 ring-brand-orange/20'
                      : 'bg-white/80 border-brand-peach/70 hover:border-brand-orange/40 hover:bg-white shadow-warm-2xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-extrabold text-terracotta-muted">STEP {item.step}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${item.badge}`}>
                        {item.level}
                      </span>
                    </div>

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-brand-orange text-white shadow-glow-orange' : 'bg-surface-tier1 text-brand-orange border border-brand-peach/60 group-hover:bg-brand-orange group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xs sm:text-sm font-extrabold text-espresso leading-snug">{item.title}</h3>
                    <p className="text-[11px] text-terracotta leading-relaxed font-normal">{item.detail}</p>
                  </div>

                  <div className="pt-3 border-t border-brand-peach/40 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] text-terracotta font-semibold truncate">
                      <UserCheck className="w-3 h-3 text-brand-orange shrink-0" />
                      <span className="truncate">{item.owner}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-brand-green">
                      <Clock className="w-3 h-3 shrink-0" />
                      <span>{item.status}</span>
                    </div>
                  </div>

                  {/* Connecting Desktop Arrow */}
                  {idx < 5 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-6.5 h-6.5 rounded-full bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-center text-brand-orange">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Selected Step Inspector Panel */}
        <div className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light border border-brand-orange/30 text-brand-orange flex items-center justify-center font-mono font-bold text-sm shrink-0">
              {WORKFLOW_STEPS[activeStep].step}
            </div>
            <div>
              <span className="text-[10px] font-mono font-extrabold text-brand-orange uppercase tracking-wider">
                CURRENT PIPELINE STAGE: {WORKFLOW_STEPS[activeStep].level}
              </span>
              <h4 className="text-sm sm:text-base font-extrabold text-espresso">{WORKFLOW_STEPS[activeStep].title}</h4>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-center">
            <span className="px-3.5 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-mono font-bold border border-brand-green/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {WORKFLOW_STEPS[activeStep].impact}
            </span>
            <span className="px-3.5 py-1 rounded-full bg-ivory text-espresso text-xs font-mono font-bold border border-brand-peach">
              {WORKFLOW_STEPS[activeStep].status}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
