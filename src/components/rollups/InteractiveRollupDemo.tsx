import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  CheckSquare,
  Square,
  CheckCircle2,
  FolderGit2,
  Flag,
  Target,
  ArrowRight,
  ArrowDown,
  RefreshCw,
  Sparkles,
  Zap,
  TrendingUp,
} from 'lucide-react';

interface InteractiveTask {
  id: string;
  title: string;
  category: string;
  completed: boolean;
}

export const InteractiveRollupDemo: React.FC = () => {
  const [tasks, setTasks] = useState<InteractiveTask[]>([
    { id: 't1', title: 'Finish homepage design', category: 'UI / Design', completed: true },
    { id: 't2', title: 'Review the content', category: 'Copywriting', completed: false },
    { id: 't3', title: 'Test the page', category: 'Quality Assurance', completed: false },
  ]);

  const [activeSignal, setActiveSignal] = useState(false);
  const [lastToggledId, setLastToggledId] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  // Handle task toggle
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    setLastToggledId(id);
    setActiveSignal(true);
  };

  useEffect(() => {
    if (activeSignal) {
      const timer = setTimeout(() => {
        setActiveSignal(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [activeSignal]);

  const resetAll = () => {
    setTasks([
      { id: 't1', title: 'Finish homepage design', category: 'UI / Design', completed: true },
      { id: 't2', title: 'Review the content', category: 'Copywriting', completed: false },
      { id: 't3', title: 'Test the page', category: 'Quality Assurance', completed: false },
    ]);
    setActiveSignal(true);
  };

  // Mathematical logic
  const completedCount = tasks.filter((t) => t.completed).length;
  const taskProgress = Math.round((completedCount / tasks.length) * 100);

  // Project: Base 40% + 20% per completed task (40% -> 60% -> 80% -> 100%)
  const projectProgress = 40 + completedCount * 20;

  // Milestone: Base 50% + ~16.7% per completed task (50% -> 67% -> 83% -> 100%)
  const milestoneProgress =
    completedCount === 0
      ? 50
      : completedCount === 1
      ? 67
      : completedCount === 2
      ? 83
      : 100;

  // Goal: Base 70% + 10% per completed task (70% -> 80% -> 90% -> 100%)
  const goalProgress = 70 + completedCount * 10;

  // Goal Ring Calculations (Radius 48, Circumference = 2 * PI * 48 ≈ 301.59)
  const ringRadius = 48;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const ringOffset = ringCircumference - (goalProgress / 100) * ringCircumference;

  return (
    <section
      ref={sectionRef}
      className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1720px] mx-auto relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-brand-orange-light/40 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 mb-4 sm:mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="brand-h2 text-espresso"
        >
          See Progress Add Up.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="brand-subtitle text-terracotta text-base sm:text-lg max-w-lg mx-auto font-normal"
        >
          Complete a task and watch the bigger picture change.
        </motion.p>
      </div>

      {/* Main Diagram Card Container (Expanded 1720px Width) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-3xl p-6 sm:p-9 lg:p-12 border-2 border-brand-peach/80 shadow-warm-xl w-full mx-auto relative overflow-hidden"
      >
        {/* Sample Data Disclaimer & Control Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-brand-peach/50">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-surface-tier1 text-xs font-mono font-bold text-terracotta border border-brand-peach/40">
              SAMPLE DATA
            </span>
            <span className="text-xs sm:text-sm text-terracotta-muted hidden sm:inline">
              Toggle any task to observe real-time mathematical rollups.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {activeSignal && (
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30 shadow-warm-2xs"
              >
                <Zap className="w-3.5 h-3.5 fill-current animate-bounce" />
                <span>Rollup Synced</span>
              </motion.span>
            )}

            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-terracotta-muted hover:text-brand-orange px-3.5 py-1.5 rounded-xl hover:bg-surface-tier1 transition-colors cursor-pointer select-none border border-brand-peach/40"
              title="Reset demonstration to default state"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Desktop 2-Column / Mobile Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Tasks Column (Interactive Checkable Items) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center font-bold">
                  <CheckSquare className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-espresso">
                    Current Tasks
                  </h3>
                  <p className="text-xs text-terracotta-muted">
                    Click to check or uncheck
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-surface-tier1 text-espresso border border-brand-peach/50">
                {completedCount} of {tasks.length} Done ({taskProgress}%)
              </span>
            </div>

            {/* Checkable Task Cards (Enlarged) */}
            <div className="space-y-3">
              {tasks.map((task, idx) => {
                const isSelected = task.id === lastToggledId && activeSignal;
                return (
                  <motion.div
                    key={task.id}
                    layout
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => toggleTask(task.id)}
                    className={`relative p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer select-none flex items-center justify-between group ${
                      task.completed
                        ? 'bg-brand-green-light/40 border-brand-green/40 shadow-warm-xs'
                        : 'bg-white border-brand-peach hover:border-brand-orange/50 hover:bg-surface-tier1/50 shadow-warm-xs'
                    } ${isSelected ? 'ring-2 ring-brand-orange ring-offset-2' : ''}`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Checkbox Icon */}
                      <button
                        type="button"
                        aria-label={`Mark task ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-all ${
                          task.completed
                            ? 'bg-brand-green text-white shadow-sm'
                            : 'border-2 border-brand-peach group-hover:border-brand-orange text-transparent'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-5 h-5 transition-transform duration-200 ${
                            task.completed ? 'scale-100' : 'scale-0'
                          }`}
                        />
                      </button>

                      <div>
                        <p
                          className={`text-sm sm:text-base font-heading font-bold transition-colors ${
                            task.completed
                              ? 'text-terracotta-muted line-through opacity-80'
                              : 'text-espresso group-hover:text-brand-orange'
                          }`}
                        >
                          {task.title}
                        </p>
                        <span className="text-xs font-mono font-medium text-terracotta-muted uppercase tracking-wider">
                          {task.category}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-heading font-bold px-3 py-1 rounded-md ${
                        task.completed
                          ? 'bg-brand-green text-white'
                          : 'bg-surface-tier1 text-terracotta-muted border border-brand-peach/40'
                      }`}
                    >
                      {task.completed ? 'Done' : 'Pending'}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Task summary micro-meter */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-xs font-medium text-terracotta-muted mb-1.5">
                <span>Task Sprint Progress</span>
                <span className="font-mono font-bold text-espresso text-sm">{taskProgress}%</span>
              </div>
              <div className="h-2 sm:h-2.5 w-full bg-surface-tier1 rounded-full overflow-hidden border border-brand-peach/40 p-0.5">
                <motion.div
                  initial={false}
                  animate={{ width: `${taskProgress}%` }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="h-full bg-brand-green rounded-full"
                />
              </div>
            </div>
          </div>

          {/* CONNECTOR: Directional Indicator between left and right */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0">
            {/* Desktop horizontal arrow / signal */}
            <div className="hidden lg:flex flex-col items-center gap-1 text-brand-orange">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  activeSignal
                    ? 'bg-brand-orange text-white border-brand-orange shadow-glow-orange scale-110'
                    : 'bg-brand-orange-light text-brand-orange border-brand-orange/30'
                }`}
              >
                <ArrowRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeSignal ? 'translate-x-0.5' : ''
                  }`}
                />
              </div>
              <span className="text-[9px] font-heading font-extrabold uppercase tracking-wider text-brand-orange text-center">
                Rolls Up
              </span>
            </div>

            {/* Mobile vertical arrow / signal */}
            <div className="lg:hidden flex items-center gap-2 text-brand-orange py-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                  activeSignal
                    ? 'bg-brand-orange text-white border-brand-orange scale-110'
                    : 'bg-brand-orange-light text-brand-orange border-brand-orange/30'
                }`}
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </div>
              <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-brand-orange">
                Rolls Up to Project, Milestone & Goal
              </span>
            </div>
          </div>

          {/* RIGHT: Rollup Hierarchy (Project → Milestone → Goal) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* 1. Project Progress Bar */}
            <div className="p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-surface-tier1 border-2 border-brand-peach/60 shadow-warm-xs space-y-3 sm:space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                      PROJECT LEVEL
                    </span>
                    <h4 className="text-base sm:text-lg lg:text-xl font-heading font-extrabold text-espresso leading-snug">
                      Website Redesign Initiative
                    </h4>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-heading font-black text-brand-orange">
                    {projectProgress}%
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-3 sm:h-3.5 rounded-full bg-white overflow-hidden border border-brand-peach/50 p-0.5">
                <motion.div
                  initial={false}
                  animate={{ width: `${projectProgress}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="h-full rounded-full bg-brand-orange"
                />
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm text-terracotta-muted font-medium">
                <span>Calculated from active task deliverables</span>
                <span className="font-mono font-bold">Base 40% + 20% / task</span>
              </div>
            </div>

            {/* 2. Milestone Progress Bar */}
            <div className="p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl bg-surface-tier1 border-2 border-brand-peach/60 shadow-warm-xs space-y-3 sm:space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-brand-yellow flex items-center justify-center shrink-0">
                    <Flag className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                      MILESTONE LEVEL
                    </span>
                    <h4 className="text-base sm:text-lg lg:text-xl font-heading font-extrabold text-espresso leading-snug">
                      Q4 Web Experience Delivery
                    </h4>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-heading font-black text-amber-600">
                    {milestoneProgress}%
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-3 sm:h-3.5 rounded-full bg-white overflow-hidden border border-brand-peach/50 p-0.5">
                <motion.div
                  initial={false}
                  animate={{ width: `${milestoneProgress}%` }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="h-full rounded-full bg-brand-yellow"
                />
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm text-terracotta-muted font-medium">
                <span>Aggregated across project workstreams</span>
                <span className="font-semibold text-espresso">Status: {milestoneProgress === 100 ? 'Completed' : 'On Track'}</span>
              </div>
            </div>

            {/* 3. Goal Circular Progress Ring */}
            <div className="p-6 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-brand-orange-light/50 via-white to-surface-tier1 border-2 border-brand-orange/30 shadow-warm-md flex items-center justify-between gap-6">
              <div className="space-y-1.5">
                <h4 className="text-base sm:text-lg lg:text-2xl font-heading font-extrabold text-espresso">
                  Expand Digital Market Reach
                </h4>
                <p className="text-xs sm:text-sm text-terracotta-muted leading-relaxed">
                  Mathematical rollup across all connected milestones and sprints
                </p>
              </div>

              {/* Circular Progress Ring (Enlarged) */}
              <div className="relative w-28 h-28 sm:w-34 sm:h-34 lg:w-36 lg:h-36 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 110 110">
                  {/* Background Track */}
                  <circle
                    cx="55"
                    cy="55"
                    r={ringRadius}
                    className="stroke-brand-peach/40"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  {/* Dynamic Progress Stroke */}
                  <motion.circle
                    cx="55"
                    cy="55"
                    r={ringRadius}
                    className="stroke-brand-orange"
                    strokeWidth="8"
                    strokeDasharray={ringCircumference}
                    initial={false}
                    animate={{ strokeDashoffset: ringOffset }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>

                {/* Percentage Centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <motion.span
                    key={goalProgress}
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-espresso"
                  >
                    {goalProgress}%
                  </motion.span>
                  <span className="text-[10px] sm:text-xs font-heading font-bold text-brand-orange uppercase tracking-wider">
                    Rollup
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Directional Feedback Banner */}
        <div className="mt-6 pt-4 border-t border-brand-peach/40 flex flex-wrap items-center justify-between gap-3 text-xs text-terracotta font-medium">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-brand-green" />
            <span>
              {completedCount === 3
                ? 'All sprint tasks completed — overall strategic goal reached 100%!'
                : `${3 - completedCount} task${3 - completedCount > 1 ? 's' : ''} remaining to complete this sprint milestone.`}
            </span>
          </div>

          <div className="flex items-center gap-2 text-terracotta-muted">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span>Automatic Sync Active</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
