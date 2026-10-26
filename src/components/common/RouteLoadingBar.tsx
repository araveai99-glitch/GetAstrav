import React from 'react';

/**
 * RouteLoadingBar
 * Sleek, non-intrusive top-of-viewport progress indicator shown during route transitions.
 * Prevents the page from appearing stuck or blank while lazy-loaded chunks are resolving.
 */
export const RouteLoadingBar: React.FC = () => {
  return (
    <div
      role="progressbar"
      aria-label="Loading page..."
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-brand-orange-light/40 overflow-hidden pointer-events-none"
    >
      <div className="h-full bg-brand-orange shadow-[0_0_10px_#f15e1c] animate-indeterminate" />
    </div>
  );
};
