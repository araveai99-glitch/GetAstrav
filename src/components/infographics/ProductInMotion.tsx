import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Target, CheckSquare, BarChart3, Sparkles, AlertTriangle, ShieldCheck, Zap, ArrowRight, Activity, Clock } from 'lucide-react';

export const ProductInMotion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'goals' | 'tasks' | 'analytics' | 'ai'>('goals');

  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Visual D • Interactive Product Command Center Simulator
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight">
          Product in Motion
        </h2>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-[800px] mx-auto font-normal">
          Experience the FounderOS unified operating system. Seamlessly switch focus between strategic goals, leaf task execution, executive analytics, and AI goal decomposition.
        </p>
      </div>

      {/* Focus Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
        {[
          { id: 'goals', label: '01. Strategic Goals (OKRs)', icon: Target },
          { id: 'tasks', label: '02. Actionable Tasks', icon: CheckSquare },
          { id: 'analytics', label: '03. Analytics Radar', icon: BarChart3 },
          { id: 'ai', label: '04. AI Goal Decomposition', icon: Sparkles },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
                isActive
                  ? 'bg-brand-orange text-white shadow-glow-orange scale-105 border border-brand-orange'
                  : 'bg-ivory text-espresso hover:bg-surface-tier1 hover:text-brand-orange border border-brand-peach/80 shadow-warm-2xs'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-brand-orange'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ONE LARGE FULL-WIDTH PRODUCT SHOWCASE INTERFACE */}
      <div className="relative rounded-3xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/80 p-6 sm:p-8 shadow-warm-lg overflow-hidden w-full space-y-6">
        
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-brand-peach/60 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-orange" />
            <div className="w-3 h-3 rounded-full bg-brand-yellow" />
            <div className="w-3 h-3 rounded-full bg-brand-green" />
            <span className="text-xs font-mono text-terracotta ml-2 font-bold">
              founderos.app/app/dashboard?focus={activeTab}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-white border border-brand-peach text-xs font-mono font-extrabold text-espresso shadow-warm-2xs">
              ACTIVE FOCUS: {activeTab.toUpperCase()}
            </span>
            <span className="px-3 py-1 rounded-full bg-mint-soft border border-brand-green/30 text-brand-green text-xs font-bold font-mono">
              99.998% Real-Time Synced
            </span>
          </div>
        </div>

        {/* Tab Content 1: Goals */}
        {activeTab === 'goals' && (
          <MotionWrapper direction="up" key="goals" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-brand-peach shadow-warm-xs space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-extrabold text-brand-orange uppercase">OKR-01 • ENTERPRISE GOAL</span>
                        <h3 className="text-base font-extrabold text-espresso">Scale North America Infrastructure & Pass SOC2</h3>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-mint-soft text-brand-green border border-brand-green/30 text-xs font-bold">
                      88.4% Rollup
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
                    Achieve 99.99% availability across all edge nodes with zero-downtime database failover protocol.
                  </p>
                  <div className="w-full h-3 rounded-full bg-champagne overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green rounded-full w-[88%]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-brand-peach/80 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">WEIGHTED OKR IMPACT</span>
                    <div className="text-lg font-extrabold text-espresso">1.5x Multiplier</div>
                    <p className="text-xs text-terracotta">High priority strategic goal feeding global score</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-brand-peach/80 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">CONNECTED MILESTONES</span>
                    <div className="text-lg font-extrabold text-brand-orange">4 Active Milestones</div>
                    <p className="text-xs text-terracotta">12 leaf tasks currently assigned</p>
                  </div>
                </div>
              </div>

              {/* Floating Annotations */}
              <div className="lg:col-span-4 space-y-3">
                <div className="p-5 rounded-2xl bg-white border border-brand-orange/40 shadow-satin-card space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-orange">
                    <ShieldCheck className="w-4 h-4" /> Mathematical Progress Rollup
                  </div>
                  <p className="text-xs text-terracotta leading-relaxed">
                    Calculated automatically from leaf subtasks without requiring manual status updates.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-brand-green/40 shadow-satin-card space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-green">
                    <Zap className="w-4 h-4" /> Executive Audit Gate
                  </div>
                  <p className="text-xs text-terracotta leading-relaxed">
                    Founders can inspect or sign off on milestones with complete immutable audit trail logging.
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
                  { title: 'Setup Redis cluster sentinel node failover', owner: 'Alex M.', status: 'In Review', priority: 'High', time: '2h ago' },
                  { title: 'Draft PostgreSQL Row-Level Security policy', owner: 'Priya K.', status: 'Signed Off', priority: 'Urgent', time: 'Verified' },
                  { title: 'Configure SAML 2.0 PKCE Session Tokens', owner: 'Devon S.', status: 'In Progress', priority: 'Medium', time: '1d left' },
                ].map((task, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-brand-orange" />
                        <h4 className="text-sm font-bold text-espresso">{task.title}</h4>
                      </div>
                      <div className="text-xs text-terracotta">Owner: <strong className="text-espresso">{task.owner}</strong> • Priority: {task.priority}</div>
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-brand-orange-light text-brand-orange border border-brand-orange/30 text-xs font-mono font-bold shrink-0">
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 space-y-3">
                <div className="p-5 rounded-2xl bg-white border border-brand-yellow/50 shadow-satin-card space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-espresso">
                    <AlertTriangle className="w-4 h-4 text-brand-yellow" /> SLA Risk Auto-Detection
                  </div>
                  <p className="text-xs text-terracotta leading-relaxed">
                    Tasks approaching SLA deadlines trigger automatic founder notifications before delays impact milestones.
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
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-xs space-y-2">
                  <div className="text-xs font-mono font-bold text-terracotta uppercase">ORGANIZATION HEALTH SCORE</div>
                  <div className="text-3xl font-extrabold text-espresso font-mono">94.8%</div>
                  <p className="text-xs text-brand-green font-bold flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" /> +6.1% vs target benchmark
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-xs space-y-2">
                  <div className="text-xs font-mono font-bold text-terracotta uppercase">ON-TIME EXECUTION SLA</div>
                  <div className="text-3xl font-extrabold text-brand-orange font-mono">99.2%</div>
                  <p className="text-xs text-terracotta font-medium">Zero SLA breaches this sprint cycle</p>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="p-5 rounded-2xl bg-white border border-brand-peach shadow-satin-card space-y-2">
                  <div className="text-xs font-mono font-bold text-espresso uppercase">DUAL-MODE ANALYTICS</div>
                  <p className="text-xs text-terracotta leading-relaxed">
                    Seamlessly switch between high-level executive macro metrics and individual team member daily velocity.
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
              <div className="lg:col-span-8 p-6 rounded-2xl bg-white border border-brand-orange/40 shadow-glow-orange space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-xs font-extrabold text-espresso">
                    <Sparkles className="w-5 h-5 text-brand-orange" />
                    <span>Gemini 2.5 AI Goal Decomposition Engine</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-orange-light text-brand-orange text-xs font-mono font-bold border border-brand-orange/30">
                    ACTIVE ENGINE
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-terracotta leading-relaxed bg-ivory p-4 rounded-xl border border-brand-peach/60">
                  "Analyzed company objective 'Scale North America Infrastructure' &rarr; Proposed 4 leaf tasks with assigned assignees (Alex M., Priya K.) and 14-day SLA deadline."
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="p-5 rounded-2xl bg-white border border-brand-green/40 shadow-satin-card space-y-2">
                  <div className="text-xs font-bold text-brand-green flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> AI Capacity Forecasting
                  </div>
                  <p className="text-xs text-terracotta leading-relaxed">
                    Decomposes complex goals based on real-time team workload and historical SLA velocity.
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
