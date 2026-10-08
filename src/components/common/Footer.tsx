import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-peach/80 pt-16 pb-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto space-y-12">
        {/* TOP BRAND STATEMENT & POSITIONING */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-brand-peach/60 pb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green p-0.5 shadow-warm-sm flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Layers className="w-5.5 h-5.5 text-brand-orange" />
                </div>
              </div>
              <span className="font-extrabold text-2xl text-espresso tracking-tight">FounderOS / ASTRAV</span>
            </div>
            <p className="text-lg sm:text-xl text-terracotta leading-relaxed max-w-xl font-normal">
              The goal-driven organization operating system with automated mathematical progress rollups, AI goal decomposition, and enterprise RBAC.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap lg:justify-end items-center gap-3 pt-2">
            <span className="px-3.5 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-espresso flex items-center gap-1.5 shadow-warm-2xs">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Composable RBAC
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-espresso flex items-center gap-1.5 shadow-warm-2xs">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Row-Level Security (RLS)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-espresso flex items-center gap-1.5 shadow-warm-2xs">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Zero-Owner Safeguard
            </span>
          </div>
        </div>

        {/* 5 ENTERPRISE FOOTER COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Column 1: PRODUCT */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><Link to="/product" className="hover:text-brand-orange transition-colors">Command Center</Link></li>
              <li><Link to="/features/goals-progress" className="hover:text-brand-orange transition-colors">Goals & Progress</Link></li>
              <li><Link to="/features/ai" className="hover:text-brand-orange transition-colors">AI Intelligence</Link></li>
              <li><Link to="/features/task-management" className="hover:text-brand-orange transition-colors">Task Execution</Link></li>
              <li><Link to="/features/analytics" className="hover:text-brand-orange transition-colors">Analytics Radar</Link></li>
            </ul>
          </div>

          {/* Column 2: SOLUTIONS */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><Link to="/solutions/founders" className="hover:text-brand-orange transition-colors">Founders</Link></li>
              <li><Link to="/solutions/managers" className="hover:text-brand-orange transition-colors">Managers</Link></li>
              <li><Link to="/features/teams" className="hover:text-brand-orange transition-colors">Teams & Pods</Link></li>
              <li><Link to="/solutions/use-cases" className="hover:text-brand-orange transition-colors">Enterprise Use Cases</Link></li>
            </ul>
          </div>

          {/* Column 3: RESOURCES */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><Link to="/resources" className="hover:text-brand-orange transition-colors">Resources</Link></li>
              <li><Link to="/resources" className="hover:text-brand-orange transition-colors">Insights & Articles</Link></li>
              <li><Link to="/features/documentation" className="hover:text-brand-orange transition-colors">Documentation Specs</Link></li>
            </ul>
          </div>

          {/* Column 4: COMPANY */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About FounderOS</Link></li>
              <li><a href="#conversion-cta" className="hover:text-brand-orange transition-colors">Contact Engineering</a></li>
              <li><a href="#conversion-cta" className="hover:text-brand-orange transition-colors">Book a Demo</a></li>
            </ul>
          </div>

          {/* Column 5: LEGAL */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Legal & Trust</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">Terms of Service</span></li>
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">SOC2 Compliance</span></li>
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">Security Architecture</span></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & COMPLIANCE BAR */}
        <div className="pt-8 border-t border-brand-peach/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-terracotta font-semibold">
          <div>© 2026 FounderOS / ASTRAV Operating Engine. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1 hover:text-brand-orange transition-colors">
              Audited Trust Anchor <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
            <span className="flex items-center gap-1 hover:text-brand-orange transition-colors">
              SOC2 Type II Aligned <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
            <span>99.99% Availability SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
