import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, useReducedMotion, type Variants } from 'framer-motion';
import {
  Building2,
  FolderKanban,
  Target,
  Milestone,
  ListChecks,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Info,
  ChevronRight,
} from 'lucide-react';
import { IllustratedCardBadge, type IllustratedBadgeVariant } from '../common/IllustratedCardBadge';

interface SimpleWorkflowNode {
  id: string;
  step: string;
  title: string;
  shortLabel: string;
  example: string;
  icon: React.ElementType;
  illustrationVariant: IllustratedBadgeVariant;
  accent: string;
  badgeBg: string;
  containerBg: string;
  borderColor: string;
}

const WORKFLOW_STEPS: SimpleWorkflowNode[] = [
  {
    id: 'org',
    step: '1',
    title: 'Organization',
    shortLabel: 'Company Vision',
    example: 'Acme Enterprise',
    icon: Building2,
    illustrationVariant: 'org',
    accent: 'text-brand-orange',
    badgeBg: 'bg-brand-orange-light text-brand-orange border border-brand-orange/20',
    containerBg: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6]',
    borderColor: 'border-brand-orange/25',
  },
  {
    id: 'projects',
    step: '2',
    title: 'Projects',
    shortLabel: 'Team Initiatives',
    example: 'Product Pod',
    icon: FolderKanban,
    illustrationVariant: 'projects',
    accent: 'text-brand-green',
    badgeBg: 'bg-brand-green-light text-brand-green border border-brand-green/20',
    containerBg: 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7]',
    borderColor: 'border-brand-green/25',
  },
  {
    id: 'goals',
    step: '3',
    title: 'Goals',
    shortLabel: 'Key Objectives',
    example: 'Launch Product Hub',
    icon: Target,
    illustrationVariant: 'goal',
    accent: 'text-amber-700',
    badgeBg: 'bg-amber-50 text-amber-800 border border-amber-200',
    containerBg: 'bg-gradient-to-br from-[#fefbf0] via-[#fef6dc] to-[#fdeec0]',
    borderColor: 'border-brand-yellow/35',
  },
  {
    id: 'milestones',
    step: '4',
    title: 'Milestones',
    shortLabel: 'Major Checkpoints',
    example: 'Architecture Signoff',
    icon: Milestone,
    illustrationVariant: 'milestone',
    accent: 'text-brand-orange',
    badgeBg: 'bg-brand-orange-light text-brand-orange border border-brand-orange/20',
    containerBg: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6]',
    borderColor: 'border-brand-orange/25',
  },
  {
    id: 'tasks',
    step: '5',
    title: 'Tasks',
    shortLabel: 'Daily Action Items',
    example: 'Responsive Layout',
    icon: ListChecks,
    illustrationVariant: 'tasks',
    accent: 'text-brand-green',
    badgeBg: 'bg-brand-green-light text-brand-green border border-brand-green/20',
    containerBg: 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7]',
    borderColor: 'border-brand-green/25',
  },
];

interface MilestoneItem {
  id: string;
  name: string;
  status: string;
  progress: number;
}

const MILESTONES: MilestoneItem[] = [
  {
    id: 'm1',
    name: 'Design & UX Architecture',
    status: 'Completed',
    progress: 100,
  },
  {
    id: 'm2',
    name: 'Core Feature Build',
    status: 'In Progress',
    progress: 75,
  },
  {
    id: 'm3',
    name: 'Review & Launch',
    status: 'In Progress',
    progress: 40,
  },
];

// Explicit, fully-typed Animation Variants for guaranteed coordinated execution and reset
const leftColVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      delay: 0.05,
      ease: 'easeOut',
    },
  },
};

const highlight1Variants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.15, ease: 'easeOut' },
  },
};

const highlight2Variants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.25, ease: 'easeOut' },
  },
};

const highlight3Variants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.35, ease: 'easeOut' },
  },
};

const goalCardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.1,
      ease: 'easeOut',
    },
  },
};

