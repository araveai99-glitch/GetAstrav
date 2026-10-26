import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  User,
  Calendar,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  Check,
  BellRing,
  TrendingUp,
  Sliders,
  CheckSquare,
  Lock,
  Zap,
  ListChecks,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';
import { IllustratedCardBadge } from '../../../components/common/IllustratedCardBadge';

type TaskStatus = 'todo' | 'in_progress' | 'completed';

interface TaskStateConfig {
  id: TaskStatus;
  label: string;
  sublabel: string;
  progress: number;
  slaTime: string;
  slaStatus: 'on_track' | 'warning' | 'complete';
  slaColor: string;
  badgeBg: string;
  badgeText: string;
  assignee: string;
  alertMessage?: string;
}

const TASK_STAGES: TaskStateConfig[] = [
  {
    id: 'todo',
    label: 'Pending',
    sublabel: 'Assigned & Queued',
    progress: 0,
    slaTime: '48h SLA Window',
    slaStatus: 'on_track',
    slaColor: 'text-terracotta-muted',
    badgeBg: 'bg-surface-tier2 text-terracotta-muted border-brand-peach/60',
    badgeText: 'Queued',
    assignee: 'Sarah Chen',
  },
  {
    id: 'in_progress',
    label: 'In Progress',
    sublabel: 'Active Execution',
    progress: 65,
    slaTime: '18h Remaining',
    slaStatus: 'warning',
    slaColor: 'text-brand-orange',
    badgeBg: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
    badgeText: 'Active SLA',
    assignee: 'Sarah Chen',
    alertMessage: 'Deadline approaching in 18 hours. Proactive warning active.',
  },
  {
    id: 'completed',
    label: 'Completed',
    sublabel: 'Verified & Rolled Up',
    progress: 100,
    slaTime: 'Finished on Schedule',
    slaStatus: 'complete',
    slaColor: 'text-brand-green',
    badgeBg: 'bg-brand-green-light text-brand-green border-brand-green/30',
    badgeText: '100% Verified',
    assignee: 'Sarah Chen',
    alertMessage: 'Deliverable signed off. Progress rolled up to Project Milestone.',
  },
];

