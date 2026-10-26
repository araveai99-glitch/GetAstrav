import React, { useEffect, useMemo, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Target,
  Sparkles,
  ChevronRight,
  User,
  Activity,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import {
  DEPARTMENTS,
  DepartmentWorkflowItem,
  ORGANIZATION_OVERVIEW,
} from '../../data/departmentWorkflows';

export const DepartmentWorkflow: React.FC = () => {
  const { deptId } = useParams<{ deptId?: string }>();
  const navigate = useNavigate();

  // Normalize requested id (case-insensitive, fallback to 'product')
  const activeDeptId = useMemo(() => {
    if (!deptId) return 'product';
    const lower = deptId.toLowerCase().trim();
    const match = DEPARTMENTS.find((d) => d.id === lower);
    return match ? match.id : 'product';
  }, [deptId]);

  // Selected department receives top visual priority
  const selectedDept = useMemo<DepartmentWorkflowItem>(() => {
    return (
      DEPARTMENTS.find((d) => d.id === activeDeptId) || DEPARTMENTS[0]
    );
  }, [activeDeptId]);

  // Remaining departments in original order, excluding the selected department
  const remainingDepts = useMemo<DepartmentWorkflowItem[]>(() => {
    return DEPARTMENTS.filter((d) => d.id !== selectedDept.id);
  }, [selectedDept.id]);

  const primaryFocusRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);

  // Smoothly bring selected department content into view on mobile
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (primaryFocusRef.current && window.innerWidth < 1024) {
      const rect = primaryFocusRef.current.getBoundingClientRect();
      const currentY = window.pageYOffset || document.documentElement.scrollTop;
      const navbarHeight = 70;
      const spacingBuffer = 12;
      window.scrollTo({
        top: Math.max(0, currentY + rect.top - navbarHeight - spacingBuffer),
        behavior: 'smooth',
      });
    }
  }, [activeDeptId]);

  const handleSelectDepartment = (id: string) => {
    if (id === activeDeptId) {
      if (primaryFocusRef.current && window.innerWidth < 1024) {
        const rect = primaryFocusRef.current.getBoundingClientRect();
        const currentY = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: Math.max(0, currentY + rect.top - 70 - 12),
          behavior: 'smooth',
        });
      }
    } else {
      navigate(`/department-workflow/${id}`);
    }
  };

  // Helper to choose deliverable icon based on its exact text
  const getDeliverableIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('(done)') || lower.includes('(completed)') || lower.includes('(launched)')) {
      return <CheckCircle2 className="w-4 h-4 text-[#2e936f] shrink-0 mt-0.5" />;
    }
    if (lower.includes('overdue')) {
      return <AlertTriangle className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />;
    }
    if (lower.includes('in progress') || lower.includes('reviewing')) {
      return <Clock className="w-4 h-4 text-[#fab60a] shrink-0 mt-0.5" />;
    }
    return <Calendar className="w-4 h-4 text-[#f15e1c] shrink-0 mt-0.5" />;
  };

  return (
    <div className="w-full min-h-screen bg-[#faf6f0] text-espresso selection:bg-brand-orange selection:text-white pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">

        {/* ============================================================ */}
        {/* A. PAGE HEADER & BREADCRUMBS                                 */}
        {/* ============================================================ */}
        <div className="space-y-4">
          {/* Breadcrumb & Back Button */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <Link
                to="/"
                className="text-terracotta-muted hover:text-brand-orange transition-colors flex items-center gap-1.5"
              >
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <Link
                to="/department-workflow/product"
                className="text-terracotta-muted hover:text-brand-orange transition-colors"
              >
                Organization Workflow
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span className="font-heading font-bold text-espresso bg-white px-2.5 py-0.5 rounded-full border border-brand-peach/60 shadow-warm-2xs">
                {selectedDept.name}
              </span>
            </nav>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-surface-tier1 text-espresso border border-brand-peach shadow-warm-xs text-xs sm:text-sm font-heading font-bold transition-all active:scale-95 group"
            >
              <ArrowLeft className="w-4 h-4 text-brand-orange group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Overview</span>
            </Link>
          </div>

          {/* Main Page Heading and Supporting Description */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-brand-peach/60">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl min-[390px]:text-[32px] sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-[#271812] tracking-tight font-heading leading-[1.12]">
                {ORGANIZATION_OVERVIEW.title}
              </h1>
              <p className="text-base text-[#5a4138] leading-relaxed font-normal">
                {ORGANIZATION_OVERVIEW.description}
              </p>
            </div>

            {/* Compact Organization-Wide Execution Overview */}
            <div className="bg-white/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-brand-peach/80 shadow-warm-xs flex flex-wrap sm:flex-nowrap items-center gap-4 lg:gap-6 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#edf7f3] border border-[#2e936f]/30 flex items-center justify-center text-[#2e936f] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-heading font-bold text-terracotta-muted uppercase tracking-wider block">
                    Strategic Rollup
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-heading font-extrabold text-lg text-espresso leading-none">
                      {ORGANIZATION_OVERVIEW.northStarProgress}
                    </span>
                    <span className="text-xs sm:text-sm font-heading font-bold text-[#2e936f]">
                      {ORGANIZATION_OVERVIEW.northStarGoal}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-8 w-px bg-brand-peach/50 hidden sm:block" />

              <div className="flex items-center gap-4 text-xs font-heading">
                <div>
                  <span className="text-xs text-terracotta-muted font-bold block uppercase tracking-wider">
                    Departments
                  </span>
                  <span className="font-extrabold text-espresso text-sm sm:text-base">
                    {ORGANIZATION_OVERVIEW.totalDepartments} Active
                  </span>
                </div>
                <div>
                  <span className="text-xs text-terracotta-muted font-bold block uppercase tracking-wider">
                    Total Tasks
                  </span>
                  <span className="font-extrabold text-espresso text-sm sm:text-base">
                    {ORGANIZATION_OVERVIEW.totalActiveTasks} Rollup
                  </span>
                </div>
                <div className="hidden xl:block">
                  <span className="text-xs text-terracotta-muted font-bold block uppercase tracking-wider">
                    Sync Status
                  </span>
                  <span className="font-bold text-[#2e936f] text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2e936f] animate-ping" />
                    Live Mesh
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* QUICK DEPARTMENT SELECTOR / FILTER STRIP                     */}
        {/* ============================================================ */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="font-heading font-extrabold text-terracotta-muted uppercase tracking-wider text-xs">
              Select Department to Inspect
            </span>
            <span className="text-terracotta-muted text-xs sm:text-sm">
              Showing <span className="font-bold text-brand-orange">{selectedDept.name}</span> in primary focus
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {DEPARTMENTS.map((dept) => {
              const isSelected = dept.id === selectedDept.id;
              const Icon = dept.icon;

              return (
                <button
                  key={dept.id}
                  onClick={() => handleSelectDepartment(dept.id)}
                  className={`p-3 rounded-2xl border transition-all text-left flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-white border-brand-orange shadow-warm-md ring-2 ring-brand-orange/20 scale-[1.02]'
                      : 'bg-white/80 hover:bg-white border-brand-peach/60 hover:border-brand-orange/40 shadow-warm-2xs'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${dept.iconBg} border border-brand-peach/50 flex items-center justify-center shrink-0 shadow-2xs ${
                        isSelected ? 'ring-2 ring-brand-orange/40 shadow-xs' : ''
                      }`}
                    >
                      <Icon className={`w-5.5 h-5.5 sm:w-6 sm:h-6 ${dept.iconColor} stroke-[2]`} />
                    </div>
                    <div className="min-w-0">
                      <span className="font-heading font-extrabold text-sm min-[375px]:text-base text-espresso block truncate leading-tight">
                        {dept.name}
                      </span>
                      <span className="font-mono font-bold text-xs min-[375px]:text-sm text-terracotta-muted block leading-none mt-0.5">
                        {dept.progress}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0 ml-1 shadow-glow-orange" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* B. SELECTED DEPARTMENT — PRIMARY FOCUS                       */}
        {/* ============================================================ */}
        <section
          ref={primaryFocusRef}
          aria-label={`${selectedDept.name} Primary Workflow Focus`}
          className="space-y-4 scroll-mt-[84px]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-heading font-extrabold bg-brand-orange text-white shadow-warm-xs flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PRIMARY FOCUS</span>
              </span>
              <span className="text-xs text-terracotta-muted font-medium hidden sm:inline">
                Selected from executive architecture
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider">
              ID: {selectedDept.id.toUpperCase()}-EXEC
            </span>
          </div>

          <motion.div
            key={selectedDept.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full bg-white rounded-3xl border-2 border-brand-orange/50 shadow-warm-xl p-5 sm:p-7 lg:p-9 space-y-7 relative overflow-hidden"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green" />

            {/* Department Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${selectedDept.iconBg} flex items-center justify-center shrink-0 shadow-warm-sm border border-brand-peach/40`}
                >
                  <selectedDept.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${selectedDept.iconColor}`} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                      Department Command Center
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-heading font-extrabold bg-[#edf7f3] text-[#2e936f] border border-[#2e936f]/30">
                      Live Telemetry
                    </span>
                  </div>
                  <h2 className="font-heading font-extrabold text-[26px] min-[375px]:text-[28px] sm:text-3xl text-espresso tracking-tight mt-0.5">
                    {selectedDept.name} Execution
                  </h2>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-heading font-extrabold bg-brand-green-light text-brand-green border border-brand-green/30 shadow-warm-2xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span>{selectedDept.statusText}</span>
                </span>
              </div>
            </div>

            {/* Key Metrics Row (4 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Metric 1: Execution Velocity */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-[0_4px_16px_-4px_rgba(241,94,28,0.06)] hover:shadow-warm-md hover:-translate-y-0.5 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-terracotta-muted font-bold uppercase tracking-wider">
                    Execution Velocity
                  </span>
                  <div className="w-9 h-4">
                    <svg viewBox="0 0 36 16" className="w-full h-full overflow-visible" fill="none">
                      <path
                        d={selectedDept.sparklinePath}
                        stroke={selectedDept.sparklineColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl text-espresso">
                      {selectedDept.progress}
                    </span>
                    <span className="text-xs sm:text-sm font-heading font-bold text-[#2e936f]">
                      Rollup Metric
                    </span>
                  </div>

                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${selectedDept.barColor} rounded-full`}
                      initial={{ width: '0%' }}
                      animate={{ width: selectedDept.progress }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>

              {/* Metric 2: Leadership */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-[0_4px_16px_-4px_rgba(241,94,28,0.06)] hover:shadow-warm-md hover:-translate-y-0.5 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-3">
                <span className="text-xs text-terracotta-muted font-bold uppercase tracking-wider">
                  Leadership
                </span>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-orange shrink-0" />
                    <span className="font-heading font-extrabold text-base sm:text-lg text-espresso truncate">
                      {selectedDept.head}
                    </span>
                  </div>
                  <span className="text-xs min-[375px]:text-sm text-terracotta-muted font-medium block">
                    Accountable Head of Pod
                  </span>
                </div>
              </div>

              {/* Metric 3: Milestones */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-[0_4px_16px_-4px_rgba(241,94,28,0.06)] hover:shadow-warm-md hover:-translate-y-0.5 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-3">
                <span className="text-xs text-terracotta-muted font-bold uppercase tracking-wider">
                  Milestones
                </span>
                <div className="space-y-1">
                  <span className="font-heading font-extrabold text-base sm:text-lg text-espresso block">
                    {selectedDept.milestones}
                  </span>
                  <span className="text-xs min-[375px]:text-sm text-terracotta-muted font-medium block">
                    Target Quarter Deadlines
                  </span>
                </div>
              </div>

              {/* Metric 4: Active Tasks */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-[0_4px_16px_-4px_rgba(241,94,28,0.06)] hover:shadow-warm-md hover:-translate-y-0.5 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between space-y-3">
                <span className="text-xs text-terracotta-muted font-bold uppercase tracking-wider">
                  Active Tasks
                </span>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading font-extrabold text-3xl text-espresso">
                      {selectedDept.activeTasks}
                    </span>
                    <span className="text-xs min-[375px]:text-sm text-terracotta-muted font-semibold">
                      In Queue / Review
                    </span>
                  </div>
                  <span className="text-xs min-[375px]:text-sm text-terracotta-muted font-medium block">
                    Automated Workflows
                  </span>
                </div>
              </div>
            </div>

            {/* Active Deliverables & Rollup Items */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-heading font-extrabold text-espresso uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  <span>Active Deliverables & Rollup Items</span>
                </h3>
                <span className="text-xs min-[375px]:text-sm text-terracotta-muted font-medium">
                  {selectedDept.deliverables.length} Deliverables Tracked
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedDept.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-2xs hover:border-brand-orange/40 transition-colors text-sm min-[375px]:text-base text-espresso"
                  >
                    {getDeliverableIcon(item)}
                    <div className="space-y-0.5 min-w-0">
                      <span className="font-heading font-bold leading-snug block">
                        {item}
                      </span>
                      <span className="text-xs min-[375px]:text-sm text-terracotta-muted block">
                        Connected to Company Goal Rollup
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Footer & Live Sync Connection Info */}
            <div className="pt-4 border-t border-brand-peach/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs min-[375px]:text-sm">
              <div className="flex items-center gap-2 text-terracotta font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                <span className="font-bold text-brand-green">Live connection to Astrav Mesh</span>
                <span className="text-terracotta-muted hidden sm:inline">— Real-time rollup updates active</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/features/goals-progress"
                  className="text-sm font-heading font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1 transition-colors"
                >
                  <span>Explore Rollup Engine</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============================================================ */}
        {/* C. REMAINING DEPARTMENTS (SCROLLABLE SEQUENCE)               */}
        {/* ============================================================ */}
        <section aria-label="Other Department Workflows" className="space-y-5 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-peach/60 pb-3">
            <div>
              <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-extrabold text-[#271812] font-heading tracking-tight">
                Other Department Workflows
              </h2>
              <p className="text-sm sm:text-base text-[#5a4138]">
                Select any department below to bring it to primary focus or inspect deliverables.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-terracotta-muted">
              Auto-Rollup Sequence
            </span>
          </div>

          <div className="space-y-5">
            {remainingDepts.map((dept, index) => {
              const Icon = dept.icon;

              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
                  className="bg-white rounded-3xl border border-brand-peach/80 hover:border-brand-orange/50 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:shadow-warm-md hover:-translate-y-1 p-5 sm:p-6 lg:p-7 space-y-5 transition-all duration-300 group"
                >
                  {/* Department Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${dept.iconBg} flex items-center justify-center shrink-0 shadow-warm-xs border border-brand-peach/40`}
                      >
                        <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${dept.iconColor}`} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                            Department Command Center
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-xs font-heading font-extrabold bg-[#edf7f3] text-[#2e936f] border border-[#2e936f]/20">
                            {dept.statusText}
                          </span>
                        </div>
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-espresso tracking-tight mt-0.5">
                          {dept.name} Execution
                        </h3>
                      </div>
                    </div>

                    {/* Make Primary Focus Button */}
                    <button
                      onClick={() => handleSelectDepartment(dept.id)}
                      className="inline-flex items-center justify-center gap-2 px-4.5 py-2 rounded-full bg-surface-ambient hover:bg-brand-orange text-espresso hover:text-white border border-brand-peach hover:border-brand-orange text-sm font-heading font-bold shadow-warm-2xs transition-all cursor-pointer group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange whitespace-nowrap self-start sm:self-auto"
                      title={`Make ${dept.name} the primary department`}
                    >
                      <span>Focus {dept.name}</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>

                  {/* Summary Metric Ribbon */}
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-ambient border border-brand-peach/60 grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs min-[375px]:text-sm">
                    <div>
                      <span className="text-xs text-terracotta-muted font-bold uppercase tracking-wider block">
                        Execution Velocity
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-heading font-extrabold text-xl sm:text-2xl text-espresso">
                          {dept.progress}
                        </span>
                        <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden hidden sm:block">
                          <div
                            className={`h-full ${dept.barColor} rounded-full`}
                            style={{ width: dept.progress }}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-terracotta-muted font-bold uppercase tracking-wider block">
                        Leadership
                      </span>
                      <span className="font-heading font-bold text-espresso text-sm sm:text-base block mt-0.5 truncate">
                        {dept.head}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs text-terracotta-muted font-bold uppercase tracking-wider block">
                        Milestones
                      </span>
                      <span className="font-heading font-bold text-espresso text-sm sm:text-base block mt-0.5 truncate">
                        {dept.milestones}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs text-terracotta-muted font-bold uppercase tracking-wider block">
                        Active Tasks
                      </span>
                      <span className="font-heading font-bold text-espresso text-sm sm:text-base block mt-0.5">
                        {dept.activeTasks} Tasks In Queue
                      </span>
                    </div>
                  </div>

                  {/* Complete Deliverables Preserved Exactly */}
                  <div className="space-y-2">
                    <span className="text-xs min-[375px]:text-sm font-heading font-bold text-espresso uppercase tracking-wider block">
                      Active Deliverables & Rollup Items
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm min-[375px]:text-base text-espresso">
                      {dept.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-brand-peach/40 shadow-warm-2xs"
                        >
                          {getDeliverableIcon(item)}
                          <span className="leading-snug font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="flex items-center justify-between pt-2 border-t border-brand-peach/40 text-xs min-[375px]:text-sm text-terracotta-muted">
                    <span>Live connection to Astrav Mesh</span>
                    <button
                      onClick={() => handleSelectDepartment(dept.id)}
                      className="text-brand-orange hover:text-brand-orange-hover font-heading font-bold cursor-pointer"
                    >
                      View Full {dept.name} Dashboard →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default DepartmentWorkflow;
