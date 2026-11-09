import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Compass,
  Layers,
  Target,
  ArrowRight,
  BookOpen,
  FolderKanban,
  ListChecks,
  Users,
  Sparkles,
  CheckCircle2,
  Clock,
  HelpCircle,
  FileText,
  Lightbulb,
} from 'lucide-react';
import { openDemoModal } from '../../../components/common/DemoModal';
import { IllustratedCardBadge } from '../../../components/common/IllustratedCardBadge';

export const DocumentationGuides: React.FC = () => {
  useEffect(() => {
    document.title = 'Documentation & Guides — Astrav';
    window.scrollTo(0, 0);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  // Section A ref & in-view
  const sectionARef = useRef<HTMLElement>(null);
  const isSectionAInView = useInView(sectionARef, { once: false, amount: 0.2 });
  const [activeStep, setActiveStep] = useState<number>(0);

  // Section B ref & in-view
  const sectionBRef = useRef<HTMLElement>(null);
  const isSectionBInView = useInView(sectionBRef, { once: false, amount: 0.15 });

  // Section C ref & in-view
  const sectionCRef = useRef<HTMLElement>(null);
  const isSectionCInView = useInView(sectionCRef, { once: false, amount: 0.2 });
  const [activePathStep, setActivePathStep] = useState<number>(0);

  // Data: Section A Starting Point Steps
  const STARTING_STEPS = [
    {
      id: 'step-1',
      number: '01',
      title: 'Get Started',
      description: 'Create your workspace and invite your core team in under two minutes.',
      linkText: 'Explore Setup Guide',
      linkUrl: '/product',
      icon: Compass,
      accent: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
      iconBg: 'bg-brand-orange text-white',
    },
    {
      id: 'step-2',
      number: '02',
      title: 'Set Up Your Workspace',
      description: 'Define your company structure, departments, and strategic focus areas.',
      linkText: 'View Workspace Guide',
      linkUrl: '/features/teams',
      icon: Layers,
      accent: 'bg-[#fef9c3] text-[#b45309] border-[#fef08a]',
      iconBg: 'bg-brand-yellow text-espresso',
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Track Your Work',
      description: 'Connect daily tasks to goals and let automated rollups measure progress.',
      linkText: 'See Progress Guide',
      linkUrl: '/features/goals-progress',
      icon: Target,
      accent: 'bg-brand-green-light text-brand-green border-brand-green/30',
      iconBg: 'bg-brand-green text-white',
    },
  ];

  // Data: Section B Guide Topics
  const GUIDE_TOPICS = [
    {
      id: 'topic-getting-started',
      tag: 'QUICK START',
      title: 'Getting Started',
      description: 'Step-by-step onboarding, account setup, and quick-start workspace templates.',
      icon: Compass,
      containerBg: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6]',
      borderColor: 'border-brand-orange/25',
      iconColor: 'text-brand-orange',
      link: '/product',
      linkText: 'Read Onboarding Guide',
      badgeColor: 'bg-brand-orange-light text-brand-orange border-brand-orange/20',
      readTime: '3 min read',
    },
    {
      id: 'topic-goals-projects',
      tag: 'STRATEGY',
      title: 'Goals and Projects',
      description: 'How to set North Star objectives and link them to actionable project deliverables.',
      icon: FolderKanban,
      containerBg: 'bg-gradient-to-br from-[#fefbf0] to-[#fdeec0]',
      borderColor: 'border-brand-yellow/35',
      iconColor: 'text-amber-700',
      link: '/features/goals-progress',
      linkText: 'Explore Goal Mapping',
      badgeColor: 'bg-[#fef9c3] text-[#b45309] border-amber-200',
      readTime: '4 min read',
    },
    {
      id: 'topic-tasks-progress',
      tag: 'EXECUTION',
      title: 'Tasks and Progress',
      description: 'Managing daily task queues, automated percentage rollups, and milestone verification.',
      icon: ListChecks,
      containerBg: 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7]',
      borderColor: 'border-brand-green/25',
      iconColor: 'text-brand-green',
      link: '/features/task-management',
      linkText: 'Learn Rollup Tracking',
      badgeColor: 'bg-brand-green-light text-brand-green border-brand-green/20',
      readTime: '5 min read',
    },
    {
      id: 'topic-team-collaboration',
      tag: 'ALIGNMENT',
      title: 'Team Collaboration',
      description: 'Autonomous pods, transparent task ownership, and cross-department visibility.',
      icon: Users,
      containerBg: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6]',
      borderColor: 'border-brand-orange/25',
      iconColor: 'text-brand-orange',
      link: '/features/teams',
      linkText: 'View Team Framework',
      badgeColor: 'bg-brand-orange-light text-brand-orange border-brand-orange/20',
      readTime: '4 min read',
    },
  ];

  // Data: Section C Simple Learning Path
  const LEARNING_PATH = [
    {
      step: '01',
      title: 'Learn the Basics',
      summary: 'Understand the hierarchy from vision to everyday tasks.',
      tip: 'Start by viewing the 5-tier architecture map to see how rollups connect.',
      icon: BookOpen,
      link: '/product',
    },
    {
      step: '02',
      title: 'Create Your First Goal',
      summary: 'Set a top-level North Star objective with a clear target date.',
      tip: 'Keep your top goal focused on one measurable business outcome.',
      icon: Target,
      link: '/features/goals-progress',
    },
    {
      step: '03',
      title: 'Organize Tasks',
      summary: 'Decompose the goal into projects, milestones, and actionable tasks.',
      tip: 'Every task should have a single accountable owner and clear deliverable.',
      icon: ListChecks,
      link: '/features/task-management',
    },
    {
      step: '04',
      title: 'Follow Progress',
      summary: 'Watch automatic progress roll up dynamically as work is completed.',
      tip: 'No manual status meetings needed—progress percentages calculate live.',
      icon: CheckCircle2,
      link: '/product/automated-progress-rollups',
    },
  ];

  return (
    <div className="w-full max-w-[1720px] 2xl:max-w-[1840px] mx-auto px-4 sm:px-6 lg:px-[60px] pt-[73px] sm:pt-24 lg:pt-20 pb-12 sm:pb-16 flex flex-col space-y-10 sm:space-y-14 selection:bg-brand-orange selection:text-white">
      
      {/* ==================================================================== */}
      {/* HERO SECTION: Balanced 42:58 two-column layout on desktop, stacked on mobile */}
      {/* ==================================================================== */}
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
            Documentation <br className="hidden sm:inline" />
            <span className="text-brand-orange whitespace-nowrap">&amp; Guides.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
            className="text-base min-[375px]:text-lg sm:text-xl text-terracotta leading-relaxed font-normal max-w-lg text-left"
          >
            Step-by-step resources to set up, use, and get the most out of Astrav.
          </motion.p>
        </div>

        {/* Right Column: Prominent Office Collaboration Supporting Visual (58% on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="w-full lg:w-[58%] flex items-center justify-center lg:justify-end"
        >
          <picture className="block w-full max-w-[540px] sm:max-w-[620px] lg:max-w-[960px] 2xl:max-w-[1040px] rounded-2xl sm:rounded-3xl lg:rounded-none overflow-hidden lg:overflow-visible">
            {/* Desktop and Tablet: landscape office collaboration visual with natural feathering */}
            <source
              media="(min-width: 640px)"
              srcSet="/assets/astrav_documentation_guides_hero.webp"
              type="image/webp"
            />
            {/* Mobile: dedicated high-clarity mobile visual with rounded corners */}
            <source
              srcSet="/assets/astrav_documentation_guides_mobile.webp"
              type="image/webp"
            />
            <img
              src="/assets/astrav_documentation_guides_hero.png"
              alt="Astrav Documentation & Guide - Step-by-step resources to set up, use, and get the most out of Astrav"
              width={1920}
              height={1080}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-auto object-contain select-none"
            />
          </picture>
        </motion.div>
      </div>

      {/* ==================================================================== */}
      {/* SECTION A — Your Starting Point: 3 Connected Visual Steps            */}
      {/* ==================================================================== */}
      <section
        ref={sectionARef}
        className="w-full !mt-8 sm:!mt-10 px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm relative overflow-hidden space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-peach/40 pb-4">
          <div>
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
              Your 3-Step Starting Point
            </h2>
          </div>
          <p className="text-sm sm:text-base text-terracotta max-w-md">
            Follow this simple path to get your entire workspace running smoothly.
          </p>
        </div>

        {/* Visual Connected Diagram */}
        <div className="relative">
          {/* Animated SVG Connector Line on Desktop (lg+) */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[3px] -z-0">
            <svg className="w-full h-[6px] overflow-visible" preserveAspectRatio="none">
              <line
                x1="0"
                y1="3"
                x2="100%"
                y2="3"
                stroke="#f7d7b0"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <motion.line
                x1="0"
                y1="3"
                x2="100%"
                y2="3"
                stroke="#f15e1c"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: isSectionAInView || shouldReduceMotion ? 1 : 0,
                }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* 3 Step Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 relative z-10">
            {STARTING_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              const delay = shouldReduceMotion ? 0 : 0.12 * idx;
              const badgeVariant = idx === 0 ? 'docs' : idx === 1 ? 'teams' : 'progress';

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    isSectionAInView || shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.45, delay }}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#fffbf7] to-white border-brand-orange shadow-warm-md ring-2 ring-brand-orange/20 scale-[1.01]'
                      : 'bg-white hover:bg-surface-ambient/50 border-brand-peach/80 hover:border-brand-orange/40 shadow-[0_4px_16px_-4px_rgba(241,94,28,0.06)] hover:-translate-y-1'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Illustrated Badge & Step Pill */}
                    <div className="flex items-center justify-between">
                      <IllustratedCardBadge
                        variant={badgeVariant}
                        size="md"
                        stepNumber={step.number}
                      />
                      <span className={`font-mono font-extrabold text-xs px-2.5 py-1 rounded-full ${
                        isSelected ? 'bg-brand-orange text-white' : 'bg-surface-tier1 text-terracotta-muted border border-brand-peach/50'
                      }`}>
                        STEP {step.number}
                      </span>
                    </div>

                    {/* Step Title & Explanation */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-espresso group-hover:text-brand-orange transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-base text-terracotta leading-relaxed mt-2 font-normal">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="pt-4 mt-4 border-t border-brand-peach/40 flex items-center justify-between">
                    <Link
                      to={step.linkUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
                    >
                      <span>{step.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-xs font-mono font-bold text-terracotta-muted">
                      {idx === 0 ? 'Start here' : idx === 1 ? 'Configure' : 'Track'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION B — Explore Guides by Topic: Clean Grid of Cards             */}
      {/* ==================================================================== */}
      <section ref={sectionBRef} className="!mt-7 sm:!mt-9 space-y-5 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
              Find the Help You Need.
            </h2>
            <p className="text-base text-terracotta max-w-xl">
              Compact guides covering the essential workflows of the Astrav operating system.
            </p>
          </div>
        </div>

        {/* 4 Topic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GUIDE_TOPICS.map((topic, idx) => {
            const delay = shouldReduceMotion ? 0 : 0.08 * idx;
            const badgeVariant =
              topic.id === 'topic-getting-started'
                ? 'docs'
                : topic.id === 'topic-goals-projects'
                ? 'projects'
                : topic.id === 'topic-tasks-progress'
                ? 'tasks'
                : 'teams';

            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isSectionBInView || shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.4, delay }}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-extrabold px-2.5 py-0.5 rounded-full border ${topic.badgeColor}`}>
                      {topic.tag}
                    </span>
                    <span className="text-xs min-[375px]:text-sm font-mono text-terracotta-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {topic.readTime}
                    </span>
                  </div>

                  <div>
                    <IllustratedCardBadge variant={badgeVariant} size="md" />
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso group-hover:text-brand-orange transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-base text-terracotta leading-relaxed mt-1.5 font-normal">
                      {topic.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-peach/40">
                  <Link
                    to={topic.link}
                    className="inline-flex items-center gap-1.5 text-sm font-heading font-bold text-brand-orange hover:text-brand-orange-hover transition-colors w-full justify-between"
                  >
                    <span>{topic.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION C — A Simple Learning Path: Unique Visual Roadmap            */}
      {/* ==================================================================== */}
      <section
        ref={sectionCRef}
        className="w-full !mt-7 sm:!mt-9 px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 bg-gradient-to-b from-[#fffbf7] via-white to-surface-ambient rounded-3xl border border-brand-peach/80 shadow-warm-sm space-y-6"
      >
        <div className="max-w-2xl space-y-1">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            A Simple Learning Path
          </h2>
          <p className="text-base text-terracotta">
            Follow these four stages to take your organization from initial setup to clear execution.
          </p>
        </div>

        {/* Roadmap Diagram */}
        <div className="relative pt-3 pb-2">
          {/* Progressive Track Line on Desktop */}
          <div className="hidden lg:block absolute top-[36px] left-[6%] right-[6%] h-[4px] bg-brand-peach/40 -z-0">
            <motion.div
              initial={{ width: '0%' }}
              animate={{
                width: isSectionCInView || shouldReduceMotion ? '100%' : '0%',
              }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green"
            />
          </div>

          {/* 4 Roadmap Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {LEARNING_PATH.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = activePathStep === idx;
              const delay = shouldReduceMotion ? 0 : 0.1 * idx;

              return (
                <motion.div
                  key={node.step}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    isSectionCInView || shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.45, delay }}
                  onClick={() => setActivePathStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-white border-brand-orange shadow-warm-md ring-2 ring-brand-orange/20 scale-[1.02]'
                      : 'bg-white/80 hover:bg-white border-brand-peach/70 hover:border-brand-orange/40 shadow-warm-2xs'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Top Node Pin */}
                    <div className="flex items-center justify-between">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-extrabold text-xs min-[375px]:text-sm transition-colors ${
                        isSelected
                          ? 'bg-brand-orange text-white shadow-glow-orange'
                          : 'bg-surface-tier1 text-brand-orange border border-brand-peach/80'
                      }`}>
                        {node.step}
                      </div>
                      <Icon className={`w-4 h-4 transition-colors ${
                        isSelected ? 'text-brand-orange' : 'text-terracotta-muted'
                      }`} />
                    </div>

                    <div>
                      <h4 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso">
                        {node.title}
                      </h4>
                      <p className="text-base text-terracotta leading-relaxed mt-1 font-normal">
                        {node.summary}
                      </p>
                    </div>

                    {/* Pro-Tip Box */}
                    <div className="p-2.5 rounded-xl bg-surface-tier1 border border-brand-peach/50 text-xs min-[375px]:text-sm text-terracotta leading-snug flex items-start gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                      <span>{node.tip}</span>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-brand-peach/40">
                    <Link
                      to={node.link}
                      className="text-sm font-heading font-bold text-brand-orange hover:text-brand-orange-hover inline-flex items-center gap-1"
                    >
                      <span>Explore this step</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FINAL CTA: Ready to Get Started? (Explore Astrav button)             */}
      {/* ==================================================================== */}
      <section className="w-full rounded-3xl bg-gradient-to-r from-[#fffbf7] via-[#fff5ee] to-[#fef2e8] p-8 sm:p-12 border-2 border-brand-peach/80 shadow-warm-md text-center space-y-5">
        <div className="max-w-xl mx-auto space-y-2">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-terracotta">
            Experience the clarity of a connected workspace built for modern execution.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          <Link
            to="/product"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-heading font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-full shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Explore Astrav</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </Link>
          <button
            type="button"
            onClick={openDemoModal}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-heading font-bold text-espresso bg-white hover:bg-brand-orange-light rounded-full border border-brand-peach hover:border-brand-orange hover:text-brand-orange shadow-warm-sm transition-all cursor-pointer"
          >
            <span>Book a Demo</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default DocumentationGuides;
