import React, { useEffect } from 'react';
import { ShieldCheck, Lock, FileText, UserCheck, CheckCircle2, Key, History } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const Governance: React.FC = () => {
  useEffect(() => {
    document.title = 'Governance & Enterprise RBAC — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 shadow-warm-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
          <span className="text-xs font-heading font-extrabold text-brand-green uppercase tracking-wider">
            ENTERPRISE GOVERNANCE & AUDIT
          </span>
        </div>
        <h1 className="brand-h1 text-espresso tracking-tight">
          Granular RBAC & Compliance Architecture
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Enterprise access policies, role-based scoping, founder override logs, and tamper-evident audit trails designed for high-scale organizations.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Role-Based Access Control
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Define permissions across Executive, Department Lead, Pod Member, and Guest tiers. Enforce least-privilege scoping across sensitive financial and strategic targets.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Granular Roles</span>
            <span>Zero Privilege Leakage</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <History className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Tamper-Evident Audit Trails
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Every status override, task approval, weight adjustment, and deadline edit is recorded with cryptographic timestamps, actor credentials, and explanatory notes.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>SOC2 Ready</span>
            <span>Immutable History</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <UserCheck className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Executive Override Authority
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Founders maintain executive override authority across goal calculations. Overrides cleanly display both computed and effective progress for transparent governance.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Founder Control</span>
            <span>Dual Tracking</span>
          </div>
        </div>
      </div>

      {/* Wide Governance Architecture Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              Enterprise Compliance & Data Protection
            </h3>
            <p className="text-xs text-terracotta-muted">
              Built to meet the rigorous standards of high-growth tech enterprises
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full border border-brand-green/30">
            SOC2 Type II Aligned
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm text-terracotta">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              SAML SSO & SCIM
            </h4>
            <p className="text-xs leading-relaxed">
              Single sign-on integration with Okta, Google Workspace, Azure AD, and automated employee onboarding/deprovisioning via SCIM.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Encrypted Telemetry
            </h4>
            <p className="text-xs leading-relaxed">
              All organizational data and execution telemetry encrypted in transit (TLS 1.3) and at rest (AES-256) with strict key rotation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Automated Audit Export
            </h4>
            <p className="text-xs leading-relaxed">
              Export comprehensive compliance reports and change logs formatted for internal auditors, board members, and security teams.
            </p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
