import React from 'react';

/**
 * lazyWithRetry
 *
 * Robust dynamic import loader for React.lazy that:
 * 1. Automatically retries failed chunk downloads (network glitches, mobile drops).
 * 2. Catches stale chunk 404s after new production deployments and cleanly refreshes the page once.
 * 3. Supports both default and named exports cleanly.
 */
export function lazyWithRetry<T extends React.ComponentType<any>>(
  factory: () => Promise<any>,
  namedExport?: string
): React.LazyExoticComponent<T> {
  return React.lazy(async () => {
    const hasForceRefreshed =
      typeof window !== 'undefined' &&
      window.sessionStorage.getItem('astrav_chunk_reloaded') === 'true';

    try {
      const module = await factory();
      if (typeof window !== 'undefined') {
        window.sessionStorage.removeItem('astrav_chunk_reloaded');
      }

      if (namedExport && module && typeof module === 'object' && namedExport in module) {
        return { default: module[namedExport] };
      }

      if (module && module.default) {
        return module;
      }

      // Handle modules that export a single component by name or first export
      if (module && typeof module === 'object') {
        const keys = Object.keys(module);
        if (keys.length > 0) {
          return { default: module[keys[0]] };
        }
      }

      return module;
    } catch (primaryError: any) {
      console.warn('[Astrav Navigation] Chunk load failed. Initiating retry...', primaryError);

      // Attempt 1 retry after 600ms backoff
      try {
        await new Promise((resolve) => setTimeout(resolve, 600));
        const module = await factory();

        if (typeof window !== 'undefined') {
          window.sessionStorage.removeItem('astrav_chunk_reloaded');
        }

        if (namedExport && module && typeof module === 'object' && namedExport in module) {
          return { default: module[namedExport] };
        }
        if (module && module.default) {
          return module;
        }
        if (module && typeof module === 'object') {
          const keys = Object.keys(module);
          if (keys.length > 0) {
            return { default: module[keys[0]] };
          }
        }
        return module;
      } catch (retryError: any) {
        console.error('[Astrav Navigation] Chunk retry failed:', retryError);

        const errorMessage = String(retryError?.message || primaryError?.message || '');
        const isChunkError =
          errorMessage.includes('Failed to fetch dynamically imported module') ||
          errorMessage.includes('Loading chunk') ||
          errorMessage.includes('Importing a module script failed') ||
          errorMessage.includes('error loading dynamically imported module') ||
          retryError?.name === 'ChunkLoadError';

        // If the chunk failed due to stale cache after deployment, force reload once
        if (isChunkError && !hasForceRefreshed && typeof window !== 'undefined') {
          window.sessionStorage.setItem('astrav_chunk_reloaded', 'true');
          window.location.reload();
          // Return an unresolved promise while reload executes to prevent unhandled UI error flash
          return new Promise<never>(() => {});
        }

        throw retryError;
      }
    }
  });
}
