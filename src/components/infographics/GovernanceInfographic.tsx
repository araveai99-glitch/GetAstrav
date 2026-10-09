import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { ShieldCheck, Lock, KeyRound, CheckCircle2 } from 'lucide-react';

export const GovernanceInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-peach/30 border border-brand-peach text-xs font-bold text-brand-orange uppercase tracking-wider">
          Enterprise RBAC & Security Infrastructure
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Built for Scaled Governance
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto">
          Comprehensive multi-tenant permissions architecture backed by PostgreSQL Row-Level Security (RLS) policies and immutable database audit triggers.
        </p>
      </div>

      {/* Permission Hierarchy Tree Visual */}
      <div className="p-4 sm:p-8 rounded-xl bg-surface-ambient border border-brand-peach/70 shadow-warm-sm space-y-8 w-full">
        <div className="text-center">
          <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
            ROLE-BASED ACCESS CONTROL HIERARCHY
          </span>
        </div>

        {/* Tree Diagram */}
        <div className="flex flex-col items-center space-y-6">
          {/* Level 1: OWNER - Brand Orange Gradient Palette */}
          <MotionWrapper direction="down">
            <div className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green text-white shadow-glow-orange flex items-center gap-2.5">
              <KeyRound className="w-5 h-5 text-white" />
              <span className="text-sm sm:text-base font-extrabold tracking-wide">ORGANIZATION OWNER</span>
              <span className="px-2.5 py-0.5 rounded bg-white/20 text-white text-[10px] font-mono font-bold">
                ROOT LEVEL
              </span>
            </div>
          </MotionWrapper>

          {/* Tree Line Connector */}
          <div className="w-px h-6 bg-brand-peach" />

          {/* Level 2: MANAGER & EXECUTIVE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 relative w-full max-w-3xl">
            <MotionWrapper direction="right" delay={0.1}>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-brand-peach shadow-warm-xs text-center space-y-1 hover:border-brand-orange transition-all">
                <div className="flex items-center justify-center gap-1.5 font-extrabold text-sm text-espresso">
                  <ShieldCheck className="w-4 h-4 text-brand-orange" /> MANAGER ROLE
                </div>
                <p className="text-xs text-terracotta">Departmental oversight & approval sign-off</p>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left" delay={0.1}>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-brand-peach shadow-warm-xs text-center space-y-1 hover:border-brand-green transition-all">
                <div className="flex items-center justify-center gap-1.5 font-extrabold text-sm text-espresso">
                  <Lock className="w-4 h-4 text-brand-green" /> EXECUTIVE ROLE
                </div>
                <p className="text-xs text-terracotta">Read-only global metrics & overrides</p>
              </div>
            </MotionWrapper>
          </div>

          {/* Tree Line Connector */}
          <div className="w-px h-6 bg-brand-peach" />

          {/* Level 3: SCOPED PROJECTS */}
          <MotionWrapper direction="up" delay={0.2}>
            <div className="px-6 py-3 rounded-xl bg-surface-tier1 border border-brand-peach text-brand-orange text-xs sm:text-sm font-extrabold shadow-warm-2xs text-center">
              SCOPED PROJECT & DEPARTMENT BOUNDARIES
            </div>
          </MotionWrapper>

          {/* Tree Line Connector */}
          <div className="w-px h-6 bg-brand-peach" />

          {/* Level 4: EMPLOYEES & GUEST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 relative w-full max-w-3xl">
            <MotionWrapper direction="up" delay={0.3}>
              <div className="p-4 rounded-xl bg-white border border-brand-peach shadow-warm-2xs text-center space-y-1">
                <div className="font-extrabold text-xs sm:text-sm text-espresso">EMPLOYEE ROLE</div>
                <p className="text-xs text-terracotta">Executes assigned leaf tasks & checklists</p>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="up" delay={0.3}>
              <div className="p-4 rounded-xl bg-white border border-brand-peach shadow-warm-2xs text-center space-y-1">
                <div className="font-extrabold text-xs sm:text-sm text-espresso">GUEST ROLE</div>
                <p className="text-xs text-terracotta">Scoped external read-only contractor access</p>
              </div>
            </MotionWrapper>
          </div>
        </div>

        {/* 5 Core Governance Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-6 border-t border-brand-peach/60">
          {[
            { title: 'Scoped RBAC', desc: 'Granular permissions per department' },
            { title: 'Executive Overrides', desc: 'Authorized status adjustments' },
            { title: 'RLS Protection', desc: 'Database row-level tenant isolation' },
            { title: 'Zero-Owner Guard', desc: 'PostgreSQL trigger prevents orphan orgs' },
            { title: 'Secure Invites', desc: 'Cryptographically signed invitation tokens' },
          ].map((feature, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs space-y-1.5 text-center hover:border-brand-orange transition-all">
              <CheckCircle2 className="w-5 h-5 text-brand-green mx-auto" />
              <h5 className="text-xs font-extrabold text-espresso">{feature.title}</h5>
              <p className="text-[11px] text-terracotta leading-tight">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
