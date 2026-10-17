import React, { useEffect } from 'react';
import { Sparkles, Target, Zap, Bot, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const AIIntelligence: React.FC = () => {
  useEffect(() => {
    document.title = 'AI Goal Decomposition & Intelligence — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="brand-h1 text-espresso tracking-tight">
          AI Co-Pilot for Goal Decomposition
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Decompose high-level strategic objectives into concrete task proposals with realistic timelines, suggested owners, and automated dependency mapping.
        </p>
      </div>

      {/* 3 Symmetric Intelligence Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Goal-to-Task Proposals
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Input any quarterly objective or OKR. Astrav’s AI analyzes historical velocity and pod skill sets to generate 2 to 4 structured actionable deliverables with estimated completion dates.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Instant Scaffolding</span>
            <span>Editable Proposals</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Daily Focus Recommendations
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Every morning, the AI scans active task queues, blocked items, and approaching milestones to generate prioritized "Today Focus" cards for leaders and team members.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Velocity Optimization</span>
            <span>Noise Reduction</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Bottleneck & Risk Detection
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Identify stalled reviews, SLA breaches, and dependency locks before they cascade into project delays. Get early alerts with concrete corrective suggestions.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Early Warning Radar</span>
            <span>Predictive SLAs</span>
          </div>
        </div>
      </div>

      {/* Wide Architecture Detail Card */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="max-w-3xl mb-6 space-y-1">
          <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
            HUMAN-IN-THE-LOOP CONTROL
          </span>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-espresso">
            How Goal Decomposition Works in Practice
          </h3>
          <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
            Astrav never creates tasks in isolation. Proposals are presented in an interactive review modal where managers can adjust scope, assignee, or weight before committing to the live rollup board.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <span className="text-[10px] font-mono font-bold text-brand-orange">STEP 01</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Target Ingestion</h4>
            <p className="text-xs text-terracotta leading-relaxed">Input company goal statement and target completion quarter.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <span className="text-[10px] font-mono font-bold text-amber-700">STEP 02</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Contextual Analysis</h4>
            <p className="text-xs text-terracotta leading-relaxed">AI references active department pods, team workloads, and SLAs.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <span className="text-[10px] font-mono font-bold text-brand-green">STEP 03</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Interactive Review</h4>
            <p className="text-xs text-terracotta leading-relaxed">Modify title, weight, and assignees with 1-click proposal adjustments.</p>
          </div>
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <span className="text-[10px] font-mono font-bold text-espresso">STEP 04</span>
            <h4 className="font-heading font-bold text-sm text-espresso">Live Rollup Commit</h4>
            <p className="text-xs text-terracotta leading-relaxed">Accepted items attach automatically to the organizational progress tree.</p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
