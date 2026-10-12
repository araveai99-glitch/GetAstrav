import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowUp,
  FolderGit2,
  Sparkles,
  RotateCcw,
  Zap,
  Check,
} from 'lucide-react';

export const FounderOSHeroVisual: React.FC = () => {
  // Interactive state: Visitor can toggle Task 1 to see the Strategy-to-Execution rollup
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(false);
  const [pulseActive, setPulseActive] = useState<boolean>(false);

  const handleToggleTask = () => {
    const nextState = !isTaskCompleted;
    setIsTaskCompleted(nextState);
    if (nextState) {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 1600);
    }
  };

  // Dynamic progress values derived from execution state
  const milestone1Progress = isTaskCompleted ? 100 : 80;
  const companyGoalProgress = isTaskCompleted ? 80 : 72;

  return (
    <div className="relative w-full max-w-[680px] mx-auto select-none">
      
      {/* Restrained Warm Ambient Light Fields (Low-contrast background) */}
      <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-brand-peach/30 via-brand-yellow-light/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gradient-to-tr from-brand-orange-light/40 via-brand-peach/20 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Main Strategy-to-Execution Canvas */}
      <div className="relative rounded-3xl bg-white/95 border border-brand-peach shadow-warm-lg p-5 sm:p-7 backdrop-blur-sm">
        
        {/* Subtle Visual Header: Context & Interactive Simulation Pill */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-brand-peach/40 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-terracotta-muted">
              FounderOS • Strategy to Execution
            </span>
          </div>

          <button
            onClick={handleToggleTask}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-heading font-bold transition-all cursor-pointer ${
              isTaskCompleted
                ? 'bg-brand-green-light text-brand-green border border-brand-green/40 hover:bg-brand-green/10'
                : 'bg-brand-orange-light text-brand-orange border border-brand-orange/40 hover:bg-brand-orange hover:text-white shadow-warm-2xs'
            }`}
          >
            {isTaskCompleted ? (
              <>
                <RotateCcw className="w-3 h-3" />
                <span>Reset Simulation</span>
              </>
            ) : (
              <>
                <Zap className="w-3 h-3 text-brand-orange hover:text-white" />
                <span>Click to Complete Task</span>
              </>
            )}
          </button>
        </div>

        {/* Real-time Rollup Notification Toast */}
        <AnimatePresence>
          {isTaskCompleted && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="bg-brand-green-light border border-brand-green/30 rounded-xl px-3.5 py-2 flex items-center justify-between text-xs text-brand-green font-heading font-bold"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-green shrink-0 animate-spin" />
                <span>
                  Rollup: Task finished &rarr; Milestone reached 100% &rarr; Goal surged to 80%!
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================ */}
        {/* LEVEL 1 (TOP) — THE COMPANY GOAL                            */}
        {/* ============================================================ */}
        <div className="mt-5">
          <div className="rounded-2xl bg-white border border-brand-peach/90 p-4 sm:p-5 shadow-satin-card transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-heading font-extrabold uppercase tracking-wider text-brand-orange">
                      Company Goal
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-green-light text-brand-green border border-brand-green/30">
                      On Track
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-espresso leading-snug">
                    Launch Product V2
                  </h3>
                </div>
              </div>

              {/* Goal Progress Percentage */}
              <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-brand-peach/40">
                <span className="text-[11px] font-body text-terracotta-muted">
                  Overall Progress
                </span>
                <div className="flex items-baseline gap-1">
                  <motion.span
                    key={companyGoalProgress}
                    initial={{ scale: 1.15, color: '#f15e1c' }}
                    animate={{ scale: 1, color: '#2a1a14' }}
                    className="text-xl sm:text-2xl font-heading font-extrabold"
                  >
                    {companyGoalProgress}%
                  </motion.span>
                  {isTaskCompleted && (
                    <span className="text-xs font-heading font-bold text-brand-green">
                      (+8%)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Smooth Progress Bar */}
            <div className="w-full bg-surface-tier1 rounded-full h-2.5 overflow-hidden border border-brand-peach/40 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-green via-brand-green to-brand-green-hover rounded-full"
                initial={{ width: '72%' }}
                animate={{ width: `${companyGoalProgress}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>

            <div className="flex items-center justify-between pt-2 text-[11px] text-terracotta-muted font-body">
              <span>Connected to 2 Active Milestones</span>
              <span className="font-medium text-espresso">Target: Q3 Release</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CONNECTOR PATHS: Level 1 (Goal) -> Level 2 (Milestones)      */}
        {/* ============================================================ */}
        <div className="relative w-full h-9 flex items-center justify-center overflow-visible">
          <svg
            className="w-full h-full stroke-brand-peach"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 400 36"
          >
            {/* Left Conduit to Milestone 1 */}
            <path
              d="M 200 0 L 200 12 C 200 24, 100 16, 100 36"
              strokeWidth="2"
              className={pulseActive ? 'stroke-brand-green' : 'stroke-brand-peach'}
            />
            {/* Right Conduit to Milestone 2 */}
            <path
              d="M 200 0 L 200 12 C 200 24, 300 16, 300 36"
              strokeWidth="2"
              className="stroke-brand-peach"
            />
          </svg>

          {/* Upward Pulse Particle when task completes */}
          {pulseActive && (
            <motion.div
              initial={{ y: 16, opacity: 1 }}
              animate={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute w-3 h-3 rounded-full bg-brand-green shadow-glow-green"
            />
          )}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach text-[9px] font-heading font-extrabold uppercase text-terracotta-muted flex items-center gap-1 shadow-warm-2xs">
            <ArrowUp className="w-2.5 h-2.5 text-brand-green" />
            <span>Rolls Up to Goal</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* LEVEL 2 (MIDDLE) — PROJECTS & MILESTONES (2 Workstreams)     */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          
          {/* Milestone 1: Platform Architecture (On Track / Target of Task 1) */}
          <div
            className={`rounded-2xl p-4 border transition-all ${
              isTaskCompleted
                ? 'bg-brand-green-light/40 border-brand-green/40 shadow-glow-green/10'
                : 'bg-white border-brand-peach/90 shadow-satin-card'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-green-light border border-brand-green/30 flex items-center justify-center shrink-0">
                  <FolderGit2 className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-extrabold text-brand-green uppercase tracking-wide">
                    Milestone 01 • Eng Squad
                  </span>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-espresso leading-snug">
                    Core Platform & Auth
                  </h4>
                </div>
              </div>
              
              <div className="text-right shrink-0">
                <motion.span
                  key={milestone1Progress}
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  className="text-xs sm:text-sm font-heading font-extrabold text-espresso"
                >
                  {milestone1Progress}%
                </motion.span>
              </div>
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
              <span className="flex items-center gap-1 text-brand-green font-semibold">
                <CheckCircle2 className="w-3 h-3 text-brand-green" />
                {isTaskCompleted ? 'All Tasks Done' : '1 Task In Progress'}
              </span>
              <span>Owner: Alex M.</span>
            </div>
          </div>

          {/* Milestone 2: Governance & Security (Needs Attention / Identifies Risk) */}
          <div className="rounded-2xl p-4 bg-white border border-brand-peach/90 shadow-satin-card">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-extrabold text-brand-orange uppercase tracking-wide">
                    Milestone 02 • SecOps
                  </span>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-espresso leading-snug">
                    Security & SOC2 Gate
                  </h4>
                </div>
              </div>
              
              <span className="text-xs sm:text-sm font-heading font-extrabold text-espresso shrink-0">
                50%
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-surface-tier1 rounded-full h-1.5 overflow-hidden border border-brand-peach/30 my-2.5">
              <div className="h-full bg-brand-yellow rounded-full w-[50%]" />
            </div>

            <div className="flex items-center justify-between text-[11px] font-body">
              <span className="inline-flex items-center gap-1 font-heading font-semibold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full border border-brand-orange/30 text-[10px]">
                <Clock className="w-2.5 h-2.5 text-brand-orange" />
                1 Task Overdue
              </span>
              <span className="text-terracotta-muted">Owner: Marcus T.</span>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* CONNECTOR PATHS: Level 2 (Milestones) -> Level 3 (Tasks)    */}
        {/* ============================================================ */}
        <div className="relative w-full h-8 flex items-center justify-center overflow-visible">
          <svg
            className="w-full h-full stroke-brand-peach"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 400 32"
          >
            {/* Line from Milestone 1 to Task 1 & Task 2 */}
            <path
              d="M 100 0 L 100 16 C 100 24, 180 20, 200 32"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className={pulseActive ? 'stroke-brand-green' : 'stroke-brand-peach'}
            />
            {/* Line from Milestone 2 to Task 3 */}
            <path
              d="M 300 0 L 300 16 C 300 24, 220 20, 200 32"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="stroke-brand-peach"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach text-[9px] font-heading font-bold uppercase text-terracotta-muted">
            Individual Team Tasks
          </span>
        </div>

        {/* ============================================================ */}
        {/* LEVEL 3 (BOTTOM) — TEAM TASKS (Granular Execution)          */}
        {/* ============================================================ */}
        <div className="space-y-2.5">
          
          {/* Task 1: Interactive Focal Task (Clickable) */}
          <div
            onClick={handleToggleTask}
            className={`group rounded-xl p-3 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
              isTaskCompleted
                ? 'bg-brand-green-light/70 border-brand-green/40 shadow-warm-2xs'
                : 'bg-white hover:bg-brand-orange-light/20 border-brand-peach/80 hover:border-brand-orange/60 shadow-warm-2xs'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* Checkbox */}
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                  isTaskCompleted
                    ? 'bg-brand-green text-white border-brand-green shadow-glow-green/30'
                    : 'border-brand-peach bg-white group-hover:border-brand-orange text-transparent'
                }`}
              >
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-heading font-bold text-xs sm:text-sm text-espresso truncate">
                    Implement API Token Revocation
                  </span>
                  <span className="text-[10px] font-heading font-semibold text-terracotta-muted bg-surface-tier1 px-1.5 py-0.2 rounded border border-brand-peach/40">
                    High Priority
                  </span>
                </div>
                <p className="text-[11px] font-body text-terracotta-muted truncate">
                  {isTaskCompleted
                    ? '✓ Completed by Alex M. • Rolls up to Milestone 01'
                    : 'Assigned to Alex M. • Click checkbox to simulate completion'}
                </p>
              </div>
            </div>

            {/* Status Pill */}
            <span
              className={`text-[10px] font-heading font-bold px-2.5 py-1 rounded-full border transition-all shrink-0 ${
                isTaskCompleted
                  ? 'bg-brand-green text-white border-brand-green'
                  : 'bg-surface-tier1 text-terracotta group-hover:text-brand-orange group-hover:border-brand-orange/40 border-brand-peach'
              }`}
            >
              {isTaskCompleted ? 'Completed' : 'In Progress'}
            </span>
          </div>

          {/* Task 2: Active In-Progress Task */}
          <div className="rounded-xl p-3 bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-5 h-5 rounded-md bg-brand-green-light border border-brand-green/30 flex items-center justify-center shrink-0 text-brand-green">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>

              <div className="min-w-0">
                <span className="font-heading font-bold text-xs sm:text-sm text-espresso truncate block">
                  Multi-Tenant Data Encryption
                </span>
                <p className="text-[11px] font-body text-terracotta-muted truncate">
                  Completed by Priya R. • Rolled up to Milestone 01
                </p>
              </div>
            </div>

            <span className="text-[10px] font-heading font-bold px-2.5 py-1 rounded-full bg-brand-green-light text-brand-green border border-brand-green/30 shrink-0">
              Completed
            </span>
          </div>

          {/* Task 3: Overdue Task (Highlights FounderOS Risk Visibility) */}
          <div className="rounded-xl p-3 bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-5 h-5 rounded-md bg-brand-orange-light border border-brand-orange/40 flex items-center justify-center shrink-0 text-brand-orange">
                <Clock className="w-3.5 h-3.5" />
              </div>

              <div className="min-w-0">
                <span className="font-heading font-bold text-xs sm:text-sm text-espresso truncate block">
                  Penetration Test Sign-off
                </span>
                <p className="text-[11px] font-body text-terracotta-muted truncate">
                  Assigned to Marcus T. • Needs attention for Milestone 02
                </p>
              </div>
            </div>

            <span className="text-[10px] font-heading font-bold px-2.5 py-1 rounded-full bg-brand-orange-light text-brand-orange border border-brand-orange/40 shrink-0">
              Overdue (2d)
            </span>
          </div>

        </div>

        {/* ============================================================ */}
        {/* SUMMARY STRIP: Reassurance & Understanding                   */}
        {/* ============================================================ */}
        <div className="mt-4 pt-3.5 border-t border-brand-peach/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-body text-terracotta-muted">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
            <span className="font-heading font-semibold text-espresso">
              Automated Progress Rollup:
            </span>
            <span className="hidden sm:inline">Individual work directly drives company goals</span>
          </div>

          <span className="text-brand-orange font-heading font-bold text-[11px]">
            Zero status meetings required
          </span>
        </div>

      </div>
    </div>
  );
};
