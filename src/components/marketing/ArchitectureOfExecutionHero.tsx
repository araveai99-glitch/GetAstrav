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
    left: '37.45%',
    top: '8.9%',
    width: '11.23%',
    height: '9.1%',
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
    left: '50.93%',
    top: '8.9%',
    width: '10.79%',
    height: '9.1%',
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
    left: '63.62%',
    top: '8.9%',
    width: '11.38%',
    height: '9.1%',
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
    left: '37.99%',
    top: '33.2%',
    width: '10.84%',
    height: '9.1%',
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
    left: '51.76%',
    top: '33.2%',
    width: '10.99%',
    height: '9.1%',
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
    left: '64.7%',
    top: '33.2%',
    width: '10.79%',
    height: '9.1%',
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
    left: '79.25%',
    top: '8.9%',
    width: '16.55%',
    height: '7.2%',
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
    left: '79.25%',
    top: '17.4%',
    width: '16.55%',
    height: '7.2%',
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
    left: '79.25%',
    top: '26.0%',
    width: '16.55%',
    height: '7.2%',
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
        <div className="relative w-full aspect-[2048/1000] overflow-hidden">
          {/* Panoramic 4K Clean Backdrop (Razor Sharp with Zero Artifacts) */}
          <img
            src="/assets/hero_panoramic_4k.png"
            alt="GetAstrav FounderOS Command Center 4K Ultra Quality Panoramic View"
            className="w-full h-full object-cover block select-none pointer-events-none"
            loading="eager"
            decoding="async"
          />

          {/* ============================================================ */}
          {/* DARK VIVID CONNECTING ARROWS & STRATEGIC FLOW PIPELINES      */}
          {/* ============================================================ */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 2048 1000"
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
              d="M 940 510 C 940 470, 888 470, 888 433"
              fill="none"
              stroke={isSalesActive || isProductActive || isGoalActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isSalesActive || isProductActive || isGoalActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isSalesActive || isProductActive || isGoalActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 940 510 C 940 470, 888 470, 888 433"
              fill="none"
              stroke={isSalesActive || isProductActive || isGoalActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 2. Flow: Company Goal -> HR */}
            <path
              d="M 1060 510 C 1060 470, 1172 470, 1172 433"
              fill="none"
              stroke={isHRActive || isEngActive || isGoalActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isHRActive || isEngActive || isGoalActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isHRActive || isEngActive || isGoalActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 1060 510 C 1060 470, 1172 470, 1172 433"
              fill="none"
              stroke={isHRActive || isEngActive || isGoalActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 3. Flow: Company Goal -> Finance */}
            <path
              d="M 1200 510 C 1220 470, 1436 470, 1436 433"
              fill="none"
              stroke={isFinanceActive || isMktActive || isGoalActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isFinanceActive || isMktActive || isGoalActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isFinanceActive || isMktActive || isGoalActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 1200 510 C 1220 470, 1436 470, 1436 433"
              fill="none"
              stroke={isFinanceActive || isMktActive || isGoalActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 4. Flow: Sales -> Product */}
            <path
              d="M 888 332 C 888 260, 882 250, 882 182"
              fill="none"
              stroke={isSalesActive || isProductActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isSalesActive || isProductActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isSalesActive || isProductActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 888 332 C 888 260, 882 250, 882 182"
              fill="none"
              stroke={isSalesActive || isProductActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 5. Flow: HR -> Engineering */}
            <path
              d="M 1172 332 C 1172 260, 1153 250, 1153 182"
              fill="none"
              stroke={isHRActive || isEngActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isHRActive || isEngActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isHRActive || isEngActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 1172 332 C 1172 260, 1153 250, 1153 182"
              fill="none"
              stroke={isHRActive || isEngActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 6. Flow: Finance -> Marketing */}
            <path
              d="M 1436 332 C 1436 260, 1420 250, 1420 182"
              fill="none"
              stroke={isFinanceActive || isMktActive ? '#15803d' : '#0d5c34'}
              strokeWidth={isFinanceActive || isMktActive ? '4.5' : '3.5'}
              filter="url(#emerald-glow)"
              markerEnd={isFinanceActive || isMktActive ? 'url(#arrow-active-green)' : 'url(#arrow-dark-green)'}
            />
            <path
              d="M 1436 332 C 1436 260, 1420 250, 1420 182"
              fill="none"
              stroke={isFinanceActive || isMktActive ? '#4ade80' : '#22c55e'}
              strokeWidth="2"
              strokeDasharray="6 8"
              className="animate-dash-flow opacity-90"
            />

            {/* 7. Stream: Marketing -> Marketing Activity Notification */}
            <path
              d="M 1536 135 C 1565 135, 1590 135, 1618 135"
              fill="none"
              stroke="#b45309"
              strokeWidth="2.5"
              strokeDasharray="4 6"
              markerEnd="url(#arrow-amber)"
            />

            {/* 8. Notification Activity Spine: Notif 1 -> Notif 2 */}
            <path
              d="M 1660 162 L 1660 174"
              fill="none"
              stroke="#b45309"
              strokeWidth="2"
              strokeDasharray="3 3"
              markerEnd="url(#arrow-amber)"
            />

            {/* 9. Notification Activity Spine: Notif 2 -> Notif 3 */}
            <path
              d="M 1660 252 L 1660 260"
              fill="none"
              stroke="#0d5c34"
              strokeWidth="2"
              strokeDasharray="3 3"
              markerEnd="url(#arrow-dark-green)"
            />
          </svg>

          {/* ============================================================ */}
          {/* 1. LEFT COLUMN: EDITORIAL COPY & CTAs OVERLAY                */}
          {/* ============================================================ */}
          <div
            className="absolute z-20 flex flex-col justify-between"
            style={{
              left: '5.5%',
              top: '6%',
              bottom: '22%',
              width: '28.5%',
            }}
          >
            {/* Top: Green Badge & Headline */}
            <div className="space-y-3.5 xl:space-y-5">
              <MotionWrapper direction="down">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf7f3] border border-[#2e936f]/30 shadow-warm-2xs">
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
                <h1 className="text-[34px] xl:text-[44px] 2xl:text-[50px] font-extrabold text-[#271812] leading-[1.07] tracking-[-0.03em] font-heading">
                  Your Entire<br />
                  Company<br />
                  In <span className="text-[#f15e1c]">One View.</span>
                </h1>
              </MotionWrapper>
            </div>

            {/* Middle: Subtitle & CTA Buttons */}
            <div className="space-y-4 xl:space-y-5">
              <p className="text-xs xl:text-sm text-[#5a4138] font-body leading-relaxed max-w-sm">
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
                  className="inline-flex items-center justify-center gap-2 text-xs xl:text-sm font-heading font-bold text-[#271812] bg-white hover:bg-brand-orange-light px-4 xl:px-5 py-2.5 xl:py-3 rounded-full border border-brand-peach transition-all hover:border-[#f15e1c] hover:text-[#f15e1c] shadow-warm-sm cursor-pointer"
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
            style={{ left: '31.8%', top: '19.28%' }}
            title="Strategic Alignment Flow"
          >
            <ArrowRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>

          {/* ============================================================ */}
          {/* 3. SHARP, HIGH-DEFINITION DEPARTMENT CARDS                   */}
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
                className={`absolute z-20 rounded-xl xl:rounded-2xl cursor-pointer transition-all duration-200 select-none bg-white border ${
                  isActive
                    ? 'border-[#f15e1c] shadow-[0_12px_28px_rgba(241,94,28,0.35),0_4px_10px_rgba(0,0,0,0.08)] ring-2 ring-[#f15e1c] scale-[1.03]'
                    : 'border-black/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.16)] hover:border-[#f15e1c]/50 hover:scale-[1.02]'
                } flex flex-col justify-between p-2 sm:p-2.5 xl:p-3 overflow-hidden group`}
                style={{
                  left: dept.left,
                  top: dept.top,
                  width: dept.width,
                  height: dept.height,
                }}
                title={`Click ${dept.name} to inspect (${dept.progress} - ${dept.statusText})`}
              >
                {/* Top Row: Icon + Name + Chevron */}
                <div className="flex items-center justify-between gap-1 xl:gap-1.5 w-full">
                  <div className="flex items-center gap-1.5 xl:gap-2 min-w-0">
                    <div
                      className={`w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-md xl:rounded-lg ${dept.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      <dept.icon className={`w-3 h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 ${dept.iconColor}`} />
                    </div>
                    <span className="font-heading font-extrabold text-[#271812] text-[11px] xl:text-[13px] 2xl:text-[14px] tracking-tight leading-none truncate">
                      {dept.name}
                    </span>
                  </div>
                  <ChevronRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-gray-400 group-hover:text-[#f15e1c] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>

                {/* Bottom Row: Metric % + Progress Bar + Sparkline */}
                <div className="flex items-end justify-between gap-1 xl:gap-2 w-full pt-0.5">
                  <div className="flex flex-col justify-end gap-1 flex-1 min-w-0">
                    <span className="font-heading font-extrabold text-[#271812] text-[11px] xl:text-[13px] 2xl:text-[14px] leading-none">
                      {dept.progress}
                    </span>
                    {/* Progress pill */}
                    <div className="h-1.5 xl:h-2 w-full max-w-[55px] xl:max-w-[70px] 2xl:max-w-[85px] bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${dept.barColor} rounded-full transition-all duration-300`}
                        style={{ width: dept.progress }}
                      />
                    </div>
                  </div>

                  {/* Sparkline Vector */}
                  <div className="shrink-0 flex items-center justify-end">
                    <svg
                      className="w-8 h-3.5 xl:w-10 xl:h-4.5 2xl:w-12 2xl:h-5 overflow-visible"
                      viewBox="0 0 36 16"
                      fill="none"
                    >
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
          {/* 4. SHARP, HIGH-DEFINITION COMPANY GOAL CARD                  */}
          {/* ============================================================ */}
          <div
            onClick={() => setCompanyGoalModalOpen(true)}
            className="absolute z-20 rounded-xl xl:rounded-2xl cursor-pointer transition-all duration-200 select-none bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.14),0_2px_6px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_28px_rgba(46,147,111,0.3)] hover:border-[#2e936f] hover:scale-[1.02] p-2 xl:p-2.5 2xl:p-3 flex flex-col justify-between group overflow-hidden"
            style={{
              left: '43.16%',
              top: '51.0%',
              width: '17.38%',
              height: '8.6%',
            }}
            title="Company Goal: Launch Product V2 (72%) - Click to inspect"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5 xl:gap-2 min-w-0">
                <div className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-md xl:rounded-lg bg-[#fceade] flex items-center justify-center shrink-0">
                  <Target className="w-3 h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 text-[#f15e1c]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[8.5px] xl:text-[9.5px] font-heading font-bold text-[#2e936f] leading-none mb-0.5 uppercase tracking-wider">
                    Company Goal
                  </div>
                  <div className="font-heading font-extrabold text-[#271812] text-[11px] xl:text-[12px] 2xl:text-[13px] leading-tight truncate">
                    Launch Product V2
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 xl:gap-1.5 shrink-0">
                <span className="font-heading font-extrabold text-[#2e936f] text-xs xl:text-sm 2xl:text-base">
                  72%
                </span>
                <ChevronRight className="w-3 h-3 xl:w-3.5 xl:h-3.5 text-gray-400 group-hover:text-[#2e936f] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            {/* Full width Progress Bar */}
            <div className="w-full h-1.5 xl:h-2 bg-gray-100 rounded-full overflow-hidden mt-1">
              <div
                className="h-full bg-gradient-to-r from-[#2e936f] to-[#34d399] rounded-full transition-all duration-500"
                style={{ width: '72%' }}
              />
            </div>
          </div>

          {/* ============================================================ */}
          {/* 5. SHARP, HIGH-DEFINITION NOTIFICATION STACK                 */}
          {/* ============================================================ */}
          {NOTIFICATIONS.map((notif) => (
            <div
              key={notif.id}
              onClick={() => setActiveNotif(notif)}
              className="absolute z-20 rounded-xl xl:rounded-2xl cursor-pointer transition-all duration-200 select-none bg-white border border-black/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_24px_rgba(0,0,0,0.15)] hover:border-brand-orange/60 hover:scale-[1.02] p-2 xl:p-2.5 2xl:p-3 flex items-center justify-between group overflow-hidden"
              style={{
                left: notif.left,
                top: notif.top,
                width: notif.width,
                height: notif.height,
              }}
              title={`Click to view ${notif.dept} update (${notif.action})`}
            >
              {/* Left: Icon + Text */}
              <div className="flex items-center gap-2 xl:gap-2.5 min-w-0">
                <div
                  className={`w-6 h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 rounded-lg xl:rounded-xl ${notif.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                >
                  <notif.icon className={`w-3.5 h-3.5 xl:w-4 xl:h-4 ${notif.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <h5 className="font-heading font-extrabold text-[#271812] text-[11px] xl:text-[12px] 2xl:text-[13px] leading-tight truncate">
                    {notif.dept}
                  </h5>
                  <p className="text-[9.5px] xl:text-[10.5px] 2xl:text-[11px] text-gray-500 font-medium leading-none mt-0.5 truncate">
                    {notif.action}
                  </p>
                </div>
              </div>

              {/* Right: Badge & Timestamp */}
              <div className="flex flex-col items-end shrink-0 gap-0.5">
                {notif.isCheck ? (
                  <CheckCircle2 className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#2e936f] fill-[#2e936f]/15" />
                ) : (
                  <AlertTriangle className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#ea580c] fill-[#ea580c]/15" />
                )}
                <span
                  className={`text-[8.5px] xl:text-[9.5px] font-heading font-bold ${
                    notif.isCheck ? 'text-[#2e936f]' : 'text-[#ea580c]'
                  }`}
                >
                  {notif.time}
                </span>
              </div>
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
              top: '49.9%',
              width: '10.25%',
              height: '24.2%',
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
      {/* STRATEGIC EXECUTION PILLARS DOCK (PAGE BOTTOM FOLD)          */}
      {/* ============================================================ */}
      <div className="w-full bg-[#fdfbf7] border-t border-brand-peach/60 py-6 sm:py-8 px-4 sm:px-6 lg:px-12 select-none shadow-[0_-4px_24px_rgba(39,24,18,0.03)]">
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
              <p className="text-xs text-terracotta leading-relaxed mt-1">
                Every project, task, and daily milestone rolls up directly into company North Star goals.
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
              <p className="text-xs text-terracotta leading-relaxed mt-1">
                Proactively detects project blockers, overdue tasks, and resource clashes before they cause delays.
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
              <p className="text-xs text-terracotta leading-relaxed mt-1">
                Unfiltered live velocity across Product, Engineering, Marketing, Sales, HR & Finance.
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
              <p className="text-xs text-terracotta leading-relaxed mt-1">
                Stay fully in control of cross-team execution with zero micromanagement or status meetings.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET VIEW (<1024px): RESPONSIVE STACKED LAYOUT    */}
      {/* ============================================================ */}
      <div className="lg:hidden max-w-xl mx-auto px-4 sm:px-6 space-y-8 text-left pb-12">
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
