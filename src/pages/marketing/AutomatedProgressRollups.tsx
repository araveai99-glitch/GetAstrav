import React, { useEffect } from 'react';
import { RollupHeroSection } from '../../components/rollups/RollupHeroSection';
import { InteractiveRollupDemo } from '../../components/rollups/InteractiveRollupDemo';
import { BeforeAfterComparison } from '../../components/rollups/BeforeAfterComparison';
import { RollupFinalCTA } from '../../components/rollups/RollupFinalCTA';

export const AutomatedProgressRollups: React.FC = () => {
  useEffect(() => {
    document.title = 'Automated Progress Rollups — Astrav';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Every task moves the bigger goal forward. Complete everyday work and watch project and goal progress update automatically with Astrav.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* Section 1 — Show the Main Benefit: Tasks → Project → Milestone → Goal */}
      <RollupHeroSection />

      {/* Section 2 — Interactive Progress Demonstration: Checkable Tasks & Dynamic Rollup */}
      <InteractiveRollupDemo />

      {/* Section 3 — Before vs. After: Less Manual Tracking. More Clarity. */}
      <BeforeAfterComparison />

      {/* Section 4 — Final CTA: Let Progress Speak for Itself */}
      <RollupFinalCTA />
    </div>
  );
};
