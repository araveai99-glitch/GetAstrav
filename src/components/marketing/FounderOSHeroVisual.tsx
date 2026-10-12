import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Users,
  CheckSquare,
  Sparkles,
  ShieldCheck,
  FolderGit2,
  ChevronRight,
  ArrowRight,
  RotateCcw,
  Zap,
} from 'lucide-react';

export const FounderOSHeroVisual: React.FC = () => {
  // Interactive state allowing visitor to experience the live execution rollup
  const [taskCompleted, setTaskCompleted] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'attention'>('all');

  // Dynamic progress values based on live task state
  const milestone1Progress = taskCompleted ? 100 : 88;
  const companyGoalProgress = taskCompleted ? 84 : 78;

  return (
    <div className="relative w-full max-w-[720px] mx-auto select-none">
      {/* Ambient warm glow behind visual */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-brand-peach/40 via-brand-yellow-light/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-tr from-brand-orange-light/50 via-brand-peach/20 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Main Glass/Satin Canvas Container */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white via-surface-ambient to-ivory border border-brand-peach/80 shadow-warm-lg p-4 sm:p-6 lg:p-7 backdrop-blur-sm overflow-hidden">
        
        {/* Top Control Bar: Window Chrome & Interactive Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between pb-4 sm:pb-5 border-b border-brand-peach/50 gap-2.5">
          {/* Status dots & workspace tag */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green/80" />
            </div>
            <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-terracotta-muted ml-1">
              FounderOS • Execution Hierarchy
            </span>
          </div>

          {/* Interactive view switchers */}
          <div className="flex items-center gap-1 bg-surface-tier1 p-0.5 rounded-lg border border-brand-peach/60 text-xs font-heading font-medium">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-1 rounded-md transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-espresso font-bold shadow-warm-2xs border border-brand-peach/40'
                  : 'text-terracotta-muted hover:text-espresso'
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => setActiveFilter('attention')}
              className={`px-2.5 py-1 rounded-md flex items-center gap-1 transition-all ${
                activeFilter === 'attention'
                  ? 'bg-white text-brand-orange font-bold shadow-warm-2xs border border-brand-orange/30'
                  : 'text-terracotta-muted hover:text-brand-orange'
              }`}
            >
              <AlertTriangle className="w-3 h-3 text-brand-yellow" />
              <span>Needs Attention</span>
            </button>
          </div>
        </div>

        {/* Live Rollup Banner Notification */}
        <AnimatePresence>
          {taskCompleted && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="bg-brand-green-light border border-brand-green/30 rounded-xl px-3.5 py-2 flex items-center justify-between text-xs text-brand-green font-heading font-semibold"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-green shrink-0 animate-spin" />
                <span>Automated Rollup: Company Goal updated to {companyGoalProgress}% in real time!</span>
              </div>
              <button
                onClick={() => setTaskCompleted(false)}
                className="text-[11px] underline hover:text-brand-green-hover flex items-center gap-1 shrink-0 ml-2"
                title="Reset simulation"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================ */}
        {/* TIER 1: THE STRATEGIC GOAL (Apex Level)                     */}
        {/* ============================================================ */}
        <div className="mt-4 sm:mt-5">
          <div className="rounded-xl sm:rounded-2xl bg-white border border-brand-peach p-4 sm:p-5 shadow-satin-card transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Target className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-heading font-extrabold tracking-wider uppercase text-brand-orange">
                      Company Goal • Q3 OKR
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-green-light text-brand-green border border-brand-green/30">
                      On Track
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-espresso">
                    Launch Enterprise Platform v2 & Expand ARR
                  </h3>
                </div>
              </div>

              {/* Goal Metric / Rollup Percentage */}
              <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-brand-peach/40">
                <span className="text-[11px] font-body text-terracotta-muted">
                  Live Rollup
                </span>
                <span className="text-lg sm:text-xl font-heading font-extrabold text-espresso tracking-tight">
                  {companyGoalProgress}%
                </span>
              </div>
            </div>

            {/* Progress bar container */}
            <div className="w-full bg-surface-tier1 rounded-full h-2 overflow-hidden border border-brand-peach/40 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-green via-brand-green to-brand-green-hover rounded-full"
                initial={{ width: '78%' }}
                animate={{ width: `${companyGoalProgress}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>

            <div className="flex items-center justify-between pt-2 text-[11px] text-terracotta-muted font-body">
              <span>Connected to 2 Active Projects</span>
              <span className="font-medium text-espresso">Target: Sept 30</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SVG CONNECTOR CONDUIT (Strategy -> Projects)                 */}
        {/* ============================================================ */}
        <div className="relative w-full h-8 sm:h-10 flex items-center justify-center overflow-visible">
          <svg
            className="w-full h-full stroke-brand-peach"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 400 40"
          >
            {/* Left branch to Milestone 1 */}
            <path
              d="M 200 0 L 200 12 C 200 24, 100 16, 100 40"
              strokeWidth="1.75"
              strokeDasharray="4 3"
              className="opacity-80"
            />
            {/* Right branch to Milestone 2 */}
            <path
              d="M 200 0 L 200 12 C 200 24, 300 16, 300 40"
              strokeWidth="1.75"
              strokeDasharray="4 3"
              className="opacity-80"
            />
          </svg>

          {/* Central rollup anchor badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach text-[9px] font-heading font-extrabold uppercase text-terracotta-muted flex items-center gap-1 shadow-warm-2xs">
            <Zap className="w-2.5 h-2.5 text-brand-orange" />
            <span>Rolls Up To Strategy</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TIER 2: MILESTONES & TEAMS (Connecting Middle Layer)        */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          
          {/* Milestone 1: Platform Architecture (On Schedule) */}
          <motion.div
            animate={{
              opacity: activeFilter === 'attention' ? 0.45 : 1,
              scale: activeFilter === 'attention' ? 0.98 : 1,
            }}
            transition={{ duration: 0.2 }}
            className={`rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border transition-all ${
              taskCompleted
                ? 'bg-brand-green-light/40 border-brand-green/40 shadow-glow-green/10'
                : 'bg-white border-brand-peach shadow-satin-card'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-green-light border border-brand-green/30 flex items-center justify-center shrink-0">
                  <FolderGit2 className="w-3.5 h-3.5 text-brand-green" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-bold text-brand-green uppercase tracking-wide">
                    Milestone 01 • Eng Squad
                  </span>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-espresso leading-snug">
                    Core Auth & RBAC Engine
                  </h4>
                </div>
              </div>
              <span className="text-xs font-heading font-extrabold text-espresso shrink-0">
                {milestone1Progress}%
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-surface-tier1 rounded-full h-1.5 overflow-hidden border border-brand-peach/30 my-2.5">
              <motion.div
                className="h-full bg-brand-green rounded-full"
                animate={{ width: `${milestone1Progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] font-body text-terracotta-muted">
              <span className="flex items-center gap-1 text-brand-green font-medium">
                <CheckCircle2 className="w-3 h-3 text-brand-green" />
                {taskCompleted ? 'All Tasks Complete' : '3 of 4 Tasks Done'}
              </span>
              <span>Lead: Alex M.</span>
            </div>
          </motion.div>

          {/* Milestone 2: SOC2 Readiness (Attention Needed / Identified Risk) */}
          <motion.div
            animate={{
              opacity: 1,
              scale: activeFilter === 'attention' ? 1.02 : 1,
            }}
            className={`rounded-xl sm:rounded-2xl p-3.5 sm:p-4 border transition-all ${
              activeFilter === 'attention'
                ? 'bg-white border-brand-orange ring-2 ring-brand-orange/20 shadow-glow-orange/20'
                : 'bg-white border-brand-peach shadow-satin-card'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-bold text-brand-orange uppercase tracking-wide">
                    Milestone 02 • SecOps
                  </span>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-espresso leading-snug">
                    SOC2 Compliance Audit
                  </h4>
                </div>
              </div>
              <span className="text-xs font-heading font-extrabold text-espresso shrink-0">
                64%
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-surface-tier1 rounded-full h-1.5 overflow-hidden border border-brand-peach/30 my-2.5">
              <div className="h-full bg-brand-yellow rounded-full w-[64%]" />
            </div>

            <div className="flex items-center justify-between text-[11px] font-body">
              <span className="inline-flex items-center gap-1 font-heading font-semibold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full border border-brand-orange/30 text-[10px]">
                <AlertTriangle className="w-2.5 h-2.5 text-brand-orange" />
                1 Blocker Flagged
              </span>
              <span className="text-terracotta-muted">Lead: Marcus T.</span>
            </div>
          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* SVG SECONDARY CONNECTOR CONDUIT                              */}
        {/* ============================================================ */}
        <div className="relative w-full h-6 sm:h-7 flex items-center justify-center overflow-visible">
          <svg
            className="w-full h-full stroke-brand-peach"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 400 28"
          >
            <path
              d="M 100 0 L 100 14 C 100 24, 200 16, 200 28"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="opacity-70"
            />
            <path
              d="M 300 0 L 300 14 C 300 24, 200 16, 200 28"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="opacity-70"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach text-[9px] font-heading font-bold uppercase text-terracotta-muted">
            Ground-Level Execution
          </span>
        </div>

        {/* ============================================================ */}
        {/* TIER 3: TASKS & TEAM ASSIGNEES (Actionable Daily Work)       */}
        {/* ============================================================ */}
        <div className="space-y-2">
          
          {/* Task 1: Interactive Execution Task (Visitor can toggle to simulate) */}
          <motion.div
            animate={{
              opacity: activeFilter === 'attention' ? 0.45 : 1,
            }}
            onClick={() => setTaskCompleted(!taskCompleted)}
            className={`group rounded-xl p-3 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
              taskCompleted
                ? 'bg-brand-green-light/60 border-brand-green/40 shadow-warm-2xs'
                : 'bg-white hover:bg-brand-orange-light/20 border-brand-peach/80 hover:border-brand-orange/60 shadow-warm-2xs'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Checkbox circle */}
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                  taskCompleted
                    ? 'bg-brand-green text-white border-brand-green shadow-glow-green/30'
                    : 'border-brand-peach bg-white group-hover:border-brand-orange text-transparent'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 fill-current" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-heading font-bold text-xs text-espresso truncate">
                    Implement Multi-Region Token Revocation
                  </span>
                  <span className="text-[10px] font-heading font-semibold text-terracotta-muted bg-surface-tier1 px-1.5 py-0.2 rounded border border-brand-peach/40">
                    High Weight
                  </span>
                </div>
                <p className="text-[11px] font-body text-terracotta-muted truncate">
                  {taskCompleted
                    ? '✓ Task verified & merged • Propagated up to Goal'
                    : 'Click to test real-time rollup into Milestone 01'}
                </p>
              </div>
            </div>

            {/* Assignee Avatar & Badge */}
            <div className="flex items-center gap-2 shrink-0">
              <div
                className="w-6 h-6 rounded-full bg-champagne border border-brand-peach text-[10px] font-heading font-bold text-espresso flex items-center justify-center"
                title="Assigned to Alex Miller"
              >
                AM
              </div>
              <span
                className={`text-[10px] font-heading font-bold px-2 py-0.5 rounded-full border transition-all ${
                  taskCompleted
                    ? 'bg-brand-green-light text-brand-green border-brand-green/30'
                    : 'bg-surface-tier1 text-terracotta-muted border-brand-peach group-hover:text-brand-orange group-hover:border-brand-orange/30'
                }`}
              >
                {taskCompleted ? 'Done' : 'Click to Complete'}
              </span>
            </div>
          </motion.div>

          {/* Task 2: Blocked / Attention Task (Risk Management) */}
          <motion.div
            animate={{
              opacity: 1,
              scale: activeFilter === 'attention' ? 1.01 : 1,
            }}
            className={`rounded-xl p-3 border transition-all flex items-center justify-between gap-3 ${
              activeFilter === 'attention'
                ? 'bg-white border-brand-orange shadow-warm-sm'
                : 'bg-white border-brand-peach/80 shadow-warm-2xs'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-5 h-5 rounded-full bg-brand-yellow-light border border-brand-yellow/60 flex items-center justify-center shrink-0">
                <Clock className="w-3 h-3 text-espresso" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-heading font-bold text-xs text-espresso truncate">
                    Vendor Penetration Test Remediation
                  </span>
                  <span className="text-[10px] font-heading font-bold text-brand-orange bg-brand-orange-light px-1.5 py-0.2 rounded border border-brand-orange/30">
                    Needs Attention
                  </span>
                </div>
                <p className="text-[11px] font-body text-terracotta-muted truncate">
                  2 days overdue • Dependency: External audit review
                </p>
              </div>
            </div>

            {/* Assignee Avatar */}
            <div className="flex items-center gap-2 shrink-0">
              <div
                className="w-6 h-6 rounded-full bg-brand-peach-light border border-brand-peach text-[10px] font-heading font-bold text-espresso flex items-center justify-center"
                title="Assigned to Marcus Thorne"
              >
                MT
              </div>
              <span className="text-[10px] font-heading font-bold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full border border-brand-orange/30">
                Overdue
              </span>
            </div>
          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* FOOTER: Executive Reassurance Strip                         */}
        {/* ============================================================ */}
        <div className="mt-4 pt-3 border-t border-brand-peach/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-body text-terracotta-muted">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span className="font-heading font-medium text-espresso">
              Automatic Progress Rollup
            </span>
            <span className="text-terracotta-muted hidden sm:inline">•</span>
            <span className="hidden sm:inline">No manual status meetings</span>
          </div>

          <div className="flex items-center gap-1.5 text-brand-orange font-heading font-bold text-[11px]">
            <span>18 team tasks roll up to 1 strategic goal</span>
          </div>
        </div>

      </div>
    </div>
  );
};
