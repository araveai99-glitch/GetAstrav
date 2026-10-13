import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  ArrowUpRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Users,
  Code,
  Megaphone,
  BarChart3,
  Coins,
  Package,
  X,
  Sparkles,
  Calendar,
  Check,
  ChevronRight,
  Bell,
} from 'lucide-react';

interface DepartmentData {
  id: string;
  name: string;
  progress: string;
  progressNum: number;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  barColor: string;
  sparklineColor: string;
  sparklinePath: string;
  top: string;
  left: string;
  width: string;
  milestones: string;
  head: string;
  activeTasks: number;
  status: 'on_track' | 'attention' | 'optimal';
  keyObjectives: string[];
}

const DEPARTMENTS: DepartmentData[] = [
  {
    id: 'product',
    name: 'Product',
    progress: '78%',
    progressNum: 78,
    icon: Package,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 13 Q 15 14 30 8 T 58 3',
    top: '14.5%',
    left: '4%',
    width: '28%',
    milestones: '3/4 Milestones Completed',
    head: 'Elena Vance (VP Product)',
    activeTasks: 14,
    status: 'on_track',
    keyObjectives: [
      'Launch Product V2 Core Architecture (Done)',
      'Design System Glassmorphism v4.8 (Done)',
      'Mobile Responsive Viewport Rollout (85% In Progress)',
      'Quarterly Enterprise UX Accessibility Audit (Planned)',
    ],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    progress: '62%',
    progressNum: 62,
    icon: Code,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 13 Q 18 10 32 11 T 58 4',
    top: '14.5%',
    left: '34%',
    width: '28%',
    milestones: '4/6 Milestones Completed',
    head: 'Marcus Thorne (CTO)',
    activeTasks: 22,
    status: 'attention',
    keyObjectives: [
      'Distributed Task Rollup Engine v2 (Done)',
      'Real-time WebSocket Push Synchronization (Done)',
      'Fix 2 Blocking API Latency Bottlenecks (Overdue - Reviewing)',
      'SOC2 Type II Automated Compliance Controls (In Progress)',
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    progress: '54%',
    progressNum: 54,
    icon: Megaphone,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#f15e1c]',
    sparklineColor: '#f15e1c',
    sparklinePath: 'M 2 14 Q 15 15 30 11 T 58 6',
    top: '14.5%',
    left: '64%',
    width: '28%',
    milestones: '2/4 Milestones Completed',
    head: 'Sarah Jenkins (Growth Lead)',
    activeTasks: 9,
    status: 'attention',
    keyObjectives: [
      'Q3 Product Launch Press & PR Distribution (Launched)',
      'Interactive Product Tour & SEO Landing Pages (Done)',
      'Founder Retargeting Funnel Optimizations (In Progress)',
      'Customer Video Case Studies & Trust Badges (Pending)',
    ],
  },
  {
    id: 'sales',
    name: 'Sales',
    progress: '71%',
    progressNum: 71,
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 13 Q 18 13 32 8 T 58 3',
    top: '48.5%',
    left: '4%',
    width: '28%',
    milestones: '3/5 Milestones Completed',
    head: 'Priya Roy (Head of Revenue)',
    activeTasks: 18,
    status: 'on_track',
    keyObjectives: [
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
    progressNum: 88,
    icon: Users,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 14 Q 15 12 30 7 T 58 2',
    top: '48.5%',
    left: '34%',
    width: '28%',
    milestones: '4/4 Milestones Completed',
    head: 'Devon Lee (People Operations)',
    activeTasks: 6,
    status: 'optimal',
    keyObjectives: [
      'Senior Infrastructure Engineer Onboarding (Completed)',
      'Annual Performance & Leveling Calibration (Completed)',
      'Quarterly Founder 360 Feedback Rollout (Completed)',
      'Culture & Remote Pod Offsite Planning (In Progress)',
    ],
  },
  {
    id: 'finance',
    name: 'Finance',
    progress: '66%',
    progressNum: 66,
    icon: Coins,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 13 Q 18 12 34 9 T 58 5',
    top: '48.5%',
    left: '64%',
    width: '28%',
    milestones: '2/4 Milestones Completed',
    head: 'Arthur Pendelton (Finance VP)',
    activeTasks: 8,
    status: 'on_track',
    keyObjectives: [
      '24-Month Operating Runway & Cash Flow Model (Done)',
      'Multi-currency Subscription Billing Gateway (Done)',
      'Departmental SaaS Spend Audit & Cost Reductions (In Progress)',
      'Board of Directors Q3 Financial Packet (In Progress)',
    ],
  },
];

interface NotificationData {
  id: string;
  dept: string;
  action: string;
  time: string;
  type: 'success' | 'alert';
  top: string;
}

const NOTIFICATIONS: NotificationData[] = [
  {
    id: 'notif-1',
    dept: 'Marketing',
    action: 'Campaign launched',
    time: '2 min ago',
    type: 'success',
    top: '26%',
  },
  {
    id: 'notif-2',
    dept: 'Engineering',
    action: '2 tasks overdue',
    time: '12 min ago',
    type: 'alert',
    top: '37.5%',
  },
  {
    id: 'notif-3',
    dept: 'Sales',
    action: 'Deal stage updated',
    time: '25 min ago',
    type: 'success',
    top: '49%',
  },
];

export const HeroOfficeVisual: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentData | null>(null);
  const [hoveredDeptId, setHoveredDeptId] = useState<string | null>(null);
  const [activeNotifId, setActiveNotifId] = useState<string | null>(null);
  const [dismissedNotifs, setDismissedNotifs] = useState<string[]>([]);

  return (
    <div className="relative w-full max-w-[840px] mx-auto select-none py-2">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
        <div className="absolute top-2 right-6 w-80 h-80 rounded-full bg-gradient-to-tr from-[#fab60a]/25 via-[#ffec69]/30 to-transparent blur-3xl" />
        <div className="absolute bottom-4 left-6 w-80 h-80 rounded-full bg-gradient-to-br from-[#f15e1c]/15 via-[#f7d7b0]/25 to-transparent blur-3xl" />
      </div>

      {/* Main Container with 3D Architectural Image and Live Layered HTML UI */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-brand-peach/60 shadow-warm-xl bg-white/40">
        {/* Background 3D Office Scene */}
        <img
          src="/assets/hero_office_scene_clean.png"
          alt="GetAstrav Isometric Office Command Center"
          className="w-full h-auto object-contain block select-none pointer-events-none opacity-95"
          loading="eager"
          decoding="async"
        />

        {/* ============================================================ */}
        {/* SVG FIBER-OPTIC ENERGY BEAMS CONNECTING TO PHONE             */}
        {/* ============================================================ */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-15 overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="beamGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2e936f" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f15e1c" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="beamOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fab60a" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#f15e1c" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Dynamic flowing curves to the phone (target: ~75%, 75%) */}
          <path
            d="M 18 28 Q 35 60 74 74"
            fill="none"
            stroke={hoveredDeptId === 'product' ? '#f15e1c' : 'url(#beamGreen)'}
            strokeWidth={hoveredDeptId === 'product' ? '1.2' : '0.6'}
            strokeDasharray="2 2"
            className="animate-pulse"
          />
          <path
            d="M 48 28 Q 55 58 74 74"
            fill="none"
            stroke={hoveredDeptId === 'engineering' ? '#f15e1c' : 'url(#beamOrange)'}
            strokeWidth={hoveredDeptId === 'engineering' ? '1.2' : '0.6'}
            strokeDasharray="2 2"
            className="animate-pulse"
          />
          <path
            d="M 18 63 Q 40 70 74 75"
            fill="none"
            stroke={hoveredDeptId === 'sales' ? '#f15e1c' : 'url(#beamGreen)'}
            strokeWidth={hoveredDeptId === 'sales' ? '1.2' : '0.6'}
            strokeDasharray="2 2"
            className="animate-pulse"
          />
          <path
            d="M 48 63 Q 60 70 74 75"
            fill="none"
            stroke={hoveredDeptId === 'hr' ? '#f15e1c' : 'url(#beamGreen)'}
            strokeWidth={hoveredDeptId === 'hr' ? '1.2' : '0.6'}
            strokeDasharray="2 2"
            className="animate-pulse"
          />
        </svg>

        {/* ============================================================ */}
        {/* 1. REAL CRISP HTML CARDS: 6 DEPARTMENTS                      */}
        {/* ============================================================ */}
        {DEPARTMENTS.map((dept) => {
          const Icon = dept.icon;
          const isHovered = hoveredDeptId === dept.id;

          return (
            <motion.div
              key={dept.id}
              whileHover={{
                y: -3,
                scale: 1.03,
                boxShadow: '0 12px 24px -4px rgba(42, 26, 20, 0.2), 0 0 0 1.5px rgba(241, 94, 28, 0.4)',
              }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={() => setHoveredDeptId(dept.id)}
              onMouseLeave={() => setHoveredDeptId(null)}
              onClick={() => setSelectedDept(dept)}
              className="absolute bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-2.5 border border-white/90 shadow-[0_4px_16px_rgba(42,26,20,0.12)] cursor-pointer transition-colors z-20 group"
              style={{
                top: dept.top,
                left: dept.left,
                width: dept.width,
              }}
              title={`Click to inspect ${dept.name} execution metrics`}
            >
              {/* Header row: Icon Box, Department Name, Arrow */}
              <div className="flex items-center justify-between gap-1 mb-0.5 sm:mb-1">
                <div className="flex items-center gap-1.5 min-w-0">
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-md ${dept.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${dept.iconColor}`} />
                  </div>
                  <span className="font-heading font-extrabold text-[10px] sm:text-xs text-espresso group-hover:text-brand-orange transition-colors truncate">
                    {dept.name}
                  </span>
                </div>
                <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-terracotta-muted group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </div>

              {/* Metric row: Progress % + Real SVG Sparkline */}
              <div className="flex items-center justify-between gap-1 mt-0.5">
                <span className="font-heading font-extrabold text-xs sm:text-sm text-espresso">
                  {dept.progress}
                </span>
                <svg
                  className="w-10 sm:w-16 h-3 sm:h-4 overflow-visible"
                  viewBox="0 0 60 16"
                  fill="none"
                >
                  <path
                    d={dept.sparklinePath}
                    stroke={dept.sparklineColor}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 sm:h-1.5 rounded-full bg-brand-peach/30 mt-1 overflow-hidden">
                <div
                  className={`h-full rounded-full ${dept.barColor} transition-all duration-500`}
                  style={{ width: dept.progress }}
                />
              </div>

              {/* Hover Badge Pill */}
              <div className="hidden group-hover:flex items-center gap-1 mt-1 pt-1 border-t border-brand-peach/30 text-[9px] font-heading font-bold text-brand-orange">
                <Sparkles className="w-2.5 h-2.5" />
                <span>Click to open details</span>
              </div>
            </motion.div>
          );
        })}

        {/* ============================================================ */}
        {/* 2. REAL CRISP HTML NOTIFICATION CARDS (TOP RIGHT)            */}
        {/* ============================================================ */}
        {NOTIFICATIONS.filter((n) => !dismissedNotifs.includes(n.id)).map((notif) => (
          <motion.div
            key={notif.id}
            whileHover={{ scale: 1.04, x: -3 }}
            onClick={() => setActiveNotifId(activeNotifId === notif.id ? null : notif.id)}
            className="absolute right-[2.5%] bg-white/95 backdrop-blur-md rounded-xl p-1.5 sm:p-2 border border-white/90 shadow-[0_4px_14px_rgba(42,26,20,0.14)] cursor-pointer z-25 group flex items-center justify-between gap-1.5 transition-all w-[26%] sm:w-[25%]"
            style={{ top: notif.top }}
            title="Click to view activity update"
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-brand-orange-light flex items-center justify-center shrink-0">
                {notif.dept === 'Marketing' && <Megaphone className="w-2.5 h-2.5 text-brand-orange" />}
                {notif.dept === 'Engineering' && <Code className="w-2.5 h-2.5 text-amber-600" />}
                {notif.dept === 'Sales' && <BarChart3 className="w-2.5 h-2.5 text-brand-green" />}
              </div>
              <div className="min-w-0 leading-tight">
                <span className="font-heading font-extrabold text-[9px] sm:text-[10px] text-espresso block truncate">
                  {notif.dept}
                </span>
                <span
                  className={`text-[8px] sm:text-[9px] block truncate font-medium ${
                    notif.type === 'alert' ? 'text-amber-700 font-bold' : 'text-terracotta-muted'
                  }`}
                >
                  {notif.action}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {notif.type === 'success' ? (
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-2 h-2 text-brand-green stroke-[3]" />
                </div>
              ) : (
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-amber-100 flex items-center justify-center">
                  <AlertTriangle className="w-2 h-2 text-amber-600" />
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {/* ============================================================ */}
        {/* 3. REAL INTERACTIVE PHONE SCREEN IN FOUNDER'S HAND           */}
        {/* ============================================================ */}
        <div
          className="absolute right-[9%] bottom-[3%] w-[23%] h-[37%] rounded-2xl overflow-hidden z-25 bg-[#faf6f2]/95 border-2 border-[#1f1714] shadow-2xl p-1.5 sm:p-2 flex flex-col justify-between"
          style={{ transform: 'rotate(-1deg)' }}
        >
          {/* Phone Notch & Header */}
          <div>
            <div className="w-10 h-1 rounded-full bg-[#1f1714]/40 mx-auto mb-1" />
            <div className="flex items-center justify-between gap-1 border-b border-brand-peach/40 pb-1">
              <div className="flex items-center gap-1">
                <Layers className="w-2.5 h-2.5 text-brand-orange" />
                <span className="font-heading font-extrabold text-[8px] sm:text-[9px] text-espresso">
                  GetAstrav
                </span>
              </div>
              <span className="text-[7px] font-mono text-brand-green font-bold flex items-center gap-0.5">
                <span className="w-1 h-1 rounded-full bg-brand-green animate-ping" />
                Live
              </span>
            </div>
          </div>

          {/* Interactive Phone Department Rows */}
          <div className="space-y-0.5 sm:space-y-1 my-auto">
            {DEPARTMENTS.slice(0, 5).map((dept) => (
              <div
                key={dept.id}
                onClick={() => setSelectedDept(dept)}
                className={`flex items-center justify-between px-1 py-0.5 rounded cursor-pointer transition-colors ${
                  hoveredDeptId === dept.id
                    ? 'bg-brand-orange-light text-brand-orange font-bold'
                    : 'hover:bg-white/90 text-espresso'
                }`}
              >
                <span className="text-[7px] sm:text-[8px] font-heading font-semibold truncate">
                  {dept.name}
                </span>
                <span className="text-[7px] sm:text-[8px] font-mono font-bold">
                  {dept.progress}
                </span>
              </div>
            ))}
          </div>

          {/* Phone Bottom Pill */}
          <div className="w-8 h-1 rounded-full bg-[#1f1714]/30 mx-auto" />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. INTERACTIVE DETAIL DRAWER / MODAL WHEN CARD IS CLICKED    */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
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
                      On Track
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

              {/* Key Objectives */}
              <div className="space-y-2.5">
                <span className="text-xs font-heading font-bold text-espresso uppercase tracking-wider block">
                  Active Q3 Key Deliverables & OKRs
                </span>
                <div className="space-y-2">
                  {selectedDept.keyObjectives.map((obj, i) => (
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
                  Connected to FounderOS Command Mesh
                </span>
                <button
                  onClick={() => setSelectedDept(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white font-heading font-bold text-sm shadow-md shadow-brand-orange/20 transition-all cursor-pointer"
                >
                  <span>Close Inspection</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
