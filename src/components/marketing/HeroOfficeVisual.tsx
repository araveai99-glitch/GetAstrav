import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Users,
  Smartphone,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface DepartmentHotspot {
  id: string;
  name: string;
  progress: string;
  status: 'on_track' | 'attention' | 'optimal';
  top: string;
  left: string;
  width: string;
  height: string;
  details: string;
  team: string;
}

const DEPARTMENTS: DepartmentHotspot[] = [
  {
    id: 'product',
    name: 'Product',
    progress: '78%',
    status: 'on_track',
    top: '12%',
    left: '6%',
    width: '28%',
    height: '24%',
    details: '3/4 Milestones completed · Launch Product V2',
    team: '4 Active Designers & PMs',
  },
  {
    id: 'engineering',
    name: 'Engineering',
    progress: '62%',
    status: 'attention',
    top: '12%',
    left: '36%',
    width: '28%',
    height: '24%',
    details: '4/6 Milestones · 2 Tasks needing attention',
    team: '8 Full-stack Engineers',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    progress: '54%',
    status: 'attention',
    top: '12%',
    left: '66%',
    width: '28%',
    height: '24%',
    details: 'Q3 Brand Campaign launched · Inbound growth',
    team: '3 Marketers & Growth Leads',
  },
  {
    id: 'sales',
    name: 'Sales',
    progress: '71%',
    status: 'on_track',
    top: '46%',
    left: '6%',
    width: '28%',
    height: '24%',
    details: '3/5 Milestones · Enterprise pipeline on schedule',
    team: '5 Account Execs',
  },
  {
    id: 'hr',
    name: 'HR',
    progress: '88%',
    status: 'optimal',
    top: '46%',
    left: '36%',
    width: '28%',
    height: '24%',
    details: '4/4 Milestones · All Q3 onboarding completed',
    team: '2 People Ops Leads',
  },
  {
    id: 'finance',
    name: 'Finance',
    progress: '66%',
    status: 'on_track',
    top: '46%',
    left: '66%',
    width: '28%',
    height: '24%',
    details: '2/4 Milestones · Runway forecast up to date',
    team: '2 Financial Analysts',
  },
];

export const HeroOfficeVisual: React.FC = () => {
  const [activeDept, setActiveDept] = useState<DepartmentHotspot | null>(null);
  const [hoveredNotification, setHoveredNotification] = useState<string | null>(null);

  // Parallax tilt on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

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
    setActiveDept(null);
    setHoveredNotification(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[820px] mx-auto select-none py-2"
      style={{ perspective: 1200 }}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
        <div className="absolute top-4 right-10 w-72 h-72 rounded-full bg-gradient-to-tr from-[#fab60a]/25 via-[#ffec69]/30 to-transparent blur-3xl" />
        <div className="absolute bottom-6 left-10 w-80 h-80 rounded-full bg-gradient-to-br from-[#f15e1c]/15 via-[#f7d7b0]/25 to-transparent blur-3xl" />
      </div>

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-full rounded-2xl cursor-default overflow-hidden border border-brand-peach/40 shadow-warm-xl bg-white/40 backdrop-blur-xs"
      >
        {/* Clean Office Command Center Illustration */}
        <img
          src="/assets/hero_office_scene_clean.png"
          alt="GetAstrav Isometric Office Command Center with Real-Time Department Execution"
          className="w-full h-auto object-contain block drop-shadow-md select-none pointer-events-auto"
          loading="eager"
          decoding="async"
        />

        {/* ============================================================ */}
        {/* INTERACTIVE DEPARTMENT HOTSPOTS                              */}
        {/* ============================================================ */}
        {DEPARTMENTS.map((dept) => (
          <div
            key={dept.id}
            onMouseEnter={() => setActiveDept(dept)}
            onMouseLeave={() => setActiveDept(null)}
            className="absolute rounded-xl cursor-pointer group z-20 transition-all"
            style={{
              top: dept.top,
              left: dept.left,
              width: dept.width,
              height: dept.height,
            }}
            title={`${dept.name}: ${dept.progress} progress`}
          >
            {/* Subtle glow highlight on hover */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#f15e1c]/50 group-hover:bg-[#f15e1c]/5 transition-all duration-200" />

            {/* Pulsing indicator node */}
            <span className="absolute top-2 right-2 flex h-2 w-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
            </span>
          </div>
        ))}

        {/* Hotspot: Founder / CEO Phone & Desk */}
        <div
          onMouseEnter={() =>
            setActiveDept({
              id: 'ceo',
              name: 'Executive Dashboard Sync',
              progress: '100% Live',
              status: 'optimal',
              top: '65%',
              left: '60%',
              width: '35%',
              height: '30%',
              details: 'Synchronizing real-time rollups across 6 departments directly to executive console',
              team: 'Live Command Stream',
            })
          }
          onMouseLeave={() => setActiveDept(null)}
          className="absolute bottom-[4%] right-[8%] w-[38%] h-[32%] rounded-2xl cursor-pointer group z-20"
          title="Executive Mobile Sync"
        >
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#2e936f]/40 group-hover:bg-[#2e936f]/5 transition-all duration-200" />
        </div>

        {/* Active Department Detail Card Modal/Tooltip */}
        {activeDept && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute top-4 left-4 z-40 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-warm-xl border border-brand-peach/80 max-w-xs animate-fadeIn"
          >
            <div className="flex items-center justify-between gap-3 mb-1.5">
              <span className="text-xs font-heading font-extrabold text-espresso">
                {activeDept.name}
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-brand-orange-light text-brand-orange border border-brand-orange/20">
                {activeDept.progress}
              </span>
            </div>
            <p className="text-[11px] text-terracotta leading-tight mb-2">
              {activeDept.details}
            </p>
            <div className="flex items-center gap-1.5 text-[10px] font-heading font-semibold text-terracotta-muted">
              <Users className="w-3 h-3 text-brand-green" />
              <span>{activeDept.team}</span>
            </div>
          </motion.div>
        )}

        {/* Floating Notification Interactive Tooltip */}
        <div
          onMouseEnter={() => setHoveredNotification('notifications')}
          onMouseLeave={() => setHoveredNotification(null)}
          className="absolute top-[8%] right-[2%] w-[25%] h-[38%] rounded-xl cursor-pointer z-20"
        >
          {hoveredNotification && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-10 right-0 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-warm-lg border border-brand-peach text-[11px] font-heading font-bold text-espresso whitespace-nowrap z-30"
            >
              ⚡ Instant Activity Feed (Real-time webhook sync)
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
