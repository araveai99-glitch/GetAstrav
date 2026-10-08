import React from 'react';
import { CTASection } from '../../../components/common/CTASection';

export const Managers: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-green uppercase">
          Solutions • For Managers & Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-espresso">
          Quality Control & Task Approvals
        </h1>
        <p className="text-base text-terracotta leading-relaxed">
          Enforce quality reviews, subtask checklists, and AI goal decomposition to keep agile teams aligned.
        </p>
      </div>
      <CTASection />
    </div>
  );
};
