import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FolderGit2,
  Target,
  Flag,
  CheckSquare,
  FileText,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  Eye,
  Key,
  Database,
  Lock,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

interface Compartment {
  id: string;
  name: string;
  subtitle: string;
  icon: React.ElementType;
  accent: string;
  badgeBg: string;
  wireColor: string;
  summary: string;
  items: { title: string; meta: string; tag: string; status: string }[];
}

const COMPARTMENTS: Compartment[] = [
  {
    id: 'goals',
    name: 'Goals',
    subtitle: 'Strategic Intent',
    icon: Target,
    accent: 'text-brand-orange',
    badgeBg: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
    wireColor: '#f15e1c',
    summary: 'Directly anchors this container to company-wide OKRs and executive strategic milestones.',
    items: [
      { title: 'Global Enterprise Expansion', meta: 'Q4 Strategic OKR', tag: 'Top Goal', status: '85% Aligned' },
      { title: 'Reduce Latency by 40%', meta: 'Infrastructure Target', tag: 'Secondary', status: 'On Track' },
    ],
  },
  {
    id: 'milestones',
    name: 'Milestones',
    subtitle: 'Phased Checkpoints',
    icon: Flag,
    accent: 'text-brand-yellow',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    wireColor: '#fab60a',
    summary: 'Time-boxed delivery checkpoints that aggregate task outputs and monitor team SLA run-rates.',
    items: [
      { title: 'Phase 1: Architecture Review', meta: 'Completed Sep 15', tag: 'Verified', status: '100% Done' },
      { title: 'Phase 2: Core Engine Build', meta: 'Target Oct 30', tag: 'Active', status: '75% Done' },
    ],
  },
  {
    id: 'tasks',
    name: 'Tasks',
    subtitle: 'Daily Execution',
    icon: CheckSquare,
    accent: 'text-brand-green',
    badgeBg: 'bg-brand-green-light text-brand-green border-brand-green/30',
    wireColor: '#2e936f',
    summary: 'Individual work items assigned to pod specialists with deterministic mathematical weighting.',
    items: [
      { title: 'Build Telemetry Pipeline', meta: 'Lead: Elena • 45% Weight', tag: 'In Progress', status: 'Active' },
      { title: 'Setup OAuth2 Handshake', meta: 'Lead: Marcus • 35% Weight', tag: 'Review', status: 'SLA Safe' },
    ],
  },
  {
    id: 'docs',
    name: 'Documents',
    subtitle: 'Specifications & PRDs',
    icon: FileText,
    accent: 'text-indigo-600',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    wireColor: '#6366f1',
    summary: 'Embed PRDs, architectural decision records, and acceptance criteria right alongside everyday work.',
    items: [
      { title: 'PRD: Execution Kernel v4.2', meta: 'Updated 2h ago • 8 Sections', tag: 'Spec', status: 'Live' },
      { title: 'API Contract: Event Stream', meta: 'Accepted by Backend Pod', tag: 'Schema', status: 'Locked' },
    ],
  },
];

