import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Layers,
  Play,
  Target,
  Sparkles,
  BarChart3,
  Users,
  Package,
  Code,
  Megaphone,
  Coins,
  CheckCircle2,
  AlertTriangle,
  X,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import { MotionWrapper } from '../common/MotionWrapper';

interface DepartmentHotspot {
  id: string;
  name: string;
  progress: string;
  status: 'on_track' | 'attention' | 'optimal';
  statusText: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  barColor: string;
  sparklineColor: string;
  sparklinePath: string;
  // Percentage coordinates on the 2048x756 panoramic canvas
  left: string;
  top: string;
  width: string;
  height: string;
  // Mobile specific coordinates on the 1306x871 mobile visual container
  mobileLeft: string;
  mobileTop: string;
  mobileWidth: string;
  mobileHeight: string;
  head: string;
  activeTasks: number;
  milestones: string;
  deliverables: string[];
}

const DEPARTMENTS: DepartmentHotspot[] = [
  // Top Mezzanine Level
  {
    id: 'product',
    name: 'Product',
    progress: '78%',
    status: 'on_track',
    statusText: 'On Track',
    icon: Package,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 12 Q 10 14, 18 8 T 34 3',
    left: '32.2%',
    top: '18.1%',
    width: '12.8%',
    height: '10.6%',
    mobileLeft: '3.5%',
    mobileTop: '7%',
    mobileWidth: '20.5%',
    mobileHeight: '19%',
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
    status: 'attention',
    statusText: '2 Overdue Tasks',
    icon: Code,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 13 Q 10 15, 20 8 T 34 3',
    left: '47.4%',
    top: '18.1%',
    width: '12.8%',
    height: '10.6%',
    mobileLeft: '25.5%',
    mobileTop: '7%',
    mobileWidth: '20.5%',
    mobileHeight: '19%',
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
    status: 'attention',
    statusText: 'Campaign Live',
    icon: Megaphone,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 14 Q 10 11, 20 9 T 34 4',
    left: '62.5%',
    top: '18.1%',
    width: '12.8%',
    height: '10.6%',
    mobileLeft: '47.5%',
    mobileTop: '7%',
    mobileWidth: '20.5%',
    mobileHeight: '19%',
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
    status: 'on_track',
    statusText: 'On Track',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 14 Q 10 14, 18 7 T 34 2',
    left: '32.2%',
    top: '43.6%',
    width: '12.8%',
    height: '10.6%',
    mobileLeft: '3.5%',
    mobileTop: '35%',
    mobileWidth: '20.5%',
    mobileHeight: '19%',
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
    status: 'optimal',
    statusText: 'All Onboarded',
    icon: Users,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 13 Q 12 14, 20 6 T 34 2',
    left: '47.4%',
    top: '43.6%',
    width: '12.8%',
    height: '10.6%',
    mobileLeft: '25.5%',
    mobileTop: '35%',
    mobileWidth: '20.5%',
    mobileHeight: '19%',
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
    status: 'attention',
    statusText: 'Runway Clear',
    icon: Coins,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 12 Q 12 15, 20 10 T 34 4',
    left: '62.5%',
    top: '43.6%',
    width: '12.8%',
    height: '10.6%',
    mobileLeft: '47.5%',
    mobileTop: '35%',
    mobileWidth: '20.5%',
    mobileHeight: '19%',
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

interface NotificationHotspot {
  id: string;
  dept: string;
  action: string;
  time: string;
  left: string;
  top: string;
  width: string;
  height: string;
  mobileTop: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  isCheck: boolean;
  detail: string;
}

const NOTIFICATIONS: NotificationHotspot[] = [
  {
    id: 'notif-1',
    dept: 'Marketing',
    action: 'Campaign launched',
    time: '2 min ago',
    left: '79.1%',
    top: '17.4%',
    width: '16.6%',
    height: '7.6%',
    mobileTop: '7%',
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
    left: '79.1%',
    top: '27.0%',
    width: '16.6%',
    height: '7.6%',
    mobileTop: '20.5%',
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
    left: '79.1%',
    top: '36.6%',
    width: '16.6%',
    height: '7.6%',
    mobileTop: '34%',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    isCheck: true,
    detail: 'Tier-1 enterprise contract moved to legal review and executive signoff.',
  },
];

export const ArchitectureOfExecutionHero: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentHotspot | null>(null);
  const [hoveredDeptId, setHoveredDeptId] = useState<string | null>(null);
  const [activeNotif, setActiveNotif] = useState<NotificationHotspot | null>(null);
  const [companyGoalModalOpen, setCompanyGoalModalOpen] = useState(false);
  const [mobileSyncOpen, setMobileSyncOpen] = useState(false);

  // Active status for connection highlight illumination
  const isGoalActive = companyGoalModalOpen;
  const isSalesActive = hoveredDeptId === 'sales' || selectedDept?.id === 'sales';
  const isHRActive = hoveredDeptId === 'hr' || selectedDept?.id === 'hr';
  const isFinanceActive = hoveredDeptId === 'finance' || selectedDept?.id === 'finance';
  const isProductActive = hoveredDeptId === 'product' || selectedDept?.id === 'product';
  const isEngActive = hoveredDeptId === 'engineering' || selectedDept?.id === 'engineering';
  const isMktActive = hoveredDeptId === 'marketing' || selectedDept?.id === 'marketing';

  return (
    <section className="relative w-full overflow-hidden bg-[#faf6f0] border-b border-brand-peach/60 pt-20 sm:pt-22 select-none">
      <style>{`
        @keyframes dashFlow {
          from {
            stroke-dashoffset: 28;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-dash-flow {
          animation: dashFlow 1.4s linear infinite;
        }
      `}</style>

      {/* ============================================================ */}
      {/* DESKTOP / WIDE SCREEN: 4K HIGH-DEF PANORAMIC HERO BACKDROP   */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative w-full">
        <div className="relative w-full aspect-[1806/871] overflow-hidden">
          {/* Panoramic Clean Reference Backdrop (Crisp with Zero Stretching) */}
          <img
            src="/assets/golden_hour_glass_tech_hub.png"
            alt="FounderOS Executive Organization Command Center"
            className="w-full h-full object-cover block select-none pointer-events-none"
            loading="eager"
            decoding="async"
          />

          {/* ============================================================ */}
          {/* ACCESSIBLE SEO LAYER (Screen Readers & Search Engines)       */}
          {/* ============================================================ */}
          <div className="sr-only">
            <h1>FOUNDEROS WORKSPACE V4.8 — Your Entire Company In One View.</h1>
            <p>
              Connect goals, teams, projects and daily work across every department. Get real progress, spot delays early, and run your company with clarity.
            </p>
            <div>
              <Link to="/product">Explore FounderOS</Link>
              <a href="#how-it-works">See How It Works</a>
            </div>
            <h2>Departments</h2>
            <ul>
              {DEPARTMENTS.map((dept) => (
                <li key={dept.id}>
                  {dept.name}: {dept.progress} - {dept.statusText}
                </li>
              ))}
            </ul>
            <h2>Company Goal: Launch Product V2 (72%)</h2>
          </div>

          {/* ============================================================ */}
          {/* 1. CRISP VECTOR LEFT-SIDE HERO CONTENT                       */}
          {/* ============================================================ */}
          <div
            className="absolute z-20 flex flex-col justify-start select-none"
            style={{
              left: '5.2%',
              top: '13.5%',
              width: '26.5%',
            }}
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf7f3] border border-[#2e936f]/30 shadow-warm-2xs w-fit mb-3 xl:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2e936f] animate-pulse" />
              <span className="text-[10px] xl:text-[11px] font-heading font-extrabold tracking-widest text-[#2e936f] uppercase">
                FOUNDEROS WORKSPACE V4.8
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[34px] xl:text-[44px] 2xl:text-[52px] font-extrabold text-[#271812] leading-[1.08] tracking-[-0.035em] font-heading mb-3 xl:mb-4">
              Your Entire<br />
              Company<br />
              In <span className="text-[#f15e1c]">One View.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-xs xl:text-sm 2xl:text-base text-[#5a4138] font-body leading-relaxed mb-5 xl:mb-6 max-w-[420px] text-justify">
              Connect goals, teams, and daily execution across every department. Spot delays early and run your company with total clarity.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2.5 xl:gap-3">
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-1.5 xl:gap-2 px-4.5 xl:px-6 py-2.5 xl:py-3 rounded-full bg-[#f15e1c] hover:bg-[#d94e10] text-white font-heading font-bold text-xs xl:text-sm shadow-lg shadow-[#f15e1c]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Layers className="w-4 h-4 text-white" />
                <span>Explore FounderOS</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-1.5 xl:gap-2 px-4 xl:px-5 py-2.5 xl:py-3 rounded-full bg-white hover:bg-gray-50 text-[#271812] font-heading font-bold text-xs xl:text-sm border border-[#f5ded0] shadow-warm-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Play className="w-3.5 h-3.5 text-[#271812] fill-[#271812]/20" />
                <span>See How It Works</span>
              </a>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. SHARP, HIGH-DEFINITION DEPARTMENT CARDS                   */}
          {/* ============================================================ */}
          {DEPARTMENTS.map((dept) => {
            const isHovered = hoveredDeptId === dept.id;
            const isSelected = selectedDept?.id === dept.id;
            const isActive = isHovered || isSelected;

            return (
              <div
                key={dept.id}
                onMouseEnter={() => setHoveredDeptId(dept.id)}
                onMouseLeave={() => setHoveredDeptId(null)}
                onClick={() => setSelectedDept(dept)}
                className={`absolute z-20 rounded-xl xl:rounded-2xl cursor-pointer transition-all duration-200 select-none bg-white border border-black/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)] p-2 xl:p-2.5 2xl:p-3 flex flex-col justify-between group overflow-hidden ${
                  isActive
                    ? 'ring-2 ring-[#f15e1c] shadow-[0_12px_28px_rgba(241,94,28,0.3)] scale-[1.02]'
                    : 'hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)] hover:border-[#f15e1c]/40 hover:scale-[1.01]'
                }`}
                style={{
                  left: dept.left,
                  top: dept.top,
                  width: dept.width,
                  height: dept.height,
                }}
                title={`Click to inspect ${dept.name} (${dept.progress} - ${dept.statusText})`}
              >
                {/* Top Row: Icon + Name + Chevron */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5 xl:gap-2 min-w-0">
                    <div
                      className={`w-5 h-5 xl:w-6 xl:h-6 rounded-md xl:rounded-lg ${dept.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <dept.icon className={`w-3 h-3 xl:w-3.5 xl:h-3.5 ${dept.iconColor}`} />
                    </div>
                    <span className="font-heading font-extrabold text-[#271812] text-[11px] xl:text-[12px] 2xl:text-[13px] leading-tight truncate">
                      {dept.name}
                    </span>
                  </div>
                  <ChevronRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-gray-400 group-hover:text-[#f15e1c] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>

                {/* Bottom Row: Percentage + Progress Bar + Sparkline */}
                <div className="flex items-end justify-between w-full mt-0.5">
                  <div className="min-w-0 flex-1 mr-2">
                    <span className="font-heading font-extrabold text-[#271812] text-xs xl:text-sm 2xl:text-base leading-none block mb-1">
                      {dept.progress}
                    </span>
                    <div className="w-full h-1 xl:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${dept.barColor} rounded-full transition-all duration-500`}
                        style={{ width: dept.progress }}
                      />
                    </div>
                  </div>
                  <div className="w-8 xl:w-10 h-4 xl:h-5 shrink-0 flex items-center justify-end">
                    <svg viewBox="0 0 36 16" className="w-full h-full overflow-visible" fill="none">
                      <path
                        d={dept.sparklinePath}
                        stroke={dept.sparklineColor}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ============================================================ */}
          {/* 3. SHARP, HIGH-DEFINITION COMPANY GOAL CARD                  */}
          {/* ============================================================ */}
          <div
            onClick={() => setCompanyGoalModalOpen(true)}
            className="absolute z-20 rounded-xl xl:rounded-2xl cursor-pointer transition-all duration-200 select-none bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(46,147,111,0.3)] hover:border-[#2e936f] hover:scale-[1.01] p-2 xl:p-2.5 2xl:p-3 flex flex-col justify-between group overflow-hidden"
            style={{
              left: '40.33%',
              top: '63.5%',
              width: '23.0%',
              height: '11.0%',
            }}
            title="Company Goal: Launch Product V2 (72%) - Click to inspect"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-lg bg-[#fceade] flex items-center justify-center shrink-0">
                  <Target className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#f15e1c]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[8.5px] xl:text-[9.5px] font-heading font-bold text-[#2e936f] leading-none mb-0.5 uppercase tracking-wider">
                    Company Goal
                  </div>
                  <div className="font-heading font-extrabold text-[#271812] text-[11px] xl:text-[13px] 2xl:text-[14px] leading-tight truncate">
                    Launch Product V2
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="font-heading font-extrabold text-[#2e936f] text-sm xl:text-base 2xl:text-lg">
                  72%
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#2e936f] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            {/* Full width Progress Bar */}
            <div className="w-full h-1.5 xl:h-2 bg-gray-100 rounded-full overflow-hidden mt-0.5">
              <div
                className="h-full bg-gradient-to-r from-[#2e936f] to-[#34d399] rounded-full transition-all duration-500"
                style={{ width: '72%' }}
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* 4. SHARP, HIGH-DEFINITION NOTIFICATION STACK                 */}
          {/* ============================================================ */}
          {NOTIFICATIONS.map((notif) => (
            <div
              key={notif.id}
              onClick={() => setActiveNotif(notif)}
              className="absolute z-20 rounded-xl xl:rounded-2xl cursor-pointer transition-all duration-200 select-none bg-white border border-black/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.14)] hover:border-brand-orange/60 hover:scale-[1.01] px-2.5 py-1.5 xl:px-3 xl:py-2 flex items-center justify-between group overflow-hidden"
              style={{
                left: notif.left,
                top: notif.top,
                width: notif.width,
                height: notif.height,
              }}
              title={`Click to view ${notif.dept} update (${notif.action})`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className={`w-6 h-6 xl:w-7 xl:h-7 rounded-lg ${notif.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                >
                  <notif.icon className={`w-3.5 h-3.5 ${notif.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <h5 className="font-heading font-extrabold text-[#271812] text-[11px] xl:text-[12px] 2xl:text-[13px] leading-tight truncate">
                    {notif.dept}
                  </h5>
                  <p className="text-[9.5px] xl:text-[10px] text-gray-500 font-medium leading-none mt-0.5 truncate">
                    {notif.action}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end shrink-0 gap-0.5">
                {notif.isCheck ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2e936f] fill-[#2e936f]/15" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5 text-[#ea580c] fill-[#ea580c]/15" />
                )}
                <span
                  className={`text-[8.5px] xl:text-[9px] font-heading font-bold ${
                    notif.isCheck ? 'text-[#2e936f]' : 'text-[#ea580c]'
                  }`}
                >
                  {notif.time}
                </span>
              </div>
            </div>
          ))}

          {/* ============================================================ */}
          {/* 5. FOUNDER SMARTPHONE HOTSPOT (BOTTOM-RIGHT)                 */}
          {/* ============================================================ */}
          <div
            onClick={() => setMobileSyncOpen(true)}
            className="absolute z-20 rounded-2xl cursor-pointer group transition-all duration-200 active:scale-[0.98]"
            style={{
              left: '77.2%',
              top: '53.0%',
              width: '11.0%',
              height: '28.0%',
            }}
            title="Founder Executive Mobile Command Stream - Click to view real-time feed"
          >
            <div className="absolute inset-0 rounded-2xl transition-all duration-200 group-hover:ring-2 group-hover:ring-brand-orange group-hover:bg-brand-orange/15 group-hover:shadow-[0_0_24px_rgba(241,94,28,0.45)] pointer-events-none" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-brand-orange text-white text-[8.5px] font-heading font-bold opacity-0 group-hover:opacity-100 transition-opacity shadow-sm flex items-center gap-1 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span>Live Sync</span>
            </div>
          </div>

          {/* Floating Ambient Hover Status HUD Bar inside the visual */}
          {hoveredDeptId && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between gap-6 px-5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-peach/80 shadow-warm-lg text-xs"
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
              <span
                onClick={() => {
                  const d = DEPARTMENTS.find((dept) => dept.id === hoveredDeptId);
                  if (d) setSelectedDept(d);
                }}
                className="font-heading font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1 cursor-pointer"
              >
                <span>Click to inspect</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* STRATEGIC EXECUTION PILLARS DOCK (PAGE BOTTOM FOLD - DESKTOP)*/}
      {/* ============================================================ */}
      <div className="hidden lg:block w-full bg-[#fdfbf7] border-t border-brand-peach/60 py-6 sm:py-8 px-4 sm:px-6 lg:px-12 select-none shadow-[0_-4px_24px_rgba(39,24,18,0.03)]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
            {/* 1. Goal-Driven Execution */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-xs hover:border-brand-orange/60 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#fceade] text-[#f15e1c] flex items-center justify-center shadow-warm-2xs group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5 text-[#f15e1c]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-heading font-extrabold text-[#2e936f] bg-[#edf7f3] border border-[#2e936f]/30">
                  100% Rollup
                </span>
              </div>
              <h4 className="font-heading font-extrabold text-sm sm:text-base text-espresso group-hover:text-brand-orange transition-colors">
                Goal-Driven Execution
              </h4>
              <p className="text-xs text-terracotta leading-relaxed mt-1 text-justify">
                Projects, milestones, and daily tasks roll up directly into company North Star goals.
              </p>
            </div>

            {/* 2. AI-Powered Planning */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-xs hover:border-brand-orange/60 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#fef3dc] text-[#fab60a] flex items-center justify-center shadow-warm-2xs group-hover:scale-105 transition-transform">
                  <Sparkles className="w-5 h-5 text-[#fab60a]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-heading font-extrabold text-[#fab60a] bg-[#fef3dc] border border-[#fab60a]/30">
                  Predictive Mesh
                </span>
              </div>
              <h4 className="font-heading font-extrabold text-sm sm:text-base text-espresso group-hover:text-brand-orange transition-colors">
                AI-Powered Planning
              </h4>
              <p className="text-xs text-terracotta leading-relaxed mt-1 text-justify">
                Detects project blockers, overdue tasks, and resource clashes before delays happen.
              </p>
            </div>

            {/* 3. Real Progress Visibility */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-xs hover:border-brand-orange/60 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#edf7f3] text-[#2e936f] flex items-center justify-center shadow-warm-2xs group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-5 h-5 text-[#2e936f]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-heading font-extrabold text-[#2e936f] bg-[#edf7f3] border border-[#2e936f]/30">
                  Real-Time Sync
                </span>
              </div>
              <h4 className="font-heading font-extrabold text-sm sm:text-base text-espresso group-hover:text-brand-orange transition-colors">
                Real Progress Visibility
              </h4>
              <p className="text-xs text-terracotta leading-relaxed mt-1 text-justify">
                Live, unfiltered execution velocity across Product, Engineering, Marketing, Sales, HR, and Finance.
              </p>
            </div>

            {/* 4. Built for Founders */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-xs hover:border-brand-orange/60 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#fceade] text-[#f15e1c] flex items-center justify-center shadow-warm-2xs group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5 text-[#f15e1c]" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-heading font-extrabold text-[#f15e1c] bg-[#fceade] border border-[#f15e1c]/30">
                  FounderOS V4.8
                </span>
              </div>
              <h4 className="font-heading font-extrabold text-sm sm:text-base text-espresso group-hover:text-brand-orange transition-colors">
                Built for Founders
              </h4>
              <p className="text-xs text-terracotta leading-relaxed mt-1 text-justify">
                Total control of cross-team execution with zero micromanagement or status meetings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET VIEW (<1024px): CLOSE TO REFERENCE IMAGE 1   */}
      {/* ============================================================ */}
      <div className="lg:hidden max-w-xl mx-auto px-4 sm:px-6 space-y-7 text-left pb-12">
        {/* 1. Brand Kicker Badge: FOUNDEROS WORKSPACE V4.8 */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf7f3] border border-[#2e936f]/30 shadow-warm-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e936f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e936f]"></span>
          </span>
          <span className="text-[11px] font-heading font-extrabold tracking-widest text-[#2e936f] uppercase">
            FOUNDEROS WORKSPACE V4.8
          </span>
        </div>

        {/* 2. Headline & Supporting Text */}
        <div className="space-y-3.5">
          <h1 className="text-[34px] xs:text-[38px] sm:text-[44px] font-extrabold text-[#271812] leading-[1.08] tracking-[-0.035em] font-heading">
            Your Entire Company<br />
            In <span className="text-[#f15e1c]">One View.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#5a4138] font-body leading-relaxed text-justify">
            Connect goals, teams, projects and daily work across every department. Get real progress, spot delays early, and run your company with clarity.
          </p>
        </div>

        {/* 3. CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            to="/product"
            className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-heading font-bold text-white bg-[#f15e1c] hover:bg-[#d94e10] px-6 py-3.5 rounded-full shadow-lg shadow-[#f15e1c]/30 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Layers className="w-4.5 h-4.5 text-white" />
            <span>Explore FounderOS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-heading font-bold text-[#271812] bg-white hover:bg-gray-50 px-6 py-3.5 rounded-full border border-brand-peach shadow-warm-sm active:scale-[0.98] transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 text-[#271812] fill-[#271812]/15" />
            <span>See How It Works</span>
          </a>
        </div>

        {/* 4. Four Value Prop Highlights (2x2 Grid) */}
        <div className="pt-2 border-t border-brand-peach/40 grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm font-heading">
          <div className="flex items-center gap-2 font-bold text-[#271812]">
            <Target className="w-4 h-4 text-[#f15e1c] shrink-0" />
            <span>Goal-Driven Execution</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-[#271812]">
            <Sparkles className="w-4 h-4 text-[#fab60a] shrink-0" />
            <span>AI-Powered Planning</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-[#271812]">
            <BarChart3 className="w-4 h-4 text-[#2e936f] shrink-0" />
            <span>Real Progress Visibility</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-[#271812]">
            <Users className="w-4 h-4 text-[#f15e1c] shrink-0" />
            <span>Built for Founders</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 5. OFFICE SCENE VISUAL CONTAINER WITH OVERLAID CARDS         */}
        {/* ============================================================ */}
        <div className="relative w-full aspect-[1306/871] rounded-2xl sm:rounded-3xl overflow-hidden shadow-warm-lg border border-brand-peach/80 bg-[#1e130c] select-none">
          {/* Office Scene Image with Founder looking at mobile phone */}
          <img
            src="/assets/golden_hour_tech_hub_mobile.png"
            alt="FounderOS Command Center Hub"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            loading="eager"
          />

          {/* Glowing Animated Warm Orange SVG Connector Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 667"
            fill="none"
          >
            {/* Vertical connector lines between Row 1 and Row 2 */}
            <path
              d="M 138 174 L 138 234"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.85"
            />
            <path
              d="M 358 174 L 358 234"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.85"
            />
            <path
              d="M 578 174 L 578 234"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.85"
            />

            {/* Connector Lines from Row 2 converging down into Company Goal */}
            {/* Sales (Col 1) to Goal left */}
            <path
              d="M 138 358 L 138 392 L 245 392 L 245 427"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.9"
            />
            {/* HR (Col 2) to Goal center */}
            <path
              d="M 358 358 L 358 427"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.9"
            />
            {/* Finance (Col 3) to Goal right */}
            <path
              d="M 578 358 L 578 392 L 465 392 L 465 427"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.9"
            />

            {/* Glowing Bus Junction Nodes */}
            <circle cx="138" cy="392" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="245" cy="392" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="358" cy="392" r="3.5" fill="#2e936f" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="465" cy="392" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="578" cy="392" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />

            {/* Goal Top Anchor Nodes */}
            <circle cx="245" cy="427" r="3" fill="#2e936f" />
            <circle cx="358" cy="427" r="3.5" fill="#2e936f" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="465" cy="427" r="3" fill="#2e936f" />
          </svg>

          {/* Overlaid 6 Department Cards in 2 Rows of 3 */}
          {/* Row 1: Product, Engineering, Marketing */}
          {/* Row 2: Sales, HR, Finance */}
          {DEPARTMENTS.map((dept) => {
            const isSelected = selectedDept?.id === dept.id;

            return (
              <div
                key={dept.id}
                onClick={() => setSelectedDept(dept)}
                className={`absolute z-20 rounded-lg xs:rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_4px_14px_rgba(0,0,0,0.12)] p-1 xs:p-1.5 sm:p-2 flex flex-col justify-between cursor-pointer select-none active:scale-95 transition-all group overflow-hidden ${
                  isSelected ? 'ring-2 ring-brand-orange bg-white' : 'hover:border-brand-orange/50'
                }`}
                style={{
                  left: dept.mobileLeft,
                  top: dept.mobileTop,
                  width: dept.mobileWidth,
                  height: dept.mobileHeight,
                }}
                title={`Click to inspect ${dept.name} (${dept.progress} - ${dept.statusText})`}
              >
                {/* Top Row: Icon + Name */}
                <div className="flex items-center gap-1 xs:gap-1.5 min-w-0">
                  <div
                    className={`w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-md ${dept.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <dept.icon className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 ${dept.iconColor}`} />
                  </div>
                  <span className="font-heading font-extrabold text-[#271812] text-[8px] xs:text-[9.5px] sm:text-xs leading-none truncate">
                    {dept.name}
                  </span>
                </div>

                {/* Bottom Row: Percentage + Progress Bar + Sparkline */}
                <div className="flex items-end justify-between w-full gap-1 mt-0.5">
                  <div className="min-w-0 flex-1">
                    <span className="font-heading font-extrabold text-[#271812] text-[9px] xs:text-[11px] sm:text-xs leading-none block mb-0.5">
                      {dept.progress}
                    </span>
                    <div className="w-full h-0.5 xs:h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${dept.barColor} rounded-full transition-all duration-500`}
                        style={{ width: dept.progress }}
                      />
                    </div>
                  </div>
                  <div className="w-4 xs:w-5 sm:w-6 h-2 xs:h-2.5 sm:h-3 shrink-0 flex items-center justify-end">
                    <svg viewBox="0 0 36 16" className="w-full h-full overflow-visible" fill="none">
                      <path
                        d={dept.sparklinePath}
                        stroke={dept.sparklineColor}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Central Company Goal Card (Lower Middle Left) */}
          <div
            onClick={() => setCompanyGoalModalOpen(true)}
            className="absolute z-20 rounded-xl xs:rounded-2xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_6px_20px_rgba(46,147,111,0.22),0_2px_4px_rgba(0,0,0,0.06)] p-1.5 xs:p-2 sm:p-2.5 cursor-pointer active:scale-95 transition-all select-none group flex flex-col justify-between"
            style={{
              left: '14%',
              top: '64%',
              width: '43%',
              height: '24%',
            }}
            title="Company Goal: Launch Product V2 (72%) - Click to inspect"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 min-w-0">
                <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-md bg-[#fceade] flex items-center justify-center shrink-0">
                  <Target className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 text-[#f15e1c]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[7px] xs:text-[8px] sm:text-[9px] font-heading font-extrabold text-[#2e936f] uppercase tracking-wider block leading-none mb-0.5">
                    Company Goal
                  </span>
                  <span className="font-heading font-extrabold text-[#271812] text-[8.5px] xs:text-[10px] sm:text-xs leading-none truncate block">
                    Launch Product V2
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-0.5 shrink-0">
                <span className="font-heading font-extrabold text-[#2e936f] text-[10px] xs:text-xs sm:text-sm">
                  72%
                </span>
                <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-[#2e936f] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            <div className="w-full h-1 xs:h-1.5 bg-gray-100 rounded-full overflow-hidden mt-0.5">
              <div
                className="h-full bg-gradient-to-r from-[#2e936f] to-[#34d399] rounded-full transition-all duration-500"
                style={{ width: '72%' }}
              />
            </div>
          </div>

          {/* Three Recent Activity Notification Cards (Stacked Vertically on Right) */}
          <div
            className="absolute z-20 flex flex-col gap-1 xs:gap-1.5 sm:gap-2"
            style={{
              right: '2.5%',
              top: '7%',
              width: '27%',
            }}
          >
            {NOTIFICATIONS.map((notif) => (
              <div
                key={notif.id}
                onClick={() => setActiveNotif(notif)}
                className="rounded-lg xs:rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_3px_10px_rgba(0,0,0,0.1)] p-1 xs:p-1.5 flex items-center justify-between cursor-pointer active:scale-95 transition-all select-none group"
                title={`Click to view ${notif.dept} update`}
              >
                <div className="flex items-center gap-1 min-w-0">
                  <div
                    className={`w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-md ${notif.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    <notif.icon className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 ${notif.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-extrabold text-[#271812] text-[8px] xs:text-[9px] sm:text-[10px] leading-tight block truncate">
                      {notif.dept}
                    </span>
                    <span className="text-[6.5px] xs:text-[7.5px] sm:text-[8.5px] text-gray-500 font-medium leading-none block truncate">
                      {notif.action}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0 gap-0.5 ml-1">
                  {notif.isCheck ? (
                    <CheckCircle2 className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 text-[#2e936f]" />
                  ) : (
                    <AlertTriangle className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 text-[#ea580c]" />
                  )}
                  <span
                    className={`text-[6.5px] xs:text-[7px] sm:text-[8px] font-heading font-bold whitespace-nowrap ${
                      notif.isCheck ? 'text-[#2e936f]' : 'text-[#ea580c]'
                    }`}
                  >
                    {notif.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Founder Executive Mobile Sync Hotspot (Bottom-Right, over phone and desk) */}
          <div
            onClick={() => setMobileSyncOpen(true)}
            className="absolute z-20 cursor-pointer group"
            style={{
              right: '2%',
              bottom: '2%',
              width: '32%',
              height: '46%',
            }}
            title="Executive Mobile Sync Stream - Click to view real-time feed"
          >
            <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:ring-2 group-hover:ring-brand-orange group-hover:bg-brand-orange/15 group-hover:shadow-[0_0_24px_rgba(241,94,28,0.45)]" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 6. TAP DEPARTMENT TO INSPECT (3-COLUMN GRID)                 */}
        {/* ============================================================ */}
        <div className="space-y-2.5 pt-2">
          <h3 className="text-[11px] sm:text-xs font-heading font-extrabold uppercase tracking-wider text-terracotta-muted">
            TAP DEPARTMENT TO INSPECT
          </h3>

          <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.id}
                onClick={() => setSelectedDept(dept)}
                className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-white border border-brand-peach/80 shadow-[0_2px_8px_rgba(42,26,20,0.04)] hover:border-brand-orange/50 hover:shadow-warm-sm transition-all cursor-pointer flex items-center justify-between group active:scale-[0.98] select-none"
                title={`Inspect ${dept.name} Department (${dept.progress})`}
              >
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${dept.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    <dept.icon className={`w-3.5 h-3.5 ${dept.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <span className="font-heading font-extrabold text-[11px] sm:text-xs text-[#271812] leading-tight truncate block">
                      {dept.name}
                    </span>
                    <span className="font-heading font-bold text-[10px] sm:text-[11px] text-[#5a4138] leading-tight block mt-0.5">
                      {dept.progress}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* INTERACTIVE FULL DEEP-DIVE MODAL (ON CLICK)                  */}
      {/* ============================================================ */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
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

      {/* Company Goal Inspection Modal */}
      <AnimatePresence>
        {companyGoalModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-brand-peach space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-terracotta-muted uppercase tracking-wider block">
                      Executive Alignment Focus
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-espresso">
                      Company Goal: Launch Product V2
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setCompanyGoalModalOpen(false)}
                  className="p-2 rounded-full hover:bg-surface-tier1 text-terracotta cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/60 flex items-center justify-between">
                <div>
                  <span className="text-xs text-terracotta-muted font-medium block">
                    Strategic Rollup Completion
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-heading font-extrabold text-3xl text-espresso">
                      72%
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-heading font-bold bg-brand-green-light text-brand-green">
                      On Track
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-terracotta-muted font-medium block">Target Date</span>
                  <span className="font-heading font-bold text-sm text-espresso mt-0.5 block">
                    Q3 Enterprise GA
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-heading font-bold text-espresso uppercase tracking-wider block">
                  Connected Department Milestones
                </span>
                <div className="space-y-1.5 text-xs text-espresso">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-brand-peach/40">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green" />
                      <span>Product: Architecture V2 Core Engine</span>
                    </span>
                    <span className="font-mono font-bold text-brand-green">100%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-brand-peach/40">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green" />
                      <span>Design System Glassmorphism v4.8</span>
                    </span>
                    <span className="font-mono font-bold text-brand-green">100%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-brand-peach/40">
                    <span className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span>Engineering: API Gateway Latency & Indexes</span>
                    </span>
                    <span className="font-mono font-bold text-amber-600">62%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-brand-peach/40">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-green" />
                      <span>Marketing: Q3 Enterprise Product Launch Tour</span>
                    </span>
                    <span className="font-mono font-bold text-brand-green">54%</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCompanyGoalModalOpen(false)}
                className="w-full py-3 rounded-full bg-brand-orange text-white font-heading font-bold text-sm shadow-md shadow-brand-orange/20 cursor-pointer hover:bg-brand-orange-hover"
              >
                Close Strategic View
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Activity Notification Modal */}
      <AnimatePresence>
        {activeNotif && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
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
    </section>
  );
};
