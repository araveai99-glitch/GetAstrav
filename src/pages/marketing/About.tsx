import React from 'react';
import { CTASection } from '../../components/common/CTASection';

export const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 text-xs font-heading font-bold text-brand-orange uppercase">
          About GETASTRAV
        </span>
        <h1 className="brand-h1 text-espresso">
          The Team Behind FounderOS
        </h1>
        <p className="brand-subtitle text-terracotta">
          We build enterprise command operating systems designed to align high-level strategy with daily sprint execution on autopilot.
        </p>
      </div>
      <CTASection />
    </div>
  );
};
