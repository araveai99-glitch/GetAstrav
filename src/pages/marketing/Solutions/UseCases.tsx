import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Building2,
  Users,
  Target,
  FolderGit2,
  CheckCircle2,
  TrendingUp,
  Activity,
  ShieldCheck,
  Megaphone,
  Coins,
  Cpu,
  Clock,
  Eye,
  Sparkles,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

interface DepartmentNode {
  id: string;
  name: string;
  icon: React.ElementType;
  project: string;
  team: string;
  goal: string;
  progress: number;
}

const DEPARTMENTS_DATA: DepartmentNode[] = [
  {
    id: 'operations',
    name: 'Operations',
    icon: Activity,
    project: 'Cloud Infrastructure & High Availability',
    team: 'Platform Ops Pod (6 Leads)',
    goal: 'Maintain 99.998% Uptime SLA',
    progress: 88,
  },
  {
    id: 'product',
    name: 'Product',
    icon: Cpu,
    project: 'Automated Progress Engine',
    team: 'Engineering Pod (12 Devs)',
    goal: 'Deliver Enterprise Release',
    progress: 92,
  },
  {
    id: 'marketing',
    name: 'Marketing',
    icon: Megaphone,
    project: 'Product Launch Campaign',
    team: 'Growth Pod (5 Specialists)',
    goal: 'Reach Pipeline Targets',
    progress: 85,
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: Coins,
    project: 'Billing & Compliance Audit',
    team: 'Finance Pod (4 Leads)',
    goal: 'Complete Annual SOC2 Audit',
    progress: 95,
  },
];

