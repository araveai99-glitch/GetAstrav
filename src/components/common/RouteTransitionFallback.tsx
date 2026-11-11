import React from 'react';
import { RouteLoadingBar } from './RouteLoadingBar';
import { Layers } from 'lucide-react';

/**
 * RouteTransitionFallback
 *
 * Full-height, branded fallback displayed during route transitions.
 * Guarantees that <main> never collapses to 0px, preventing layout jumps
 * and keeping the footer firmly anchored below the viewport fold.
 */
export const RouteTransitionFallback: React.FC = () => {
  return (
    <>
      <RouteLoadingBar />
      <div
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label="Loading page content"
        className="w-full flex-1 min-h-[calc(100vh-70px)] sm:min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-[#faf6f0] px-4 py-20 pointer-events-none select-none"
      >
        <div className="max-w-md w-full flex flex-col items-center text-center space-y-6 animate-pulse">
          {/* Astrav Logo Icon with glowing ring */}
          <div className="w-16 h-16 rounded-2xl bg-brand-orange text-white p-0.5 shadow-warm-md flex items-center justify-center">
            <div className="w-full h-full bg-brand-orange rounded-[14px] flex items-center justify-center">
              <Layers className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Skeleton Hero Content */}
          <div className="w-full space-y-3 flex flex-col items-center">
            {/* Pill skeleton */}
            <div className="h-4 w-32 bg-brand-peach/60 rounded-full" />
            {/* Heading lines skeleton */}
            <div className="h-9 sm:h-11 w-4/5 max-w-sm bg-brand-peach/80 rounded-xl" />
            <div className="h-9 sm:h-11 w-3/5 max-w-xs bg-brand-orange/20 rounded-xl" />
            {/* Subheading skeleton */}
            <div className="h-4 w-5/6 max-w-md bg-brand-peach/50 rounded-lg mt-3" />
            <div className="h-4 w-2/3 max-w-sm bg-brand-peach/40 rounded-lg" />
          </div>

          <span className="sr-only">Loading page...</span>
        </div>
      </div>
    </>
  );
};
