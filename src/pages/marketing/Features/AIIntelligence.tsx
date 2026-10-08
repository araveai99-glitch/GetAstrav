import React from 'react';
import { CTASection } from '../../../components/common/CTASection';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const AIIntelligence: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-yellow uppercase">
          Features • AI Execution
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-espresso">
          Gemini 2.5 AI Co-Pilot for Goal Decomposition
        </h1>
        <p className="text-base text-terracotta leading-relaxed">
          Eliminate writer's block. FounderOS uses server-side Gemini API calls to decompose strategic goals into concrete task proposals with assigned deadlines and team members.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-3">
          <Sparkles className="w-6 h-6 text-brand-orange" />
          <h3 className="text-lg font-bold text-espresso">Today Focus Insights</h3>
          <p className="text-xs text-terracotta">Analyzes active organization task telemetry to output the top 3 action items, risk bottlenecks, and daily productivity advice.</p>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-3">
          <Sparkles className="w-6 h-6 text-brand-yellow" />
          <h3 className="text-lg font-bold text-espresso">Goal-to-Task Proposals</h3>
          <p className="text-xs text-terracotta">Generates 2 to 4 structured task proposals with interactive review modal to modify title, deadline, or assignee before accepting.</p>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
