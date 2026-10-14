import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Layers, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { openDemoModal } from './DemoModal';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrolled = window.scrollY > 20;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  const navItemClass =
    'relative px-3.5 py-2 text-sm font-heading font-semibold text-espresso hover:text-brand-orange transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-1.5 group select-none cursor-pointer';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf6f0]/95 backdrop-blur-2xl border-b border-brand-peach/60 shadow-warm-sm h-[70px] sm:h-20'
          : 'bg-[#faf6f0]/90 backdrop-blur-xl border-b border-brand-peach/40 shadow-none h-[70px] sm:h-20'
      }`}
    >
      <div
        ref={dropdownRef}
        className="max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-10 h-full flex items-center justify-between gap-2 sm:gap-6"
      >
        {/* LEFT: Brand Logo - Astrav */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-brand-orange text-white p-0.5 shadow-sm shadow-brand-orange/30 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-brand-orange rounded-[9px] sm:rounded-[10px] flex items-center justify-center">
              <Layers className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-[15px] sm:text-xl tracking-tight text-espresso leading-none group-hover:text-brand-orange transition-colors">
              Astrav
            </span>
            <span className="text-[8.5px] sm:text-[10px] font-heading font-extrabold tracking-[0.16em] sm:tracking-[0.2em] text-brand-orange uppercase mt-0.5">
              COMMAND CENTER
            </span>
          </div>
        </Link>

        {/* CENTER: Desktop Enterprise Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Product Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('product')}
              onMouseEnter={() => setOpenDropdown('product')}
              className={navItemClass}
              aria-expanded={openDropdown === 'product'}
            >
              <span>Product</span>
              <ChevronDown
                className={`w-4 h-4 text-terracotta-muted transition-transform duration-200 ${
                  openDropdown === 'product' ? 'rotate-180 text-brand-orange' : 'group-hover:text-brand-orange'
                }`}
              />
              {/* High-contrast smooth growing underline */}
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
            </button>
            {openDropdown === 'product' && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute left-0 top-full pt-2 w-72 z-50 animate-fadeIn"
              >
                <div className="bg-white p-3 rounded-2xl shadow-warm-xl border border-brand-peach flex flex-col gap-1">
                  <Link
                    to="/product"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2.5 rounded-xl text-sm font-heading font-bold text-espresso hover:bg-brand-orange-light hover:text-brand-orange transition-colors"
                  >
                    Command Center Overview
                  </Link>
                  <Link
                    to="/features/goals-progress"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange transition-colors"
                  >
                    Automated Progress Rollups
                  </Link>
                  <Link
                    to="/features/ai"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange transition-colors"
                  >
                    AI Goal Decomposition
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Features Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('features')}
              onMouseEnter={() => setOpenDropdown('features')}
              className={navItemClass}
              aria-expanded={openDropdown === 'features'}
            >
              <span>Features</span>
              <ChevronDown
                className={`w-4 h-4 text-terracotta-muted transition-transform duration-200 ${
                  openDropdown === 'features' ? 'rotate-180 text-brand-orange' : 'group-hover:text-brand-orange'
                }`}
              />
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
            </button>
            {openDropdown === 'features' && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute left-0 top-full pt-2 w-72 z-50 animate-fadeIn"
              >
                <div className="bg-white p-3 rounded-2xl shadow-warm-xl border border-brand-peach flex flex-col gap-1">
                  <Link
                    to="/features/task-management"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Task Execution & SLA
                  </Link>
                  <Link
                    to="/features/teams"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Teams & Pods
                  </Link>
                  <Link
                    to="/features/projects"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Project Containers
                  </Link>
                  <Link
                    to="/features/analytics"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Dual-Mode Analytics
                  </Link>
                  <Link
                    to="/features/governance"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Governance & RBAC
                  </Link>
                  <Link
                    to="/features/documentation"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Project Knowledge Specs
                  </Link>
                  <Link
                    to="/features/automation"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Automation & Reminders
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('solutions')}
              onMouseEnter={() => setOpenDropdown('solutions')}
              className={navItemClass}
              aria-expanded={openDropdown === 'solutions'}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-4 h-4 text-terracotta-muted transition-transform duration-200 ${
                  openDropdown === 'solutions' ? 'rotate-180 text-brand-orange' : 'group-hover:text-brand-orange'
                }`}
              />
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
            </button>
            {openDropdown === 'solutions' && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute left-0 top-full pt-2 w-64 z-50 animate-fadeIn"
              >
                <div className="bg-white p-3 rounded-2xl shadow-warm-xl border border-brand-peach flex flex-col gap-1">
                  <Link
                    to="/solutions/founders"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    For Founders
                  </Link>
                  <Link
                    to="/solutions/managers"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    For Managers
                  </Link>
                  <Link
                    to="/solutions/use-cases"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Enterprise Use Cases
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Resources */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('resources')}
              onMouseEnter={() => setOpenDropdown('resources')}
              className={navItemClass}
              aria-expanded={openDropdown === 'resources'}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-4 h-4 text-terracotta-muted transition-transform duration-200 ${
                  openDropdown === 'resources' ? 'rotate-180 text-brand-orange' : 'group-hover:text-brand-orange'
                }`}
              />
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
            </button>
            {openDropdown === 'resources' && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute left-0 top-full pt-2 w-64 z-50 animate-fadeIn"
              >
                <div className="bg-white p-3 rounded-2xl shadow-warm-xl border border-brand-peach flex flex-col gap-1">
                  <Link
                    to="/resources"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Documentation & Guides
                  </Link>
                  <a
                    href="#how-it-works"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    How It Works
                  </a>
                  <a
                    href="#capabilities"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Key Capabilities
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Company */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('company')}
              onMouseEnter={() => setOpenDropdown('company')}
              className={navItemClass}
              aria-expanded={openDropdown === 'company'}
            >
              <span>Company</span>
              <ChevronDown
                className={`w-4 h-4 text-terracotta-muted transition-transform duration-200 ${
                  openDropdown === 'company' ? 'rotate-180 text-brand-orange' : 'group-hover:text-brand-orange'
                }`}
              />
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
            </button>
            {openDropdown === 'company' && (
              <div
                onMouseLeave={() => setOpenDropdown(null)}
                className="absolute left-0 top-full pt-2 w-64 z-50 animate-fadeIn"
              >
                <div className="bg-white p-3 rounded-2xl shadow-warm-xl border border-brand-peach flex flex-col gap-1">
                  <Link
                    to="/about"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    About Astrav
                  </Link>
                  <a
                    href="#conversion-cta"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT: Action CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/app/dashboard"
            className="hidden xl:inline-flex items-center justify-center text-xs sm:text-sm font-heading font-bold text-espresso bg-white hover:bg-brand-orange-light px-5 py-2.5 rounded-full shadow-warm-sm border border-brand-peach transition-all hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5 active:translate-y-0"
          >
            Launch Console
          </Link>

          <Link
            to="/login"
            className="hidden md:inline-flex items-center justify-center text-xs sm:text-sm font-heading font-bold text-terracotta hover:text-brand-orange px-3 py-2.5 transition-colors hover:-translate-y-0.5 active:translate-y-0"
          >
            Sign In
          </Link>

          <button
            type="button"
            onClick={openDemoModal}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm font-heading font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-3.5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md shadow-brand-orange/30 transition-all hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer shrink-0"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Drawer Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 sm:p-2 text-espresso hover:text-brand-orange focus:outline-none shrink-0"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-espresso" /> : <Menu className="w-6 h-6 text-espresso" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-peach p-5 space-y-4 shadow-warm-xl max-h-[85vh] overflow-y-auto animate-fadeIn">
          <div className="text-xs font-mono font-bold text-espresso uppercase tracking-wider">
            Astrav Navigation
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-bold text-espresso hover:bg-surface-tier1">Home Overview</Link>
            <Link to="/product" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Product Console</Link>
            <Link to="/features/goals-progress" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Goals & Progress</Link>
            <Link to="/features/ai" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">AI Intelligence</Link>
            <Link to="/features/governance" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Governance & RBAC</Link>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-semibold text-terracotta hover:bg-surface-tier1">Sign In</Link>
            <Link to="/app/dashboard" onClick={() => setMobileMenuOpen(false)} className="p-3 rounded-xl text-sm font-bold text-espresso hover:bg-surface-tier1 flex items-center justify-between">
              <span>Launch Command Console</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
