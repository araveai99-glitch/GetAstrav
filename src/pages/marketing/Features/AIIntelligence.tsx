import React, { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, BrainCircuit, Zap, ShieldAlert, Bot, CheckCircle2, ShieldCheck, Check } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';
import { IllustratedCardBadge } from '../../../components/common/IllustratedCardBadge';

export const AIIntelligence: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = 'AI Goal Decomposition & Intelligence — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-[60px] pt-[73px] sm:pt-24 lg:pt-20 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10 selection:bg-brand-orange selection:text-white">
      {/* Section Hero Area: Balanced 42:58 layout on desktop, stacked on mobile */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-8 xl:gap-12 mb-4 sm:mb-6 lg:mb-8 w-full">
        {/* Left Column: Heading and Supporting Text (42% on desktop) */}
        <div className="w-full lg:w-[42%] text-left space-y-3 sm:space-y-4 shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
            className="text-3xl min-[360px]:text-[34px] min-[390px]:text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-6xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left"
          >
            AI Goal <br className="hidden sm:inline" />
            <span className="text-brand-orange whitespace-nowrap">Decomposition</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
            className="text-base min-[375px]:text-lg sm:text-xl text-terracotta leading-relaxed font-normal max-w-lg text-left"
          >
            Turn a big goal into a clear, executable plan with AI.
          </motion.p>
        </div>

        {/* Right Column: High-Quality Meeting Room Supporting Visual (58% on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="w-full lg:w-[58%] flex items-center justify-center lg:justify-end"
        >
          <picture className="block w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[960px] 2xl:max-w-[1040px] rounded-2xl sm:rounded-3xl lg:rounded-none overflow-hidden lg:overflow-visible">
            {/* Desktop and Tablet: landscape meeting room visual with natural feathering */}
            <source
              media="(min-width: 640px)"
              srcSet="/assets/astrav_ai_goal_decomposition_desktop.webp"
              type="image/webp"
            />
            {/* Mobile: dedicated high-clarity mobile visual with rounded corners */}
            <source
              srcSet="/assets/astrav_ai_goal_decomposition_mobile.webp"
              type="image/webp"
            />
            <img
              src="/assets/astrav_ai_goal_decomposition_desktop.png"
              alt="Astrav AI Goal Decomposition - Turn a big goal into a clear, executable plan with AI in modern team collaboration"
              width={1920}
              height={1281}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-contain select-none"
            />
          </picture>
        </motion.div>
      </div>

      {/* 3 Symmetric Intelligence Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          className="p-4.5 min-[375px]:p-5 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-orange/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group min-w-0 cursor-pointer"
        >
          <div className="space-y-3.5 sm:space-y-4">
            <div className="flex items-center justify-between gap-3 min-w-0">
              <IllustratedCardBadge variant="goal" size="md" />
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 sm:px-3 py-1 rounded-full border border-brand-orange/20 shrink-0 max-w-[65%] truncate sm:max-w-none sm:whitespace-nowrap">
                AI Decomposition
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso mb-1.5 sm:mb-2 leading-snug">
                Goal-to-Task Proposals
              </h3>
              <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                Input any quarterly objective or OKR. Astrav’s AI analyzes historical velocity and pod skill sets to generate 2 to 4 structured actionable deliverables with estimated completion dates.
              </p>
            </div>

            {/* Contextual preview widget */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-terracotta">Generated Output:</span>
                <span className="text-brand-orange font-bold">3 Milestones • 12 Tasks</span>
              </div>
              <div className="w-full bg-brand-peach/40 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '75%' }}
                  viewport={{ once: false }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut' }}
                  className="bg-brand-orange h-full rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-4 border-t border-brand-peach/40 flex items-center text-xs sm:text-sm font-heading font-semibold text-brand-orange">
            <span>Instant Scaffolding</span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.16, ease: 'easeOut' }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          className="p-4.5 min-[375px]:p-5 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-yellow/50 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group min-w-0 cursor-pointer"
        >
          <div className="space-y-3.5 sm:space-y-4">
            <div className="flex items-center justify-between gap-3 min-w-0">
              <IllustratedCardBadge variant="automation" size="md" />
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 sm:px-3 py-1 rounded-full border border-amber-200 shrink-0 max-w-[65%] truncate sm:max-w-none sm:whitespace-nowrap">
                Daily Focus
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso mb-1.5 sm:mb-2 leading-snug">
                Daily Focus Recommendations
              </h3>
              <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                Every morning, the AI scans active task queues, blocked items, and approaching milestones to generate prioritized "Today Focus" cards for leaders and team members.
              </p>
            </div>

            {/* Contextual preview widget */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-xs font-mono">
              <span className="text-terracotta">Morning Priority:</span>
              <span className="text-amber-800 font-bold">Top 3 Unblocked Actions</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-4 border-t border-brand-peach/40 flex items-center text-xs sm:text-sm font-heading font-semibold text-amber-700">
            <span>Velocity Optimization</span>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.24, ease: 'easeOut' }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          className="p-4.5 min-[375px]:p-5 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-green/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group min-w-0 cursor-pointer"
        >
          <div className="space-y-3.5 sm:space-y-4">
            <div className="flex items-center justify-between gap-3 min-w-0">
              <IllustratedCardBadge variant="control" size="md" />
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 sm:px-3 py-1 rounded-full border border-brand-green/20 shrink-0 max-w-[65%] truncate sm:max-w-none sm:whitespace-nowrap">
                Radar Guard
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso mb-1.5 sm:mb-2 leading-snug">
                Bottleneck & Risk Detection
              </h3>
              <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                Identify stalled reviews, SLA breaches, and dependency locks before they cascade into project delays. Get early alerts with concrete corrective suggestions.
              </p>
            </div>

            {/* Contextual preview widget */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-xs font-mono">
              <span className="text-terracotta">Critical Dependency SLA:</span>
              <span className="text-brand-green font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                <CheckCircle2 className="w-3.5 h-3.5" /> 0 Risk Locks
              </span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-4 border-t border-brand-peach/40 flex items-center text-xs sm:text-sm font-heading font-semibold text-brand-green">
            <span>Early Warning Radar</span>
          </div>
        </motion.div>
      </div>

      {/* Wide Architecture Detail Card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
        className="p-5 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md"
      >
        <div className="max-w-3xl mb-5 sm:mb-6 space-y-1">
          <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
            HUMAN-IN-THE-LOOP CONTROL
          </span>
          <h3 className="text-[19px] sm:text-xl font-heading font-bold text-espresso">
            How Goal Decomposition Works in Practice
          </h3>
          <p className="text-sm sm:text-base text-terracotta leading-relaxed">
            Astrav never creates tasks in isolation. Proposals are presented in an interactive review modal where managers can adjust scope, assignee, or weight before committing to the live rollup board.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.12, ease: 'easeOut' }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="p-4.5 sm:p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2.5 sm:space-y-3 cursor-pointer hover:border-brand-peach hover:bg-surface-tier1 transition-all"
          >
            <div className="w-7 h-7 sm:w-7 sm:h-7 rounded-full bg-[#fff4ed] text-brand-orange border border-brand-orange/30 font-mono font-bold text-[13px] sm:text-xs flex items-center justify-center shrink-0">
              1
            </div>
            <h4 className="font-heading font-extrabold text-[17.5px] sm:text-sm text-espresso leading-snug">
              Target Ingestion
            </h4>
            <p className="text-[14.5px] sm:text-xs text-terracotta leading-[1.5] sm:leading-relaxed">
              Input company goal statement and target completion quarter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.18, ease: 'easeOut' }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="p-4.5 sm:p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2.5 sm:space-y-3 cursor-pointer hover:border-brand-peach hover:bg-surface-tier1 transition-all"
          >
            <div className="w-7 h-7 sm:w-7 sm:h-7 rounded-full bg-[#fefbf0] text-amber-800 border border-amber-200 font-mono font-bold text-[13px] sm:text-xs flex items-center justify-center shrink-0">
              2
            </div>
            <h4 className="font-heading font-extrabold text-[17.5px] sm:text-sm text-espresso leading-snug">
              Contextual Analysis
            </h4>
            <p className="text-[14.5px] sm:text-xs text-terracotta leading-[1.5] sm:leading-relaxed">
              AI references active department pods, team workloads, and SLAs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.24, ease: 'easeOut' }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="p-4.5 sm:p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2.5 sm:space-y-3 cursor-pointer hover:border-brand-peach hover:bg-surface-tier1 transition-all"
          >
            <div className="w-7 h-7 sm:w-7 sm:h-7 rounded-full bg-[#edf7f3] text-brand-green border border-brand-green/30 font-mono font-bold text-[13px] sm:text-xs flex items-center justify-center shrink-0">
              3
            </div>
            <h4 className="font-heading font-extrabold text-[17.5px] sm:text-sm text-espresso leading-snug">
              Interactive Review
            </h4>
            <p className="text-[14.5px] sm:text-xs text-terracotta leading-[1.5] sm:leading-relaxed">
              Modify title, weight, and assignees with 1-click proposal adjustments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.3, ease: 'easeOut' }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className="p-4.5 sm:p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/60 space-y-2.5 sm:space-y-3 cursor-pointer hover:border-brand-peach hover:bg-surface-tier1 transition-all"
          >
            <div className="w-7 h-7 sm:w-7 sm:h-7 rounded-full bg-white text-espresso border border-brand-peach/80 font-mono font-bold text-[13px] sm:text-xs flex items-center justify-center shrink-0">
              4
            </div>
            <h4 className="font-heading font-extrabold text-[17.5px] sm:text-sm text-espresso leading-snug">
              Live Rollup Commit
            </h4>
            <p className="text-[14.5px] sm:text-xs text-terracotta leading-[1.5] sm:leading-relaxed">
              Accepted items attach automatically to the organizational progress tree.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
