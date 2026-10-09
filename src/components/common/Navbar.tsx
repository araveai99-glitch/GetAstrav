import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-2xl border-b border-brand-peach/80 shadow-warm-md h-18 sm:h-20'
          : 'bg-white/80 backdrop-blur-lg border-b border-brand-peach/50 h-20 sm:h-22'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center justify-between gap-6">
        {/* LEFT: Brand Logo - GetAstrav */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green p-0.5 shadow-warm-sm group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Layers className="w-5.5 h-5.5 text-brand-orange" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-espresso leading-none group-hover:text-brand-orange transition-colors">
              GetAstrav
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-brand-orange uppercase mt-0.5">
              COMMAND CENTER
            </span>
          </div>
        </Link>

        {/* CENTER: Desktop Enterprise Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Product Dropdown */}
          <div className="relative group">
            <button className="px-3.5 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange transition-colors flex items-center gap-1.5 relative">
              <span>Product</span>
              <ChevronDown className="w-4 h-4 text-terracotta-muted group-hover:rotate-180 transition-transform" />
              <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-72 z-50">
              <div className="bg-white p-3 rounded-2xl shadow-warm-xl border border-brand-peach/80 flex flex-col gap-1">
                <Link
                  to="/product"
                  className="px-4 py-2.5 rounded-xl text-sm font-bold text-espresso hover:bg-surface-tier1 hover:text-brand-orange transition-colors"
                >
                  Command Center Overview
                </Link>
                <Link
                  to="/features/goals-progress"
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange transition-colors"
                >
                  Automated Progress Rollups
                </Link>
                <Link
                  to="/features/ai"
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange transition-colors"
                >
                  AI Goal Decomposition
                </Link>
              </div>
            </div>
          </div>

          {/* Features Dropdown */}
          <div className="relative group">
            <button className="px-3.5 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange transition-colors flex items-center gap-1.5 relative">
              <span>Features</span>
              <ChevronDown className="w-4 h-4 text-terracotta-muted group-hover:rotate-180 transition-transform" />
              <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-72 z-50">
              <div className="bg-white p-3 rounded-2xl shadow-warm-xl border border-brand-peach/80 flex flex-col gap-1">
                <Link to="/features/task-management" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Task Execution & SLA</Link>
                <Link to="/features/teams" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Teams & Pods</Link>
                <Link to="/features/projects" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Project Containers</Link>
                <Link to="/features/analytics" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Dual-Mode Analytics</Link>
                <Link to="/features/governance" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Governance & RBAC</Link>
                <Link to="/features/documentation" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Project Knowledge Specs</Link>
                <Link to="/features/automation" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Automation & Reminders</Link>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="px-3.5 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange transition-colors flex items-center gap-1.5 relative">
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4 text-terracotta-muted group-hover:rotate-180 transition-transform" />
              <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>
            <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-64 z-50">
              <div className="bg-white p-3 rounded-2xl shadow-warm-xl border border-brand-peach/80 flex flex-col gap-1">
                <Link to="/solutions/founders" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">For Founders</Link>
                <Link to="/solutions/managers" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">For Managers</Link>
                <Link to="/solutions/use-cases" className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-terracotta hover:bg-surface-tier1 hover:text-brand-orange">Enterprise Use Cases</Link>
              </div>
            </div>
          </div>

          <Link to="/resources" className="px-3.5 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange transition-colors relative group">
            <span>Resources</span>
            <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
          </Link>
          <Link to="/about" className="px-3.5 py-2 rounded-lg text-sm font-semibold text-terracotta hover:text-brand-orange transition-colors relative group">
            <span>Company</span>
            <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
          </Link>
        </nav>

        {/* RIGHT: Action CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/app/dashboard"
            className="hidden xl:inline-flex items-center justify-center text-xs sm:text-sm font-bold text-espresso bg-white hover:bg-surface-tier1 px-4 py-2.5 rounded-xl shadow-warm-sm border border-brand-peach transition-all hover:border-brand-orange"
          >
            Launch Console
          </Link>

          <Link
            to="/login"
            className="hidden md:inline-flex items-center justify-center text-xs sm:text-sm font-bold text-terracotta hover:text-brand-orange px-3 py-2.5 transition-colors"
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
            className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white bg-brand-orange hover:bg-primary-hover px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-glow-orange transition-all hover:-translate-y-0.5 group"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-terracotta hover:text-brand-orange focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-peach p-5 space-y-4 shadow-warm-xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
            GetAstrav Navigation
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-bold text-espresso hover:bg-surface-tier1">Home Overview</Link>
            <Link to="/product" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Product Console</Link>
            <Link to="/features/goals-progress" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Goals & Progress</Link>
            <Link to="/features/ai" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">AI Intelligence</Link>
            <Link to="/features/governance" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Governance & RBAC</Link>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Sign In</Link>
            <Link to="/app/dashboard" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-bold text-brand-orange hover:bg-surface-tier1 flex items-center justify-between">
              <span>Launch Command Console</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
