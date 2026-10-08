import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Building2, Shield, Users, FolderGit2, Target, Flag, CheckSquare, ListCheck, ArrowRight, ArrowDown } from 'lucide-react';

const steps = [
  { level: 'L1', title: 'Organization', desc: 'Enterprise multi-tenant root & governance', icon: Building2 },
  { level: 'L2', title: 'Departments', desc: 'Strategic divisions (Engineering, Ops, Growth)', icon: Shield },
  { level: 'L3', title: 'Teams & Pods', desc: 'Cross-functional execution squads', icon: Users },
  { level: 'L4', title: 'Projects', desc: 'Active execution containers & specs', icon: FolderGit2 },
  { level: 'L5', title: 'Goals (OKRs)', desc: 'Weighted strategic objectives', icon: Target },
  { level: 'L6', title: 'Milestones', desc: 'Intermediate delivery deadlines', icon: Flag },
  { level: 'L7', title: 'Leaf Tasks', desc: 'Individual actionable work items', icon: CheckSquare },
  { level: 'L8', title: 'Subtasks', desc: 'Step-by-step checklist ratios', icon: ListCheck },
];

export const HierarchyInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[680px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase tracking-wider">
          Unified 8-Level Organization Infrastructure
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-espresso tracking-tight">
          How FounderOS Connects Everything
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed">
          Top-down vision seamlessly linked with bottom-up operational execution in an immutable 8-layer connected hierarchy.
        </p>
      </div>

      {/* Desktop Horizontal Flow / Grid Diagram */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-4 relative">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <React.Fragment key={idx}>
              <MotionWrapper delay={idx * 0.06} direction="up">
                <div className="relative p-5 rounded-xl bg-surface-ambient border border-brand-peach/70 shadow-warm-sm hover:shadow-warm-md hover:border-brand-orange transition-all space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-mono font-extrabold text-espresso border border-brand-peach shadow-2xs">
                      {item.level}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-espresso">{item.title}</h4>
                    <p className="text-xs text-terracotta leading-relaxed mt-1">{item.desc}</p>
                  </div>

                  {/* Flow Arrow Indicator for Desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-6 h-6 rounded-full bg-white border border-brand-peach shadow-warm-xs flex items-center justify-center text-brand-orange">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  )}
                </div>
              </MotionWrapper>
            </React.Fragment>
          );
        })}
      </div>

      {/* Tablet / Mobile Vertical Stacked Storytelling ($A \rightarrow B \rightarrow C \dots$) */}
      <div className="lg:hidden flex flex-col space-y-3 relative">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex flex-col items-center">
              <MotionWrapper delay={idx * 0.04} className="w-full">
                <div className="p-4 rounded-xl bg-surface-ambient border border-brand-peach/70 shadow-warm-sm flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-extrabold text-espresso truncate">{item.title}</h4>
                      <span className="px-2 py-0.5 rounded-full bg-white text-[11px] font-mono font-extrabold text-espresso border border-brand-peach">
                        {item.level}
                      </span>
                    </div>
                    <p className="text-xs text-terracotta leading-snug mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </MotionWrapper>

              {idx < steps.length - 1 && (
                <div className="my-1.5 text-brand-orange/60">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
