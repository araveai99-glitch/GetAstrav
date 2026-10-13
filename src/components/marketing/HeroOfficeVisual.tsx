import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
} from 'lucide-react';

interface DepartmentHotspot {
  id: string;
  name: string;
  progress: string;
  status: 'on_track' | 'attention' | 'optimal';
  statusText: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  left: string;
  top: string;
  width: string;
  height: string;
  milestones: string;
  head: string;
  activeTasks: number;
  keyObjectives: string[];
}

const DEPARTMENTS: DepartmentHotspot[] = [
  {
    id: 'product',
    name: 'Product',
    progress: '78%',
    status: 'on_track',
    statusText: 'On Track',
    icon: Package,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    left: '0%',
    top: '12.37%',
    width: '21.63%',
    height: '16.96%',
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
    status: 'attention',
    statusText: '2 Overdue Tasks',
    icon: Code,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    left: '26.92%',
    top: '14.49%',
    width: '18.51%',
    height: '13.78%',
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
    status: 'attention',
    statusText: 'Campaign Live',
    icon: Megaphone,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    left: '49.52%',
    top: '13.07%',
    width: '22.84%',
    height: '18.02%',
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
    status: 'on_track',
    statusText: 'On Track',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    left: '2.16%',
    top: '45.58%',
    width: '19.23%',
    height: '16.25%',
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
    status: 'optimal',
    statusText: 'All Onboarded',
    icon: Users,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    left: '27.4%',
    top: '48.41%',
    width: '18.75%',
    height: '13.43%',
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
    status: 'on_track',
    statusText: 'Runway Clear',
    icon: Coins,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    left: '50%',
    top: '47.35%',
    width: '22.36%',
    height: '18.37%',
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

interface NotificationHotspot {
  id: string;
  dept: string;
  action: string;
  time: string;
  left: string;
  top: string;
  width: string;
  height: string;
  detail: string;
}

const NOTIFICATIONS: NotificationHotspot[] = [
  {
    id: 'notif-1',
    dept: 'Marketing',
    action: 'Campaign launched',
    time: '2 min ago',
    left: '72.12%',
    top: '21.55%',
    width: '22.12%',
    height: '14.13%',
    detail: 'Q3 Enterprise Product launch campaign went live across 4 channels.',
  },
  {
    id: 'notif-2',
    dept: 'Engineering',
    action: '2 tasks overdue',
    time: '12 min ago',
    left: '72.36%',
    top: '31.8%',
    width: '22.36%',
    height: '14.49%',
    detail: 'API gateway throughput and DB index optimization need founder attention.',
  },
  {
    id: 'notif-3',
    dept: 'Sales',
    action: 'Deal stage updated',
    time: '25 min ago',
    left: '72.6%',
    top: '42.4%',
    width: '22.12%',
    height: '13.07%',
    detail: 'Tier-1 enterprise contract moved to legal review and executive signoff.',
  },
];

export const HeroOfficeVisual: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<DepartmentHotspot | null>(null);
  const [hoveredDeptId, setHoveredDeptId] = useState<string | null>(null);
  const [activeNotif, setActiveNotif] = useState<NotificationHotspot | null>(null);
  const [phoneHovered, setPhoneHovered] = useState<boolean>(false);

  // Smooth mouse 3D parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3.5, 3.5]);

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
    setPhoneHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[880px] mx-auto select-none py-2"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Ambient Radiant Glows behind visual */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
        <div className="absolute -top-8 -right-6 w-96 h-96 rounded-full bg-gradient-to-tr from-[#fab60a]/25 via-[#ffec69]/20 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-96 h-96 rounded-full bg-gradient-to-br from-[#f15e1c]/15 via-[#f7d7b0]/25 to-transparent blur-3xl pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* 3D PARALLAX WRAPPER (FREE ENDS, NO RIGID BOX BORDER)         */}
      {/* ============================================================ */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.012 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-full transition-shadow duration-300"
      >
        {/* Soft edge feathering so it flows freely into the page */}
        <div className="relative w-full rounded-2xl overflow-hidden [mask-image:radial-gradient(ellipse_99%_95%_at_50%_50%,black_85%,transparent_100%)]">
          {/* Photorealistic 3D Office Command Center Artwork */}
          <img
            src="/assets/hero_office_photorealistic.png"
            alt="GetAstrav Photorealistic Isometric Office Command Center with Real-Time Department Execution"
            className="w-full h-auto object-contain block drop-shadow-2xl select-none pointer-events-none"
            loading="eager"
            decoding="async"
          />

          {/* ============================================================ */}
          {/* INTERACTIVE CLICKABLE HOTSPOTS (PERFECTLY CALIBRATED)        */}
          {/* ============================================================ */}

          {/* 6 Department Hotspots */}
          {DEPARTMENTS.map((dept) => {
            const isHovered = hoveredDeptId === dept.id;

            return (
              <div
                key={dept.id}
                onMouseEnter={() => setHoveredDeptId(dept.id)}
                onMouseLeave={() => setHoveredDeptId(null)}
                onClick={() => setSelectedDept(dept)}
                className="absolute rounded-xl sm:rounded-2xl cursor-pointer z-20 group transition-all duration-200"
                style={{
                  left: dept.left,
                  top: dept.top,
                  width: dept.width,
                  height: dept.height,
                }}
                title={`Click to inspect ${dept.name} (${dept.progress} - ${dept.statusText})`}
              >
                {/* Active Hover Halo */}
                <div
                  className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                    isHovered
                      ? 'ring-2 ring-brand-orange shadow-[0_0_24px_rgba(241,94,28,0.4)] bg-brand-orange/15 backdrop-blur-2xs'
                      : 'border border-transparent hover:border-brand-orange/40'
                  }`}
                />

                {/* Micro-Badge Pin on Hover */}
                <div
                  className={`absolute -top-2.5 right-2 px-2 py-0.5 rounded-full text-[9px] font-heading font-extrabold flex items-center gap-1 transition-all duration-200 shadow-warm-sm ${
                    isHovered
                      ? 'opacity-100 scale-100 bg-brand-orange text-white'
                      : 'opacity-0 scale-90'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  <span>Inspect</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </div>
              </div>
            );
          })}

          {/* 3 Activity Notification Hotspots (Top-Right) */}
          {NOTIFICATIONS.map((notif) => (
            <div
              key={notif.id}
              onClick={() => setActiveNotif(notif)}
              className="absolute rounded-xl cursor-pointer z-20 group transition-all duration-300"
              style={{
                left: notif.left,
                top: notif.top,
                width: notif.width,
                height: notif.height,
              }}
              title={`Click to view ${notif.dept} activity update`}
            >
              <div className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:ring-2 group-hover:ring-brand-green group-hover:bg-brand-green/15 group-hover:shadow-[0_0_16px_rgba(46,147,111,0.35)]" />
            </div>
          ))}

          {/* Founder Smartphone Hotspot (Bottom-Right) */}
          <div
            onMouseEnter={() => setPhoneHovered(true)}
            onMouseLeave={() => setPhoneHovered(false)}
            onClick={() =>
              setSelectedDept({
                id: 'sync',
                name: 'Executive Mobile Command Mesh',
                progress: '100% Live',
                status: 'optimal',
                statusText: 'Synchronized',
                icon: Smartphone,
                iconBg: 'bg-[#edf7f3]',
                iconColor: 'text-[#2e936f]',
                left: '64.9%',
                top: '56.54%',
                width: '17.31%',
                height: '37.46%',
                milestones: 'All 6 Departments Active',
                head: 'Founder & Executive Leadership',
                activeTasks: 73,
                keyObjectives: [
                  'Automated Bi-directional Progress Rollups across all 6 departments',
                  'Instant push alert routing for blocking risks and SLA breaches',
                  'Executive 1-tap milestone signoffs and delegation',
                  'Live sync latency < 80ms over WebSockets',
                ],
              })
            }
            className="absolute rounded-2xl cursor-pointer z-20 group transition-all duration-300"
            style={{
              left: '64.9%',
              top: '56.54%',
              width: '17.31%',
              height: '37.46%',
            }}
            title="Founder Mobile Command Stream - Click to inspect live sync"
          >
            <div
              className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                phoneHovered
                  ? 'ring-2 ring-brand-orange shadow-[0_0_24px_rgba(241,94,28,0.45)] bg-brand-orange/15'
                  : 'hover:border hover:border-brand-orange/40'
              }`}
            />
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

              {/* Key Objectives */}
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
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-ambient border border-brand-peach/50 text-xs text-espresso leading-relaxed">
                {activeNotif.detail}
              </div>

              <button
                onClick={() => setActiveNotif(null)}
                className="w-full py-2.5 rounded-full bg-brand-orange text-white font-heading font-bold text-xs shadow-md shadow-brand-orange/20 cursor-pointer"
              >
                Dismiss
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
