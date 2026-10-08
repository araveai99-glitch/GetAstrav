import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { FolderGit2, FileText, Link2, History, CheckSquare } from 'lucide-react';

export const ProjectKnowledgeInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Unified Project & Knowledge Center
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Keep Knowledge and Execution in One Command Center
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto">
          No more context switching between task trackers and fragmented docs. FounderOS ties project documentation directly to live task execution and OKR targets.
        </p>
      </div>

      {/* Split Visual Diagram: LEFT (Project Workspace) <-> RIGHT (Documentation Engine) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-surface-ambient p-4 sm:p-8 rounded-xl border border-brand-peach/70 shadow-warm-sm relative w-full">
        {/* LEFT: Project Workspace */}
        <div className="lg:col-span-6 space-y-4">
          <MotionWrapper direction="right">
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-brand-peach shadow-warm-md space-y-4">
              <div className="flex items-center justify-between border-b border-brand-peach/40 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange flex items-center justify-center font-bold">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-espresso">Project: Payment Gateway v2</h4>
                    <span className="text-[10px] text-terracotta font-mono">ID: prj_8f92a10</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] sm:text-xs font-bold">
                  Active Sprint
                </span>
              </div>

              {/* Linked Tasks */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-brand-orange uppercase font-bold">LIVE EXECUTION TASKS</span>
                {[
                  { title: 'Stripe Webhook Signature Verification', status: 'Completed', owner: 'Alex M.' },
                  { title: 'Idempotency Layer for Payment Retries', status: 'In Review', owner: 'Priya K.' },
                ].map((task, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-surface-ambient border border-brand-peach/60 flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="w-4 h-4 text-brand-orange" />
                      <span className="font-bold text-espresso">{task.title}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-terracotta">{task.owner}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* CENTER CONNECTING LINE & BADGE (Brand Orange/Yellow Gradient) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow text-white text-xs font-extrabold shadow-glow-orange border border-white flex items-center gap-1.5">
            <Link2 className="w-4 h-4 text-white" /> Bi-directional Link
          </div>
        </div>

        {/* RIGHT: Project Documentation */}
        <div className="lg:col-span-6 space-y-4">
          <MotionWrapper direction="left" delay={0.2}>
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-brand-peach shadow-warm-md space-y-4">
              <div className="flex items-center justify-between border-b border-brand-peach/40 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 border border-brand-green/30 text-brand-green flex items-center justify-center font-bold">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-espresso">Architecture Specification</h4>
                    <span className="text-[10px] text-terracotta font-mono">Doc: spec_payment_v2.md</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green text-[10px] sm:text-xs font-bold flex items-center gap-1">
                  <History className="w-3 h-3" /> v3.4 History
                </span>
              </div>

              {/* Doc Preview */}
              <div className="p-4 rounded-lg bg-surface-ambient border border-brand-peach/60 space-y-1.5">
                <div className="text-xs sm:text-sm font-mono text-espresso font-semibold">
                  # Payment Engine Architecture & Fallback Protocol
                </div>
                <p className="text-xs text-terracotta leading-relaxed">
                  All transaction events require sub-50ms idempotency lookup using redis key locks. Referenced by Goal OKR-14.
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
};
