import { useEffect, useRef } from 'react';
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

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

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
      if (window.scrollY !== 0) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' as ScrollBehavior,
        });
      }
    };

    // 1. Immediate synchronous reset before paint
    performScrollReset();

    // 2. Schedule follow-ups only if still scrolled
    let rafId: number | null = null;
    let timerId: NodeJS.Timeout | null = null;

    if (window.scrollY !== 0) {
      rafId = requestAnimationFrame(() => {
        performScrollReset();
      });
      timerId = setTimeout(() => {
        performScrollReset();
      }, 60);
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (timerId !== null) clearTimeout(timerId);
    };
  }, [pathname, search, hash, navType]);

  return null;
};

export default ScrollToTop;
