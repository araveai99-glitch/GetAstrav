import React from 'react';
import { Link } from 'react-router-dom';
import { CTASection } from '../../components/common/CTASection';
import {
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle2,
  Lock,
  FileText,
  Activity,
  Bell,
  BarChart3,
  ListCheck,
  Building2,
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 md:space-y-24">
      {/* SECTION 1 — HERO */}
      <section className="relative w-full overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-surface-ambient">
        <div className="max-w-[1340px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-brand-peach shadow-warm-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
              </span>
              <span className="text-[11px] font-extrabold tracking-wider text-espresso uppercase">
                FounderOS v4.8 • Real-Time Operating Layer
              </span>
            </div>

            <h1 className="font-extrabold text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.08] tracking-tight text-espresso">
              From Founder Strategy to Execution on{' '}
              <span className="bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green bg-clip-text text-transparent">
                Autopilot.
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-terracotta leading-relaxed font-normal max-w-xl">
              The goal-driven organization operating system with automated mathematical progress rollups, AI goal decomposition, and enterprise RBAC.
            </p>

            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#conversion-cta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-base font-bold text-white bg-brand-orange hover:bg-primary-hover px-7 py-3.5 rounded-2xl shadow-glow-orange hover:-translate-y-0.5 transition-all"
              >
                <Calendar className="w-5 h-5" /> Book a Demo
              </a>
              <Link
                to="/app/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-semibold text-espresso bg-white hover:bg-surface-tier1 px-6 py-3.5 rounded-2xl shadow-warm-sm border border-brand-peach transition-all"
              >
                <Layers className="w-5 h-5 text-brand-orange" /> Explore FounderOS
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-peach/60 w-full">
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-brand-orange">Sub-50ms</div>
                <div className="text-xs text-terracotta-muted font-medium">Rollup Propagation</div>
              </div>
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-brand-green">100%</div>
                <div className="text-xs text-terracotta-muted font-medium">Mathematical Certainty</div>
              </div>
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-tertiary">SOC2 Type II</div>
                <div className="text-xs text-terracotta-muted font-medium">Aligned Governance</div>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Command Center Console Visualization */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-white p-6 shadow-warm-xl border border-brand-peach/80 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-brand-peach/40">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-terracotta-muted ml-2">GETASTRAV // kernel-mesh-live</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                  99.998% Synced
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-surface-tier1 border border-brand-peach/60 space-y-1">
                  <div className="text-[10px] font-bold text-terracotta-muted uppercase">Global Progress</div>
                  <div className="text-2xl font-extrabold text-espresso">78.4%</div>
                  <div className="text-[11px] text-brand-green font-semibold">+4.2% Automated Rollup</div>
                </div>

                <div className="p-4 rounded-2xl bg-surface-tier1 border border-brand-peach/60 space-y-1">
                  <div className="text-[10px] font-bold text-terracotta-muted uppercase">Active OKRs</div>
                  <div className="text-2xl font-extrabold text-espresso">24 / 28</div>
                  <div className="text-[11px] text-brand-orange font-semibold">4 Pending Review</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-orange/10 to-brand-yellow/10 border border-brand-orange/20 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-espresso">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-brand-orange" /> AI Today Focus
                  </span>
                  <span className="text-[10px] text-terracotta-muted">Gemini 2.5 Engine</span>
                </div>
                <p className="text-xs text-terracotta">
                  "Verify zero-stale edge cache invalidation headers across North America regions before release."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CONNECTED ORGANIZATION */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase">
            Bidirectional Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-espresso">What FounderOS Connects</h2>
          <p className="text-xs sm:text-sm text-terracotta">
            Top-down vision seamlessly linked with bottom-up operational execution in an immutable mathematical feedback loop.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 text-center">
          {[
            '01. Organization',
            '02. Departments',
            '03. Teams & Pods',
            '04. Projects',
            '05. Goals (OKRs)',
            '06. Milestones',
            '07. Leaf Tasks',
            '08. Subtasks',
          ].map((level, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-sm text-xs font-bold text-espresso hover:border-brand-orange transition-colors"
            >
              {level}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — MATHEMATICAL PROGRESS */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-brand-peach/80 shadow-warm-xl">
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-green uppercase">
              Mathematical Precision
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-espresso">
              Never Ask "What's the Status?" Again
            </h2>
            <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
              Propagates leaf task completion mathematically into Milestones, Goals, Projects, and Departments with zero manual status reporting. Founders get real-time progress percentages with executive override controls.
            </p>

            <ul className="space-y-2 text-xs font-semibold text-espresso">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" /> Granular checklist ratios feed directly into task completion
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" /> Milestone weight ratios compute parent goal progress
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green" /> Executive overrides maintain public authority with full audit trails
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 p-6 rounded-2xl bg-surface-ambient border border-brand-peach/60 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-espresso">
              Automated Rollup Cascade
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Sub-50ms Global Query Latency</span>
                  <span>92.0%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-brand-peach/30">
                  <div className="h-full bg-brand-green rounded-full w-[92%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>SOC2 Evidence Lockbox Prep</span>
                  <span>54.0%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-brand-peach/30">
                  <div className="h-full bg-brand-yellow rounded-full w-[54%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AI EXECUTION */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-yellow uppercase">
            AI Execution Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-espresso">
            Turn High-Level Goals into Tasks with AI
          </h2>
          <p className="text-xs sm:text-sm text-terracotta">
            Gemini 2.5 Flash Lite reads goal titles, existing tasks, and team member context to propose actionable task items.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
          <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-sm space-y-2">
            <div className="w-8 h-8 rounded-full bg-brand-orange/10 text-brand-orange font-bold mx-auto flex items-center justify-center">1</div>
            <h4 className="text-sm font-bold text-espresso">Strategic Goal</h4>
            <p className="text-[11px] text-terracotta">Enter objective title & weight</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-sm space-y-2">
            <div className="w-8 h-8 rounded-full bg-brand-yellow/10 text-brand-yellow font-bold mx-auto flex items-center justify-center">2</div>
            <h4 className="text-sm font-bold text-espresso">AI Decomposition</h4>
            <p className="text-[11px] text-terracotta">Gemini analyzes goal context</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-sm space-y-2">
            <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green font-bold mx-auto flex items-center justify-center">3</div>
            <h4 className="text-sm font-bold text-espresso">Task Proposals</h4>
            <p className="text-[11px] text-terracotta">Review titles & deadlines</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-sm space-y-2">
            <div className="w-8 h-8 rounded-full bg-espresso/10 text-espresso font-bold mx-auto flex items-center justify-center">4</div>
            <h4 className="text-sm font-bold text-espresso">Assignee & SLA</h4>
            <p className="text-[11px] text-terracotta">Accept & dispatch tasks</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ACCOUNTABILITY */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
            <ListCheck className="w-6 h-6 text-brand-orange" />
            <h3 className="text-base font-bold text-espresso">Subtask Checklists</h3>
            <p className="text-xs text-terracotta">Granular step-by-step checklists with individual weights feeding directly into task completion ratios.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
            <CheckCircle2 className="w-6 h-6 text-brand-green" />
            <h3 className="text-base font-bold text-espresso">Manager Approvals</h3>
            <p className="text-xs text-terracotta">Require manager review before tasks mark complete, locking rollup calculations until validated.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
            <Activity className="w-6 h-6 text-tertiary" />
            <h3 className="text-base font-bold text-espresso">Activity Audit History</h3>
            <p className="text-xs text-terracotta">Immutable history logging every creation, assignment, completion, review, and progress override.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — ANALYTICS */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase">
            Dual-Mode Analytics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-espresso">
            Executive Control & Contributor Focus
          </h2>
          <p className="text-xs sm:text-sm text-terracotta">
            Switch effortlessly between Executive Org-wide KPI Dashboards and Employee Personal Streak Workspace.
          </p>
        </div>
      </section>

      {/* SECTION 7 — GOVERNANCE */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-espresso text-white p-8 sm:p-12 rounded-3xl space-y-6">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-brand-orange" />
            <span className="text-xs font-bold text-brand-peach uppercase tracking-wider">Built for Scaled Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Bank-Grade Isolation & Composable RBAC</h2>
          <p className="text-xs sm:text-sm text-brand-peach/80 max-w-2xl">
            Supports global roles (Owner, Manager, Employee, Guest) alongside scoped department and project permission grants. PostgreSQL triggers enforce Zero-Owner safeguards preventing orphan organizations.
          </p>
        </div>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <CTASection />
    </div>
  );
};
