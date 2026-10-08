import React from 'react';
import { CTASection } from '../../../components/common/CTASection';
import { Users } from 'lucide-react';

export const Teams: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-green uppercase">
          Features • Teams & Pods
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-espresso">
          Cross-Functional Agile Pods
        </h1>
        <p className="text-base text-terracotta leading-relaxed">
          Group organization members into cross-functional teams that span projects and departments with explicit UUID identity tracking.
        </p>
      </div>
      <CTASection />
    </div>
  );
};
