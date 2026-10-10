import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { CheckCircle2, AlertTriangle, ArrowRight, TrendingUp, Sliders } from 'lucide-react';

export const RollupInfographic: React.FC = () => {
  const [taskCompletion, setTaskCompletion] = useState<number>(80);

  // Simple, intuitive visual progress calculation
  const milestoneVal = Math.min(100, Math.round(taskCompletion * 0.95));
  const goalVal = Math.min(100, Math.round(taskCompletion * 0.9 + 5));

  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[800px] mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight">
          Never Ask “What's the Status?” Again.
        </h2>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-[700px] mx-auto font-normal">
          As tasks are completed, progress updates across connected milestones, goals, and projects. Spot delays and see what needs attention.
        </p>
      </div>

      {/* Interactive Visual Progress Showcase */}
      <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/70 shadow-warm-sm space-y-8 w-full">
        
        {/* Interactive Slider Bar */}
        <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-brand-orange" />
              <span className="text-xs font-bold text-espresso uppercase tracking-wider">
                Interactive Demo • Drag Slider to Complete Tasks
              </span>
            </div>
            <span className="text-sm font-extrabold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
              Tasks Completed: {taskCompletion}%
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={taskCompletion}
            onChange={(e) => setTaskCompletion(Number(e.target.value))}
            className="w-full h-2.5 bg-brand-peach/40 rounded-lg appearance-none cursor-pointer accent-brand-orange"
          />
        </div>

        {/* Visual Progress Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative w-full">
          {/* Step 1: Tasks Completed */}
          <MotionWrapper delay={0.1} direction="up">
            <div className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-2xs space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-terracotta-muted">01. TEAM TASKS</span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
                  Work Output
                </span>
              </div>
              <h3 className="text-base font-extrabold text-espresso">Daily Team Execution</h3>
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>Task Progress</span>
                  <span className="text-brand-orange">{taskCompletion}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-brand-peach/30 overflow-hidden">
                  <div
                    className="h-full bg-brand-orange rounded-full transition-all duration-300"
                    style={{ width: `${taskCompletion}%` }}
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Step 2: Milestone Progress */}
          <MotionWrapper delay={0.2} direction="up">
            <div className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-2xs space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-terracotta-muted">02. MILESTONE</span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-yellow/15 text-tertiary text-xs font-bold">
                  Auto-Updated
                </span>
              </div>
              <h3 className="text-base font-extrabold text-espresso">Project Deliverable Gate</h3>
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>Milestone Completion</span>
                  <span className="text-tertiary">{milestoneVal}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-brand-peach/30 overflow-hidden">
                  <div
                    className="h-full bg-brand-yellow rounded-full transition-all duration-300"
                    style={{ width: `${milestoneVal}%` }}
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Step 3: Company Goal Progress */}
          <MotionWrapper delay={0.3} direction="up">
            <div className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-2xs space-y-3 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-terracotta-muted">03. COMPANY GOAL</span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
                  Strategy Target
                </span>
              </div>
              <h3 className="text-base font-extrabold text-espresso">Overall Strategic Goal</h3>
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span>Goal Progress</span>
                  <span className="text-brand-green">{goalVal}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-brand-peach/30 overflow-hidden">
                  <div
                    className="h-full bg-brand-green rounded-full transition-all duration-300"
                    style={{ width: `${goalVal}%` }}
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* Spot Delays & Instant Visibility Panel */}
        <MotionWrapper delay={0.4} direction="up">
          <div className="p-6 rounded-2xl bg-white border border-brand-peach/90 shadow-warm-md flex flex-col md:flex-row items-center justify-between gap-6 w-full">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-glow-orange shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase text-brand-orange tracking-wider">
                    Automatic Progress & Risk Spotting
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-amber-500" /> Spot Delays Early
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-espresso mt-1">Clear Visibility Without Chasing Status Updates</h3>
                <p className="text-sm text-terracotta font-normal mt-0.5">
                  As team members complete tasks, progress updates automatically. If a task slips behind schedule, FounderOS highlights the delay immediately.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="px-4 py-2 rounded-xl bg-brand-green/10 text-brand-green font-bold text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Zero Status Meetings Needed
              </span>
            </div>
          </div>
        </MotionWrapper>

      </div>
    </div>
  );
};

