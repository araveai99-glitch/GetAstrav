/**
 * routePreloader.ts
 *
 * High-performance route preloading and caching system for Astrav.
 * Eliminates navigation delays, chunks waterfalls, and lazy-loading blank screens by:
 * 1. Preloading route chunks on mouse hover / pointerover (desktop).
 * 2. Preloading route chunks on touchstart / focusin (mobile & keyboard).
 * 3. Preloading high-traffic routes during browser idle time (requestIdleCallback).
 * 4. Deduplicating and caching module load promises so React.lazy receives in-flight or cached promises instantly.
 */

export const routeLoaders: Record<string, () => Promise<any>> = {
  // Core Marketing Pages
  '/product': () => import('../pages/marketing/Product'),
  '/product/automated-progress-rollups': () => import('../pages/marketing/AutomatedProgressRollups'),
  '/features/goals-progress': () => import('../pages/marketing/Features/GoalsProgress'),
  '/features/ai': () => import('../pages/marketing/Features/AIIntelligence'),
  '/features/task-management': () => import('../pages/marketing/Features/TaskManagement'),
  '/features/teams': () => import('../pages/marketing/Features/Teams'),
  '/features/projects': () => import('../pages/marketing/Features/Projects'),
  '/features/analytics': () => import('../pages/marketing/Features/Analytics'),
  '/features/governance': () => import('../pages/marketing/Features/Governance'),
  '/features/documentation': () => import('../pages/marketing/Features/Documentation'),
  '/features/automation': () => import('../pages/marketing/Features/Automation'),
  '/solutions/use-cases': () => import('../pages/marketing/Solutions/UseCases'),
  '/solutions/founders': () => import('../pages/marketing/Solutions/Founders'),
  '/solutions/managers': () => import('../pages/marketing/Solutions/Managers'),
  '/resources': () => import('../pages/marketing/Resources'),
  '/resources/documentation-guides': () => import('../pages/marketing/Resources'),
  '/how-it-works': () => import('../pages/marketing/Resources/HowItWorksPage'),
  '/resources/how-it-works': () => import('../pages/marketing/Resources/HowItWorksPage'),
  '/key-capabilities': () => import('../pages/marketing/Resources/KeyCapabilitiesPage'),
  '/resources/key-capabilities': () => import('../pages/marketing/Resources/KeyCapabilitiesPage'),
  '/about': () => import('../pages/marketing/About'),
  '/contact': () => import('../pages/marketing/ContactSales'),
  '/contact-sales': () => import('../pages/marketing/ContactSales'),
  '/trust': () => import('../pages/marketing/TrustSecurity'),
  '/security': () => import('../pages/marketing/TrustSecurity'),
  '/compliance': () => import('../pages/marketing/TrustSecurity'),
  '/department-workflow': () => import('../pages/marketing/DepartmentWorkflow'),
  '/organization-workflow': () => import('../pages/marketing/DepartmentWorkflow'),
  '/organization-execution': () => import('../pages/marketing/DepartmentWorkflow'),

  // Auth Pages
  '/login': () => import('../pages/auth/Login'),
  '/signup': () => import('../pages/auth/Signup'),
  '/forgot-password': () => import('../pages/auth/ForgotPassword'),
  '/reset-password': () => import('../pages/auth/ResetPassword'),

  // Shared Common Components
  '__footer': () => import('../components/common/Footer'),
  '__demoModal': () => import('../components/common/DemoModal'),
};

const routeAliases: Record<string, string> = {
  '/features': '/features/task-management',
  '/solutions': '/solutions/founders',
  '/company': '/about',
  '/documentation': '/features/documentation',
};

// In-memory cache for dynamic import promises
const promiseCache = new Map<string, Promise<any>>();

/**
 * Normalizes route path (stripping origin, hashes, and query params) and maps aliases.
 */
export function normalizeRoutePath(rawPath: string): string {
  if (!rawPath) return '/';
  let path = rawPath;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    try {
      path = new URL(path).pathname;
    } catch {
      return '/';
    }
  }

  // Strip query parameters and hash fragments
  path = path.split('?')[0].split('#')[0].trim();

  // Strip trailing slash (unless root)
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  // Check aliases
  if (routeAliases[path]) {
    path = routeAliases[path];
  }

  // Check dynamic route prefixes
  if (
    path.startsWith('/department-workflow') ||
    path.startsWith('/organization-workflow') ||
    path.startsWith('/organization-execution')
  ) {
    return '/department-workflow';
  }

  return path;
}

/**
 * Loads a route module and caches the promise for deduplicated instant resolution.
 */
export function loadRoute(pathKey: string): Promise<any> {
  const normalized = normalizeRoutePath(pathKey);
  const loader = routeLoaders[normalized];

  if (!loader) {
    return Promise.resolve(null);
  }

  if (!promiseCache.has(normalized)) {
    const promise = loader().catch((err) => {
      // Evict failed promise so subsequent navigation or retry can try again
      promiseCache.delete(normalized);
      throw err;
    });
    promiseCache.set(normalized, promise);
  }

  return promiseCache.get(normalized)!;
}

/**
 * Preloads a route module speculatively.
 */
export function preloadRoute(path: string): void {
  try {
    loadRoute(path);
  } catch {
    // Fail silently on speculative preloading
  }
}

/**
 * Preloads high-priority marketing pages during browser idle time.
 */
export function initIdleRoutePreloading(): void {
  if (typeof window === 'undefined') return;

  const priorityRoutes = [
    '/product',
    '/features/task-management',
    '/solutions/founders',
    '/about',
    '/contact',
    '__footer',
    '__demoModal',
  ];

  const runIdle = () => {
    let index = 0;
    const scheduleNext = () => {
      if (index < priorityRoutes.length) {
        preloadRoute(priorityRoutes[index]);
        index++;
        setTimeout(scheduleNext, 250);
      }
    };
    scheduleNext();
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => setTimeout(runIdle, 800), { timeout: 3500 });
  } else {
    setTimeout(runIdle, 1200);
  }
}

/**
 * Automatically captures hover, touch, and focus events on any internal link across the DOM
 * to preload chunks ahead of click.
 */
export function setupGlobalLinkPreloader(): () => void {
  if (typeof document === 'undefined') return () => {};

  const handleInteraction = (e: Event) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    const anchor = target.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (
      href &&
      href.startsWith('/') &&
      !href.startsWith('//') &&
      !href.startsWith('/#') &&
      !href.startsWith('/app') // Keep console app routes code-split
    ) {
      preloadRoute(href);
    }
  };

  document.addEventListener('pointerover', handleInteraction, { passive: true });
  document.addEventListener('touchstart', handleInteraction, { passive: true });
  document.addEventListener('focusin', handleInteraction, { passive: true });

  return () => {
    document.removeEventListener('pointerover', handleInteraction);
    document.removeEventListener('touchstart', handleInteraction);
    document.removeEventListener('focusin', handleInteraction);
  };
}
