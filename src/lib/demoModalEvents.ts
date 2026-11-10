/**
 * Global custom event trigger for opening the Astrav Demo Modal.
 * Isolated from the React component tree to avoid pulling the heavy DemoModal bundle into critical paths.
 */
export const openDemoModal = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-demo-modal'));
  }
};

