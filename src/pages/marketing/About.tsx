import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Target,
  FolderGit2,
  CheckSquare,
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
} from 'lucide-react';
import { openDemoModal } from '../../components/common/DemoModal';

interface StepRelation {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  example: string;
  icon: React.ElementType;
  accent: string;
  lightBg: string;
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
    lightBg: 'bg-brand-orange-light',
    description: 'High-level company objectives defined by executive leadership.',
  },
  {
    id: 'projects',
    stepNumber: '02',
    title: 'Projects',
    subtitle: 'Dedicated Containers',
    example: 'Q4 Enterprise Security Suite',
    icon: FolderGit2,
    accent: 'text-brand-yellow',
    lightBg: 'bg-amber-50',
    description: 'Cross-functional initiatives that bundle milestones, deliverables, and specs.',
  },
  {
    id: 'tasks',
    stepNumber: '03',
    title: 'Tasks',
    subtitle: 'Everyday Work',
    example: 'Build SAML SSO & RBAC Gateway',
    icon: CheckSquare,
    accent: 'text-espresso',
    lightBg: 'bg-surface-tier1',
    description: 'Action items assigned to pod specialists with clear SLA deadlines.',
  },
  {
    id: 'progress',
    stepNumber: '04',
    title: 'Progress',
    subtitle: 'Verifiable Rollup',
    example: '85% Mathematical Rollup',
    icon: TrendingUp,
    accent: 'text-brand-green',
    lightBg: 'bg-brand-green-light',
    description: 'Automatic calculations update company goals as daily deliverables finish.',
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
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12 selection:bg-brand-orange selection:text-white">
      {/* Section 1: Hero */}
      <div className="text-left w-full max-w-5xl space-y-1.5 sm:space-y-2 mb-2 sm:mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left lg:whitespace-nowrap"
        >
          A Clearer Way to Move Work Forward.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left lg:whitespace-nowrap"
        >
          Astrav connects high-level company goals directly to daily team execution, giving founders and teams clear, mathematical progress.
        </motion.p>
      </div>

      {/* Relevant Hero Visual: Goals, Projects, Teams, and Progress in One Connected Workspace */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md relative overflow-hidden"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-terracotta-muted">FOUNDATION</span>
              <Target className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg min-[375px]:text-xl sm:text-lg text-espresso mb-1">
                Company Goals
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Strategic targets set by executive leadership give every initiative a clear purpose.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-terracotta-muted">STRUCTURE</span>
              <FolderGit2 className="w-5 h-5 text-brand-yellow" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg min-[375px]:text-xl sm:text-lg text-espresso mb-1">
                Project Containers
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Dedicated workspaces group milestones, specs, and deliverables into one home.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-terracotta-muted">EXECUTION</span>
              <CheckSquare className="w-5 h-5 text-espresso" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg min-[375px]:text-xl sm:text-lg text-espresso mb-1">
                Autonomous Pods
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Designers and engineers focus on everyday work with deterministic ownership.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-terracotta-muted">VISIBILITY</span>
              <TrendingUp className="w-5 h-5 text-brand-green" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg min-[375px]:text-xl sm:text-lg text-espresso mb-1">
                Live Rollups
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Completed work calculates progress automatically without manual status reports.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section 2: The Problem We Solve */}
      <div className="space-y-4">
        <div className="text-left w-full max-w-5xl space-y-1 sm:space-y-1.5">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso tracking-tight text-left lg:whitespace-nowrap">
            The Problem We Solve.
          </h2>
          <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-3xl text-left lg:whitespace-nowrap">
            Modern teams struggle when everyday execution becomes separated from high-level company goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
                <FileQuestion className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
                Work Scattered Across Tools
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Context gets lost between fragmented wikis, chat threads, and ticket trackers, leaving teams unclear on what to build next.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-sm font-heading font-semibold text-amber-700">
              Disconnected Documentation
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
                Teams Struggling to Track Progress
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Subjective status updates create phantom completion, resulting in surprise delays when deliverables near their deadlines.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-sm font-heading font-semibold text-brand-orange">
              Subjective Status Reports
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-surface-tier1 text-espresso flex items-center justify-center mb-4">
                <Eye className="w-5 h-5 text-espresso" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
                Leaders Lacking Clear Visibility
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Founders spend hours in alignment meetings instead of viewing a single, verified dashboard of company velocity and milestone health.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-sm font-heading font-semibold text-espresso">
              Zero Single Source of Truth
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3: How Astrav Helps (Unique Animated Relationship Diagram) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md space-y-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-brand-peach/50">
          <div>
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
              How Astrav Helps: The Alignment Hierarchy
            </h2>
            <p className="text-sm sm:text-base text-terracotta mt-1">
              Select any level below to understand how goals cascade into daily tasks and automatically roll back up into progress.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs min-[375px]:text-sm font-heading font-semibold text-terracotta-muted">
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span>Mathematical Ground Truth</span>
          </div>
        </div>

        {/* 4 Interactive Sequence Cards: Goals → Projects → Tasks → Progress */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {STEP_RELATIONS.map((rel, idx) => {
            const Icon = rel.icon;
            const isActive = activeRelationIndex === idx;

            return (
              <button
                key={rel.id}
                type="button"
                onClick={() => setActiveRelationIndex(idx)}
                className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer select-none flex flex-col justify-between ${
                  isActive
                    ? 'bg-brand-orange-light/40 border-brand-orange shadow-warm-xs'
                    : 'bg-surface-tier1/50 border-brand-peach/50 hover:border-brand-peach hover:bg-surface-tier1'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${rel.lightBg} ${rel.accent} flex items-center justify-center`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs min-[375px]:text-sm font-mono font-bold text-terracotta-muted">
                    {rel.stepNumber}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[18px] sm:text-base text-espresso">
                    {rel.title}
                  </h3>
                  <p className="text-xs min-[375px]:text-sm text-terracotta-muted mt-0.5">
                    {rel.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Context Canvas */}
        <div className="p-6 bg-surface-tier1/70 rounded-2xl border border-brand-peach/60 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-brand-peach/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-brand-peach/60 flex items-center justify-center text-brand-orange shadow-warm-2xs">
                <activeRelation.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-extrabold text-lg sm:text-xl text-espresso">
                  Level {activeRelation.stepNumber}: {activeRelation.title}
                </h4>
                <p className="text-xs min-[375px]:text-sm text-terracotta-muted">
                  Example: {activeRelation.example}
                </p>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 text-xs min-[375px]:text-sm font-heading font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full border border-brand-green/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Connected Link
            </span>
          </div>

          <p className="text-base text-terracotta leading-relaxed">
            {activeRelation.description}
          </p>
        </div>
      </motion.div>

      {/* Section 4: Our Approach */}
      <div className="space-y-4">
        <div className="text-left w-full max-w-5xl space-y-1 sm:space-y-1.5">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso tracking-tight text-left lg:whitespace-nowrap">
            Our Approach.
          </h2>
          <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-3xl text-left lg:whitespace-nowrap">
            Three core principles guide how we build software for high-velocity teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
                <Link2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
                Keep Work Connected
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Every daily task links directly to a milestone and company goal, ensuring no work is ever orphaned or disconnected from real outcomes.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-sm font-heading font-semibold text-brand-orange">
              Structural Integrity
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
                Make Progress Visible
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Mathematical rollups calculate completion and project health in real time, giving founders and leads ground-truth transparency.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-sm font-heading font-semibold text-brand-green">
              Zero Manual Reports
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.19 }}
            className="p-6 sm:p-7 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
                Help Teams Move Forward
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Clear SLA countdowns and manager sign-off gates unblock contributors days earlier, preventing last-minute delivery crunches.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-brand-peach/40 text-sm font-heading font-semibold text-amber-700">
              Unblocked Contributors
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 5: Final CTA */}
      <section className="pt-2 sm:pt-4">
        <div className="rounded-3xl bg-gradient-to-r from-[#fffbf7] via-[#fff5ee] to-[#fef2e8] p-6 sm:p-10 md:p-12 border border-brand-peach/80 shadow-warm-lg text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl lg:text-4xl font-heading font-extrabold text-espresso tracking-tight leading-tight lg:whitespace-nowrap">
              Bring Your Work Together.
            </h2>
            <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-xl mx-auto lg:whitespace-nowrap">
              See how Astrav keeps your team aligned and moves everyday work forward.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={openDemoModal}
                className="btn-brand-primary px-8 py-3.5 text-base font-heading font-bold shadow-md shadow-brand-orange/30 hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2.5 cursor-pointer"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <Link
                to="/product"
                className="btn-brand-secondary px-7 py-3.5 text-base font-heading font-bold shadow-warm-xs hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2"
              >
                <span>Explore Astrav</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
