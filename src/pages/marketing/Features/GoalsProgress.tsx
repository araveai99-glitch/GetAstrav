import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Target, ListChecks, TrendingUp, GitMerge, ShieldCheck, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';
import { IllustratedCardBadge } from '../../../components/common/IllustratedCardBadge';

export const GoalsProgress: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = 'Goals & Progress Rollups — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10 selection:bg-brand-orange selection:text-white">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-left w-full max-w-4xl space-y-2.5 sm:space-y-3"
      >
        <h1 className="text-[26px] min-[360px]:text-[28px] min-[390px]:text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-espresso tracking-tight leading-[1.18] sm:leading-tight text-left">
          Automated Mathematical <span className="text-brand-orange">Rollup Engine</span>
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg w-full max-w-3xl font-normal text-left leading-relaxed">
          Track work from individual tasks up to executive dashboards with mathematical precision and founder override control.
        </p>
      </motion.div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-green/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <IllustratedCardBadge variant="tasks" size="md" />
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full border border-brand-green/20">
                Deterministic
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso mb-2">
                Weighted Subtask Rollup
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Every subtask carries defined mathematical weight. As engineering and product complete individual tasks, progress rolls up in real time without manual reporting.
              </p>
            </div>

            {/* Micro telemetry widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-xs font-mono">
              <span className="text-terracotta">Calculated Rollup:</span>
              <span className="text-brand-green font-bold">100% Granular Math</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center text-sm font-heading font-semibold text-brand-green">
            <span>Granular Precision</span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-orange/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <IllustratedCardBadge variant="projects" size="md" />
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/20">
                Cross-Pod
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso mb-2">
                Milestone & Project Sync
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Milestones aggregate active deliverables across multiple pods. Deadlines, SLA status, and dependencies calculate automatically so leadership spots risks days earlier.
              </p>
            </div>

            {/* Micro telemetry widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-xs font-mono">
              <span className="text-terracotta">Aggregated Milestones:</span>
              <span className="text-brand-orange font-bold">Active SLA Cascade</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center text-sm font-heading font-semibold text-brand-orange">
            <span>Cross-Department Sync</span>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.24, ease: 'easeOut' }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-amber-400/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <IllustratedCardBadge variant="control" size="md" />
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Executive RBAC
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso mb-2">
                Founder Override Governance
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Executive leadership retains override authority on strategic targets. Any manual adjustment is logged with audit timestamps, rationale, and owner tags for governance.
              </p>
            </div>

            {/* Micro telemetry widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-xs font-mono">
              <span className="text-terracotta">Override Governance:</span>
              <span className="text-amber-800 font-bold">Immutable Audit Trail</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center text-sm font-heading font-semibold text-amber-700">
            <span>Enterprise RBAC</span>
          </div>
        </motion.div>
      </div>

      {/* Wide Formula Architecture Card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-[#d94e10] text-white flex items-center justify-center shadow-sm shadow-brand-orange/25">
              <Target className="w-5 h-5" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
                The Rollup Formula Architecture
              </h3>
              <p className="text-xs text-terracotta-muted">
                How work cascades upwards through 7 architectural tiers
              </p>
            </div>
          </div>

          <Link
            to="/product/automated-progress-rollups"
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
          >
            <span>Explore Interactive Simulator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.12, ease: 'easeOut' }}
            className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-full bg-[#edf7f3] text-brand-green border border-brand-green/30 font-mono font-bold text-xs flex items-center justify-center">
                1
              </span>
              <span className="text-xs font-mono font-bold text-brand-green uppercase tracking-wider">
                TASK EXECUTION
              </span>
            </div>
            <h4 className="font-heading font-extrabold text-[16px] sm:text-sm text-espresso">
              Task Progress Formula
            </h4>
            <p className="text-[13px] font-mono text-terracotta bg-white p-3 rounded-xl border border-brand-peach/50 shadow-warm-2xs">
              Completed Weights / Total Subtask Weights × 100
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.18, ease: 'easeOut' }}
            className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-full bg-[#fff4ed] text-brand-orange border border-brand-orange/30 font-mono font-bold text-xs flex items-center justify-center">
                2
              </span>
              <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
                MILESTONES
              </span>
            </div>
            <h4 className="font-heading font-extrabold text-[16px] sm:text-sm text-espresso">
              Milestone Progress Formula
            </h4>
            <p className="text-[13px] font-mono text-terracotta bg-white p-3 rounded-xl border border-brand-peach/50 shadow-warm-2xs">
              ∑ (Task Weight × Task Progress) / Total Project Weight
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.24, ease: 'easeOut' }}
            className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="w-7 h-7 rounded-full bg-[#fefbf0] text-amber-800 border border-amber-200 font-mono font-bold text-xs flex items-center justify-center">
                3
              </span>
              <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                STRATEGIC GOAL
              </span>
            </div>
            <h4 className="font-heading font-extrabold text-[16px] sm:text-sm text-espresso">
              Goal Effective Progress
            </h4>
            <p className="text-[13px] font-mono text-terracotta bg-white p-3 rounded-xl border border-brand-peach/50 shadow-warm-2xs">
              Executive Override ?? Mathematical Computed Progress
            </p>
          </motion.div>
        </div>
      </motion.div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
