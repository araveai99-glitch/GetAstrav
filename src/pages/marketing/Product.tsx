import React, { useEffect } from 'react';
import { ConnectedWorkflowSection } from '../../components/product/ConnectedWorkflowSection';
import { AutomaticProgressSection } from '../../components/product/AutomaticProgressSection';
import { ProductFinalCTA } from '../../components/product/ProductFinalCTA';

export const Product: React.FC = () => {
  useEffect(() => {
    document.title = 'Product | FounderOS Workflow — Astrav';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Connect your goals, projects, and everyday work with Astrav FounderOS. Real-time automatic progress rollups and aligned team execution.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col overflow-x-hidden selection:bg-brand-orange selection:text-white">
      {/* Section 1 — Connected Workflow: From Big Goals to Daily Work. */}
      <ConnectedWorkflowSection />

      {/* Section 2 — Automatic Progress: See Progress as Work Gets Done. */}
      <AutomaticProgressSection />

      {/* Section 3 — Final CTA: Bring Your Goals and Teams Together. */}
      <ProductFinalCTA />
    </div>
  );
};
