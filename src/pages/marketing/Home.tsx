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

// Viewport & Idle Triggered Container to keep below-the-fold JS chunks out of initial critical request chain
const ViewportSection: React.FC<{ children: React.ReactNode; minHeight?: string }> = ({
  children,
  minHeight = '350px',
}) => {
  const [shouldRender, setShouldRender] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (shouldRender) return;

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldRender(true);
            observer.disconnect();
          }
        },
        { rootMargin: '500px 0px' }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      const timer = setTimeout(() => setShouldRender(true), 8000);

      return () => {
        observer.disconnect();
        clearTimeout(timer);
      };
    } else {
      setShouldRender(true);
    }
  }, [shouldRender]);

  return (
    <div ref={containerRef} style={{ minHeight: shouldRender ? undefined : minHeight }}>
      {shouldRender ? children : null}
    </div>
  );
};

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      {/* 1. HERO SECTION: Your Entire Company In One View (Critical Above-the-Fold Path) */}
      <ArchitectureOfExecutionHero />

      {/* 2. DEMO DASHBOARD & HOW IT WORKS: Directly rendered in normal document flow */}
      <HowItWorksSection />

      {/* 3-5. BELOW-THE-FOLD SECTIONS: Loaded on viewport proximity or idle */}
      <ViewportSection minHeight="450px">
        <Suspense fallback={<div className="min-h-[450px]" />}>
          <KeyCapabilitiesSection />
          <FounderInsightsSection />
          <CTASection />
        </Suspense>
      </ViewportSection>
    </div>
  );
};
