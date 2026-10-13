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
  // Percentage coordinates on the 2048x756 panoramic canvas
  left: string;
  top: string;
  width: string;
  height: string;
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
    left: '37.5%',
    top: '19.96%',
    width: '11.13%',
    height: '7.81%',
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
    left: '50.98%',
    top: '19.79%',
    width: '10.64%',
    height: '8.0%',
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
    left: '63.67%',
    top: '19.96%',
    width: '11.33%',
    height: '7.81%',
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
    left: '37.99%',
    top: '41.67%',
    width: '10.74%',
    height: '10.24%',
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
    left: '51.76%',
    top: '41.67%',
    width: '10.94%',
    height: '9.72%',
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
    left: '64.75%',
    top: '41.67%',
    width: '10.74%',
    height: '8.85%',
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
    left: '79.3%',
    top: '19.79%',
    width: '16.5%',
    height: '6.25%',
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
    left: '79.3%',
    top: '27.26%',
    width: '16.5%',
    height: '7.47%',
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
    left: '79.3%',
    top: '34.72%',
    width: '16.5%',
    height: '6.08%',
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
    <section className="relative w-full overflow-hidden bg-[#1c110b] select-none pt-0">
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
      {/* DESKTOP / WIDE SCREEN: 4K FULL-PAGE COMMAND CENTER VIEWPORT  */}
      {/* ============================================================ */}
      <div className="hidden lg:flex relative w-full h-screen min-h-[720px] items-center justify-center overflow-hidden">
        {/* Ambient blurred backdrop extending edge-to-edge for ultrawide screens */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-3xl scale-110 opacity-70 pointer-events-none"
          style={{ backgroundImage: "url('/assets/hero_fullscreen_4k.png')" }}
        />

        {/* 16:9 Master Canvas: fills 100% of standard desktop viewports */}
        <div className="relative w-full h-full max-w-[calc(100vh*(2048/1152))] max-h-[calc(100vw*(1152/2048))] aspect-[2048/1152] flex-shrink-0">
          {/* 4K Ultra High Definition Backdrop */}
          <img
            src="/assets/hero_fullscreen_4k.png"
            alt="GetAstrav FounderOS Command Center 4K Ultra Quality Full Screen View"
            className="w-full h-full object-cover block select-none pointer-events-none"
            loading="eager"
            decoding="async"
          />

          {/* ============================================================ */}
          {/* DARK VIVID CONNECTING ARROWS & STRATEGIC FLOW PIPELINES      */}
          {/* ============================================================ */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-15"
            viewBox="0 0 2048 1152"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Dark Emerald Green Arrowhead */}
              <marker
                id="arrow-dark-green"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0b5d36" stroke="#15803d" strokeWidth="1" />
              </marker>

              {/* Intense Glowing Green Arrowhead */}
              <marker
                id="arrow-active-green"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#22c55e" stroke="#16a34a" strokeWidth="1" />
              </marker>

              {/* Terracotta / Amber Activity Arrowhead */}
              <marker
                id="arrow-amber"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto"
              >
                <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#c2410c" stroke="#ea580c" strokeWidth="1" />
              </marker>

              {/* Glow Filter */}
              <filter id="emerald-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* 1. Flow: Company Goal -> Sales */}
            <path
              d="M 960 650 C 960 620, 890 625, 888 602"
              fill="none"
              stroke={isSalesActive || isProductActive || isGoalActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isSalesActive || isProductActive || isGoalActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isSalesActive || isProductActive || isGoalActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 960 650 C 960 620, 890 625, 888 602"
              fill="none"
              stroke={isSalesActive || isProductActive || isGoalActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 2. Flow: Company Goal -> HR */}
            <path
              d="M 1080 650 C 1080 620, 1170 620, 1172 594"
              fill="none"
              stroke={isHRActive || isEngActive || isGoalActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isHRActive || isEngActive || isGoalActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isHRActive || isEngActive || isGoalActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 1080 650 C 1080 620, 1170 620, 1172 594"
              fill="none"
              stroke={isHRActive || isEngActive || isGoalActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 3. Flow: Company Goal -> Finance */}
            <path
              d="M 1180 650 C 1240 620, 1430 615, 1436 586"
              fill="none"
              stroke={isFinanceActive || isMktActive || isGoalActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isFinanceActive || isMktActive || isGoalActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isFinanceActive || isMktActive || isGoalActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 1180 650 C 1240 620, 1430 615, 1436 586"
              fill="none"
              stroke={isFinanceActive || isMktActive || isGoalActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 4. Flow: Sales -> Product */}
            <path
              d="M 888 480 C 888 400, 882 390, 882 324"
              fill="none"
              stroke={isSalesActive || isProductActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isSalesActive || isProductActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isSalesActive || isProductActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 888 480 C 888 400, 882 390, 882 324"
              fill="none"
              stroke={isSalesActive || isProductActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 5. Flow: HR -> Engineering */}
            <path
              d="M 1172 480 C 1172 400, 1153 390, 1153 324"
              fill="none"
              stroke={isHRActive || isEngActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isHRActive || isEngActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isHRActive || isEngActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 1172 480 C 1172 400, 1153 390, 1153 324"
              fill="none"
              stroke={isHRActive || isEngActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 6. Flow: Finance -> Marketing */}
            <path
              d="M 1436 480 C 1436 400, 1420 390, 1420 324"
              fill="none"
              stroke={isFinanceActive || isMktActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isFinanceActive || isMktActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isFinanceActive || isMktActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 1436 480 C 1436 400, 1420 390, 1420 324"
              fill="none"
              stroke={isFinanceActive || isMktActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 7. Stream: Marketing -> Marketing Activity Notification */}
            <path
              d="M 1536 275 C 1570 275, 1590 264, 1622 264"
              fill="none"
              stroke="#b45309"
              strokeWidth="2.5"
              strokeDasharray="4 6"
              markerEnd="url(#arrow-amber)"
            />

            {/* 8. Stream: Engineering -> Engineering Activity Notification */}
            <path
              d="M 1262 275 C 1380 275, 1530 357, 1622 357"
              fill="none"
              stroke="#b45309"
              strokeWidth="2.5"
              strokeDasharray="4 6"
              markerEnd="url(#arrow-amber)"
            />

            {/* 9. Stream: Sales -> Sales Activity Notification */}
            <path
              d="M 998 540 C 1200 540, 1450 435, 1622 435"
              fill="none"
              stroke="#0d5c34"
              strokeWidth="2.5"
              strokeDasharray="4 6"
              markerEnd="url(#arrow-dark-green)"
            />
          </svg>

          {/* ============================================================ */}
          {/* 1. LEFT COLUMN: EDITORIAL COPY & CTAs OVERLAY                */}
          {/* ============================================================ */}
          <div
            className="absolute z-20 flex flex-col justify-between pt-24 sm:pt-26 xl:pt-28 pb-4"
            style={{
              left: '4.5%',
              top: '0',
              bottom: '18%',
              width: '27.5%',
            }}
          >
            {/* Top: Green Badge & Headline */}
            <div className="space-y-3.5 xl:space-y-4">
              <MotionWrapper direction="down">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#2e936f]/30 shadow-warm-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e936f] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e936f]"></span>
                  </span>
                  <span className="text-[10px] xl:text-[11px] font-heading font-extrabold tracking-widest text-[#2e936f] uppercase">
                    FOUNDEROS WORKSPACE V4.8
                  </span>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.08}>
                <h1 className="text-[32px] xl:text-[42px] 2xl:text-[48px] font-extrabold text-[#271812] leading-[1.08] tracking-[-0.03em] font-heading">
                  Your Entire<br />
                  Company<br />
                  In <span className="text-[#f15e1c]">One View.</span>
                </h1>
              </MotionWrapper>
            </div>

            {/* Middle: Subtitle & CTA Buttons */}
            <div className="space-y-3.5 xl:space-y-4">
              <p className="text-xs xl:text-sm text-[#4a3229] font-body leading-relaxed max-w-sm">
                Connect goals, teams, projects and daily work across every department. Get real progress, spot delays early, and run your company with clarity.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                <Link
                  to="/product"
                  className="inline-flex items-center justify-center gap-2 text-xs xl:text-sm font-heading font-bold text-white bg-[#f15e1c] hover:bg-[#d94e10] px-5 xl:px-6 py-2.5 xl:py-3 rounded-full shadow-lg shadow-[#f15e1c]/30 hover:-translate-y-0.5 transition-all group cursor-pointer"
                >
                  <Layers className="w-4 h-4 text-white" />
                  <span>Explore FounderOS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 text-xs xl:text-sm font-heading font-bold text-[#271812] bg-white/90 backdrop-blur-md hover:bg-white px-4 xl:px-5 py-2.5 xl:py-3 rounded-full border border-brand-peach transition-all hover:border-[#f15e1c] hover:text-[#f15e1c] shadow-warm-sm cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-[#271812] fill-[#271812]/15" />
                  <span>See How It Works</span>
                </a>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. GLOWING ORANGE ARROW BADGE (CONNECTING TEXT TO OFFICE)    */}
          {/* ============================================================ */}
          <div
            className="absolute z-20 flex items-center justify-center w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-brand-orange text-white shadow-lg shadow-brand-orange/40 animate-pulse cursor-pointer group"
            style={{ left: '31.8%', top: '28.82%' }}
            title="Strategic Alignment Flow"
          >
            <ArrowRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* ============================================================ */}
          {/* 3. INTERACTIVE HOTSPOTS OVER 6 DEPARTMENT CARDS              */}
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
                className="absolute z-20 rounded-2xl cursor-pointer group transition-all duration-150 active:scale-[0.98]"
                style={{
                  left: dept.left,
                  top: dept.top,
                  width: dept.width,
                  height: dept.height,
                }}
                title={`Click ${dept.name} card or icon to inspect execution (${dept.progress} - ${dept.statusText})`}
              >
                {/* Active Orangish Halo Ring Framing Card Edge-to-Edge */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-200 pointer-events-none ${
                    isActive
                      ? 'ring-2 ring-[#f15e1c] bg-[#f15e1c]/15 shadow-[0_0_24px_rgba(241,94,28,0.45)]'
                      : 'hover:ring-1 hover:ring-[#f15e1c]/50'
                  }`}
                />

                {/* Clickable Icon Target with Ambient Highlight */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedDept(dept);
                  }}
                  className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#f15e1c]/25 ring-1 ring-[#f15e1c]/70'
                      : 'group-hover:bg-[#f15e1c]/10'
                  }`}
                  title={`Click ${dept.name} icon`}
                />

                {/* Inspect Micro Badge */}
                <div
                  className={`absolute -top-2.5 right-2 px-2 py-0.5 rounded-full text-[8px] xl:text-[9px] font-heading font-extrabold flex items-center gap-1 transition-all duration-200 shadow-md ${
                    isActive
                      ? 'opacity-100 scale-100 bg-brand-orange text-white'
                      : 'opacity-0 scale-90 pointer-events-none'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  <span>Inspect</span>
                  <ChevronRight className="w-2.5 h-2.5" />
                </div>
              </div>
            );
          })}

          {/* ============================================================ */}
          {/* 4. INTERACTIVE COMPANY GOAL CARD HOTSPOT                     */}
          {/* ============================================================ */}
          <div
            onClick={() => setCompanyGoalModalOpen(true)}
            className="absolute z-20 rounded-2xl cursor-pointer group transition-all duration-200 active:scale-[0.98]"
            style={{
              left: '43.16%',
              top: '56.42%',
              width: '17.38%',
              height: '7.47%',
            }}
            title="Company Goal: Launch Product V2 (72%) - Click to inspect"
          >
            <div className="absolute inset-0 rounded-2xl transition-all duration-200 group-hover:ring-2 group-hover:ring-brand-green group-hover:bg-brand-green/15 group-hover:shadow-[0_0_24px_rgba(46,147,111,0.45)] pointer-events-none" />
            {/* Clickable Icon Target */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                setCompanyGoalModalOpen(true);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl group-hover:bg-brand-green/20 group-hover:ring-1 group-hover:ring-brand-green/60 transition-all cursor-pointer"
              title="Click Company Goal icon"
            />
            <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[8.5px] font-heading font-extrabold opacity-0 group-hover:opacity-100 transition-opacity bg-brand-green text-white shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              <span>Core Goal</span>
              <ChevronRight className="w-2.5 h-2.5" />
            </div>
          </div>

          {/* ============================================================ */}
          {/* 5. INTERACTIVE NOTIFICATION STACK HOTSPOTS                   */}
          {/* ============================================================ */}
          {NOTIFICATIONS.map((notif) => (
            <div
              key={notif.id}
              onClick={() => setActiveNotif(notif)}
              className="absolute z-20 rounded-xl cursor-pointer group transition-all duration-200 active:scale-[0.98]"
              style={{
                left: notif.left,
                top: notif.top,
                width: notif.width,
                height: notif.height,
              }}
              title={`Click to view ${notif.dept} activity update (${notif.action})`}
            >
              <div className="absolute inset-0 rounded-xl transition-all duration-200 group-hover:ring-2 group-hover:ring-brand-green group-hover:bg-brand-green/15 group-hover:shadow-[0_0_16px_rgba(46,147,111,0.35)] pointer-events-none" />
              {/* Notification icon click target */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveNotif(notif);
                }}
                className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg group-hover:bg-brand-green/20 group-hover:ring-1 group-hover:ring-brand-green/50 transition-all cursor-pointer"
                title={`Click ${notif.dept} notification icon`}
              />
            </div>
          ))}

          {/* ============================================================ */}
          {/* 6. FOUNDER SMARTPHONE HOTSPOT (BOTTOM-RIGHT)                 */}
          {/* ============================================================ */}
          <div
            onClick={() => setMobileSyncOpen(true)}
            className="absolute z-20 rounded-2xl cursor-pointer group transition-all duration-200 active:scale-[0.98]"
            style={{
              left: '77.6%',
              top: '55.56%',
              width: '10.25%',
              height: '20.83%',
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
              className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between gap-6 px-5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-peach/80 shadow-warm-lg text-xs"
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
          {/* ============================================================ */}
          {/* STRATEGIC EXECUTION PILLARS DOCK (FLOATING IN DESK SPACE)    */}
          {/* ============================================================ */}
          <div
            className="absolute z-25 pointer-events-auto"
            style={{
              left: '4%',
              right: '4%',
              bottom: '2.5%',
            }}
          >
            <div className="grid grid-cols-4 gap-3 xl:gap-4 max-w-[1560px] mx-auto">
              {/* 1. Goal-Driven Execution */}
              <div className="p-3 xl:p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(39,24,18,0.08)] hover:bg-white hover:border-[#f15e1c]/50 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-[#fceade] text-[#f15e1c] flex items-center justify-center shadow-warm-2xs group-hover:scale-105 transition-transform">
                    <Target className="w-4 h-4 text-[#f15e1c]" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-heading font-extrabold text-[#2e936f] bg-[#edf7f3] border border-[#2e936f]/30">
                    100% Rollup
                  </span>
                </div>
                <h4 className="font-heading font-extrabold text-xs xl:text-sm text-espresso group-hover:text-brand-orange transition-colors">
                  Goal-Driven Execution
                </h4>
                <p className="text-[11px] xl:text-xs text-terracotta leading-relaxed mt-0.5 line-clamp-2">
                  Every project, task, and daily milestone rolls up directly into company North Star goals.
                </p>
              </div>

              {/* 2. AI-Powered Planning */}
              <div className="p-3 xl:p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(39,24,18,0.08)] hover:bg-white hover:border-[#fab60a]/50 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-[#fef3dc] text-[#fab60a] flex items-center justify-center shadow-warm-2xs group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4 text-[#fab60a]" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-heading font-extrabold text-[#fab60a] bg-[#fef3dc] border border-[#fab60a]/30">
                    Predictive Mesh
                  </span>
                </div>
                <h4 className="font-heading font-extrabold text-xs xl:text-sm text-espresso group-hover:text-brand-orange transition-colors">
                  AI-Powered Planning
                </h4>
                <p className="text-[11px] xl:text-xs text-terracotta leading-relaxed mt-0.5 line-clamp-2">
                  Proactively detects project blockers, overdue tasks, and resource clashes before they cause delays.
                </p>
              </div>

              {/* 3. Real Progress Visibility */}
              <div className="p-3 xl:p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(39,24,18,0.08)] hover:bg-white hover:border-[#2e936f]/50 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-[#edf7f3] text-[#2e936f] flex items-center justify-center shadow-warm-2xs group-hover:scale-105 transition-transform">
                    <BarChart3 className="w-4 h-4 text-[#2e936f]" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-heading font-extrabold text-[#2e936f] bg-[#edf7f3] border border-[#2e936f]/30">
                    Real-Time Sync
                  </span>
                </div>
                <h4 className="font-heading font-extrabold text-xs xl:text-sm text-espresso group-hover:text-brand-orange transition-colors">
                  Real Progress Visibility
                </h4>
                <p className="text-[11px] xl:text-xs text-terracotta leading-relaxed mt-0.5 line-clamp-2">
                  Live automated updates across all departments eliminate subjective status calls and spreadsheets.
                </p>
              </div>

              {/* 4. Built for Founders */}
              <div className="p-3 xl:p-3.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgba(39,24,18,0.08)] hover:bg-white hover:border-[#f15e1c]/50 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-8 h-8 rounded-xl bg-[#fceade] text-[#f15e1c] flex items-center justify-center shadow-warm-2xs group-hover:scale-105 transition-transform">
                    <Users className="w-4 h-4 text-[#f15e1c]" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-heading font-extrabold text-[#f15e1c] bg-[#fceade] border border-[#f15e1c]/30">
                    Zero Friction
                  </span>
                </div>
                <h4 className="font-heading font-extrabold text-xs xl:text-sm text-espresso group-hover:text-brand-orange transition-colors">
                  Built for Founders
                </h4>
                <p className="text-[11px] xl:text-xs text-terracotta leading-relaxed mt-0.5 line-clamp-2">
                  Stay fully in control of cross-team execution with zero micromanagement or status meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET VIEW (<1024px): RESPONSIVE STACKED LAYOUT    */}
      {/* ============================================================ */}
      <div className="lg:hidden max-w-xl mx-auto px-4 sm:px-6 space-y-8 text-left pt-24 sm:pt-28 pb-12 bg-[#faf6f0]">
        {/* Brand Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf7f3] border border-[#2e936f]/30 shadow-warm-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e936f] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e936f]"></span>
          </span>
          <span className="text-[11px] font-heading font-extrabold tracking-widest text-[#2e936f] uppercase">
            FOUNDEROS WORKSPACE V4.8
          </span>
        </div>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-[36px] sm:text-[44px] font-extrabold text-[#271812] leading-[1.1] tracking-[-0.03em] font-heading">
            Your Entire Company<br />
            In <span className="text-[#f15e1c]">One View.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#5a4138] font-body leading-relaxed">
            Connect goals, teams, projects and daily work across every department. Get real progress, spot delays early, and run your company with clarity.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/product"
            className="inline-flex items-center justify-center gap-2 text-sm font-heading font-bold text-white bg-[#f15e1c] hover:bg-[#d94e10] px-6 py-3 rounded-full shadow-lg shadow-[#f15e1c]/30 transition-all cursor-pointer"
          >
            <Layers className="w-4.5 h-4.5 text-white" />
            <span>Explore FounderOS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 text-sm font-heading font-bold text-[#271812] bg-white px-5 py-3 rounded-full border border-brand-peach shadow-warm-sm cursor-pointer"
          >
            <Play className="w-4 h-4 text-[#271812] fill-[#271812]/15" />
            <span>See How It Works</span>
          </a>
        </div>

        {/* 4 Value Props */}
        <div className="pt-4 border-t border-brand-peach/40 grid grid-cols-2 gap-3 text-xs font-heading">
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

        {/* Panoramic Mobile Visual Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-warm-lg border border-brand-peach/60 aspect-[16/9]">
          <img
            src="/assets/hero_panoramic_clean_hq.png"
            alt="FounderOS Command Center"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Mobile Quick Department Switcher */}
        <div className="space-y-2">
          <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-terracotta-muted block">
            Tap Department to Inspect
          </span>
          <div className="grid grid-cols-3 gap-2">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept)}
                className="p-2.5 rounded-xl bg-white border border-brand-peach/60 shadow-warm-xs flex flex-col items-center gap-1 text-center cursor-pointer hover:border-brand-orange"
              >
                <dept.icon className={`w-4 h-4 ${dept.iconColor}`} />
                <span className="font-heading font-extrabold text-xs text-espresso">
                  {dept.name}
                </span>
                <span className="text-[10px] font-mono font-bold text-terracotta-muted">
                  {dept.progress}
                </span>
              </button>
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
