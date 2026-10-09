import React from 'react';
import { Link } from 'react-router-dom';
import { MotionWrapper } from '../../components/common/MotionWrapper';
import { HierarchyInfographic } from '../../components/infographics/HierarchyInfographic';
import { GoalToExecutionWorkflow } from '../../components/infographics/GoalToExecutionWorkflow';
import { RollupInfographic } from '../../components/infographics/RollupInfographic';
import { ProductInMotion } from '../../components/infographics/ProductInMotion';
import { AIDecompositionInfographic } from '../../components/infographics/AIDecompositionInfographic';
import { AccountabilityWorkflowInfographic } from '../../components/infographics/AccountabilityWorkflowInfographic';
import { ProjectKnowledgeInfographic } from '../../components/infographics/ProjectKnowledgeInfographic';
import { AnalyticsInfographic } from '../../components/infographics/AnalyticsInfographic';
import { GovernanceInfographic } from '../../components/infographics/GovernanceInfographic';
import { OSMapInfographic } from '../../components/infographics/OSMapInfographic';
import { CTASection } from '../../components/common/CTASection';
import { Calendar, Layers, Sparkles, ShieldCheck, ArrowRight, Activity, TrendingUp } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-6 lg:space-y-8 pt-2">
      {/* ==================================================
          SECTION 01 — CLEAN MINIMAL HERO (TIGHT SPACING)
         ================================================== */}
      <section className="relative w-full overflow-hidden pt-8 pb-6 lg:pt-12 lg:pb-8 px-4 sm:px-6 lg:px-10 bg-surface-ambient border-b border-brand-peach/40">
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col items-center text-center space-y-5 w-full">
          {/* Badge */}
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-peach shadow-warm-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
              </span>
              <span className="text-[11px] font-mono font-extrabold tracking-wider text-espresso uppercase">
                GETASTRAV ENGINE V4.8 • SECTION 01 • COMMAND CENTER INTRO
              </span>
            </div>
          </MotionWrapper>

          {/* Hero Headline */}
          <MotionWrapper delay={0.1} className="max-w-[1100px] mx-auto">
            <h1 className="font-extrabold text-[32px] sm:text-[48px] lg:text-[64px] leading-[1.08] tracking-tight text-espresso">
              From Founder Strategy to Execution on{' '}
              <span className="bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green bg-clip-text text-transparent">
                Autopilot.
              </span>
            </h1>
          </MotionWrapper>

          {/* Supporting Copy */}
          <MotionWrapper delay={0.2} className="max-w-[800px] mx-auto">
            <p className="text-sm sm:text-lg lg:text-xl text-terracotta leading-relaxed font-normal">
              The goal-driven organization operating system with automated mathematical progress rollups, AI goal decomposition, and enterprise RBAC.
            </p>
          </MotionWrapper>

          {/* Primary & Secondary CTAs */}
          <MotionWrapper delay={0.3} className="pt-1">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#conversion-cta"
                className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-white bg-brand-orange hover:bg-primary-hover px-7 py-3 rounded-2xl shadow-glow-orange hover:-translate-y-0.5 transition-all group"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/app/dashboard"
                className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-espresso bg-white hover:bg-surface-tier1 px-6 py-3 rounded-2xl shadow-warm-2xs border border-brand-peach transition-all hover:border-brand-orange"
              >
                <Layers className="w-4.5 h-4.5 text-brand-orange" />
                <span>Explore GetAstrav</span>
              </Link>
            </div>
          </MotionWrapper>

          {/* LARGE GETASTRAV COMMAND CENTER INTERFACE */}
          <MotionWrapper delay={0.4} direction="up" className="w-full pt-3">
            <div className="relative rounded-2xl bg-white p-4 sm:p-6 lg:p-7 shadow-warm-xl border border-brand-peach/80 space-y-4 w-full max-w-[1440px] mx-auto text-left">
              {/* Interface Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-brand-peach/40">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-orange" />
                  <div className="w-3 h-3 rounded-full bg-brand-yellow" />
                  <div className="w-3 h-3 rounded-full bg-brand-green" />
                  <span className="text-xs font-mono text-terracotta ml-2 font-bold">
                    getastrav-kernel // command-center-console
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
                    99.998% Real-Time Synced
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-mono font-extrabold text-espresso">
                    SOC2 Type II Aligned
                  </span>
                </div>
              </div>

              {/* Interface Grid Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-terracotta uppercase">
                    <span>Global Progress</span>
                    <Activity className="w-4 h-4 text-brand-green" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-espresso">91.4%</div>
                  <div className="text-xs text-brand-green font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +4.2% Automated Cascade Rollup
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-terracotta uppercase">
                    <span>Active Strategic OKRs</span>
                    <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-extrabold text-espresso">28 / 28</div>
                  <div className="text-xs text-brand-orange font-bold">100% Verified On-Track</div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-brand-orange/10 via-brand-yellow/10 to-brand-green/10 border border-brand-orange/30 space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold text-espresso">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-brand-orange" /> Gemini 2.5 AI Engine
                    </span>
                    <span className="text-[10px] text-brand-orange font-mono">ACTIVE DECOMPOSITION</span>
                  </div>
                  <p className="text-xs text-terracotta leading-relaxed">
                    "High-level strategy 'Launch Android Beta' successfully decomposed into 4 task proposals with assigned SLAs."
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* ==================================================
          SECTION 02 — THE ORGANIZATIONAL PICTURE (Visual A)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <HierarchyInfographic />
      </section>

      {/* ==================================================
          SECTION 03 — FROM GOALS TO EXECUTION (Visual B)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <GoalToExecutionWorkflow />
      </section>

      {/* ==================================================
          SECTION 04 — PROGRESS THAT REFLECTS ACTUAL WORK (Visual C)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <RollupInfographic />
      </section>

      {/* ==================================================
          INTERACTIVE PRODUCT IN MOTION SHOWCASE
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <ProductInMotion />
      </section>

      {/* ==================================================
          SECTION 05 — AI-ASSISTED PLANNING (Visual D)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <AIDecompositionInfographic />
      </section>

      {/* ==================================================
          SECTION 06 — WORK EXECUTION & ACCOUNTABILITY (Visual E)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <AccountabilityWorkflowInfographic />
      </section>

      {/* ==================================================
          SECTION 07 — KNOWLEDGE & DOCUMENTATION (Visual G)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <ProjectKnowledgeInfographic />
      </section>

      {/* ==================================================
          SECTION 08 — EXECUTIVE VISIBILITY (Visual F)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <AnalyticsInfographic />
      </section>

      {/* ==================================================
          SECTION 09 — GOVERNANCE & RBAC INFOGRAPHIC
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <GovernanceInfographic />
      </section>

      {/* ==================================================
          SECTION 10 — A UNIFIED OPERATING SYSTEM (OS Map)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <OSMapInfographic />
      </section>

      {/* ==================================================
          SECTION 11 — FINAL CONVERSION CTA
         ================================================== */}
      <section id="conversion-cta" className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 pb-8">
        <CTASection />
      </section>
    </div>
  );
};
