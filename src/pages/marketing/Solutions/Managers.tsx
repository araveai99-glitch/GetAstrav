import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Users,
  CheckSquare,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Activity,
  Calendar,
  ShieldCheck,
  Check,
  Target,
  FolderKanban,
  ListChecks,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';
import { IllustratedCardBadge, type IllustratedBadgeVariant } from '../../../components/common/IllustratedCardBadge';

const TEAMWORK_STAGES = [
  {
    id: 'stage-1',
    stepNumber: '1',
    stageNumber: 'Stage 1',
    title: 'Team Goals',
    status: 'Planned',
    badgeClass: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
    stepBadgeClass: 'bg-[#fff4ed] text-brand-orange border border-brand-orange/30',
    desc: 'Set sprint priorities from high-level company targets.',
    sampleCard: 'Q3 Security Sprint',
    illustrationVariant: 'goal' as IllustratedBadgeVariant,
    icon: Target,
    iconContainer: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] text-brand-orange border border-brand-orange/30 shadow-sm shadow-brand-orange/10',
  },
  {
    id: 'stage-2',
    stepNumber: '2',
    stageNumber: 'Stage 2',
    title: 'Assigned Work',
    status: 'Scoped',
    badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
    stepBadgeClass: 'bg-[#fefbf0] text-amber-800 border border-amber-200',
    desc: 'Break goals into clear tasks and assign team owners.',
    sampleCard: '14 Tasks • Core Pod',
    illustrationVariant: 'projects' as IllustratedBadgeVariant,
    icon: FolderKanban,
    iconContainer: 'bg-gradient-to-br from-[#fefbf0] via-[#fef6dc] to-[#fdeec0] text-amber-700 border border-brand-yellow/35 shadow-sm shadow-brand-yellow/10',
  },
  {
    id: 'stage-3',
    stepNumber: '3',
    stageNumber: 'Stage 3',
    title: 'Daily Tasks',
    status: 'In Progress',
    badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
    stepBadgeClass: 'bg-[#edf7f3] text-brand-green border border-brand-green/30',
    desc: 'Engineers and designers complete assigned deliverables.',
    sampleCard: 'API Gateway Review #402',
    illustrationVariant: 'tasks' as IllustratedBadgeVariant,
    icon: ListChecks,
    iconContainer: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] text-brand-orange border border-brand-orange/30 shadow-sm shadow-brand-orange/10',
  },
  {
    id: 'stage-4',
    stepNumber: '4',
    stageNumber: 'Stage 4',
    title: 'Completed Results',
    status: 'Completed',
    badgeClass: 'bg-brand-green-light text-brand-green border-brand-green/30',
    stepBadgeClass: 'bg-[#edf7f3] text-brand-green border border-brand-green/30',
    desc: 'Completed work updates overall project progress automatically.',
    sampleCard: '100% Verified & Live',
    illustrationVariant: 'progress' as IllustratedBadgeVariant,
    icon: TrendingUp,
    iconContainer: 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7] text-brand-green border border-brand-green/30 shadow-sm shadow-brand-green/10',
  },
];

interface ManagerTask {
  id: string;
  title: string;
  pod: string;
  progress: number;
  status: 'In Progress' | 'Blocked' | 'Completed';
  blockerDetail?: string;
  nextAction: string;
  owner: string;
}

const SAMPLE_TASKS: ManagerTask[] = [
  {
    id: 'task-1',
    title: 'Payment Webhook Integration',
    pod: 'Billing Pod',
    progress: 45,
    status: 'Blocked',
    blockerDetail: 'Waiting on third-party credentials for more than 48 hours.',
    nextAction: 'Reassign credential review to team lead to unblock progress.',
    owner: 'Priya K.',
  },
  {
    id: 'task-2',
    title: 'Login & Authentication Setup',
    pod: 'Identity Pod',
    progress: 85,
    status: 'In Progress',
    nextAction: 'Final code review queued for peer check before release.',
    owner: 'Marcus T.',
  },
  {
    id: 'task-3',
    title: 'Database Performance Upgrade',
    pod: 'Platform Pod',
    progress: 100,
    status: 'Completed',
    nextAction: 'Migration finished with zero downtime. Project status updated.',
    owner: 'Elena R.',
  },
  {
    id: 'task-4',
    title: 'Settings Page Redesign',
    pod: 'Frontend Pod',
    progress: 70,
    status: 'In Progress',
    nextAction: 'Component tests complete; ready for visual review.',
    owner: 'David S.',
  },
];

