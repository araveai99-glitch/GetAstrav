import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { ShieldCheck, Lock, KeyRound, CheckCircle2, Shield, UserCheck } from 'lucide-react';

export const GovernanceInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Visual H • Enterprise Security & Composable Governance
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Built for Enterprise Security & Multi-Tenant Isolation
        </h2>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto font-normal">
          Multi-tenant permissions architecture enforced at the database level by PostgreSQL Row-Level Security (RLS) policies and automated zero-owner safeguards.
        </p>
      </div>

      {/* Permission Hierarchy Tree Visual */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/70 shadow-warm-sm space-y-8 w-full">
        <div className="text-center">
          <span className="text-xs font-mono font-extrabold text-brand-orange uppercase tracking-widest">
            POSTGRESQL RLS ENFORCED ROLE MATRIX
          </span>
        </div>

        {/* Tree Diagram */}
        <div className="flex flex-col items-center space-y-5">
          
          {/* Level 1: OWNER */}
          <MotionWrapper direction="down">
            <div className="px-8 py-4 rounded-2xl bg-brand-orange text-white shadow-glow-orange flex items-center gap-3 border border-brand-orange">
              <KeyRound className="w-5 h-5 text-white" />
              <span className="text-sm sm:text-base font-extrabold tracking-wide">ORGANIZATION OWNER / FOUNDER</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-mono font-bold">
                ROOT RLS LEVEL
              </span>
            </div>
          </MotionWrapper>

          {/* Tree Connector */}
          <div className="w-px h-6 bg-brand-peach" />

          {/* Level 2: MANAGER & EXECUTIVE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 relative w-full max-w-3xl">
            <MotionWrapper direction="right" delay={0.1}>
              <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-satin-card text-center space-y-2 hover:border-brand-orange transition-all">
                <div className="flex items-center justify-center gap-2 font-extrabold text-sm sm:text-base text-espresso">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-orange" /> DEPARTMENT MANAGER
                </div>
                <p className="text-xs text-terracotta leading-relaxed">Division oversight, sprint creation & manager sign-off gates</p>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="left" delay={0.1}>
              <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-satin-card text-center space-y-2 hover:border-brand-green transition-all">
                <div className="flex items-center justify-center gap-2 font-extrabold text-sm sm:text-base text-espresso">
                  <Lock className="w-4.5 h-4.5 text-brand-green" /> EXECUTIVE AUDITOR
                </div>
                <p className="text-xs text-terracotta leading-relaxed">Read-only global OKR rollups & high-level target adjustments</p>
              </div>
            </MotionWrapper>
          </div>

          {/* Tree Connector */}
          <div className="w-px h-6 bg-brand-peach" />

          {/* Level 3: SCOPED PROJECTS */}
          <MotionWrapper direction="up" delay={0.2}>
            <div className="px-6 py-2.5 rounded-full bg-champagne border border-champagne-gold text-espresso text-xs sm:text-sm font-extrabold shadow-warm-2xs text-center font-mono">
              STRICT SCOPED PROJECT & SQUAD BOUNDARIES
            </div>
          </MotionWrapper>

          {/* Tree Connector */}
          <div className="w-px h-6 bg-brand-peach" />

          {/* Level 4: EMPLOYEES & GUEST */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 relative w-full max-w-3xl">
            <MotionWrapper direction="up" delay={0.3}>
              <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-2xs text-center space-y-1.5">
                <div className="font-extrabold text-xs sm:text-sm text-espresso flex items-center justify-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-brand-orange" /> INDIVIDUAL CONTRIBUTOR
                </div>
                <p className="text-xs text-terracotta leading-relaxed">Executes assigned leaf tasks & subtask checklists</p>
              </div>
            </MotionWrapper>

            <MotionWrapper direction="up" delay={0.3}>
              <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-2xs text-center space-y-1.5">
                <div className="font-extrabold text-xs sm:text-sm text-espresso flex items-center justify-center gap-1.5">
                  <Shield className="w-4 h-4 text-brand-green" /> GUEST / AUDITOR
                </div>
                <p className="text-xs text-terracotta leading-relaxed">Scoped external read-only contractor access</p>
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
            <div key={idx} className="p-4 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs space-y-2 text-center hover:border-brand-orange transition-all">
              <CheckCircle2 className="w-5 h-5 text-brand-green mx-auto" />
              <h4 className="text-xs font-extrabold text-espresso">{feature.title}</h4>
              <p className="text-[11px] text-terracotta leading-tight">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