export const UseCases: React.FC = () => {
  useEffect(() => {
    document.title = 'Astrav for Enterprise — Bring Every Department Into Alignment';
    window.scrollTo(0, 0);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  // Section A: One Organization, Connected Teams
  const sectionARef = useRef<HTMLDivElement>(null);
  const isSectionAInView = useInView(sectionARef, { once: false, amount: 0.2 });
  const [selectedDeptId, setSelectedDeptId] = useState<string>('product');

  // Section B: Every Team Contributes
  const sectionBRef = useRef<HTMLDivElement>(null);
  const isSectionBInView = useInView(sectionBRef, { once: false, amount: 0.2 });

  // Section C: One View. Clearer Priorities
  const sectionCRef = useRef<HTMLDivElement>(null);
  const isSectionCInView = useInView(sectionCRef, { once: false, amount: 0.2 });

  const activeDept = DEPARTMENTS_DATA.find((d) => d.id === selectedDeptId) || DEPARTMENTS_DATA[1];

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12">
      {/* ==================================================================== */}
      {/* DIRECT OPENING (PROPER NAVBAR CLEARANCE, NO HERO BANNER, NO BADGES) */}
      {/* ==================================================================== */}
      <div className="max-w-5xl space-y-3">
        <h1 className="text-3xl min-[390px]:text-[32px] sm:text-4xl lg:text-[42px] xl:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight lg:whitespace-nowrap">
          Bring Every Department <span className="text-brand-orange">Into Alignment.</span>
        </h1>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-3xl">
          Connect departments, projects, and business goals in one clear view. Break down team silos so everyone moves toward the same company milestones.
        </p>
      </div>

      {/* ==================================================================== */}
      {/* SECTION A — One Organization, Connected Teams (5-Tier Alignment Flow) */}
      {/* ==================================================================== */}
      <section
        ref={sectionARef}
        className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm relative overflow-hidden space-y-6"
      >
        <div className="max-w-2xl space-y-1.5 text-left">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            One Organization, Connected Teams
          </h2>
          <p className="text-sm sm:text-base text-terracotta">
            Leadership → Departments → Projects → Teams → Business Goals
          </p>
        </div>

        {/* Department Switcher Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
          <span className="text-xs sm:text-sm font-mono font-bold text-terracotta-muted shrink-0">
            Select Department:
          </span>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 w-full sm:w-auto">
            {DEPARTMENTS_DATA.map((dept) => {
              const isSelected = selectedDeptId === dept.id;
              const DeptIcon = dept.icon;

              return (
                <button
                  key={dept.id}
                  type="button"
                  onClick={() => setSelectedDeptId(dept.id)}
                  className={`inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl text-xs min-[375px]:text-sm font-heading font-bold transition-all cursor-pointer select-none w-full sm:w-auto whitespace-nowrap ${
                    isSelected
                      ? 'bg-brand-orange text-white shadow-sm shadow-brand-orange/30'
                      : 'bg-surface-ambient hover:bg-white text-espresso border border-brand-peach/80'
                  }`}
                >
                  <DeptIcon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-brand-orange'}`} />
                  <span>{dept.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5-Step Connected Flow for Active Department */}
        <div className="relative pt-2">
          {/* Animated Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[3px] bg-brand-peach/40 -z-0">
            <motion.div
              initial={{ width: '0%' }}
              animate={{
                width: isSectionAInView || shouldReduceMotion ? '100%' : '0%',
              }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {/* Step 1: Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={
                isSectionAInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/80 shadow-warm-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    <Building2 className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-terracotta-muted">Tier 01</span>
                </div>
                <div className="text-xs font-mono font-bold text-brand-orange uppercase">
                  Leadership
                </div>
                <h4 className="font-heading font-bold text-[17px] sm:text-base text-espresso mt-0.5">
                  Company Vision
                </h4>
                <p className="text-sm text-terracotta mt-1">
                  Overall strategic targets set by company leadership.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-brand-peach/40 text-xs min-[375px]:text-sm font-heading font-semibold text-brand-orange">
                Executive Strategy
              </div>
            </motion.div>

            {/* Step 2: Departments */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={
                isSectionAInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              transition={{ duration: 0.4, delay: 0.18 }}
              className="p-4 rounded-2xl bg-white border-2 border-brand-orange shadow-warm-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold text-xs">
                    {React.createElement(activeDept.icon, { className: 'w-4.5 h-4.5' })}
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-orange">Tier 02</span>
                </div>
                <div className="text-xs font-mono font-bold text-brand-orange uppercase">
                  Department
                </div>
                <h4 className="font-heading font-bold text-[17px] sm:text-base text-espresso mt-0.5">
                  {activeDept.name} Pod
                </h4>
                <p className="text-sm text-terracotta mt-1">
                  Dedicated team focused on their key priorities.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-brand-peach/40 text-xs min-[375px]:text-sm font-heading font-bold text-brand-orange">
                {activeDept.progress}% Rollup Status
              </div>
            </motion.div>

            {/* Step 3: Projects */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={
                isSectionAInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              transition={{ duration: 0.4, delay: 0.26 }}
              className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/80 shadow-warm-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 rounded-xl bg-surface-tier1 text-brand-orange flex items-center justify-center font-bold text-xs border border-brand-peach/70">
                    <FolderGit2 className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-terracotta-muted">Tier 03</span>
                </div>
                <div className="text-xs font-mono font-bold text-terracotta-muted uppercase">
                  Projects
                </div>
                <h4 className="font-heading font-bold text-[17px] sm:text-base text-espresso mt-0.5 line-clamp-2">
                  {activeDept.project}
                </h4>
                <p className="text-sm text-terracotta mt-1">
                  Core initiatives broken down into clear deliverables.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-brand-peach/40 text-xs min-[375px]:text-sm font-heading font-semibold text-terracotta-muted">
                Active Initiative
              </div>
            </motion.div>

            {/* Step 4: Teams */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={
                isSectionAInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              transition={{ duration: 0.4, delay: 0.34 }}
              className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/80 shadow-warm-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 rounded-xl bg-surface-tier1 text-brand-orange flex items-center justify-center font-bold text-xs border border-brand-peach/70">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-terracotta-muted">Tier 04</span>
                </div>
                <div className="text-xs font-mono font-bold text-terracotta-muted uppercase">
                  Teams
                </div>
                <h4 className="font-heading font-bold text-[17px] sm:text-base text-espresso mt-0.5 line-clamp-2">
                  {activeDept.team}
                </h4>
                <p className="text-sm text-terracotta mt-1">
                  Direct team members executing day-to-day work.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-brand-peach/40 text-xs min-[375px]:text-sm font-heading font-semibold text-terracotta-muted">
                Clear Ownership
              </div>
            </motion.div>

            {/* Step 5: Business Goals */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={
                isSectionAInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
              }
              transition={{ duration: 0.4, delay: 0.42 }}
              className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/80 shadow-warm-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-9 h-9 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center font-bold text-xs border border-brand-green/30">
                    <Target className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-mono font-bold text-terracotta-muted">Tier 05</span>
                </div>
                <div className="text-xs font-mono font-bold text-brand-green uppercase">
                  Business Goal
                </div>
                <h4 className="font-heading font-bold text-[17px] sm:text-base text-espresso mt-0.5 line-clamp-2">
                  {activeDept.goal}
                </h4>
                <p className="text-sm text-terracotta mt-1">
                  Measurable outcome updated automatically on completion.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-brand-peach/40 text-xs min-[375px]:text-sm font-heading font-bold text-brand-green flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Goal Connected</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION B — Every Team Contributes to the Bigger Goal                */}
      {/* ==================================================================== */}
      <section
        ref={sectionBRef}
        className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm relative overflow-hidden space-y-6"
      >
        <div className="max-w-2xl space-y-1.5 text-left">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            Every Team Contributes to the Bigger Goal.
          </h2>
          <p className="text-sm sm:text-base text-terracotta">
            See how work from Marketing, Product, and Operations comes together for a shared product launch.
          </p>
        </div>

        {/* Connected Scenario Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* LEFT: 3 Department Tracks (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-3">
            {/* Track 1: Marketing */}
            <div className="p-3.5 rounded-2xl bg-surface-ambient border border-brand-peach/80 space-y-1.5">
              <div className="flex items-center justify-between gap-2.5 text-sm min-[375px]:text-base font-heading font-bold">
                <span className="flex items-center gap-1.5 text-espresso min-w-0">
                  <Megaphone className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Marketing Pod</span>
                </span>
                <span className="font-mono text-brand-orange text-sm min-[375px]:text-base whitespace-nowrap shrink-0 text-right">
                  85% Complete
                </span>
              </div>
              <p className="text-sm min-[375px]:text-base text-terracotta">
                Launch campaign prepared: website pages, launch announcement, and partner outreach.
              </p>
              <div className="w-full h-2 rounded-full bg-white border border-brand-peach/60 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: isSectionBInView || shouldReduceMotion ? '85%' : '0%',
                  }}
                  transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
                  className="h-full rounded-full bg-brand-orange"
                />
              </div>
            </div>

            {/* Track 2: Product */}
            <div className="p-3.5 rounded-2xl bg-surface-ambient border border-brand-peach/80 space-y-1.5">
              <div className="flex items-center justify-between gap-2.5 text-sm min-[375px]:text-base font-heading font-bold">
                <span className="flex items-center gap-1.5 text-espresso min-w-0">
                  <Cpu className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Product & Engineering</span>
                </span>
                <span className="font-mono text-brand-green text-sm min-[375px]:text-base whitespace-nowrap shrink-0 text-right">
                  90% Complete
                </span>
              </div>
              <p className="text-sm min-[375px]:text-base text-terracotta">
                Core features built: automated rollup calculation engine and test verification complete.
              </p>
              <div className="w-full h-2 rounded-full bg-white border border-brand-peach/60 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: isSectionBInView || shouldReduceMotion ? '90%' : '0%',
                  }}
                  transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
                  className="h-full rounded-full bg-brand-green"
                />
              </div>
            </div>

            {/* Track 3: Operations */}
            <div className="p-3.5 rounded-2xl bg-surface-ambient border border-brand-peach/80 space-y-1.5">
              <div className="flex items-center justify-between gap-2.5 text-sm min-[375px]:text-base font-heading font-bold">
                <span className="flex items-center gap-1.5 text-espresso min-w-0">
                  <Activity className="w-4 h-4 text-brand-yellow shrink-0" />
                  <span>Operations Pod</span>
                </span>
                <span className="font-mono text-amber-700 text-sm min-[375px]:text-base whitespace-nowrap shrink-0 text-right">
                  80% Complete
                </span>
              </div>
              <p className="text-sm min-[375px]:text-base text-terracotta">
                Launch process ready: customer support guides, monitoring alerts, and SLA readiness.
              </p>
              <div className="w-full h-2 rounded-full bg-white border border-brand-peach/60 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: isSectionBInView || shouldReduceMotion ? '80%' : '0%',
                  }}
                  transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-yellow to-brand-green"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Shared Launch Goal Card (lg:col-span-5) */}
          <div className="lg:col-span-5 p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#fffbf7] to-white border-2 border-brand-orange shadow-warm-sm space-y-4 text-left">
            <div className="flex items-center gap-1.5 text-xs min-[375px]:text-sm font-mono font-bold text-brand-orange uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shared Company Goal</span>
            </div>

            <div className="space-y-0.5">
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-espresso">
                Q3 Product Launch
              </h3>
              <p className="text-sm min-[375px]:text-base text-terracotta leading-relaxed">
                One clear status combining work from Marketing, Product, and Operations.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-surface-ambient border border-brand-peach/80 space-y-2">
              <div className="flex justify-between items-center gap-2 text-sm font-heading font-bold text-espresso">
                <span>Overall Readiness</span>
                <span className="font-mono text-brand-orange text-base font-bold whitespace-nowrap shrink-0">85% Ready</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-white border border-brand-peach/60 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: isSectionBInView || shouldReduceMotion ? '85%' : '0%',
                  }}
                  transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-green"
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-terracotta-muted">
                <span>Paced for Release</span>
                <span className="text-brand-green font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> All Gates Clear
                </span>
              </div>
            </div>

            <div className="text-xs min-[375px]:text-sm text-terracotta font-heading font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
              <span>Next tasks unlock automatically as prerequisites finish</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION C — One View. Clearer Priorities. (3 Outcome Cards)         */}
      {/* ==================================================================== */}
      <section
        ref={sectionCRef}
        className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm space-y-6"
      >
        <div className="max-w-2xl space-y-1.5 text-left">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            One View. Clearer Priorities.
          </h2>
          <p className="text-sm sm:text-base text-terracotta">
            Three simple outcomes that help departments work together with clarity.
          </p>
        </div>

        {/* 3 Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Outcome 1: Shared Progress */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={
              isSectionCInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 rounded-2xl bg-surface-ambient border border-brand-peach/80 flex flex-col justify-between space-y-3 shadow-warm-xs"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-[18px] sm:text-lg text-espresso mb-1">
                Shared Progress
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                All teams see live progress in real time without waiting for weekly status meetings.
              </p>
            </div>

            <div className="pt-2.5 border-t border-brand-peach/40 flex items-center gap-1.5 text-sm font-heading font-semibold text-brand-orange">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Real-Time Visibility</span>
            </div>
          </motion.div>

            {/* Outcome 2: Clear Ownership */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={
              isSectionCInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-5 rounded-2xl bg-surface-ambient border border-brand-peach/80 flex flex-col justify-between space-y-3 shadow-warm-xs"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center font-bold mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-[18px] sm:text-lg text-espresso mb-1">
                Clear Ownership
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Every project and deliverable has a designated owner so everyone knows who is responsible.
              </p>
            </div>

            <div className="pt-2.5 border-t border-brand-peach/40 flex items-center gap-1.5 text-sm font-heading font-semibold text-brand-green">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Dedicated Pod Leads</span>
            </div>
          </motion.div>

          {/* Outcome 3: Earlier Visibility into Delays */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={
              isSectionCInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-5 rounded-2xl bg-surface-ambient border border-brand-peach/80 flex flex-col justify-between space-y-3 shadow-warm-xs"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold mb-3 border border-amber-200">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-[18px] sm:text-lg text-espresso mb-1">
                Earlier Visibility into Delays
              </h3>
              <p className="text-base text-terracotta leading-relaxed">
                Spot delays days earlier so downstream teams can adjust without last-minute surprises.
              </p>
            </div>

            <div className="pt-2.5 border-t border-brand-peach/40 flex items-center gap-1.5 text-sm font-heading font-semibold text-amber-700">
              <Clock className="w-3.5 h-3.5" />
              <span>Zero Surprise Bottlenecks</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FINAL CTA                                                            */}
      {/* ==================================================================== */}
      <CTASection
        title="Align Your Organization"
        highlightTitle="Around What Matters."
        description="Connect departments, automate goal rollups, and keep your entire team moving in sync."
        paddingY="pt-2 pb-2"
        paddingX="px-0"
        showLaunchConsole={false}
      />
    </div>
  );
};