export const TaskManagement: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Interactive Subtasks for ground-level user interaction
  const [subtasks, setSubtasks] = useState([
    { id: 1, title: 'UX Architecture & Wireframes', done: true, weight: 35 },
    { id: 2, title: 'Responsive Section Build', done: true, weight: 40 },
    { id: 3, title: 'Manager Quality Signoff', done: false, weight: 25 },
  ]);

  // Interactive SLA threshold state for the safety card
  const [slaFilter, setSlaFilter] = useState<'safe' | 'alert' | 'critical'>('alert');

  useEffect(() => {
    document.title = 'Task Execution & SLAs — Astrav';
    window.scrollTo(0, 0);
  }, []);

  // Auto-play through stages
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentStageIdx((prev) => (prev + 1) % TASK_STAGES.length);
    }, 4800);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentStage = TASK_STAGES[currentStageIdx];

  // Dynamic progress calculated from subtasks when in In-Progress or sync with stage
  const dynamicTaskProgress =
    currentStage.id === 'todo'
      ? 0
      : currentStage.id === 'completed'
      ? 100
      : subtasks.reduce((acc, st) => acc + (st.done ? st.weight : 0), 0);

  const toggleSubtask = (id: number) => {
    setIsAutoPlaying(false);
    setSubtasks((prev) =>
      prev.map((st) => (st.id === id ? { ...st, done: !st.done } : st))
    );
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12 selection:bg-brand-orange selection:text-white">
      {/* 1. Page Header */}
      <div className="text-left w-full max-w-5xl space-y-2 mb-2 sm:mb-4">
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left lg:whitespace-nowrap"
        >
          Clear Task Execution & <span className="text-brand-orange">Real-Time SLAs.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Watch deliverables move smoothly from Pending to In Progress to Completed. Track visual deadlines, prevent missed delivery windows, and observe subtask progress roll up mathematically.
        </motion.p>
      </div>

      {/* 2. MAIN ATTRACTION: Interactive Animated Task Timeline & Live Workspace */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-warm-md hover:shadow-warm-lg transition-shadow relative overflow-hidden"
      >
        {/* Subtle Ambient Background Particle Glow */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange-light/40 rounded-full blur-3xl pointer-events-none" />

        {/* Header Bar with Control Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-brand-peach/50 relative z-10">
          <div>
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
              Interactive Task <span className="text-brand-orange">Lifecycle</span>
            </h2>
            <p className="text-base text-terracotta mt-1.5 leading-relaxed">
              Click any stage or toggle subtasks below to watch the live SLA timeline and progress recalculate.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-tier1 hover:bg-brand-peach/30 border border-brand-peach/60 text-sm font-heading font-semibold text-espresso transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <span>Pause Flow</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-brand-green fill-brand-green" />
                  <span>Auto Flow</span>
                </>
              )}
            </button>

            <span className="inline-flex items-center gap-1.5 text-[13px] font-mono font-bold text-terracotta-muted bg-surface-tier1 px-3 py-1.5 rounded-xl border border-brand-peach/50">
              <Clock className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              Live SLA Engine
            </span>
          </div>
        </div>

        {/* Animated Task Timeline Rail with Glowing SVG Flow Pulse */}
        <div className="relative mb-8 sm:mb-10 px-2 sm:px-6 z-10">
          {/* Background Connecting Rail */}
          <div className="absolute top-6 left-12 right-12 h-2.5 bg-surface-tier2 rounded-full -translate-y-1/2 z-0 hidden sm:block overflow-hidden">
            {/* Moving light pulse along the line */}
            {!shouldReduceMotion && (
              <motion.div
                animate={{ x: ['-100%', '300%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-75"
              />
            )}
          </div>

          {/* Animated Filled Rail */}
          <motion.div
            className="absolute top-6 left-12 h-2.5 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green rounded-full -translate-y-1/2 z-0 hidden sm:block"
            initial={false}
            animate={{
              width:
                currentStageIdx === 0
                  ? '0%'
                  : currentStageIdx === 1
                  ? '50%'
                  : 'calc(100% - 6rem)',
            }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeInOut' }}
          />

          {/* 3 Connected Stage Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {TASK_STAGES.map((stage, idx) => {
              const isSelected = currentStageIdx === idx;
              const isPassed = currentStageIdx >= idx;

              return (
                <motion.button
                  key={stage.id}
                  type="button"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentStageIdx(idx);
                  }}
                  className={`text-left p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer select-none flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-brand-orange-light/50 border-brand-orange shadow-warm-md scale-[1.02]'
                      : isPassed
                      ? 'bg-white border-brand-green/40 hover:border-brand-peach'
                      : 'bg-surface-tier1/50 border-brand-peach/40 hover:bg-surface-tier1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center font-heading font-extrabold text-base transition-all group-hover:scale-105 shrink-0 ${
                        isSelected
                          ? 'bg-brand-orange text-white shadow-warm-xs'
                          : isPassed
                          ? 'bg-brand-green text-white shadow-warm-xs'
                          : 'bg-surface-tier2 text-terracotta-muted border border-brand-peach/50'
                      }`}
                    >
                      {isPassed && idx < currentStageIdx ? (
                        <Check className="w-6 h-6 stroke-[3]" />
                      ) : (
                        `0${idx + 1}`
                      )}
                    </div>

                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${stage.badgeBg}`}
                    >
                      {stage.badgeText}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-[17px] sm:text-base text-espresso flex items-center gap-1.5">
                      <span>{stage.label}</span>
                      {isSelected && (
                        <motion.span
                          layoutId="active-indicator"
                          className="w-2 h-2 rounded-full bg-brand-orange"
                        />
                      )}
                    </h3>
                    <p className="text-[13px] sm:text-xs text-terracotta-muted mt-0.5">
                      {stage.sublabel}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Live Task Execution Canvas */}
        <div className="bg-surface-tier1/70 rounded-2xl p-5 sm:p-7 border border-brand-peach/60 space-y-6 relative z-10">
          {/* Deliverable Metadata Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-brand-peach/40">
            <div className="flex items-start sm:items-center gap-3.5">
              <motion.div
                key={currentStage.id}
                initial={{ rotate: -15, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                  currentStage.id === 'completed'
                    ? 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7] text-brand-green border-brand-green/30 shadow-sm shadow-brand-green/10'
                    : 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] text-brand-orange border-brand-orange/30 shadow-sm shadow-brand-orange/10'
                }`}
              >
                {currentStage.id === 'completed' ? (
                  <CheckCircle2 className="w-7 h-7 stroke-[2.2]" />
                ) : (
                  <ListChecks className="w-7 h-7 stroke-[2]" />
                )}
              </motion.div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-heading font-extrabold text-[19px] sm:text-xl text-espresso">
                    Ship Interactive Dashboard
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-white border border-brand-peach/50 text-terracotta-muted">
                    TASK-0419
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[13px] sm:text-xs text-terracotta-muted mt-1">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-orange" /> Lead: {currentStage.assignee}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-green" /> Deadline: Friday 5:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* SLA Alert Marker & Visible Countdown Badge */}
            <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-brand-peach/60 shadow-warm-2xs">
              <div
                className={`w-3.5 h-3.5 rounded-full ${
                  currentStage.id === 'completed'
                    ? 'bg-brand-green'
                    : currentStage.id === 'in_progress'
                    ? 'bg-brand-orange animate-ping'
                    : 'bg-amber-400'
                }`}
              />
              <div className="text-left sm:text-right">
                <span className={`text-sm sm:text-xs font-heading font-bold block ${currentStage.slaColor}`}>
                  {currentStage.slaTime}
                </span>
                <span className="text-xs text-terracotta-muted">
                  {currentStage.id === 'completed' ? 'Target Met (Zero Breach)' : 'SLA Target Window'}
                </span>
              </div>
            </div>
          </div>

          {/* Smooth Dynamic Progress Fill */}
          <div className="space-y-2">
            <div className="flex flex-col min-[375px]:flex-row min-[375px]:items-center justify-between gap-1 min-[375px]:gap-3 text-sm sm:text-base font-heading font-bold">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 min-w-0">
                <span className="text-espresso">Deliverable Progress</span>
                <span className="text-xs sm:text-[13px] font-normal text-terracotta-muted">
                  (Mathematical Weight Rollup)
                </span>
              </div>
              <motion.span
                key={dynamicTaskProgress}
                initial={{ scale: 1.2, color: '#f15e1c' }}
                animate={{ scale: 1 }}
                className="text-brand-orange font-mono text-sm sm:text-base whitespace-nowrap shrink-0"
              >
                {dynamicTaskProgress}% Complete
              </motion.span>
            </div>

            <div className="relative w-full h-4 rounded-full bg-white border border-brand-peach/60 p-0.5 overflow-hidden">
              <motion.div
                initial={false}
                animate={{ width: `${dynamicTaskProgress}%` }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                className={`h-full rounded-full ${
                  dynamicTaskProgress === 100
                    ? 'bg-brand-green'
                    : 'bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-orange'
                }`}
              />
            </div>
          </div>

          {/* Subtask Checkpoints (Interactive: Click to toggle) */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                Subtasks (Click to test progress rollup):
              </span>
              <span className="text-xs text-brand-orange font-heading font-semibold">
                Interactive Checkpoints
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {subtasks.map((st) => {
                const isChecked = currentStage.id === 'completed' ? true : currentStage.id === 'todo' ? false : st.done;

                return (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => toggleSubtask(st.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between group ${
                      isChecked
                        ? 'bg-white border-brand-green/50 shadow-warm-2xs hover:border-brand-green'
                        : 'bg-white/70 border-brand-peach/50 hover:bg-white hover:border-brand-orange/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${
                          isChecked
                            ? 'bg-brand-green-light text-brand-green border border-brand-green/40'
                            : 'bg-surface-tier2 text-brand-peach border border-brand-peach'
                        }`}
                      >
                        {isChecked ? (
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-peach" />
                        )}
                      </div>
                      <span
                        className={`text-[15px] sm:text-xs font-medium ${
                          isChecked
                            ? 'text-espresso line-through decoration-brand-green/60'
                            : 'text-terracotta'
                        }`}
                      >
                        {st.title}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-terracotta-muted pl-2 shrink-0">
                      {st.weight}%
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stage Result Alert Banner */}
          {currentStage.alertMessage && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3.5 rounded-xl border flex items-center gap-3 text-sm ${
                currentStage.id === 'completed'
                  ? 'bg-brand-green-light/70 border-brand-green/30 text-emerald-950 font-medium'
                  : 'bg-amber-50/80 border-brand-yellow/40 text-amber-950 font-medium'
              }`}
            >
              {currentStage.id === 'completed' ? (
                <Sparkles className="w-4 h-4 text-brand-green shrink-0 animate-spin" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 animate-bounce" />
              )}
              <span>{currentStage.alertMessage}</span>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* 3. Redesigned Premium Feature Cards (Interactive Micro-Widgets & Dynamic Hovers) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        {/* Card 1: Interactive SLA Safety Net */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="p-4.5 min-[375px]:p-5 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-orange/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-4 min-w-0">
              <IllustratedCardBadge variant="control" size="md" />
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 sm:px-3 py-1 rounded-full border border-brand-orange/20 shrink-0 max-w-[65%] truncate sm:max-w-none sm:whitespace-nowrap">
                SLA Guardrail
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso mb-1.5 sm:mb-2 leading-snug">
              Automated Deadline Warnings
            </h3>
            <p className="text-sm sm:text-base text-terracotta leading-relaxed mb-4 sm:mb-6">
              When work velocity dips below the scheduled completion trajectory, Astrav alerts the pod lead hours before any deadline slips.
            </p>

            {/* Interactive SLA Threshold Filter Preview */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono font-bold">
                <span className="text-espresso">Simulate Health Window</span>
                <span className="text-brand-orange">Interactive Trigger</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center text-xs sm:text-[13px]">
                <motion.button
                  type="button"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  onClick={() => setSlaFilter('safe')}
                  className={`p-1.5 sm:p-2 rounded-xl font-bold border transition-all cursor-pointer ${
                    slaFilter === 'safe'
                      ? 'bg-brand-green text-white border-brand-green shadow-xs'
                      : 'bg-white text-brand-green border-brand-green/30 hover:bg-brand-green-light'
                  }`}
                >
                  Safe (&gt;24h)
                </motion.button>
                <motion.button
                  type="button"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  onClick={() => setSlaFilter('alert')}
                  className={`p-1.5 sm:p-2 rounded-xl font-bold border transition-all cursor-pointer ${
                    slaFilter === 'alert'
                      ? 'bg-amber-500 text-white border-amber-500 shadow-xs'
                      : 'bg-white text-amber-800 border-amber-200 hover:bg-amber-50'
                  }`}
                >
                  Alert (4h)
                </motion.button>
                <motion.button
                  type="button"
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                  onClick={() => setSlaFilter('critical')}
                  className={`p-1.5 sm:p-2 rounded-xl font-bold border transition-all cursor-pointer ${
                    slaFilter === 'critical'
                      ? 'bg-red-500 text-white border-red-500 shadow-xs'
                      : 'bg-white text-red-700 border-red-200 hover:bg-red-50'
                  }`}
                >
                  Breach (0h)
                </motion.button>
              </div>

              {/* Status callout reacting to the button click */}
              <div className="p-2.5 rounded-xl bg-white border border-brand-peach/40 text-xs font-mono flex items-center justify-between gap-2">
                <span className="text-terracotta-muted shrink-0">Action Dispatched:</span>
                <span className="font-bold text-espresso truncate text-right">
                  {slaFilter === 'safe'
                    ? 'Monitoring normally'
                    : slaFilter === 'alert'
                    ? 'Slack ping sent to @sarah'
                    : 'Escalated to Pod Lead'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-brand-peach/40 flex items-center text-sm font-heading font-semibold text-brand-orange">
            <span>Zero Missed Deliverables</span>
          </div>
        </motion.div>

        {/* Card 2: Deterministic Milestone Rollup */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="p-4.5 min-[375px]:p-5 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-green/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between gap-3 mb-3.5 sm:mb-4 min-w-0">
              <IllustratedCardBadge variant="progress" size="md" />
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 sm:px-3 py-1 rounded-full border border-brand-green/20 shrink-0 max-w-[65%] truncate sm:max-w-none sm:whitespace-nowrap">
                Mathematical Cascade
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-xl text-espresso mb-1.5 sm:mb-2 leading-snug">
              Direct Progress Rollup
            </h3>
            <p className="text-sm sm:text-base text-terracotta leading-relaxed mb-4 sm:mb-6">
              Every completed subtask contributes exact mathematical weight to parent milestones. Leaders see ground truth without manual status requests.
            </p>

            {/* Micro Rollup Visualizer */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2.5 sm:space-y-3">
              <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                <span className="font-heading font-bold text-espresso truncate">Parent Milestone: Product Release</span>
                <span className="font-mono font-bold text-brand-green shrink-0">+25% Contribution</span>
              </div>

              <div className="w-full h-3 rounded-full bg-white border border-brand-peach/40 p-0.5 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '82%' }}
                  viewport={{ once: false }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: 'easeOut', delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-brand-orange to-brand-green rounded-full"
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-terracotta-muted">
                <span>Milestone Health: 82%</span>
                <span className="text-brand-green font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  On Schedule
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-brand-peach/40 flex items-center text-sm font-heading font-semibold text-brand-green">
            <span>100% Deterministic Math</span>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
