import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  BellRing,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Clock,
  Sparkles,
  Bot,
  MessageSquare,
  Check,
  Play,
  Pause,
  RotateCcw,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Sliders,
  Send,
  Radio,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';
import { IllustratedCardBadge } from '../../../components/common/IllustratedCardBadge';

interface AutomationStep {
  stepNumber: number;
  id: string;
  title: string;
  badge: string;
  status: string;
  timeLabel: string;
  icon: React.ElementType;
  accent: string;
  badgeBg: string;
  summary: string;
  visualDetail: {
    heading: string;
    subheading: string;
    messageBox?: {
      sender: string;
      channel: string;
      text: string;
      time: string;
    };
    taskStatusText: string;
    progressValue: number;
  };
}

const AUTOMATION_FLOW: AutomationStep[] = [
  {
    stepNumber: 1,
    id: 'trigger',
    title: 'Deadline Near',
    badge: 'Event Triggered',
    status: 'Monitoring SLA',
    timeLabel: 'T-minus 4 Hours',
    icon: AlertTriangle,
    accent: 'text-amber-600',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    summary: 'Astrav event daemon detects that TASK-0219 has 4 hours remaining before its SLA target window closes.',
    visualDetail: {
      heading: 'Event Detection: SLA Threshold Reached',
      subheading: 'Deliverable: Implement Stripe Webhook Deduplication',
      taskStatusText: 'In Progress (Active SLA Alert)',
      progressValue: 70,
    },
  },
  {
    stepNumber: 2,
    id: 'reminder',
    title: 'Reminder Sent',
    badge: 'Proactive Alert',
    status: 'Notification Dispatched',
    timeLabel: 'Instant Dispatch',
    icon: BellRing,
    accent: 'text-brand-orange',
    badgeBg: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
    summary: 'Automated notification dispatched directly to Sarah Chen via Slack and in-app banner with direct deliverable deep-link.',
    visualDetail: {
      heading: 'Automated Slack & In-App Alert Sent',
      subheading: 'No manager intervention required — triggered automatically by system.',
      messageBox: {
        sender: 'Astrav Automation Bot',
        channel: '#pod-backend-alerts',
        text: '👋 @sarah — TASK-0219 is approaching its 4h SLA target. PR review ready? Click here to verify checklist.',
        time: 'Just now',
      },
      taskStatusText: 'Notification Acknowledged by Assignee',
      progressValue: 85,
    },
  },
  {
    stepNumber: 3,
    id: 'resolved',
    title: 'Task Updated',
    badge: 'Auto Sync',
    status: 'Milestone Updated',
    timeLabel: 'Verified Complete',
    icon: CheckCircle2,
    accent: 'text-brand-green',
    badgeBg: 'bg-brand-green-light text-brand-green border-brand-green/30',
    summary: 'Sarah merges pull request. Task automatically transitions to Completed and rolls up +15% into Q4 Release Milestone.',
    visualDetail: {
      heading: 'Milestone Recalculated Automatically',
      subheading: 'Parent Milestone "Q4 Payments Architecture" advances to 100% On-Time.',
      taskStatusText: 'Completed & Verified On Schedule',
      progressValue: 100,
    },
  },
];

