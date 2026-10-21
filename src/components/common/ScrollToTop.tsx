import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * ScrollToTop
 * Centralized, route-aware scroll restoration component for the entire Astrav application.
 * Ensures every internal page navigation starts at scroll position (0, 0)
 * while preserving in-page anchor navigation (hashes) and stopping ongoing smooth scrolls.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname, search, hash } = useLocation();
  const navType = useNavigationType();
  const prevPathRef = useRef<string>(pathname);

  // Configure browser history scrollRestoration to manual to prevent browser interference
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const isSamePath = prevPathRef.current === pathname;
    prevPathRef.current = pathname;

    // If navigating to an in-page anchor on the same or new page
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // If user is on the exact same pathname with no hash change, do not force scroll reset
    if (isSamePath && !search) {
      return;
    }

    // Helper to perform strict, immediate top reset
    const performScrollReset = () => {
      // 'instant' immediately halts any currently active smooth scroll animation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });

      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document.body) {
        document.body.scrollTop = 0;
      }
    };

    // 1. Immediate synchronous reset before paint
    performScrollReset();

    // 2. Next animation frame (handles any layout recalculation from routing)
    const rafId = requestAnimationFrame(() => {
      performScrollReset();
    });

    // 3. Short timeout fallback to handle async lazy-loaded route chunk mounting (React.lazy / Suspense)
    const timerId = setTimeout(() => {
      performScrollReset();
    }, 60);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [pathname, search, hash, navType]);

  return null;
};

export default ScrollToTop;
