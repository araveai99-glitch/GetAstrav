import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Target,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  PieChart,
  Activity,
  Layers,
  Sparkles,
  Users,
  Compass,
  Cpu,
  LineChart,
  GitPullRequest,
  Check,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';
import { IllustratedCardBadge } from '../../../components/common/IllustratedCardBadge';

type AnalyticsMode = 'leadership' | 'execution';

export const Analytics: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeView, setActiveView] = useState<AnalyticsMode>('leadership');
  const [interactiveMetric, setInteractiveMetric] = useState<'velocity' | 'sla'>('velocity');

  useEffect(() => {
    document.title = 'Dual-Mode Analytics — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12 selection:bg-brand-orange selection:text-white">
      {/* 1. Page Header */}
      <div className="text-left w-full max-w-5xl space-y-2 mb-2 sm:mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left lg:whitespace-nowrap"
        >
          Dual-Mode Analytics for <span className="text-brand-orange">Leaders and Builders.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Switch effortlessly between 30,000-foot company target rollups and granular ground-level task telemetry without maintaining separate dashboards.
        </motion.p>
      </div>

      {/* 2. MAIN ATTRACTION: Switchable Dual-Mode Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-warm-md hover:shadow-warm-lg transition-shadow relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-brand-peach/50 relative z-10">
          <div>
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
              Interactive Analytics <span className="text-brand-orange">Console</span>
            </h2>
            <p className="text-base text-terracotta mt-1.5 leading-relaxed">
              Toggle perspectives to experience how the exact same project telemetry translates between strategic and tactical needs.
            </p>
          </div>

          {/* Smooth Mode Switcher */}
          <div className="inline-flex p-1.5 rounded-2xl bg-surface-tier1 border border-brand-peach/70 shadow-warm-2xs self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setActiveView('leadership')}
              className={`px-4 py-2 rounded-xl text-sm font-heading font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeView === 'leadership'
                  ? 'bg-brand-orange text-white shadow-sm scale-[1.02]'
                  : 'text-terracotta-muted hover:text-espresso hover:bg-white/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Leadership View</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveView('execution')}
              className={`px-4 py-2 rounded-xl text-sm font-heading font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeView === 'execution'
                  ? 'bg-brand-orange text-white shadow-sm scale-[1.02]'
                  : 'text-terracotta-muted hover:text-espresso hover:bg-white/60'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Execution View</span>
            </button>
          </div>
        </div>

        {/* Dynamic Mode Canvas with Smooth Crossfade */}
        <AnimatePresence mode="wait">
          {activeView === 'leadership' ? (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Leadership KPI Ribbon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2 hover:bg-white hover:shadow-warm-xs transition-all">
                  <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                    Strategic OKR Health
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-3xl text-brand-green">91.4%</span>
                    <span className="text-xs font-bold text-brand-green bg-brand-green-light px-2 py-0.5 rounded-full">
                      +4.2% MoM
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-xs text-terracotta-muted">4 of 5 company goals on target</p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2 hover:bg-white hover:shadow-warm-xs transition-all">
                  <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                    Milestone Run Rate
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-3xl text-brand-orange">84.2%</span>
                    <span className="text-xs font-bold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full">
                      On Track
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-xs text-terracotta-muted">Estimated launch in 14 days</p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2 hover:bg-white hover:shadow-warm-xs transition-all">
                  <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                    SLA Compliance
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-3xl text-espresso">96.8%</span>
                    <span className="text-xs font-bold text-brand-green bg-brand-green-light px-2 py-0.5 rounded-full">
                      Zero Breaches
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-xs text-terracotta-muted">Across 3 active pods</p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2 hover:bg-white hover:shadow-warm-xs transition-all">
                  <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                    Active Containers
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-3xl text-espresso">12</span>
                    <span className="text-xs font-mono font-bold text-terracotta-muted">All Synced</span>
                  </div>
                  <p className="text-[13px] sm:text-xs text-terracotta-muted">Zero unassigned initiatives</p>
                </div>
              </div>

              {/* Visual Leadership Rollup Breakdown Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-surface-tier1/40 border border-brand-peach/60 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso">
                      Company Milestone Rollup Status
                    </h4>
                    <p className="text-sm sm:text-xs text-terracotta-muted mt-0.5">
                      Executive dashboard automatically synthesized from ground-level tasks.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-green bg-white px-3 py-1 rounded-full border border-brand-green/30 self-start sm:self-auto">
                    Executive Perspective
                  </span>
                </div>

                {/* Animated Visual Multi-Bar Progress */}
                <div className="space-y-5 pt-1">
                  {[
                    {
                      name: 'Enterprise Launch Q4 (Goal 1)',
                      progress: '88%',
                      statusColor: 'text-brand-orange',
                      barClass: 'bg-gradient-to-r from-brand-orange to-brand-green',
                      delay: 0,
                    },
                    {
                      name: 'Core Architecture Migration (Goal 2)',
                      progress: '94%',
                      statusColor: 'text-brand-green',
                      barClass: 'bg-brand-green',
                      delay: 0.1,
                    },
                    {
                      name: 'SOC2 Type II Audit Compliance (Goal 3)',
                      progress: '72%',
                      statusColor: 'text-amber-600',
                      barClass: 'bg-gradient-to-r from-amber-500 to-brand-yellow',
                      delay: 0.2,
                    },
                  ].map((milestone) => (
                    <div key={milestone.name} className="space-y-2">
                      <div className="flex flex-col min-[360px]:flex-row min-[360px]:items-baseline justify-between gap-1 min-[360px]:gap-3">
                        <span className="text-espresso font-heading font-bold text-sm sm:text-xs leading-snug">
                          {milestone.name}
                        </span>
                        <div className={`flex items-baseline gap-1.5 shrink-0 whitespace-nowrap self-start min-[360px]:self-auto ${milestone.statusColor}`}>
                          <span className="font-heading font-extrabold text-sm sm:text-xs">
                            {milestone.progress}
                          </span>
                          <span className="text-xs font-mono font-bold">
                            Complete
                          </span>
                        </div>
                      </div>
                      <div className="w-full h-3 rounded-full bg-white border border-brand-peach/50 p-0.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: milestone.progress }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.8,
                            ease: 'easeOut',
                            delay: milestone.delay,
                          }}
                          className={`h-full ${milestone.barClass} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="execution"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Execution Telemetry KPIs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2 hover:bg-white hover:shadow-warm-xs transition-all">
                  <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                    Daily Task Velocity
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-3xl text-brand-orange">18 / Day</span>
                    <span className="text-xs font-bold text-brand-green bg-brand-green-light px-2 py-0.5 rounded-full">
                      High Flow
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-xs text-terracotta-muted">Average turnaround 4.2 hours</p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2 hover:bg-white hover:shadow-warm-xs transition-all">
                  <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                    Active Sprint Tasks
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-3xl text-espresso">34</span>
                    <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full">
                      24 Done
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-xs text-terracotta-muted">10 currently in progress</p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2 hover:bg-white hover:shadow-warm-xs transition-all">
                  <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                    Code Review SLA
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-3xl text-brand-green">1.8h</span>
                    <span className="text-xs font-bold text-brand-green bg-brand-green-light px-2 py-0.5 rounded-full">
                      -45m vs Target
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-xs text-terracotta-muted">Zero PRs blocked &gt; 6h</p>
                </div>

                <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2 hover:bg-white hover:shadow-warm-xs transition-all">
                  <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                    Pod Bottlenecks
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-3xl text-brand-green">0</span>
                    <span className="text-xs font-bold text-brand-green bg-brand-green-light px-2 py-0.5 rounded-full">
                      Clear Queue
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-xs text-terracotta-muted">All dependencies satisfied</p>
                </div>
              </div>

              {/* Execution Feed Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-surface-tier1/40 border border-brand-peach/60 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso">
                      Live Ground-Level Task Stream
                    </h4>
                    <p className="text-sm sm:text-xs text-terracotta-muted mt-0.5">
                      Real-time deliverable execution telemetry informing parent milestones.
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-orange bg-white px-3 py-1 rounded-full border border-brand-orange/30 self-start sm:self-auto">
                    Builder Perspective
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="p-3.5 bg-white rounded-xl border border-brand-peach/50 flex items-center justify-between shadow-warm-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#edf7f3] to-[#daf1e7] text-brand-green border border-brand-green/30 flex items-center justify-center shrink-0 shadow-xs">
                        <CheckCircle2 className="w-4.5 h-4.5 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="font-heading font-bold text-[15px] sm:text-sm text-espresso block">
                          Merge OAuth2 Redirection Handshake
                        </span>
                        <span className="text-xs text-terracotta-muted">Frontend Pod • Marcus Vance</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 py-1 rounded-md">
                      Verified
                    </span>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-brand-peach/50 flex items-center justify-between shadow-warm-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] text-brand-orange border border-brand-orange/30 flex items-center justify-center shrink-0 shadow-xs">
                        <Activity className="w-4.5 h-4.5 stroke-[2] animate-pulse" />
                      </div>
                      <div>
                        <span className="font-heading font-bold text-[15px] sm:text-sm text-espresso block">
                          Provision PostgreSQL Read Replicas
                        </span>
                        <span className="text-xs text-terracotta-muted">Backend Pod • Priya Sharma</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 py-1 rounded-md">
                      In Progress (85%)
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 3. Redesigned Premium Feature Cards with Micro-Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: For Founders */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-orange/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="goal" size="md" />
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/20">
                Macro Scope
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              For Founders & Executives
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Understand company health in 10 seconds. Spot lagging milestones and resource constraints without scheduling status calls.
            </p>

            {/* Micro Executive Radar Widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2">
              <div className="flex items-center justify-between text-sm sm:text-xs font-mono font-bold">
                <span className="text-espresso">Company Health Pulse</span>
                <span className="text-brand-green font-bold">94.8% Safe</span>
              </div>
              <div className="flex gap-1.5 h-2">
                <div className="w-4/5 bg-brand-green rounded-full" />
                <div className="w-1/5 bg-brand-orange rounded-full" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-brand-orange">
            <span>Macro Strategic Clarity</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 2: For Pod Leads */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-green/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="analytics" size="md" />
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 py-0.5 rounded-full border border-brand-green/20">
                Micro Telemetry
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              For Pod Leads & Engineers
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Track pull request turnaround, subtask burndown rates, and SLA timers. Optimize sprint flow with immediate operational telemetry.
            </p>

            {/* Micro Sprint Burndown Widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-1.5">
              <div className="flex items-center justify-between text-sm sm:text-xs font-mono">
                <span className="text-espresso font-bold">Sprint Burndown</span>
                <span className="text-brand-green font-bold">18 Tasks/Day</span>
              </div>
              <div className="flex items-end gap-1 h-7 pt-1">
                <div className="w-1/5 h-4 bg-brand-green/40 rounded-sm" />
                <div className="w-1/5 h-5 bg-brand-green/60 rounded-sm" />
                <div className="w-1/5 h-6 bg-brand-green/80 rounded-sm" />
                <div className="w-1/5 h-7 bg-brand-green rounded-sm" />
                <div className="w-1/5 h-5 bg-brand-orange rounded-sm" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-brand-green">
            <span>Operational Precision</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 3: Deterministic Sync */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.19 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-amber-400/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="progress" size="md" />
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Single Source
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Single Underlying Data
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Both views originate from the same deterministic mathematical ground truth. No discrepancy between builder metrics and executive summaries.
            </p>

            {/* Micro Sync State */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-sm sm:text-xs font-mono">
              <span className="text-terracotta">Sync Latency:</span>
              <span className="text-brand-green font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> 0ms (In-Memory)
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-amber-700">
            <span>Deterministic Sync</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
