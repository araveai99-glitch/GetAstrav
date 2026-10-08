import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { BarChart3, TrendingUp, Zap, Flame, Clock, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AnalyticsInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[680px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-brand-green uppercase tracking-wider">
          Real-Time Analytics & Intelligence
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          See What Matters
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed">
          Dual-view dashboards engineered for both high-level executive decision making and focused personal execution.
        </p>
      </div>

      {/* Grid: Executive View vs Employee View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: Executive View */}
        <div className="lg:col-span-7 space-y-4">
          <MotionWrapper direction="right">
            <div className="p-6 rounded-xl bg-surface-ambient border border-brand-peach/80 shadow-warm-sm space-y-5">
              <div className="flex items-center justify-between border-b border-brand-peach/50 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-espresso">Executive Command Dashboard</h4>
                    <span className="text-[10px] text-terracotta font-mono">Organization-Wide Metrics</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-green/10 text-brand-green text-[10px] font-bold">
                  Live Stream
                </span>
              </div>

              {/* 4 Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-bold text-terracotta uppercase">Goal Completion Rate</div>
                  <div className="text-2xl font-extrabold text-espresso">88.4%</div>
                  <div className="text-[10px] text-brand-green font-semibold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +5.2% vs last sprint
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-bold text-terracotta uppercase">Overdue Tasks</div>
                  <div className="text-2xl font-extrabold text-brand-orange">2</div>
                  <div className="text-[10px] text-terracotta font-semibold">99.1% On-time delivery</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-bold text-terracotta uppercase">Productivity Index</div>
                  <div className="text-2xl font-extrabold text-espresso">94 / 100</div>
                  <div className="text-[10px] text-brand-green font-semibold">High Velocity</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-bold text-terracotta uppercase">Active OKR Count</div>
                  <div className="text-2xl font-extrabold text-espresso">28</div>
                  <div className="text-[10px] text-terracotta font-semibold">4 Departments</div>
                </div>
              </div>

              {/* Department Comparison Bar Visual */}
              <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-3">
                <div className="text-xs font-bold text-espresso">Department Progress Comparison</div>
                <div className="space-y-2">
                  {[
                    { dept: 'Engineering', val: '92%', color: 'bg-brand-orange' },
                    { dept: 'Product & Design', val: '86%', color: 'bg-brand-yellow' },
                    { dept: 'Growth & Ops', val: '78%', color: 'bg-brand-green' },
                  ].map((d, i) => (
                    <div key={i} className="space-y-1 text-[11px]">
                      <div className="flex justify-between font-semibold text-espresso">
                        <span>{d.dept}</span>
                        <span>{d.val}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-surface-tier1 overflow-hidden">
                        <div className={`h-full ${d.color} rounded-full`} style={{ width: d.val }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* RIGHT: Employee View */}
        <div className="lg:col-span-5 space-y-4">
          <MotionWrapper direction="left" delay={0.2}>
            <div className="p-6 rounded-xl bg-surface-ambient border border-brand-peach/80 shadow-warm-sm space-y-5">
              <div className="flex items-center justify-between border-b border-brand-peach/50 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-espresso">Individual Employee View</h4>
                    <span className="text-[10px] text-terracotta font-mono">Personal Focus & Streak</span>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center gap-1">
                  <Flame className="w-3 h-3" /> 12 Day Streak
                </span>
              </div>

              {/* Personal Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-bold text-terracotta uppercase">Personal Score</div>
                  <div className="text-xl font-extrabold text-espresso">96 / 100</div>
                  <div className="text-[10px] text-brand-green font-semibold">Top 5% Performer</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-bold text-terracotta uppercase">Tasks Completed</div>
                  <div className="text-xl font-extrabold text-espresso">18 This Week</div>
                  <div className="text-[10px] text-terracotta font-semibold">0 SLA breaches</div>
                </div>
              </div>

              {/* Urgency Sorted Task Queue */}
              <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-2.5">
                <div className="text-xs font-bold text-espresso flex items-center justify-between">
                  <span>Urgency-Sorted Action Queue</span>
                  <span className="text-[10px] text-terracotta font-mono">Priority Order</span>
                </div>

                {[
                  { title: 'Review API Gateway error logs', tag: 'URGENT', color: 'bg-red-100 text-red-700' },
                  { title: 'Submit unit test coverage report', tag: 'TODAY', color: 'bg-amber-100 text-amber-800' },
                  { title: 'Update documentation for OAuth callback', tag: 'NORMAL', color: 'bg-gray-100 text-gray-700' },
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-surface-ambient border border-brand-peach/60 flex items-center justify-between text-xs">
                    <span className="font-semibold text-espresso truncate">{item.title}</span>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold shrink-0 ${item.color}`}>
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
};
