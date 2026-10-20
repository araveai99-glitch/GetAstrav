import React, { Suspense, lazy } from 'react';
import { ArchitectureOfExecutionHero } from '../../components/marketing/ArchitectureOfExecutionHero';

// Lazy load below-the-fold sections to minimize critical JavaScript execution on first paint
const HowItWorksSection = lazy(() =>
  import('../../components/marketing/HowItWorksSection').then((m) => ({ default: m.HowItWorksSection }))
);
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

      {/* 2-5. BELOW-THE-FOLD SECTIONS: Lazy-loaded asynchronously */}
      <Suspense fallback={<div className="min-h-[300px]" />}>
        <HowItWorksSection />
        <KeyCapabilitiesSection />
        <FounderInsightsSection />
        <CTASection />
      </Suspense>
    </div>
  );
};
