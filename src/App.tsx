import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { lazyWithRetry } from './lib/lazyWithRetry';
import { RouteErrorBoundary } from './components/common/RouteErrorBoundary';
import { RouteLoadingBar } from './components/common/RouteLoadingBar';

// Background 3D Canvas (deferred to user interaction or idle timer so Three.js does not compete with initial paint or LCP)
const DeferredThreeBackground: React.FC<{ intensity?: 'hero' | 'standard' | 'subtle'; className?: string }> = (props) => {
  const [Comp, setComp] = React.useState<React.ComponentType<any> | null>(null);

  React.useEffect(() => {
    let active = true;
    const load = () => {
      window.removeEventListener('scroll', load);
      window.removeEventListener('pointerdown', load);
      window.removeEventListener('keydown', load);
      import('./components/common/ThreeBackground').then((mod) => {
        if (active) {
          setComp(() => mod.default || mod.ThreeBackground);
        }
      });
    };

    window.addEventListener('scroll', load, { passive: true, once: true });
    window.addEventListener('pointerdown', load, { passive: true, once: true });
    window.addEventListener('keydown', load, { passive: true, once: true });

    const timer = setTimeout(load, 8000);

    return () => {
      active = false;
      window.removeEventListener('scroll', load);
      window.removeEventListener('pointerdown', load);
      window.removeEventListener('keydown', load);
      clearTimeout(timer);
    };
  }, []);

  if (!Comp) return null;
  return <Comp {...props} />;
};

// Marketing Layout Header/Footer & Modals
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { DemoModal } from './components/common/DemoModal';
import { ScrollToTop } from './components/common/ScrollToTop';

// Marketing Critical Landing Page (eagerly imported for instant render)
import { Home } from './pages/marketing/Home';

// Marketing Subpages (Code-split route-level dynamic imports with auto-retry)
const Product = lazyWithRetry(() => import('./pages/marketing/Product').then(m => ({ default: m.Product })));
const AutomatedProgressRollups = lazyWithRetry(() => import('./pages/marketing/AutomatedProgressRollups').then(m => ({ default: m.AutomatedProgressRollups })));
const GoalsProgress = lazyWithRetry(() => import('./pages/marketing/Features/GoalsProgress').then(m => ({ default: m.GoalsProgress })));
const AIIntelligence = lazyWithRetry(() => import('./pages/marketing/Features/AIIntelligence').then(m => ({ default: m.AIIntelligence })));
const TaskManagement = lazyWithRetry(() => import('./pages/marketing/Features/TaskManagement').then(m => ({ default: m.TaskManagement })));
const Teams = lazyWithRetry(() => import('./pages/marketing/Features/Teams').then(m => ({ default: m.Teams })));
const Projects = lazyWithRetry(() => import('./pages/marketing/Features/Projects').then(m => ({ default: m.Projects })));
const Analytics = lazyWithRetry(() => import('./pages/marketing/Features/Analytics').then(m => ({ default: m.Analytics })));
const Governance = lazyWithRetry(() => import('./pages/marketing/Features/Governance').then(m => ({ default: m.Governance })));
const Documentation = lazyWithRetry(() => import('./pages/marketing/Features/Documentation').then(m => ({ default: m.Documentation })));
const Automation = lazyWithRetry(() => import('./pages/marketing/Features/Automation').then(m => ({ default: m.Automation })));

const UseCases = lazyWithRetry(() => import('./pages/marketing/Solutions/UseCases').then(m => ({ default: m.UseCases })));
const Founders = lazyWithRetry(() => import('./pages/marketing/Solutions/Founders').then(m => ({ default: m.Founders })));
const Managers = lazyWithRetry(() => import('./pages/marketing/Solutions/Managers').then(m => ({ default: m.Managers })));
const Resources = lazyWithRetry(() => import('./pages/marketing/Resources').then(m => ({ default: m.Resources })));
const HowItWorksPage = lazyWithRetry(() => import('./pages/marketing/Resources/HowItWorksPage').then(m => ({ default: m.default || m.HowItWorksPage })));
const KeyCapabilitiesPage = lazyWithRetry(() => import('./pages/marketing/Resources/KeyCapabilitiesPage').then(m => ({ default: m.default || m.KeyCapabilitiesPage })));
const About = lazyWithRetry(() => import('./pages/marketing/About').then(m => ({ default: m.About })));
const ContactSales = lazyWithRetry(() => import('./pages/marketing/ContactSales').then(m => ({ default: m.ContactSales })));
const TrustSecurity = lazyWithRetry(() => import('./pages/marketing/TrustSecurity').then(m => ({ default: m.TrustSecurity })));
const DepartmentWorkflow = lazyWithRetry(() => import('./pages/marketing/DepartmentWorkflow').then(m => ({ default: m.DepartmentWorkflow })));

// Auth Pages (Code-split with auto-retry)
const Login = lazyWithRetry(() => import('./pages/auth/Login').then(m => ({ default: m.Login })));
const Signup = lazyWithRetry(() => import('./pages/auth/Signup').then(m => ({ default: m.Signup })));
const ForgotPassword = lazyWithRetry(() => import('./pages/auth/ForgotPassword').then(m => ({ default: m.ForgotPassword })));
const ResetPassword = lazyWithRetry(() => import('./pages/auth/ResetPassword').then(m => ({ default: m.ResetPassword })));

