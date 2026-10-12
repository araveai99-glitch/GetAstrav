import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FolderGit2,
  Sparkles,
  RotateCcw,
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const FounderOSHeroVisual: React.FC = () => {
  // Interactive state
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<'goal' | 'm1' | 'm2' | 't1' | 't2' | 't3'>('t1');
  const [pulseActive, setPulseActive] = useState<boolean>(false);

  const toggleTask1 = () => {
    const next = !isTaskCompleted;
    setIsTaskCompleted(next);
    setSelectedNode('t1');
    if (next) {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 1400);
    }
  };

  const goalProgress = isTaskCompleted ? 80 : 72;
  const m1Progress = isTaskCompleted ? 100 : 80;

  // Stagger animation timing variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.1 },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative w-full max-w-[700px] mx-auto select-none py-2 sm:py-4">
      
      {/* Background Soft Ambient Light Fields */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-brand-peach/30 via-brand-yellow-light/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-4 right-1/4 w-64 h-64 bg-gradient-to-tl from-brand-orange-light/35 via-brand-peach/15 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Main Interactive Stage */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full"
      >
        
        {/* Story Breadcrumb & Interactive Controller Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 px-1 sm:px-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-brand-peach shadow-warm-2xs text-xs font-heading font-semibold text-espresso">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span>Interactive Workflow Story</span>
            <span className="text-terracotta-muted">•</span>
            <span className="text-brand-orange font-bold">Goal → Milestones → Tasks</span>
          </div>

          {/* Interactive Trigger Button */}
          <button
            onClick={toggleTask1}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold transition-all shadow-warm-sm cursor-pointer ${
              isTaskCompleted
                ? 'bg-brand-green-light text-brand-green border border-brand-green/40 hover:bg-brand-green/10'
                : 'bg-brand-orange text-white hover:bg-brand-orange-hover shadow-glow-orange hover:-translate-y-0.5'
            }`}
          >
            {isTaskCompleted ? (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Workflow</span>
              </>
            ) : (
              <>
                <Zap className="w-3.5 h-3.5" />
                <span>Simulate Task Completion</span>
              </>
            )}
          </button>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP & TABLET CONNECTED SVG WORKFLOW CANVAS (>= 640px)    */}
        {/* ============================================================ */}
        <div className="hidden sm:block relative w-full h-[470px]">
          
          {/* Animated SVG Connector Conduits */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 680 470"
            fill="none"
          >
            <defs>
              <linearGradient id="pathGradientGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2e936f" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2e936f" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="pathGradientPeach" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f7d7b0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fab60a" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Path: Goal (340, 75) -> Milestone 1 (180, 205) */}
            <motion.path
              d="M 340 75 C 340 140, 180 140, 180 205"
              stroke={isTaskCompleted ? 'url(#pathGradientGreen)' : '#f7d7b0'}
              strokeWidth={isTaskCompleted ? '3' : '2'}
              strokeDasharray={isTaskCompleted ? 'none' : '4 4'}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Path: Goal (340, 75) -> Milestone 2 (500, 205) */}
            <motion.path
              d="M 340 75 C 340 140, 500 140, 500 205"
              stroke="url(#pathGradientPeach)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Path: Milestone 1 (180, 255) -> Task 1 (110, 375) */}
            <motion.path
              d="M 180 255 C 180 315, 110 315, 110 375"
              stroke={isTaskCompleted ? '#2e936f' : '#f7d7b0'}
              strokeWidth={isTaskCompleted ? '2.5' : '1.75'}
              strokeDasharray={isTaskCompleted ? 'none' : '3 3'}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Path: Milestone 1 (180, 255) -> Task 2 (250, 375) */}
            <motion.path
              d="M 180 255 C 180 315, 250 315, 250 375"
              stroke="#2e936f"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Path: Milestone 2 (500, 255) -> Task 3 (500, 375) */}
            <motion.path
              d="M 500 255 C 500 315, 500 315, 500 375"
              stroke="#f7d7b0"
              strokeWidth="1.75"
              strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Animated Flowing Pulse Bead traveling up from Task 1 -> M1 -> Goal */}
            {pulseActive && (
              <>
                <motion.circle
                  r="5"
                  fill="#2e936f"
                  initial={{ cx: 110, cy: 375, opacity: 1 }}
                  animate={{ cx: 180, cy: 205, opacity: 0.8 }}
                  transition={{ duration: 0.6, ease: 'easeIn' }}
                />
                <motion.circle
                  r="6"
                  fill="#2e936f"
                  initial={{ cx: 180, cy: 205, opacity: 0 }}
                  animate={{ cx: 340, cy: 75, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
                />
              </>
            )}
          </svg>

          {/* ========================================================== */}
          {/* STAGE A: THE COMPANY GOAL ANCHOR (TOP CENTER)              */}
          {/* ========================================================== */}
          <motion.div
            variants={nodeVariants}
            onClick={() => setSelectedNode('goal')}
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[340px] rounded-2xl p-4 bg-white border cursor-pointer transition-all ${
              selectedNode === 'goal'
                ? 'border-brand-orange shadow-glow-orange ring-2 ring-brand-orange/20'
                : 'border-brand-peach shadow-warm-md hover:border-brand-orange/50'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-xl bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-brand-orange" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-green border-2 border-white" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-brand-orange block">
                    Strategic Goal
                  </span>
                  <h3 className="font-heading font-extrabold text-sm sm:text-base text-espresso leading-tight">
                    Launch Product V2
                  </h3>
                </div>
              </div>

              {/* Progress metric */}
              <div className="text-right shrink-0">
                <span className="text-xl font-heading font-extrabold text-espresso">
                  {goalProgress}%
                </span>
                <span className="block text-[10px] font-heading font-bold text-brand-green">
                  {isTaskCompleted ? '(+8% Rollup)' : 'On Track'}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-surface-tier1 rounded-full h-2 overflow-hidden border border-brand-peach/40 mt-3">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-green to-brand-green-hover rounded-full"
                animate={{ width: `${goalProgress}%` }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* STAGE B: WORK BRANCHES OUT (MIDDLE LEVEL: 2 MILESTONES)    */}
          {/* ========================================================== */}
          
          {/* Milestone 1: Platform Auth (Left) */}
          <motion.div
            variants={nodeVariants}
            onClick={() => setSelectedNode('m1')}
            className={`absolute top-[160px] left-[50px] w-[260px] rounded-2xl p-3.5 bg-white border cursor-pointer transition-all ${
              selectedNode === 'm1'
                ? 'border-brand-green shadow-glow-green/20 ring-2 ring-brand-green/20'
                : isTaskCompleted
                ? 'border-brand-green/50 bg-brand-green-light/20 shadow-warm-sm'
                : 'border-brand-peach shadow-warm-sm hover:border-brand-green/40'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-green-light border border-brand-green/30 flex items-center justify-center shrink-0">
                  <FolderGit2 className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-extrabold uppercase text-brand-green block">
                    Milestone 01
                  </span>
                  <h4 className="font-heading font-bold text-xs text-espresso">
                    Core Platform & Auth
                  </h4>
                </div>
              </div>
              <span className="text-xs font-heading font-extrabold text-espresso">
                {m1Progress}%
              </span>
            </div>

            <div className="w-full bg-surface-tier1 rounded-full h-1.5 overflow-hidden border border-brand-peach/30 mt-2.5">
              <motion.div
                className="h-full bg-brand-green rounded-full"
                animate={{ width: `${m1Progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] font-body text-terracotta-muted mt-2">
              <span className="text-brand-green font-semibold">
                {isTaskCompleted ? 'All Tasks Done' : '1 Task Pending'}
              </span>
              <span>Squad Lead: Alex M.</span>
            </div>
          </motion.div>

          {/* Milestone 2: SOC2 Readiness (Right) */}
          <motion.div
            variants={nodeVariants}
            onClick={() => setSelectedNode('m2')}
            className={`absolute top-[160px] right-[40px] w-[260px] rounded-2xl p-3.5 bg-white border cursor-pointer transition-all ${
              selectedNode === 'm2'
                ? 'border-brand-orange shadow-glow-orange ring-2 ring-brand-orange/20'
                : 'border-brand-peach shadow-warm-sm hover:border-brand-orange/40'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-extrabold uppercase text-brand-orange block">
                    Milestone 02
                  </span>
                  <h4 className="font-heading font-bold text-xs text-espresso">
                    Security & SOC2 Gate
                  </h4>
                </div>
              </div>
              <span className="text-xs font-heading font-extrabold text-espresso">
                50%
              </span>
            </div>

            <div className="w-full bg-surface-tier1 rounded-full h-1.5 overflow-hidden border border-brand-peach/30 mt-2.5">
              <div className="h-full bg-brand-yellow rounded-full w-1/2" />
            </div>

            <div className="flex items-center justify-between text-[10px] font-body mt-2">
              <span className="text-brand-orange font-semibold">1 Overdue Blocker</span>
              <span className="text-terracotta-muted">Lead: Marcus T.</span>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* STAGE C: TASKS BRANCH OUT (BOTTOM ROW)                     */}
          {/* ========================================================== */}
          
          {/* Task 1: API Token Revocation (Interactive Trigger) */}
          <motion.div
            variants={nodeVariants}
            onClick={toggleTask1}
            className={`absolute bottom-0 left-[10px] w-[200px] rounded-xl p-3 border cursor-pointer transition-all ${
              selectedNode === 't1'
                ? 'border-brand-green shadow-glow-green/20 ring-2 ring-brand-green/20'
                : isTaskCompleted
                ? 'bg-brand-green-light/40 border-brand-green/40 shadow-warm-2xs'
                : 'bg-white border-brand-peach/90 shadow-warm-2xs hover:border-brand-orange'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div
                className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border transition-all ${
                  isTaskCompleted
                    ? 'bg-brand-green text-white border-brand-green'
                    : 'border-brand-peach bg-white text-transparent group-hover:border-brand-orange'
                }`}
              >
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-heading font-bold text-espresso block truncate">
                  API Token Revocation
                </span>
                <span className="text-[10px] text-terracotta-muted">
                  Alex M. • {isTaskCompleted ? 'Done' : 'Click to finish'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Task 2: Data Encryption (Completed) */}
          <motion.div
            variants={nodeVariants}
            onClick={() => setSelectedNode('t2')}
            className={`absolute bottom-0 left-[225px] w-[190px] rounded-xl p-3 bg-white border cursor-pointer transition-all ${
              selectedNode === 't2'
                ? 'border-brand-green shadow-glow-green/20 ring-2 ring-brand-green/20'
                : 'border-brand-peach/90 shadow-warm-2xs hover:border-brand-green/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-brand-green-light border border-brand-green/30 flex items-center justify-center shrink-0 text-brand-green">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-heading font-bold text-espresso block truncate">
                  Data Encryption
                </span>
                <span className="text-[10px] text-brand-green font-semibold">
                  Priya R. • Completed
                </span>
              </div>
            </div>
          </motion.div>

          {/* Task 3: Penetration Test Sign-off (Overdue / Risk) */}
          <motion.div
            variants={nodeVariants}
            onClick={() => setSelectedNode('t3')}
            className={`absolute bottom-0 right-[70px] w-[210px] rounded-xl p-3 bg-white border cursor-pointer transition-all ${
              selectedNode === 't3'
                ? 'border-brand-orange shadow-glow-orange ring-2 ring-brand-orange/20'
                : 'border-brand-peach/90 shadow-warm-2xs hover:border-brand-orange/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-brand-orange-light border border-brand-orange/40 flex items-center justify-center shrink-0 text-brand-orange">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-heading font-bold text-espresso block truncate">
                  Pen Test Sign-off
                </span>
                <span className="text-[10px] text-brand-orange font-semibold">
                  Marcus T. • Overdue (2d)
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ============================================================ */}
        {/* MOBILE WORKFLOW CASCADE (< 640px)                            */}
        {/* ============================================================ */}
        <div className="sm:hidden space-y-3">
          
          {/* 1. Goal Node */}
          <div className="rounded-2xl p-4 bg-white border border-brand-peach shadow-warm-sm">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center shrink-0">
                  <Target className="w-4.5 h-4.5 text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-extrabold uppercase text-brand-orange">
                    Company Goal
                  </span>
                  <h3 className="font-heading font-bold text-sm text-espresso">
                    Launch Product V2
                  </h3>
                </div>
              </div>
              <span className="text-lg font-heading font-extrabold text-espresso">
                {goalProgress}%
              </span>
            </div>
            <div className="w-full bg-surface-tier1 rounded-full h-2 overflow-hidden border border-brand-peach/40 mt-3">
              <div
                className="h-full bg-brand-green rounded-full transition-all duration-500"
                style={{ width: `${goalProgress}%` }}
              />
            </div>
          </div>

          {/* Vertical Connector Indicator */}
          <div className="flex justify-center my-1">
            <div className="w-0.5 h-5 bg-brand-peach relative">
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-brand-peach transform rotate-45" />
            </div>
          </div>

          {/* 2. Milestones Stack */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl p-3 bg-white border border-brand-peach shadow-warm-2xs">
              <span className="text-[9px] font-heading font-bold text-brand-green uppercase">Milestone 01</span>
              <h4 className="font-heading font-bold text-xs text-espresso leading-snug">Platform Auth</h4>
              <span className="text-xs font-heading font-extrabold text-espresso mt-1 block">{m1Progress}%</span>
            </div>

            <div className="rounded-xl p-3 bg-white border border-brand-peach shadow-warm-2xs">
              <span className="text-[9px] font-heading font-bold text-brand-orange uppercase">Milestone 02</span>
              <h4 className="font-heading font-bold text-xs text-espresso leading-snug">SOC2 Gate</h4>
              <span className="text-xs font-heading font-extrabold text-brand-orange mt-1 block">50% (At Risk)</span>
            </div>
          </div>

          {/* Vertical Connector Indicator */}
          <div className="flex justify-center my-1">
            <div className="w-0.5 h-5 bg-brand-peach relative">
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-r-2 border-b-2 border-brand-peach transform rotate-45" />
            </div>
          </div>

          {/* 3. Tasks Stack */}
          <div className="space-y-2">
            <div
              onClick={toggleTask1}
              className={`rounded-xl p-2.5 border flex items-center justify-between cursor-pointer ${
                isTaskCompleted ? 'bg-brand-green-light/40 border-brand-green/40' : 'bg-white border-brand-peach'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className={`w-4.5 h-4.5 rounded flex items-center justify-center border ${
                  isTaskCompleted ? 'bg-brand-green text-white border-brand-green' : 'border-brand-peach bg-white'
                }`}>
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs font-heading font-bold text-espresso">API Token Revocation</span>
              </div>
              <span className="text-[10px] font-heading font-bold text-brand-green">
                {isTaskCompleted ? 'Done' : 'Tap to Complete'}
              </span>
            </div>

            <div className="rounded-xl p-2.5 bg-white border border-brand-peach flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-green" />
                <span className="text-xs font-heading font-bold text-espresso">Data Encryption</span>
              </div>
              <span className="text-[10px] text-brand-green font-semibold">Done</span>
            </div>

            <div className="rounded-xl p-2.5 bg-white border border-brand-peach flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-orange" />
                <span className="text-xs font-heading font-bold text-espresso">Pen Test Sign-off</span>
              </div>
              <span className="text-[10px] font-heading font-bold text-brand-orange">Overdue (2d)</span>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* INTERACTION CONTEXT CARD: Explains the exact relationship    */}
        {/* ============================================================ */}
        <div className="mt-5 p-3 sm:p-4 rounded-2xl bg-surface-tier1 border border-brand-peach/70 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-orange shrink-0" />
            <span className="font-heading font-semibold text-espresso">
              {isTaskCompleted
                ? '✓ Execution Impact: "API Token Revocation" completed → Milestone 01 hit 100% → Company Goal updated to 80%!'
                : 'Click "API Token Revocation" or the button above to see how daily completion rolls up into strategy in real time.'}
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-heading font-bold text-brand-orange shrink-0">
            Real-Time Rollup
          </span>
        </div>

      </motion.div>
    </div>
  );
};