// 72% Goal Progress Ring: Circumference = 2 * PI * 40 = 251.327. Offset at 72% = 70.37
const ringVariants: Variants = {
  hidden: { strokeDashoffset: 251.33 },
  visible: {
    strokeDashoffset: 70.37,
    transition: {
      duration: 1.0,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};

// 72% Goal Rollup Progress Bar
const goalBarVariants: Variants = {
  hidden: { width: '0%' },
  visible: {
    width: '72%',
    transition: {
      duration: 1.0,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};

// SVG Connector Lines: Drawn progressively from Goal to the three Milestones
const stemLineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.6,
      ease: 'easeInOut',
    },
  },
};

const crossLineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.75,
      ease: 'easeInOut',
    },
  },
};

const dropLineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.25,
      delay: 0.95,
      ease: 'easeInOut',
    },
  },
};

// Milestone Card Entrance Reveals: Staggered upward movement and fade-in
const m1CardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.9, ease: 'easeOut' },
  },
};

const m2CardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 1.05, ease: 'easeOut' },
  },
};

const m3CardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 1.2, ease: 'easeOut' },
  },
};

// Milestone Progress Bars: Animate from 0% to 100%, 75%, and 40%
const m1BarVariants: Variants = {
  hidden: { width: '0%' },
  visible: {
    width: '100%',
    transition: { duration: 0.75, delay: 1.1, ease: 'easeOut' },
  },
};

const m2BarVariants: Variants = {
  hidden: { width: '0%' },
  visible: {
    width: '75%',
    transition: { duration: 0.75, delay: 1.25, ease: 'easeOut' },
  },
};

const m3BarVariants: Variants = {
  hidden: { width: '0%' },
  visible: {
    width: '40%',
    transition: { duration: 0.75, delay: 1.4, ease: 'easeOut' },
  },
};

// Status Labels: Reveal only AFTER the corresponding progress bar finishes animating
const m1StatusVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 1.85, ease: 'easeOut' },
  },
};

const m2StatusVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 2.0, ease: 'easeOut' },
  },
};

const m3StatusVariants: Variants = {
  hidden: { opacity: 0, y: 4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 2.15, ease: 'easeOut' },
  },
};

