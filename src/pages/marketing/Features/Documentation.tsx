import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FileText,
  Link2,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Code2,
  CheckSquare,
  Sparkles,
  ExternalLink,
  Layers,
  HelpCircle,
  Lightbulb,
  FileCheck,
  Zap,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';
import { IllustratedCardBadge } from '../../../components/common/IllustratedCardBadge';

interface LinkedTask {
  id: string;
  title: string;
  taskTag: string;
  pod: string;
  assignee: string;
  docTitle: string;
  docSection: string;
  decisionRationale: string;
  acceptanceCriteria: string[];
}

const LINKED_TASKS: LinkedTask[] = [
  {
    id: 'task-1',
    title: 'Idempotent Webhook Processing',
    taskTag: 'TASK-104',
    pod: 'Backend Pod',
    assignee: 'Priya Sharma',
    docTitle: 'PRD: Billing & Stripe Integration v2.1',
    docSection: 'Section 4.3 — Webhook Deduplication Architecture',
    decisionRationale:
      'Stripe delivers events at-least-once. To prevent duplicate customer charges, the webhook handler stores event IDs in Redis with a 72-hour TTL before database transaction commit.',
    acceptanceCriteria: [
      'Reject duplicate event IDs with HTTP 200 without reprocessing',
      'All webhook receipts logged with transaction hash and signature verification',
      'Telemetry alert fires if webhook retry backlog exceeds 5 events',
    ],
  },
  {
    id: 'task-2',
    title: 'Session Invalidation on Password Reset',
    taskTag: 'TASK-105',
    pod: 'SecOps Pod',
    assignee: 'Alex Mercer',
    docTitle: 'Security Architecture Decision Record (ADR-019)',
    docSection: 'Section 2.1 — Global Revocation Protocol',
    decisionRationale:
      'Per SOC2 Type II requirements, resetting an account password must immediately revoke all existing refresh tokens and terminate active JWT sessions across mobile and web.',
    acceptanceCriteria: [
      'Increment token_version column in user credentials table',
      'Active websocket streams receive forced logout payload within 500ms',
      'Audit log entry emitted with actor IP and device fingerprint',
    ],
  },
  {
    id: 'task-3',
    title: 'Mobile Navigation Sheet Gestures',
    taskTag: 'TASK-106',
    pod: 'Frontend Pod',
    assignee: 'Marcus Vance',
    docTitle: 'Design Spec: Mobile Navigation System v3',
    docSection: 'Section 3.2 — Velocity-Based Swipe Thresholds',
    decisionRationale:
      'Users navigating with one hand on mobile devices require physics-based spring dampening when dragging down bottom sheets to prevent accidental dismissals.',
    acceptanceCriteria: [
      'Fling gesture requires minimum 400px/s velocity to trigger close',
      'Reduced motion accessibility toggle disables physics bounce',
      'All touch targets exceed 44x44px Apple HIG guidelines',
    ],
  },
];

