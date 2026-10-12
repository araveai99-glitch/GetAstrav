import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Users,
  ShieldCheck,
  FolderGit2,
  Zap,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Activity,
  Layers,
} from 'lucide-react';

export const FounderOSHeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Interactive state
  const [activeMode, setActiveMode] = useState<'all' | 'attention'>('all');
  const [taskSimulated, setTaskSimulated] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Mouse parallax tracking for subtle 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Dynamic progress values
  const goalProgress = taskSimulated ? 88 : 82;
  const milestone1Progress = taskSimulated ? 100 : 92;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[740px] mx-auto select-none py-4 sm:py-6"
      style={{ perspective: 1200 }}
    >
      {/* ============================================================ */}
      {/* 1. ATMOSPHERIC LIGHT FIELDS & ORBITAL GEOMETRY BACKDROP      */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
        {/* Soft radial golden/peach ambient glow behind central nucleus */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-brand-peach/30 via-brand-yellow-light/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-10 w-[320px] h-[320px] bg-gradient-to-bl from-brand-orange-light/40 via-brand-peach/20 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-gradient-to-tr from-brand-green-light/40 via-surface-ambient to-transparent rounded-full blur-2xl" />

        {/* Delicate architectural alignment rings */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] opacity-40"
          viewBox="0 0 680 680"
          fill="none"
        >
          <circle
            cx="340"
            cy="340"
            r="320"
            stroke="#f7d7b0"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <circle
            cx="340"
            cy="340"
            r="240"
            stroke="#f7d7b0"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle
            cx="340"
            cy="340"
            r="160"
            stroke="#f7d7b0"
            strokeWidth="1.25"
            strokeOpacity="0.8"
          />
          {/* Subtle crosshair alignment guides */}
          <line x1="340" y1="10" x2="340" y2="70" stroke="#f7d7b0" strokeWidth="1" />
          <line x1="340" y1="610" x2="340" y2="670" stroke="#f7d7b0" strokeWidth="1" />
          <line x1="10" y1="340" x2="70" y2="340" stroke="#f7d7b0" strokeWidth="1" />
          <line x1="610" y1="340" x2="670" y2="340" stroke="#f7d7b0" strokeWidth="1" />
        </svg>
      </div>

      {/* ============================================================ */}
      {/* 2. PERSPECTIVE STAGE CONTAINER                               */}
      {/* ============================================================ */}
      <motion.div
        animate={{
          rotateX: isHovering ? -mousePos.y * 10 : 0,
          rotateY: isHovering ? mousePos.x * 12 : 0,
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 140 }}
        className="relative w-full transition-transform duration-200"
        style={{ transformStyle: 'preserve-3d' }}
      >

        {/* Top Control Header: Perspective Toolbar */}
        <div className="flex items-center justify-between px-2 sm:px-4 pb-3 sm:pb-4 border-b border-brand-peach/40">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green" />
            </span>
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-widest text-espresso">
              The Living Command Center
            </span>
          </div>

          {/* Mode pills */}
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm p-1 rounded-full border border-brand-peach/60 shadow-warm-2xs text-xs font-heading font-bold">
            <button
              onClick={() => setActiveMode('all')}
              className={`px-3 py-1 rounded-full transition-all ${
                activeMode === 'all'
                  ? 'bg-brand-orange text-white shadow-glow-orange'
                  : 'text-terracotta-muted hover:text-espresso'
              }`}
            >
              Full Orbit
            </button>
            <button
              onClick={() => setActiveMode('attention')}
              className={`px-3 py-1 rounded-full flex items-center gap-1 transition-all ${
                activeMode === 'attention'
                  ? 'bg-brand-orange text-white shadow-glow-orange'
                  : 'text-terracotta-muted hover:text-brand-orange'
              }`}
            >
              <AlertTriangle className="w-3 h-3 text-brand-yellow-light" />
              <span>Spot Risks</span>
            </button>
          </div>
        </div>

        {/* Live Rollup Banner Toast */}
        <AnimatePresence>
          {taskSimulated && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="mt-3 mx-2 sm:mx-4 bg-brand-green-light border border-brand-green/30 rounded-2xl px-4 py-2.5 flex items-center justify-between text-xs text-brand-green font-heading font-bold shadow-warm-sm"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-green shrink-0 animate-bounce" />
                <span>Live Rollup Triggered: Company Goal automatically surged to {goalProgress}%!</span>
              </div>
              <button
                onClick={() => setTaskSimulated(false)}
                className="text-[11px] font-mono underline hover:text-brand-green-hover flex items-center gap-1 shrink-0 ml-3"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================ */}
        {/* 3. THE LIVING SPATIAL CONSTELLATION                         */}
        {/* ============================================================ */}
        <div className="relative mt-4 sm:mt-6 p-2 sm:p-4 min-h-[460px] sm:min-h-[500px] flex flex-col justify-between">
          
          {/* Dynamic SVG Energy Conduits / Splines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-5 overflow-visible"
            viewBox="0 0 700 500"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="conduitGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2e936f" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#fab60a" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="conduitOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fab60a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f15e1c" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="conduitPeach" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f7d7b0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f15e1c" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Spline: Top-left Satellite Task -> Center Nucleus */}
            <path
              d="M 120 70 C 180 120, 240 180, 350 220"
              stroke="url(#conduitGreen)"
              strokeWidth="2"
              strokeDasharray="5 5"
              className="opacity-70"
            />
            {/* Spline: Milestone 01 (Upper Right) -> Center Nucleus */}
            <path
              d="M 560 110 C 480 140, 420 180, 350 220"
              stroke="url(#conduitGreen)"
              strokeWidth="2.5"
              className={taskSimulated ? 'opacity-100' : 'opacity-60'}
            />
            {/* Spline: Milestone 02 (Lower Left) -> Center Nucleus */}
            <path
              d="M 160 360 C 220 320, 280 280, 350 220"
              stroke="url(#conduitOrange)"
              strokeWidth={activeMode === 'attention' ? '3' : '2'}
              strokeDasharray={activeMode === 'attention' ? 'none' : '4 4'}
              className="opacity-80"
            />
            {/* Spline: Bottom-right Satellite Task -> Center Nucleus */}
            <path
              d="M 540 390 C 460 340, 410 280, 350 220"
              stroke="url(#conduitPeach)"
              strokeWidth="2"
              strokeDasharray="6 4"
              className="opacity-70"
            />
          </svg>

          {/* ============================================================ */}
          {/* SATELLITE TIER (TOP ROW): Floating Nodes                     */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center z-10">
            
            {/* Satellite 1: Ground Task (Alex M.) */}
            <motion.div
              animate={{
                y: [-3, 3, -3],
                opacity: activeMode === 'attention' ? 0.35 : 1,
              }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut' }}
              onClick={() => setTaskSimulated(!taskSimulated)}
              className={`sm:col-span-5 rounded-2xl p-3 border transition-all cursor-pointer backdrop-blur-md shadow-warm-sm ${
                taskSimulated
                  ? 'bg-brand-green-light/80 border-brand-green/40 shadow-glow-green/20'
                  : 'bg-white/90 hover:bg-white border-brand-peach/80 hover:border-brand-orange/60'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      taskSimulated
                        ? 'bg-brand-green text-white border-brand-green shadow-glow-green/30'
                        : 'border-brand-peach bg-white text-brand-orange'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-wide text-brand-green">
                      Task Stream • Alex M.
                    </span>
                    <h5 className="font-heading font-bold text-xs text-espresso truncate">
                      Multi-Region Token Revocation
                    </h5>
                  </div>
                </div>
                <span className="text-[10px] font-heading font-bold px-2 py-0.5 rounded-full bg-surface-tier1 text-terracotta-muted border border-brand-peach/50 shrink-0">
                  {taskSimulated ? '✓ Done' : 'Click to Rollup'}
                </span>
              </div>
            </motion.div>

            {/* Spacer */}
            <div className="hidden sm:block sm:col-span-2" />

            {/* Satellite 2: Milestone Gate 01 (Platform Squad) */}
            <motion.div
              animate={{
                y: [4, -4, 4],
                opacity: activeMode === 'attention' ? 0.4 : 1,
              }}
              transition={{ repeat: Infinity, duration: 5.4, ease: 'easeInOut' }}
              className="sm:col-span-5 rounded-2xl p-3.5 bg-white/90 backdrop-blur-md border border-brand-peach/80 shadow-warm-md"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-brand-green-light border border-brand-green/30 flex items-center justify-center shrink-0">
                    <FolderGit2 className="w-4 h-4 text-brand-green" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-brand-green">
                      Milestone • Platform Eng
                    </span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-espresso">
                      Core Auth & RBAC Engine
                    </h4>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-heading font-extrabold text-espresso">
                    {milestone1Progress}%
                  </span>
                  <div className="w-12 h-1.5 bg-surface-tier1 rounded-full overflow-hidden border border-brand-peach/40 mt-0.5">
                    <motion.div
                      className="h-full bg-brand-green rounded-full"
                      animate={{ width: `${milestone1Progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ============================================================ */}
          {/* THE STRATEGIC APEX (CENTER NUCLEUS): Focal Point             */}
          {/* ============================================================ */}
          <div className="my-6 sm:my-8 flex justify-center items-center z-20">
            <motion.div
              animate={{
                scale: isHovering ? 1.02 : 1,
                boxShadow: isHovering
                  ? '0 24px 60px -12px rgba(241, 94, 28, 0.22), 0 0 1px 1px rgba(247, 215, 176, 0.8)'
                  : '0 20px 50px -10px rgba(42, 26, 20, 0.08), 0 8px 16px -4px rgba(241, 94, 28, 0.06)',
              }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[460px] rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-white via-surface-ambient to-ivory border-2 border-brand-peach shadow-architectural backdrop-blur-xl"
            >
              {/* Outer halo accent */}
              <div className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-brand-orange text-white text-[10px] font-heading font-extrabold uppercase tracking-wider shadow-glow-orange flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-brand-yellow-light" />
                <span>Strategic Apex</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                
                {/* Left: Target & Title */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-2xl bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center shrink-0 shadow-warm-xs">
                    <Target className="w-6 h-6 text-brand-orange" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-green border-2 border-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-extrabold tracking-widest uppercase text-brand-orange">
                      Company OKR • Q3 Target
                    </span>
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-espresso leading-snug">
                      Scale Enterprise Platform v2
                    </h3>
                    <p className="text-[11px] font-body text-terracotta-muted">
                      Direct Rollup from 2 Squads • 18 Daily Tasks
                    </p>
                  </div>
                </div>

                {/* Right: Radial / Numerical Metric Gauge */}
                <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-brand-peach/40">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-terracotta-muted">
                    Execution Velocity
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-espresso">
                      {goalProgress}%
                    </span>
                    <span className="text-[11px] font-heading font-bold text-brand-green">
                      (+{taskSimulated ? '6' : '0'}%)
                    </span>
                  </div>
                </div>

              </div>

              {/* Seamless Segmented Progress Gauge */}
              <div className="mt-4 pt-3 border-t border-brand-peach/50 flex items-center justify-between gap-3">
                <div className="flex-1 bg-surface-tier1 rounded-full h-2.5 overflow-hidden border border-brand-peach/50 relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-brand-green via-brand-yellow to-brand-orange rounded-full"
                    animate={{ width: `${goalProgress}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-[11px] font-heading font-bold text-espresso shrink-0">
                  Target: Sept 30
                </span>
              </div>

            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* SATELLITE TIER (BOTTOM ROW): Floating Risk & Task Nodes      */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center z-10">
            
            {/* Satellite 3: Milestone Gate 02 (Security & Risk / Restrained Risk Indicator) */}
            <motion.div
              animate={{
                y: [-4, 4, -4],
                scale: activeMode === 'attention' ? 1.03 : 1,
              }}
              transition={{ repeat: Infinity, duration: 5.2, ease: 'easeInOut' }}
              className={`sm:col-span-6 rounded-2xl p-3.5 backdrop-blur-md transition-all ${
                activeMode === 'attention'
                  ? 'bg-white border-2 border-brand-orange shadow-glow-orange/30 ring-4 ring-brand-orange/10'
                  : 'bg-white/90 border border-brand-peach/80 shadow-warm-md'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xl bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-brand-orange">
                      Milestone • SecOps
                    </span>
                    <h4 className="font-heading font-bold text-xs sm:text-sm text-espresso">
                      SOC2 Compliance Gate
                    </h4>
                  </div>
                </div>

                {/* Restrained Attention Badge */}
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-orange-light border border-brand-orange/40 text-[10px] font-heading font-extrabold text-brand-orange shrink-0">
                  <AlertTriangle className="w-3 h-3 text-brand-orange" />
                  <span>1 Blocker</span>
                </div>
              </div>

              <div className="mt-2.5 flex items-center justify-between text-[11px] font-body text-terracotta-muted">
                <span>Progress: 64%</span>
                <span className="font-heading font-semibold text-espresso">Lead: Marcus T.</span>
              </div>
            </motion.div>

            {/* Satellite 4: In-Flight Task (Priya R.) */}
            <motion.div
              animate={{
                y: [3, -3, 3],
                opacity: activeMode === 'attention' ? 0.35 : 1,
              }}
              transition={{ repeat: Infinity, duration: 4.6, ease: 'easeInOut' }}
              className="sm:col-span-6 rounded-2xl p-3.5 bg-white/90 backdrop-blur-md border border-brand-peach/80 shadow-warm-sm flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-6 h-6 rounded-full bg-brand-yellow-light border border-brand-yellow flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-espresso" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-heading font-extrabold uppercase text-terracotta-muted">
                    Active Execution • Priya R.
                  </span>
                  <p className="font-heading font-bold text-xs text-espresso truncate">
                    Multi-Tenant KMS Isolation
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-heading font-bold px-2 py-0.5 rounded-full bg-brand-green-light text-brand-green border border-brand-green/30 shrink-0">
                4/5 Subtasks
              </span>
            </motion.div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* 4. FOOTER: Executive Orchestration Reassurance              */}
        {/* ============================================================ */}
        <div className="mt-2 sm:mt-4 pt-3 border-t border-brand-peach/40 px-2 sm:px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-terracotta-muted">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-brand-green" />
            <span className="font-heading font-semibold text-espresso">
              Autonomous Rollup Conduit:
            </span>
            <span>Task updates propagate seamlessly without status calls</span>
          </div>

          <div className="flex items-center gap-1.5 text-brand-orange font-heading font-extrabold text-[11px]">
            <span>100% Truth in Execution</span>
          </div>
        </div>

      </motion.div>
    </div>
  );
};
