import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ShieldCheck,
  Key,
  Lock,
  Unlock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  UserCheck,
  User,
  Users,
  Layers,
  FileCheck2,
  Sparkles,
  Fingerprint,
  Check,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

interface RoleProfile {
  id: string;
  title: string;
  badge: string;
  personName: string;
  avatarInitial: string;
  color: string;
  badgeBg: string;
  description: string;
  permissions: {
    action: string;
    allowed: boolean;
    reason: string;
  }[];
}

const ROLES: RoleProfile[] = [
  {
    id: 'admin',
    title: 'Workspace Admin',
    badge: 'Full Governance',
    personName: 'Alex Mercer',
    avatarInitial: 'AM',
    color: 'text-brand-orange',
    badgeBg: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
    description: 'Executive leadership with unrestricted authority to define OKRs, manage billing, and grant pod privileges.',
    permissions: [
      { action: 'Create Strategic Goals & OKRs', allowed: true, reason: 'Full Strategic Authority' },
      { action: 'Override Mathematical Rollup Weight', allowed: true, reason: 'Executive Override Permitted' },
      { action: 'Manage Pod Membership & Billing', allowed: true, reason: 'Workspace Admin Right' },
      { action: 'Create & Assign Pod Tasks', allowed: true, reason: 'Standard Right' },
      { action: 'Approve Deliverable Signoff Gate', allowed: true, reason: 'Manager Right' },
    ],
  },
  {
    id: 'lead',
    title: 'Pod Lead',
    badge: 'Project Scope',
    personName: 'Marcus Vance',
    avatarInitial: 'MV',
    color: 'text-brand-green',
    badgeBg: 'bg-brand-green-light text-brand-green border-brand-green/30',
    description: 'Autonomous pod leader who assigns subtasks, defines milestones, and manages deliverable quality signoffs.',
    permissions: [
      { action: 'Create Strategic Goals & OKRs', allowed: false, reason: 'Restricted to Executive Admins' },
      { action: 'Override Mathematical Rollup Weight', allowed: false, reason: 'Requires Executive Rationale' },
      { action: 'Manage Pod Membership & Billing', allowed: false, reason: 'Requires Admin Privileges' },
      { action: 'Create & Assign Pod Tasks', allowed: true, reason: 'Direct Pod Authority' },
      { action: 'Approve Deliverable Signoff Gate', allowed: true, reason: 'Authorized Quality Gatekeeper' },
    ],
  },
  {
    id: 'member',
    title: 'Team Contributor',
    badge: 'Execution Focus',
    personName: 'Sarah Chen',
    avatarInitial: 'SC',
    color: 'text-amber-700',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    description: 'Specialist builder focused on completing subtasks, updating delivery notes, and maintaining SLA velocity.',
    permissions: [
      { action: 'Create Strategic Goals & OKRs', allowed: false, reason: 'View Only for Strategic Focus' },
      { action: 'Override Mathematical Rollup Weight', allowed: false, reason: 'Immutable Calculation' },
      { action: 'Manage Pod Membership & Billing', allowed: false, reason: 'Restricted' },
      { action: 'Create & Assign Pod Tasks', allowed: true, reason: 'Permitted within Assigned Pod' },
      { action: 'Approve Deliverable Signoff Gate', allowed: false, reason: 'Requires Pod Lead Approval' },
    ],
  },
];

