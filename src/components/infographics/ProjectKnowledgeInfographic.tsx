import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { FolderGit2, FileText, Link2, History, CheckSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProjectKnowledgeInfographic: React.FC = () => {
  const [activeVersion, setActiveVersion] = useState<'v3.4' | 'v3.3' | 'v3.2'>('v3.4');

  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Visual G • Integrated Project Specs & Knowledge Center
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Keep Knowledge and Live Execution in One Command Center
        </h2>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto font-normal">
          No more context switching between task trackers and stale documentation. FounderOS ties architecture markdown specs directly to live tasks and immutable version history.
        </p>
      </div>

      {/* Split Visual Diagram: LEFT (Project Workspace) <-> RIGHT (Documentation Engine) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-gradient-to-b from-ivory via-surface-ambient to-white p-6 sm:p-8 rounded-2xl border border-brand-peach/70 shadow-warm-sm relative w-full">
        
        {/* LEFT: Project Workspace Container */}
        <div className="lg:col-span-6 space-y-4">
          <MotionWrapper direction="right">
            <div className="p-6 rounded-2xl bg-white border border-brand-peach shadow-satin-card space-y-5">
              <div className="flex items-center justify-between border-b border-brand-peach/40 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold border border-brand-orange/30">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-espresso">Project: Payment Gateway & SAML SSO</h3>
                    <span className="text-[10px] text-terracotta font-mono">CONTAINER ID: prj_8f92a10</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-mint-soft border border-brand-green/30 text-brand-green text-xs font-bold font-mono">
                  Active Sprint
                </span>
              </div>

              {/* Linked Tasks */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono font-extrabold text-brand-orange uppercase tracking-wider">
                  LINKED ACTIONABLE LEAF TASKS
                </span>
                {[
                  { title: 'Stripe Webhook Signature Verification Lock', status: 'Completed', owner: 'Alex M.' },
                  { title: 'OAuth PKCE Idempotency Layer for Payment Retries', status: 'In Review', owner: 'Priya K.' },
                ].map((task, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-ivory border border-brand-peach/60 flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <CheckSquare className="w-4 h-4 text-brand-orange" />
                      <span className="font-bold text-espresso">{task.title}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-terracotta font-mono">{task.owner}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* CENTER CONNECTING BADGE */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center">
          <div className="px-4 py-2 rounded-full bg-brand-orange text-white text-xs font-extrabold shadow-glow-orange border border-white flex items-center gap-2">
            <Link2 className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '8s' }} />
            <span>Bi-directional Real-Time Link</span>
          </div>
        </div>

        {/* RIGHT: Project Documentation Specs */}
        <div className="lg:col-span-6 space-y-4">
          <MotionWrapper direction="left" delay={0.2}>
            <div className="p-6 rounded-2xl bg-white border border-brand-peach shadow-satin-card space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-peach/40 pb-3.5 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sage-light text-brand-green flex items-center justify-center font-bold border border-sage">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-espresso">Architecture Specification</h3>
                    <span className="text-[10px] text-terracotta font-mono">SPEC: spec_payment_v2.md</span>
                  </div>
                </div>

                {/* Version History Selector Pills */}
                <div className="flex items-center gap-1">
                  {(['v3.4', 'v3.3', 'v3.2'] as const).map((ver) => (
                    <button
                      key={ver}
                      onClick={() => setActiveVersion(ver)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeVersion === ver
                          ? 'bg-brand-orange text-white shadow-glow-orange'
                          : 'bg-ivory text-espresso hover:bg-surface-tier1 border border-brand-peach'
                      }`}
                    >
                      {ver}
                    </button>
                  ))}
                </div>
              </div>

              {/* Doc Preview Panel */}
              <div className="p-4 rounded-xl bg-ivory border border-brand-peach/60 space-y-2">
                <div className="text-xs sm:text-sm font-mono text-espresso font-extrabold flex items-center justify-between">
                  <span># Payment Engine Spec ({activeVersion})</span>
                  <span className="text-[10px] text-brand-green font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Signed off by VP Ops
                  </span>
                </div>
                <p className="text-xs text-terracotta leading-relaxed font-normal">
                  {activeVersion === 'v3.4' && 'All transaction events require sub-50ms idempotency lookup using Redis key locks with zero-downtime failover.'}
                  {activeVersion === 'v3.3' && 'Added PKCE OAuth token refresh handler for enterprise single sign-on.'}
                  {activeVersion === 'v3.2' && 'Initial draft for Stripe webhook payload signature verification.'}
                </p>
              </div>
            </div>
          </MotionWrapper>
        </div>

      </div>
    </div>
  );
};