export const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCompartmentId, setActiveCompartmentId] = useState<string>('goals');
  const [contractorScope, setContractorScope] = useState<'internal' | 'contractor'>('internal');

  useEffect(() => {
    document.title = 'Project Containers — Astrav';
    window.scrollTo(0, 0);
  }, []);

  const activeCompartment =
    COMPARTMENTS.find((c) => c.id === activeCompartmentId) || COMPARTMENTS[0];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12 selection:bg-brand-orange selection:text-white">
      {/* 1. Page Header */}
      <div className="text-left w-full max-w-5xl space-y-2 mb-2 sm:mb-4">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left lg:whitespace-nowrap"
        >
          All Project Assets in <span className="text-brand-orange">One Dedicated Workspace.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left"
        >
          Never search across fragmented tools again. Keep strategic goals, phase milestones, daily tasks, and technical specs unified inside a single dedicated project container.
        </motion.p>
      </div>

      {/* 2. MAIN ATTRACTION: Interactive Workspace Diagram with Central Project Container */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="p-6 sm:p-8 lg:p-10 bg-white rounded-3xl border-2 border-brand-peach/80 shadow-warm-md hover:shadow-warm-lg transition-shadow relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-brand-peach/50 relative z-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-espresso">
              The Project Container <span className="text-brand-orange">Architecture</span>
            </h2>
            <p className="text-sm text-terracotta mt-1">
              Click any connected compartment to highlight its relationship with the central container.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-heading font-semibold text-terracotta-muted bg-surface-tier1 px-3 py-1.5 rounded-xl border border-brand-peach/50 self-start sm:self-auto">
            <FolderGit2 className="w-4 h-4 text-brand-orange" />
            <span>Structured Hierarchy</span>
          </div>
        </div>

        {/* 4 Connected Category Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-8 relative z-10">
          {COMPARTMENTS.map((comp) => {
            const Icon = comp.icon;
            const isActive = activeCompartmentId === comp.id;

            return (
              <button
                key={comp.id}
                type="button"
                onClick={() => setActiveCompartmentId(comp.id)}
                className={`p-4 sm:p-5 rounded-2xl border-2 text-left transition-all cursor-pointer select-none flex flex-col justify-between group ${
                  isActive
                    ? 'bg-brand-orange-light/50 border-brand-orange shadow-warm-md scale-[1.02]'
                    : 'bg-surface-tier1/50 border-brand-peach/40 hover:border-brand-peach hover:bg-surface-tier1'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6 ${
                      isActive
                        ? 'bg-brand-orange text-white shadow-warm-xs'
                        : 'bg-white text-terracotta border border-brand-peach/60'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${comp.badgeBg}`}
                  >
                    {comp.subtitle}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-base text-espresso flex items-center justify-between">
                    <span>{comp.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                    )}
                  </h3>
                  <p className="text-xs text-terracotta-muted mt-0.5">
                    {isActive ? 'Active Connection' : 'Click to inspect'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Central Visual Container with Connected Assets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Central Container Card (5 cols) */}
          <div className="lg:col-span-5 bg-surface-tier1/70 rounded-3xl p-6 sm:p-7 border border-brand-peach/70 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-terracotta-muted tracking-wider uppercase">
                  CENTRAL REPOSITORY
                </span>
                <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 py-1 rounded-full border border-brand-green/30">
                  Container ID: PRJ-082
                </span>
              </div>

              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-warm-xs">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-xl text-espresso">
                    Unified Auth & Security Kernel
                  </h4>
                  <p className="text-xs sm:text-sm text-terracotta mt-1">
                    Multi-tenant OAuth2 and RBAC infrastructure migration.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-3">
                <div className="p-3 bg-white rounded-xl border border-brand-peach/50">
                  <span className="text-[11px] text-terracotta-muted block">Active Owner</span>
                  <span className="text-xs font-heading font-bold text-espresso">Engineering & SecOps</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-brand-peach/50">
                  <span className="text-[11px] text-terracotta-muted block">Rollup Health</span>
                  <span className="text-xs font-heading font-bold text-brand-green">88% Verified</span>
                </div>
              </div>
            </div>

            {/* Explanation of the Selected Link */}
            <div className="p-4 rounded-2xl bg-white border border-brand-peach/60 space-y-2 shadow-warm-2xs">
              <div className="flex items-center gap-2 text-xs font-heading font-bold text-brand-orange">
                <Workflow className="w-4 h-4 animate-spin" />
                <span>Connected: {activeCompartment.name} Compartment</span>
              </div>
              <p className="text-xs text-terracotta leading-relaxed">
                {activeCompartment.summary}
              </p>
            </div>
          </div>

          {/* Active Compartment Detail & Assets (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-brand-peach/70 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-brand-peach/50">
                <div className="flex items-center gap-2.5">
                  <activeCompartment.icon className={`w-5 h-5 ${activeCompartment.accent}`} />
                  <h4 className="font-heading font-extrabold text-lg text-espresso">
                    {activeCompartment.name} Connected Inside Container
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-terracotta-muted">
                  2 Items Linked
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3.5 pt-4">
                {activeCompartment.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="p-4 rounded-2xl bg-surface-tier1/60 border border-brand-peach/50 hover:border-brand-orange/40 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-warm-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-sm sm:text-base text-espresso">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-brand-peach/50 text-terracotta-muted">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-terracotta-muted mt-1">
                        {item.meta}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-auto shrink-0">
                      <span className="text-xs font-mono font-bold text-brand-green bg-white px-2.5 py-1 rounded-lg border border-brand-peach/40">
                        {item.status}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-white border border-brand-peach/50 flex items-center justify-center text-terracotta-muted">
                        <CheckCircle2 className="w-4 h-4 text-brand-green" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-peach/40 flex items-center justify-between text-xs text-terracotta-muted">
              <span>All assets synchronize in real time when modified by pod members.</span>
              <span className="font-heading font-bold text-brand-orange">Zero Tool Switching</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. Redesigned Premium Feature Cards with Interactive Micro-Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Card 1: Single Source of Truth */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-orange/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/20">
                Unified Assets
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-lg text-espresso mb-2">
              Single Source of Truth
            </h3>
            <p className="text-sm text-terracotta leading-relaxed mb-5">
              Every project asset lives inside one container. No more lost Figma links, outdated Notion docs, or isolated Jira tickets.
            </p>

            {/* Micro Unified Asset Counter */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-espresso">Assets in Container</span>
                <span className="text-brand-orange">4 Modules Synced</span>
              </div>
              <div className="grid grid-cols-4 gap-1 text-center text-[10px] font-mono">
                <div className="p-1.5 bg-white rounded-lg border border-brand-peach/40">Goals</div>
                <div className="p-1.5 bg-white rounded-lg border border-brand-peach/40">Milestones</div>
                <div className="p-1.5 bg-white rounded-lg border border-brand-peach/40">Tasks</div>
                <div className="p-1.5 bg-white rounded-lg border border-brand-peach/40">Docs</div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Zero Context Scattering</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 2: Scoped Security */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-brand-green/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-green-light text-brand-green flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-2.5 py-0.5 rounded-full border border-brand-green/20">
                Scoped RBAC
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-lg text-espresso mb-2">
              Scoped Permissions
            </h3>
            <p className="text-sm text-terracotta leading-relaxed mb-5">
              Grant contractors or partner pods access to a single container without exposing company-wide objectives or other project secrets.
            </p>

            {/* Micro Scoped Access Toggle */}
            <div className="p-3 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-espresso">Access Scope:</span>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setContractorScope('internal')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition-all ${
                      contractorScope === 'internal'
                        ? 'bg-brand-green text-white'
                        : 'bg-white text-terracotta-muted'
                    }`}
                  >
                    Internal Pod
                  </button>
                  <button
                    type="button"
                    onClick={() => setContractorScope('contractor')}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition-all ${
                      contractorScope === 'contractor'
                        ? 'bg-brand-orange text-white'
                        : 'bg-white text-terracotta-muted'
                    }`}
                  >
                    Contractor
                  </button>
                </div>
              </div>
              <div className="p-2 bg-white rounded-lg border border-brand-peach/40 text-[11px] font-mono text-espresso flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-brand-green" />
                <span>
                  {contractorScope === 'internal'
                    ? 'Full container read/write'
                    : 'Restricted: Single container only'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Compartmentalized Security</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>

        {/* Card 3: Upward Cascade */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.19 }}
          className="p-6 sm:p-7 bg-white rounded-3xl border-2 border-brand-peach/80 hover:border-amber-400/40 hover:shadow-warm-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-brand-yellow flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                Auto Cascade
              </span>
            </div>

            <h3 className="font-heading font-extrabold text-lg text-espresso mb-2">
              Holistic Progress Rollup
            </h3>
            <p className="text-sm text-terracotta leading-relaxed mb-5">
              When subtasks inside a container are completed, the container's progress score recalculates instantly, cascading to the overarching OKR.
            </p>

            {/* Micro Cascade Visualizer */}
            <div className="p-3.5 rounded-2xl bg-surface-tier1/70 border border-brand-peach/50 space-y-1.5 text-xs">
              <div className="flex justify-between font-mono">
                <span className="text-terracotta">Container Progress</span>
                <span className="font-bold text-amber-700">88%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white border border-brand-peach/40 overflow-hidden">
                <div className="w-[88%] h-full bg-amber-500 rounded-full" />
              </div>
              <span className="text-[10px] text-terracotta-muted block text-right font-mono">
                → Cascades +8.8% to Company OKR
              </span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Automatic Upward Cascade</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
