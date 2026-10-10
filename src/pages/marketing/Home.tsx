import React from 'react';
import { ArchitectureOfExecutionHero } from '../../components/marketing/ArchitectureOfExecutionHero';
import { HierarchyInfographic } from '../../components/infographics/HierarchyInfographic';
import { RollupInfographic } from '../../components/infographics/RollupInfographic';
import { AIDecompositionInfographic } from '../../components/infographics/AIDecompositionInfographic';
import { AccountabilityWorkflowInfographic } from '../../components/infographics/AccountabilityWorkflowInfographic';
import { AnalyticsInfographic } from '../../components/infographics/AnalyticsInfographic';
import { CTASection } from '../../components/common/CTASection';

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-12 lg:space-y-16 pt-2">
      {/* 1. HERO: From Founder Strategy to Execution on Autopilot */}
      <ArchitectureOfExecutionHero />

      {/* 2. CORE CONCEPT: Connect Company Goals to Everyday Work */}
      <section id="everything-connected" className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <HierarchyInfographic />
      </section>

      {/* 3. AUTOMATED PROGRESS: Never Ask “What's the Status?” Again */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <RollupInfographic />
      </section>

      {/* 4. AI INTELLIGENCE: Turn Goals into Actionable Tasks */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <AIDecompositionInfographic />
      </section>

      {/* 5. EXECUTION & ACCOUNTABILITY: Everyone Knows What Comes Next */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <AccountabilityWorkflowInfographic />
      </section>

      {/* 6. EXECUTIVE VISIBILITY: See What's Moving and What Needs Attention */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <AnalyticsInfographic />
      </section>

      {/* 7. FINAL CTA: Your Organization. One Operating System */}
      <section id="conversion-cta" className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 pb-12">
        <CTASection />
      </section>
    </div>
  );
};
