import React from 'react';
import { Link } from 'react-router-dom';
import { MotionWrapper } from '../../components/common/MotionWrapper';
import { InteractiveCanvas } from '../../components/marketing/InteractiveCanvas';
import { CorePillars } from '../../components/marketing/CorePillars';
import { CTASection } from '../../components/common/CTASection';
import {
  Sparkles,
  Calendar,
  Layers,
  CheckCircle2,
  Lock,
  Activity,
  ListCheck,
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-12 md:space-y-16">
      {/* SECTION 1 — HERO */}
      <section className="relative w-full overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 lg:px-8 bg-surface-ambient">
        <div className="max-w-[1340px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5">
            <MotionWrapper direction="down">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white border border-brand-peach shadow-warm-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
                </span>
                <span className="text-[11px] font-extrabold tracking-wider text-espresso uppercase">
                  FounderOS Architecture v4.8 • Real-Time Operating Layer
                </span>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <h1 className="font-extrabold text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.08] tracking-tight text-espresso">
                From Founder Strategy to Execution on{' '}
                <span className="bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green bg-clip-text text-transparent">
                  Autopilot.
                </span>
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-xl">
                The goal-driven organization operating system with automated mathematical progress rollups, AI goal decomposition, and enterprise RBAC.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.3} className="w-full sm:w-auto">
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="#conversion-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-brand-orange hover:bg-primary-hover px-7 py-3.5 rounded-xl shadow-glow-orange hover:-translate-y-0.5 transition-all"
                >
                  <Calendar className="w-4 h-4" /> Book a Demo
                </a>
                <Link
                  to="/app/dashboard"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-espresso bg-white hover:bg-surface-tier1 px-6 py-3.5 rounded-xl shadow-warm-sm border border-brand-peach transition-all"
                >
                  <Layers className="w-4 h-4 text-brand-orange" /> Explore FounderOS
                </Link>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.4} className="w-full">
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-brand-peach/60 text-left">
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-brand-orange">Sub-50ms</div>
                  <div className="text-[11px] text-terracotta-muted font-medium">Rollup Propagation</div>
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-brand-green">100%</div>
                  <div className="text-[11px] text-terracotta-muted font-medium">Mathematical Certainty</div>
                </div>
                <div>
                  <div className="font-extrabold text-lg sm:text-xl text-tertiary">SOC2 Type II</div>
                  <div className="text-[11px] text-terracotta-muted font-medium">Aligned Governance</div>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Hero Right Column: Command Center Visualization */}
          <div className="lg:col-span-6">
            <MotionWrapper direction="left" delay={0.2}>
              <div className="relative rounded-2xl bg-white p-5 sm:p-6 shadow-warm-xl border border-brand-peach/80 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-brand-peach/40">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono text-terracotta-muted ml-1">cluster-us-east-1 // kernel-mesh</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                    99.998% Synced
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-surface-tier1 border border-brand-peach/60 space-y-1">
                    <div className="text-[10px] font-extrabold text-terracotta-muted uppercase">Global Progress</div>
                    <div className="text-xl font-extrabold text-espresso">78.4%</div>
                    <div className="text-[10px] text-brand-green font-semibold">+4.2% Automated Rollup</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface-tier1 border border-brand-peach/60 space-y-1">
                    <div className="text-[10px] font-extrabold text-terracotta-muted uppercase">Active OKRs</div>
                    <div className="text-xl font-extrabold text-espresso">24 / 28</div>
                    <div className="text-[10px] text-brand-orange font-semibold">4 Pending Review</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-r from-brand-orange/10 to-brand-yellow/10 border border-brand-orange/20 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-espresso">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-orange" /> AI Today Focus
                    </span>
                    <span className="text-[10px] text-terracotta-muted">Gemini 2.5 Engine</span>
                  </div>
                  <p className="text-xs text-terracotta">
                    "Verify zero-stale edge cache invalidation headers across North America regions before release."
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CONNECTED ORGANIZATION */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <MotionWrapper className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase">
            Bidirectional Architecture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-espresso">What FounderOS Connects</h2>
          <p className="text-xs sm:text-sm text-terracotta">
            Top-down vision seamlessly linked with bottom-up operational execution in an immutable mathematical feedback loop.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2.5 text-center">
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
            <MotionWrapper key={idx} delay={idx * 0.04} direction="up">
              <div className="p-3 rounded-xl bg-white border border-brand-peach/60 shadow-warm-sm text-xs font-bold text-espresso hover:border-brand-orange hover:shadow-warm-md transition-all">
                {level}
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* CORE OPERATING PILLARS GRID */}
      <CorePillars />

      {/* INTERACTIVE COMMAND CENTER CANVAS */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <InteractiveCanvas />
      </section>

      {/* SECTION 3 — MATHEMATICAL PROGRESS */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl">
            <div className="lg:col-span-6 space-y-3">
              <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-green uppercase">
                Mathematical Precision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-espresso">
                Never Ask "What's the Status?" Again
              </h2>
              <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
                Propagates leaf task completion mathematically into Milestones, Goals, Projects, and Departments with zero manual status reporting. Founders get real-time progress percentages with executive override controls.
              </p>

              <ul className="space-y-2 text-xs font-semibold text-espresso pt-1">
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

            <div className="lg:col-span-6 p-5 rounded-xl bg-surface-ambient border border-brand-peach/60 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-espresso">
                Automated Rollup Cascade
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Sub-50ms Global Query Latency</span>
                    <span className="font-mono text-brand-green font-extrabold">92.0%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-brand-peach/30 overflow-hidden">
                    <div className="h-full bg-brand-green rounded-full w-[92%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>SOC2 Evidence Lockbox Prep</span>
                    <span className="font-mono text-brand-yellow font-extrabold">54.0%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-brand-peach/30 overflow-hidden">
                    <div className="h-full bg-brand-yellow rounded-full w-[54%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </section>

      {/* SECTION 4 — AI EXECUTION */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <MotionWrapper className="text-center max-w-2xl mx-auto space-y-2">
          <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-yellow uppercase">
            AI Execution Intelligence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-espresso">
            Turn High-Level Goals into Tasks with AI
          </h2>
          <p className="text-xs sm:text-sm text-terracotta">
            Gemini 2.5 Flash Lite reads goal titles, existing tasks, and team member context to propose actionable task items.
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          {[
            { step: '1', title: 'Strategic Goal', desc: 'Enter objective title & weight' },
            { step: '2', title: 'AI Decomposition', desc: 'Gemini analyzes goal context' },
            { step: '3', title: 'Task Proposals', desc: 'Review titles & deadlines' },
            { step: '4', title: 'Assignee & SLA', desc: 'Accept & dispatch tasks' },
          ].map((item, idx) => (
            <MotionWrapper key={idx} delay={idx * 0.08} direction="up">
              <div className="p-4 rounded-xl bg-white border border-brand-peach/60 shadow-warm-sm space-y-1.5 hover:border-brand-orange transition-all">
                <div className="w-7 h-7 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-xs mx-auto flex items-center justify-center">
                  {item.step}
                </div>
                <h4 className="text-xs font-bold text-espresso">{item.title}</h4>
                <p className="text-[11px] text-terracotta">{item.desc}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* SECTION 5 — ACCOUNTABILITY */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MotionWrapper delay={0.0}>
            <div className="p-5 rounded-xl bg-white border border-brand-peach/60 shadow-warm-md space-y-2">
              <ListCheck className="w-5 h-5 text-brand-orange" />
              <h3 className="text-sm font-bold text-espresso">Subtask Checklists</h3>
              <p className="text-xs text-terracotta leading-relaxed">
                Granular step-by-step checklists with individual weights feeding directly into task completion ratios.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <div className="p-5 rounded-xl bg-white border border-brand-peach/60 shadow-warm-md space-y-2">
              <CheckCircle2 className="w-5 h-5 text-brand-green" />
              <h3 className="text-sm font-bold text-espresso">Manager Approvals</h3>
              <p className="text-xs text-terracotta leading-relaxed">
                Require manager review before tasks mark complete, locking rollup calculations until validated.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="p-5 rounded-xl bg-white border border-brand-peach/60 shadow-warm-md space-y-2">
              <Activity className="w-5 h-5 text-tertiary" />
              <h3 className="text-sm font-bold text-espresso">Activity Audit History</h3>
              <p className="text-xs text-terracotta leading-relaxed">
                Immutable history logging every creation, assignment, completion, review, and progress override.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* SECTION 7 — GOVERNANCE */}
      <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper direction="up">
          <div className="bg-espresso text-white p-6 sm:p-10 rounded-2xl space-y-4 shadow-warm-xl relative overflow-hidden">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand-orange" />
              <span className="text-[11px] font-bold text-brand-peach uppercase tracking-wider">Built for Scaled Governance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Bank-Grade Isolation & Composable RBAC</h2>
            <p className="text-xs sm:text-sm text-brand-peach/80 max-w-2xl leading-relaxed">
              Supports global roles (Owner, Manager, Employee, Guest) alongside scoped department and project permission grants. PostgreSQL triggers enforce Zero-Owner safeguards preventing orphan organizations.
            </p>
          </div>
        </MotionWrapper>
      </section>

      {/* SECTION 8 — FINAL CTA */}
      <CTASection />
    </div>
  );
};
