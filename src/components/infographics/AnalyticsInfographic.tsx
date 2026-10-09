import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { BarChart3, TrendingUp, Flame, Activity, ShieldCheck, Zap } from 'lucide-react';

export const AnalyticsInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-mint-soft border border-brand-green/30 text-xs font-bold text-brand-green uppercase tracking-wider">
          Visual H • Real-Time Dual-Mode Analytics Radar
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Executive Visibility Meets Individual Execution Focus
        </h2>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto font-normal">
          Dual-view dashboards engineered for both high-level executive decision making and focused daily individual execution without clutter.
        </p>
      </div>

      {/* Grid: Executive View vs Employee View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        
        {/* LEFT: Executive Command Dashboard */}
        <div className="lg:col-span-7 space-y-4 w-full">
          <MotionWrapper direction="right">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/80 shadow-satin-card space-y-5 w-full">
              <div className="flex items-center justify-between border-b border-brand-peach/50 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold border border-brand-orange/30">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-espresso">Executive Command Radar</h3>
                    <span className="text-[10px] text-terracotta font-mono">ORGANIZATION-WIDE MACRO METRICS</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-mint-soft border border-brand-green/30 text-brand-green text-xs font-bold font-mono">
                  Live Stream
                </span>
              </div>

              {/* 4 Metric Cards Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">GOAL ROLLUP RATE</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-espresso font-mono">88.4%</div>
                  <div className="text-xs text-brand-green font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +5.2% vs last sprint
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">OVERDUE SLA TASKS</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-orange font-mono">2</div>
                  <div className="text-xs text-terracotta font-medium">99.1% On-time delivery</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">PRODUCTIVITY INDEX</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-espresso font-mono">94 / 100</div>
                  <div className="text-xs text-brand-green font-bold flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5" /> High Velocity
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">ACTIVE STRATEGIC OKRs</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-espresso font-mono">28</div>
                  <div className="text-xs text-terracotta font-medium">4 Strategic Divisions</div>
                </div>
              </div>

              {/* Department Comparison Bar Visual */}
              <div className="p-5 rounded-xl bg-white border border-brand-peach/70 space-y-3">
                <div className="text-xs sm:text-sm font-extrabold text-espresso">Division Progress Rollup</div>
                <div className="space-y-3">
                  {[
                    { dept: 'Engineering & Infrastructure', val: '92.0%', width: '92%', color: 'bg-brand-orange' },
                    { dept: 'Product & Design Ops', val: '86.4%', width: '86%', color: 'bg-brand-yellow' },
                    { dept: 'Growth & Enterprise Ops', val: '78.2%', width: '78%', color: 'bg-brand-green' },
                  ].map((d, i) => (
                    <div key={i} className="space-y-1.5 text-xs">
                      <div className="flex justify-between font-semibold text-espresso">
                        <span>{d.dept}</span>
                        <span className="font-mono font-bold">{d.val}</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-champagne overflow-hidden">
                        <div className={`h-full ${d.color} rounded-full transition-all duration-500`} style={{ width: d.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* RIGHT: Individual Employee View */}
        <div className="lg:col-span-5 space-y-4 w-full">
          <MotionWrapper direction="left" delay={0.2}>
            <div className="p-6 rounded-2xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/80 shadow-satin-card space-y-5 w-full">
              <div className="flex items-center justify-between border-b border-brand-peach/50 pb-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-champagne text-espresso flex items-center justify-center font-bold border border-champagne-gold">
                    <Flame className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-espresso">Individual Focus Radar</h3>
                    <span className="text-[10px] text-terracotta font-mono">DAILY TASK EXECUTION & STREAK</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-brand-orange-light text-brand-orange text-xs font-mono font-bold border border-brand-orange/30 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" /> 12 Day Streak
                </span>
              </div>

              {/* Personal Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">PERSONAL SCORE</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-espresso font-mono">96 / 100</div>
                  <div className="text-xs text-brand-green font-bold">Top 5% Velocity</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-brand-peach/70 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">TASKS COMPLETED</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-espresso font-mono">18 This Sprint</div>
                  <div className="text-xs text-terracotta font-medium">0 SLA Breaches</div>
                </div>
              </div>

              {/* Urgency Sorted Task Queue */}
              <div className="p-4.5 rounded-xl bg-white border border-brand-peach/70 space-y-3">
                <div className="text-xs sm:text-sm font-extrabold text-espresso flex items-center justify-between">
                  <span>Urgency-Sorted Action Queue</span>
                  <span className="text-[10px] text-terracotta font-mono font-bold">PRIORITY ORDER</span>
                </div>

                {[
                  { title: 'Review API Gateway error logs', tag: 'URGENT', color: 'bg-coral-soft text-brand-orange border border-brand-orange/30' },
                  { title: 'Submit unit test coverage report', tag: 'TODAY', color: 'bg-brand-yellow-light text-espresso border border-brand-yellow/40' },
                  { title: 'Update documentation for OAuth callback', tag: 'NORMAL', color: 'bg-ivory text-espresso border border-brand-peach' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-ivory border border-brand-peach/60 flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-espresso truncate">{item.title}</span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold shrink-0 ${item.color}`}>
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
