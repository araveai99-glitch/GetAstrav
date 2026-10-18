import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Target,
  FolderGit2,
  Users,
  CheckSquare,
  TrendingUp,
  CheckCircle2,
  Square,
  Sparkles,
  ArrowRight,
  Layers,
  Zap,
  RotateCcw,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { openDemoModal } from '../../../components/common/DemoModal';

interface SimTask {
  id: string;
  name: string;
  dept: string;
  weight: number;
  completed: boolean;
}

export const HowItWorksPage: React.FC = () => {
  useEffect(() => {
    document.title = 'How It Works — Astrav';
    window.scrollTo(0, 0);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  // Section A: Workflow Journey
  const sectionARef = useRef<HTMLElement>(null);
  const isSectionAInView = useInView(sectionARef, { once: false, amount: 0.2 });
  const [activeWorkflowStage, setActiveWorkflowStage] = useState<number>(0);

  // Section B: Interactive Progress Demonstration
  const sectionBRef = useRef<HTMLElement>(null);
  const isSectionBInView = useInView(sectionBRef, { once: false, amount: 0.2 });
  const [tasks, setTasks] = useState<SimTask[]>([
    { id: 'task-1', name: 'Finish user workflow design', dept: 'Design Pod', weight: 33, completed: true },
    { id: 'task-2', name: 'Review security compliance', dept: 'Governance Pod', weight: 33, completed: false },
    { id: 'task-3', name: 'Deploy verification engine', dept: 'Engineering Pod', weight: 34, completed: false },
  ]);
  const [pulsingNode, setPulsingNode] = useState<string | null>(null);

  // Section C: Hub and Spoke
  const sectionCRef = useRef<HTMLElement>(null);
  const isSectionCInView = useInView(sectionCRef, { once: false, amount: 0.2 });
  const [selectedSpoke, setSelectedSpoke] = useState<string>('goals');

  // Interactive Task Toggle
  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
    setPulsingNode(id);
    setTimeout(() => setPulsingNode(null), 1000);
  };

  const resetTasks = () => {
    setTasks([
      { id: 'task-1', name: 'Finish user workflow design', dept: 'Design Pod', weight: 33, completed: true },
      { id: 'task-2', name: 'Review security compliance', dept: 'Governance Pod', weight: 33, completed: false },
      { id: 'task-3', name: 'Deploy verification engine', dept: 'Engineering Pod', weight: 34, completed: false },
    ]);
  };

  // Dynamic calculations
  const completedCount = tasks.filter((t) => t.completed).length;
  const taskPercentage = Math.round((completedCount / tasks.length) * 100);
  // Project base 40% + 20% per task
  const projectPercentage = 40 + completedCount * 20;
  // Goal base 65% + ~11.6% per task
  const goalPercentage = 65 + Math.round((completedCount / 3) * 35);

  // Goal donut ring calculation (radius 38, circumference 2 * PI * 38 ≈ 238.76)
  const ringRadius = 38;
  const circumference = 2 * Math.PI * ringRadius;
  const strokeDashoffset = circumference - (goalPercentage / 100) * circumference;

  // Data: Section A Stages
  const WORKFLOW_STAGES = [
    {
      id: 'stage-goal',
      step: '01',
      title: 'Set a Goal',
      subtitle: 'Define the North Star',
      example: 'e.g. Scale Customer Operations to $20M ARR',
      icon: Target,
      color: 'text-brand-orange',
      badgeBg: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
      activeRing: 'border-brand-orange ring-brand-orange/20',
    },
    {
      id: 'stage-projects',
      step: '02',
      title: 'Plan Projects',
      subtitle: 'Break into deliverables',
      example: 'e.g. Customer Onboarding Redesign & Automation',
      icon: FolderGit2,
      color: 'text-[#b45309]',
      badgeBg: 'bg-[#fef9c3] text-[#b45309] border-amber-200',
      activeRing: 'border-amber-400 ring-amber-200/40',
    },
    {
      id: 'stage-tasks',
      step: '03',
      title: 'Assign Tasks',
      subtitle: 'Single owner per task',
      example: 'e.g. Assigned to Sarah K. with verified deadline',
      icon: Users,
      color: 'text-espresso',
      badgeBg: 'bg-surface-tier1 text-espresso border-brand-peach/80',
      activeRing: 'border-espresso ring-brand-peach/40',
    },
    {
      id: 'stage-complete',
      step: '04',
      title: 'Complete Work',
      subtitle: 'Verify deliverable',
      example: 'e.g. Verification check passes with zero friction',
      icon: CheckSquare,
      color: 'text-brand-green',
      badgeBg: 'bg-brand-green-light text-brand-green border-brand-green/30',
      activeRing: 'border-brand-green ring-brand-green/20',
    },
    {
      id: 'stage-progress',
      step: '05',
      title: 'See Progress',
      subtitle: 'Instant auto-rollup',
      example: 'e.g. Milestone & strategic goal roll up to 100%',
      icon: TrendingUp,
      color: 'text-brand-orange',
      badgeBg: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
      activeRing: 'border-brand-orange ring-brand-orange/20',
    },
  ];

  // Data: Section C Hub and Spoke details
  const SPOKES_DATA = {
    goals: {
      title: 'Strategic Goals',
      icon: Target,
      badge: 'Level 1: North Star',
      description: 'Goals define the strategic destinations of the entire company. Every goal connects down through projects, milestones, and everyday tasks with automated mathematical rollups.',
      benefit: 'Eliminates guesswork—leadership sees exact live completion status at any moment.',
    },
    projects: {
      title: 'Core Projects',
      icon: FolderGit2,
      badge: 'Level 2: Strategic Initiatives',
      description: 'Projects bridge high-level goals with departmental execution. Each project aggregates progress directly from completed tasks, calculating real-time milestone health.',
      benefit: 'Cross-functional dependencies stay visible with zero manual reporting.',
    },
    tasks: {
      title: 'Everyday Tasks',
      icon: CheckSquare,
      badge: 'Level 3: Actionable Deliverables',
      description: 'Tasks are assigned to dedicated pods and individual owners with unambiguous acceptance criteria. Checking off a task triggers instantaneous progress updates upwards.',
      benefit: 'Zero ambiguity on who owns what deliverable and when it is due.',
    },
    team: {
      title: 'Team Progress',
      icon: Users,
      badge: 'Level 4: Pod Alignment',
      description: 'Autonomous departmental pods maintain transparent visibility. Everyone understands how their everyday output accelerates the broader company objectives.',
      benefit: 'Replaces status-chasing sync meetings with objective, live data rollups.',
    },
  };

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col space-y-12 sm:space-y-16 selection:bg-brand-orange selection:text-white">
      
      {/* ==================================================================== */}
      {/* PAGE HEADER: Clear, visual-focused, simple English                   */}
      {/* ==================================================================== */}
      <div className="max-w-4xl space-y-2.5 sm:space-y-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight">
          From Your First Goal to <span className="text-brand-orange">Visible Progress.</span>
        </h1>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-2xl">
          Organize your work, connect your tasks, and see how everything moves forward.
        </p>
      </div>

      {/* ==================================================================== */}
      {/* SECTION A — The Astrav Workflow: 5-Stage Connected Flow Journey      */}
      {/* ==================================================================== */}
      <section
        ref={sectionARef}
        className="w-full p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm relative overflow-hidden space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-peach/40 pb-5">
          <div>
            <span className="text-xs font-mono font-extrabold text-brand-orange uppercase tracking-wider block">
              Section A — Workflow Journey
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-espresso">
              The 5-Stage Astrav Workflow
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-terracotta max-w-md">
            Click on any stage to see real-world execution in motion.
          </p>
        </div>

        {/* Connected Journey Visual */}
        <div className="relative pt-2">
          {/* Connecting Line on Desktop (lg+) */}
          <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-[3px] -z-0">
            <svg className="w-full h-[6px] overflow-visible" preserveAspectRatio="none">
              <line
                x1="0"
                y1="3"
                x2="100%"
                y2="3"
                stroke="#f7d7b0"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <motion.line
                x1="0"
                y1="3"
                x2="100%"
                y2="3"
                stroke="#f15e1c"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: isSectionAInView || shouldReduceMotion ? 1 : 0,
                }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          {/* 5 Stages Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeWorkflowStage === idx;
              const delay = shouldReduceMotion ? 0 : 0.1 * idx;

              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={
                    isSectionAInView || shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  transition={{ duration: 0.45, delay }}
                  onClick={() => setActiveWorkflowStage(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between group ${
                    isSelected
                      ? `bg-white shadow-warm-md ring-2 scale-[1.02] ${stage.activeRing}`
                      : 'bg-surface-ambient hover:bg-white border-brand-peach/70 hover:border-brand-orange/40 shadow-warm-2xs'
                  }`}
                >
                  <div className="space-y-3.5">
                    {/* Top Row: Stage Number & Icon */}
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all shadow-sm ${
                        isSelected
                          ? 'bg-brand-orange text-white shadow-glow-orange scale-105'
                          : 'bg-white border border-brand-peach/80 text-brand-orange group-hover:bg-brand-orange group-hover:text-white'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono font-extrabold text-xs text-terracotta-muted">
                        STAGE {stage.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading font-extrabold text-base text-espresso group-hover:text-brand-orange transition-colors">
                        {stage.title}
                      </h3>
                      <span className="text-[11px] font-mono text-terracotta-muted block mt-0.5">
                        {stage.subtitle}
                      </span>
                    </div>

                    {/* Stage Example Box */}
                    <div className="p-2.5 rounded-xl bg-surface-tier1 border border-brand-peach/50 text-[11px] text-terracotta leading-snug">
                      <span className="font-bold text-espresso block mb-0.5">Example:</span>
                      <span>{stage.example}</span>
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-brand-peach/40 flex items-center justify-between text-[11px]">
                    <span className={`font-mono font-bold ${isSelected ? 'text-brand-orange' : 'text-terracotta-muted'}`}>
                      {isSelected ? '● Active View' : 'Click to inspect'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Banner */}
        <div className="p-4 rounded-2xl bg-surface-tier1 border border-brand-peach/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="font-bold text-espresso font-heading">
              Current Focus: Stage {WORKFLOW_STAGES[activeWorkflowStage].step} — {WORKFLOW_STAGES[activeWorkflowStage].title}
            </span>
          </div>
          <span className="font-medium text-terracotta">
            {WORKFLOW_STAGES[activeWorkflowStage].example}
          </span>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION B — Try It Yourself: Interactive Progress Demonstration      */}
      {/* ==================================================================== */}
      <section
        ref={sectionBRef}
        className="w-full p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-white via-[#fffdfa] to-surface-ambient rounded-3xl border border-brand-peach/80 shadow-warm-sm space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-peach/40 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-extrabold text-brand-orange uppercase tracking-wider block">
              Section B — Live Interactive Demo
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-espresso">
              See Progress Come Together.
            </h2>
            <p className="text-xs sm:text-sm text-terracotta max-w-xl">
              Check off tasks below. Watch how completing individual actions automatically rolls up into project and goal milestones.
            </p>
          </div>
          <button
            onClick={resetTasks}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-brand-peach/80 text-xs font-heading font-bold text-espresso hover:text-brand-orange hover:border-brand-orange transition-colors shadow-warm-2xs cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5 text-brand-orange" />
            <span>Reset Demo</span>
          </button>
        </div>

        {/* 2-Column Demonstration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left: 3 Checkable Tasks */}
          <div className="lg:col-span-6 space-y-3">
            <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
              Interactive Task Queue ({completedCount}/3 Completed)
            </span>

            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 group ${
                  task.completed
                    ? 'bg-brand-green-light/40 border-brand-green/40 shadow-warm-2xs'
                    : 'bg-white border-brand-peach/80 hover:border-brand-orange/60 shadow-warm-2xs'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                      task.completed
                        ? 'bg-brand-green text-white shadow-sm'
                        : 'border-2 border-brand-peach/80 bg-white group-hover:border-brand-orange'
                    }`}
                  >
                    {task.completed && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <div className="truncate">
                    <span
                      className={`text-sm font-heading font-bold block truncate transition-all ${
                        task.completed
                          ? 'line-through text-terracotta-muted'
                          : 'text-espresso group-hover:text-brand-orange'
                      }`}
                    >
                      {task.name}
                    </span>
                    <span className="text-[11px] font-mono text-terracotta-muted">
                      {task.dept} • Weight: {task.weight}%
                    </span>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${
                    task.completed
                      ? 'bg-brand-green/10 text-brand-green border-brand-green/30'
                      : 'bg-surface-tier1 text-terracotta border-brand-peach/60'
                  }`}
                >
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
            ))}

            <p className="text-[11px] font-mono text-terracotta-muted italic pt-1">
              *All sample values are illustrative of the mathematical rollup engine.
            </p>
          </div>

          {/* Right: Connected Rollup Display */}
          <div className="lg:col-span-6 space-y-4 p-5 sm:p-6 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-sm">
            
            {/* Project Progress Meter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-brand-orange" />
                  <span className="font-heading font-extrabold text-espresso text-sm">
                    Connected Project: Onboarding Engine
                  </span>
                </div>
                <span className="font-mono font-extrabold text-brand-orange text-sm">
                  {projectPercentage}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-3 rounded-full bg-brand-peach/40 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green"
                  initial={{ width: '40%' }}
                  animate={{ width: `${projectPercentage}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Strategic Goal Ring & Indicator */}
            <div className="pt-3 border-t border-brand-peach/40 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-brand-green" />
                  <span className="font-heading font-extrabold text-espresso text-sm">
                    Company Goal Rollup
                  </span>
                </div>
                <p className="text-xs text-terracotta leading-relaxed max-w-xs font-normal">
                  Scale Operations to $20M ARR. Daily tasks feed directly into this North Star metric.
                </p>
                <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-brand-green font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Deterministic Automated Rollup</span>
                </div>
              </div>

              {/* Circular Goal Ring */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
                  <circle
                    cx="48"
                    cy="48"
                    r={ringRadius}
                    fill="none"
                    stroke="#f7d7b0"
                    strokeWidth="7"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r={ringRadius}
                    fill="none"
                    stroke="#2e936f"
                    strokeWidth="7"
                    strokeDasharray={circumference}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-heading font-extrabold text-sm sm:text-base text-espresso">
                    {goalPercentage}%
                  </span>
                  <span className="text-[9px] font-mono font-bold text-brand-green">
                    {goalPercentage === 100 ? 'Achieved' : 'On Track'}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION C — One Connected View: Interactive Hub-and-Spoke Diagram   */}
      {/* ==================================================================== */}
      <section
        ref={sectionCRef}
        className="w-full p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-peach/40 pb-5">
          <div className="space-y-1">
            <span className="text-xs font-mono font-extrabold text-brand-orange uppercase tracking-wider block">
              Section C — Hub-and-Spoke View
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-espresso">
              Everything Works Together.
            </h2>
            <p className="text-xs sm:text-sm text-terracotta max-w-xl">
              Goals, projects, tasks, and team progress form one single source of organizational truth. Select any node to explore.
            </p>
          </div>
        </div>

        {/* Hub-and-Spoke Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left/Center: Visual Spoke Nodes */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 relative p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60">
            {[
              { id: 'goals', label: '1. Strategic Goals', icon: Target, tag: 'North Star', color: 'border-brand-orange text-brand-orange' },
              { id: 'projects', label: '2. Core Projects', icon: FolderGit2, tag: 'Deliverables', color: 'border-amber-400 text-amber-600' },
              { id: 'tasks', label: '3. Everyday Tasks', icon: CheckSquare, tag: 'Actionable', color: 'border-brand-green text-brand-green' },
              { id: 'team', label: '4. Team Progress', icon: Users, tag: 'Pods & Owners', color: 'border-brand-orange text-brand-orange' },
            ].map((spoke, idx) => {
              const Icon = spoke.icon;
              const isSelected = selectedSpoke === spoke.id;
              const delay = shouldReduceMotion ? 0 : 0.08 * idx;

              return (
                <motion.div
                  key={spoke.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={
                    isSectionCInView || shouldReduceMotion
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.94 }
                  }
                  transition={{ duration: 0.4, delay }}
                  onClick={() => setSelectedSpoke(spoke.id)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-white border-brand-orange shadow-warm-md ring-2 ring-brand-orange/20 scale-[1.02]'
                      : 'bg-white/80 hover:bg-white border-brand-peach/70 hover:border-brand-orange/40 shadow-warm-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold ${
                      isSelected ? 'bg-brand-orange text-white' : 'bg-surface-tier1 text-brand-orange'
                    }`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-terracotta-muted px-2 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach/50">
                      {spoke.tag}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm sm:text-base text-espresso group-hover:text-brand-orange transition-colors">
                      {spoke.label}
                    </h4>
                    <span className="text-[11px] font-medium text-brand-orange mt-1 block">
                      {isSelected ? '● Currently Selected' : 'Click to inspect'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Dynamic Explanation Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSpoke}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-md space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold text-brand-orange uppercase tracking-wider">
                    {SPOKES_DATA[selectedSpoke as keyof typeof SPOKES_DATA].badge}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-heading font-extrabold text-espresso">
                  {SPOKES_DATA[selectedSpoke as keyof typeof SPOKES_DATA].title}
                </h3>

                <p className="text-sm text-terracotta leading-relaxed font-normal">
                  {SPOKES_DATA[selectedSpoke as keyof typeof SPOKES_DATA].description}
                </p>

                <div className="p-3.5 rounded-xl bg-surface-tier1 border border-brand-peach/60 space-y-1">
                  <span className="text-[11px] font-mono font-extrabold text-espresso uppercase tracking-wider block">
                    Core Benefit:
                  </span>
                  <p className="text-xs text-terracotta font-medium">
                    {SPOKES_DATA[selectedSpoke as keyof typeof SPOKES_DATA].benefit}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ==================================================================== */}
      {/* FINAL CTA: See Astrav in Action. (Book a Demo button)                */}
      {/* ==================================================================== */}
      <section className="w-full rounded-3xl bg-gradient-to-r from-[#fffbf7] via-[#fff5ee] to-[#fef2e8] p-8 sm:p-12 border-2 border-brand-peach/80 shadow-warm-md text-center space-y-5">
        <div className="max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-espresso">
            See Astrav in Action.
          </h2>
          <p className="text-sm sm:text-base text-terracotta">
            Book a quick 15-minute walkthrough to experience how automated rollups and aligned pods transform execution.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
          <button
            type="button"
            onClick={openDemoModal}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-heading font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-full shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
          <Link
            to="/product/automated-progress-rollups"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-heading font-bold text-espresso bg-white hover:bg-brand-orange-light rounded-full border border-brand-peach hover:border-brand-orange hover:text-brand-orange shadow-warm-sm transition-all cursor-pointer"
          >
            <span>Explore Rollup Engine</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HowItWorksPage;
