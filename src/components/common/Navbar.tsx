import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Layers, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { openDemoModal } from './DemoModal';

interface NavItem {
  name: string;
  path: string;
  badge?: string;
  isAnchor?: boolean;
}

interface NavCategory {
  id: string;
  name: string;
  items: NavItem[];
}

const mobileNavCategories: NavCategory[] = [
  {
    id: 'product',
    name: 'Product',
    items: [
      { name: 'Astrav / Command Center', path: '/product' },
      { name: 'Automated Progress Rollups', path: '/product/automated-progress-rollups' },
      { name: 'AI Goal Decomposition', path: '/features/ai' },
    ],
  },
  {
    id: 'features',
    name: 'Features',
    items: [
      { name: 'Goals & Progress', path: '/features/goals-progress' },
      { name: 'Task Execution & SLA', path: '/features/task-management' },
      { name: 'Teams & Pods', path: '/features/teams' },
      { name: 'Project Containers', path: '/features/projects' },
      { name: 'Dual-Mode Analytics', path: '/features/analytics' },
      { name: 'Governance & RBAC', path: '/features/governance' },
      { name: 'Project Knowledge Specs', path: '/features/documentation' },
      { name: 'Automation & Reminders', path: '/features/automation' },
    ],
  },
  {
    id: 'solutions',
    name: 'Solutions',
    items: [
      { name: 'For Founders', path: '/solutions/founders' },
      { name: 'For Managers', path: '/solutions/managers' },
      { name: 'Enterprise Use Cases', path: '/solutions/use-cases' },
    ],
  },
  {
    id: 'resources',
    name: 'Resources',
    items: [
      { name: 'Documentation & Guides', path: '/resources' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Key Capabilities', path: '/key-capabilities' },
    ],
  },
  {
    id: 'company',
    name: 'Company',
    items: [
      { name: 'About Astrav', path: '/about' },
      { name: 'Trust & Security', path: '/trust' },
      { name: 'Contact Sales', path: '/contact' },
    ],
  },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Automatically close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // When mobile drawer opens, auto-expand the category matching current path (if any)
  useEffect(() => {
    if (mobileMenuOpen) {
      const activeCat = mobileNavCategories.find(cat =>
        cat.items.some(it => it.path === location.pathname)
      );
      if (activeCat) {
        setExpandedCategories({ [activeCat.id]: true });
      } else {
        setExpandedCategories({});
      }
    }
  }, [mobileMenuOpen]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleNavCategoryClick = (defaultPath: string) => {
    setOpenDropdown(null);
    navigate(defaultPath);
  };

  const closeMobileMenu = () => {
    // Small timeout ensures touch event on mobile dispatches navigation before unmounting drawer
    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 40);
  };

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#faf6f0]/95 backdrop-blur-2xl border-b border-brand-peach/60 shadow-warm-sm h-[70px] sm:h-20'
        : 'bg-[#faf6f0]/90 backdrop-blur-xl border-b border-brand-peach/40 shadow-none h-[70px] sm:h-20'
        }`}
    >
      <div
        ref={dropdownRef}
        className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-full flex items-center justify-between gap-2 sm:gap-6"
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
            <span className="text-xs font-heading font-extrabold tracking-[0.16em] sm:tracking-[0.2em] text-brand-orange uppercase mt-0.5">
              COMMAND CENTER
            </span>
          </div>
        </Link>

        {/* CENTER: Desktop Enterprise Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Product Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleNavCategoryClick('/product')}
              onMouseEnter={() => setOpenDropdown('product')}
              className={`${navItemClass} ${location.pathname.startsWith('/product') ? 'text-brand-orange' : ''}`}
              aria-expanded={openDropdown === 'product'}
            >
              <span>Product</span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown('product');
                }}
                className="p-0.5 rounded hover:bg-brand-orange-light/50 transition-colors"
                title="Toggle Product menu"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'product'
                    ? 'rotate-180 text-brand-orange'
                    : location.pathname.startsWith('/product')
                      ? 'text-brand-orange'
                      : 'text-terracotta-muted group-hover:text-brand-orange'
                    }`}
                />
              </span>
              {/* High-contrast smooth growing underline */}
              <span
                className={`absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange transition-transform duration-200 origin-center rounded-full ${location.pathname.startsWith('/product') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
              />
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
                    className={`px-4 py-2.5 rounded-xl text-sm font-heading font-bold transition-colors ${location.pathname === '/product'
                      ? 'bg-brand-orange-light text-brand-orange'
                      : 'text-espresso hover:bg-brand-orange-light hover:text-brand-orange'
                      }`}
                  >
                    Astrav / Command Center
                  </Link>
                  <Link
                    to="/product/automated-progress-rollups"
                    onClick={() => setOpenDropdown(null)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${location.pathname === '/product/automated-progress-rollups'
                      ? 'bg-brand-orange-light text-brand-orange font-bold'
                      : 'text-terracotta hover:bg-brand-orange-light hover:text-brand-orange'
                      }`}
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
              onClick={() => handleNavCategoryClick('/features/goals-progress')}
              onMouseEnter={() => setOpenDropdown('features')}
              className={navItemClass}
              aria-expanded={openDropdown === 'features'}
            >
              <span>Features</span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown('features');
                }}
                className="p-0.5 rounded hover:bg-brand-orange-light/50 transition-colors"
                title="Toggle Features menu"
              >
                <ChevronDown
                  className={`w-4 h-4 text-terracotta-muted transition-transform duration-200 ${openDropdown === 'features' ? 'rotate-180 text-brand-orange' : 'group-hover:text-brand-orange'
                    }`}
                />
              </span>
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
              onClick={() => handleNavCategoryClick('/solutions/founders')}
              onMouseEnter={() => setOpenDropdown('solutions')}
              className={navItemClass}
              aria-expanded={openDropdown === 'solutions'}
            >
              <span>Solutions</span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown('solutions');
                }}
                className="p-0.5 rounded hover:bg-brand-orange-light/50 transition-colors"
                title="Toggle Solutions menu"
              >
                <ChevronDown
                  className={`w-4 h-4 text-terracotta-muted transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180 text-brand-orange' : 'group-hover:text-brand-orange'
                    }`}
                />
              </span>
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
              onClick={() => handleNavCategoryClick('/resources')}
              onMouseEnter={() => setOpenDropdown('resources')}
              className={navItemClass}
              aria-expanded={openDropdown === 'resources'}
            >
              <span>Resources</span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown('resources');
                }}
                className="p-0.5 rounded hover:bg-brand-orange-light/50 transition-colors"
                title="Toggle Resources menu"
              >
                <ChevronDown
                  className={`w-4 h-4 text-terracotta-muted transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180 text-brand-orange' : 'group-hover:text-brand-orange'
                    }`}
                />
              </span>
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
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${location.pathname === '/resources'
                      ? 'bg-brand-orange-light text-brand-orange font-bold'
                      : 'text-terracotta hover:bg-brand-orange-light hover:text-brand-orange'
                      }`}
                  >
                    Documentation & Guides
                  </Link>
                  <Link
                    to="/how-it-works"
                    onClick={() => setOpenDropdown(null)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${location.pathname === '/how-it-works'
                      ? 'bg-brand-orange-light text-brand-orange font-bold'
                      : 'text-terracotta hover:bg-brand-orange-light hover:text-brand-orange'
                      }`}
                  >
                    How It Works
                  </Link>
                  <Link
                    to="/key-capabilities"
                    onClick={() => setOpenDropdown(null)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors ${location.pathname === '/key-capabilities'
                      ? 'bg-brand-orange-light text-brand-orange font-bold'
                      : 'text-terracotta hover:bg-brand-orange-light hover:text-brand-orange'
                      }`}
                  >
                    Key Capabilities
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Company */}
          <div className="relative">
            <button
              onClick={() => handleNavCategoryClick('/about')}
              onMouseEnter={() => setOpenDropdown('company')}
              className={navItemClass}
              aria-expanded={openDropdown === 'company'}
            >
              <span>Company</span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown('company');
                }}
                className="p-0.5 rounded hover:bg-brand-orange-light/50 transition-colors"
                title="Toggle Company menu"
              >
                <ChevronDown
                  className={`w-4 h-4 text-terracotta-muted transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-180 text-brand-orange' : 'group-hover:text-brand-orange'
                    }`}
                />
              </span>
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
                  <Link
                    to="/trust"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Trust & Security
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setOpenDropdown(null)}
                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-terracotta hover:bg-brand-orange-light hover:text-brand-orange"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* RIGHT: Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            to="/login"
            className="hidden md:inline-flex items-center justify-center text-xs sm:text-sm font-heading font-bold text-terracotta hover:text-brand-orange px-3.5 py-2.5 transition-colors hover:-translate-y-0.5 active:translate-y-0"
          >
            Sign In
          </Link>

          <button
            type="button"
            onClick={openDemoModal}
            style={{ touchAction: 'manipulation' }}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 text-[13px] sm:text-sm font-heading font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-3.5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md shadow-brand-orange/30 transition-all hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer shrink-0 select-none"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Mobile Drawer Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-espresso hover:text-brand-orange hover:bg-brand-orange-light/40 rounded-xl transition-colors focus:outline-none shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-espresso" /> : <Menu className="w-6 h-6 text-espresso" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#faf6f0] border-b border-brand-peach shadow-warm-xl max-h-[calc(100vh-70px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto overscroll-contain"
          >
            <div className="p-4 sm:p-5 pb-8 space-y-3 max-w-lg mx-auto">
              {/* Home Overview Link */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-heading font-bold transition-all ${location.pathname === '/'
                  ? 'bg-brand-orange-light text-brand-orange shadow-warm-2xs'
                  : 'bg-white border border-brand-peach/80 text-espresso hover:text-brand-orange hover:border-brand-orange/40'
                  }`}
              >
                <span>Home Overview</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </Link>

              {/* Direct Main Navigation Categories */}
              <div className="space-y-2.5">
                {mobileNavCategories.map(category => {
                  const isExpanded = !!expandedCategories[category.id];
                  const isAnySubActive = category.items.some(it => location.pathname === it.path);

                  return (
                    <div
                      key={category.id}
                      className={`rounded-xl border transition-all overflow-hidden bg-white shadow-warm-2xs ${
                        isAnySubActive
                          ? 'border-brand-orange/50 ring-1 ring-brand-orange/20'
                          : isExpanded
                          ? 'border-brand-orange/30'
                          : 'border-brand-peach/80'
                      }`}
                    >
                      {/* Category Header Button */}
                      <button
                        type="button"
                        onClick={() => toggleCategory(category.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`mobile-nav-${category.id}`}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer select-none ${
                          isExpanded
                            ? 'bg-brand-orange-light/35 text-espresso'
                            : 'hover:bg-brand-orange-light/20 text-espresso'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-2 h-2 rounded-full transition-colors ${
                              isAnySubActive
                                ? 'bg-brand-orange ring-4 ring-brand-orange/20'
                                : isExpanded
                                ? 'bg-brand-orange'
                                : 'bg-brand-peach'
                            }`}
                          />
                          <span
                            className={`font-heading font-bold text-sm sm:text-base ${
                              isAnySubActive ? 'text-brand-orange' : 'text-espresso'
                            }`}
                          >
                            {category.name}
                          </span>
                          {isAnySubActive && (
                            <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange-light px-2 py-0.5 rounded-full border border-brand-orange/20">
                              Active
                            </span>
                          )}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-terracotta transition-transform duration-200 shrink-0 ${
                            isExpanded ? 'rotate-180 text-brand-orange' : ''
                          }`}
                        />
                      </button>

                      {/* Inline Submenu */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={`mobile-nav-${category.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="overflow-hidden border-t border-brand-peach/50 bg-[#faf6f0]/50"
                          >
                            <div className="py-2 px-3 space-y-1 ml-3.5 my-2 border-l-2 border-brand-orange/30 pl-3">
                              {category.items.map(item => {
                                const isActive = location.pathname === item.path;
                                return (
                                  <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={closeMobileMenu}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-sm transition-all group ${
                                      isActive
                                        ? 'bg-brand-orange-light text-brand-orange font-bold shadow-warm-2xs'
                                        : 'text-terracotta font-medium hover:text-brand-orange hover:bg-brand-orange-light/30'
                                    }`}
                                  >
                                    <span className="leading-snug">{item.name}</span>
                                    {isActive ? (
                                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 ml-2" />
                                    ) : (
                                      <ArrowRight className="w-3.5 h-3.5 text-terracotta/40 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Actions: Sign In & Book a Demo */}
              <div className="pt-2 border-t border-brand-peach/60 space-y-2">
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white border border-brand-peach/80 text-sm font-heading font-bold text-espresso hover:text-brand-orange hover:border-brand-orange/40 transition-colors"
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4 text-terracotta" />
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openDemoModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-heading font-bold shadow-md shadow-brand-orange/30 transition-all cursor-pointer"
                >
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
