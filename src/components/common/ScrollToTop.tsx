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
    // 1. Defensively clear any leftover body/html scroll locks from modals or drawers
    if (typeof document !== 'undefined') {
      if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
      }
    }

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

    // If user clicked link to the exact same page while scrolled down, smoothly scroll to top
    if (isSamePath && !search) {
      if (typeof window !== 'undefined' && window.scrollY > 0) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
      return;
    }

    // Helper to perform strict top reset without fighting html.scroll-smooth
    const performScrollReset = () => {
      if (typeof document !== 'undefined' && typeof window !== 'undefined') {
        const root = document.documentElement;
        const prevBehavior = root.style.scrollBehavior;
        root.style.scrollBehavior = 'auto';

        window.scrollTo(0, 0);

        requestAnimationFrame(() => {
          root.style.scrollBehavior = prevBehavior;
        });
      }
    };

    // 1. Immediate synchronous reset before paint
    performScrollReset();

    // 2. Schedule follow-ups to catch delayed render adjustments
    let rafId: number | null = null;
    let timerId: NodeJS.Timeout | null = null;

    if (typeof window !== 'undefined' && window.scrollY !== 0) {
      rafId = requestAnimationFrame(() => {
        performScrollReset();
      });
      timerId = setTimeout(() => {
        performScrollReset();
      }, 50);
    }

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (timerId !== null) clearTimeout(timerId);
    };
  }, [pathname, search, hash, navType]);

  return null;
};

export default ScrollToTop;
