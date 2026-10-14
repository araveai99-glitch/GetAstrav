import React from 'react';
import { CTASection } from '../../../components/common/CTASection';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const AIIntelligence: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-6 sm:space-y-10 md:space-y-16 pt-20 sm:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-yellow uppercase">
          Features • AI Execution
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-espresso">
          Gemini 2.5 AI Co-Pilot for Goal Decomposition
        </h1>
        <p className="text-base text-terracotta leading-relaxed text-left sm:text-justify max-w-2xl mx-auto">
          Decompose strategic goals into concrete task proposals with intelligent timelines and ownership.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-3">
          <Sparkles className="w-6 h-6 text-brand-orange" />
          <h3 className="text-lg font-bold text-espresso">Today Focus Insights</h3>
          <p className="text-xs text-terracotta text-left sm:text-justify">
            Analyzes active task telemetry to surface top priorities, risk bottlenecks, and daily focus recommendations.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-3">
          <Sparkles className="w-6 h-6 text-brand-yellow" />
          <h3 className="text-lg font-bold text-espresso">Goal-to-Task Proposals</h3>
          <p className="text-xs text-terracotta">Generates 2 to 4 structured task proposals with interactive review modal to modify title, deadline, or assignee before accepting.</p>
        </div>
      </div>

      <CTASection paddingY="pt-0 pb-2 sm:py-6 md:py-10" paddingX="px-0" />
    </div>
  );
};
