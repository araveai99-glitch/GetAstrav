import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryInner extends Component<Props & { pathname: string; onReset: () => void }, State> {
  constructor(props: Props & { pathname: string; onReset: () => void }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[Astrav Route Error]', error, errorInfo);
  }

  componentDidUpdate(prevProps: Props & { pathname: string; onReset: () => void }) {
    // Automatically clear error when user navigates to any new route
    if (this.state.hasError && prevProps.pathname !== this.props.pathname) {
      this.setState({ hasError: false, error: null });
      this.props.onReset();
    }
  }

  handleManualRetry = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset();
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center px-4 py-16">
          <div className="max-w-md w-full bg-white rounded-3xl border border-brand-peach/80 p-6 sm:p-8 shadow-warm-lg text-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center mx-auto shadow-sm">
              <AlertCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-espresso">
                Unable to Load Page
              </h2>
              <p className="text-sm text-terracotta leading-relaxed">
                A connection interruption or updated application version prevented this section from displaying properly.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleManualRetry}
                className="w-full sm:w-auto btn-brand-primary px-5 py-2.5 rounded-xl text-sm font-heading font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand-orange/20"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <a
                href="/"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-brand-peach/80 text-espresso hover:text-brand-orange text-sm font-heading font-bold flex items-center justify-center gap-2 hover:bg-surface-tier1 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home Overview</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export const RouteErrorBoundary: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ErrorBoundaryInner
      pathname={location.pathname}
      onReset={() => {
        // Clear any error state flags
        if (typeof window !== 'undefined') {
          window.sessionStorage.removeItem('astrav_chunk_reloaded');
        }
      }}
    >
      {children}
    </ErrorBoundaryInner>
  );
};
