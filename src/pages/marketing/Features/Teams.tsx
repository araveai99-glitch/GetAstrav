import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Users,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Palette,
  Server,
  Zap,
  Play,
  Pause,
  Check,
  Send,
  UserCheck,
  Radio,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';
import { IllustratedCardBadge } from '../../../components/common/IllustratedCardBadge';

interface PodNode {
  id: string;
  name: string;
  role: string;
  lead: string;
  leadAvatar: string;
  icon: React.ElementType;
  accent: string;
  badgeBg: string;
  tasksCompleted: number;
  totalTasks: number;
  progress: number;
  recentDeliverable: string;
}

const PODS: PodNode[] = [
  {
    id: 'design',
    name: 'Design Pod',
    role: 'UX Architecture & Design System',
    lead: 'Elena Rostova',
    leadAvatar: 'ER',
    icon: Palette,
    accent: 'text-brand-orange',
    badgeBg: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
    tasksCompleted: 4,
    totalTasks: 4,
    progress: 100,
    recentDeliverable: 'Design Tokens & Interactive Wireframes',
  },
  {
    id: 'frontend',
    name: 'Frontend Pod',
    role: 'Client Interfaces & State Sync',
    lead: 'Marcus Vance',
    leadAvatar: 'MV',
    icon: Cpu,
    accent: 'text-brand-green',
    badgeBg: 'bg-brand-green-light text-brand-green border-brand-green/30',
    tasksCompleted: 6,
    totalTasks: 7,
    progress: 85,
    recentDeliverable: 'Real-Time Telemetry Dashboard UI',
  },
  {
    id: 'backend',
    name: 'Backend Pod',
    role: 'Core Engine & Database Layer',
    lead: 'Priya Sharma',
    leadAvatar: 'PS',
    icon: Server,
    accent: 'text-amber-600',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    tasksCompleted: 5,
    totalTasks: 7,
    progress: 71,
    recentDeliverable: 'Mathematical Rollup Edge Computation',
  },
];