export const ConnectedWorkflowSection: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('goals');

  // Goals Card scroll observer with once: false for repeat-on-scroll replaying in both scroll directions
  const goalsCardRef = useRef<HTMLDivElement>(null);
  const isGoalsInView = useInView(goalsCardRef, {
    once: false,
    amount: 0.15,
  });
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();

  // Animated numerical counters that reset on exit and count up on entry
  const [progressCounter, setProgressCounter] = useState<number>(0);
  const [milestoneCounters, setMilestoneCounters] = useState<{ m1: number; m2: number; m3: number }>({
    m1: 0,
    m2: 0,
    m3: 0,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      if (isGoalsInView) {
        controls.set('visible');
        setProgressCounter(72);
        setMilestoneCounters({ m1: 100, m2: 75, m3: 40 });
      } else {
        controls.set('hidden');
        setProgressCounter(0);
        setMilestoneCounters({ m1: 0, m2: 0, m3: 0 });
      }
      return;
    }

    if (isGoalsInView) {
      // Ensure starting from hidden baseline, then trigger coordinated sequence
      controls.set('hidden');
      const startTimer = setTimeout(() => {
        controls.start('visible');
      }, 30);

      // Animate Active Objective 0% -> 72% counter synchronized with ring & bar
      let startRingTime: number | null = null;
      let ringAnimId: number;
      const targetRing = 72;
      const ringDuration = 1000;

      const stepRing = (timestamp: number) => {
        if (!startRingTime) startRingTime = timestamp;
        const elapsed = timestamp - startRingTime;
        const progress = Math.min(elapsed / ringDuration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setProgressCounter(Math.round(ease * targetRing));
        if (progress < 1) {
          ringAnimId = requestAnimationFrame(stepRing);
        }
      };

      const ringTimer = setTimeout(() => {
        ringAnimId = requestAnimationFrame(stepRing);
      }, 200);

      // Animate milestone percentage counters in sync with their respective progress bars
      const animateCounter = (
        key: 'm1' | 'm2' | 'm3',
        target: number,
        duration: number,
        delayMs: number
      ) => {
        let startTime: number | null = null;
        let animId: number;

        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setMilestoneCounters((prev) => ({
            ...prev,
            [key]: Math.round(ease * target),
          }));
          if (progress < 1) {
            animId = requestAnimationFrame(step);
          }
        };

        const timer = setTimeout(() => {
          animId = requestAnimationFrame(step);
        }, delayMs);

        return () => {
          clearTimeout(timer);
          if (animId) cancelAnimationFrame(animId);
        };
      };

      const cleanupM1 = animateCounter('m1', 100, 750, 1100);
      const cleanupM2 = animateCounter('m2', 75, 750, 1250);
      const cleanupM3 = animateCounter('m3', 40, 750, 1400);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(ringTimer);
        if (ringAnimId) cancelAnimationFrame(ringAnimId);
        cleanupM1();
        cleanupM2();
        cleanupM3();
      };
    } else {
      // Synchronously and explicitly reset SVG path progress, bar widths, ring progress, and counters
      controls.set('hidden');
      setProgressCounter(0);
      setMilestoneCounters({ m1: 0, m2: 0, m3: 0 });
    }
  }, [isGoalsInView, shouldReduceMotion, controls]);

  return (
    <section
      id="connected-workflow"
      className="relative pt-20 sm:pt-20 md:pt-24 pb-8 sm:pb-10 px-3.5 sm:px-6 lg:px-10 xl:px-12 max-w-[1600px] mx-auto overflow-hidden w-full"
    >
      {/* Subtle Background Ambient Decorative Sheen */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.55, 0.35],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-br from-brand-peach/30 via-brand-orange-light/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Section Header with repeat-on-scroll entrance */}
      <div className="text-left w-full max-w-5xl space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="text-2xl min-[360px]:text-[28px] min-[390px]:text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left break-words"
        >
          From Big Goals to <span className="text-brand-orange">Daily Work.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="text-sm min-[375px]:text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-3xl text-left"
        >
          Connect your goals, projects, and everyday work.
        </motion.p>
      </div>

      {/* Main Diagram Card */}
      <div className="rounded-3xl bg-white border border-brand-peach/80 p-3 min-[375px]:p-3.5 sm:p-7 lg:p-9 shadow-warm-lg space-y-5 sm:space-y-7 w-full max-w-full overflow-hidden">
        {/* Top 5-Step Connected Flow (Desktop) */}
        <div className="hidden lg:block relative py-2">
          {/* Subtle animated connector line behind step cards */}
          <div className="absolute top-[3.75rem] left-[6%] right-[6%] h-1 bg-champagne rounded-full overflow-hidden z-0">
            <motion.div
              className="h-full w-32 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green rounded-full"
              animate={shouldReduceMotion ? {} : { x: ['-100%', '850%'] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          {/* 5 Connected Step Cards */}
          <div className="grid grid-cols-5 gap-3.5 relative z-10">
            {WORKFLOW_STEPS.map((step, index) => {
              const isSelected = activeStepId === step.id;
              return (
                <div key={step.id} className="relative group">
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    onClick={() => setActiveStepId(step.id)}
                    className={`p-4 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[185px] ${
                      isSelected
                        ? 'bg-white border-brand-orange shadow-warm-md scale-[1.02] ring-2 ring-brand-orange/30'
                        : 'bg-white hover:bg-surface-ambient border-brand-peach/80 hover:border-brand-orange/40 hover:-translate-y-1 shadow-warm-2xs hover:shadow-warm-md'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`w-7 h-7 rounded-full text-xs font-mono font-bold flex items-center justify-center ${step.badgeBg}`}>
                          0{step.step}
                        </span>
                        <IllustratedCardBadge variant={step.illustrationVariant} size="sm" />
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-sm sm:text-base text-espresso">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-terracotta-muted mt-0.5">
                          {step.shortLabel}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-brand-peach/40">
                      <span className="text-xs font-mono text-terracotta truncate block bg-surface-tier1 px-2.5 py-1 rounded-lg border border-brand-peach/50">
                        {step.example}
                      </span>
                    </div>
                  </motion.div>

                  {/* Connecting Arrow between cards */}
                  {index < 4 && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden xl:flex items-center justify-center">
                      <motion.div
                        animate={shouldReduceMotion ? {} : { x: [0, 3, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                        className="w-5 h-5 rounded-full bg-white border border-brand-peach shadow-warm-2xs flex items-center justify-center text-brand-orange"
                      >
                        <ChevronRight className="w-3 h-3 text-brand-orange" />
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Flow with repeat-on-scroll */}
        <div className="block lg:hidden space-y-2.5 w-full">
          {WORKFLOW_STEPS.map((step, index) => {
            const isSelected = activeStepId === step.id;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setActiveStepId(step.id)}
                className={`p-2.5 min-[375px]:p-3 sm:p-3.5 rounded-2xl border transition-all cursor-pointer w-full max-w-full ${
                  isSelected
                    ? 'bg-white border-brand-orange shadow-warm-md ring-2 ring-brand-orange/30'
                    : 'bg-white border-brand-peach/80 hover:bg-surface-ambient active:scale-[0.99] shadow-warm-2xs'
                }`}
              >
                <div className="flex items-center justify-between gap-2 min-[375px]:gap-3 min-w-0 w-full">
                  <div className="flex items-center gap-2 min-[375px]:gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <IllustratedCardBadge variant={step.illustrationVariant} size="sm" stepNumber={`0${step.step}`} />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading font-bold text-sm min-[375px]:text-[15px] sm:text-base text-espresso leading-snug break-words">
                        {step.title}
                      </h3>
                      <p className="text-[11px] min-[375px]:text-xs sm:text-[13px] text-terracotta-muted truncate mt-0.5">
                        {step.shortLabel}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 max-w-[110px] min-[375px]:max-w-[130px] sm:max-w-[160px] text-right pl-1">
                    <span className="text-[11px] min-[375px]:text-xs sm:text-[13px] font-mono font-semibold text-terracotta bg-surface-tier1 border border-brand-peach/60 px-2 py-0.5 min-[375px]:px-2.5 min-[375px]:py-1 rounded-lg shadow-warm-2xs inline-block leading-tight text-center sm:text-right break-words">
                      {step.example}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* REDESIGNED GOALS CARD: Turn Goals Into Real Progress */}
        {/* Fully coordinated sequence replaying every time the section enters viewport */}
        <div
          ref={goalsCardRef}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#fffdfa] via-white to-[#fff8f2] border border-brand-peach/80 p-3.5 min-[375px]:p-5 sm:p-8 lg:p-9 shadow-warm-sm w-full max-w-full overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* LEFT COLUMN: Title, Description, and 3 Visual Highlights */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={leftColVariants}
              className="lg:col-span-5 space-y-4 sm:space-y-5"
            >
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-xl min-[360px]:text-2xl min-[375px]:text-[26px] sm:text-3xl font-heading font-extrabold text-espresso tracking-tight leading-tight">
                  Turn Goals Into Real Progress
                </h2>

                <p className="text-sm min-[375px]:text-base text-terracotta leading-relaxed font-normal">
                  Set clear goals, break them into smaller milestones, and see how every completed task moves your team closer to success.
                </p>
              </div>

              {/* Three Visual Highlights with Staggered Entrance */}
              <div className="space-y-2.5 pt-1">
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={highlight1Variants}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-brand-peach/70 shadow-warm-2xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] border border-brand-orange/25 text-brand-orange flex items-center justify-center shrink-0 shadow-sm">
                    <Target className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <span className="font-heading font-bold text-sm text-espresso">
                    Clear Strategic Goals
                  </span>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={highlight2Variants}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-brand-peach/70 shadow-warm-2xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#edf7f3] to-[#daf1e7] border border-brand-green/25 text-brand-green flex items-center justify-center shrink-0 shadow-sm">
                    <TrendingUp className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <span className="font-heading font-bold text-sm text-espresso">
                    Measurable Progress
                  </span>
                </motion.div>

                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={highlight3Variants}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-brand-peach/70 shadow-warm-2xs"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#fefbf0] to-[#fdeec0] border border-brand-yellow/35 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <span className="font-heading font-bold text-sm text-espresso">
                    Automated Rollup Updates
                  </span>
                </motion.div>
              </div>

              {/* Illustrative Sample Data Note */}
              <div className="flex items-center gap-1.5 text-xs text-terracotta-muted pt-1">
                <Info className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>Illustrative sample data</span>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Coordinated Sequence (Ring, Goal Rollup Bar, Connector Lines, Milestones) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Goal Card: Active Objective with Animated Ring & Goal Rollup Bar */}
              <motion.div
                initial="hidden"
                animate={controls}
                variants={goalCardVariants}
                className="p-3.5 min-[375px]:p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/90 shadow-warm-xs flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 relative z-10 w-full max-w-full"
              >
                <div className="space-y-2 text-center sm:text-left flex-1 min-w-0">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                    <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
                      ACTIVE OBJECTIVE
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso">
                    Launch New Brand & Product Hub
                  </h3>
                  <p className="text-sm sm:text-[13px] text-terracotta-muted">
                    Quarterly target broken down into 3 delivery milestones
                  </p>

                  {/* Goal Rollup Bar: Animates smoothly from 0% to 72% */}
                  <div className="pt-1 max-w-xs mx-auto sm:mx-0">
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="text-terracotta-muted">Goal Rollup</span>
                      <span className="font-bold text-brand-orange">{progressCounter}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-champagne overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green rounded-full"
                        initial="hidden"
                        animate={controls}
                        variants={goalBarVariants}
                      />
                    </div>
                  </div>
                </div>

                {/* Animated Goal Progress Ring (0% to 72%) */}
                <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                  <svg className="w-24 h-24 -rotate-90 transform" viewBox="0 0 100 100">
                    {/* Background Track Ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      className="text-brand-peach/40"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                    />
                    {/* Animated Orange Goal Progress Ring: 0% -> 72% */}
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#f15e1c"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="transparent"
                      strokeDasharray={251.33}
                      initial="hidden"
                      animate={controls}
                      variants={ringVariants}
                    />
                  </svg>
                  {/* Dynamic numerical counter in center */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                    <span className="text-xl sm:text-2xl font-extrabold text-espresso font-heading leading-none">
                      {progressCounter}%
                    </span>
                    <span className="text-xs font-mono font-bold text-brand-orange uppercase mt-0.5 tracking-wider">
                      Progress
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Animated Connector Lines: Draw progressively from Goal to Milestones */}
              <div className="relative px-4">
                <svg className="w-full h-5 hidden sm:block pointer-events-none text-brand-peach" viewBox="0 0 400 20" preserveAspectRatio="none">
                  {/* Step 1: Stem line from Goal downward */}
                  <motion.line
                    x1="200"
                    y1="0"
                    x2="200"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial="hidden"
                    animate={controls}
                    variants={stemLineVariants}
                  />
                  {/* Step 2: Cross horizontal line across */}
                  <motion.line
                    x1="65"
                    y1="8"
                    x2="335"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial="hidden"
                    animate={controls}
                    variants={crossLineVariants}
                  />
                  {/* Step 3: Drops to the 3 milestone cards */}
                  <motion.line
                    x1="65"
                    y1="8"
                    x2="65"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial="hidden"
                    animate={controls}
                    variants={dropLineVariants}
                  />
                  <motion.line
                    x1="200"
                    y1="8"
                    x2="200"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial="hidden"
                    animate={controls}
                    variants={dropLineVariants}
                  />
                  <motion.line
                    x1="335"
                    y1="8"
                    x2="335"
                    y2="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial="hidden"
                    animate={controls}
                    variants={dropLineVariants}
                  />
                </svg>
              </div>

              {/* 3 Connected Milestone Cards: Staggered entrance, progress fill, then status reveal */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Milestone 1: 100% */}
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={m1CardVariants}
                  className="p-3.5 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs hover:border-brand-orange/50 hover:-translate-y-0.5 hover:shadow-warm-sm transition-all duration-200 cursor-pointer space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                      MILESTONE
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-brand-green">
                      {milestoneCounters.m1}%
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-[15px] sm:text-sm text-espresso leading-snug">
                    {MILESTONES[0].name}
                  </h4>

                  {/* Milestone 1 Progress Bar: 0% -> 100% */}
                  <div className="w-full h-1.5 rounded-full bg-champagne overflow-hidden">
                    <motion.div
                      className="h-full bg-brand-green rounded-full"
                      initial="hidden"
                      animate={controls}
                      variants={m1BarVariants}
                    />
                  </div>

                  {/* Status label: Reveals AFTER progress bar finishes animating */}
                  <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={m1StatusVariants}
                    className="flex items-center justify-between text-[13px] sm:text-xs text-terracotta-muted pt-0.5"
                  >
                    <span>Status</span>
                    <span className="text-brand-green font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-brand-green" />
                      {MILESTONES[0].status}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Milestone 2: 75% */}
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={m2CardVariants}
                  className="p-3.5 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs hover:border-brand-orange/50 hover:-translate-y-0.5 hover:shadow-warm-sm transition-all duration-200 cursor-pointer space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                      MILESTONE
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-brand-green">
                      {milestoneCounters.m2}%
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-[15px] sm:text-sm text-espresso leading-snug">
                    {MILESTONES[1].name}
                  </h4>

                  {/* Milestone 2 Progress Bar: 0% -> 75% */}
                  <div className="w-full h-1.5 rounded-full bg-champagne overflow-hidden">
                    <motion.div
                      className="h-full bg-brand-green rounded-full"
                      initial="hidden"
                      animate={controls}
                      variants={m2BarVariants}
                    />
                  </div>

                  {/* Status label: Reveals AFTER progress bar finishes animating */}
                  <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={m2StatusVariants}
                    className="flex items-center justify-between text-[13px] sm:text-xs text-terracotta-muted pt-0.5"
                  >
                    <span>Status</span>
                    <span className="text-brand-orange font-semibold flex items-center gap-1">
                      {MILESTONES[1].status}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Milestone 3: 40% */}
                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={m3CardVariants}
                  className="p-3.5 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs hover:border-brand-orange/50 hover:-translate-y-0.5 hover:shadow-warm-sm transition-all duration-200 cursor-pointer space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                      MILESTONE
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-brand-green">
                      {milestoneCounters.m3}%
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-[15px] sm:text-sm text-espresso leading-snug">
                    {MILESTONES[2].name}
                  </h4>

                  {/* Milestone 3 Progress Bar: 0% -> 40% */}
                  <div className="w-full h-1.5 rounded-full bg-champagne overflow-hidden">
                    <motion.div
                      className="h-full bg-brand-green rounded-full"
                      initial="hidden"
                      animate={controls}
                      variants={m3BarVariants}
                    />
                  </div>

                  {/* Status label: Reveals AFTER progress bar finishes animating */}
                  <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={m3StatusVariants}
                    className="flex items-center justify-between text-[13px] sm:text-xs text-terracotta-muted pt-0.5"
                  >
                    <span>Status</span>
                    <span className="text-brand-orange font-semibold flex items-center gap-1">
                      {MILESTONES[2].status}
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
