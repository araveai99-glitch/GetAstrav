import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Target, CheckSquare, BarChart3, Sparkles, AlertTriangle, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export const ProductInMotion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'goals' | 'tasks' | 'analytics' | 'ai'>('goals');

  return (
    <div className="w-full bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Section 04 • Continuous Product Showcase
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight">
          Product in Motion
        </h2>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-[800px] mx-auto">
          One unified command center interface seamlessly shifting focus between strategic goals, task execution, analytics radar, and AI intelligence.
        </p>
      </div>

      {/* Focus Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
        {[
          { id: 'goals', label: '01. Strategic Goals (OKRs)', icon: Target },
          { id: 'tasks', label: '02. Actionable Tasks', icon: CheckSquare },
          { id: 'analytics', label: '03. Analytics Radar', icon: BarChart3 },
          { id: 'ai', label: '04. AI Intelligence', icon: Sparkles },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                isActive
                  ? 'bg-brand-orange text-white shadow-glow-orange scale-105'
                  : 'bg-surface-ambient text-terracotta hover:bg-surface-tier1 hover:text-espresso border border-brand-peach/60'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ONE LARGE FULL-WIDTH PRODUCT SHOWCASE INTERFACE */}
      <div className="relative rounded-2xl bg-surface-ambient border border-brand-peach/80 p-4 sm:p-8 shadow-warm-lg overflow-hidden w-full">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-brand-peach/60 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-orange" />
            <div className="w-3 h-3 rounded-full bg-brand-yellow" />
            <div className="w-3 h-3 rounded-full bg-brand-green" />
            <span className="text-xs font-mono text-terracotta ml-2">founderos.app/app/dashboard?focus={activeTab}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white border border-brand-peach text-xs font-mono font-extrabold text-espresso shadow-2xs">
              View Mode: {activeTab.toUpperCase()}
            </span>
            <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
              Real-Time Sync
            </span>
          </div>
        </div>

        {/* Tab Content 1: Goals */}
        {activeTab === 'goals' && (
          <MotionWrapper direction="up" key="goals" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="p-5 rounded-xl bg-white border border-brand-peach shadow-warm-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-brand-orange" />
                      <h4 className="text-base font-extrabold text-espresso">OKR-01: Scale North America Infrastructure</h4>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
                      Progress: 88%
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-terracotta">
                    Achieve 99.99% availability across all edge nodes with zero-downtime database failover protocol.
                  </p>
                  <div className="w-full h-3 rounded-full bg-surface-tier1 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-orange to-brand-green rounded-full w-[88%]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-brand-peach/80 space-y-1">
                    <span className="text-xs font-mono font-bold text-terracotta-muted">WEIGHTED OKR IMPACT</span>
                    <div className="text-lg font-extrabold text-espresso">1.5x Multiplier</div>
                    <p className="text-xs text-terracotta">High priority strategic goal feeding global score</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-brand-peach/80 space-y-1">
                    <span className="text-xs font-mono font-bold text-terracotta-muted">CONNECTED MILESTONES</span>
                    <div className="text-lg font-extrabold text-brand-orange">4 Active Milestones</div>
                    <p className="text-xs text-terracotta">12 leaf tasks currently assigned</p>
                  </div>
                </div>
              </div>

              {/* Floating Annotations */}
              <div className="lg:col-span-4 space-y-3">
                <div className="p-4 rounded-xl bg-white border border-brand-orange/40 shadow-glow-orange space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-brand-orange">
                    <ShieldCheck className="w-4 h-4" /> Weighted Progress
                  </div>
                  <p className="text-xs text-terracotta">
                    Calculated automatically from subtasks without manual input.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-green/40 shadow-warm-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-brand-green">
                    <Zap className="w-4 h-4" /> Executive Override
                  </div>
                  <p className="text-xs text-terracotta">
                    Founders can manually verify or adjust progress with audit logging.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        )}

        {/* Tab Content 2: Tasks */}
        {activeTab === 'tasks' && (
          <MotionWrapper direction="up" key="tasks" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3">
                {[
                  { title: 'Setup Redis cluster sentinel node failover', owner: 'Alex M.', status: 'In Review', priority: 'High' },
                  { title: 'Draft PostgreSQL Row-Level Security policy', owner: 'Priya K.', status: 'Approved', priority: 'Urgent' },
                  { title: 'Configure Firebase Cloud Messaging tokens', owner: 'Devon S.', status: 'In Progress', priority: 'Medium' },
                ].map((task, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-brand-peach/80 shadow-warm-xs flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-brand-orange" />
                        <h4 className="text-sm font-bold text-espresso">{task.title}</h4>
                      </div>
                      <div className="text-xs text-terracotta">Owner: <strong>{task.owner}</strong> • Priority: {task.priority}</div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold shrink-0">
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 space-y-3">
                <div className="p-4 rounded-xl bg-white border border-amber-300 shadow-warm-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700">
                    <AlertTriangle className="w-4 h-4 text-brand-yellow" /> Risk Flag Auto-Detection
                  </div>
                  <p className="text-xs text-terracotta">
                    Tasks approaching SLA deadlines trigger automatic founder notifications.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        )}

        {/* Tab Content 3: Analytics */}
        {activeTab === 'analytics' && (
          <MotionWrapper direction="up" key="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-brand-peach shadow-warm-xs space-y-2">
                  <div className="text-xs font-bold text-terracotta uppercase">Organization Health</div>
                  <div className="text-3xl font-extrabold text-espresso">94.8%</div>
                  <p className="text-xs text-brand-green font-bold">+6.1% vs target benchmark</p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-brand-peach shadow-warm-xs space-y-2">
                  <div className="text-xs font-bold text-terracotta uppercase">On-Time Execution</div>
                  <div className="text-3xl font-extrabold text-brand-orange">99.2%</div>
                  <p className="text-xs text-terracotta">Zero SLA breaches this month</p>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="p-4 rounded-xl bg-white border border-brand-peach shadow-warm-xs space-y-1">
                  <div className="text-xs font-bold text-espresso">Dual-View Analytics</div>
                  <p className="text-xs text-terracotta">
                    Seamlessly switch between executive macro metrics and individual employee daily velocity.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        )}

        {/* Tab Content 4: AI */}
        {activeTab === 'ai' && (
          <MotionWrapper direction="up" key="ai" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 p-5 rounded-xl bg-white border border-brand-orange/40 shadow-glow-orange space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-espresso">
                    <Sparkles className="w-5 h-5 text-brand-orange" />
                    <span>Gemini 2.5 Goal Decomposition Engine</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold">
                    Active
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-terracotta">
                  "Analyzed goal title 'Launch Mobile App' $\rightarrow$ Proposed 4 leaf tasks with assigned assignees (Alex M., Priya K.) and 14-day SLA deadline."
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="p-4 rounded-xl bg-white border border-brand-green/40 shadow-warm-xs space-y-1">
                  <div className="text-xs font-bold text-brand-green">AI Insight Annotation</div>
                  <p className="text-xs text-terracotta">
                    Contextual recommendations generated directly from team capacity and historical velocity.
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        )}
      </div>
    </div>
  );
};
