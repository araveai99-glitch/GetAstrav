import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers, ChevronDown, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-brand-peach/80 shadow-warm-sm transition-all">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow p-0.5 shadow-warm-sm group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Layers className="w-5 h-5 text-brand-orange" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-espresso leading-none group-hover:text-brand-orange transition-colors">
              GETASTRAV
            </span>
            <span className="text-[10px] font-bold tracking-[0.15em] text-terracotta-muted uppercase mt-0.5">
              FounderOS
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Product Dropdown */}
          <div className="relative group">
            <button className="px-3 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange hover:bg-surface-tier1 transition-colors flex items-center gap-1">
              <span>Product</span>
              <ChevronDown className="w-4 h-4 text-terracotta-muted group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-64 z-50">
              <div className="bg-white p-2 rounded-2xl shadow-warm-xl border border-brand-peach/80 flex flex-col gap-1">
                <Link
                  to="/product"
                  className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange transition-colors"
                >
                  Command Center Overview
                </Link>
                <Link
                  to="/features/goals-progress"
                  className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange transition-colors"
                >
                  Automated Progress Rollups
                </Link>
                <Link
                  to="/features/ai"
                  className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange transition-colors"
                >
                  AI Goal Decomposition
                </Link>
              </div>
            </div>
          </div>

          {/* Features Dropdown */}
          <div className="relative group">
            <button className="px-3 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange hover:bg-surface-tier1 transition-colors flex items-center gap-1">
              <span>Features</span>
              <ChevronDown className="w-4 h-4 text-terracotta-muted group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-64 z-50">
              <div className="bg-white p-2 rounded-2xl shadow-warm-xl border border-brand-peach/80 flex flex-col gap-1">
                <Link to="/features/task-management" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Task Management</Link>
                <Link to="/features/teams" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Teams & Pods</Link>
                <Link to="/features/projects" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Project Containers</Link>
                <Link to="/features/analytics" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Dual-Mode Analytics</Link>
                <Link to="/features/governance" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Governance & RBAC</Link>
                <Link to="/features/documentation" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Project Knowledge Specs</Link>
                <Link to="/features/automation" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Automation & Reminders</Link>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="px-3 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange hover:bg-surface-tier1 transition-colors flex items-center gap-1">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4 text-terracotta-muted group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-60 z-50">
              <div className="bg-white p-2 rounded-2xl shadow-warm-xl border border-brand-peach/80 flex flex-col gap-1">
                <Link to="/solutions/founders" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">For Founders</Link>
                <Link to="/solutions/managers" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">For Managers</Link>
                <Link to="/solutions/use-cases" className="px-3 py-2 rounded-xl text-xs font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Enterprise Use Cases</Link>
              </div>
            </div>
          </div>

          <Link to="/resources" className="px-3 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange hover:bg-surface-tier1 transition-colors">Resources</Link>
          <Link to="/about" className="px-3 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange hover:bg-surface-tier1 transition-colors">Company</Link>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <Link
            to="/app/dashboard"
            className="hidden sm:inline-flex items-center justify-center text-xs font-bold text-espresso bg-white hover:bg-surface-tier1 px-4 py-2.5 rounded-xl shadow-warm-sm border border-brand-peach transition-all"
          >
            Launch Command Console
          </Link>

          <Link
            to="/login"
            className="hidden md:inline-flex items-center justify-center text-xs font-bold text-terracotta hover:text-brand-orange px-3 py-2.5 transition-colors"
          >
            Sign In
          </Link>

          <a
            href="#conversion-cta"
            onClick={(e) => {
              const el = document.getElementById('conversion-cta');
              if (el) {
                e.preventDefault();
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate('/#conversion-cta');
              }
            }}
            className="inline-flex items-center justify-center text-xs font-bold text-white bg-brand-orange hover:bg-primary-hover px-5 py-2.5 rounded-xl shadow-glow-orange transition-all hover:-translate-y-0.5"
          >
            Book a Demo
          </a>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-terracotta hover:text-brand-orange focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-peach p-4 space-y-3 shadow-warm-xl max-h-[80vh] overflow-y-auto animate-fadeIn">
          <div className="text-[10px] font-bold text-terracotta-muted uppercase tracking-wider px-2">
            Navigation Menu
          </div>
          <div className="grid grid-cols-1 gap-1">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl text-sm font-bold text-espresso hover:bg-surface-tier1">Home Overview</Link>
            <Link to="/product" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Product Console</Link>
            <Link to="/features/goals-progress" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Goals & Progress</Link>
            <Link to="/features/ai" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">AI Intelligence</Link>
            <Link to="/features/governance" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Governance & RBAC</Link>
            <Link to="/app/dashboard" onClick={() => setMobileMenuOpen(false)} className="p-2.5 rounded-xl text-sm font-bold text-brand-orange hover:bg-surface-tier1 flex items-center gap-2">
              Launch App Console <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
