import React from 'react';
import { CTASection } from '../../../components/common/CTASection';
import { Target, CheckCircle2 } from 'lucide-react';

export const GoalsProgress: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase">
          Features • Goals & Progress
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-espresso">
          Automated Mathematical Rollup Engine
        </h1>
        <p className="text-base text-terracotta leading-relaxed">
          Track work from subtask checklists up to executive dashboards with mathematical precision. Executive overrides give founders total control over reported figures.
        </p>
      </div>

      <div className="p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-xl space-y-4">
        <h3 className="text-lg font-bold text-espresso flex items-center gap-2">
          <Target className="w-5 h-5 text-brand-orange" />
          The Rollup Formula Architecture
        </h3>
        <ul className="space-y-3 text-xs text-terracotta font-medium">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            Task Progress = Completed Subtask Weights / Total Subtask Weights * 100
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            Milestone Computed Progress = Weighted Task Progress Sum
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            Goal Effective Progress = Executive Override ?? Computed Progress
          </li>
        </ul>
      </div>

      <CTASection />
    </div>
  );
};
