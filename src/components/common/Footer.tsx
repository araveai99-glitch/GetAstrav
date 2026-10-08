import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-peach/60 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1340px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center">
                <Layers className="w-5 h-5 text-brand-orange" />
              </div>
            </div>
            <span className="font-extrabold text-xl text-espresso tracking-tight">GETASTRAV FounderOS</span>
          </div>
          <p className="text-xs text-terracotta leading-relaxed max-w-sm">
            The goal-driven organization operating system with automated mathematical progress rollups, AI goal decomposition, and enterprise RBAC.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="px-2.5 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-[10px] font-bold text-espresso flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-brand-green" /> Composable RBAC
            </span>
            <span className="px-2.5 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-[10px] font-bold text-espresso flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-brand-green" /> Row Level Security
            </span>
            <span className="px-2.5 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-[10px] font-bold text-espresso flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-brand-green" /> Zero-Owner Safeguard
            </span>
          </div>
        </div>

        {/* Column 1: Product */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-espresso uppercase tracking-wider">Product</h4>
          <ul className="space-y-2 text-xs text-terracotta">
            <li><Link to="/product" className="hover:text-brand-orange transition-colors">Command Center</Link></li>
            <li><Link to="/features/goals-progress" className="hover:text-brand-orange transition-colors">Goals & Progress</Link></li>
            <li><Link to="/features/ai" className="hover:text-brand-orange transition-colors">AI Intelligence</Link></li>
            <li><Link to="/features/task-management" className="hover:text-brand-orange transition-colors">Task Execution</Link></li>
          </ul>
        </div>

        {/* Column 2: Features */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-espresso uppercase tracking-wider">Features</h4>
          <ul className="space-y-2 text-xs text-terracotta">
            <li><Link to="/features/teams" className="hover:text-brand-orange transition-colors">Teams & Pods</Link></li>
            <li><Link to="/features/projects" className="hover:text-brand-orange transition-colors">Project Containers</Link></li>
            <li><Link to="/features/analytics" className="hover:text-brand-orange transition-colors">Analytics Radar</Link></li>
            <li><Link to="/features/governance" className="hover:text-brand-orange transition-colors">Governance & RBAC</Link></li>
            <li><Link to="/features/documentation" className="hover:text-brand-orange transition-colors">Documentation</Link></li>
            <li><Link to="/features/automation" className="hover:text-brand-orange transition-colors">Automation & Reminders</Link></li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-espresso uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-xs text-terracotta">
            <li><Link to="/solutions/founders" className="hover:text-brand-orange transition-colors">For Founders</Link></li>
            <li><Link to="/solutions/managers" className="hover:text-brand-orange transition-colors">For Managers</Link></li>
            <li><Link to="/resources" className="hover:text-brand-orange transition-colors">Resources & Insights</Link></li>
            <li><Link to="/about" className="hover:text-brand-orange transition-colors">About GETASTRAV</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1340px] mx-auto pt-8 border-t border-brand-peach/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-terracotta-muted">
        <div>© 2026 GETASTRAV FounderOS. Enterprise Architecture Protocol. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <span>Audited Trust Anchor</span>
          <span>SOC2 Type II Aligned</span>
          <span>99.99% Availability SLA</span>
        </div>
      </div>
    </footer>
  );
};
