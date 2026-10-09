import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { OrganizationSwitcher } from './OrganizationSwitcher';
import {
  LayoutDashboard,
  Building2,
  Users,
  FolderGit2,
  Target,
  Flag,
  CheckSquare,
  BarChart3,
  FileText,
  Bell,
  Settings,
  UserCheck,
  Activity,
  ArrowLeft,
} from 'lucide-react';

const appNavItems = [
  { path: '/app/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/app/departments', label: 'Departments', icon: Building2 },
  { path: '/app/teams', label: 'Teams & Pods', icon: Users },
  { path: '/app/projects', label: 'Projects', icon: FolderGit2 },
  { path: '/app/goals', label: 'Goals & OKRs', icon: Target },
  { path: '/app/milestones', label: 'Milestones', icon: Flag },
  { path: '/app/tasks', label: 'Tasks & Checklist', icon: CheckSquare },
  { path: '/app/analytics', label: 'Analytics Radar', icon: BarChart3 },
  { path: '/app/documents', label: 'Docs & Specs', icon: FileText },
  { path: '/app/reminders', label: 'Reminders', icon: Bell },
  { path: '/app/members', label: 'Members & Invites', icon: UserCheck },
  { path: '/app/activity', label: 'Activity Audit', icon: Activity },
  { path: '/app/settings', label: 'Org Settings & RBAC', icon: Settings },
];

export const AppSidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-brand-peach/80 h-screen sticky top-0 flex flex-col justify-between p-4 z-40 shrink-0">
      <div className="space-y-4 overflow-y-auto">
        {/* Workspace Switcher Header */}
        <OrganizationSwitcher />

        {/* Navigation Items */}
        <nav className="space-y-1">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-terracotta-muted">
            Command Menu
          </div>
          {appNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-orange text-white shadow-glow-orange'
                      : 'text-terracotta hover:bg-surface-tier1 hover:text-brand-orange'
                  }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer Return Link */}
      <div className="pt-4 border-t border-brand-peach/60 space-y-2">
        <Link
          to="/"
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-terracotta-muted hover:text-brand-orange hover:bg-surface-tier1 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Website
        </Link>
      </div>
    </aside>
  );
};
