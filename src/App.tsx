import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Marketing Layout Header/Footer
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

// Marketing Pages
import { Home } from './pages/marketing/Home';
import { Product } from './pages/marketing/Product';
import { GoalsProgress } from './pages/marketing/Features/GoalsProgress';
import { AIIntelligence } from './pages/marketing/Features/AIIntelligence';
import { TaskManagement } from './pages/marketing/Features/TaskManagement';
import { Teams } from './pages/marketing/Features/Teams';
import { Projects } from './pages/marketing/Features/Projects';
import { Analytics } from './pages/marketing/Features/Analytics';
import { Governance } from './pages/marketing/Features/Governance';
import { Documentation } from './pages/marketing/Features/Documentation';
import { Automation } from './pages/marketing/Features/Automation';

import { UseCases } from './pages/marketing/Solutions/UseCases';
import { Founders } from './pages/marketing/Solutions/Founders';
import { Managers } from './pages/marketing/Solutions/Managers';
import { Resources } from './pages/marketing/Resources';
import { About } from './pages/marketing/About';

// Auth Pages
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';

// Application Layout & Pages
import { AppLayout } from './components/app/AppLayout';
import { DashboardPage } from './pages/app/DashboardPage';
import { OrganizationsPage } from './pages/app/OrganizationsPage';
import { DepartmentsPage } from './pages/app/DepartmentsPage';
import { TeamsPage } from './pages/app/TeamsPage';
import { ProjectsPage } from './pages/app/ProjectsPage';
import { GoalsPage } from './pages/app/GoalsPage';
import { MilestonesPage } from './pages/app/MilestonesPage';
import { TasksPage } from './pages/app/TasksPage';
import { AnalyticsPage } from './pages/app/AnalyticsPage';
import { DocumentsPage } from './pages/app/DocumentsPage';
import { RemindersPage } from './pages/app/RemindersPage';
import { SettingsPage } from './pages/app/SettingsPage';
import { MembersPage } from './pages/app/MembersPage';
import { ActivityPage } from './pages/app/ActivityPage';

const MarketingLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-ambient flex flex-col font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />

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
          <Route path="/about" element={<About />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <Router>
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
      </Router>
    </AppProvider>
  );
}

export default App;
