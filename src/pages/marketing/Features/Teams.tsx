import React, { useEffect } from 'react';
import { Users, Target, Zap, ShieldCheck, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const Teams: React.FC = () => {
  useEffect(() => {
    document.title = 'Teams & Cross-Functional Pods — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 shadow-warm-2xs">
          <Users className="w-3.5 h-3.5 text-brand-orange" />
          <span className="text-xs font-heading font-extrabold text-brand-orange uppercase tracking-wider">
            ORGANIZATION & POD ARCHITECTURE
          </span>
        </div>
        <h1 className="brand-h1 text-espresso tracking-tight">
          Cross-Functional Pods & Team Alignment
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Group talent into mission-oriented pods with explicit ownership over deliverables, velocity analytics, and frictionless collaboration.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Autonomous Pods
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Organize cross-functional specialists (e.g. Frontend, Design, AI) into tight execution pods aligned to a single milestone or product feature initiative.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Modular Squads</span>
            <span>Zero Silos</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Pod Velocity Radar
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Measure real output velocity, completion run-rates, and SLA adherence across departments. Benchmark teams objectively without subjective bias.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Objective Metrics</span>
            <span>Real Throughput</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Workload & Burnout Balance
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Real-time capacity tracking highlights overloaded individuals and underutilized pods. Managers reassign tasks with drag-and-drop ease before delays occur.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Capacity Balancing</span>
            <span>Sustainable Velocity</span>
          </div>
        </div>
      </div>

      {/* Wide Team Pod Architecture Details */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              7-Tier Team Hierarchy Model
            </h3>
            <p className="text-xs text-terracotta-muted">
              Connect every contributor to the ultimate organizational mission
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
            Enterprise RBAC
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">TIER 1</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Organization</h4>
            <p className="text-xs text-terracotta">Executive vision and company board targets.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">TIER 2</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Departments</h4>
            <p className="text-xs text-terracotta">Product, Engineering, Marketing, Revenue, Operations.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">TIER 3</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Execution Pods</h4>
            <p className="text-xs text-terracotta">Cross-functional tactical units running active projects.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">TIER 4</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Individual Owners</h4>
            <p className="text-xs text-terracotta">Accountable contributors executing daily deliverables.</p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
