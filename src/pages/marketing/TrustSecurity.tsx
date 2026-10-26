import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  Key,
  FileCheck2,
  Server,
  CheckCircle2,
  ArrowRight,
  Eye,
  Users,
  Check,
  Database,
  Sparkles,
  Layers,
  ChevronRight,
  Globe2,
} from 'lucide-react';
import { IllustratedCardBadge } from '../../components/common/IllustratedCardBadge';

export const TrustSecurity: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<'protection' | 'access' | 'audit' | 'infra'>('protection');

  useEffect(() => {
    document.title = 'Trust, Security & Compliance — Enterprise Governance — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-12 sm:pb-16 flex flex-col space-y-12 sm:space-y-16 selection:bg-brand-orange selection:text-white">
      {/* Section 1: Hero */}
      <div className="text-left w-full max-w-5xl space-y-2.5 sm:space-y-3">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left"
        >
          Enterprise Trust, Security & <span className="text-brand-orange">Compliance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="text-base sm:text-lg lg:text-xl text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Astrav is built from the ground up for high-growth tech organizations and security-conscious leadership. We ensure mathematical precision in your execution without compromising your data boundaries.
        </motion.p>

        <div className="pt-1.5 sm:pt-2 flex items-center">
          <motion.div whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}>
            <Link
              to="/contact"
              className="btn-brand-primary px-6 py-3 rounded-xl text-sm font-heading font-bold shadow-md shadow-brand-orange/25 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Request Security Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Section 2: Four Core Security Pillars */}
      <div className="!mt-8 sm:!mt-10 lg:!mt-12 space-y-4 sm:space-y-5">
        <div className="text-left w-full max-w-5xl space-y-1.5 sm:space-y-2">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-espresso tracking-tight text-left">
            Four Pillars of Enterprise Protection.
          </h2>
          <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-3xl text-left">
            How Astrav safeguards organizational integrity, cross-team boundaries, and strategic assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-4.5 min-[375px]:p-5 sm:p-6 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between hover:shadow-warm-md hover:border-brand-peach transition-all min-w-0 cursor-pointer"
          >
            <div>
              <div className="mb-3.5 sm:mb-4">
                <IllustratedCardBadge variant="control" size="md" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso mb-1.5 sm:mb-2">
                Deterministic Pod Isolation
              </h3>
              <p className="text-sm text-terracotta leading-relaxed">
                Workspaces maintain strict container boundaries. Project artifacts and subtasks remain strictly segregated, preventing cross-pod data leakage.
              </p>
            </div>
            <div className="mt-4 sm:mt-5 pt-3 border-t border-brand-peach/40 text-xs font-mono font-bold text-brand-orange flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Scoped Tenant Sandboxes
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="p-4.5 min-[375px]:p-5 sm:p-6 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between hover:shadow-warm-md hover:border-brand-peach transition-all min-w-0 cursor-pointer"
          >
            <div>
              <div className="mb-3.5 sm:mb-4">
                <IllustratedCardBadge variant="teams" size="md" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso mb-1.5 sm:mb-2">
                Row-Level RBAC Controls
              </h3>
              <p className="text-sm text-terracotta leading-relaxed">
                Database-level query enforcement guarantees that team members, external contractors, and executives only access data granted by their active roles.
              </p>
            </div>
            <div className="mt-4 sm:mt-5 pt-3 border-t border-brand-peach/40 text-xs font-mono font-bold text-brand-green flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Database-Level Query Guard
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className="p-4.5 min-[375px]:p-5 sm:p-6 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between hover:shadow-warm-md hover:border-brand-peach transition-all min-w-0 cursor-pointer"
          >
            <div>
              <div className="mb-3.5 sm:mb-4">
                <IllustratedCardBadge variant="progress" size="md" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso mb-1.5 sm:mb-2">
                Immutable Audit Logging
              </h3>
              <p className="text-sm text-terracotta leading-relaxed">
                Every milestone change, authorization event, and rollup recalculation generates a tamper-evident audit record complete with actor timestamps.
              </p>
            </div>
            <div className="mt-4 sm:mt-5 pt-3 border-t border-brand-peach/40 text-xs font-mono font-bold text-amber-700 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> Cryptographic Timestamps
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.4, delay: 0.26 }}
            className="p-4.5 min-[375px]:p-5 sm:p-6 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between hover:shadow-warm-md hover:border-brand-peach transition-all min-w-0 cursor-pointer"
          >
            <div>
              <div className="mb-3.5 sm:mb-4">
                <IllustratedCardBadge variant="governance" size="md" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso mb-1.5 sm:mb-2">
                Continuous Encryption & SLA
              </h3>
              <p className="text-sm text-terracotta leading-relaxed">
                All data is encrypted in transit via TLS 1.3 and at rest with AES-256. Multi-zone automated replication guarantees high-availability uptime.
              </p>
            </div>
            <div className="mt-4 sm:mt-5 pt-3 border-t border-brand-peach/40 text-xs font-mono font-bold text-brand-orange flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> 99.99% Availability Guarantee
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Interactive Security Architecture Matrix */}
      <div className="!mt-8 sm:!mt-10 lg:!mt-12 space-y-4 sm:space-y-5">
        <div className="text-left w-full max-w-5xl space-y-1 sm:space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-espresso tracking-tight text-left">
            Enterprise Security Architecture Matrix.
          </h2>
          <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-3xl text-left">
            Select a dimension to inspect Astrav’s security controls, encryption specifications, and operational safeguards.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 pb-1 sm:pb-1.5">
          {[
            { id: 'protection', label: 'Data Protection & Encryption', icon: Lock },
            { id: 'access', label: 'Identity & Access Management', icon: Key },
            { id: 'audit', label: 'Auditability & Compliance', icon: FileCheck2 },
            { id: 'infra', label: 'Cloud Infrastructure & SLA', icon: Server },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeCategory === tab.id;
            return (
              <motion.button
                key={tab.id}
                type="button"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-heading font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-brand-orange text-white border-brand-orange shadow-warm-xs font-bold'
                    : 'bg-white text-espresso border-brand-peach/70 hover:border-brand-peach hover:bg-surface-tier1'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-terracotta'}`} />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Tab Content Cards */}
        <div className="bg-white rounded-3xl border border-brand-peach/80 p-5 sm:p-7 lg:p-8 shadow-warm-md">
          {activeCategory === 'protection' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">AES-256 Storage Encryption</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  All customer databases, object attachments, and backup repositories are encrypted at rest using industry-standard AES-256 keys.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-brand-orange">Encrypted at rest</div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">TLS 1.3 Transport Security</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  All traffic between user browsers, API pods, and external integrations is enforced through strict TLS 1.3 encryption protocols.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-brand-green">Encrypted in transit</div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center font-bold">
                  <Database className="w-5 h-5 text-brand-yellow" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">Zero Data Commercialization</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Your organizational strategy, metrics, and team pods are strictly your intellectual property. We never train public AI models on customer data.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-amber-700">Strict customer ownership</div>
              </motion.div>
            </motion.div>
          )}

          {activeCategory === 'access' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold">
                  <Key className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">Enterprise SAML 2.0 & SSO</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Connect your existing identity providers including Okta, Azure Active Directory, Google Workspace, and OneLogin with zero friction.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-brand-orange">Okta & Azure AD Ready</div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">SCIM Automated Provisioning</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Automatically synchronize team onboarding and departures directly from your HR directory, revoking access keys instantaneously.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-brand-green">Instant offboarding</div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">Enforced Multi-Factor (MFA)</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Enforce hardware security keys (WebAuthn / FIDO2) or authenticator apps for all workspace members with granular policy exemptions.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-amber-700">FIDO2 & TOTP</div>
              </motion.div>
            </motion.div>
          )}

          {activeCategory === 'audit' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">Granular Event Streams</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Every user interaction, milestone recalculation, and permission escalation creates a permanent, searchable event log.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-brand-orange">Full audit trace</div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">SIEM Integration & Export</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Stream workspace audit logs directly to Datadog, Splunk, or AWS S3 for continuous compliance analysis and external reporting.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-brand-green">Webhook & S3 streams</div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">Continuous Compliance</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Regular independent third-party penetration tests and automated continuous compliance monitoring across cloud infrastructure.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-amber-700">Third-party audited</div>
              </motion.div>
            </motion.div>
          )}

          {activeCategory === 'infra' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">99.99% Availability SLA</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Our distributed cloud architecture features automated failover and multi-availability-zone redundancy to guarantee enterprise uptime.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-brand-orange">SLA contract backed</div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center font-bold">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">Data Residency Choices</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Enterprise accounts can elect to pin their data storage to US, EU (Frankfurt), or APAC regions to comply with localized regulations.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-brand-green">GDPR & US data residency</div>
              </motion.div>

              <motion.div
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
                className="p-5 rounded-2xl bg-surface-tier1/50 border border-brand-peach/50 space-y-2.5 cursor-pointer transition-all hover:bg-surface-tier1 hover:border-brand-peach/80"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-brand-yellow" />
                </div>
                <h4 className="font-heading font-bold text-base text-espresso">Automated Point-in-Time Recovery</h4>
                <p className="text-sm text-terracotta leading-relaxed">
                  Continuous WAL replication enables point-in-time database restoration within minutes, protecting against accidental deletions.
                </p>
                <div className="pt-2 text-xs font-mono font-semibold text-amber-700">RPO &lt; 5 mins</div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Section 4: Role-Based Access Control Breakdown */}
      <div className="!mt-8 sm:!mt-10 lg:!mt-12 space-y-4 sm:space-y-5">
        <div className="text-left w-full max-w-5xl space-y-1 sm:space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-espresso tracking-tight text-left">
            Role-Based Access Control (RBAC) Matrix.
          </h2>
          <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-3xl text-left">
            Astrav lets leadership invite cross-functional members and external agencies without compromising strategic visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.35, delay: 0.04 }}
            className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-xs space-y-3 cursor-pointer hover:border-brand-peach hover:shadow-warm-sm transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-extrabold text-base text-espresso">Organization Owner</span>
              <span className="px-2 py-0.5 rounded-full bg-brand-orange-light text-brand-orange text-xs font-mono font-bold">
                Root
              </span>
            </div>
            <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
              Full workspace authority. Configures global settings, SSO integrations, billing, and top-level company goal taxonomies.
            </p>
            <div className="pt-2 border-t border-brand-peach/30 text-xs text-espresso font-medium space-y-1">
              <div className="flex items-center gap-1.5 text-brand-green">
                <Check className="w-3.5 h-3.5" /> All pods & billing
              </div>
              <div className="flex items-center gap-1.5 text-brand-green">
                <Check className="w-3.5 h-3.5" /> Security policies & logs
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-xs space-y-3 cursor-pointer hover:border-brand-peach hover:shadow-warm-sm transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-extrabold text-base text-espresso">Executive Observer</span>
              <span className="px-2 py-0.5 rounded-full bg-surface-tier1 text-espresso text-xs font-mono font-bold">
                Read-All
              </span>
            </div>
            <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
              Read-only aggregate visibility across all strategic goals, department milestones, and automated mathematical rollups.
            </p>
            <div className="pt-2 border-t border-brand-peach/30 text-xs text-espresso font-medium space-y-1">
              <div className="flex items-center gap-1.5 text-brand-green">
                <Check className="w-3.5 h-3.5" /> Cross-pod rollup view
              </div>
              <div className="flex items-center gap-1.5 text-brand-green">
                <Check className="w-3.5 h-3.5" /> Executive KPI dashboard
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.35, delay: 0.16 }}
            className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-xs space-y-3 cursor-pointer hover:border-brand-peach hover:shadow-warm-sm transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-extrabold text-base text-espresso">Pod Lead</span>
              <span className="px-2 py-0.5 rounded-full bg-brand-green-light text-brand-green text-xs font-mono font-bold">
                Scoped Admin
              </span>
            </div>
            <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
              Manages sprint deliverables, milestones, and pod memberships strictly within their designated Pod container workspace.
            </p>
            <div className="pt-2 border-t border-brand-peach/30 text-xs text-espresso font-medium space-y-1">
              <div className="flex items-center gap-1.5 text-brand-green">
                <Check className="w-3.5 h-3.5" /> Pod task management
              </div>
              <div className="flex items-center gap-1.5 text-brand-green">
                <Check className="w-3.5 h-3.5" /> Milestone calculations
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
            transition={{ duration: 0.35, delay: 0.22 }}
            className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-xs space-y-3 cursor-pointer hover:border-brand-peach hover:shadow-warm-sm transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-extrabold text-base text-espresso">External Partner</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-mono font-bold">
                Isolated
              </span>
            </div>
            <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
              Invited contractors or partner agencies. Limited to assigned deliverables with zero visibility into broader company objectives.
            </p>
            <div className="pt-2 border-t border-brand-peach/30 text-xs text-espresso font-medium space-y-1">
              <div className="flex items-center gap-1.5 text-brand-green">
                <Check className="w-3.5 h-3.5" /> Single task/pod focus
              </div>
              <div className="flex items-center gap-1.5 text-brand-green">
                <Check className="w-3.5 h-3.5" /> Zero strategic exposure
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 5: Trust CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.45 }}
        className="!mt-8 sm:!mt-10 lg:!mt-12 rounded-3xl bg-gradient-to-r from-[#fffbf7] via-[#fff5ee] to-[#fef2e8] p-6 sm:p-8 lg:p-10 border-2 border-brand-peach/80 shadow-warm-lg relative overflow-hidden"
      >
        <div className="relative z-10 max-w-3xl space-y-3 sm:space-y-4 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-espresso">
            Have Custom Security or <span className="text-brand-orange">Compliance Requirements?</span>
          </h2>
          <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal">
            Our enterprise solutions team is prepared to complete vendor security questionnaires, supply our SOC2 alignment package, and execute custom enterprise data processing agreements (DPAs).
          </p>
          <div className="pt-1.5 sm:pt-2 flex items-center">
            <motion.div whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}>
              <Link
                to="/contact"
                className="btn-brand-primary px-6 py-3 rounded-xl text-sm font-heading font-bold shadow-md shadow-brand-orange/30 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Security Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Soft atmospheric background glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-brand-orange-light/40 via-brand-peach/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      </motion.div>
    </div>
  );
};
