import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { CheckCircle2, TrendingUp, Cpu, ShieldCheck, ArrowRight, ArrowDown } from 'lucide-react';

export const RollupInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[680px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-brand-green uppercase tracking-wider">
          Automated Mathematical Rollup Engine
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Never Ask "What's the Status?" Again
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed">
          Zero manual status reporting. Completion ratios automatically propagate from subtasks up to department executive dashboards in real time with 100% mathematical certainty.
        </p>
      </div>

      {/* Visual Rollup Flow Diagram */}
      <div className="relative p-6 sm:p-8 rounded-xl bg-surface-ambient border border-brand-peach/70 shadow-warm-sm space-y-6">
        {/* Cascade Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
          {[
            { step: '01', title: 'Subtasks', progress: '100%', subtext: '4 / 4 Checked', badge: 'Leaf Ratio' },
            { step: '02', title: 'Task', progress: '100%', subtext: 'Task Complete', badge: 'Auto-Calculated' },
            { step: '03', title: 'Milestone', progress: '75%', subtext: '3 of 4 Tasks Done', badge: 'Weight Adjusted' },
            { step: '04', title: 'Goal (OKR)', progress: '82%', subtext: 'Target Metric hit', badge: 'OKR Synced' },
            { step: '05', title: 'Project', progress: '88%', subtext: 'Sprint Deliverable', badge: 'Active Release' },
            { step: '06', title: 'Department', progress: '91%', subtext: 'Engineering Ops', badge: 'Org Rollup' },
          ].map((item, idx) => (
            <MotionWrapper key={idx} delay={idx * 0.07} direction="up">
              <div className="p-4 rounded-xl bg-white border border-brand-peach/80 shadow-warm-xs hover:border-brand-orange transition-all space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-terracotta-muted">STEP {item.step}</span>
                  <span className="px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green text-[10px] font-bold">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-xs font-extrabold text-espresso">{item.title}</h4>
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-extrabold text-espresso">{item.progress}</span>
                    <span className="text-[10px] text-terracotta">{item.subtext}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-surface-tier1 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-orange to-brand-green rounded-full transition-all duration-700"
                      style={{ width: item.progress }}
                    />
                  </div>
                </div>

                {/* Arrow Connector */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-white border border-brand-peach shadow-warm-xs flex items-center justify-center text-brand-orange">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Final Executive View Panel Result */}
        <MotionWrapper delay={0.45} direction="up">
          <div className="p-5 sm:p-6 rounded-xl bg-white border border-brand-peach shadow-warm-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-yellow text-white flex items-center justify-center shadow-glow-orange shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-brand-orange font-bold tracking-wider">
                  EXECUTIVE DASHBOARD VIEW
                </span>
                <h4 className="text-lg font-extrabold text-espresso">Global Organizational Progress: 91.4%</h4>
                <p className="text-xs text-terracotta">
                  Calculated automatically across 1,420 subtasks and 38 strategic goals without a single status update meeting.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="px-3 py-1.5 rounded-lg bg-surface-tier1 border border-brand-peach text-xs font-bold text-espresso flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green" /> 100% Audit Verified
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-brand-orange/10 border border-brand-orange/30 text-xs font-bold text-brand-orange flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> &lt;50ms Sync
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};
