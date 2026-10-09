import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Sparkles, Check, ArrowRight, UserCheck, Calendar, ShieldCheck, Cpu, RefreshCw } from 'lucide-react';

export const AIDecompositionInfographic: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Visual E • AI Goal Decomposition Engine
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Turn High-Level Strategy into Actionable Tasks
        </h2>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto">
          Gemini 2.5 Flash AI engine automatically breaks strategic company objectives down into structured subtasks with suggested assignees, SLA deadlines, and target weight ratios.
        </p>
      </div>

      {/* Visual Workflow: LEFT -> CENTER -> RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-gradient-to-b from-ivory via-surface-ambient to-white p-6 sm:p-8 rounded-2xl border border-brand-peach/70 shadow-warm-sm w-full">
        
        {/* LEFT: Founder Goal Input */}
        <div className="lg:col-span-4 space-y-3 w-full">
          <MotionWrapper direction="right">
            <div className="p-6 rounded-2xl bg-white border border-brand-peach shadow-satin-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-extrabold text-brand-orange uppercase tracking-wider">STEP 1 • STRATEGIC PROMPT</span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-orange-light text-brand-orange text-[10px] font-bold font-mono">
                  High-Level OKR
                </span>
              </div>

              <div className="p-4 rounded-xl bg-ivory border border-brand-peach/60 space-y-1.5">
                <div className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">OBJECTIVE TITLE:</div>
                <h3 className="text-sm sm:text-base font-extrabold text-espresso leading-snug">"Launch Android Beta App to 5,000 Verified Users"</h3>
              </div>

              <div className="flex items-center justify-between text-xs text-terracotta font-medium pt-1 border-t border-brand-peach/40">
                <span>Target Impact Weight: <strong className="text-espresso font-mono font-bold">1.5x</strong></span>
                <span>Target Deadline: <strong className="text-espresso font-mono font-bold">Nov 15</strong></span>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* CENTER: AI Goal Decomposition Engine */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-3 my-2 lg:my-0 w-full">
          <MotionWrapper direction="up" delay={0.15}>
            <div className="relative p-6 rounded-2xl bg-white border border-brand-orange/40 shadow-glow-orange flex flex-col items-center space-y-3 w-full max-w-xs mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-glow-orange animate-pulse">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-sm font-mono font-extrabold text-espresso">Gemini 2.5 Engine</span>
              <span className="text-xs text-terracotta font-medium">Decomposing Goal Context...</span>

              <div className="flex items-center gap-1.5 pt-1 text-xs text-brand-orange font-bold font-mono">
                <Cpu className="w-4 h-4" /> Capacity & SLA Analysis
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* RIGHT: Generated Task Proposals */}
        <div className="lg:col-span-5 space-y-3 w-full">
          <MotionWrapper direction="left" delay={0.3}>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-espresso px-1">
                <span>STEP 2 • AI PROPOSED EXECUTION SPECS</span>
                <span className="text-xs text-brand-green">Auto-Assigned Pods</span>
              </div>

              {[
                { title: 'Finalize Play Store APK signing & keystore setup', assignee: 'Alex M. (DevOps)', deadline: 'Oct 28' },
                { title: 'Implement Sentry error boundary & crash telemetry', assignee: 'Priya K. (Mobile)', deadline: 'Nov 02' },
                { title: 'Configure Firebase Push Notifications channel', assignee: 'Devon S. (Backend)', deadline: 'Nov 08' },
              ].map((task, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-between gap-3 hover:border-brand-orange transition-all">
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-bold text-espresso">{task.title}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-terracotta">
                      <span className="flex items-center gap-1 font-medium"><UserCheck className="w-3.5 h-3.5 text-brand-orange" /> {task.assignee}</span>
                      <span className="flex items-center gap-1 font-mono font-bold"><Calendar className="w-3.5 h-3.5 text-terracotta-muted" /> {task.deadline}</span>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-sage-light text-brand-green flex items-center justify-center shrink-0 border border-sage">
                    <Check className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>
        </div>
      </div>

      {/* Workflow Review & Accept Footer */}
      <MotionWrapper delay={0.4} direction="up">
        <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-espresso">
            <ShieldCheck className="w-5 h-5 text-brand-green shrink-0" />
            <span>Human-in-the-Loop Review: Inspect AI proposal before dispatching to sprint backlog.</span>
          </div>
          <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
            <button
              onClick={() => setAccepted(!accepted)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                accepted
                  ? 'bg-brand-green text-white shadow-glow-green'
                  : 'bg-brand-orange text-white hover:bg-brand-orange-hover shadow-glow-orange'
              }`}
            >
              {accepted ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Tasks Dispatched to Backlog</span>
                </>
              ) : (
                <>
                  <span>Accept & Dispatch Proposals</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </MotionWrapper>
    </div>
  );
};
