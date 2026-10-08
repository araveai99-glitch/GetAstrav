import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { FolderGit2, FileText, Link2, Users, History, CheckSquare, ArrowRight, ShieldCheck } from 'lucide-react';

export const ProjectKnowledgeInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[680px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 uppercase tracking-wider">
          Unified Project & Knowledge Center
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Keep Knowledge and Execution in One Command Center
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed">
          No more context switching between task trackers and fragmented docs. FounderOS ties project documentation directly to live task execution and OKR targets.
        </p>
      </div>

      {/* Split Visual Diagram: LEFT (Project Workspace) <-> RIGHT (Documentation Engine) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-surface-ambient p-6 sm:p-8 rounded-xl border border-brand-peach/70 shadow-warm-sm relative">
        {/* LEFT: Project Workspace */}
        <div className="lg:col-span-6 space-y-4">
          <MotionWrapper direction="right">
            <div className="p-5 rounded-xl bg-white border border-brand-peach shadow-warm-md space-y-4">
              <div className="flex items-center justify-between border-b border-brand-peach/40 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-espresso">Project: Payment Gateway v2</h4>
                    <span className="text-[10px] text-terracotta font-mono">ID: prj_8f92a10</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  Active Sprint
                </span>
              </div>

              {/* Linked Tasks */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-terracotta-muted uppercase font-bold">LIVE EXECUTION TASKS</span>
                {[
                  { title: 'Stripe Webhook Signature Verification', status: 'Completed', owner: 'Alex M.' },
                  { title: 'Idempotency Layer for Payment Retries', status: 'In Review', owner: 'Priya K.' },
                ].map((task, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-surface-ambient border border-brand-peach/60 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="w-3.5 h-3.5 text-brand-orange" />
                      <span className="font-bold text-espresso">{task.title}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-terracotta">{task.owner}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* CENTER CONNECTING LINE & BADGE */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
          <div className="px-3 py-1.5 rounded-full bg-espresso text-white text-[11px] font-extrabold shadow-warm-md border border-brand-peach flex items-center gap-1.5">
            <Link2 className="w-3.5 h-3.5 text-brand-yellow" /> Bi-directional Link
          </div>
        </div>

        {/* RIGHT: Project Documentation */}
        <div className="lg:col-span-6 space-y-4">
          <MotionWrapper direction="left" delay={0.2}>
            <div className="p-5 rounded-xl bg-white border border-brand-peach shadow-warm-md space-y-4">
              <div className="flex items-center justify-between border-b border-brand-peach/40 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-espresso">Architecture Specification</h4>
                    <span className="text-[10px] text-terracotta font-mono">Doc: spec_payment_v2.md</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-[10px] font-bold flex items-center gap-1">
                  <History className="w-3 h-3" /> v3.4 History
                </span>
              </div>

              {/* Doc Preview */}
              <div className="p-3.5 rounded-lg bg-surface-ambient border border-brand-peach/60 space-y-1.5">
                <div className="text-[11px] font-mono text-espresso font-semibold">
                  # Payment Engine Architecture & Fallback Protocol
                </div>
                <p className="text-[11px] text-terracotta leading-relaxed">
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
