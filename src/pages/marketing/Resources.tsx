import React from 'react';
import { CTASection } from '../../components/common/CTASection';

export const Resources: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-6 sm:space-y-10 md:space-y-16 pt-20 sm:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 text-xs font-heading font-bold text-brand-orange uppercase">
          Resources & Insights
        </span>
        <h1 className="brand-h1 text-espresso">
          Architecture Whitepapers & OKR Guides
        </h1>
        <p className="brand-subtitle text-terracotta text-left sm:text-justify max-w-2xl mx-auto">
          Executive whitepapers on 7-level hierarchy orchestration, rollup engineering, and AI planning.
        </p>
      </div>
      <CTASection paddingY="pt-0 pb-2 sm:py-6 md:py-10" paddingX="px-0" />
    </div>
  );
};
