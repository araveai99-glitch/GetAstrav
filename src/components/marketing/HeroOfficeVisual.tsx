import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Package,
  Code,
  Megaphone,
  BarChart3,
  Users,
  Coins,
  CheckCircle2,
  AlertTriangle,
  X,
  Smartphone,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

interface DepartmentCardData {
  id: string;
  name: string;
  progress: string;
  progressValue: number;
  status: 'on_track' | 'attention' | 'optimal';
  statusText: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  barColor: string;
  // Responsive layout percentage positions on the 16:9 office model
  left: string;
  top: string;
  width: string;
  head: string;
  activeTasks: number;
  milestones: string;
  deliverables: string[];
}

const DEPARTMENTS: DepartmentCardData[] = [
  // Top Mezzanine Level
  {
    id: 'product',
    name: 'Product',
    progress: '78%',
    progressValue: 78,
    status: 'on_track',
    statusText: 'On Track',
    icon: Package,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#2e936f]',
    left: '3.5%',
    top: '9%',
    width: '21.5%',
    head: 'Elena Vance (VP Product)',
    activeTasks: 14,
    milestones: '3/4 Milestones Completed',
    deliverables: [
      'Product V2 Core Architecture (Done)',
      'Design System Glassmorphism v4.8 (Done)',
      'Cross-departmental Rollup Engine (85% In Progress)',
      'Enterprise UX Accessibility Audit (Planned)',
    ],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    progress: '62%',
    progressValue: 62,
    status: 'attention',
    statusText: '2 Overdue Tasks',
    icon: Code,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    left: '26.5%',
    top: '9%',
    width: '21.5%',
    head: 'Marcus Thorne (CTO)',
    activeTasks: 22,
    milestones: '4/6 Milestones Completed',
    deliverables: [
      'Distributed Task Engine v2 (Done)',
      'Real-time WebSocket Push Synchronization (Done)',
      'Fix 2 API Latency Bottlenecks (Overdue - Reviewing)',
      'SOC2 Automated Compliance Controls (In Progress)',
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    progress: '54%',
    progressValue: 54,
    status: 'attention',
    statusText: 'Campaign Live',
    icon: Megaphone,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#fab60a]',
    left: '49.5%',
    top: '9%',
    width: '21.5%',
    head: 'Sarah Jenkins (Growth Lead)',
    activeTasks: 9,
    milestones: '2/4 Milestones Completed',
    deliverables: [
      'Q3 Product Launch Distribution (Launched)',
      'Interactive Product Tour & SEO Landing Pages (Done)',
      'Founder Retargeting Funnel Optimizations (In Progress)',
      'Customer Video Case Studies & Trust Badges (Pending)',
    ],
  },
  // Middle Floor Level
  {
    id: 'sales',
    name: 'Sales',
    progress: '71%',
    progressValue: 71,
    status: 'on_track',
    statusText: 'On Track',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    left: '3.5%',
    top: '41%',
    width: '21.5%',
    head: 'Priya Roy (Head of Revenue)',
    activeTasks: 18,
    milestones: '3/5 Milestones Completed',
    deliverables: [
      'Close 15 Enterprise Pilot Agreements (87% Achieved)',
      'Sales Demo Environment Self-Service Sandbox (Done)',
      'Contract Lifecycle & Renewal Automation (In Progress)',
      'Global SDR Expansion & Territory Mapping (Planned)',
    ],
  },
  {
    id: 'hr',
    name: 'HR',
    progress: '88%',
    progressValue: 88,
    status: 'optimal',
    statusText: 'All Onboarded',
    icon: Users,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    left: '26.5%',
    top: '41%',
    width: '21.5%',
    head: 'Devon Lee (People Operations)',
    activeTasks: 6,
    milestones: '4/4 Milestones Completed',
    deliverables: [
      'Senior Infrastructure Engineer Onboarding (Completed)',
      'Annual Performance Calibration (Completed)',
      'Founder 360 Feedback Rollout (Completed)',
      'Remote Pod Offsite Planning (In Progress)',
    ],
  },
  {
    id: 'finance',
    name: 'Finance',
    progress: '66%',
    progressValue: 66,
    status: 'attention',
    statusText: 'Runway Clear',
    icon: Coins,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    left: '49.5%',
    top: '41%',
    width: '21.5%',
    head: 'Arthur Pendelton (Finance VP)',
    activeTasks: 8,
    milestones: '2/4 Milestones Completed',
    deliverables: [
      '24-Month Operating Runway & Cash Flow Model (Done)',
      'Multi-currency Subscription Billing Gateway (Done)',
      'Departmental SaaS Spend Audit (In Progress)',
      'Board of Directors Q3 Financial Packet (In Progress)',
    ],
  },
];

interface NotificationCardData {
  id: string;
  dept: string;
  action: string;
  time: string;
  top: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  isCheck: boolean;
  detail: string;
}

const NOTIFICATIONS: NotificationCardData[] = [
  {
    id: 'notif-1',
    dept: 'Marketing',
    action: 'Campaign launched',
    time: '2 min ago',
    top: '7%',
    icon: Megaphone,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    isCheck: true,
    detail: 'Q3 Enterprise Product launch campaign went live across 4 channels.',
  },
  {
    id: 'notif-2',
    dept: 'Engineering',
    action: '2 tasks overdue',
    time: '12 min ago',
    top: '19.5%',
    icon: Code,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    isCheck: false,
    detail: 'API gateway throughput and DB index optimization need founder attention.',
  },
  {
    id: 'notif-3',
    dept: 'Sales',
    action: 'Deal stage updated',
    time: '25 min ago',
    top: '32%',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    isCheck: true,
    detail: 'Tier-1 enterprise contract moved to legal review and executive signoff.',
  },
];

export const HeroOfficeVisual: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentCardData | null>(null);
  const [hoveredDeptId, setHoveredDeptId] = useState<string | null>(null);
  const [activeNotif, setActiveNotif] = useState<NotificationCardData | null>(null);
  const [mobileSyncOpen, setMobileSyncOpen] = useState<boolean>(false);

  // Smooth 3D mouse parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2.5, -2.5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredDeptId(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[960px] mx-auto select-none py-2"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Ambient Warm Radiant Glows behind visual */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
        <div className="absolute -top-10 -right-8 w-96 h-96 rounded-full bg-gradient-to-tr from-[#fab60a]/20 via-[#ffec69]/15 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#f15e1c]/15 via-[#f7d7b0]/20 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* 3D PARALLAX CONTAINER (SEAMLESSLY BLENDED INTO PAGE CANVAS) */}
      {/* ============================================================ */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-full overflow-visible transition-shadow duration-300"
      >
        {/* Seamless Environmental Canvas (NO rigid box border, NO dark background) */}
        <div className="relative w-full aspect-[16/9] overflow-visible">
          {/* Feathered 3D Office Backdrop (Dissolves naturally into the hero page background) */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden [mask-image:radial-gradient(ellipse_97%_93%_at_50%_50%,black_72%,rgba(0,0,0,0.4)_88%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_97%_93%_at_50%_50%,black_72%,rgba(0,0,0,0.4)_88%,transparent_100%)]">
            <img
              src="/assets/hero_office_scene_hq.jpg"
              alt="GetAstrav 3D Architectural Mezzanine Office Command Center with Real-Time Department Execution"
              className="w-full h-full object-cover block select-none pointer-events-none"
              loading="eager"
              decoding="async"
            />

            {/* Ambient Environmental Light Gradients (Melts outer edges into page cream & ivory canvas) */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Left soft fade towards headline and CTAs */}
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white/95 via-surface-ambient/50 to-transparent" />
              {/* Top soft fade towards navbar */}
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/85 via-white/30 to-transparent" />
              {/* Bottom soft fade towards section base */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-ambient/90 via-surface-ambient/40 to-transparent" />
              {/* Right soft fade */}
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface-ambient/75 via-transparent to-transparent" />
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. GLOWING NEON FIBER OPTIC DATA CONDUITS (SVG MESH)        */}
          {/* ============================================================ */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 562.5"
            fill="none"
          >
            <defs>
              <linearGradient id="neonOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f15e1c" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#fab60a" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="neonGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2e936f" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#fab60a" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glowBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Glowing lines connecting Founder Desk (x: 650, y: 440) to floors */}
            <path
              d="M 640 435 C 560 380, 480 320, 380 270 C 280 230, 160 230, 140 230"
              stroke="url(#neonOrangeGrad)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              filter="url(#glowBlur)"
              className="animate-pulse"
              opacity="0.85"
            />
            <path
              d="M 640 440 C 580 400, 500 370, 390 370 C 280 370, 180 370, 140 370"
              stroke="url(#neonGreenGrad)"
              strokeWidth="2"
              strokeDasharray="8 5"
              filter="url(#glowBlur)"
              opacity="0.8"
            />
            <path
              d="M 640 430 C 590 320, 520 180, 390 120 C 290 80, 180 80, 140 80"
              stroke="url(#neonOrangeGrad)"
              strokeWidth="2"
              strokeDasharray="5 5"
              filter="url(#glowBlur)"
              opacity="0.75"
            />
          </svg>

          {/* ============================================================ */}
          {/* 3. DESIGNED DEPARTMENT CARDS (CRISP, VECTOR, INTERACTIVE)    */}
          {/* ============================================================ */}
          {DEPARTMENTS.map((dept) => {
            const isHovered = hoveredDeptId === dept.id;
            const Icon = dept.icon;

            return (
              <motion.div
                key={dept.id}
                onMouseEnter={() => setHoveredDeptId(dept.id)}
                onMouseLeave={() => setHoveredDeptId(null)}
                onClick={() => setSelectedDept(dept)}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                className={`absolute z-20 cursor-pointer
                  bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl
                  p-1.5 sm:p-2 md:p-2.5
                  border shadow-[0_8px_20px_rgba(42,26,20,0.14)]
                  transition-all duration-200
                  ${
                    isHovered
                      ? 'border-brand-orange ring-2 ring-brand-orange/40 shadow-[0_12px_28px_rgba(241,94,28,0.3)] bg-white'
                      : 'border-white/90 hover:border-brand-orange/50'
                  }
                `}
                style={{
                  left: dept.left,
                  top: dept.top,
                  width: dept.width,
                }}
                title={`Click to inspect ${dept.name} (${dept.progress} - ${dept.statusText})`}
              >
                {/* Card Top: Icon, Department Name, Percentage, Sparkline */}
                <div className="flex items-center justify-between gap-1 sm:gap-1.5">
                  <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-md sm:rounded-lg ${dept.iconBg} flex items-center justify-center shrink-0 shadow-warm-2xs`}
                    >
                      <Icon
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 ${dept.iconColor}`}
                      />
                    </div>
                    <div className="min-w-0 leading-tight">
                      <span className="font-heading font-extrabold text-[10px] sm:text-xs md:text-sm text-espresso truncate block">
                        {dept.name}
                      </span>
                      <span className="font-mono font-bold text-[9px] sm:text-[10px] md:text-xs text-terracotta-muted">
                        {dept.progress}
                      </span>
                    </div>
                  </div>

                  {/* Micro Sparkline Wave */}
                  <div className="shrink-0 hidden xs:block">
                    {dept.status === 'attention' ? (
                      <svg
                        className="w-4 h-2.5 sm:w-6 sm:h-3.5 text-amber-500"
                        viewBox="0 0 32 16"
                        fill="none"
                      >
                        <path
                          d="M2 12 L10 14 L18 6 L24 10 L30 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-2.5 sm:w-6 sm:h-3.5 text-brand-green"
                        viewBox="0 0 32 16"
                        fill="none"
                      >
                        <path
                          d="M2 14 L10 10 L18 12 L24 4 L30 2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Card Bottom: Animated Vector Progress Bar */}
                <div className="mt-1 sm:mt-1.5 w-full h-1 sm:h-1.5 rounded-full bg-stone-100/90 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${dept.barColor}`}
                    style={{ width: dept.progress }}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* ============================================================ */}
          {/* 4. ACTIVITY NOTIFICATIONS STACK (TOP RIGHT SKYLINE)          */}
          {/* ============================================================ */}
          <div
            className="absolute z-20 space-y-1.5 sm:space-y-2"
            style={{
              right: '2%',
              top: '8%',
              width: '24%',
            }}
          >
            {NOTIFICATIONS.map((notif) => {
              const Icon = notif.icon;

              return (
                <motion.div
                  key={notif.id}
                  onClick={() => setActiveNotif(notif)}
                  whileHover={{ scale: 1.04, x: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-1.5 sm:p-2 border border-white/90 shadow-[0_6px_16px_rgba(42,26,20,0.12)] hover:border-brand-green/60 hover:shadow-warm-md transition-all cursor-pointer flex items-center justify-between gap-1.5"
                  title={`Click to view ${notif.dept} activity detail`}
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
                    <div
                      className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg ${notif.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${notif.iconColor}`} />
                    </div>
                    <div className="min-w-0 leading-tight">
                      <span className="font-heading font-extrabold text-[9px] sm:text-[11px] md:text-xs text-espresso whitespace-nowrap block">
                        {notif.dept}
                      </span>
                      <span className="text-[8px] sm:text-[9.5px] text-terracotta-muted truncate block">
                        {notif.action}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1">
                    <span className="text-[7.5px] sm:text-[8.5px] font-mono text-stone-600 hidden md:inline">
                      {notif.time}
                    </span>
                    {notif.isCheck ? (
                      <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-green" />
                    ) : (
                      <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ============================================================ */}
          {/* 5. FOUNDER SMARTPHONE HOTSPOT (BOTTOM-RIGHT)                 */}
          {/* ============================================================ */}
          <div
            onClick={() => setMobileSyncOpen(true)}
            className="absolute z-20 cursor-pointer group"
            style={{
              right: '18%',
              bottom: '10%',
              width: '16%',
              height: '38%',
            }}
            title="Executive Mobile Sync Stream - Click to view real-time feed"
          >
            <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:ring-2 group-hover:ring-brand-orange group-hover:bg-brand-orange/15 group-hover:shadow-[0_0_24px_rgba(241,94,28,0.45)]" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-brand-orange text-white text-[8px] sm:text-[9px] font-heading font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-sm flex items-center gap-1 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span>Live Sync</span>
            </div>
          </div>
        </div>

        {/* Ambient Hover Status HUD Bar beneath the free-flowing visual */}
        {hoveredDeptId && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-center justify-between px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-peach/80 shadow-warm-md text-xs"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
              <span className="font-heading font-extrabold text-espresso">
                {DEPARTMENTS.find((d) => d.id === hoveredDeptId)?.name} Department
              </span>
              <span className="text-terracotta-muted font-medium">
                — {DEPARTMENTS.find((d) => d.id === hoveredDeptId)?.milestones}
              </span>
            </div>
            <span className="font-heading font-bold text-brand-orange flex items-center gap-1 cursor-pointer">
              <span>Click to inspect deep dive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* ============================================================ */}
      {/* INTERACTIVE FULL DEEP-DIVE MODAL (ON CLICK)                  */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-brand-peach space-y-5"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl ${selectedDept.iconBg} flex items-center justify-center shrink-0 shadow-warm-xs`}
                  >
                    <selectedDept.icon className={`w-6 h-6 ${selectedDept.iconColor}`} />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                      Department Command Center
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-espresso">
                      {selectedDept.name} Execution
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedDept(null)}
                  className="p-2 rounded-full hover:bg-surface-tier1 text-terracotta hover:text-espresso transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Summary Card */}
              <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60 flex items-center justify-between">
                <div>
                  <span className="text-xs text-terracotta-muted font-medium block">
                    Execution Velocity
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-heading font-extrabold text-2xl text-espresso">
                      {selectedDept.progress}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-heading font-bold bg-brand-green-light text-brand-green border border-brand-green/20">
                      {selectedDept.statusText}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-terracotta-muted font-medium block">
                    Leadership
                  </span>
                  <span className="font-heading font-bold text-sm text-espresso mt-0.5 block">
                    {selectedDept.head}
                  </span>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-2.5">
                <span className="text-xs font-heading font-bold text-espresso uppercase tracking-wider block">
                  Active Deliverables & Rollup Items
                </span>
                <div className="space-y-2">
                  {selectedDept.deliverables.map((obj, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-brand-peach/40 text-xs text-espresso"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="leading-snug">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-brand-peach/40">
                <span className="text-xs text-terracotta-muted">
                  Live connection to FounderOS Mesh
                </span>
                <button
                  onClick={() => setSelectedDept(null)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-heading font-bold text-sm shadow-md shadow-brand-orange/20 transition-all cursor-pointer"
                >
                  <span>Close Inspection</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Activity Notification Modal */}
      <AnimatePresence>
        {activeNotif && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-brand-peach space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="font-heading font-extrabold text-base text-espresso">
                    {activeNotif.dept} Activity
                  </span>
                  <span className="text-xs font-mono text-terracotta-muted">
                    {activeNotif.time}
                  </span>
                </div>
                <button
                  onClick={() => setActiveNotif(null)}
                  className="p-1.5 rounded-full hover:bg-surface-tier1 text-terracotta cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-ambient border border-brand-peach/50 text-xs text-espresso leading-relaxed">
                {activeNotif.detail}
              </div>

              <button
                onClick={() => setActiveNotif(null)}
                className="w-full py-2.5 rounded-full bg-brand-orange text-white font-heading font-bold text-xs shadow-md shadow-brand-orange/20 cursor-pointer hover:bg-brand-orange-hover transition-colors"
              >
                Dismiss
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Executive Mobile Sync Modal */}
      <AnimatePresence>
        {mobileSyncOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-brand-peach space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-base text-espresso">
                      Executive Mobile Mesh
                    </h3>
                    <span className="text-[11px] font-mono text-brand-green font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                      100% Live Stream
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileSyncOpen(false)}
                  className="p-1.5 rounded-full hover:bg-surface-tier1 text-terracotta cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                {DEPARTMENTS.map((dept) => (
                  <div
                    key={dept.id}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-surface-ambient border border-brand-peach/40 text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <dept.icon className={`w-3.5 h-3.5 ${dept.iconColor}`} />
                      <span className="font-heading font-bold text-espresso">{dept.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-espresso">{dept.progress}</span>
                      <span className="text-[10px] font-heading font-semibold text-terracotta-muted">
                        {dept.statusText}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setMobileSyncOpen(false)}
                className="w-full py-2.5 rounded-full bg-brand-orange text-white font-heading font-bold text-xs shadow-md shadow-brand-orange/20 cursor-pointer hover:bg-brand-orange-hover transition-colors"
              >
                Close Mobile Stream
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
