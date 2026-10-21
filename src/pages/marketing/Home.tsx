import React, { Suspense, lazy } from 'react';
import { ArchitectureOfExecutionHero } from '../../components/marketing/ArchitectureOfExecutionHero';
import { HowItWorksSection } from '../../components/marketing/HowItWorksSection';

// Lazy load below-the-fold sections
const KeyCapabilitiesSection = lazy(() =>
  import('../../components/marketing/KeyCapabilitiesSection').then((m) => ({ default: m.KeyCapabilitiesSection }))
);
const FounderInsightsSection = lazy(() =>
  import('../../components/marketing/FounderInsightsSection').then((m) => ({ default: m.FounderInsightsSection }))
);
const CTASection = lazy(() =>
  import('../../components/common/CTASection').then((m) => ({ default: m.CTASection }))
);

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      {/* 1. HERO SECTION: Your Entire Company In One View (Critical Above-the-Fold Path) */}
      <ArchitectureOfExecutionHero />

      {/* 2. DEMO DASHBOARD & HOW IT WORKS: Directly rendered in normal document flow */}
      <HowItWorksSection />

      {/* 3-5. BELOW-THE-FOLD SECTIONS: Lazy-loaded asynchronously */}
      <Suspense fallback={<div className="min-h-[40px]" />}>
        <KeyCapabilitiesSection />
        <FounderInsightsSection />
        <CTASection />
      </Suspense>
    </div>
  );
};