export const Governance: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedRoleId, setSelectedRoleId] = useState<string>('admin');
  const [auditFilter, setAuditFilter] = useState<'all' | 'security'>('all');

  useEffect(() => {
    document.title = 'Governance & RBAC — Astrav';
    window.scrollTo(0, 0);
  }, []);

  const activeRole = ROLES.find((r) => r.id === selectedRoleId) || ROLES[0];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12 selection:bg-brand-orange selection:text-white">
      {/* 1. Page Header */}
      <div className="text-left w-full max-w-5xl space-y-2 mb-2 sm:mb-4">
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left lg:whitespace-nowrap"
        >
          Enterprise Permissions <span className="text-brand-orange">Without the Complexity.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Map every team member cleanly: Person → Role → Allowed Actions. Protect strategic goals and billing while empowering builders with complete day-to-day autonomy.
        </motion.p>
      </div>

      {/* 2. MAIN ATTRACTION: Interactive Permission Map */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="p-4 xs:p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-warm-md hover:shadow-warm-lg transition-shadow relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-brand-peach/50 relative z-10">
          <div>
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
              Role-to-Permission <span className="text-brand-orange">Flow</span>
            </h2>
            <p className="text-base text-terracotta mt-1.5 leading-relaxed">
              Select an example role to see how permissions cascade dynamically to permitted and protected actions.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[13px] font-heading font-semibold text-terracotta-muted bg-surface-tier1 px-3 py-1.5 rounded-xl border border-brand-peach/50 self-start sm:self-auto">
            <Key className="w-4 h-4 text-brand-orange" />
            <span>Least-Privilege Security</span>
          </div>
        </div>

        {/* 3 Step Interactive Cascade: Person → Role → Available Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
          {/* Column 1: Person & Role Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
              1. Select Example Role:
            </span>

            {ROLES.map((role) => {
              const isSelected = selectedRoleId === role.id;

              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRoleId(role.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer select-none flex items-center justify-between group ${
                    isSelected
                      ? 'bg-brand-orange-light/50 border-brand-orange shadow-warm-md scale-[1.02]'
                      : 'bg-surface-tier1/50 border-brand-peach/40 hover:border-brand-peach hover:bg-surface-tier1'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-heading font-bold text-sm transition-all group-hover:scale-110 group-hover:rotate-3 ${
                        isSelected
                          ? 'bg-gradient-to-br from-brand-orange to-[#d94e10] text-white shadow-sm shadow-brand-orange/25'
                          : 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] text-brand-orange border border-brand-orange/30 shadow-sm shadow-brand-orange/10'
                      }`}
                    >
                      {role.avatarInitial}
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-[16px] sm:text-base text-espresso">
                        {role.title}
                      </h4>
                      <p className="text-[13px] sm:text-xs text-terracotta-muted">
                        {role.personName}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${role.badgeBg}`}
                  >
                    {role.badge}
                  </span>
                </button>
              );
            })}

            {/* Role Context Card */}
            <div className="p-4 rounded-2xl bg-surface-tier1/60 border border-brand-peach/50 text-sm text-terracotta leading-relaxed mt-4">
              <span className="font-heading font-bold text-espresso block mb-1">
                Active Role Scope
              </span>
              {activeRole.description}
            </div>
          </div>

          {/* Column 2: Available Actions Matrix (8 cols) */}
          <div className="lg:col-span-8 bg-surface-tier1/40 rounded-3xl p-4 xs:p-5 sm:p-7 border border-brand-peach/70 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-4 pb-4 mb-4 border-b border-brand-peach/50">
                <div className="flex items-start sm:items-center gap-2.5 min-w-0 flex-1">
                  <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0 mt-0.5 sm:mt-0" />
                  <h4 className="font-heading font-extrabold text-[16px] xs:text-[17px] sm:text-lg text-espresso leading-snug">
                    Available Actions for {activeRole.title}
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-terracotta-muted bg-white/80 border border-brand-peach/50 px-2.5 py-1 rounded-full shrink-0 whitespace-nowrap">
                  {activeRole.permissions.filter((p) => p.allowed).length} Permitted
                </span>
              </div>

              {/* Permission List Items */}
              <div className="space-y-3">
                {activeRole.permissions.map((perm, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                    className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex flex-col min-[360px]:flex-row min-[360px]:items-center justify-between gap-2.5 sm:gap-4 ${
                      perm.allowed
                        ? 'bg-white border-brand-green/40 shadow-warm-2xs hover:border-brand-green'
                        : 'bg-white/50 border-brand-peach/30 opacity-70'
                    }`}
                  >
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 ${
                          perm.allowed
                            ? 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7] text-brand-green border border-brand-green/30 shadow-xs'
                            : 'bg-gradient-to-br from-surface-tier1 to-surface-tier2 text-terracotta-muted border border-brand-peach/50'
                        }`}
                      >
                        {perm.allowed ? (
                          <CheckCircle2 className="w-4 h-4 stroke-[2.2]" />
                        ) : (
                          <Lock className="w-4 h-4 text-terracotta-muted stroke-[2]" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-heading font-bold text-sm sm:text-[15px] text-espresso block leading-snug">
                          {perm.action}
                        </span>
                        <span className="text-xs text-terracotta-muted block mt-0.5 leading-normal">
                          {perm.reason}
                        </span>
                      </div>
                    </div>

                    <div className="pl-10.5 min-[360px]:pl-0 self-start min-[360px]:self-center shrink-0">
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md shrink-0 whitespace-nowrap block ${
                          perm.allowed
                            ? 'bg-brand-green-light text-brand-green border border-brand-green/20'
                            : 'bg-surface-tier2 text-terracotta-muted border border-brand-peach/40'
                        }`}
                      >
                        {perm.allowed ? 'Authorized' : 'Restricted'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-peach/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 text-xs sm:text-[13px] text-terracotta-muted">
              <span className="leading-relaxed flex-1 min-w-0">
                All permission modifications emit immutable cryptographic events.
              </span>
              <span className="font-heading font-bold text-brand-green shrink-0 whitespace-nowrap self-start sm:self-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                <span>Instant Role Propagation</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Redesigned Premium Feature Cards with Micro-Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Audit Transparency */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-orange/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] border border-brand-orange/30 text-brand-orange flex items-center justify-center shadow-sm shadow-brand-orange/10 transition-all group-hover:scale-110 group-hover:rotate-3">
                <FileCheck2 className="w-6 h-6 stroke-[2]" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/20">
                SOC2 Ready
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Full Audit Transparency
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Every role change, deliverable signoff, and target override is recorded with actor ID and timestamp.
            </p>

            {/* Micro Audit Log Ticker */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-1.5 font-mono text-xs">
              <div className="flex justify-between text-terracotta-muted">
                <span>Recent Event</span>
                <span className="text-brand-green">Verified</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-brand-peach/40 text-espresso truncate">
                14:22:18 Alex M. granted Pod Lead to Marcus V.
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-brand-orange">
            <span>Immutable Audit Trail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 2: Least-Privilege */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-green/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#edf7f3] to-[#daf1e7] border border-brand-green/30 text-brand-green flex items-center justify-center shadow-sm shadow-brand-green/10 transition-all group-hover:scale-110 group-hover:rotate-3">
                <Key className="w-6 h-6 stroke-[2]" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 py-0.5 rounded-full border border-brand-green/20">
                Safe Defaults
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Least-Privilege by Default
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              New team members are assigned strictly to their active pod. They never see sensitive executive billing, equity, or unrelated strategic targets.
            </p>

            {/* Micro Default Scope Status */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-sm sm:text-xs font-mono">
              <span className="text-terracotta">Executive Target Access:</span>
              <span className="text-brand-orange font-bold flex items-center gap-1">
                <Lock className="w-3.5 h-3.5" /> Protected
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-brand-green">
            <span>Zero Accidental Exposure</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 3: Contractor Scoping */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.19 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-amber-400/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fefbf0] via-[#fef6dc] to-[#fdeec0] border border-brand-yellow/35 text-amber-700 flex items-center justify-center shadow-sm shadow-brand-yellow/10 transition-all group-hover:scale-110 group-hover:rotate-3">
                <Fingerprint className="w-6 h-6 stroke-[2]" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                1-Click Scope
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Fast Contractor Scoping
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Bring external design agencies or contract engineers into specific project containers in seconds with granular read/write rights.
            </p>

            {/* Micro Scoping Widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-sm sm:text-xs font-mono">
              <span className="text-terracotta">Contractor Timebox:</span>
              <span className="text-brand-green font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> 30-Day Auto-Revoke
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-amber-700">
            <span>Frictionless Onboarding</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
