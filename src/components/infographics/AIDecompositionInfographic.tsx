import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Sparkles, Check, ArrowRight, UserCheck, Calendar, ShieldCheck, Edit2 } from 'lucide-react';

export const AIDecompositionInfographic: React.FC = () => {
  const [accepted, setAccepted] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [tasks, setTasks] = useState([
    { title: 'Finalize Play Store APK signing & keystore setup', assignee: 'Alex M. (DevOps)', deadline: 'Oct 28' },
    { title: 'Implement error boundary & crash telemetry', assignee: 'Priya K. (Mobile)', deadline: 'Nov 02' },
    { title: 'Configure Push Notifications channel', assignee: 'Devon S. (Backend)', deadline: 'Nov 08' },
  ]);

  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[800px] mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight">
          Turn Goals into Actionable Tasks.
        </h2>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-[700px] mx-auto font-normal">
          FounderOS can suggest tasks for a goal, helping you plan the work ahead. Review and adjust suggestions before using them.
        </p>
      </div>

      {/* Visual 3-Step AI Workflow */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-gradient-to-b from-ivory via-surface-ambient to-white p-6 sm:p-8 rounded-2xl border border-brand-peach/70 shadow-warm-sm w-full">
        
        {/* STEP 1: Enter a Goal */}
        <div className="lg:col-span-4 space-y-3 w-full">
          <MotionWrapper direction="right">
            <div className="p-6 rounded-2xl bg-white border border-brand-peach shadow-satin-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">STEP 1 • ENTER A GOAL</span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold">
                  User Goal Input
                </span>
              </div>

              <div className="p-4 rounded-xl bg-ivory border border-brand-peach/60 space-y-1.5">
                <div className="text-xs font-bold text-terracotta-muted uppercase">COMPANY GOAL:</div>
                <h3 className="text-base font-extrabold text-espresso leading-snug">"Launch Mobile App to 5,000 Active Users"</h3>
              </div>

              <div className="flex items-center justify-between text-xs text-terracotta font-medium pt-1 border-t border-brand-peach/40">
                <span>Target Quarter: <strong className="text-espresso font-bold">Q3 Release</strong></span>
                <span>Target Owner: <strong className="text-espresso font-bold">Product Team</strong></span>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* STEP 2: Get Suggested Tasks */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-3 my-2 lg:my-0 w-full">
          <MotionWrapper direction="up" delay={0.15}>
            <div className="relative p-6 rounded-2xl bg-white border border-brand-orange/40 shadow-glow-orange flex flex-col items-center space-y-3 w-full max-w-xs mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-glow-orange animate-pulse">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-sm font-extrabold text-espresso">STEP 2 • AI SUGGESTIONS</span>
              <span className="text-xs text-terracotta font-normal">Analyzing goal & breaking into tasks...</span>
            </div>
          </MotionWrapper>
        </div>

        {/* STEP 3: Review & Assign Tasks */}
        <div className="lg:col-span-5 space-y-3 w-full">
          <MotionWrapper direction="left" delay={0.3}>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-espresso px-1">
                <span>STEP 3 • REVIEW & ASSIGN TASKS</span>
                <span className="text-xs text-brand-green font-semibold">Full User Control</span>
              </div>

              {tasks.map((task, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-between gap-3 hover:border-brand-orange transition-all">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs sm:text-sm font-bold text-espresso">{task.title}</h4>
                      <button
                        onClick={() => setEditingIndex(editingIndex === idx ? null : idx)}
                        className="text-terracotta-muted hover:text-brand-orange text-xs p-1"
                        title="Edit suggestion"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-terracotta">
                      <span className="flex items-center gap-1 font-semibold"><UserCheck className="w-3.5 h-3.5 text-brand-orange" /> {task.assignee}</span>
                      <span className="flex items-center gap-1 font-bold"><Calendar className="w-3.5 h-3.5 text-terracotta-muted" /> {task.deadline}</span>
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

      {/* Review, Edit & Assign Controls */}
      <MotionWrapper delay={0.4} direction="up">
        <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-espresso">
            <ShieldCheck className="w-5 h-5 text-brand-green shrink-0" />
            <span>Review & Edit: You can modify AI suggested tasks and assignees anytime before confirming.</span>
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
                  <span>Tasks Approved & Assigned</span>
                </>
              ) : (
                <>
                  <span>Approve & Assign Tasks</span>
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

