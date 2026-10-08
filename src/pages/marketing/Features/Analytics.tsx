import React from 'react';
import { CTASection } from '../../../components/common/CTASection';
import { BarChart3 } from 'lucide-react';

export const Analytics: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-green uppercase">
          Features • Dual Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-espresso">
          Dual-Mode Executive & Employee Radar
        </h1>
        <p className="text-base text-terracotta leading-relaxed">
          Executive KPI dashboards for owners and managers alongside personal streak counters and urgency-sorted task feeds for contributors.
        </p>
      </div>
      <CTASection />
    </div>
  );
};
