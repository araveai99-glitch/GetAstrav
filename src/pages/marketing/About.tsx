import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Target,
  FolderKanban,
  ListChecks,
  TrendingUp,
  Layers,
  ArrowRight,
  Sparkles,
  Link2,
  Eye,
  Zap,
  CheckCircle2,
  AlertCircle,
  FileQuestion,
  ShieldCheck,
  Check,
  Building2,
  Users,
  Compass,
  Cpu,
} from 'lucide-react';
import { openDemoModal } from '../../components/common/DemoModal';
import { IllustratedCardBadge } from '../../components/common/IllustratedCardBadge';

interface StepRelation {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  example: string;
  icon: React.ElementType;
  accent: string;
  lightBg: string;
  borderColor: string;
  description: string;
}

const STEP_RELATIONS: StepRelation[] = [
  {
    id: 'goals',
    stepNumber: '01',
    title: 'Goals',
    subtitle: 'Strategic Targets',
    example: 'Expand Enterprise Market Reach',
    icon: Target,
    accent: 'text-brand-orange',
    lightBg: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6]',
    borderColor: 'border-brand-orange/25',
    description: 'High-level company objectives defined by executive leadership that anchor organizational purpose.',
  },
  {
    id: 'projects',
    stepNumber: '02',
    title: 'Projects',
    subtitle: 'Dedicated Containers',
    example: 'Q4 Enterprise Security Suite',
    icon: FolderKanban,
    accent: 'text-amber-700',
    lightBg: 'bg-gradient-to-br from-[#fefbf0] via-[#fef6dc] to-[#fdeec0]',
    borderColor: 'border-brand-yellow/35',
    description: 'Cross-functional project containers that bundle milestones, deliverable specs, and pod assets.',
  },
  {
    id: 'tasks',
    stepNumber: '03',
    title: 'Tasks',
    subtitle: 'Everyday Work',
    example: 'Build SAML SSO & RBAC Gateway',
    icon: ListChecks,
    accent: 'text-brand-green',
    lightBg: 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7]',
    borderColor: 'border-brand-green/25',
    description: 'Action items assigned to pod specialists with deterministic ownership and clear SLA countdowns.',
  },
  {
    id: 'progress',
    stepNumber: '04',
    title: 'Progress',
    subtitle: 'Verifiable Rollup',
    example: '85% Mathematical Rollup',
    icon: TrendingUp,
    accent: 'text-brand-orange',
    lightBg: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6]',
    borderColor: 'border-brand-orange/25',
    description: 'Automatic calculations update company goals as daily deliverables finish, eliminating status meetings.',
  },
];

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeRelationIndex, setActiveRelationIndex] = useState<number>(0);

  useEffect(() => {
    document.title = 'About Astrav — A Clearer Way to Move Work Forward';
    window.scrollTo(0, 0);
  }, []);

  const activeRelation = STEP_RELATIONS[activeRelationIndex];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col space-y-12 sm:space-y-16 selection:bg-brand-orange selection:text-white">
      {/* Section 1: Hero */}
      <div className="text-left w-full max-w-5xl space-y-3 mb-2 sm:mb-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-brand-orange-light text-brand-orange text-xs font-mono font-bold border border-brand-orange/30 flex items-center gap-1.5 shadow-2xs">
            <Compass className="w-3.5 h-3.5" /> Company Mission & Operating System
          </span>
          <span className="px-3 py-1 rounded-full bg-white text-espresso text-xs font-mono font-bold border border-brand-peach/60 shadow-2xs">
            Founded 2026
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left"
        >
          A Clearer Way to <span className="text-brand-orange">Move Work Forward.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="text-base sm:text-lg lg:text-xl text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Astrav connects high-level company goals directly to daily team execution, giving founders and teams clear, mathematical progress rather than subjective status reports.
        </motion.p>
      </div>

      {/* Relevant Hero Visual: Goals, Projects, Teams, and Progress in One Connected Workspace */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-warm-md relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-brand-peach/50">
          <div>
            <h2 className="text-[24px] min-[375px]:text-[26px] sm:text-2xl font-heading font-extrabold text-espresso">
              The Four Pillars of Connected Execution
            </h2>
            <p className="text-sm sm:text-base text-terracotta mt-1">
              Every level in Astrav maps directly to the next, forming an unbroken bridge from vision to deliverable.
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30 self-start sm:self-auto">
            Single Source of Truth
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Goals */}
          <div className="p-5 sm:p-6 rounded-2xl bg-surface-ambient/50 border border-brand-peach/80 hover:bg-white shadow-[0_4px_16px_-4px_rgba(241,94,28,0.06)] hover:shadow-warm-md hover:-translate-y-1 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <IllustratedCardBadge variant="goal" size="md" stepNumber="01" />
                <span className="text-xs font-mono font-bold text-terracotta-muted px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach/50">
                  STRATEGY
                </span>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-espresso mb-1.5 group-hover:text-brand-orange transition-colors">
                  Company Goals
                </h3>
                <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                  Strategic targets set by executive leadership give every initiative a clear purpose and measurable weight.
                </p>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-mono text-terracotta-muted">
              <span>Cascade Weight</span>
              <span className="font-bold text-brand-orange">Top Level</span>
            </div>
          </div>

          {/* Card 2: Project Containers */}
          <div className="p-5 sm:p-6 rounded-2xl bg-surface-ambient/50 border border-brand-peach/80 hover:bg-white shadow-[0_4px_16px_-4px_rgba(241,94,28,0.06)] hover:shadow-warm-md hover:-translate-y-1 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <IllustratedCardBadge variant="projects" size="md" stepNumber="02" />
                <span className="text-xs font-mono font-bold text-terracotta-muted px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach/50">
                  CONTAINER
                </span>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-espresso mb-1.5 group-hover:text-amber-800 transition-colors">
                  Project Containers
                </h3>
                <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                  Dedicated workspaces group milestones, architectural specs, and deliverables into one unified home.
                </p>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-mono text-terracotta-muted">
              <span>Scoped Assets</span>
              <span className="font-bold text-amber-700">All-in-One</span>
            </div>
          </div>

          {/* Card 3: Autonomous Pods */}
          <div className="p-5 sm:p-6 rounded-2xl bg-surface-ambient/50 border border-brand-peach/80 hover:bg-white shadow-[0_4px_16px_-4px_rgba(241,94,28,0.06)] hover:shadow-warm-md hover:-translate-y-1 hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <IllustratedCardBadge variant="teams" size="md" stepNumber="03" />
                <span className="text-xs font-mono font-bold text-terracotta-muted px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach/50">
                  EXECUTION
                </span>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-espresso mb-1.5 group-hover:text-brand-green transition-colors">
                  Autonomous Pods
                </h3>
                <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                  Designers and engineers focus on everyday deliverables with deterministic ownership and clear SLA countdowns.
                </p>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-mono text-terracotta-muted">
              <span>Handoff Latency</span>
              <span className="font-bold text-brand-green">Zero Friction</span>
            </div>
          </div>

          {/* Card 4: Live Rollups */}
          <div className="p-5 sm:p-6 rounded-2xl bg-surface-ambient/50 border border-brand-peach/80 hover:bg-white shadow-[0_4px_16px_-4px_rgba(241,94,28,0.06)] hover:shadow-warm-md hover:-translate-y-1 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <IllustratedCardBadge variant="progress" size="md" stepNumber="04" />
                <span className="text-xs font-mono font-bold text-terracotta-muted px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach/50">
                  FEEDBACK
                </span>
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-espresso mb-1.5 group-hover:text-brand-orange transition-colors">
                  Live Rollups
                </h3>
                <p className="text-sm sm:text-base text-terracotta leading-relaxed">
                  Completed work calculates progress automatically, bubbling up to company goals without manual status chase.
                </p>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-mono text-terracotta-muted">
              <span>Status Calculation</span>
              <span className="font-bold text-brand-orange">100% Automated</span>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Section 2: The Problem We Solve */}
      <div className="space-y-6">
        <div className="text-left w-full max-w-5xl space-y-2">
          <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
            WHY ASTRAV EXISTS
          </span>
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl lg:text-4xl font-heading font-extrabold text-espresso tracking-tight text-left">
            The Problem <span className="text-brand-orange">We Solve.</span>
          </h2>
          <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-3xl text-left">
            Modern high-growth teams struggle when everyday execution becomes separated from high-level company goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {/* Problem Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fefbf0] via-[#fef6dc] to-[#fdeec0] border border-brand-yellow/40 text-amber-700 flex items-center justify-center mb-5 shadow-xs transition-transform group-hover:scale-105 group-hover:rotate-2">
                <FileQuestion className="w-7 h-7 stroke-[2]" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 uppercase mb-3 inline-block">
                Context Scattering
              </span>
              <h3 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso mb-2.5 group-hover:text-amber-800 transition-colors">
                Work Scattered Across Disconnected Tools
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Critical context gets lost between isolated wikis, scattered chat threads, and ticket queues, leaving builders constantly guessing what to prioritize next.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-xs font-mono text-amber-700 font-bold">
              <span>Astrav Remedy:</span>
              <span className="text-brand-green">Unified Project Containers</span>
            </div>
          </motion.div>

          {/* Problem Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-orange/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] border border-brand-orange/30 text-brand-orange flex items-center justify-center mb-5 shadow-xs transition-transform group-hover:scale-105 group-hover:rotate-2">
                <AlertCircle className="w-7 h-7 stroke-[2]" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/30 uppercase mb-3 inline-block">
                Phantom Progress
              </span>
              <h3 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso mb-2.5 group-hover:text-brand-orange transition-colors">
                Subjective Estimates Masking Delays
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Self-reported completion percentages create phantom velocity, resulting in sudden panic and missed milestones when deliverables near launch dates.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-xs font-mono text-brand-orange font-bold">
              <span>Astrav Remedy:</span>
              <span className="text-brand-green">Automated Mathematical Rollups</span>
            </div>
          </motion.div>

          {/* Problem Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-green/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#edf7f3] to-[#daf1e7] border border-brand-green/30 text-brand-green flex items-center justify-center mb-5 shadow-xs transition-transform group-hover:scale-105 group-hover:rotate-2">
                <Eye className="w-7 h-7 stroke-[2]" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 py-0.5 rounded-full border border-brand-green/30 uppercase mb-3 inline-block">
                Status Meeting Overhead
              </span>
              <h3 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso mb-2.5 group-hover:text-brand-green transition-colors">
                Leaders Chasing Constant Status Updates
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Founders and executives burn valuable hours in recurring alignment syncs instead of glancing at verified ground truth across every department.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-xs font-mono text-brand-green font-bold">
              <span>Astrav Remedy:</span>
              <span className="text-brand-green">Live Executive Telemetry</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3: How Astrav Helps (Interactive Alignment Hierarchy) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-warm-md space-y-7"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-brand-peach/50">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/30">
                INTERACTIVE DEMONSTRATION
              </span>
            </div>
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
              The Alignment Hierarchy: Vision to Execution
            </h2>
            <p className="text-sm sm:text-base text-terracotta mt-1 max-w-2xl">
              Tap any level below to inspect how company targets decompose into deliverables and mathematically bubble back up into verified progress.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-brand-orange bg-surface-ambient px-4 py-2 rounded-full border border-brand-peach/60 shrink-0">
            <Sparkles className="w-4 h-4 text-brand-orange animate-spin" />
            <span>Mathematical Ground Truth</span>
          </div>
        </div>

        {/* 4 Interactive Sequence Cards: Goals → Projects → Tasks → Progress */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEP_RELATIONS.map((rel, idx) => {
            const isActive = activeRelationIndex === idx;
            const badgeVariant = rel.id === 'goals' ? 'goal' : rel.id === 'projects' ? 'projects' : rel.id === 'tasks' ? 'tasks' : 'progress';

            return (
              <button
                key={rel.id}
                type="button"
                onClick={() => setActiveRelationIndex(idx)}
                className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer select-none flex flex-col justify-between group ${
                  isActive
                    ? 'bg-brand-orange-light/40 border-brand-orange shadow-warm-md scale-[1.02]'
                    : 'bg-surface-ambient/40 border-brand-peach/60 hover:border-brand-peach hover:bg-white shadow-2xs hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <IllustratedCardBadge variant={badgeVariant as any} size="md" stepNumber={rel.stepNumber} />
                  <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${isActive ? 'bg-brand-orange text-white' : 'bg-surface-tier1 text-terracotta-muted border border-brand-peach/50'}`}>
                    {isActive ? 'ACTIVE' : `L-${rel.stepNumber}`}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-espresso mb-1 group-hover:text-brand-orange transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-terracotta-muted leading-snug">
                    {rel.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Context Canvas */}
        <div className="p-6 sm:p-7 bg-surface-ambient rounded-2xl border border-brand-peach/60 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-brand-peach/50">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-white border border-brand-peach/60 flex items-center justify-center text-brand-orange shadow-warm-2xs shrink-0">
                <activeRelation.icon className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-lg sm:text-xl text-espresso">
                  Level {activeRelation.stepNumber}: {activeRelation.title}
                </h4>
                <p className="text-xs sm:text-sm text-terracotta font-mono font-semibold">
                  Example Anchor: {activeRelation.example}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-brand-green bg-brand-green-light px-3.5 py-1 rounded-full border border-brand-green/30">
              <CheckCircle2 className="w-4 h-4" />
              Connected Ground Truth Link
            </span>
          </div>

          <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal">
            {activeRelation.description}
          </p>
        </div>
      </motion.div>

      {/* Section 4: Operating Architecture (How Modern Companies Execute with Astrav) */}
      <div className="space-y-6">
        <div className="text-left w-full max-w-5xl space-y-2">
          <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full border border-brand-green/30">
            BUILT FOR SCALE
          </span>
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl lg:text-4xl font-heading font-extrabold text-espresso tracking-tight text-left">
            Built for Engineering & Executive <span className="text-brand-orange">Harmony.</span>
          </h2>
          <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-3xl text-left">
            Astrav replaces chaotic handoffs and fragmented spreadsheets with deterministic architecture that scales from seed-stage founders to multi-pod enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 sm:p-8 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="mb-5">
                <IllustratedCardBadge variant="projects" size="md" />
              </div>
              <h3 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso mb-2.5 group-hover:text-brand-orange transition-colors">
                Deterministic Pod Workspaces
              </h3>
              <p className="text-base text-terracotta leading-relaxed mb-4">
                Engineers, product designers, and leads collaborate directly inside project containers. Work moves from spec to pull request with zero handoff latency.
              </p>
            </div>
            <div className="pt-4 border-t border-brand-peach/40 flex items-center gap-2 text-xs font-mono text-terracotta-muted font-bold">
              <Check className="w-4 h-4 text-brand-green" /> Single Mission Team Containers
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="p-6 sm:p-8 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="mb-5">
                <IllustratedCardBadge variant="progress" size="md" />
              </div>
              <h3 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso mb-2.5 group-hover:text-brand-green transition-colors">
                Mathematical Rollup Engine
              </h3>
              <p className="text-base text-terracotta leading-relaxed mb-4">
                Completed deliverables instantly recalculate project completion and milestone health. Company OKRs reflect real progress without manual status decks.
              </p>
            </div>
            <div className="pt-4 border-t border-brand-peach/40 flex items-center gap-2 text-xs font-mono text-terracotta-muted font-bold">
              <Check className="w-4 h-4 text-brand-green" /> Automated Mathematical Precision
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.05 }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className="p-6 sm:p-8 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-yellow/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="mb-5">
                <IllustratedCardBadge variant="governance" size="md" />
              </div>
              <h3 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso mb-2.5 group-hover:text-amber-800 transition-colors">
                Enterprise Trust & Governance
              </h3>
              <p className="text-base text-terracotta leading-relaxed mb-4">
                Least-privilege RBAC, SOC2-aligned audit logging, and row-level security isolate sensitive strategic targets while giving contractors clean container scopes.
              </p>
            </div>
            <div className="pt-4 border-t border-brand-peach/40 flex items-center gap-2 text-xs font-mono text-terracotta-muted font-bold">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Composable Enterprise RBAC
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 5: Final CTA */}
      <section className="pt-2 sm:pt-4">
        <div className="rounded-3xl bg-gradient-to-r from-[#fffbf7] via-[#fff5ee] to-[#fef2e8] p-8 sm:p-12 md:p-16 border-2 border-brand-peach/80 shadow-warm-lg text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
              ALIGN YOUR ENTIRE COMPANY
            </span>
            <h2 className="text-[28px] min-[375px]:text-[32px] sm:text-4xl lg:text-5xl font-heading font-extrabold text-espresso tracking-tight leading-tight">
              Bring Your Work Together <span className="text-brand-orange">with Astrav.</span>
            </h2>
            <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-2xl mx-auto">
              Connect high-level strategy to daily team execution and experience clear, mathematical progress without status meetings.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={openDemoModal}
                className="btn-brand-primary px-8 py-3.5 text-base font-heading font-bold shadow-md shadow-brand-orange/30 hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span>Book an Executive Demo</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <Link
                to="/contact"
                className="btn-brand-secondary px-7 py-3.5 text-base font-heading font-bold shadow-warm-xs hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2"
              >
                <span>Contact Enterprise Team</span>
              </Link>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-terracotta-muted">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-green" /> SOC2 Type II Aligned</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-green" /> Automated Rollup Telemetry</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-brand-green" /> Guided Enterprise Onboarding</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
