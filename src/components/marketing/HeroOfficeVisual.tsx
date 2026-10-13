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
  Smartphone,
  Check,
  Laptop,
} from 'lucide-react';

interface DepartmentData {
  id: string;
  name: string;
  progress: string;
  progressNum: number;
  status: 'on_track' | 'attention' | 'optimal';
  statusText: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  barColor: string;
  sparklineColor: string;
  sparklinePath: string;
  xPct: number;
  yPct: number;
  milestones: string;
  head: string;
  activeTasks: number;
  keyObjectives: string[];
}

const DEPARTMENTS: DepartmentData[] = [
  {
    id: 'product',
    name: 'Product',
    progress: '78%',
    progressNum: 78,
    status: 'on_track',
    statusText: 'On Track',
    icon: Package,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 13 Q 15 14 30 8 T 58 3',
    xPct: 15,
    yPct: 15,
    milestones: '3/4 Milestones Completed',
    head: 'Elena Vance (VP Product)',
    activeTasks: 14,
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
    status: 'attention',
    statusText: '2 Overdue Tasks',
    icon: Code,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 13 Q 18 10 32 11 T 58 4',
    xPct: 45,
    yPct: 15,
    milestones: '4/6 Milestones Completed',
    head: 'Marcus Thorne (CTO)',
    activeTasks: 22,
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
    status: 'attention',
    statusText: 'Campaign Live',
    icon: Megaphone,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#f15e1c]',
    sparklineColor: '#f15e1c',
    sparklinePath: 'M 2 14 Q 15 15 30 11 T 58 6',
    xPct: 75,
    yPct: 15,
    milestones: '2/4 Milestones Completed',
    head: 'Sarah Jenkins (Growth Lead)',
    activeTasks: 9,
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
    status: 'on_track',
    statusText: 'On Track',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 13 Q 18 13 32 8 T 58 3',
    xPct: 15,
    yPct: 48,
    milestones: '3/5 Milestones Completed',
    head: 'Priya Roy (Head of Revenue)',
    activeTasks: 18,
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
    status: 'optimal',
    statusText: 'All Onboarded',
    icon: Users,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 14 Q 15 12 30 7 T 58 2',
    xPct: 45,
    yPct: 48,
    milestones: '4/4 Milestones Completed',
    head: 'Devon Lee (People Operations)',
    activeTasks: 6,
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
    status: 'on_track',
    statusText: 'Runway Clear',
    icon: Coins,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 13 Q 18 12 34 9 T 58 5',
    xPct: 75,
    yPct: 48,
    milestones: '2/4 Milestones Completed',
    head: 'Arthur Pendelton (Finance VP)',
    activeTasks: 8,
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
}

const NOTIFICATIONS: NotificationData[] = [
  {
    id: 'notif-1',
    dept: 'Marketing',
    action: 'Campaign launched',
    time: '2 min ago',
    type: 'success',
  },
  {
    id: 'notif-2',
    dept: 'Engineering',
    action: '2 tasks overdue',
    time: '12 min ago',
    type: 'alert',
  },
  {
    id: 'notif-3',
    dept: 'Sales',
    action: 'Deal stage updated',
    time: '25 min ago',
    type: 'success',
  },
];

export const HeroOfficeVisual: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentData | null>(null);
  const [hoveredDeptId, setHoveredDeptId] = useState<string | null>(null);
  const [activeNotifId, setActiveNotifId] = useState<string | null>(null);
  const [phoneSelected, setPhoneSelected] = useState<boolean>(false);

  return (
    <div className="relative w-full max-w-[940px] mx-auto select-none py-2 lg:py-6">
      {/* Dynamic Ambient Radiant Glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
        <div className="absolute -top-12 -right-8 w-96 h-96 rounded-full bg-gradient-to-tr from-[#fab60a]/20 via-[#ffec69]/25 to-transparent blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#f15e1c]/15 via-[#f7d7b0]/20 to-transparent blur-3xl" />
      </div>

      {/* ============================================================ */}
      {/* 1. ARCHITECTURAL ISOMETRIC OFFICE COMMAND SCENE (CODE-BUILT) */}
      {/* ============================================================ */}
      <div className="relative w-full aspect-[16/11] sm:aspect-[16/10.5] rounded-3xl overflow-hidden bg-gradient-to-b from-[#fff6ed] via-[#fbf2ea] to-[#f4e1d2] shadow-2xl border border-brand-peach/40">
        
        {/* Background City Skyline & Glass Windows */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 660"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff8f2" />
              <stop offset="60%" stopColor="#fee9d6" />
              <stop offset="100%" stopColor="#f7d4bb" />
            </linearGradient>
            <linearGradient id="windowGlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f15e1c" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#fab60a" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="floorGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#fbe7d5" />
            </linearGradient>
            <linearGradient id="floorGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fffdf9" />
              <stop offset="100%" stopColor="#f5dcbe" />
            </linearGradient>
            <linearGradient id="mahoganyDesk" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3d2117" />
              <stop offset="50%" stopColor="#2c160f" />
              <stop offset="100%" stopColor="#1e0e09" />
            </linearGradient>
            <linearGradient id="brassPlate" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#fab60a" />
              <stop offset="50%" stopColor="#ffec69" />
              <stop offset="100%" stopColor="#d89608" />
            </linearGradient>
            <linearGradient id="beamGreenLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2e936f" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f15e1c" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="beamOrangeLine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fab60a" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#f15e1c" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Sky Backdrop */}
          <rect width="1000" height="660" fill="url(#skyGrad)" />

          {/* Golden Hour Distant Skyscrapers */}
          <g opacity="0.45">
            <rect x="740" y="80" width="45" height="240" fill="#f0be9b" rx="2" />
            <rect x="800" y="120" width="35" height="200" fill="#ebb18a" rx="2" />
            <rect x="850" y="60" width="55" height="260" fill="#f3c5a4" rx="2" />
            <rect x="920" y="110" width="40" height="210" fill="#ebb18a" rx="2" />
            {/* Tiny Window lights */}
            <circle cx="760" cy="110" r="1.5" fill="#fff" opacity="0.8" />
            <circle cx="760" cy="130" r="1.5" fill="#fff" opacity="0.8" />
            <circle cx="870" cy="90" r="1.5" fill="#fff" opacity="0.8" />
            <circle cx="880" cy="130" r="1.5" fill="#fff" opacity="0.8" />
          </g>

          {/* Floor-to-Ceiling Glass Wall Structural Mullions */}
          <g stroke="#e2b998" strokeWidth="2.5" opacity="0.7">
            <line x1="120" y1="0" x2="120" y2="450" />
            <line x1="320" y1="0" x2="320" y2="450" />
            <line x1="520" y1="0" x2="520" y2="450" />
            <line x1="720" y1="0" x2="720" y2="450" />
            <line x1="900" y1="0" x2="900" y2="450" />
          </g>

          {/* ========================================================== */}
          {/* ISOMETRIC OFFICE FLOORS & ARCHITECTURAL STRUCTURE          */}
          {/* ========================================================== */}

          {/* --- FLOOR 3 (TOP TIER: Product & Engineering Terraces) --- */}
          <g id="floor-3">
            {/* Floor Slab */}
            <path
              d="M 40 180 L 960 180 L 920 205 L 80 205 Z"
              fill="url(#floorGrad1)"
              stroke="#e4bf9d"
              strokeWidth="1.5"
            />
            {/* Glass Railing */}
            <path
              d="M 80 160 L 920 160 L 920 205 L 80 205 Z"
              fill="rgba(255,255,255,0.4)"
              stroke="rgba(247,215,176,0.9)"
              strokeWidth="1.5"
            />
            {/* Structural Railing Posts */}
            <line x1="200" y1="160" x2="200" y2="205" stroke="#e4bf9d" strokeWidth="1.5" />
            <line x1="400" y1="160" x2="400" y2="205" stroke="#e4bf9d" strokeWidth="1.5" />
            <line x1="600" y1="160" x2="600" y2="205" stroke="#e4bf9d" strokeWidth="1.5" />
            <line x1="800" y1="160" x2="800" y2="205" stroke="#e4bf9d" strokeWidth="1.5" />

            {/* Workstations / Desks on Floor 3 */}
            {/* Pod 1 (Product) */}
            <g transform="translate(100, 105)">
              {/* Desk */}
              <rect x="0" y="25" width="80" height="28" rx="4" fill="#ffffff" stroke="#e4bf9d" />
              {/* Monitors */}
              <rect x="15" y="10" width="22" height="15" rx="2" fill="#3d261e" />
              <rect x="42" y="10" width="22" height="15" rx="2" fill="#3d261e" />
              {/* Glowing Monitor Screens */}
              <rect x="16" y="11" width="20" height="13" rx="1" fill="#fef2eb" />
              <rect x="43" y="11" width="20" height="13" rx="1" fill="#edf7f3" />
              {/* Team Members Stylized */}
              <circle cx="26" cy="38" r="7" fill="#f15e1c" opacity="0.9" />
              <circle cx="53" cy="38" r="7" fill="#fab60a" opacity="0.9" />
              {/* Indoor Plant */}
              <circle cx="-15" cy="30" r="10" fill="#2e936f" opacity="0.8" />
              <circle cx="-12" cy="22" r="8" fill="#3cb388" opacity="0.9" />
            </g>

            {/* Pod 2 (Engineering) */}
            <g transform="translate(380, 105)">
              <rect x="0" y="25" width="90" height="28" rx="4" fill="#ffffff" stroke="#e4bf9d" />
              <rect x="15" y="8" width="26" height="17" rx="2" fill="#3d261e" />
              <rect x="46" y="8" width="26" height="17" rx="2" fill="#3d261e" />
              <rect x="16.5" y="9.5" width="23" height="14" rx="1" fill="#2a1a14" />
              {/* Code lines on monitor */}
              <line x1="20" y1="13" x2="35" y2="13" stroke="#fab60a" strokeWidth="1.5" />
              <line x1="20" y1="16" x2="32" y2="16" stroke="#2e936f" strokeWidth="1.5" />
              <line x1="20" y1="19" x2="37" y2="19" stroke="#f15e1c" strokeWidth="1.5" />
              <rect x="47.5" y="9.5" width="23" height="14" rx="1" fill="#fef8f0" />
              <circle cx="28" cy="38" r="7" fill="#2e936f" opacity="0.9" />
              <circle cx="59" cy="38" r="7" fill="#fab60a" opacity="0.9" />
            </g>

            {/* Pod 3 (Marketing) */}
            <g transform="translate(660, 105)">
              <rect x="0" y="25" width="80" height="28" rx="4" fill="#ffffff" stroke="#e4bf9d" />
              <rect x="25" y="10" width="30" height="15" rx="2" fill="#3d261e" />
              <rect x="26.5" y="11.5" width="27" height="12" rx="1" fill="#fef2eb" />
              {/* Marketing bar chart on screen */}
              <line x1="30" y1="20" x2="30" y2="15" stroke="#f15e1c" strokeWidth="2" />
              <line x1="35" y1="20" x2="35" y2="13" stroke="#fab60a" strokeWidth="2" />
              <line x1="40" y1="20" x2="40" y2="16" stroke="#2e936f" strokeWidth="2" />
              <circle cx="40" cy="38" r="7" fill="#f15e1c" opacity="0.9" />
              <circle cx="95" cy="30" r="10" fill="#2e936f" opacity="0.8" />
            </g>
          </g>

          {/* --- FLOOR 2 (MIDDLE TIER: Sales, HR, Finance) --- */}
          <g id="floor-2">
            {/* Floor Slab */}
            <path
              d="M 30 380 L 970 380 L 920 410 L 80 410 Z"
              fill="url(#floorGrad2)"
              stroke="#deb28c"
              strokeWidth="1.5"
            />
            {/* Glass Railing */}
            <path
              d="M 80 355 L 920 355 L 920 410 L 80 410 Z"
              fill="rgba(255,255,255,0.45)"
              stroke="rgba(247,215,176,0.95)"
              strokeWidth="1.5"
            />
            <line x1="200" y1="355" x2="200" y2="410" stroke="#deb28c" strokeWidth="1.5" />
            <line x1="400" y1="355" x2="400" y2="410" stroke="#deb28c" strokeWidth="1.5" />
            <line x1="600" y1="355" x2="600" y2="410" stroke="#deb28c" strokeWidth="1.5" />
            <line x1="800" y1="355" x2="800" y2="410" stroke="#deb28c" strokeWidth="1.5" />

            {/* Pod 4 (Sales) */}
            <g transform="translate(100, 305)">
              <rect x="0" y="25" width="80" height="28" rx="4" fill="#ffffff" stroke="#deb28c" />
              <rect x="25" y="10" width="30" height="15" rx="2" fill="#3d261e" />
              <rect x="26.5" y="11.5" width="27" height="12" rx="1" fill="#edf7f3" />
              <circle cx="40" cy="38" r="7" fill="#2e936f" opacity="0.9" />
              <circle cx="-15" cy="30" r="11" fill="#2e936f" opacity="0.85" />
            </g>

            {/* Pod 5 (HR) */}
            <g transform="translate(380, 305)">
              {/* Meeting Round Table */}
              <ellipse cx="45" cy="32" rx="40" ry="16" fill="#ffffff" stroke="#deb28c" />
              <circle cx="20" cy="28" r="6" fill="#2e936f" opacity="0.9" />
              <circle cx="45" cy="18" r="6" fill="#fab60a" opacity="0.9" />
              <circle cx="70" cy="28" r="6" fill="#f15e1c" opacity="0.9" />
            </g>

            {/* Pod 6 (Finance) */}
            <g transform="translate(660, 305)">
              <rect x="0" y="25" width="80" height="28" rx="4" fill="#ffffff" stroke="#deb28c" />
              <rect x="25" y="10" width="30" height="15" rx="2" fill="#3d261e" />
              <rect x="26.5" y="11.5" width="27" height="12" rx="1" fill="#fef8ec" />
              <circle cx="40" cy="38" r="7" fill="#fab60a" opacity="0.9" />
              <circle cx="95" cy="30" r="10" fill="#2e936f" opacity="0.85" />
            </g>
          </g>

          {/* ========================================================== */}
          {/* FOREGROUND EXECUTIVE DESK (FOUNDER & CEO COMMAND COCKPIT) */}
          {/* ========================================================== */}
          <g id="founder-cockpit">
            {/* Rich Solid Mahogany Desk Surface in Foreground */}
            <path
              d="M 0 540 L 1000 540 L 1000 660 L 0 660 Z"
              fill="url(#mahoganyDesk)"
              stroke="#4a2a1e"
              strokeWidth="2"
            />
            {/* Desk Surface Highlight Reflection */}
            <path
              d="M 0 540 L 1000 540 L 1000 546 L 0 546 Z"
              fill="rgba(255,255,255,0.15)"
            />

            {/* Brass Desk Nameplate: FOUNDER / CEO */}
            <g transform="translate(320, 560)">
              {/* Plate Base */}
              <rect x="0" y="0" width="130" height="26" rx="4" fill="#140a06" stroke="#fab60a" strokeWidth="1" />
              <rect x="4" y="3" width="122" height="20" rx="2" fill="url(#brassPlate)" />
              <text
                x="65"
                y="17"
                fill="#2a150c"
                fontFamily="system-ui, sans-serif"
                fontSize="9"
                fontWeight="900"
                letterSpacing="1.8"
                textAnchor="middle"
              >
                FOUNDER / CEO
              </text>
            </g>

            {/* Ceramic Coffee Mug with GetAstrav Logo */}
            <g transform="translate(480, 555)">
              <rect x="0" y="5" width="26" height="34" rx="4" fill="#ffffff" stroke="#deb28c" />
              <path d="M 26 12 C 34 12 34 30 26 30" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
              {/* Mug Logo (3 stacked orange layers) */}
              <rect x="7" y="16" width="12" height="2.5" rx="1" fill="#f15e1c" />
              <rect x="7" y="20" width="12" height="2.5" rx="1" fill="#f15e1c" />
              <rect x="7" y="24" width="12" height="2.5" rx="1" fill="#f15e1c" />
            </g>

            {/* Dual Display Executive Laptop on Desk */}
            <g transform="translate(530, 520)">
              {/* Base */}
              <rect x="0" y="38" width="90" height="6" rx="2" fill="#d8d8d8" stroke="#888" strokeWidth="0.5" />
              {/* Open Screen Lid */}
              <polygon points="5,5 85,5 88,38 2,38" fill="#1f1f1f" />
              <polygon points="7,7 83,7 86,36 4,36" fill="#fbf5ee" />
              {/* Real-time Charts on Screen */}
              <line x1="12" y1="30" x2="25" y2="20" stroke="#f15e1c" strokeWidth="1.5" />
              <line x1="25" y1="20" x2="45" y2="25" stroke="#f15e1c" strokeWidth="1.5" />
              <line x1="45" y1="25" x2="75" y2="14" stroke="#2e936f" strokeWidth="2" />
            </g>

            {/* FOUNDER FIGURE (Viewed from Behind in Executive Suit) */}
            <g id="founder-silhouette" transform="translate(680, 480)">
              {/* Shoulders & Suit Jacket */}
              <path
                d="M 0 180 C 10 120 40 85 85 70 C 130 85 160 120 170 180 Z"
                fill="#161e2e"
              />
              {/* White Shirt Collar */}
              <polygon points="75,70 85,85 95,70 85,65" fill="#ffffff" />
              {/* Head & Hair */}
              <circle cx="85" cy="45" r="28" fill="#2c1a14" />
              <path d="M 60 45 C 60 20 110 20 110 45 C 105 50 65 50 60 45 Z" fill="#1b100c" />
            </g>
          </g>

          {/* ========================================================== */}
          {/* FLOWING FIBER-OPTIC PULSE LINES STREAMING TO PHONE         */}
          {/* ========================================================== */}
          <g id="data-streams">
            {/* Stream 1: Product to Phone */}
            <path
              d="M 190 220 C 260 360 480 480 690 535"
              fill="none"
              stroke={hoveredDeptId === 'product' ? '#f15e1c' : 'url(#beamGreenLine)'}
              strokeWidth={hoveredDeptId === 'product' ? '2.5' : '1.5'}
              strokeDasharray="4 3"
              className="animate-pulse"
            />
            {/* Stream 2: Engineering to Phone */}
            <path
              d="M 450 220 C 500 360 560 480 690 535"
              fill="none"
              stroke={hoveredDeptId === 'engineering' ? '#f15e1c' : 'url(#beamOrangeLine)'}
              strokeWidth={hoveredDeptId === 'engineering' ? '2.5' : '1.5'}
              strokeDasharray="4 3"
              className="animate-pulse"
            />
            {/* Stream 3: Sales to Phone */}
            <path
              d="M 190 420 C 320 460 500 500 690 538"
              fill="none"
              stroke={hoveredDeptId === 'sales' ? '#f15e1c' : 'url(#beamGreenLine)'}
              strokeWidth={hoveredDeptId === 'sales' ? '2.5' : '1.5'}
              strokeDasharray="4 3"
              className="animate-pulse"
            />
            {/* Stream 4: HR to Phone */}
            <path
              d="M 450 420 C 540 460 620 500 690 538"
              fill="none"
              stroke={hoveredDeptId === 'hr' ? '#f15e1c' : 'url(#beamGreenLine)'}
              strokeWidth={hoveredDeptId === 'hr' ? '2.5' : '1.5'}
              strokeDasharray="4 3"
              className="animate-pulse"
            />
          </g>
        </svg>

        {/* ============================================================ */}
        {/* 2. REAL CRISP FLOATING DEPARTMENT GLASS CARDS (LAYER 3)      */}
        {/* ============================================================ */}
        <div className="absolute inset-0 pointer-events-auto">
          {/* ROW 1: Product, Engineering, Marketing */}
          <div className="absolute top-[3%] left-[2%] right-[2%] flex items-center justify-between gap-2 sm:gap-4 px-2">
            {DEPARTMENTS.slice(0, 3).map((dept) => {
              const Icon = dept.icon;
              const isHovered = hoveredDeptId === dept.id;

              return (
                <motion.div
                  key={dept.id}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => setHoveredDeptId(dept.id)}
                  onMouseLeave={() => setHoveredDeptId(null)}
                  onClick={() => setSelectedDept(dept)}
                  className={`flex-1 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white shadow-[0_8px_20px_rgba(42,26,20,0.12)] cursor-pointer transition-all duration-300 group ${
                    isHovered
                      ? 'ring-2 ring-brand-orange shadow-glow-orange border-brand-orange/40'
                      : 'hover:border-brand-peach'
                  }`}
                  title={`Inspect ${dept.name} execution metrics`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg ${dept.iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${dept.iconColor}`} />
                      </div>
                      <span className="font-heading font-extrabold text-[11px] sm:text-xs text-espresso group-hover:text-brand-orange transition-colors truncate">
                        {dept.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-terracotta-muted group-hover:text-brand-orange transition-colors shrink-0" />
                  </div>

                  <div className="flex items-center justify-between gap-1 mt-0.5">
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-espresso">
                      {dept.progress}
                    </span>
                    <svg className="w-12 sm:w-16 h-3.5 sm:h-4 overflow-visible" viewBox="0 0 60 16" fill="none">
                      <path
                        d={dept.sparklinePath}
                        stroke={dept.sparklineColor}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-brand-peach/30 mt-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${dept.barColor} transition-all duration-500`}
                      style={{ width: dept.progress }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ROW 2: Sales, HR, Finance */}
          <div className="absolute top-[38%] left-[2%] right-[2%] flex items-center justify-between gap-2 sm:gap-4 px-2">
            {DEPARTMENTS.slice(3, 6).map((dept) => {
              const Icon = dept.icon;
              const isHovered = hoveredDeptId === dept.id;

              return (
                <motion.div
                  key={dept.id}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => setHoveredDeptId(dept.id)}
                  onMouseLeave={() => setHoveredDeptId(null)}
                  onClick={() => setSelectedDept(dept)}
                  className={`flex-1 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-white shadow-[0_8px_20px_rgba(42,26,20,0.12)] cursor-pointer transition-all duration-300 group ${
                    isHovered
                      ? 'ring-2 ring-brand-orange shadow-glow-orange border-brand-orange/40'
                      : 'hover:border-brand-peach'
                  }`}
                  title={`Inspect ${dept.name} execution metrics`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg ${dept.iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${dept.iconColor}`} />
                      </div>
                      <span className="font-heading font-extrabold text-[11px] sm:text-xs text-espresso group-hover:text-brand-orange transition-colors truncate">
                        {dept.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 text-terracotta-muted group-hover:text-brand-orange transition-colors shrink-0" />
                  </div>

                  <div className="flex items-center justify-between gap-1 mt-0.5">
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-espresso">
                      {dept.progress}
                    </span>
                    <svg className="w-12 sm:w-16 h-3.5 sm:h-4 overflow-visible" viewBox="0 0 60 16" fill="none">
                      <path
                        d={dept.sparklinePath}
                        stroke={dept.sparklineColor}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-brand-peach/30 mt-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${dept.barColor} transition-all duration-500`}
                      style={{ width: dept.progress }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ============================================================ */}
          {/* 3. FLOATING ACTIVITY NOTIFICATIONS (TOP RIGHT)               */}
          {/* ============================================================ */}
          <div className="absolute top-[20%] right-[3%] space-y-2 max-w-[190px] sm:max-w-[210px] hidden sm:block z-25">
            {NOTIFICATIONS.map((notif) => (
              <motion.div
                key={notif.id}
                whileHover={{ scale: 1.04, x: -3 }}
                onClick={() => setActiveNotifId(activeNotifId === notif.id ? null : notif.id)}
                className="bg-white/95 backdrop-blur-md rounded-xl p-2 border border-white shadow-[0_6px_16px_rgba(42,26,20,0.12)] cursor-pointer group flex items-center justify-between gap-2"
                title="Click to view update"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  <div className="w-5 h-5 rounded-md bg-brand-orange-light flex items-center justify-center shrink-0">
                    {notif.dept === 'Marketing' && <Megaphone className="w-3 h-3 text-brand-orange" />}
                    {notif.dept === 'Engineering' && <Code className="w-3 h-3 text-amber-600" />}
                    {notif.dept === 'Sales' && <BarChart3 className="w-3 h-3 text-brand-green" />}
                  </div>
                  <div className="min-w-0 leading-tight">
                    <span className="font-heading font-extrabold text-[10px] text-espresso block truncate">
                      {notif.dept}
                    </span>
                    <span
                      className={`text-[9px] block truncate ${
                        notif.type === 'alert' ? 'text-amber-700 font-bold' : 'text-terracotta-muted'
                      }`}
                    >
                      {notif.action}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  {notif.type === 'success' ? (
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-brand-green stroke-[3]" />
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center">
                      <AlertTriangle className="w-2.5 h-2.5 text-amber-600" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ============================================================ */}
          {/* 4. REAL LIVE SMARTPHONE IN FOUNDER'S HANDS                   */}
          {/* ============================================================ */}
          <div
            onClick={() => setPhoneSelected(true)}
            className="absolute bottom-[2%] right-[10%] sm:right-[14%] w-[130px] sm:w-[155px] h-[190px] sm:h-[220px] rounded-2xl bg-[#1e1410] border-2 border-[#3d261e] shadow-2xl p-1.5 flex flex-col justify-between cursor-pointer group hover:scale-105 transition-all z-30"
            style={{ transform: 'rotate(-2deg)' }}
            title="Founder Executive Mobile Command Dashboard - Click to inspect"
          >
            {/* Phone Screen Glass */}
            <div className="w-full h-full rounded-xl bg-white p-2 flex flex-col justify-between overflow-hidden shadow-inner">
              {/* Header */}
              <div>
                <div className="w-8 h-1 rounded-full bg-gray-300 mx-auto mb-1" />
                <div className="flex items-center justify-between border-b border-brand-peach/40 pb-1">
                  <div className="flex items-center gap-1">
                    <Layers className="w-3 h-3 text-brand-orange" />
                    <span className="font-heading font-extrabold text-[9px] text-espresso">
                      GetAstrav
                    </span>
                  </div>
                  <span className="text-[7px] font-mono text-brand-green font-bold flex items-center gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-brand-green animate-ping" />
                    Live
                  </span>
                </div>
              </div>

              {/* Department Rows */}
              <div className="space-y-1 my-auto">
                {DEPARTMENTS.slice(0, 5).map((dept) => (
                  <div
                    key={dept.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedDept(dept);
                    }}
                    className={`flex items-center justify-between px-1.5 py-0.5 rounded text-[8px] font-heading font-bold transition-colors cursor-pointer ${
                      hoveredDeptId === dept.id
                        ? 'bg-brand-orange-light text-brand-orange'
                        : 'hover:bg-surface-tier1 text-espresso'
                    }`}
                  >
                    <span className="truncate">{dept.name}</span>
                    <span className="font-mono">{dept.progress}</span>
                  </div>
                ))}
              </div>

              {/* Home Pill */}
              <div className="w-6 h-0.5 rounded-full bg-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. INTERACTIVE FULL DEEP-DIVE MODAL (ON CLICK)               */}
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
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${selectedDept.iconBg} flex items-center justify-center shrink-0 shadow-warm-xs`}>
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

              <div className="space-y-2.5">
                <span className="text-xs font-heading font-bold text-espresso uppercase tracking-wider block">
                  Active Deliverables & Rollup Items
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
    </div>
  );
};