export const Managers: React.FC = () => {
  useEffect(() => {
    document.title = 'Astrav for Managers — Keep Your Team Moving Together';
    window.scrollTo(0, 0);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  // Section A: Turn Plans Into Teamwork
  const sectionARef = useRef<HTMLDivElement>(null);
  const isSectionAInView = useInView(sectionARef, { once: false, amount: 0.05 });

  // Section B: Spot Delays Earlier
  const sectionBRef = useRef<HTMLDivElement>(null);
  const isSectionBInView = useInView(sectionBRef, { once: false, amount: 0.05 });
  const [selectedTaskId, setSelectedTaskId] = useState<string>('task-1');

  // Section C: Team's Progress, At a Glance
  const sectionCRef = useRef<HTMLDivElement>(null);
  const isSectionCInView = useInView(sectionCRef, { once: false, amount: 0.05 });

  const activeTask = SAMPLE_TASKS.find((t) => t.id === selectedTaskId) || SAMPLE_TASKS[0];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12">
      {/* ==================================================================== */}
      {/* DIRECT OPENING (PROPER NAVBAR CLEARANCE, NO HERO BANNER, NO BADGES) */}
      {/* ==================================================================== */}
      <div className="max-w-4xl xl:max-w-5xl space-y-3">
        <h1 className="text-3xl min-[390px]:text-[32px] sm:text-4xl lg:text-[42px] xl:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight lg:whitespace-nowrap">
          Keep Your Team <span className="text-brand-orange">Moving Together.</span>
        </h1>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-3xl">
          Organize everyday work, track progress automatically, and spot delays before they become bigger problems.
        </p>
      </div>

      {/* ==================================================================== */}
      {/* SECTION A — Turn Plans Into Teamwork (Stages & Animated Connectors)  */}
      {/* ==================================================================== */}
      <section
        ref={sectionARef}
        className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm relative overflow-hidden space-y-6"
      >
        <div className="max-w-2xl space-y-1 text-left">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            Turn Plans Into Teamwork
          </h2>
          <p className="text-base text-terracotta mt-1 leading-relaxed">
            Organize work in 4 simple stages, from high-level planning down to finished results.
          </p>
        </div>

        {/* 4 Connected Stages */}
        <div className="relative pt-2">
          {/* Animated Connecting Track Line on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-brand-peach/40 -z-0">
            <motion.div
              initial={{ width: '0%' }}
              animate={{
                width: isSectionAInView || shouldReduceMotion ? '100%' : '0%',
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {TEAMWORK_STAGES.map((stage, idx) => {
              const delay = shouldReduceMotion ? 0 : 0.1 * idx;
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={
                    isSectionAInView || shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 14 }
                  }
                  transition={{ duration: 0.4, delay }}
                  className="rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 bg-white border border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex flex-col space-y-2.5 sm:space-y-3 lg:space-y-3.5">
                    <div className="flex items-center justify-between">
                      <span
                        className={`w-7 h-7 rounded-full text-xs font-mono font-bold flex items-center justify-center ${stage.stepBadgeClass}`}
                      >
                        {stage.stepNumber}
                      </span>
                      <span
                        className={`text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${stage.badgeClass}`}
                      >
                        {stage.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-start">
                      <IllustratedCardBadge variant={stage.illustrationVariant} size="md" />
                    </div>

                    <div>
                      <h3 className="font-heading font-extrabold text-[17px] sm:text-lg text-espresso mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-terracotta leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-surface-tier1 border border-brand-peach/60 shadow-warm-2xs flex items-center justify-between text-[13px] sm:text-sm font-heading font-bold text-espresso">
                    <span className="truncate pr-2">{stage.sampleCard}</span>
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        idx === 3 ? 'text-brand-green' : 'text-terracotta-muted'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION B — Spot Delays Earlier (Interactive Task Flow Diagram)      */}
      {/* ==================================================================== */}
      <section
        ref={sectionBRef}
        className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm relative overflow-hidden space-y-6"
      >
        <div className="max-w-2xl space-y-1 text-left">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            Know What Needs Attention.
          </h2>
          <p className="text-base text-terracotta mt-1 leading-relaxed">
            Select a task below to see its status, spot delays, and review the recommended next action.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Task Cards Selector (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-heading font-bold text-terracotta-muted uppercase tracking-wider px-1">
              Select a Task:
            </div>

            {SAMPLE_TASKS.map((task) => {
              const isSelected = selectedTaskId === task.id;
              const isBlocked = task.status === 'Blocked';

              return (
                <div
                  key={task.id}
                  onClick={() => setSelectedTaskId(task.id)}
                  className={`cursor-pointer p-3.5 rounded-2xl border transition-all duration-200 flex flex-col space-y-2 ${
                    isSelected
                      ? isBlocked
                        ? 'bg-amber-50/70 border-brand-orange shadow-warm-sm ring-2 ring-brand-orange/30'
                        : 'bg-white border-brand-orange shadow-warm-sm ring-2 ring-brand-orange/20'
                      : 'bg-surface-ambient hover:bg-white border-brand-peach/70 shadow-warm-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-terracotta-muted">
                      {task.pod} • {task.owner}
                    </span>
                    <span
                      className={`text-xs font-mono font-bold uppercase px-2 py-0.5 rounded-full border flex items-center gap-1 ${
                        isBlocked
                          ? 'bg-brand-orange-light text-brand-orange border-brand-orange/30'
                          : task.status === 'Completed'
                          ? 'bg-brand-green-light text-brand-green border-brand-green/30'
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {isBlocked && <AlertTriangle className="w-3 h-3 text-brand-orange" />}
                      {task.status}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-[16px] sm:text-sm text-espresso leading-snug">
                    {task.title}
                  </h4>

                  {/* Progress Mini Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-mono text-terracotta">
                      <span>Progress</span>
                      <span className="font-bold">{task.progress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white border border-brand-peach/60 overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{
                          width: isSectionBInView || shouldReduceMotion ? `${task.progress}%` : '0%',
                        }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`h-full rounded-full ${
                          isBlocked
                            ? 'bg-brand-orange'
                            : task.status === 'Completed'
                            ? 'bg-brand-green'
                            : 'bg-brand-yellow'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: 4-Step Diagram Flow (lg:col-span-7) */}
          <div className="lg:col-span-7 p-5 rounded-3xl bg-surface-ambient border border-brand-peach/90 shadow-warm-xs space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-brand-peach/60">
              <div>
                <span className="text-xs font-mono font-bold text-brand-orange uppercase block">
                  Task Detail
                </span>
                <h3 className="font-heading font-bold text-[18px] sm:text-base text-espresso">
                  {activeTask.title}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded-full border border-brand-peach text-terracotta">
                Owner: {activeTask.owner}
              </span>
            </div>

            {/* 4 Steps */}
            <div className="space-y-3">
              {/* Step 1: Tasks */}
              <div className="p-3 rounded-xl bg-white border border-brand-peach/60 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-surface-tier1 text-brand-orange flex items-center justify-center font-bold text-xs shrink-0 border border-brand-peach/70 shadow-2xs">
                  01
                </div>
                <div>
                  <div className="text-xs font-heading font-bold text-terracotta uppercase">
                    Assigned Work
                  </div>
                  <div className="text-sm sm:text-sm font-heading font-bold text-espresso">
                    {activeTask.title} assigned to {activeTask.pod}
                  </div>
                </div>
              </div>

              {/* Step 2: Progress */}
              <div className="p-3 rounded-xl bg-white border border-brand-peach/60 flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-surface-tier1 text-brand-orange flex items-center justify-center font-bold text-xs shrink-0 border border-brand-peach/70 shadow-2xs">
                  02
                </div>
                <div className="w-full space-y-1">
                  <div className="flex justify-between items-center gap-2 text-xs font-heading font-bold text-terracotta">
                    <span className="uppercase">Current Progress</span>
                    <span className="font-mono text-espresso font-bold whitespace-nowrap shrink-0">{activeTask.progress}% Complete</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-ambient border border-brand-peach/60 overflow-hidden">
                    <motion.div
                      key={activeTask.id}
                      initial={{ width: '0%' }}
                      animate={{ width: `${activeTask.progress}%` }}
                      transition={{ duration: 0.6 }}
                      className={`h-full rounded-full ${
                        activeTask.status === 'Blocked'
                          ? 'bg-brand-orange'
                          : activeTask.status === 'Completed'
                          ? 'bg-brand-green'
                          : 'bg-brand-yellow'
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Blocked Work */}
              <div
                className={`p-3 rounded-xl border flex items-start gap-2.5 transition-colors ${
                  activeTask.status === 'Blocked'
                    ? 'bg-brand-orange-light/50 border-brand-orange/60'
                    : 'bg-white border-brand-peach/60'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs ${
                    activeTask.status === 'Blocked'
                      ? 'bg-brand-orange text-white'
                      : 'bg-surface-tier1 text-brand-green border border-brand-peach/70'
                  }`}
                >
                  03
                </div>
                <div>
                  <div
                    className={`text-xs font-heading font-bold uppercase ${
                      activeTask.status === 'Blocked' ? 'text-brand-orange' : 'text-terracotta'
                    }`}
                  >
                    {activeTask.status === 'Blocked' ? 'Delayed Work Detected' : 'Blocker Check'}
                  </div>
                  <div className="text-sm sm:text-sm font-heading font-bold text-espresso">
                    {activeTask.blockerDetail || 'No delays detected. Work is moving forward on schedule.'}
                  </div>
                </div>
              </div>

              {/* Step 4: Next Action */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-white to-[#fffbf7] border-2 border-brand-green/60 flex items-start gap-2.5 shadow-warm-xs">
                <div className="w-8 h-8 rounded-xl bg-brand-green text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm shadow-brand-green/30">
                  04
                </div>
                <div>
                  <div className="text-xs font-heading font-bold text-brand-green uppercase">
                    Next Action
                  </div>
                  <div className="text-sm sm:text-sm font-heading font-bold text-espresso">
                    {activeTask.nextAction}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION C — Team's Progress, At a Glance                            */}
      {/* ==================================================================== */}
      <section
        ref={sectionCRef}
        className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm space-y-6"
      >
        <div className="max-w-2xl space-y-1 text-left">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            Your Team's Progress, At a Glance.
          </h2>
          <p className="text-base text-terracotta mt-1 leading-relaxed">
            Keep team workloads balanced and track project deadlines without constant follow-ups.
          </p>
        </div>

        {/* 4 Connected Operational Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* 1. Team Workload */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm sm:text-xs font-heading font-bold text-terracotta mb-3">
                <span className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#edf7f3] to-[#daf1e7] text-brand-green border border-brand-green/30 flex items-center justify-center shrink-0 shadow-xs">
                    <Activity className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <span>Team Workload</span>
                </span>
                <span className="font-mono text-brand-green font-bold text-xs bg-brand-green-light px-2.5 py-0.5 rounded-full border border-brand-green/20">Balanced</span>
              </div>
              <div className="text-[22px] font-extrabold font-heading text-espresso">
                4 Active Pods
              </div>
              <p className="text-sm text-terracotta-muted mt-1 leading-relaxed">
                74% average workload; no burnout risk
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-brand-peach/40">
              <div className="w-full h-2.5 rounded-full bg-surface-tier1 border border-brand-peach/60 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: isSectionCInView || shouldReduceMotion ? '74%' : '0%',
                  }}
                  transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
                  className="h-full rounded-full bg-brand-green"
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-terracotta-muted">
                <span>Healthy Distribution</span>
                <span className="text-brand-green font-semibold">Zero Alerts</span>
              </div>
            </div>
          </div>

          {/* 2. Task Completion */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm sm:text-xs font-heading font-bold text-terracotta mb-3">
                <span className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] text-brand-orange border border-brand-orange/30 flex items-center justify-center shrink-0 shadow-xs">
                    <ListChecks className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <span>Task Completion</span>
                </span>
                <span className="font-mono text-brand-orange font-bold text-xs bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/20">88%</span>
              </div>
              <div className="text-[22px] font-extrabold font-heading text-espresso">
                44 / 50 Tasks
              </div>
              <p className="text-sm text-terracotta-muted mt-1 leading-relaxed">
                Paced 2 days ahead of sprint schedule
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-brand-peach/40">
              <div className="w-full h-2.5 rounded-full bg-surface-tier1 border border-brand-peach/60 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: isSectionCInView || shouldReduceMotion ? '88%' : '0%',
                  }}
                  transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow"
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-terracotta-muted">
                <span>44 Verified</span>
                <span className="text-brand-orange font-semibold">6 In Review</span>
              </div>
            </div>
          </div>

          {/* 3. Project Progress */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-yellow/40 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm sm:text-xs font-heading font-bold text-terracotta mb-3">
                <span className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#fefbf0] via-[#fef6dc] to-[#fdeec0] text-amber-700 border border-brand-yellow/35 flex items-center justify-center shrink-0 shadow-xs">
                    <TrendingUp className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <span>Project Progress</span>
                </span>
                <span className="font-mono text-amber-800 font-bold text-xs bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">91%</span>
              </div>
              <div className="text-[22px] font-extrabold font-heading text-espresso">
                Core Platform
              </div>
              <p className="text-sm text-terracotta-muted mt-1 leading-relaxed">
                Progress calculated from completed tasks
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-brand-peach/40">
              <div className="w-full h-2.5 rounded-full bg-surface-tier1 border border-brand-peach/60 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: isSectionCInView || shouldReduceMotion ? '91%' : '0%',
                  }}
                  transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-yellow to-brand-green"
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-terracotta-muted">
                <span>Milestone 3</span>
                <span className="text-brand-green font-semibold">On Track</span>
              </div>
            </div>
          </div>

          {/* 4. Upcoming Deadlines */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-brand-peach/80 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm sm:text-xs font-heading font-bold text-terracotta mb-3">
                <span className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] text-brand-orange border border-brand-orange/30 flex items-center justify-center shrink-0 shadow-xs">
                    <Calendar className="w-5.5 h-5.5 stroke-[2]" />
                  </div>
                  <span>Deadlines</span>
                </span>
                <span className="font-mono font-bold text-brand-orange text-xs bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/20">In 3 Days</span>
              </div>
              <div className="text-[22px] font-extrabold font-heading text-espresso">
                Release v2.4
              </div>
              <p className="text-sm text-terracotta-muted mt-1 leading-relaxed">
                Scheduled for Friday deployment
              </p>
            </div>

            <div className="pt-2 border-t border-brand-peach/40 flex items-center gap-1.5 text-xs font-heading font-semibold text-brand-green">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>All 3 review gates passed</span>
            </div>
          </div>
        </div>

        <div className="text-left text-xs font-mono text-terracotta-muted">
          * Illustrative team data demonstrating automated sprint progress tracking.
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FINAL CTA                                                            */}
      {/* ==================================================================== */}
      <CTASection
        title="Spend Less Time"
        highlightTitle="Chasing Updates."
        description="Help your engineering and product pods stay aligned, resolve blockers days earlier, and ship on schedule."
        paddingY="pt-2 pb-2"
        paddingX="px-0"
      />
    </div>
  );
};
