import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import {
  Layers,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Clock,
  RefreshCw,
  ChevronRight,
  Activity,
  CheckCircle2,
} from 'lucide-react';

export const InteractiveCanvas: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ontrack' | 'atrisk' | 'overdue'>('all');
  const [selectedNodeId, setSelectedNodeId] = useState<'v48' | 'gemini' | 'rbac'>('v48');

  return (
    <MotionWrapper direction="up" className="w-full">
      <div id="interactive-showcase" className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-peach/80 shadow-warm-xl space-y-6">
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-brand-peach/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange font-bold text-[10px] uppercase tracking-wider">
                Live Interactive Command Center Canvas
              </span>
              <span className="text-xs font-mono text-terracotta-muted">ID: PRJ-7729-EXEC</span>
            </div>
            <h3 className="text-xl font-extrabold text-espresso mt-1">
              Execution Kernel v4.8 Topology
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-surface-tier1 rounded-xl border border-brand-peach/60 text-xs font-bold">
            {(
              [
                { id: 'all', label: 'All Nodes' },
                { id: 'ontrack', label: 'On Track' },
                { id: 'atrisk', label: 'At Risk' },
                { id: 'overdue', label: 'Overdue (15d+)' },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveFilter(item.id)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeFilter === item.id
                    ? 'bg-brand-orange text-white shadow-glow-orange'
                    : 'text-terracotta-muted hover:text-espresso'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Top Metric Cards Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60 space-y-1">
            <div className="text-[10px] font-extrabold text-terracotta-muted uppercase">Tree Completion</div>
            <div className="text-2xl font-extrabold text-espresso flex items-center gap-2">
              78.4% <RefreshCw className="w-4 h-4 text-brand-green" />
            </div>
            <div className="text-[11px] text-brand-green font-semibold">+4.2% Automated Rollup</div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60 space-y-1">
            <div className="text-[10px] font-extrabold text-terracotta-muted uppercase">Active Goals</div>
            <div className="text-2xl font-extrabold text-espresso">24 / 28</div>
            <div className="text-[11px] text-brand-orange font-semibold">4 Pending Review</div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60 space-y-1">
            <div className="text-[10px] font-extrabold text-terracotta-muted uppercase">Risk Bottlenecks</div>
            <div className="text-2xl font-extrabold text-espresso text-amber-700 flex items-center gap-1.5">
              <AlertTriangle className="w-5 h-5 text-brand-yellow" /> 3 Items
            </div>
            <div className="text-[11px] text-amber-800 font-semibold">1 Critical Overdue</div>
          </div>

          <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60 space-y-1">
            <div className="text-[10px] font-extrabold text-terracotta-muted uppercase">AI Focus Queue</div>
            <div className="text-2xl font-extrabold text-espresso flex items-center gap-1.5">
              <Sparkles className="w-5 h-5 text-brand-orange" /> 12 Tasks
            </div>
            <div className="text-[11px] text-brand-orange font-semibold">Gemini Prioritized</div>
          </div>
        </div>

        {/* Split Drilldown View */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
          {/* Left Column: Execution Cascade Selector */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-terracotta-muted px-1">
              Execution Cascade (L1-L7)
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedNodeId('v48')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                  selectedNodeId === 'v48'
                    ? 'bg-surface-tier1 border-brand-orange shadow-warm-sm font-bold text-espresso'
                    : 'bg-white border-brand-peach/60 text-terracotta hover:bg-surface-ambient'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span>Execution Kernel v4.8</span>
                  <span className="font-extrabold text-brand-orange">78%</span>
                </div>
                <div className="text-[10px] text-terracotta-muted mt-1 font-mono">
                  L1 Org Root Node • Sub-50ms Rollup
                </div>
              </button>

              <button
                onClick={() => setSelectedNodeId('gemini')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                  selectedNodeId === 'gemini'
                    ? 'bg-surface-tier1 border-brand-orange shadow-warm-sm font-bold text-espresso'
                    : 'bg-white border-brand-peach/60 text-terracotta hover:bg-surface-ambient'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span>Gemini Decomposition Pipeline</span>
                  <span className="font-extrabold text-brand-green">62%</span>
                </div>
                <div className="text-[10px] text-terracotta-muted mt-1 font-mono">
                  L3 Project Container • Gemini Flash Lite
                </div>
              </button>

              <button
                onClick={() => setSelectedNodeId('rbac')}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                  selectedNodeId === 'rbac'
                    ? 'bg-surface-tier1 border-brand-orange shadow-warm-sm font-bold text-espresso'
                    : 'bg-white border-brand-peach/60 text-terracotta hover:bg-surface-ambient'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span>RBAC Scoped Mesh & RLS</span>
                  <span className="font-extrabold text-brand-green">94%</span>
                </div>
                <div className="text-[10px] text-terracotta-muted mt-1 font-mono">
                  L4 Governance Node • Zero-Owner Trigger
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Node Detail Drilldown */}
          <div className="md:col-span-8 bg-surface-tier1 p-6 rounded-2xl border border-brand-peach/80 space-y-4">
            {selectedNodeId === 'v48' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-brand-peach/60">
                  <div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase">
                      ON TRACK
                    </span>
                    <h4 className="text-base font-bold text-espresso mt-1">
                      Sub-50ms Global Query Latency Rollout
                    </h4>
                  </div>
                  <span className="text-lg font-extrabold text-espresso font-mono">92% Net Complete</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white border border-brand-peach/60 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-espresso">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green" /> L6 Milestone: SOC2 Type II Evidence Lockbox
                      </span>
                      <span className="text-amber-800 text-[10px] bg-amber-100 px-2 py-0.5 rounded-full">At Risk</span>
                    </div>
                    <p className="text-xs text-terracotta">Snapshot validation pending for multi-region access logs.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-brand-peach/60 space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-espresso">
                      <span className="flex items-center gap-1.5 text-red-700">
                        <Clock className="w-4 h-4 text-red-500" /> L7 Leaf Task: Legacy Redis Cluster Deprecation
                      </span>
                      <span className="text-red-700 text-[10px] bg-red-100 px-2 py-0.5 rounded-full">Overdue (-15d+)</span>
                    </div>
                    <p className="text-xs text-terracotta">Route session auth tokens into Edge storage pool with executive sign-off.</p>
                  </div>
                </div>
              </div>
            )}

            {selectedNodeId === 'gemini' && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-espresso">Gemini 2.5 Flash Lite Heuristic Decomposition</h4>
                <p className="text-xs text-terracotta leading-relaxed">
                  Automatically extracts strategic goals and generates structured task proposals with assignees and deadlines.
                </p>
                <div className="p-3 rounded-xl bg-white border border-brand-peach/60 text-xs font-mono text-espresso">
                  Latency: 0.18s • Session Hash Cache: Valid
                </div>
              </div>
            )}

            {selectedNodeId === 'rbac' && (
              <div className="space-y-3">
                <h4 className="text-base font-bold text-espresso">Enterprise RBAC & Zero-Owner Protections</h4>
                <p className="text-xs text-terracotta leading-relaxed">
                  PostgreSQL security definer function has_effective_role resolves highest permission rank across global roles and scoped department/project grants.
                </p>
                <div className="p-3 rounded-xl bg-white border border-brand-peach/60 text-xs font-mono text-espresso">
                  RLS Status: Enforced on 20 Database Tables
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};
