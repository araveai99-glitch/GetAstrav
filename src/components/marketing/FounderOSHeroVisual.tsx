import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Sparkles,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const FounderOSHeroVisual: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  // Mouse tilt parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

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
    setActiveHotspot(null);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[860px] mx-auto select-none py-2 sm:py-6"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic Ambient Radiant Glows & Orbits in Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-visible">
        {/* Sun Sphere Ambient Glow behind top-right */}
        <div className="absolute -top-10 right-4 w-72 h-72 rounded-full bg-gradient-to-tr from-[#fab60a]/30 via-[#ffec69]/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-16 w-56 h-56 rounded-full bg-gradient-to-tr from-[#f15e1c]/20 via-[#fab60a]/30 to-transparent blur-2xl pointer-events-none" />

        {/* Ambient Pedestal Glow at bottom */}
        <div className="absolute -bottom-8 left-1/4 right-1/4 h-32 rounded-full bg-gradient-to-t from-[#fab60a]/20 via-[#2e936f]/15 to-transparent blur-2xl pointer-events-none" />

        {/* Outer Orbit with Rotating Nodes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-40">
          <div className="absolute inset-0 animate-spin-slow pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 700 700" fill="none">
              <circle
                cx="350"
                cy="350"
                r="310"
                stroke="#f7d7b0"
                strokeWidth="1.2"
                strokeDasharray="6 8"
                strokeOpacity="0.8"
              />
              <circle cx="660" cy="350" r="4.5" fill="#fab60a" />
              <circle cx="350" cy="40" r="4" fill="#f15e1c" />
            </svg>
          </div>
          <div className="absolute inset-0 animate-spin-slow-reverse pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 700 700" fill="none">
              <ellipse
                cx="350"
                cy="350"
                rx="240"
                ry="210"
                stroke="#fab60a"
                strokeWidth="1"
                strokeDasharray="4 6"
                strokeOpacity="0.6"
              />
              <circle cx="590" cy="350" r="3.5" fill="#2e936f" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main 3D Composition Container with Spring Parallax */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative w-full rounded-2xl cursor-default transition-shadow"
      >
        {/* The 3D Render Image */}
        <img
          src="/assets/founder_os_hero_3d.png"
          alt="GetAstrav FounderOS Interactive Execution Command Center"
          className="w-full h-auto object-contain block drop-shadow-2xl select-none pointer-events-auto"
          loading="eager"
          decoding="async"
        />

        {/* ============================================================ */}
        {/* INTERACTIVE HOTSPOTS & SUBTLE MICRO-ANIMATION HIGHLIGHTS     */}
        {/* ============================================================ */}

        {/* Hotspot 1: Teams Card (Top-Left) */}
        <div
          onMouseEnter={() => setActiveHotspot('teams')}
          onMouseLeave={() => setActiveHotspot(null)}
          className="absolute top-[20%] left-[2%] w-[24%] h-[20%] rounded-2xl cursor-pointer group z-20"
          title="Team Execution Pods"
        >
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#2e936f]/40 group-hover:bg-[#2e936f]/5 transition-all duration-300" />
          {activeHotspot === 'teams' && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute -top-12 left-2 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-warm-lg border border-[#2e936f]/30 flex items-center gap-2 whitespace-nowrap"
            >
              <Users className="w-3.5 h-3.5 text-[#2e936f]" />
              <span className="text-xs font-heading font-bold text-[#271812]">
                12 Active Members · Pods On Track
              </span>
            </motion.div>
          )}
        </div>

        {/* Hotspot 2: AI Assistant Card (Bottom-Left) */}
        <div
          onMouseEnter={() => setActiveHotspot('ai')}
          onMouseLeave={() => setActiveHotspot(null)}
          className="absolute top-[50%] left-[8%] w-[22%] h-[26%] rounded-2xl cursor-pointer group z-20"
          title="AI Goal Decomposition"
        >
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#fab60a]/50 group-hover:bg-[#fab60a]/5 transition-all duration-300" />
          {activeHotspot === 'ai' && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute -top-12 left-0 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-warm-lg border border-[#fab60a]/40 flex items-center gap-2 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#fab60a]" />
              <span className="text-xs font-heading font-bold text-[#271812]">
                AI Autonomous Goal Decomposition
              </span>
            </motion.div>
          )}
        </div>

        {/* Hotspot 3: Primary Goal Card (Center-Top) */}
        <div
          onMouseEnter={() => setActiveHotspot('goal')}
          onMouseLeave={() => setActiveHotspot(null)}
          className="absolute top-[22%] left-[34%] w-[50%] h-[16%] rounded-2xl cursor-pointer group z-20"
          title="Company Strategic Goal"
        >
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#f15e1c]/40 group-hover:bg-[#f15e1c]/5 transition-all duration-300" />
          {activeHotspot === 'goal' && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute -top-12 left-1/4 z-30 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-warm-lg border border-[#f15e1c]/30 flex items-center gap-2 whitespace-nowrap"
            >
              <Target className="w-3.5 h-3.5 text-[#f15e1c]" />
              <span className="text-xs font-heading font-bold text-[#271812]">
                Strategic Rollup: Launch Product V2 (72% On Track)
              </span>
            </motion.div>
          )}
        </div>

        {/* Hotspot 4: Platform & Core Milestone (Center-Left) */}
        <div
          onMouseEnter={() => setActiveHotspot('platform')}
          onMouseLeave={() => setActiveHotspot(null)}
          className="absolute top-[42%] left-[32%] w-[25%] h-[36%] rounded-2xl cursor-pointer group z-20"
          title="Platform & Core Milestones"
        >
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#2e936f]/30 group-hover:bg-[#2e936f]/5 transition-all duration-300" />
          {activeHotspot === 'platform' && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute -top-12 left-0 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-warm-lg border border-[#2e936f]/30 flex items-center gap-2 whitespace-nowrap"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2e936f]" />
              <span className="text-xs font-heading font-bold text-[#271812]">
                Platform & Core: 80% Completed (3/4 Milestones)
              </span>
            </motion.div>
          )}
        </div>

        {/* Hotspot 5: Security & Compliance (Center-Right) */}
        <div
          onMouseEnter={() => setActiveHotspot('security')}
          onMouseLeave={() => setActiveHotspot(null)}
          className="absolute top-[42%] left-[58%] w-[28%] h-[36%] rounded-2xl cursor-pointer group z-20"
          title="Security & Compliance Milestones"
        >
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#fab60a]/30 group-hover:bg-[#fab60a]/5 transition-all duration-300" />
          {activeHotspot === 'security' && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute -top-12 right-0 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-warm-lg border border-[#fab60a]/30 flex items-center gap-2 whitespace-nowrap"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#fab60a]" />
              <span className="text-xs font-heading font-bold text-[#271812]">
                Security Audit Review: Attention Required
              </span>
            </motion.div>
          )}
        </div>

        {/* Hotspot 6: Progress Updates Card (Far Right) */}
        <div
          onMouseEnter={() => setActiveHotspot('progress')}
          onMouseLeave={() => setActiveHotspot(null)}
          className="absolute top-[32%] right-[1%] w-[16%] h-[20%] rounded-2xl cursor-pointer group z-20"
          title="Organizational Velocity"
        >
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#2e936f]/40 group-hover:bg-[#2e936f]/5 transition-all duration-300" />
          {activeHotspot === 'progress' && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6 }}
              className="absolute -top-12 right-0 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-warm-lg border border-[#2e936f]/30 flex items-center gap-2 whitespace-nowrap"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#2e936f]" />
              <span className="text-xs font-heading font-bold text-[#271812]">
                +24% Monthly Execution Velocity
              </span>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
