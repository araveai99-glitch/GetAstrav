import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Sparkles, Check, ArrowRight, UserCheck, Calendar, ShieldCheck, Cpu } from 'lucide-react';

export const AIDecompositionInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[680px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-brand-orange uppercase tracking-wider">
          AI Goal Decomposition
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Turn High-Level Goals into Tasks with AI
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed">
          Gemini 2.5 Flash Lite engine decomposes strategic vision into concrete actionable tasks with deadlines, suggested assignees, and target weights automatically.
        </p>
      </div>

      {/* Visual Workflow: LEFT -> CENTER -> RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-surface-ambient p-6 sm:p-8 rounded-xl border border-brand-peach/70 shadow-warm-sm">
        {/* LEFT: Founder Goal Input */}
        <div className="lg:col-span-4 space-y-3">
          <MotionWrapper direction="right">
            <div className="p-5 rounded-xl bg-white border border-brand-peach shadow-warm-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">STEP 1 • INPUT GOAL</span>
                <span className="px-2 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-bold">
                  High-Level OKR
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-surface-ambient border border-brand-peach/60 space-y-1">
                <div className="text-[10px] text-terracotta font-semibold">Objective Title:</div>
                <h4 className="text-sm font-extrabold text-espresso">"Launch Android Beta App to 5,000 Users"</h4>
              </div>

              <div className="flex items-center justify-between text-xs text-terracotta">
                <span>Target Weight: <strong>1.5x</strong></span>
                <span>Deadline: <strong>Nov 15</strong></span>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* CENTER: AI Goal Decomposition Engine */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-3 my-2 lg:my-0">
          <MotionWrapper direction="up" delay={0.15}>
            <div className="relative p-5 rounded-2xl bg-gradient-to-b from-white to-surface-tier1 border border-brand-orange/40 shadow-warm-md flex flex-col items-center space-y-2 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green text-white flex items-center justify-center shadow-glow-orange animate-pulse">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-espresso">Gemini 2.5 Engine</span>
              <span className="text-[10px] text-terracotta">Decomposing Goal Context...</span>

              <div className="flex items-center gap-1.5 pt-1 text-[10px] text-brand-orange font-bold">
                <Cpu className="w-3 h-3" /> Auto-Context Analysis
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* RIGHT: Generated Task Proposals */}
        <div className="lg:col-span-5 space-y-3">
          <MotionWrapper direction="left" delay={0.3}>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-espresso px-1">
                <span>STEP 2 • AI TASK PROPOSALS</span>
                <span className="text-[10px] font-mono text-brand-green">Auto-Suggested Assignees</span>
              </div>

              {[
                { title: 'Finalize Play Store APK signing & keystore setup', assignee: 'Alex M. (DevOps)', deadline: 'Oct 28' },
                { title: 'Implement Sentry error boundary & crash telemetry', assignee: 'Priya K. (Mobile)', deadline: 'Nov 02' },
                { title: 'Configure Firebase Push Notifications channel', assignee: 'Devon S. (Backend)', deadline: 'Nov 08' },
              ].map((task, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-between gap-3 hover:border-brand-orange transition-all">
                  <div className="space-y-0.5">
                    <h5 className="text-xs font-bold text-espresso">{task.title}</h5>
                    <div className="flex items-center gap-3 text-[10px] text-terracotta">
                      <span className="flex items-center gap-1"><UserCheck className="w-3 h-3 text-brand-orange" /> {task.assignee}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-terracotta-muted" /> {task.deadline}</span>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Workflow Review & Accept Footer */}
      <MotionWrapper delay={0.4} direction="up">
        <div className="p-4 rounded-xl bg-white border border-brand-peach shadow-warm-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-espresso">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Human Review Mode: Review AI generated tasks with one-click approval before dispatch.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-surface-tier1 border border-brand-peach text-xs font-bold text-espresso">
              Review
            </span>
            <span className="px-4 py-1.5 rounded-lg bg-brand-orange text-white text-xs font-bold shadow-glow-orange flex items-center gap-1">
              Accept All & Dispatch <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};