export const Documentation: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedTaskId, setSelectedTaskId] = useState<string>('task-1');

  useEffect(() => {
    document.title = 'Project Knowledge Specs — Astrav';
    window.scrollTo(0, 0);
  }, []);

  const activeTask =
    LINKED_TASKS.find((t) => t.id === selectedTaskId) || LINKED_TASKS[0];

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
          Connect Specifications <span className="text-brand-orange">Directly to Live Work.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Never build without context. When team members select any task, the exact PRD requirements, architectural rationale, and acceptance criteria appear right beside it.
        </motion.p>
      </div>

      {/* 2. MAIN ATTRACTION: Interactive Task-to-Spec Knowledge Bridge */}
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
              Specification-to-Execution <span className="text-brand-orange">Bridge</span>
            </h2>
            <p className="text-base text-terracotta mt-1.5 leading-relaxed">
              Click any active task to highlight its attached PRD section, technical decision, and verification criteria.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[13px] font-heading font-semibold text-terracotta-muted bg-surface-tier1 px-3 py-1.5 rounded-xl border border-brand-peach/50 self-start sm:self-auto">
            <Link2 className="w-4 h-4 text-brand-orange" />
            <span>Zero Tab Switching</span>
          </div>
        </div>

        {/* 2-Column Split: Active Tasks on Left, Connected Knowledge Spec on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Left Column: Tasks List (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
              1. Select a Task Deliverable:
            </span>

            {LINKED_TASKS.map((task) => {
              const isSelected = selectedTaskId === task.id;

              return (
                <button
                  key={task.id}
                  type="button"
                  onClick={() => setSelectedTaskId(task.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer select-none flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-brand-orange-light/50 border-brand-orange shadow-warm-md scale-[1.02]'
                      : 'bg-surface-tier1/50 border-brand-peach/40 hover:border-brand-peach hover:bg-surface-tier1'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-brand-orange bg-white px-2.5 py-0.5 rounded-md border border-brand-peach/50">
                      {task.taskTag}
                    </span>
                    <span className="text-xs font-mono text-terracotta-muted">
                      {task.pod}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-[17px] sm:text-base text-espresso flex items-center justify-between">
                    <span>{task.title}</span>
                    <ArrowRight className={`w-4 h-4 text-brand-orange transition-transform ${isSelected ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                  </h4>

                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-brand-peach/30 text-sm sm:text-xs text-terracotta-muted">
                    <span>Assignee: {task.assignee}</span>
                    <span className="text-brand-green font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Spec Linked
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Connected Knowledge Document Viewer (7 cols) */}
          <div className="lg:col-span-7 bg-surface-tier1/60 rounded-3xl p-6 sm:p-8 border-2 border-brand-peach/70 flex flex-col justify-between space-y-6">
            <div>
              {/* Document Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-brand-peach/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6] border border-brand-orange/30 flex items-center justify-center text-brand-orange shadow-sm shadow-brand-orange/10 shrink-0">
                    <FileText className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-[18px] sm:text-base text-espresso">
                      {activeTask.docTitle}
                    </h4>
                    <span className="text-xs font-mono text-terracotta-muted">
                      {activeTask.docSection}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-brand-green bg-white px-3 py-1 rounded-full border border-brand-green/30 self-start sm:self-auto">
                  Live Ground Truth
                </span>
              </div>

              {/* Architecture Decision / Rationale */}
              <motion.div
                key={activeTask.id + '-rationale'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-5 space-y-2"
              >
                <div className="flex items-center gap-1.5 text-sm sm:text-xs font-heading font-bold text-espresso">
                  <Lightbulb className="w-4 h-4 text-brand-yellow fill-brand-yellow/30" />
                  <span>Why This Task Exists (Decision Rationale)</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-brand-peach/50 text-base text-terracotta leading-relaxed shadow-warm-2xs">
                  {activeTask.decisionRationale}
                </div>
              </motion.div>

              {/* Acceptance Criteria Checklist */}
              <motion.div
                key={activeTask.id + '-criteria'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-5 space-y-2.5"
              >
                <div className="flex items-center gap-1.5 text-sm sm:text-xs font-heading font-bold text-espresso">
                  <CheckSquare className="w-4 h-4 text-brand-green" />
                  <span>Acceptance Criteria for Signoff Gate</span>
                </div>

                <div className="space-y-2">
                  {activeTask.acceptanceCriteria.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-brand-peach/40 flex items-start gap-2.5 text-sm text-espresso shadow-warm-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm sm:text-xs text-terracotta-muted">
              <span>PRD revisions automatically notify assigned task owners.</span>
              <span className="font-heading font-bold text-brand-orange">
                Always Aligned
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Redesigned Premium Feature Cards with Micro-Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Context in Work */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-orange/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="docs" size="md" />
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/20">
                In-Flow Context
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Context in the Flow of Work
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              Builders never ask "why are we doing this?". Technical constraints and business rationale are accessible directly inside the deliverable card.
            </p>

            {/* Micro PRD Excerpt Widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-1.5 text-xs font-mono">
              <span className="text-terracotta-muted text-[11px] uppercase block font-bold">
                Linked Spec Pill
              </span>
              <div className="p-2 bg-white rounded-xl border border-brand-peach/40 text-espresso truncate">
                PRD-04: Section 4.3 Deduplication Rationale
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-brand-orange">
            <span>Zero Handoff Confusion</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 2: Living Documentation */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-green/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="projects" size="md" />
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 py-0.5 rounded-full border border-brand-green/20">
                Bidirectional
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Living Documentation
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              When product requirements change, affected tasks update automatically. No stale specifications buried in abandoned Google Docs.
            </p>

            {/* Micro Live Version Badge Widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-xs font-mono">
              <span className="text-terracotta">Spec Version:</span>
              <span className="text-brand-green font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> v2.4 (Live Synced)
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-brand-green">
            <span>Always Synchronized</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 3: Accelerated Onboarding */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.05 }}
          transition={{ duration: 0.4, delay: 0.19 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-amber-400/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <IllustratedCardBadge variant="teams" size="md" />
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                3x Faster Ramp
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-[18px] sm:text-lg text-espresso mb-2">
              Accelerated Onboarding
            </h3>
            <p className="text-base text-terracotta leading-relaxed mb-5">
              New team members ramp up 3x faster by inspecting past deliverables alongside their architectural decision records and acceptance checklists.
            </p>

            {/* Micro Ramp Metric Widget */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 flex items-center justify-between text-xs font-mono">
              <span className="text-terracotta">Time to First PR:</span>
              <span className="text-amber-700 font-bold">2.4 Days (vs 9 Avg)</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-sm font-heading font-semibold text-amber-700">
            <span>Frictionless Knowledge Transfer</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
