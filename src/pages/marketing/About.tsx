import React, { useEffect } from 'react';
import { Layers, Target, ShieldCheck, Sparkles, CheckCircle2, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { CTASection } from '../../components/common/CTASection';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Astrav — Organization Operating System';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 shadow-warm-2xs">
          <Layers className="w-3.5 h-3.5 text-brand-orange" />
          <span className="text-xs font-heading font-extrabold text-brand-orange uppercase tracking-wider">
            OUR MISSION & ARCHITECTURE
          </span>
        </div>
        <h1 className="brand-h1 text-espresso tracking-tight">
          The Architecture of Execution
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          We believe high-growth technology companies should run with mathematical clarity — connecting executive North Star strategy directly into daily engineering and design execution.
        </p>
      </div>

      {/* 3 Symmetric Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Deterministic Progress
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              We replaced subjective status reports with verifiable mathematical rollups. When work is completed, progress calculates automatically from the ground up.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Ground Truth</span>
            <span>Zero Fluff</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Unblocked Contributors
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Engineers and designers do their best work when unburdened by administrative meetings. We automate handoffs, dependencies, and reporting so talent can build.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>High Leverage</span>
            <span>Focus First</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Founder Governance
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Executive leaders need command clarity, not noise. We give founders live organizational telemetry and override controls with complete audit tracking.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Executive Control</span>
            <span>Institutional Trust</span>
          </div>
        </div>
      </div>

      {/* Wide Company Story & Philosophy */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
              WHY WE BUILT ASTRAV
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-espresso">
              The 7-Tier Organization Operating System
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Traditional project management tools are designed as glorified to-do lists or rigid task silos. They fail at the critical intersection where high-level company goals must synchronize with daily engineering sprints.
            </p>
            <p className="text-sm text-terracotta leading-relaxed">
              Astrav was conceived to bridge this divide. By structuring companies across a clear 7-tier hierarchy — Organization, Departments, Pods, Projects, Milestones, Tasks, and Subtasks — every action item carries tangible weight towards the company’s ultimate targets.
            </p>
          </div>

          <div className="lg:col-span-5 bg-surface-tier1 p-6 rounded-2xl border border-brand-peach/60 space-y-3.5">
            <h4 className="font-heading font-bold text-espresso text-base flex items-center gap-2">
              <Sparkles className="w-4.5 h-4.5 text-brand-orange" />
              Core Architectural Tenets
            </h4>
            <div className="space-y-2 text-xs text-terracotta">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Single deterministic formula for organizational rollups.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Zero phantom progress — verified by manager approval gates.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>AI assistance for decomposition, not black-box hallucination.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>Enterprise RBAC with founder override authority.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