// Application Console Layout & Pages (Code-split with auto-retry)
const AppLayout = lazyWithRetry(() => import('./components/app/AppLayout').then(m => ({ default: m.AppLayout })));
const DashboardPage = lazyWithRetry(() => import('./pages/app/DashboardPage').then(m => ({ default: m.DashboardPage })));
const OrganizationsPage = lazyWithRetry(() => import('./pages/app/OrganizationsPage').then(m => ({ default: m.OrganizationsPage })));
const DepartmentsPage = lazyWithRetry(() => import('./pages/app/DepartmentsPage').then(m => ({ default: m.DepartmentsPage })));
const TeamsPage = lazyWithRetry(() => import('./pages/app/TeamsPage').then(m => ({ default: m.TeamsPage })));
const ProjectsPage = lazyWithRetry(() => import('./pages/app/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const GoalsPage = lazyWithRetry(() => import('./pages/app/GoalsPage').then(m => ({ default: m.GoalsPage })));
const MilestonesPage = lazyWithRetry(() => import('./pages/app/MilestonesPage').then(m => ({ default: m.MilestonesPage })));
const TasksPage = lazyWithRetry(() => import('./pages/app/TasksPage').then(m => ({ default: m.TasksPage })));
const AnalyticsPage = lazyWithRetry(() => import('./pages/app/AnalyticsPage').then(m => ({ default: m.AnalyticsPage })));
const DocumentsPage = lazyWithRetry(() => import('./pages/app/DocumentsPage').then(m => ({ default: m.DocumentsPage })));
const RemindersPage = lazyWithRetry(() => import('./pages/app/RemindersPage').then(m => ({ default: m.RemindersPage })));
const SettingsPage = lazyWithRetry(() => import('./pages/app/SettingsPage').then(m => ({ default: m.SettingsPage })));
const MembersPage = lazyWithRetry(() => import('./pages/app/MembersPage').then(m => ({ default: m.MembersPage })));
const ActivityPage = lazyWithRetry(() => import('./pages/app/ActivityPage').then(m => ({ default: m.ActivityPage })));

const MarketingLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-ambient flex flex-col font-sans selection:bg-brand-orange selection:text-white relative">
      <DeferredThreeBackground intensity="hero" />
      <Navbar />
      <main className="flex-1 relative z-10">
        <RouteErrorBoundary>
          <Suspense fallback={<RouteLoadingBar />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/automated-progress-rollups" element={<AutomatedProgressRollups />} />

              {/* Features */}
              <Route path="/features" element={<Navigate to="/features/goals-progress" replace />} />
              <Route path="/features/goals-progress" element={<GoalsProgress />} />
              <Route path="/features/ai" element={<AIIntelligence />} />
              <Route path="/features/task-management" element={<TaskManagement />} />
              <Route path="/features/teams" element={<Teams />} />
              <Route path="/features/projects" element={<Projects />} />
              <Route path="/features/analytics" element={<Analytics />} />
              <Route path="/features/governance" element={<Governance />} />
              <Route path="/features/documentation" element={<Documentation />} />
              <Route path="/features/automation" element={<Automation />} />

              {/* Solutions */}
              <Route path="/solutions" element={<Navigate to="/solutions/founders" replace />} />
              <Route path="/solutions/use-cases" element={<UseCases />} />
              <Route path="/solutions/founders" element={<Founders />} />
              <Route path="/solutions/managers" element={<Managers />} />

              {/* Resources & About */}
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/documentation-guides" element={<Resources />} />
              <Route path="/documentation" element={<Navigate to="/features/documentation" replace />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/resources/how-it-works" element={<HowItWorksPage />} />
              <Route path="/key-capabilities" element={<KeyCapabilitiesPage />} />
              <Route path="/resources/key-capabilities" element={<KeyCapabilitiesPage />} />
              <Route path="/company" element={<Navigate to="/about" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactSales />} />
              <Route path="/contact-sales" element={<ContactSales />} />
              <Route path="/trust" element={<TrustSecurity />} />
              <Route path="/security" element={<TrustSecurity />} />
              <Route path="/compliance" element={<TrustSecurity />} />

              {/* Department Workflows */}
              <Route path="/department-workflow/:deptId" element={<DepartmentWorkflow />} />
              <Route path="/department-workflow" element={<DepartmentWorkflow />} />
              <Route path="/organization-workflow/:deptId" element={<DepartmentWorkflow />} />
              <Route path="/organization-workflow" element={<DepartmentWorkflow />} />
              <Route path="/organization-execution/:deptId" element={<DepartmentWorkflow />} />
              <Route path="/organization-execution" element={<DepartmentWorkflow />} />

              {/* Direct Activity Route Aliases */}
              <Route path="/activity" element={<Navigate to="/app/activity" replace />} />
              <Route path="/recent-activity" element={<Navigate to="/app/activity" replace />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
      </main>
      <Footer />
      <DemoModal />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <RouteErrorBoundary>
          <Suspense fallback={<RouteLoadingBar />}>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* App Console Routes */}
              <Route path="/app" element={<AppLayout />}>
                <Route index element={<Navigate to="/app/dashboard" replace />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="organizations" element={<OrganizationsPage />} />
                <Route path="departments" element={<DepartmentsPage />} />
                <Route path="teams" element={<TeamsPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="goals" element={<GoalsPage />} />
                <Route path="milestones" element={<MilestonesPage />} />
                <Route path="tasks" element={<TasksPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="documents" element={<DocumentsPage />} />
                <Route path="reminders" element={<RemindersPage />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="members" element={<MembersPage />} />
                <Route path="activity" element={<ActivityPage />} />
              </Route>

              {/* Marketing Routes */}
              <Route path="/*" element={<MarketingLayout />} />
            </Routes>
          </Suspense>
        </RouteErrorBoundary>
      </Router>
    </AppProvider>
  );
}

export default App;

