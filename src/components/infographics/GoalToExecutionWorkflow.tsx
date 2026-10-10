import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Target, FolderGit2, Flag, CheckSquare, CheckCircle2, ArrowRight, User } from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    step: '01',
    level: 'Company Goal',
    title: 'Scale Customer Operations to $20M ARR',
    detail: 'Top strategic objective for Q3',
    owner: 'Sarah M. (CEO)',
    icon: Target,
    badge: 'bg-brand-orange/10 text-brand-orange border-brand-orange/30',
    status: 'High Priority',
  },
  {
    step: '02',
    level: 'Project',
    title: 'Customer Onboarding Redesign',
    detail: 'Streamline team setup and onboarding flow',
    owner: 'Product Team',
    icon: FolderGit2,
    badge: 'bg-champagne text-espresso border-champagne-gold',
    status: 'In Progress',
  },
  {
    step: '03',
    level: 'Milestones',
    title: 'Security & SLA Compliance Audit',
    detail: 'Complete security review and SLA sign-offs',
    owner: 'Governance Pod',
    icon: Flag,
    badge: 'bg-sage-light text-brand-green border-sage',
    status: 'Target Q3',
  },
  {
    step: '04',
    level: 'Tasks',
    title: 'Deploy Automated Verification Flow',
    detail: 'Assigned task with clear SLA deadline',
    owner: 'Alex R. (Lead Dev)',
    icon: CheckSquare,
    badge: 'bg-brand-orange/10 text-brand-orange border-brand-orange/30',
    status: 'Active Task',
  },
  {
    step: '05',
    level: 'Completion',
    title: 'Task Verified & Goal Progress Updated',
    detail: 'Work completed, progress updates automatically',
    owner: 'System Auto-Rollup',
    icon: CheckCircle2,
    badge: 'bg-brand-green/10 text-brand-green border-brand-green/30',
    status: '100% Completed',
  },
];

export const GoalToExecutionWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[800px] mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight">
          From Big Goals to Everyday Tasks.
        </h2>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-[700px] mx-auto font-normal">
          Everyone knows what needs to be done, who owns it, and how the work contributes to the bigger goal.
        </p>
      </div>

      {/* 5-Step Visual Connected Flow */}
      <div className="relative p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/70 shadow-warm-sm space-y-6 w-full">
        
        {/* Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative w-full">
          {WORKFLOW_STEPS.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;
            return (
              <MotionWrapper key={idx} delay={idx * 0.05} direction="up">
                <div
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 space-y-4 relative w-full group cursor-pointer h-full flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-brand-orange shadow-warm-lg ring-2 ring-brand-orange/20'
                      : 'bg-white/90 border-brand-peach/70 hover:border-brand-orange/40 hover:bg-white shadow-warm-2xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-extrabold text-terracotta-muted">STEP 0{idx + 1}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.badge}`}>
                        {item.level}
                      </span>
                    </div>

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-brand-orange text-white shadow-glow-orange' : 'bg-surface-tier1 text-brand-orange border border-brand-peach/60 group-hover:bg-brand-orange group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-sm font-extrabold text-espresso leading-snug">{item.title}</h3>
                    <p className="text-xs text-terracotta leading-relaxed font-normal">{item.detail}</p>
                  </div>

                  <div className="pt-3 border-t border-brand-peach/40 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-terracotta font-semibold truncate">
                      <User className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span className="truncate">{item.owner}</span>
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  {idx < 4 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-6 h-6 rounded-full bg-white border border-brand-peach shadow-warm-2xs flex items-center justify-center text-brand-orange">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        {/* Selected Step Summary Bar */}
        <div className="p-4 rounded-xl bg-white border border-brand-peach/80 shadow-warm-xs flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-brand-orange">Workflow Path:</span>
            <span className="font-semibold text-espresso">Company Goal → Project → Milestones → Tasks → Completion</span>
          </div>
          <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-bold shrink-0">
            Clear Ownership & Alignment
          </span>
        </div>

      </div>
    </div>
  );
};

