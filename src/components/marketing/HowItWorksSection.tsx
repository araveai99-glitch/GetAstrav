import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Search,
  Bell,
  Home,
  Target,
  FolderGit2,
  CheckSquare,
  Users,
  BarChart3,
  FileText,
  Settings,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { MotionWrapper } from '../common/MotionWrapper';
import { openDemoModal } from '../common/DemoModal';

export const HowItWorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [completedTasks, setCompletedTasks] = useState<string[]>(['roadmap', 'marketing']);

  const toggleTask = (id: string) => {
    setCompletedTasks((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="how-it-works"
      className="relative w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-10 xl:px-12 bg-white border-b border-brand-peach/50"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ============================================================ */}
        {/* LEFT COLUMN: Large Polished Astrav Dashboard Mockup          */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 w-full space-y-3 sm:space-y-4">
          <MotionWrapper direction="down" delay={0.05}>
            <div className="text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-extrabold text-espresso tracking-tight">
                Demo Dashboard
              </h3>
            </div>
          </MotionWrapper>

          <MotionWrapper direction="up" delay={0.1}>
            <div className="w-full bg-white rounded-3xl border border-brand-peach/70 shadow-architectural p-4 sm:p-6 overflow-hidden select-none transition-all hover:shadow-warm-xl">
              {/* TOP HEADER: Logo, Search, Notification Bell, User Avatar */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-brand-peach/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-brand-orange text-white flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-extrabold text-base tracking-tight text-espresso">
                    Astrav
                  </span>
                </div>

                <div className="flex-1 max-w-sm hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach/40 text-xs text-terracotta-muted">
                  <Search className="w-3.5 h-3.5" />
                  <span>Search goals, projects, or tasks...</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative p-1.5 text-terracotta hover:text-espresso cursor-pointer">
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-orange" />
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#fceade] border border-[#f7d7b0] text-[#f15e1c] font-heading font-extrabold text-xs flex items-center justify-center cursor-pointer">
                    A
                  </div>
                </div>
              </div>

              {/* DASHBOARD BODY: Left Sidebar + Main Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 pt-4 sm:pt-5">
                {/* SIDEBAR NAVIGATION */}
                <div className="hidden md:flex md:col-span-3 flex-col gap-1 pr-2 border-r border-brand-peach/30 text-xs font-heading font-medium text-terracotta">
                  {[
                    { id: 'home', label: 'Home', icon: Home },
                    { id: 'goals', label: 'Goals', icon: Target },
                    { id: 'projects', label: 'Projects', icon: FolderGit2 },
                    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
                    { id: 'teams', label: 'Teams', icon: Users },
                    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
                    { id: 'documents', label: 'Documents', icon: FileText },
                    { id: 'settings', label: 'Settings', icon: Settings },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-brand-orange-light text-brand-orange font-bold shadow-warm-2xs'
                            : 'hover:bg-surface-tier1 hover:text-espresso'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* MAIN DASHBOARD CONTENT */}
                <div className="md:col-span-9 space-y-4">
                  {/* STRATEGIC COMPANY GOAL CARD */}
                  <div className="bg-surface-ambient rounded-2xl p-4 sm:p-4.5 border border-brand-peach/50 shadow-warm-2xs">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-brand-orange-light border border-brand-orange/20 flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-brand-orange" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                            Company Goal
                          </span>
                          <h4 className="font-heading font-extrabold text-sm sm:text-base text-espresso">
                            Launch Product V2
                          </h4>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-heading font-extrabold text-base text-espresso">
                          72%
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold text-brand-green bg-brand-green-light border border-brand-green/20">
                          On Track
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-3 text-[11px] font-mono text-terracotta-muted">
                      <span>🕒 Q3 2024</span>
                      <span>•</span>
                      <span>6 Projects</span>
                      <span>•</span>
                      <span>12 Milestones</span>
                      <span>•</span>
                      <span>42 Tasks</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-brand-peach/40 mt-2.5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-brand-green to-emerald-400"
                        initial={{ width: '0%' }}
                        whileInView={{ width: '72%' }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  {/* 6 DEPARTMENT CARDS GRID */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs">
                    {[
                      {
                        name: 'Product',
                        progress: '78%',
                        milestones: '3/4 Milestones',
                        color: 'bg-brand-green',
                        width: '78%',
                      },
                      {
                        name: 'Engineering',
                        progress: '62%',
                        milestones: '4/6 Milestones',
                        color: 'bg-brand-yellow',
                        width: '62%',
                      },
                      {
                        name: 'Marketing',
                        progress: '54%',
                        milestones: '2/4 Milestones',
                        color: 'bg-brand-orange',
                        width: '54%',
                      },
                      {
                        name: 'Sales',
                        progress: '71%',
                        milestones: '3/5 Milestones',
                        color: 'bg-brand-green',
                        width: '71%',
                      },
                      {
                        name: 'HR',
                        progress: '88%',
                        milestones: '4/4 Milestones',
                        color: 'bg-brand-green',
                        width: '88%',
                      },
                      {
                        name: 'Finance',
                        progress: '66%',
                        milestones: '2/4 Milestones',
                        color: 'bg-brand-yellow',
                        width: '66%',
                      },
                    ].map((dept, idx) => (
                      <div
                        key={dept.name}
                        onMouseEnter={() => setHoveredCard(dept.name)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`p-2.5 sm:p-3 rounded-xl bg-white border border-brand-peach/50 transition-all cursor-pointer ${
                          hoveredCard === dept.name
                            ? 'border-brand-orange/60 shadow-warm-sm -translate-y-0.5'
                            : ''
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-heading font-bold text-espresso text-[11px] sm:text-xs">
                            {dept.name}
                          </span>
                          <span className="font-mono font-bold text-espresso text-[11px] sm:text-xs">
                            {dept.progress}
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-brand-peach/30 my-1.5 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${dept.color}`}
                            initial={{ width: '0%' }}
                            whileInView={{ width: dept.width }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: 0.25 + idx * 0.05, ease: 'easeOut' }}
                          />
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-terracotta-muted font-medium block">
                          {dept.milestones}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* BOTTOM ROW: Recent Activity, Today's Focus, Goal Progress */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs pt-1">
                    {/* 1. Recent Activity */}
                    <div className="p-3 rounded-xl bg-white border border-brand-peach/50 shadow-warm-2xs">
                      <div className="flex items-center justify-between pb-2 border-b border-brand-peach/30">
                        <span className="font-heading font-bold text-espresso text-[11px]">
                          Recent Activity
                        </span>
                        <span className="text-[9px] font-heading font-semibold text-brand-orange cursor-pointer">
                          View All
                        </span>
                      </div>
                      <div className="space-y-2 pt-2 text-[10px]">
                        <div className="flex items-start gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-brand-orange-light text-brand-orange font-bold text-[8px] flex items-center justify-center shrink-0 mt-0.5">
                            S
                          </div>
                          <div className="leading-tight">
                            <span className="font-semibold text-espresso block">
                              Marketing campaign launched
                            </span>
                            <span className="text-terracotta-muted text-[9px]">
                              by Sarah K. · 2 min ago
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-700 font-bold text-[8px] flex items-center justify-center shrink-0 mt-0.5">
                            M
                          </div>
                          <div className="leading-tight">
                            <span className="font-semibold text-espresso block">
                              Engineering: 2 tasks overdue
                            </span>
                            <span className="text-terracotta-muted text-[9px]">
                              by Marcus T. · 12 min ago
                            </span>
                          </div>
                        </div>

                        <div className="flex items-start gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[8px] flex items-center justify-center shrink-0 mt-0.5">
                            P
                          </div>
                          <div className="leading-tight">
                            <span className="font-semibold text-espresso block">
                              Sales deal stage updated
                            </span>
                            <span className="text-terracotta-muted text-[9px]">
                              by Priya R. · 25 min ago
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 2. Today's Focus */}
                    <div className="p-3 rounded-xl bg-white border border-brand-peach/50 shadow-warm-2xs">
                      <div className="flex items-center justify-between pb-2 border-b border-brand-peach/30">
                        <span className="font-heading font-bold text-espresso text-[11px]">
                          Today's Focus
                        </span>
                        <span className="text-[9px] font-mono font-bold text-brand-green">
                          {completedTasks.length}/4 Done
                        </span>
                      </div>
                      <div className="space-y-1.5 pt-2 text-[10px]">
                        {[
                          { id: 'roadmap', label: 'Review product roadmap' },
                          { id: 'marketing', label: 'Approve marketing plan' },
                          { id: 'overdue', label: 'Check overdue tasks' },
                          { id: 'review', label: 'Prepare Q3 review' },
                        ].map((item) => {
                          const isDone = completedTasks.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              onClick={() => toggleTask(item.id)}
                              className="w-full flex items-center gap-1.5 text-left p-1 rounded-lg hover:bg-surface-tier1 transition-colors cursor-pointer group"
                            >
                              <div
                                className={`w-3.5 h-3.5 rounded flex items-center justify-center transition-all ${
                                  isDone
                                    ? 'bg-brand-green text-white'
                                    : 'border border-brand-peach/80 bg-white group-hover:border-brand-orange'
                                }`}
                              >
                                {isDone && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                              </div>
                              <span
                                className={`truncate font-medium transition-all ${
                                  isDone
                                    ? 'line-through text-terracotta-muted'
                                    : 'text-espresso font-semibold'
                                }`}
                              >
                                {item.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Goal Progress Donut */}
                    <div className="p-3 rounded-xl bg-white border border-brand-peach/50 shadow-warm-2xs flex flex-col justify-between">
                      <span className="font-heading font-bold text-espresso text-[11px] block pb-1 border-b border-brand-peach/30">
                        Goal Progress
                      </span>
                      <div className="flex items-center justify-between gap-2 pt-1.5">
                        <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <circle
                              cx="18"
                              cy="18"
                              r="15"
                              fill="none"
                              stroke="#f7d7b0"
                              strokeWidth="3.5"
                            />
                            <motion.circle
                              cx="18"
                              cy="18"
                              r="15"
                              fill="none"
                              stroke="#2e936f"
                              strokeWidth="3.5"
                              strokeDasharray="68, 100"
                              strokeLinecap="round"
                              initial={{ pathLength: 0 }}
                              whileInView={{ pathLength: 1 }}
                              viewport={{ once: false, amount: 0.2 }}
                              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                            />
                          </svg>
                          <span className="absolute font-heading font-extrabold text-xs text-espresso">
                            72%
                          </span>
                        </div>
                        <div className="space-y-0.5 text-[9px] text-terracotta-muted">
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                            <span>On Track: 6</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                            <span>At Risk: 2</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            <span>Overdue: 3</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <span>Not Started: 1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: 4 Simple Steps & Action CTA                    */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-7 text-left z-10">
          <MotionWrapper delay={0.05}>
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-[#271812] leading-[1.12] tracking-[-0.02em] font-heading">
              From Goals to Execution<br />
              in <span className="text-[#f15e1c]">4 Simple Steps.</span>
            </h2>
          </MotionWrapper>

          {/* 4 Steps - Mobile Cards (< md) & Desktop List (md+) */}
          {/* Mobile View (< md): Premium Vertically Stacked Cards matching Reference */}
          <div className="space-y-3 md:hidden">
            {[
              {
                num: '1',
                title: 'Set Company Goals',
                desc: 'Define North Star goals and align every team around core outcomes.',
                badgeBg: 'bg-[#fdeee4] border-[#fcd8c1] text-[#f15e1c]',
                image: '/assets/steps/step1_goals.png',
                imageWebp: '/assets/steps/step1_goals.webp',
              },
              {
                num: '2',
                title: 'Break into Projects & Milestones',
                desc: 'Decompose strategy into actionable milestones and clear deliverables.',
                badgeBg: 'bg-[#fef9c3] border-[#fef08a] text-[#b45309]',
                image: '/assets/steps/step2_milestones.png',
                imageWebp: '/assets/steps/step2_milestones.webp',
              },
              {
                num: '3',
                title: 'Track Execution Automatically',
                desc: 'Live automated progress rollups across every department.',
                badgeBg: 'bg-[#dcfce7] border-[#bbf7d0] text-[#15803d]',
                image: '/assets/steps/step3_rollups.png',
                imageWebp: '/assets/steps/step3_rollups.webp',
              },
              {
                num: '4',
                title: 'Stay in Control',
                desc: 'AI-powered insights to spot risks early and maintain momentum.',
                badgeBg: 'bg-[#fdeee4] border-[#fcd8c1] text-[#f15e1c]',
                image: '/assets/steps/step4_control.png',
                imageWebp: '/assets/steps/step4_control.webp',
              },
            ].map((step, idx) => (
              <MotionWrapper key={step.num} delay={0.1 + idx * 0.05} direction="up">
                <div className="relative rounded-2xl bg-white border border-brand-peach/60 shadow-[0_4px_16px_rgba(42,26,20,0.04)] p-3.5 flex items-center gap-3 overflow-hidden transition-all duration-200 hover:shadow-warm-sm hover:border-brand-orange/40 active:scale-[0.99]">
                  {/* Number Badge at Top-Left */}
                  <div
                    className={`absolute top-2.5 left-2.5 w-6 h-6 rounded-full border flex items-center justify-center font-heading font-extrabold text-xs shadow-2xs ${step.badgeBg}`}
                  >
                    {step.num}
                  </div>

                  {/* 3D Illustration Graphic */}
                  <div className="w-[84px] h-[76px] shrink-0 flex items-center justify-center pl-3.5 pt-0.5">
                    <picture>
                      <source srcSet={step.imageWebp} type="image/webp" />
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_4px_8px_rgba(241,94,28,0.06)]"
                        loading="lazy"
                      />
                    </picture>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0 pr-1">
                    <h4 className="font-heading font-bold text-[14px] xs:text-[15px] text-espresso leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[12px] xs:text-[12.5px] text-terracotta/90 leading-relaxed mt-1 text-left">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* Desktop & Tablet View (md+): Preserved Layout */}
          <div className="hidden md:block space-y-4 sm:space-y-5">
            {[
              {
                num: '1',
                title: 'Set Company Goals',
                desc: 'Define North Star goals and align every team around core outcomes.',
              },
              {
                num: '2',
                title: 'Break into Projects & Milestones',
                desc: 'Decompose strategy into actionable milestones and clear deliverables.',
              },
              {
                num: '3',
                title: 'Track Execution Automatically',
                desc: 'Live automated progress rollups across every department.',
              },
              {
                num: '4',
                title: 'Stay in Control',
                desc: 'AI-powered insights to spot risks early and maintain momentum.',
              },
            ].map((step, idx) => (
              <MotionWrapper key={step.num} delay={0.15 + idx * 0.08} direction="left">
                <div className="flex items-start gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-brand-orange text-white font-heading font-extrabold text-sm flex items-center justify-center shrink-0 shadow-sm shadow-brand-orange/30 group-hover:scale-105 transition-transform">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-base text-espresso group-hover:text-brand-orange transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-sm text-terracotta leading-relaxed mt-0.5 text-left sm:text-justify">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* CTA & Trust Avatars */}
          <MotionWrapper delay={0.4}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 pt-2 sm:pt-4">
              <button
                type="button"
                onClick={openDemoModal}
                className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-heading font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-7 py-3.5 rounded-full shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 transition-all group cursor-pointer w-fit"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Founder"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Founder"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="Founder"
                  />
                </div>
                <span className="text-xs font-heading font-semibold text-terracotta max-w-[180px] leading-tight">
                  Trusted by modern founders to stay in control.
                </span>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};
