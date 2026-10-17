import React, { useEffect } from 'react';
import { BarChart3, TrendingUp, Activity, AlertTriangle, CheckCircle2, Target, ShieldCheck } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const Analytics: React.FC = () => {
  useEffect(() => {
    document.title = 'Analytics Radar & Telemetry — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="brand-h1 text-espresso tracking-tight">
          Live Organizational Velocity & Analytics
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Real-time organizational telemetry, early risk signals, department run-rates, and predictive completion intelligence in one screen.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Cross-Department Radar
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Monitor velocity trends across Engineering, Product, Design, and Revenue in parallel. Benchmark cycle times and throughput with zero manual reporting overhead.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Unified Telemetry</span>
            <span>Zero Reporting Delay</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Early Risk Alerts
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Predictive models flag stalled milestones and SLA breaches days before deadlines expire, enabling targeted intervention before commitments are missed.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Predictive Warning</span>
            <span>Root-Cause Isolation</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Goal Completion Run-Rate
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Calculate probabilistic completion dates based on historical pod velocity, active blockers, and seasonal capacity adjustments with mathematical precision.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Run-Rate Projections</span>
            <span>Probabilistic Accuracy</span>
          </div>
        </div>
      </div>

      {/* Wide Telemetry Metrics Architecture */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              Core Executive Metrics Framework
            </h3>
            <p className="text-xs text-terracotta-muted">
              Telemetry indicators tracked continuously across your entire organization
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full border border-brand-green/30">
            Real-Time Engine
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <span className="text-xs font-mono font-bold text-terracotta-muted">METRIC 01</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Cycle Velocity</h4>
            <p className="text-xs text-terracotta">Mean time from task kickoff to manager signoff.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <span className="text-xs font-mono font-bold text-terracotta-muted">METRIC 02</span>
            <h4 className="font-heading font-bold text-sm text-espresso">SLA Adherence</h4>
            <p className="text-xs text-terracotta">Percentage of milestones completed without breach.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <span className="text-xs font-mono font-bold text-terracotta-muted">METRIC 03</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Blocker Dwell Time</h4>
            <p className="text-xs text-terracotta">Hours spent waiting on cross-pod dependencies.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1">
            <span className="text-xs font-mono font-bold text-terracotta-muted">METRIC 04</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Rollup Integrity</h4>
            <p className="text-xs text-terracotta">100% verified mathematical alignment to goals.</p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
