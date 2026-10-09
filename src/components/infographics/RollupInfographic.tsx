import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { CheckCircle2, TrendingUp, Cpu, ArrowRight, Calculator, Sparkles } from 'lucide-react';

export const RollupInfographic: React.FC = () => {
  const [taskCompletion, setTaskCompletion] = useState<number>(75);

  // Dynamic formula calculations
  const subtaskVal = Math.min(100, Math.round(taskCompletion * 1.1));
  const milestoneVal = Math.round(taskCompletion * 0.95);
  const okrVal = Math.round(taskCompletion * 0.9 + 5);
  const globalRollupVal = (okrVal * 0.6 + milestoneVal * 0.4).toFixed(1);

  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-mint-soft border border-brand-green/30 text-xs font-bold text-brand-green uppercase tracking-wider">
          Visual C • Automated Mathematical Rollup Engine
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Progress That Reflects Actual Execution
        </h2>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto">
          No manual status reporting or guesswork. Subtask progress automatically propagates up through milestones, OKRs, and executive dashboards with sub-50ms mathematical precision.
        </p>
      </div>

      {/* Interactive Cascade Simulator */}
      <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/70 shadow-warm-sm space-y-8 w-full">
        
        {/* Interactive Slider Bar */}
        <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-mono font-extrabold text-espresso uppercase">
                INTERACTIVE CASCADE SIMULATOR • SIMULATE LEAF TASK COMPLETION
              </span>
            </div>
            <span className="text-sm font-mono font-extrabold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
              Leaf Tasks Complete: {taskCompletion}%
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={taskCompletion}
            onChange={(e) => setTaskCompletion(Number(e.target.value))}
            className="w-full h-2.5 bg-champagne rounded-lg appearance-none cursor-pointer accent-brand-orange"
          />
        </div>

        {/* Cascade Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative w-full">
          {[
            { step: '01', title: 'Subtasks', progress: `${subtaskVal}%`, subtext: 'Leaf Ratios', badge: 'Automated' },
            { step: '02', title: 'Action Task', progress: `${taskCompletion}%`, subtext: 'SLA Verified', badge: 'Live Input' },
            { step: '03', title: 'Milestone', progress: `${milestoneVal}%`, subtext: 'Weight Adjusted', badge: 'Gate Ratio' },
            { step: '04', title: 'Strategic OKR', progress: `${okrVal}%`, subtext: 'Target Synced', badge: 'OKR Engine' },
            { step: '05', title: 'Project Container', progress: `${Math.min(100, okrVal + 2)}%`, subtext: 'Sprint Deliverable', badge: 'Active Release' },
            { step: '06', title: 'Department ARR', progress: `${globalRollupVal}%`, subtext: 'Division Rollup', badge: 'Global Sync' },
          ].map((item, idx) => (
            <MotionWrapper key={idx} delay={idx * 0.05} direction="up">
              <div className="p-4 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-2xs hover:border-brand-orange transition-all space-y-3 relative w-full group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-terracotta-muted">STEP {item.step}</span>
                  <span className="px-2 py-0.5 rounded-full bg-sage-light text-brand-green text-[10px] font-mono font-bold">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-extrabold text-espresso">{item.title}</h3>
                
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-extrabold text-espresso font-mono">{item.progress}</span>
                    <span className="text-[10px] text-terracotta">{item.subtext}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-champagne overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green rounded-full transition-all duration-300"
                      style={{ width: item.progress }}
                    />
                  </div>
                </div>

                {/* Arrow Connector */}
                {idx < 5 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-center text-brand-orange">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Final Executive View Panel Result */}
        <MotionWrapper delay={0.3} direction="up">
          <div className="p-6 rounded-2xl bg-white border border-brand-peach/90 shadow-warm-md flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-glow-orange shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-brand-orange font-extrabold tracking-wider">
                  REAL-TIME EXECUTIVE ROLLUP RESULT
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-espresso">Global Computed Progress: {globalRollupVal}%</h3>
                <p className="text-xs sm:text-sm text-terracotta mt-0.5 font-normal">
                  Propagation completed automatically across 1,420 subtasks and 38 strategic goals without a single status update meeting.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-ivory border border-brand-peach text-xs font-bold text-espresso flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green" /> 100% Audit Verified
              </div>
              <div className="px-3.5 py-2 rounded-xl bg-brand-orange-light border border-brand-orange/30 text-xs font-mono font-bold text-brand-orange flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> &lt;12ms Sync
              </div>
            </div>
          </div>
        </MotionWrapper>

      </div>
    </div>
  );
};
