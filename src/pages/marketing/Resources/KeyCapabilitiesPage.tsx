import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Target,
  Layers,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2,
  Zap,
  Activity,
  GitBranch,
  ShieldAlert,
  Clock,
  LayoutGrid,
  Check,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import { openDemoModal } from '../../../components/common/DemoModal';

interface CapabilityData {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  benefit: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  bgLight: string;
}

export const KeyCapabilitiesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Key Capabilities — Astrav';
    window.scrollTo(0, 0);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  // Section A: 4 Core Capabilities
  const sectionARef = useRef<HTMLElement>(null);
  const isSectionAInView = useInView(sectionARef, { once: false, amount: 0.15 });

  // Section B: Capability Map (Hub & Spokes)
  const sectionBRef = useRef<HTMLElement>(null);
  const isSectionBInView = useInView(sectionBRef, { once: false, amount: 0.2 });
  const [selectedCapability, setSelectedCapability] = useState<string>('planning');

  // Section C: Before & After Diagram
  const sectionCRef = useRef<HTMLElement>(null);
  const isSectionCInView = useInView(sectionCRef, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<'both' | 'before' | 'after'>('both');

  // Interactive Card 3 state (Automatic Progress demo)
  const [autoTasks, setAutoTasks] = useState([
    { id: 1, name: 'Scope Definition', done: true, weight: 25 },
    { id: 2, name: 'Core Engine Build', done: true, weight: 35 },
    { id: 3, name: 'Security Verification', done: false, weight: 40 },
  ]);

  const toggleAutoTask = (id: number) => {
    setAutoTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const calculatedProgress = autoTasks.reduce(
    (acc, t) => acc + (t.done ? t.weight : 0),
    0
  );

  // 4 Core Capabilities metadata
  const CAPABILITIES: CapabilityData[] = [
    {
      id: 'planning',
      number: '01',
      title: 'Goal Planning',
      tagline: 'Set clear goals and turn them into manageable work.',
      summary:
        'Define overarching strategic goals and decompose them seamlessly into concrete milestones, projects, and daily tasks that every team member understands.',
      benefit: 'Eliminates ambiguity so everyone works toward the same North Star.',
      icon: Target,
      accentColor: '#f15e1c',
      borderColor: 'border-brand-orange/30',
      bgLight: 'bg-brand-orange-light',
    },
    {
      id: 'connected',
      number: '02',
      title: 'Connected Work',
      tagline: 'Keep projects, milestones, and tasks linked together.',
      summary:
        'No isolated tasks or disconnected spreadsheets. Every daily commit and subtask is linked directly up to a milestone and an active strategic goal.',
      benefit: 'No piece of work gets forgotten or decoupled from core outcomes.',
      icon: Layers,
      accentColor: '#2e936f',
      borderColor: 'border-brand-green/30',
      bgLight: 'bg-brand-green-light',
    },
    {
      id: 'rollups',
      number: '03',
      title: 'Automatic Progress',
      tagline: 'See overall progress update as work gets completed.',
      summary:
        'When tasks are checked off, progress rolls up deterministically through milestones and projects to your highest-level goal. Zero manual spreadsheets required.',
      benefit: 'Saves 3+ hours per week of manual status reporting across teams.',
      icon: TrendingUp,
      accentColor: '#fab60a',
      borderColor: 'border-amber-400/40',
      bgLight: 'bg-amber-50',
    },
    {
      id: 'visibility',
      number: '04',
      title: 'Team Visibility',
      tagline: 'Understand what is moving forward and what needs attention.',
      summary:
        'Give leaders and team members an honest, real-time pulse of execution. Spot bottlenecks and delays early before they affect your launch date.',
      benefit: 'Replaces guessing and status meetings with live, verified data.',
      icon: Users,
      accentColor: '#f15e1c',
      borderColor: 'border-brand-peach',
      bgLight: 'bg-surface-tier1',
    },
  ];

  const currentCap =
    CAPABILITIES.find((c) => c.id === selectedCapability) || CAPABILITIES[0];

  return (
    <div className="w-full min-h-screen bg-surface-ambient text-espresso flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1520px] 2xl:max-w-[1600px] mx-auto w-full text-left">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] text-espresso tracking-tight w-full max-w-none text-left leading-[1.12] lg:whitespace-nowrap"
        >
          Everything You Need to Keep <span className="text-brand-orange">Work Moving.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-terracotta text-base sm:text-lg lg:text-xl max-w-2xl text-left mt-2.5 sm:mt-3.5 font-normal leading-relaxed"
        >
          Bring goals, projects, tasks, and progress together in one clear workspace.
        </motion.p>
      </section>

      {/* 2. SECTION A: FOUR CORE CAPABILITIES */}
      <section
        ref={sectionARef}
        className="pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1520px] 2xl:max-w-[1600px] mx-auto w-full text-left"
      >
        <div className="text-left w-full max-w-4xl mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-espresso text-left">
            Four Core Capabilities
          </h2>
          <p className="text-sm sm:text-base text-terracotta text-left">
            Designed to bridge the gap between high-level ambition and ground-level execution.
          </p>
        </div>

        {/* 4 Balanced Cards with Unique Animated Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch w-full">
          {/* CARD 1: Goal Planning */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={
              isSectionAInView || shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 28 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full bg-white rounded-3xl p-6 sm:p-7 border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center text-brand-orange group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-terracotta-muted px-2.5 py-1 rounded-full bg-surface-tier1">
                  01
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-espresso mb-1">
                Goal Planning
              </h3>
              <p className="text-sm font-semibold text-brand-orange mb-3">
                Set clear goals and turn them into manageable work.
              </p>
              <p className="text-xs sm:text-sm text-terracotta leading-relaxed mb-6">
                Break complex quarterly strategies into actionable milestones with clear ownership and measurable deliverables.
              </p>

              {/* Unique Visual 1: Goal Hierarchy & Decomposition */}
              <div className="bg-surface-ambient rounded-2xl p-4 border border-brand-peach/60 space-y-2.5">
                <div className="text-[11px] font-mono font-bold text-terracotta-muted uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Goal Decomposition</span>
                  <span className="text-brand-orange font-semibold">Active</span>
                </div>

                {/* Top Node: North Star */}
                <motion.div
                  animate={
                    isSectionAInView && !shouldReduceMotion
                      ? { scale: [1, 1.02, 1] }
                      : {}
                  }
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="p-3 bg-white rounded-xl border border-brand-orange/40 shadow-xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                    <span className="text-xs font-heading font-bold text-espresso">
                      Q3 North Star: Enterprise Expansion
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-md">
                    Top Goal
                  </span>
                </motion.div>

                {/* Animated Connector Stems */}
                <div className="relative pl-5 space-y-2 border-l-2 border-dashed border-brand-orange/40 ml-3 py-1">
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={
                      isSectionAInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
                    }
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="p-2.5 bg-white rounded-lg border border-brand-peach/60 text-xs flex items-center justify-between"
                  >
                    <span className="text-espresso font-medium truncate">
                      Deliverable A: Rollup Computation Engine
                    </span>
                    <span className="text-[10px] font-mono text-brand-green font-bold bg-brand-green-light px-1.5 py-0.5 rounded">
                      On Track
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={
                      isSectionAInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
                    }
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="p-2.5 bg-white rounded-lg border border-brand-peach/60 text-xs flex items-center justify-between"
                  >
                    <span className="text-espresso font-medium truncate">
                      Deliverable B: SOC2 Security Audit
                    </span>
                    <span className="text-[10px] font-mono text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded">
                      Review
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs text-terracotta">
              <span>Clarity across all tiers</span>
              <span className="font-bold text-brand-orange">Deterministic</span>
            </div>
          </motion.div>

          {/* CARD 2: Connected Work */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={
              isSectionAInView || shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 28 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full bg-white rounded-3xl p-6 sm:p-7 border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-green-light border border-brand-green/30 flex items-center justify-center text-brand-green group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-terracotta-muted px-2.5 py-1 rounded-full bg-surface-tier1">
                  02
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-espresso mb-1">
                Connected Work
              </h3>
              <p className="text-sm font-semibold text-brand-green mb-3">
                Keep projects, milestones, and tasks linked together.
              </p>
              <p className="text-xs sm:text-sm text-terracotta leading-relaxed mb-6">
                Prevent work from becoming isolated. When every daily task is linked to a project and goal, momentum stays continuous.
              </p>

              {/* Unique Visual 2: Connected Chain of 3 Linked Elements */}
              <div className="bg-surface-ambient rounded-2xl p-4 border border-brand-peach/60 space-y-3">
                <div className="text-[11px] font-mono font-bold text-terracotta-muted uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Linked Execution Chain</span>
                  <span className="text-brand-green font-semibold">100% Linked</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center relative">
                  {/* Connector line behind */}
                  <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-brand-green/30 -translate-y-1/2 z-0" />

                  {/* Node 1: Goal */}
                  <div className="relative z-10 bg-white p-2.5 rounded-xl border border-brand-green/40 shadow-xs flex flex-col items-center">
                    <span className="text-[10px] font-mono font-bold text-brand-green uppercase">Goal</span>
                    <span className="text-xs font-bold text-espresso mt-0.5">Scale Q3</span>
                    <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5" />
                  </div>

                  {/* Node 2: Milestone */}
                  <div className="relative z-10 bg-white p-2.5 rounded-xl border border-brand-green/40 shadow-xs flex flex-col items-center">
                    <span className="text-[10px] font-mono font-bold text-brand-green uppercase">Milestone</span>
                    <span className="text-xs font-bold text-espresso mt-0.5">Engine v2</span>
                    <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5" />
                  </div>

                  {/* Node 3: Daily Task */}
                  <div className="relative z-10 bg-white p-2.5 rounded-xl border border-brand-green/40 shadow-xs flex flex-col items-center">
                    <span className="text-[10px] font-mono font-bold text-brand-green uppercase">Task</span>
                    <span className="text-xs font-bold text-espresso mt-0.5">API Tests</span>
                    <div className="w-2 h-2 rounded-full bg-brand-green mt-1.5" />
                  </div>
                </div>

                {/* Animated Signal Traveling along connection */}
                <div className="w-full bg-white rounded-lg p-2.5 border border-brand-peach/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={
                        isSectionAInView && !shouldReduceMotion
                          ? { x: [0, 8, 0] }
                          : {}
                      }
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Zap className="w-3.5 h-3.5 text-brand-green" />
                    </motion.div>
                    <span className="text-terracotta text-[11px]">
                      Task update triggers instant parent milestone refresh
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-green bg-brand-green-light px-1.5 py-0.5 rounded">
                    Live
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs text-terracotta">
              <span>No orphaned tasks</span>
              <span className="font-bold text-brand-green">Always Linked</span>
            </div>
          </motion.div>

          {/* CARD 3: Automatic Progress */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={
              isSectionAInView || shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 28 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full bg-white rounded-3xl p-6 sm:p-7 border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-terracotta-muted px-2.5 py-1 rounded-full bg-surface-tier1">
                  03
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-espresso mb-1">
                Automatic Progress
              </h3>
              <p className="text-sm font-semibold text-amber-600 mb-3">
                See overall progress update as work gets completed.
              </p>
              <p className="text-xs sm:text-sm text-terracotta leading-relaxed mb-6">
                Never ask "What is our status?" again. Click tasks below to test live automatic progress calculation.
              </p>

              {/* Unique Visual 3: Live Interactive Progress Rollup Widget */}
              <div className="bg-surface-ambient rounded-2xl p-4 border border-brand-peach/60 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                    Interactive Progress Rollup
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-heading font-extrabold text-espresso">
                      {calculatedProgress}%
                    </span>
                    <span className="text-[10px] font-mono font-bold text-brand-orange bg-brand-orange-light px-1.5 py-0.5 rounded">
                      Calculated
                    </span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="h-3 w-full bg-brand-peach/40 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 via-brand-orange to-brand-green"
                    initial={{ width: 0 }}
                    animate={{ width: `${calculatedProgress}%` }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  />
                </div>

                {/* Interactive Task Checkboxes */}
                <div className="space-y-1.5 pt-1">
                  {autoTasks.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => toggleAutoTask(t.id)}
                      className={`w-full text-left p-2 rounded-lg border text-xs flex items-center justify-between transition-colors ${
                        t.done
                          ? 'bg-brand-green-light/40 border-brand-green/30 text-espresso'
                          : 'bg-white border-brand-peach/60 text-terracotta hover:border-brand-orange/40'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                            t.done
                              ? 'bg-brand-green text-white'
                              : 'border border-terracotta-muted'
                          }`}
                        >
                          {t.done && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={t.done ? 'line-through text-terracotta-muted' : 'font-medium'}>
                          {t.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-terracotta-muted">
                        +{t.weight}%
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs text-terracotta">
              <span>Click tasks to test live math</span>
              <span className="font-bold text-amber-600">Zero Manual Math</span>
            </div>
          </motion.div>

          {/* CARD 4: Team Visibility */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={
              isSectionAInView || shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 28 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full bg-white rounded-3xl p-6 sm:p-7 border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center text-brand-orange group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-terracotta-muted px-2.5 py-1 rounded-full bg-surface-tier1">
                  04
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-espresso mb-1">
                Team Visibility
              </h3>
              <p className="text-sm font-semibold text-brand-orange mb-3">
                Understand what is moving forward and what needs attention.
              </p>
              <p className="text-xs sm:text-sm text-terracotta leading-relaxed mb-6">
                Empower managers and individual contributors with a real-time view into task velocity, roadblocks, and workload distribution.
              </p>

              {/* Unique Visual 4: Team Pulse Matrix */}
              <div className="bg-surface-ambient rounded-2xl p-4 border border-brand-peach/60 space-y-2.5">
                <div className="text-[11px] font-mono font-bold text-terracotta-muted uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Department Pulse Radar</span>
                  <span className="text-brand-green font-semibold">Updated 1m ago</span>
                </div>

                {/* Team Pod 1 */}
                <div className="p-2.5 bg-white rounded-xl border border-brand-peach/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-brand-green-light text-brand-green font-mono font-bold text-xs flex items-center justify-center">
                      ENG
                    </div>
                    <div>
                      <div className="text-xs font-heading font-bold text-espresso">
                        Core Engineering Pod
                      </div>
                      <div className="text-[10px] text-terracotta-muted">
                        14 active tasks · 0 roadblocks
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-brand-green">
                      92% Done
                    </span>
                  </div>
                </div>

                {/* Team Pod 2 */}
                <div className="p-2.5 bg-white rounded-xl border border-brand-peach/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-brand-orange-light text-brand-orange font-mono font-bold text-xs flex items-center justify-center">
                      DES
                    </div>
                    <div>
                      <div className="text-xs font-heading font-bold text-espresso">
                        Product & Design Pod
                      </div>
                      <div className="text-[10px] text-terracotta-muted">
                        8 active tasks · 1 review pending
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-[10px] font-mono font-bold text-amber-700">
                      78% Done
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs text-terracotta">
              <span>Cross-department sync</span>
              <span className="font-bold text-brand-orange">Always In View</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECTION B: SHOW HOW THEY CONNECT (INTERACTIVE CAPABILITY MAP) */}
      <section
        ref={sectionBRef}
        className="pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1520px] mx-auto w-full"
      >
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
          <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
            Interactive Ecosystem
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-espresso">
            One Workspace. Connected Work.
          </h2>
          <p className="text-sm sm:text-base text-terracotta">
            Select any capability around the Astrav core to see how they work together in real-time.
          </p>
        </div>

        {/* Interactive Capability Map Container */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 lg:p-10 border border-brand-peach/80 shadow-warm-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
            {/* Visual Map (7 Cols on LG) */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="relative w-full max-w-[580px] min-h-[360px] sm:min-h-[420px] flex items-center justify-center">
                {/* Outer Decorative Ambient Glow */}
                <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

                {/* Central Astrav Core Node */}
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={
                    isSectionBInView || shouldReduceMotion
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.6, opacity: 0 }
                  }
                  transition={{ duration: 0.55 }}
                  className="relative z-20 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-espresso via-[#3d261e] to-espresso text-white shadow-warm-xl flex flex-col items-center justify-center border-4 border-brand-peach/80"
                >
                  {/* Concentric Pulse Rings */}
                  <motion.div
                    animate={
                      isSectionBInView && !shouldReduceMotion
                        ? { scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }
                        : {}
                    }
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-2 border-brand-orange/40 pointer-events-none"
                  />

                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-orange flex items-center justify-center mb-1 shadow-md">
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="font-heading font-extrabold text-xs sm:text-sm tracking-tight text-white">
                    Astrav
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-brand-orange font-bold">
                    Core Engine
                  </span>
                </motion.div>

                {/* 4 Connected Capability Nodes Positioned Around Astrav */}
                {/* Node 1: Goal Planning (Top-Left) */}
                <div className="absolute top-2 left-2 sm:top-6 sm:left-6 z-30">
                  <button
                    onClick={() => setSelectedCapability('planning')}
                    className={`p-2.5 sm:p-4 rounded-2xl border text-left transition-all ${
                      selectedCapability === 'planning'
                        ? 'bg-brand-orange-light border-brand-orange shadow-warm-md scale-105'
                        : 'bg-white border-brand-peach/80 hover:border-brand-orange/40 hover:bg-surface-tier1 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Target className="w-4 h-4 text-brand-orange" />
                      <span className="text-xs sm:text-sm font-heading font-bold text-espresso">
                        Goal Planning
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-terracotta block">
                      Strategic alignment
                    </span>
                  </button>
                </div>

                {/* Node 2: Connected Work (Top-Right) */}
                <div className="absolute top-2 right-2 sm:top-6 sm:right-6 z-30">
                  <button
                    onClick={() => setSelectedCapability('connected')}
                    className={`p-2.5 sm:p-4 rounded-2xl border text-left transition-all ${
                      selectedCapability === 'connected'
                        ? 'bg-brand-green-light border-brand-green shadow-warm-md scale-105'
                        : 'bg-white border-brand-peach/80 hover:border-brand-green/40 hover:bg-surface-tier1 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-4 h-4 text-brand-green" />
                      <span className="text-xs sm:text-sm font-heading font-bold text-espresso">
                        Connected Work
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-terracotta block">
                      Linked execution
                    </span>
                  </button>
                </div>

                {/* Node 3: Automatic Progress (Bottom-Left) */}
                <div className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6 z-30">
                  <button
                    onClick={() => setSelectedCapability('rollups')}
                    className={`p-2.5 sm:p-4 rounded-2xl border text-left transition-all ${
                      selectedCapability === 'rollups'
                        ? 'bg-amber-50 border-amber-400 shadow-warm-md scale-105'
                        : 'bg-white border-brand-peach/80 hover:border-amber-400/40 hover:bg-surface-tier1 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-amber-600" />
                      <span className="text-xs sm:text-sm font-heading font-bold text-espresso">
                        Automatic Progress
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-terracotta block">
                      Real-time rollups
                    </span>
                  </button>
                </div>

                {/* Node 4: Team Visibility (Bottom-Right) */}
                <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 z-30">
                  <button
                    onClick={() => setSelectedCapability('visibility')}
                    className={`p-2.5 sm:p-4 rounded-2xl border text-left transition-all ${
                      selectedCapability === 'visibility'
                        ? 'bg-brand-orange-light border-brand-orange shadow-warm-md scale-105'
                        : 'bg-white border-brand-peach/80 hover:border-brand-orange/40 hover:bg-surface-tier1 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-brand-orange" />
                      <span className="text-xs sm:text-sm font-heading font-bold text-espresso">
                        Team Visibility
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-terracotta block">
                      Shared momentum
                    </span>
                  </button>
                </div>

                {/* SVG Connecting Spoke Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden="true">
                  {/* Spoke 1: Center to Top-Left */}
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2="22%"
                    y2="20%"
                    stroke="#f15e1c"
                    strokeWidth={selectedCapability === 'planning' ? '3' : '1.5'}
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={isSectionBInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    opacity={selectedCapability === 'planning' ? 1 : 0.4}
                  />
                  {/* Spoke 2: Center to Top-Right */}
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2="78%"
                    y2="20%"
                    stroke="#2e936f"
                    strokeWidth={selectedCapability === 'connected' ? '3' : '1.5'}
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={isSectionBInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    opacity={selectedCapability === 'connected' ? 1 : 0.4}
                  />
                  {/* Spoke 3: Center to Bottom-Left */}
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2="22%"
                    y2="80%"
                    stroke="#fab60a"
                    strokeWidth={selectedCapability === 'rollups' ? '3' : '1.5'}
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={isSectionBInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    opacity={selectedCapability === 'rollups' ? 1 : 0.4}
                  />
                  {/* Spoke 4: Center to Bottom-Right */}
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2="78%"
                    y2="80%"
                    stroke="#f15e1c"
                    strokeWidth={selectedCapability === 'visibility' ? '3' : '1.5'}
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={isSectionBInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    opacity={selectedCapability === 'visibility' ? 1 : 0.4}
                  />
                </svg>
              </div>
            </div>

            {/* Explanation Detail Card (5 Cols on LG) */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCap.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className={`p-6 sm:p-7 rounded-3xl border ${currentCap.borderColor} bg-surface-ambient shadow-xs flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl ${currentCap.bgLight} flex items-center justify-center`}
                          style={{ color: currentCap.accentColor }}
                        >
                          <currentCap.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                            Capability {currentCap.number}
                          </span>
                          <h4 className="font-heading font-extrabold text-xl text-espresso">
                            {currentCap.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-espresso leading-snug">
                      "{currentCap.tagline}"
                    </p>

                    <div className="p-3.5 bg-white rounded-2xl border border-brand-peach/60 space-y-2">
                      <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                        How It Works in Astrav
                      </span>
                      <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
                        {currentCap.summary}
                      </p>
                    </div>

                    <div className="p-3.5 bg-brand-green-light/40 rounded-2xl border border-brand-green/30 space-y-1">
                      <div className="flex items-center gap-1.5 text-brand-green text-xs font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Benefit for Your Team</span>
                      </div>
                      <p className="text-xs text-espresso font-medium pl-5">
                        {currentCap.benefit}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-peach/60 flex items-center justify-between">
                    <button
                      onClick={openDemoModal}
                      className="text-xs font-heading font-bold text-brand-orange hover:text-brand-orange-hover inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>See live walkthrough</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-mono text-terracotta-muted">
                      Deterministic Engine
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION C: FROM EVERYDAY WORK TO CLEAR RESULTS (BEFORE & AFTER DIAGRAM) */}
      <section
        ref={sectionCRef}
        className="pt-4 sm:pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1520px] 2xl:max-w-[1600px] mx-auto w-full text-left"
      >
        <div className="text-left w-full max-w-4xl mb-6 sm:mb-8 space-y-1.5 sm:space-y-2">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-espresso text-left">
            From Everyday Work to Clear Results
          </h2>
          <p className="text-sm sm:text-base text-terracotta text-left">
            See the difference between disconnected manual tracking and Astrav's automated execution system.
          </p>

          {/* View Toggle on Mobile/Tablet */}
          <div className="inline-flex sm:hidden p-1 bg-white rounded-xl border border-brand-peach mt-2.5">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                activeTab === 'both' ? 'bg-brand-orange text-white' : 'text-terracotta'
              }`}
            >
              Both
            </button>
            <button
              onClick={() => setActiveTab('before')}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                activeTab === 'before' ? 'bg-brand-orange text-white' : 'text-terracotta'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-3 py-1 rounded-lg text-xs font-bold ${
                activeTab === 'after' ? 'bg-brand-orange text-white' : 'text-terracotta'
              }`}
            >
              With Astrav
            </button>
          </div>
        </div>

        {/* Compact Before and After Side-by-Side Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch w-full">
          {/* PANEL 1: BEFORE ASTRAV */}
          {(activeTab === 'both' || activeTab === 'before') && (
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={
                isSectionCInView || shouldReduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -24 }
              }
              transition={{ duration: 0.55 }}
              className="w-full bg-white/80 rounded-3xl p-6 sm:p-8 border border-brand-peach/80 shadow-warm-sm flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Pill */}
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider shrink-0">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Before Astrav</span>
                </div>
                <span className="text-xs font-mono text-terracotta-muted shrink-0">
                  Fragmented Workflow
                </span>
              </div>

              {/* 3 Step Flow */}
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60 flex items-start gap-3 w-full">
                  <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0 font-bold text-xs">
                    ✕
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm text-espresso">
                      Disconnected Tasks
                    </h4>
                    <p className="text-xs text-terracotta leading-relaxed mt-0.5">
                      Work lives scattered across Slack threads, Jira tickets, and local todo lists with zero direct link to high-level goals.
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 text-terracotta-muted rotate-90" />
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60 flex items-start gap-3 w-full">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold text-xs">
                    ⏳
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm text-espresso">
                      Manual Updates & Chasing
                    </h4>
                    <p className="text-xs text-terracotta leading-relaxed mt-0.5">
                      Managers spend hours weekly messaging "Any update on this?", pasting outdated numbers into manual spreadsheet rollups.
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 text-terracotta-muted rotate-90" />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60 flex items-start gap-3 w-full">
                  <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0 font-bold text-xs">
                    ❓
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm text-espresso">
                      Unclear Progress & Guesswork
                    </h4>
                    <p className="text-xs text-terracotta leading-relaxed mt-0.5">
                      Nobody knows if the release date is realistic until the last week, resulting in sudden fire-drills and delayed launches.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Result Summary */}
              <div className="mt-6 pt-4 border-t border-brand-peach/60 flex items-center justify-between text-xs text-red-700 font-medium">
                <span>Result: Blind spots and delayed launches</span>
                <span className="font-mono font-bold shrink-0">Low Confidence</span>
              </div>
            </motion.div>
          )}

          {/* PANEL 2: WITH ASTRAV */}
          {(activeTab === 'both' || activeTab === 'after') && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={
                isSectionCInView || shouldReduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 24 }
              }
              transition={{ duration: 0.55 }}
              className="w-full bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-orange/40 shadow-warm-lg flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle Brand Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-orange-light/60 blur-2xl pointer-events-none" />

              {/* Top Pill */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-light border border-brand-green/30 text-brand-green text-xs font-mono font-bold uppercase tracking-wider shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>With Astrav</span>
                </div>
                <span className="text-xs font-mono font-bold text-brand-orange shrink-0">
                  Deterministic System
                </span>
              </div>

              {/* 3 Step Flow */}
              <div className="space-y-4 relative z-10">
                {/* Step 1 */}
                <div className="p-4 rounded-2xl bg-brand-green-light/30 border border-brand-green/40 flex items-start gap-3 w-full">
                  <div className="w-8 h-8 rounded-xl bg-brand-green text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm text-espresso">
                      Connected Work
                    </h4>
                    <p className="text-xs text-terracotta leading-relaxed mt-0.5">
                      Every daily task is explicitly linked to milestones and strategic goals. Nothing exists in isolation.
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 text-brand-green rotate-90" />
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-2xl bg-brand-orange-light/30 border border-brand-orange/40 flex items-start gap-3 w-full">
                  <div className="w-8 h-8 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                    <Zap className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm text-espresso">
                      Automatic Rollups
                    </h4>
                    <p className="text-xs text-terracotta leading-relaxed mt-0.5">
                      Completing daily work automatically recalculates project and goal percentages in real-time. Zero status meetings needed.
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <ArrowRight className="w-4 h-4 text-brand-green rotate-90" />
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-2xl bg-brand-green-light/30 border border-brand-green/40 flex items-start gap-3 w-full">
                  <div className="w-8 h-8 rounded-xl bg-brand-green text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-xs">
                    <TrendingUp className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading font-bold text-sm text-espresso">
                      Clear Visibility
                    </h4>
                    <p className="text-xs text-terracotta leading-relaxed mt-0.5">
                      Leaders and pods see instant, verified progress. Risks are detected weeks before they threaten your roadmap.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Result Summary */}
              <div className="mt-6 pt-4 border-t border-brand-peach/60 flex items-center justify-between text-xs text-brand-green font-bold relative z-10">
                <span>Result: Continuous momentum & alignment</span>
                <span className="font-mono shrink-0">100% Verified</span>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="p-8 sm:p-12 rounded-3xl bg-white border border-brand-peach/80 shadow-warm-xl flex flex-col items-center space-y-5"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-orange-light border border-brand-orange/30 flex items-center justify-center text-brand-orange">
            <Target className="w-7 h-7" />
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-espresso tracking-tight">
            Bring Your Work Into Focus.
          </h2>

          <p className="text-terracotta text-sm sm:text-base max-w-xl mx-auto">
            Experience how connected goals, projects, and automatic progress rollups transform execution across your entire organization.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={openDemoModal}
              className="btn-brand-primary px-7 py-3.5 text-sm sm:text-base font-heading font-bold shadow-md shadow-brand-orange/30 inline-flex items-center gap-2"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