export const Teams: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedPodId, setSelectedPodId] = useState<string>('frontend');
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);
  const [streamCount, setStreamCount] = useState<number>(15);
  const [activeVelocityPod, setActiveVelocityPod] = useState<'design' | 'frontend' | 'backend'>('frontend');

  useEffect(() => {
    document.title = 'Teams & Autonomous Pods — Astrav';
    window.scrollTo(0, 0);
  }, []);

  // Auto-cycle active pod to showcase task stream into hub
  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setSelectedPodId((prev) => {
        const idx = PODS.findIndex((p) => p.id === prev);
        return PODS[(idx + 1) % PODS.length].id;
      });
      setStreamCount((c) => (c >= 18 ? 15 : c + 1));
    }, 4200);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const selectedPod = PODS.find((p) => p.id === selectedPodId) || PODS[0];

  // Overall initiative weighted progress
  const totalCompleted = PODS.reduce((acc, p) => acc + p.tasksCompleted, 0);
  const totalTasks = PODS.reduce((acc, p) => acc + p.totalTasks, 0);
  const overallProgress = Math.min(100, Math.round((streamCount / totalTasks) * 100));

  const handleManualStream = (podId: string) => {
    setIsAutoCycling(false);
    setSelectedPodId(podId);
    setStreamCount((prev) => (prev < 18 ? prev + 1 : 15));
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
          Autonomous Pods Aligned to <span className="text-brand-orange">Shared Goals.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Group cross-disciplinary specialists into autonomous execution pods. Completed tasks stream live into shared project milestones without status meetings or functional boundaries.
        </motion.p>
      </div>

      {/* 2. MAIN ATTRACTION: Animated Team Pods Connecting to Central Project Hub */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.05 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-warm-md hover:shadow-warm-lg transition-shadow relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-brand-peach/50 relative z-10">
          <div>
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
              Cross-Pod <span className="text-brand-orange">Collaboration Hub</span>
            </h2>
            <p className="text-base text-terracotta mt-1.5 leading-relaxed">
              Click any pod to stream its verified output directly into the central initiative milestone.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setIsAutoCycling((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-tier1 hover:bg-brand-peach/30 border border-brand-peach/60 text-sm font-heading font-semibold text-espresso transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              {isAutoCycling ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <span>Pause Stream</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-brand-green fill-brand-green" />
                  <span>Auto Stream</span>
                </>
              )}
            </button>

            <span className="inline-flex items-center gap-1.5 text-[13px] font-heading font-semibold text-terracotta-muted bg-surface-tier1 px-3 py-1.5 rounded-xl border border-brand-peach/50">
              <Users className="w-4 h-4 text-brand-orange" />
              <span>Zero Functional Silos</span>
            </span>
          </div>
        </div>

        {/* Central Hub & Pod Nodes Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Central Project Milestone Hub (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-surface-tier1 via-white to-surface-tier2 rounded-3xl p-6 sm:p-8 border-2 border-brand-peach/80 shadow-warm-md space-y-6 relative overflow-hidden">
            {/* Animated Pulse Beam on Central Hub */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange-light/30 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-terracotta-muted tracking-wider uppercase">
                CENTRAL PROJECT INITIATIVE
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full border border-brand-green/30">
                <Radio className="w-3.5 h-3.5 text-brand-green animate-pulse" />
                Live Sync Active
              </span>
            </div>

            <div>
              <h3 className="font-heading font-extrabold text-[22px] sm:text-2xl text-espresso">
                Customer Experience Engine v3
              </h3>
              <p className="text-[15px] sm:text-sm text-terracotta-muted mt-1.5 leading-relaxed">
                3 cross-functional pods contributing outputs to 1 synchronized milestone.
              </p>
            </div>

            {/* Circular / Large Bar Progress Metric */}
            <div className="p-5 rounded-2xl bg-white border border-brand-peach/60 space-y-3 shadow-warm-2xs">
              <div className="flex items-center justify-between text-sm sm:text-base font-heading font-bold">
                <span className="text-espresso">Initiative Completion</span>
                <motion.span
                  key={overallProgress}
                  initial={{ scale: 1.2, color: '#f15e1c' }}
                  animate={{ scale: 1 }}
                  className="text-brand-orange text-lg font-mono"
                >
                  {overallProgress}%
                </motion.span>
              </div>
              <div className="w-full h-3.5 rounded-full bg-surface-tier2 border border-brand-peach/50 p-0.5 overflow-hidden">
                <motion.div
                  initial={false}
                  animate={{ width: `${overallProgress}%` }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green"
                />
              </div>
              <div className="flex items-center justify-between text-[13px] sm:text-xs text-terracotta-muted pt-1">
                <span>{streamCount} of {totalTasks} Tasks Rolled Up</span>
                <span className="text-brand-green font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Synchronized
                </span>
              </div>
            </div>

            {/* Live Incoming Stream Callout */}
            <div className="p-4 rounded-2xl bg-white border border-brand-orange/30 flex items-center gap-3.5 shadow-warm-2xs">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] border border-brand-orange/30 text-brand-orange flex items-center justify-center shrink-0 shadow-sm shadow-brand-orange/10">
                <Zap className="w-6.5 h-6.5 stroke-[2] animate-bounce" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-mono font-bold text-brand-orange uppercase block">
                  Active Stream from {selectedPod.name}
                </span>
                <span className="text-sm sm:text-xs font-heading font-bold text-espresso truncate block">
                  {selectedPod.recentDeliverable}
                </span>
              </div>
            </div>
          </div>

          {/* Connected Pod Nodes (7 cols) with Animated Streaming Triggers */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block mb-1">
              Contributing Autonomous Execution Pods (Click to Stream):
            </span>

            <div className="space-y-3.5">
              {PODS.map((pod) => {
                const Icon = pod.icon;
                const isSelected = selectedPodId === pod.id;

                return (
                  <button
                    key={pod.id}
                    type="button"
                    onClick={() => handleManualStream(pod.id)}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all cursor-pointer select-none flex flex-col sm:flex-row sm:items-center justify-between gap-4 group ${
                      isSelected
                        ? 'bg-brand-orange-light/40 border-brand-orange shadow-warm-md scale-[1.01]'
                        : 'bg-white border-brand-peach/50 hover:border-brand-peach hover:bg-surface-tier1/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all group-hover:scale-105 group-hover:rotate-2 ${
                          isSelected
                            ? 'bg-gradient-to-br from-brand-orange to-[#d94e10] text-white shadow-md shadow-brand-orange/25'
                            : 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] text-brand-orange border border-brand-orange/30 shadow-xs shadow-brand-orange/10'
                        }`}
                      >
                        <Icon className="w-7 h-7 stroke-[2]" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-heading font-bold text-[17px] sm:text-base text-espresso">
                            {pod.name}
                          </h4>
                          <span
                            className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${pod.badgeBg}`}
                          >
                            {pod.progress}% Run Rate
                          </span>
                        </div>
                        <p className="text-[13px] sm:text-xs text-terracotta-muted mt-0.5">
                          Lead: {pod.lead} ({pod.leadAvatar}) • {pod.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-brand-peach/40">
                      <div className="text-left sm:text-right">
                        <span className="text-sm sm:text-xs font-mono font-bold text-espresso block">
                          {pod.tasksCompleted}/{pod.totalTasks} Tasks
                        </span>
                        <span className="text-xs text-brand-green font-medium flex items-center gap-1 sm:justify-end">
                          <Send className="w-3 h-3" /> Stream to Hub
                        </span>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-transform group-hover:translate-x-1 ${
                          isSelected
                            ? 'bg-brand-orange text-white shadow-warm-2xs'
                            : 'bg-surface-tier2 text-terracotta-muted'
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Pod Deliverable Detail */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-tier1/80 border border-brand-peach/60 flex items-center justify-between text-sm">
              <span className="text-terracotta">
                <strong>{selectedPod.name}:</strong> Daily outputs push into the central container in real time.
              </span>
              <span className="font-mono font-bold text-brand-orange shrink-0 pl-3">
                Live Pod Channel
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Redesigned Premium Feature Cards with Interactive Micro-Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Cross-Functional Velocity */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-orange/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="teams" size="md" />
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/20">
                Zero Handoffs
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Cross-Functional Velocity
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Designers, engineers, and product leads collaborate in the same pod container. Work advances from wireframe to PR with zero ticketing queues.
            </p>

            {/* Micro Specialist Allocation Widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2.5">
              <span className="text-xs font-mono font-bold text-terracotta-muted uppercase block">
                Pod Composition
              </span>
              <div className="grid grid-cols-3 gap-1.5 text-center text-xs">
                <div className="p-2 bg-white rounded-xl border border-brand-peach/40">
                  <span className="font-bold text-brand-orange block">1 Design</span>
                  <span className="text-[11px] text-terracotta-muted">UI/Tokens</span>
                </div>
                <div className="p-2 bg-white rounded-xl border border-brand-peach/40">
                  <span className="font-bold text-brand-green block">2 Frontend</span>
                  <span className="text-[11px] text-terracotta-muted">React/State</span>
                </div>
                <div className="p-2 bg-white rounded-xl border border-brand-peach/40">
                  <span className="font-bold text-amber-700 block">2 Backend</span>
                  <span className="text-[11px] text-terracotta-muted">APIs/DB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center text-sm font-heading font-semibold text-brand-orange">
            <span>Single Mission Pods</span>
          </div>
        </motion.div>

        {/* Card 2: Continuous Progress Streaming */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-green/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="progress" size="md" />
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 py-0.5 rounded-full border border-brand-green/20">
                Live Cascade
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Continuous Progress Streaming
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Outputs stream automatically into company initiatives. Founders review live run-rates without pinging builders or waiting for sprint demos.
            </p>

            {/* Micro Live Ticker Widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2">
              <div className="flex items-center justify-between text-sm sm:text-xs font-mono font-bold">
                <span className="text-espresso">Live Feed Pulse</span>
                <span className="text-brand-green flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" /> Active
                </span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-brand-peach/40 text-xs text-terracotta truncate">
                ✓ Elena approved design token package v2.4
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center text-sm font-heading font-semibold text-brand-green">
            <span>Zero Status Interruption</span>
          </div>
        </motion.div>

        {/* Card 3: Autonomous Pod Accountability */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.19 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-amber-400/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="control" size="md" />
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Direct Ownership
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Autonomous Ownership
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Pod leads own their SLA commitments end-to-end. Cross-pod dependencies become instantly visible before launch timelines slip.
            </p>

            {/* Micro SLA Ownership Pill */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-espresso">Pod SLA Health</span>
                <span className="font-mono text-amber-700 font-bold">100% On-Target</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white border border-brand-peach/40 overflow-hidden">
                <div className="w-full h-full bg-brand-green rounded-full" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center text-sm font-heading font-semibold text-amber-700">
            <span>Clear Pod Accountability</span>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
