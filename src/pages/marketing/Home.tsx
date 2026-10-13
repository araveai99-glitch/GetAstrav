import React from 'react';
import { ArchitectureOfExecutionHero } from '../../components/marketing/ArchitectureOfExecutionHero';
import { HowItWorksSection } from '../../components/marketing/HowItWorksSection';
import { KeyCapabilitiesSection } from '../../components/marketing/KeyCapabilitiesSection';
import { FounderInsightsSection } from '../../components/marketing/FounderInsightsSection';
import { CTASection } from '../../components/common/CTASection';

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      {/* 1. HERO SECTION: Your Entire Company In One View */}
      <ArchitectureOfExecutionHero />

      {/* 2. HOW IT WORKS: From Goals to Execution in 4 Simple Steps */}
      <HowItWorksSection />

      {/* 3. KEY CAPABILITIES: Everything You Need to Run Your Organization */}
      <KeyCapabilitiesSection />

      {/* 4. BUILT FOR FOUNDERS: Make Faster Decisions with Real Insights */}
      <FounderInsightsSection />

      {/* 5. CLOSING CTA: Ready to See Your Company in One View? */}
      <CTASection />
    </div>
  );
};