export const Automation: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [notificationChannel, setNotificationChannel] = useState<'slack' | 'email' | 'in_app'>('slack');

  useEffect(() => {
    document.title = 'Automations & Workflow Triggers — Astrav';
    window.scrollTo(0, 0);
  }, []);

  // Auto-play through 3 sequential pipeline stages
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentStepIdx((prev) => (prev + 1) % AUTOMATION_FLOW.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentStep = AUTOMATION_FLOW[currentStepIdx];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12 selection:bg-brand-orange selection:text-white">
      {/* 1. Page Header */}
      <div className="text-left w-full max-w-5xl space-y-2 mb-2 sm:mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left lg:whitespace-nowrap"
        >
          Automated Reminders and <span className="text-brand-orange">Workflow Triggers.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Watch how deadlines trigger proactive notifications and automatically update status—without managers chasing updates or scheduling status calls.
        </motion.p>
      </div>

      {/* 2. MAIN ATTRACTION: Live Animated Trigger-and-Action Workflow */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-warm-md hover:shadow-warm-lg transition-shadow relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-brand-peach/50 relative z-10">
          <div>
            <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
              Trigger-to-Resolution <span className="text-brand-orange">Pipeline</span>
            </h2>
            <p className="text-base text-terracotta mt-1.5 leading-relaxed">
              Follow how an approaching deadline triggers proactive reminders and synchronizes project status automatically.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-tier1 hover:bg-brand-peach/30 border border-brand-peach/60 text-sm font-heading font-semibold text-espresso transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
                  <span>Pause Sequence</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-brand-green fill-brand-green" />
                  <span>Auto Sequence</span>
                </>
              )}
            </button>

            <span className="inline-flex items-center gap-1.5 text-[13px] font-heading font-semibold text-terracotta-muted bg-surface-tier1 px-3 py-1.5 rounded-xl border border-brand-peach/50">
              <Zap className="w-4 h-4 text-brand-orange animate-pulse" />
              <span>Reactive Event Engine</span>
            </span>
          </div>
        </div>

        {/* 3 Interactive Sequential Flow Nodes with Flowing Light Beam */}
        <div className="relative mb-8 sm:mb-10 px-2 sm:px-6 relative z-10">
          <div className="absolute top-6 left-12 right-12 h-2.5 bg-surface-tier2 rounded-full -translate-y-1/2 z-0 hidden sm:block overflow-hidden">
            {!shouldReduceMotion && (
              <motion.div
                animate={{ x: ['-100%', '300%'] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-80"
              />
            )}
          </div>

          <motion.div
            className="absolute top-6 left-12 h-2.5 bg-gradient-to-r from-amber-400 via-brand-orange to-brand-green rounded-full -translate-y-1/2 z-0 hidden sm:block"
            initial={false}
            animate={{
              width:
                currentStepIdx === 0
                  ? '0%'
                  : currentStepIdx === 1
                  ? '50%'
                  : 'calc(100% - 6rem)',
            }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeInOut' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 relative z-10">
            {AUTOMATION_FLOW.map((step, idx) => {
              const isSelected = currentStepIdx === idx;
              const isPassed = currentStepIdx >= idx;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentStepIdx(idx);
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
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-3 ${
                        isSelected
                          ? 'bg-gradient-to-br from-brand-orange to-[#d94e10] text-white shadow-sm shadow-brand-orange/25'
                          : isPassed
                          ? 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7] text-brand-green border border-brand-green/30 shadow-xs'
                          : 'bg-gradient-to-br from-surface-tier1 to-surface-tier2 text-terracotta-muted border border-brand-peach/50'
                      }`}
                    >
                      {isPassed && idx < currentStepIdx ? (
                        <Check className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <Icon className="w-5 h-5 stroke-[2]" />
                      )}
                    </div>

                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${step.badgeBg}`}
                    >
                      {step.timeLabel}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-[17px] sm:text-base text-espresso flex items-center justify-between">
                      <span>{step.stepNumber}. {step.title}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                      )}
                    </h3>
                    <p className="text-[13px] sm:text-xs text-terracotta-muted mt-0.5">
                      {step.status}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Step Demonstration Canvas */}
        <div className="bg-surface-tier1/70 rounded-2xl p-5 sm:p-8 border border-brand-peach/60 space-y-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-brand-peach/40">
            <div>
              <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider block mb-1">
                Active Simulation Stage
              </span>
              <h4 className="font-heading font-extrabold text-[20px] sm:text-xl text-espresso">
                {currentStep.visualDetail.heading}
              </h4>
              <p className="text-sm text-terracotta-muted mt-1 leading-relaxed">
                {currentStep.visualDetail.subheading}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs font-mono font-bold text-brand-green bg-white px-3 py-1 rounded-full border border-brand-peach/50">
                {currentStep.visualDetail.taskStatusText}
              </span>
            </div>
          </div>

          {/* Conditional Visual Element (e.g., Slack Bot Message in Step 2) */}
          {currentStep.visualDetail.messageBox && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/70 shadow-warm-xs space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-orange text-white flex items-center justify-center shadow-warm-2xs">
                    <Bot className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-heading font-bold text-sm text-espresso">
                    {currentStep.visualDetail.messageBox.sender}
                  </span>
                  <span className="text-xs font-mono text-terracotta-muted">
                    {currentStep.visualDetail.messageBox.channel}
                  </span>
                </div>
                <span className="text-xs text-terracotta-muted">
                  {currentStep.visualDetail.messageBox.time}
                </span>
              </div>
              <p className="text-sm text-terracotta font-mono bg-surface-tier1 p-3 rounded-xl border border-brand-peach/40">
                {currentStep.visualDetail.messageBox.text}
              </p>
            </motion.div>
          )}

          {/* Dynamic Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3 text-sm sm:text-sm font-heading font-bold">
              <span className="text-espresso min-w-0">Initiative Resolution Impact</span>
              <motion.span
                key={currentStep.visualDetail.progressValue}
                initial={{ scale: 1.2, color: '#f15e1c' }}
                animate={{ scale: 1 }}
                className="text-brand-orange font-mono whitespace-nowrap shrink-0"
              >
                {currentStep.visualDetail.progressValue}% Completed
              </motion.span>
            </div>
            <div className="w-full h-3.5 rounded-full bg-white border border-brand-peach/50 p-0.5 overflow-hidden">
              <motion.div
                initial={false}
                animate={{ width: `${currentStep.visualDetail.progressValue}%` }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
                className={`h-full rounded-full ${
                  currentStepIdx === 2
                    ? 'bg-brand-green'
                    : 'bg-gradient-to-r from-amber-500 via-brand-orange to-brand-green'
                }`}
              />
            </div>
          </div>

          {/* Explanation */}
          <div className="p-4 rounded-xl bg-white border border-brand-peach/50 text-base text-terracotta leading-relaxed shadow-warm-2xs">
            <span className="font-heading font-bold text-espresso block mb-1">
              Cause & Effect Sequence:
            </span>
            {currentStep.summary}
          </div>
        </div>
      </motion.div>

      {/* 3. Redesigned Premium Feature Cards with Micro-Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Zero Status Chasing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-orange/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="automation" size="md" />
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/20">
                Proactive
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Zero Status Chasing
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Eliminate daily standup status pings. The system automatically prompts assignees before deadlines and alerts leads only when true action is needed.
            </p>

            {/* Micro Trigger Threshold Widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-espresso font-bold">
                <span>Default Trigger Window:</span>
                <span className="text-brand-orange">4h Before SLA</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white border border-brand-peach/40 overflow-hidden">
                <div className="w-4/5 h-full bg-brand-orange rounded-full" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-brand-orange">
            <span>Less Friction, More Flow</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 2: Proactive Risk Protection */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-green/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="control" size="md" />
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 py-0.5 rounded-full border border-brand-green/20">
                Early Warning
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Proactive Risk Protection
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Never be surprised by a missed launch date. Triggers fire early enough for pod members to reassign subtasks or ask for executive unblocking.
            </p>

            {/* Micro Multi-Channel Routing Selector */}
            <div className="p-3 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2">
              <div className="flex items-center justify-between text-sm sm:text-xs">
                <span className="font-bold text-espresso">Dispatch Route:</span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setNotificationChannel('slack')}
                    className={`px-2 py-0.5 rounded-md text-xs font-bold cursor-pointer transition-all ${
                      notificationChannel === 'slack'
                        ? 'bg-brand-green text-white'
                        : 'bg-white text-terracotta-muted'
                    }`}
                  >
                    Slack
                  </button>
                  <button
                    type="button"
                    onClick={() => setNotificationChannel('in_app')}
                    className={`px-2 py-0.5 rounded-md text-xs font-bold cursor-pointer transition-all ${
                      notificationChannel === 'in_app'
                        ? 'bg-brand-orange text-white'
                        : 'bg-white text-terracotta-muted'
                    }`}
                  >
                    In-App
                  </button>
                </div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-brand-peach/40 text-xs font-mono text-espresso flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5 text-brand-green" />
                <span>Deep-link to task checklist</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-brand-green">
            <span>Early Warning Architecture</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 3: Instant Cascade */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.19 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-amber-400/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="progress" size="md" />
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Auto Sync
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Instant Upward Cascade
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Once an automated reminder leads to task completion, the parent milestone updates immediately. Leadership sees progress without delay.
            </p>

            {/* Micro Recalculation Metric */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-sm sm:text-xs font-mono">
              <span className="text-terracotta">Milestone Auto-Recalc:</span>
              <span className="text-brand-green font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> +15% Instantly
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-amber-700">
            <span>Real-Time Milestone Health</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
