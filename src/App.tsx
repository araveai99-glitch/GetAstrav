import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Background 3D Canvas (deferred & lazy-loaded to prevent blocking initial paint)
const ThreeBackground = lazy(() => import('./components/common/ThreeBackground'));

// Marketing Layout Header/Footer & Modals
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { DemoModal } from './components/common/DemoModal';
import { ScrollToTop } from './components/common/ScrollToTop';

// Marketing Critical Landing Page (eagerly imported for instant render)
import { Home } from './pages/marketing/Home';

// Marketing Subpages (Code-split route-level dynamic imports)
const Product = lazy(() => import('./pages/marketing/Product').then(m => ({ default: m.Product })));
const AutomatedProgressRollups = lazy(() => import('./pages/marketing/AutomatedProgressRollups').then(m => ({ default: m.AutomatedProgressRollups })));
const GoalsProgress = lazy(() => import('./pages/marketing/Features/GoalsProgress').then(m => ({ default: m.GoalsProgress })));
const AIIntelligence = lazy(() => import('./pages/marketing/Features/AIIntelligence').then(m => ({ default: m.AIIntelligence })));
const TaskManagement = lazy(() => import('./pages/marketing/Features/TaskManagement').then(m => ({ default: m.TaskManagement })));
const Teams = lazy(() => import('./pages/marketing/Features/Teams').then(m => ({ default: m.Teams })));
const Projects = lazy(() => import('./pages/marketing/Features/Projects').then(m => ({ default: m.Projects })));
const Analytics = lazy(() => import('./pages/marketing/Features/Analytics').then(m => ({ default: m.Analytics })));
const Governance = lazy(() => import('./pages/marketing/Features/Governance').then(m => ({ default: m.Governance })));
const Documentation = lazy(() => import('./pages/marketing/Features/Documentation').then(m => ({ default: m.Documentation })));
const Automation = lazy(() => import('./pages/marketing/Features/Automation').then(m => ({ default: m.Automation })));

const UseCases = lazy(() => import('./pages/marketing/Solutions/UseCases').then(m => ({ default: m.UseCases })));
const Founders = lazy(() => import('./pages/marketing/Solutions/Founders').then(m => ({ default: m.Founders })));
const Managers = lazy(() => import('./pages/marketing/Solutions/Managers').then(m => ({ default: m.Managers })));
const Resources = lazy(() => import('./pages/marketing/Resources').then(m => ({ default: m.Resources })));
const HowItWorksPage = lazy(() => import('./pages/marketing/Resources').then(m => ({ default: m.HowItWorksPage })));
const KeyCapabilitiesPage = lazy(() => import('./pages/marketing/Resources').then(m => ({ default: m.KeyCapabilitiesPage })));
const About = lazy(() => import('./pages/marketing/About').then(m => ({ default: m.About })));
const ContactSales = lazy(() => import('./pages/marketing/ContactSales').then(m => ({ default: m.ContactSales })));
const DepartmentWorkflow = lazy(() => import('./pages/marketing/DepartmentWorkflow').then(m => ({ default: m.DepartmentWorkflow })));

// Auth Pages (Code-split)
const Login = lazy(() => import('./pages/auth/Login').then(m => ({ default: m.Login })));
const Signup = lazy(() => import('./pages/auth/Signup').then(m => ({ default: m.Signup })));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword').then(m => ({ default: m.ForgotPassword })));
const ResetPassword = lazy(() => import('./pages/auth/ResetPassword').then(m => ({ default: m.ResetPassword })));

// Application Console Layout & Pages (Code-split to isolate heavy dependencies like TipTap and Supabase from landing page)
const AppLayout = lazy(() => import('./components/app/AppLayout').then(m => ({ default: m.AppLayout })));
const DashboardPage = lazy(() => import('./pages/app/DashboardPage').then(m => ({ default: m.DashboardPage })));
const OrganizationsPage = lazy(() => import('./pages/app/OrganizationsPage').then(m => ({ default: m.OrganizationsPage })));
const DepartmentsPage = lazy(() => import('./pages/app/DepartmentsPage').then(m => ({ default: m.DepartmentsPage })));
const TeamsPage = lazy(() => import('./pages/app/TeamsPage').then(m => ({ default: m.TeamsPage })));
const ProjectsPage = lazy(() => import('./pages/app/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const GoalsPage = lazy(() => import('./pages/app/GoalsPage').then(m => ({ default: m.GoalsPage })));
const MilestonesPage = lazy(() => import('./pages/app/MilestonesPage').then(m => ({ default: m.MilestonesPage })));
const TasksPage = lazy(() => import('./pages/app/TasksPage').then(m => ({ default: m.TasksPage })));
const AnalyticsPage = lazy(() => import('./pages/app/AnalyticsPage').then(m => ({ default: m.AnalyticsPage })));
const DocumentsPage = lazy(() => import('./pages/app/DocumentsPage').then(m => ({ default: m.DocumentsPage })));
const RemindersPage = lazy(() => import('./pages/app/RemindersPage').then(m => ({ default: m.RemindersPage })));
const SettingsPage = lazy(() => import('./pages/app/SettingsPage').then(m => ({ default: m.SettingsPage })));
const MembersPage = lazy(() => import('./pages/app/MembersPage').then(m => ({ default: m.MembersPage })));
const ActivityPage = lazy(() => import('./pages/app/ActivityPage').then(m => ({ default: m.ActivityPage })));

const MarketingLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-ambient flex flex-col font-sans selection:bg-brand-orange selection:text-white relative">
      <Suspense fallback={null}>
        <ThreeBackground intensity="hero" />
      </Suspense>
      <Navbar />
      <main className="flex-1 relative z-10">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/automated-progress-rollups" element={<AutomatedProgressRollups />} />

            {/* Features */}
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
            <Route path="/solutions/use-cases" element={<UseCases />} />
            <Route path="/solutions/founders" element={<Founders />} />
            <Route path="/solutions/managers" element={<Managers />} />

            {/* Resources & About */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/documentation-guides" element={<Resources />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/resources/how-it-works" element={<HowItWorksPage />} />
            <Route path="/key-capabilities" element={<KeyCapabilitiesPage />} />
            <Route path="/resources/key-capabilities" element={<KeyCapabilitiesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactSales />} />
            <Route path="/contact-sales" element={<ContactSales />} />

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
        <Suspense fallback={null}>
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
      </Router>
    </AppProvider>
  );
}

export default App;
