import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FolderGit2,
  ShieldCheck,
  Sparkles,
  Layers,
  Search,
  Bell,
  Home,
  CheckSquare,
  Users,
  BarChart3,
  FileText,
  TrendingUp,
  Check,
} from 'lucide-react';

export const FounderOSHeroVisual: React.FC = () => {
  // Interactive hover states
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Smooth pointer parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 10, y: y * 8 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setHoveredPanel(null);
    setHoveredTask(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[840px] mx-auto select-none py-6 sm:py-10"
      style={{ perspective: 1400 }}
    >
      {/* ============================================================ */}
      {/* 1. ATMOSPHERIC BACKDROP: SUN SPHERE, ORBITS & 3D PEDESTAL    */}
      {/* ============================================================ */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
        
        {/* Luminous Warm Golden Sun Sphere (Top Right) */}
        <div className="absolute top-2 right-4 w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-[#fab60a] via-[#ffec69] to-[#ffffff] opacity-70 blur-2xl pointer-events-none" />
        <div className="absolute top-8 right-10 w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-[#f15e1c]/40 via-[#fab60a]/50 to-transparent blur-xl pointer-events-none" />

        {/* Multi-Tiered Continuously Rotating Orbital Lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px]">
          {/* Path 1: Clockwise Outer Orbit */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg className="w-full h-full" viewBox="0 0 720 720" fill="none">
              <circle
                cx="360"
                cy="360"
                r="330"
                stroke="#f7d7b0"
                strokeWidth="1.25"
                strokeDasharray="6 8"
                strokeOpacity="0.75"
              />
              <circle cx="690" cy="360" r="5" fill="#fab60a" />
              <circle cx="360" cy="30" r="4" fill="#f15e1c" />
              <circle cx="30" cy="360" r="4.5" fill="#2e936f" />
            </svg>
          </div>

          {/* Path 2: Counter-Clockwise Middle Orbit */}
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <svg className="w-full h-full" viewBox="0 0 720 720" fill="none">
              <ellipse
                cx="360"
                cy="360"
                rx="260"
                ry="230"
                stroke="#fab60a"
                strokeWidth="1"
                strokeDasharray="4 6"
                strokeOpacity="0.6"
              />
              <circle cx="620" cy="360" r="4" fill="#f15e1c" />
              <circle cx="100" cy="360" r="3.5" fill="#2e936f" />
            </svg>
          </div>

          {/* Path 3: Smooth Inner Ring */}
          <div className="absolute inset-0 animate-spin-medium">
            <svg className="w-full h-full" viewBox="0 0 720 720" fill="none">
              <circle
                cx="360"
                cy="360"
                r="180"
                stroke="#f7d7b0"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
              <circle cx="540" cy="360" r="3.5" fill="#fab60a" />
            </svg>
          </div>
        </div>

        {/* 3D Illuminated Golden Glass Pedestal Platform at Base */}
        <div className="absolute -bottom-10 right-4 sm:right-10 w-[440px] sm:w-[560px] h-[140px] rounded-[50%] bg-gradient-to-t from-[#fab60a]/35 via-[#f7d7b0]/50 to-white/10 blur-md border-b-2 border-[#fab60a]/60 shadow-[0_24px_70px_rgba(250,182,10,0.3)] -rotate-6 transform" />
        <div className="absolute -bottom-14 right-8 sm:right-16 w-[360px] sm:w-[460px] h-[100px] rounded-[50%] bg-gradient-to-t from-brand-orange-light via-[#f7d7b0]/30 to-transparent blur-sm border-t border-[#ffec69]/70 -rotate-6 transform" />
      </div>

      {/* ============================================================ */}
      {/* 2. LAYERED 3D MULTI-SHEET GLASS PRODUCT INTERFACE            */}
      {/* ============================================================ */}
      <motion.div
        animate={{
          x: mouseOffset.x,
          y: mouseOffset.y,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 120 }}
        className="relative w-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Isometric Perspective Anchor */}
        <div
          className="relative w-full transition-transform duration-300"
          style={{
            transform: 'rotateY(-12deg) rotateX(8deg) rotateZ(-2deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          
          {/* BACKDROP SHEET 2: Deepest Acrylic Sheet */}
          <div
            className="hidden sm:block absolute inset-0 rounded-3xl bg-white/40 backdrop-blur-md border border-white/70 shadow-lg pointer-events-none"
            style={{
              transform: 'translate3d(36px, -18px, -45px)',
            }}
          />

          {/* BACKDROP SHEET 1: Middle Acrylic Sheet */}
          <div
            className="hidden sm:block absolute inset-0 rounded-3xl bg-white/65 backdrop-blur-lg border border-white/85 shadow-xl pointer-events-none"
            style={{
              transform: 'translate3d(18px, -9px, -20px)',
            }}
          />

          {/* PRIMARY MAIN COMMAND CENTER BOARD */}
          <div className="relative rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_30px_70px_-10px_rgba(42,26,20,0.12),0_15px_30px_-5px_rgba(241,94,28,0.06),0_0_0_1px_rgba(247,215,176,0.6)] p-3 sm:p-5 lg:p-6 overflow-hidden">
            
            <div className="grid grid-cols-12 gap-3 sm:gap-4">
              
              {/* MINI LEFT SIDEBAR */}
              <div className="hidden md:flex md:col-span-3 flex-col justify-between border-r border-brand-peach/50 pr-3 sm:pr-4 py-1">
                <div>
                  {/* Logo in App Header */}
                  <div className="flex items-center gap-2 pb-5 border-b border-brand-peach/40">
                    <div className="w-6 h-6 rounded-lg bg-[#f15e1c] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Layers className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-heading font-extrabold text-xs text-[#271812]">
                      GetAstrav
                    </span>
                  </div>

                  {/* Sidebar Navigation Items */}
                  <div className="space-y-1 mt-4">
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#fef2eb] text-[#f15e1c] font-heading font-bold text-xs shadow-warm-2xs border border-[#f15e1c]/20">
                      <Home className="w-3.5 h-3.5" />
                      <span>Home</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-[#3d261e] hover:bg-surface-tier1 font-heading font-medium text-xs transition-colors">
                      <Target className="w-3.5 h-3.5 text-[#6b544b]" />
                      <span>Goals</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-[#3d261e] hover:bg-surface-tier1 font-heading font-medium text-xs transition-colors">
                      <FolderGit2 className="w-3.5 h-3.5 text-[#6b544b]" />
                      <span>Projects</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-[#3d261e] hover:bg-surface-tier1 font-heading font-medium text-xs transition-colors">
                      <CheckSquare className="w-3.5 h-3.5 text-[#6b544b]" />
                      <span>Tasks</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-[#3d261e] hover:bg-surface-tier1 font-heading font-medium text-xs transition-colors">
                      <Users className="w-3.5 h-3.5 text-[#6b544b]" />
                      <span>Teams</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-[#3d261e] hover:bg-surface-tier1 font-heading font-medium text-xs transition-colors">
                      <BarChart3 className="w-3.5 h-3.5 text-[#6b544b]" />
                      <span>Analytics</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-[#3d261e] hover:bg-surface-tier1 font-heading font-medium text-xs transition-colors">
                      <FileText className="w-3.5 h-3.5 text-[#6b544b]" />
                      <span>Documents</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN CONTENT WORKSPACE */}
              <div className="col-span-12 md:col-span-9 space-y-4">
                
                {/* TOP SEARCH BAR & USER HEADER */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-brand-peach/40">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach/60 flex-1 max-w-sm">
                    <Search className="w-3.5 h-3.5 text-[#6b544b] shrink-0" />
                    <span className="text-xs text-[#6b544b] font-body truncate">
                      Search goals, projects, or tasks...
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="relative w-7 h-7 rounded-full bg-surface-tier1 border border-brand-peach/60 flex items-center justify-center text-[#3d261e]">
                      <Bell className="w-3.5 h-3.5" />
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#f15e1c]" />
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#f7eee3] border border-brand-peach text-[#271812] font-heading font-bold text-xs flex items-center justify-center">
                      A
                    </div>
                  </div>
                </div>

                {/* LEVEL 1: THE COMPANY GOAL PANEL */}
                <div
                  onMouseEnter={() => setHoveredPanel('goal')}
                  onMouseLeave={() => setHoveredPanel(null)}
                  className={`relative rounded-2xl p-4 bg-white border transition-all duration-300 cursor-pointer ${
                    hoveredPanel === 'goal'
                      ? 'border-[#f15e1c] -translate-y-1 scale-[1.02] shadow-warm-md ring-2 ring-[#f15e1c]/20'
                      : 'border-brand-peach/80 shadow-satin-card'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#fef2eb] border border-[#f15e1c]/30 flex items-center justify-center shrink-0">
                        <Target className="w-5 h-5 text-[#f15e1c]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-heading font-extrabold uppercase tracking-wider text-[#6b544b] block">
                          Company Goal
                        </span>
                        <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#271812]">
                          Launch Product V2
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:self-center">
                      <span className="text-lg sm:text-xl font-heading font-extrabold text-[#271812]">
                        72%
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold bg-[#edf7f3] text-[#2e936f] border border-[#2e936f]/30">
                        On Track
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-surface-tier1 rounded-full h-2 overflow-hidden border border-brand-peach/40 my-1">
                    <div className="h-full bg-[#2e936f] rounded-full w-[72%]" />
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-body text-[#6b544b] pt-1">
                    <span>🕒 Q3 2024 • 🔗 Connected to 2 Projects</span>
                    <span className="font-semibold text-[#271812]">Target: Launch Ready</span>
                  </div>
                </div>

                {/* SVG CONNECTOR CONDUITS (Goal -> Milestones) */}
                <div className="relative w-full h-5 flex items-center justify-center overflow-visible">
                  <svg className="w-full h-full stroke-brand-peach" fill="none" viewBox="0 0 400 20" preserveAspectRatio="none">
                    <path d="M 200 0 L 200 8 C 200 16, 100 12, 100 20" strokeWidth="1.5" strokeDasharray="3 3" />
                    <path d="M 200 0 L 200 8 C 200 16, 300 12, 300 20" strokeWidth="1.5" strokeDasharray="3 3" />
                  </svg>
                </div>

                {/* LEVEL 2: TWO CONNECTED MILESTONES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Milestone 1: Platform & Core */}
                  <div
                    onMouseEnter={() => setHoveredPanel('m1')}
                    onMouseLeave={() => setHoveredPanel(null)}
                    className={`rounded-2xl p-3.5 bg-white border transition-all duration-300 cursor-pointer ${
                      hoveredPanel === 'm1' || hoveredTask?.startsWith('t1')
                        ? 'border-[#2e936f] -translate-y-1 scale-[1.02] shadow-warm-sm ring-2 ring-[#2e936f]/20'
                        : 'border-brand-peach/80 shadow-satin-card'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#edf7f3] border border-[#2e936f]/30 flex items-center justify-center shrink-0">
                          <FolderGit2 className="w-3.5 h-3.5 text-[#2e936f]" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-xs sm:text-sm text-[#271812]">
                            Platform & Core
                          </h4>
                          <span className="text-[10px] font-body text-[#6b544b]">
                            3/4 Milestones
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-heading font-extrabold text-[#271812]">
                        80%
                      </span>
                    </div>

                    <div className="w-full bg-surface-tier1 rounded-full h-1.5 overflow-hidden border border-brand-peach/30 my-2">
                      <div className="h-full bg-[#2e936f] rounded-full w-[80%]" />
                    </div>
                  </div>

                  {/* Milestone 2: Security & Compliance */}
                  <div
                    onMouseEnter={() => setHoveredPanel('m2')}
                    onMouseLeave={() => setHoveredPanel(null)}
                    className={`rounded-2xl p-3.5 bg-white border transition-all duration-300 cursor-pointer ${
                      hoveredPanel === 'm2' || hoveredTask?.startsWith('t2')
                        ? 'border-[#f15e1c] -translate-y-1 scale-[1.02] shadow-warm-sm ring-2 ring-[#f15e1c]/20'
                        : 'border-brand-peach/80 shadow-satin-card'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-[#fef2eb] border border-[#f15e1c]/30 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#f15e1c]" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-xs sm:text-sm text-[#271812]">
                            Security & Compliance
                          </h4>
                          <span className="text-[10px] font-body text-[#6b544b]">
                            2/4 Milestones
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-heading font-extrabold text-[#271812]">
                        50%
                      </span>
                    </div>

                    <div className="w-full bg-surface-tier1 rounded-full h-1.5 overflow-hidden border border-brand-peach/30 my-2">
                      <div className="h-full bg-[#fab60a] rounded-full w-[50%]" />
                    </div>
                  </div>

                </div>

                {/* LEVEL 3: CONNECTED TEAM TASKS (2 COLUMNS) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  
                  {/* Column 1: Tasks under Platform & Core */}
                  <div className="space-y-2">
                    {/* Task 1 */}
                    <div
                      onMouseEnter={() => setHoveredTask('t1-1')}
                      onMouseLeave={() => setHoveredTask(null)}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-brand-peach/70 shadow-warm-2xs flex items-center justify-between gap-2 hover:-translate-y-0.5 hover:border-[#2e936f] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-4 h-4 rounded bg-[#2e936f] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs font-heading font-bold text-[#271812] truncate">
                          Implement Authentication
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="w-4.5 h-4.5 rounded-full bg-purple-100 border border-purple-300 text-[9px] font-bold text-purple-700 flex items-center justify-center">
                          JD
                        </div>
                        <span className="w-8 h-1.5 bg-[#2e936f] rounded-full" />
                      </div>
                    </div>

                    {/* Task 2 */}
                    <div
                      onMouseEnter={() => setHoveredTask('t1-2')}
                      onMouseLeave={() => setHoveredTask(null)}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-brand-peach/70 shadow-warm-2xs flex items-center justify-between gap-2 hover:-translate-y-0.5 hover:border-[#fab60a] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-4 h-4 rounded bg-[#ffec69]/40 border border-[#fab60a] text-[#271812] flex items-center justify-center shrink-0">
                          <Clock className="w-2.5 h-2.5 text-[#271812]" />
                        </div>
                        <span className="text-xs font-heading font-bold text-[#271812] truncate">
                          Design Dashboard
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="w-4.5 h-4.5 rounded-full bg-amber-100 border border-amber-300 text-[9px] font-bold text-amber-800 flex items-center justify-center">
                          SK
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-heading font-bold bg-[#ffec69]/40 text-[#271812] border border-[#fab60a]/50">
                          In Progress
                        </span>
                      </div>
                    </div>

                    {/* Task 3 */}
                    <div
                      onMouseEnter={() => setHoveredTask('t1-3')}
                      onMouseLeave={() => setHoveredTask(null)}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-brand-peach/70 shadow-warm-2xs flex items-center justify-between gap-2 hover:-translate-y-0.5 hover:border-brand-peach transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-4 h-4 rounded border border-brand-peach bg-surface-tier1 shrink-0" />
                        <span className="text-xs font-heading font-bold text-[#271812] truncate">
                          Build Core Features
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="w-4.5 h-4.5 rounded-full bg-surface-tier1 border border-brand-peach text-[9px] font-bold text-[#3d261e] flex items-center justify-center">
                          AM
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-heading font-medium bg-surface-tier1 text-[#6b544b] border border-brand-peach/50">
                          Not Started
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Tasks under Security & Compliance */}
                  <div className="space-y-2">
                    {/* Task 1 */}
                    <div
                      onMouseEnter={() => setHoveredTask('t2-1')}
                      onMouseLeave={() => setHoveredTask(null)}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-brand-peach/70 shadow-warm-2xs flex items-center justify-between gap-2 hover:-translate-y-0.5 hover:border-brand-peach transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-4 h-4 rounded border border-brand-peach bg-surface-tier1 shrink-0" />
                        <span className="text-xs font-heading font-bold text-[#271812] truncate">
                          Set up SOC2 Controls
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="w-4.5 h-4.5 rounded-full bg-surface-tier1 border border-brand-peach text-[9px] font-bold text-[#3d261e] flex items-center justify-center">
                          PR
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-heading font-medium bg-surface-tier1 text-[#6b544b] border border-brand-peach/50">
                          Not Started
                        </span>
                      </div>
                    </div>

                    {/* Task 2: Overdue */}
                    <div
                      onMouseEnter={() => setHoveredTask('t2-2')}
                      onMouseLeave={() => setHoveredTask(null)}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-[#f15e1c]/40 shadow-warm-2xs flex items-center justify-between gap-2 hover:-translate-y-0.5 hover:border-[#f15e1c] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-4 h-4 rounded bg-[#fef2eb] text-[#f15e1c] flex items-center justify-center shrink-0">
                          <AlertTriangle className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-heading font-bold text-[#271812] truncate">
                          Security Audit Review
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="w-4.5 h-4.5 rounded-full bg-[#fef2eb] border border-[#f15e1c]/40 text-[9px] font-bold text-[#f15e1c] flex items-center justify-center">
                          MT
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-heading font-bold bg-[#fef2eb] text-[#f15e1c] border border-[#f15e1c]/30">
                          Overdue
                        </span>
                      </div>
                    </div>

                    {/* Task 3 */}
                    <div
                      onMouseEnter={() => setHoveredTask('t2-3')}
                      onMouseLeave={() => setHoveredTask(null)}
                      className="p-2 sm:p-2.5 rounded-xl bg-white border border-brand-peach/70 shadow-warm-2xs flex items-center justify-between gap-2 hover:-translate-y-0.5 hover:border-[#fab60a] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-4 h-4 rounded bg-[#ffec69]/40 border border-[#fab60a] text-[#271812] flex items-center justify-center shrink-0">
                          <Clock className="w-2.5 h-2.5 text-[#271812]" />
                        </div>
                        <span className="text-xs font-heading font-bold text-[#271812] truncate">
                          Compliance Documentation
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="w-4.5 h-4.5 rounded-full bg-amber-100 border border-amber-300 text-[9px] font-bold text-amber-800 flex items-center justify-center">
                          AL
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-heading font-bold bg-[#ffec69]/40 text-[#271812] border border-[#fab60a]/50">
                          In Progress
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ============================================================ */}
          {/* 3. THREE FLOATING SATELLITE CARDS (MATCHING REFERENCE IMAGE) */}
          {/* ============================================================ */}
          
          {/* SATELLITE 1: "Teams" Card (Top-Left Floating) */}
          <motion.div
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{ type: 'spring', damping: 20 }}
            className="hidden lg:block absolute -top-8 -left-10 w-44 rounded-2xl p-3 bg-white/95 backdrop-blur-md border border-brand-peach shadow-warm-md z-30 cursor-pointer"
            style={{ transform: 'translateZ(50px)' }}
          >
            <span className="text-[10px] font-heading font-bold text-[#6b544b] uppercase tracking-wider block">
              Teams
            </span>
            <div className="flex items-center justify-between mt-1.5">
              <div className="flex items-center -space-x-1.5">
                <div className="w-5.5 h-5.5 rounded-full bg-[#fef2eb] border border-white text-[9px] font-bold text-[#f15e1c] flex items-center justify-center">
                  AM
                </div>
                <div className="w-5.5 h-5.5 rounded-full bg-[#edf7f3] border border-white text-[9px] font-bold text-[#2e936f] flex items-center justify-center">
                  SK
                </div>
                <div className="w-5.5 h-5.5 rounded-full bg-[#ffec69]/50 border border-white text-[9px] font-bold text-[#271812] flex items-center justify-center">
                  PR
                </div>
                <div className="w-5.5 h-5.5 rounded-full bg-[#f7eee3] border border-white text-[9px] font-bold text-[#3d261e] flex items-center justify-center">
                  MT
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-heading font-extrabold text-[#271812] block leading-tight">
                  12
                </span>
                <span className="text-[9px] font-body text-[#6b544b]">
                  Active Members
                </span>
              </div>
            </div>
            <div className="mt-2 pt-1.5 border-t border-brand-peach/40 flex items-center gap-1 text-[10px] font-heading font-bold text-[#2e936f]">
              <CheckCircle2 className="w-3 h-3 text-[#2e936f]" />
              <span>On Track</span>
            </div>
          </motion.div>

          {/* SATELLITE 2: "AI Assistant" Card (Bottom-Left Floating) */}
          <motion.div
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{ type: 'spring', damping: 20 }}
            className="hidden lg:block absolute bottom-6 -left-10 w-44 rounded-2xl p-3 bg-white/95 backdrop-blur-md border border-brand-peach shadow-warm-md z-30 cursor-pointer"
            style={{ transform: 'translateZ(60px)' }}
          >
            <div className="flex items-center gap-1.5 text-xs font-heading font-extrabold text-[#271812]">
              <Sparkles className="w-3.5 h-3.5 text-[#f15e1c]" />
              <span>AI Assistant</span>
            </div>
            <div className="space-y-1.5 mt-2.5">
              <div className="flex items-center gap-2 text-[10px] font-heading font-bold text-[#271812] bg-surface-tier1 p-1 rounded-lg border border-brand-peach/40">
                <Check className="w-3 h-3 text-[#2e936f]" />
                <span>Generate Tasks</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-heading font-bold text-[#271812] bg-surface-tier1 p-1 rounded-lg border border-brand-peach/40">
                <Check className="w-3 h-3 text-[#2e936f]" />
                <span>Prioritize Work</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-heading font-bold text-[#271812] bg-surface-tier1 p-1 rounded-lg border border-brand-peach/40">
                <Check className="w-3 h-3 text-[#f15e1c]" />
                <span>Identify Risks</span>
              </div>
            </div>
          </motion.div>

          {/* SATELLITE 3: "Progress Updates" Card (Far-Right Floating) */}
          <motion.div
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{ type: 'spring', damping: 20 }}
            className="hidden lg:block absolute top-[32%] -right-12 w-42 rounded-2xl p-3 bg-white/95 backdrop-blur-md border border-brand-peach shadow-warm-md z-30 cursor-pointer"
            style={{ transform: 'translateZ(50px)' }}
          >
            <span className="text-[10px] font-heading font-bold text-[#6b544b] uppercase tracking-wider block">
              Progress Updates
            </span>
            <div className="flex items-center justify-between mt-2">
              {/* Mini Animated Bar Chart */}
              <div className="flex items-end gap-1.5 h-10">
                <div className="w-2 rounded-t bg-[#2e936f] h-[60%]" />
                <div className="w-2 rounded-t bg-[#2e936f] h-[85%]" />
                <div className="w-2 rounded-t bg-[#fab60a] h-[45%]" />
                <div className="w-2 rounded-t bg-[#f15e1c] h-[90%]" />
                <div className="w-2 rounded-t bg-[#2e936f] h-[100%]" />
              </div>
              <div className="text-right">
                <span className="text-xs font-heading font-extrabold text-[#2e936f] flex items-center gap-0.5 justify-end">
                  +24% <TrendingUp className="w-3 h-3" />
                </span>
                <span className="text-[9px] font-body text-[#6b544b]">
                  vs last month
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
};
