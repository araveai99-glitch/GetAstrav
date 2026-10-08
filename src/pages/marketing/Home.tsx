import React from 'react';
import { Link } from 'react-router-dom';
import { MotionWrapper } from '../../components/common/MotionWrapper';
import { HierarchyInfographic } from '../../components/infographics/HierarchyInfographic';
import { RollupInfographic } from '../../components/infographics/RollupInfographic';
import { AIDecompositionInfographic } from '../../components/infographics/AIDecompositionInfographic';
import { AccountabilityWorkflowInfographic } from '../../components/infographics/AccountabilityWorkflowInfographic';
import { ProjectKnowledgeInfographic } from '../../components/infographics/ProjectKnowledgeInfographic';
import { AnalyticsInfographic } from '../../components/infographics/AnalyticsInfographic';
import { GovernanceInfographic } from '../../components/infographics/GovernanceInfographic';
import { CTASection } from '../../components/common/CTASection';
import { Calendar, Layers, Sparkles } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 lg:space-y-24">
      {/* ==================================================
          SECTION 1 — HERO (Wider Container: max-w-[1600px])
         ================================================== */}
      <section className="relative w-full overflow-hidden pt-16 pb-12 lg:pt-24 lg:pb-20 px-3 sm:px-6 lg:px-10 bg-surface-ambient">
        <div className="max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Hero Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 w-full">
            <MotionWrapper direction="down">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-brand-peach shadow-warm-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
                </span>
                <span className="text-xs font-mono font-extrabold tracking-wider text-espresso uppercase">
                  FounderOS Command Center v4.8
                </span>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.1} className="w-full">
              <h1 className="font-extrabold text-[34px] sm:text-[52px] lg:text-[68px] leading-[1.08] tracking-tight text-espresso">
                From Founder Strategy to Execution on{' '}
                <span className="bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green bg-clip-text text-transparent">
                  Autopilot.
                </span>
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.2} className="w-full">
              <p className="text-base sm:text-xl text-terracotta leading-relaxed font-normal max-w-[720px]">
                The goal-driven organization operating system with automated mathematical progress rollups, AI goal decomposition, and enterprise RBAC.
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.3} className="w-full sm:w-auto pt-2">
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#conversion-cta"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-white bg-brand-orange hover:bg-primary-hover px-8 py-4 rounded-xl shadow-glow-orange hover:-translate-y-0.5 transition-all"
                >
                  <Calendar className="w-5 h-5" /> Book a Demo
                </a>
                <Link
                  to="/app/dashboard"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-semibold text-espresso bg-white hover:bg-surface-tier1 px-7 py-4 rounded-xl shadow-warm-xs border border-brand-peach transition-all"
                >
                  <Layers className="w-5 h-5 text-brand-orange" /> Explore FounderOS
                </Link>
              </div>
            </MotionWrapper>

            {/* Quick Metrics Bar */}
            <MotionWrapper delay={0.4} className="w-full pt-4">
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-peach/60 text-left w-full">
                <div>
                  <div className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-brand-orange">&lt;50ms</div>
                  <div className="text-xs sm:text-sm text-terracotta font-semibold">Rollup Propagation</div>
                </div>
                <div>
                  <div className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-brand-green">100%</div>
                  <div className="text-xs sm:text-sm text-terracotta font-semibold">Mathematical Certainty</div>
                </div>
                <div>
                  <div className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-brand-orange">SOC2 Type II</div>
                  <div className="text-xs sm:text-sm text-terracotta font-semibold">Aligned Governance</div>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Hero Right Column: Command Center Interface Visual */}
          <div className="lg:col-span-6 w-full">
            <MotionWrapper direction="left" delay={0.2}>
              <div className="relative rounded-2xl bg-white p-5 sm:p-8 shadow-warm-xl border border-brand-peach/80 space-y-6 w-full">
                <div className="flex items-center justify-between pb-3 border-b border-brand-peach/40">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-orange" />
                    <div className="w-3 h-3 rounded-full bg-brand-yellow" />
                    <div className="w-3 h-3 rounded-full bg-brand-green" />
                    <span className="text-xs font-mono text-terracotta-muted ml-2">cluster-us-east-1 // founder-mesh</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
                    99.998% Synced
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 sm:p-5 rounded-xl bg-surface-tier1 border border-brand-peach/70 space-y-1">
                    <div className="text-xs font-extrabold text-terracotta uppercase tracking-wider">Global Progress</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-espresso">91.4%</div>
                    <div className="text-xs sm:text-sm text-brand-green font-bold">+4.2% Automated Rollup</div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-surface-tier1 border border-brand-peach/70 space-y-1">
                    <div className="text-xs font-extrabold text-terracotta uppercase tracking-wider">Active OKRs</div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-espresso">28 / 28</div>
                    <div className="text-xs sm:text-sm text-brand-orange font-bold">100% On-Track</div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-brand-orange/10 via-brand-yellow/10 to-brand-green/10 border border-brand-orange/30 space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-espresso">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-orange" /> Gemini 2.5 AI Engine
                    </span>
                    <span className="text-xs text-brand-orange font-mono">ACTIVE DECOMPOSITION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
                    "High-level strategy 'Launch Android Beta' successfully decomposed into 4 task proposals with assigned SLAs."
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2 — HOW FOUNDEROS CONNECTS EVERYTHING
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-10">
        <HierarchyInfographic />
      </section>

      {/* ==================================================
          SECTION 3 — MATHEMATICAL PROGRESS
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-10">
        <RollupInfographic />
      </section>

      {/* ==================================================
          SECTION 4 — AI GOAL DECOMPOSITION
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-10">
        <AIDecompositionInfographic />
      </section>

      {/* ==================================================
          SECTION 5 — ACCOUNTABILITY
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-10">
        <AccountabilityWorkflowInfographic />
      </section>

      {/* ==================================================
          SECTION 6 — PROJECTS + KNOWLEDGE
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-10">
        <ProjectKnowledgeInfographic />
      </section>

      {/* ==================================================
          SECTION 7 — ANALYTICS
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-10">
        <AnalyticsInfographic />
      </section>

      {/* ==================================================
          SECTION 8 — GOVERNANCE
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-10">
        <GovernanceInfographic />
      </section>

      {/* ==================================================
          SECTION 9 — FINAL CTA
         ================================================== */}
      <section id="conversion-cta" className="max-w-[1600px] w-full mx-auto px-3 sm:px-6 lg:px-10 pb-12">
        <CTASection />
      </section>
    </div>
  );
};
