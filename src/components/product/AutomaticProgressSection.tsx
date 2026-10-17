import React, { useState, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  CheckCircle2,
  Circle,
  Flag,
  Target,
  Sparkles,
  RefreshCw,
  Info,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface SimpleSubtask {
  id: string;
  title: string;
  weight: number;
  completed: boolean;
}

export const AutomaticProgressSection: React.FC = () => {
  const [subtasks, setSubtasks] = useState<SimpleSubtask[]>([
    { id: '1', title: 'Design homepage header and visual style', weight: 40, completed: true },
    { id: '2', title: 'Build responsive layout and interactive sections', weight: 35, completed: false },
    { id: '3', title: 'Review with team and polish details', weight: 25, completed: false },
  ]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const toggleSubtask = (id: string) => {
    setSubtasks((prev) =>
      prev.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s))
    );
  };

  const resetSimulator = () => {
    setSubtasks([
      { id: '1', title: 'Design homepage header and visual style', weight: 40, completed: true },
      { id: '2', title: 'Build responsive layout and interactive sections', weight: 35, completed: false },
      { id: '3', title: 'Review with team and polish details', weight: 25, completed: false },
    ]);
  };

  // Dynamic calculations based on user interaction
  const taskProgress = subtasks.reduce(
    (acc, st) => acc + (st.completed ? st.weight : 0),
    0
  );

  // Milestone: base 50% + (taskProgress * 0.5)
  const milestoneProgress = Math.min(100, Math.round(50 + taskProgress * 0.5));

  // Goal: base 60% + (milestoneProgress * 0.36)
  const goalProgress = Math.min(100, Math.round(60 + milestoneProgress * 0.36));

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1600px] mx-auto bg-surface-ambient/50 rounded-3xl border border-brand-peach/40 my-4 sm:my-6 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.05, 1],
                opacity: [0.25, 0.45, 0.25],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-gradient-to-bl from-brand-green-light/40 via-amber-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Section Header with Repeat-on-Scroll */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="brand-h2 text-espresso"
        >
          See Progress as Work Gets Done.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="brand-subtitle text-terracotta text-base sm:text-lg font-normal max-w-xl mx-auto"
        >
          Complete a task and watch overall progress update automatically.
        </motion.p>
      </div>

      {/* Main Interactive Rollup Card */}
      <div className="rounded-3xl bg-white border border-brand-peach/80 p-6 sm:p-8 lg:p-10 shadow-warm-lg space-y-8">
        {/* Simple 4-Step Rollup Flow Indicator with animated connector pulse */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-between p-3.5 rounded-2xl bg-surface-ambient border border-brand-peach/60 text-xs font-mono font-bold text-terracotta gap-3 relative overflow-hidden"
        >
          {/* Connecting Pulse Beam */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-orange/10 to-transparent pointer-events-none -z-0">
            <motion.div
              className="h-full w-24 bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"
              animate={shouldReduceMotion ? {} : { x: ['-100%', '800%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>

          <div className="flex items-center gap-1.5 text-brand-orange relative z-10">
            <span className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center text-[10px]">1</span>
            <span>Subtasks</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-terracotta-muted hidden sm:inline relative z-10" />
          <div className="flex items-center gap-1.5 text-brand-orange relative z-10">
            <span className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center text-[10px]">2</span>
            <span>Task</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-terracotta-muted hidden sm:inline relative z-10" />
          <div className="flex items-center gap-1.5 text-brand-yellow relative z-10">
            <span className="w-5 h-5 rounded-full bg-brand-yellow text-espresso flex items-center justify-center text-[10px]">3</span>
            <span>Milestone</span>
          </div>
          <ArrowRight className="w-3.5 h-3.5 text-terracotta-muted hidden sm:inline relative z-10" />
          <div className="flex items-center gap-1.5 text-brand-green relative z-10">
            <span className="w-5 h-5 rounded-full bg-brand-green text-white flex items-center justify-center text-[10px]">4</span>
            <span>Goal</span>
          </div>

          <button
            onClick={resetSimulator}
            className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-heading font-semibold bg-white border border-brand-peach text-terracotta hover:text-brand-orange transition-colors shrink-0 ml-auto shadow-warm-2xs relative z-10 cursor-pointer active:scale-95"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo</span>
          </button>
        </motion.div>

        {/* 2-Column Functional Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Checkable Subtasks Trigger (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-surface-ambient border border-brand-peach/80 shadow-warm-xs"
          >
            <div className="flex items-center justify-between pb-1">
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-orange uppercase">
                  ACTIVE TASK
                </span>
                <h4 className="font-heading font-bold text-base text-espresso">
                  Design & build homepage
                </h4>
              </div>
              <motion.span
                key={taskProgress}
                initial={{ scale: 1.15, color: '#f15e1c' }}
                animate={{ scale: 1, color: '#f15e1c' }}
                transition={{ duration: 0.3 }}
                className="font-mono font-extrabold text-sm text-brand-orange"
              >
                {taskProgress}% done
              </motion.span>
            </div>

            {/* Subtask Checkboxes with interactive feedback */}
            <div className="space-y-2.5">
              {subtasks.map((st) => (
                <motion.div
                  key={st.id}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggleSubtask(st.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    st.completed
                      ? 'bg-brand-green-light/60 border-brand-green/40 shadow-warm-2xs'
                      : 'bg-white border-brand-peach/70 hover:border-brand-orange/60 hover:shadow-warm-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {st.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 transition-transform scale-110" />
                    ) : (
                      <Circle className="w-5 h-5 text-terracotta-muted shrink-0 hover:text-brand-orange transition-colors" />
                    )}
                    <span
                      className={`text-xs sm:text-sm ${
                        st.completed ? 'line-through text-terracotta-muted' : 'font-semibold text-espresso'
                      }`}
                    >
                      {st.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-terracotta shrink-0">
                    {st.completed ? 'Done' : 'Click to complete'}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Task Progress Bar: Smoothly animates when checked/unchecked and on scroll */}
            <div className="pt-2 space-y-1.5">
              <div className="flex justify-between text-xs font-mono text-terracotta">
                <span>Task progress</span>
                <span className="font-bold text-espresso">{taskProgress}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-champagne overflow-hidden">
                <motion.div
                  className="h-full bg-brand-orange rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: isInView ? `${taskProgress}%` : '0%' }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Connected Rollup Cards (Milestone -> Goal) (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Milestone Card */}
            <div className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-xs space-y-3 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center font-bold">
                    <Flag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">
                      PROJECT MILESTONE
                    </span>
                    <h5 className="font-heading font-bold text-base text-espresso">
                      Complete project tasks
                    </h5>
                  </div>
                </div>
                <motion.span
                  key={milestoneProgress}
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-base font-mono font-extrabold text-brand-yellow"
                >
                  {milestoneProgress}%
                </motion.span>
              </div>

              {/* Milestone Progress Bar: Animates on subtask toggle and scroll */}
              <div className="w-full h-2.5 rounded-full bg-champagne overflow-hidden">
                <motion.div
                  className="h-full bg-brand-yellow rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: isInView ? `${milestoneProgress}%` : '0%' }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                />
              </div>
              <span className="text-xs text-terracotta-muted block">
                Milestone completion updates dynamically as tasks move forward.
              </span>
            </div>

            {/* Strategic Goal Card */}
            <div className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-xs space-y-3 relative group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center font-bold">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-green uppercase">
                      ORGANIZATIONAL GOAL
                    </span>
                    <h5 className="font-heading font-bold text-base text-espresso">
                      Launch company website
                    </h5>
                  </div>
                </div>
                <motion.span
                  key={goalProgress}
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-base font-mono font-extrabold text-brand-green"
                >
                  {goalProgress}%
                </motion.span>
              </div>

              {/* Goal Progress Bar: Animates on subtask toggle and scroll */}
              <div className="w-full h-2.5 rounded-full bg-champagne overflow-hidden">
                <motion.div
                  className="h-full bg-brand-green rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: isInView ? `${goalProgress}%` : '0%' }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                />
              </div>
              <span className="text-xs text-terracotta-muted block">
                Company leadership sees accurate progress without chasing status reports.
              </span>
            </div>
          </motion.div>
        </div>

        {/* Clear Illustrative Sample Data Note */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-ambient border border-brand-peach/60 text-xs text-terracotta-muted">
          <Info className="w-4 h-4 text-brand-orange shrink-0" />
          <span>
            Percentages shown above are illustrative sample data to demonstrate Astrav's automatic progress rollups.
          </span>
        </div>
      </div>
    </section>
  );
};
