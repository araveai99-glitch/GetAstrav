import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { DEPARTMENTS } from '../../data/departmentWorkflows';


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
    left: '81.4%',
    top: '15.0%',
    width: '16.5%',
    height: '8.5%',
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
    left: '81.4%',
    top: '26.5%',
    width: '16.5%',
    height: '8.5%',
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
    left: '81.4%',
    top: '38.0%',
    width: '16.5%',
    height: '8.5%',
    mobileTop: '34%',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    isCheck: true,
    detail: 'Tier-1 enterprise contract moved to legal review and executive signoff.',
  },
];

export const ArchitectureOfExecutionHero: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredDeptId, setHoveredDeptId] = useState<string | null>(null);
  const [activeNotif, setActiveNotif] = useState<NotificationHotspot | null>(null);
  const [companyGoalModalOpen, setCompanyGoalModalOpen] = useState(false);
  const [mobileSyncOpen, setMobileSyncOpen] = useState(false);

  // Active status for connection highlight illumination
  const isGoalActive = companyGoalModalOpen;
  const isSalesActive = hoveredDeptId === 'sales';
  const isHRActive = hoveredDeptId === 'hr';
  const isFinanceActive = hoveredDeptId === 'finance';
  const isProductActive = hoveredDeptId === 'product';
  const isEngActive = hoveredDeptId === 'engineering';
  const isMktActive = hoveredDeptId === 'marketing';

  return (
    <section className="relative w-full overflow-hidden bg-[#faf6f0] border-b border-brand-peach/60 pt-20 sm:pt-22 select-none">

      {/* ============================================================ */}
      {/* DESKTOP / WIDE SCREEN: 4K HIGH-DEF PANORAMIC HERO BACKDROP   */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative w-full">
        <div className="relative w-full aspect-[1806/760] overflow-hidden">
          {/* Panoramic Clean Reference Backdrop (Crisp with Zero Stretching) */}
          <picture>
            <source
              type="image/avif"
              media="(min-width: 1536px)"
              srcSet="/assets/golden_hour_glass_tech_hub.avif"
            />
            <source
              type="image/webp"
              media="(min-width: 1536px)"
              srcSet="/assets/golden_hour_glass_tech_hub.webp"
            />
            <source
              type="image/avif"
              media="(min-width: 1024px)"
              srcSet="/assets/golden_hour_glass_tech_hub_1440.avif"
            />
            <source
              type="image/webp"
              media="(min-width: 1024px)"
              srcSet="/assets/golden_hour_glass_tech_hub_1440.webp"
            />
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1806 871'%3E%3C/svg%3E"
              alt="Astrav Executive Organization Command Center"
              width={1806}
              height={871}
              className="w-full h-full object-cover object-bottom block select-none pointer-events-none"
              loading="lazy"
              decoding="async"
            />
          </picture>

          {/* ============================================================ */}
          {/* ACCESSIBLE SEO LAYER (Screen Readers & Search Engines)       */}
          {/* ============================================================ */}
          <div className="sr-only">
            <h1>Your Entire Company In One View.</h1>
            <p>
              Connect goals, teams, projects and daily work across every department. Get real progress, spot delays early, and run your company with clarity.
            </p>
            <div>
              <Link to="/product">Explore Astrav</Link>
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
          {/* ============================================================ */}
          {/* 1. CRISP VECTOR LEFT-SIDE HERO CONTENT                       */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-20 flex flex-col justify-start select-none"
            style={{
              left: '5.4%',
              top: '14.5%',
              width: '27.0%',
            }}
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
              className="text-[32px] sm:text-[38px] xl:text-[46px] 2xl:text-[54px] font-extrabold text-[#271812] leading-[1.08] tracking-[-0.03em] font-heading mb-2.5 xl:mb-3"
            >
              Your Entire<br />
              Company<br />
              In <span className="text-[#f15e1c]">One View.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.15, ease: 'easeOut' }}
              className="text-sm xl:text-base 2xl:text-[17px] text-[#5a4138] font-body leading-relaxed mb-4 xl:mb-5 max-w-[440px] text-left"
            >
              Connect goals, teams, and daily execution across every department. Spot delays early and run your company with total clarity.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
              className="flex items-center gap-2.5 xl:gap-3"
            >
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 px-5 xl:px-6 py-2.5 xl:py-3 rounded-full bg-[#f15e1c] hover:bg-[#d94e10] text-white font-heading font-bold text-sm xl:text-base shadow-lg shadow-[#f15e1c]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Layers className="w-4 h-4 text-white" />
                <span>Explore Astrav</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-4.5 xl:px-5 py-2.5 xl:py-3 rounded-full bg-white hover:bg-gray-50 text-[#271812] font-heading font-bold text-sm xl:text-base border border-[#f5ded0] shadow-warm-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Play className="w-3.5 h-3.5 text-[#271812] fill-[#271812]/20" />
                <span>See How It Works</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ============================================================ */}
          {/* 2. SHARP, HIGH-DEFINITION DEPARTMENT CARDS                   */}
          {/* ============================================================ */}
          {DEPARTMENTS.map((dept, index) => {
            const isHovered = hoveredDeptId === dept.id;
            const isActive = isHovered;

            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: 0.1 + index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredDeptId(dept.id)}
                onMouseLeave={() => setHoveredDeptId(null)}
                onClick={() => navigate(`/department-workflow/${dept.id}`)}
                className={`absolute z-20 rounded-xl xl:rounded-2xl cursor-pointer transition-all duration-200 select-none bg-white border border-black/[0.08] shadow-[0_6px_20px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04)] px-2 py-1.5 xl:px-2.5 xl:py-2 flex flex-col justify-between group overflow-hidden ${
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
                title={`Open ${dept.name} department workflow (${dept.progress} - ${dept.statusText})`}
              >
                {/* Top Row: Icon + Name + Chevron */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-1.5 xl:gap-2 min-w-0">
                    <div
                      className={`w-4.5 h-4.5 xl:w-5 xl:h-5 rounded-md xl:rounded-lg ${dept.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <dept.icon className={`w-3 h-3 xl:w-3.5 xl:h-3.5 ${dept.iconColor}`} />
                    </div>
                    <span className="font-heading font-extrabold text-[#271812] text-xs xl:text-sm 2xl:text-[15px] leading-tight truncate">
                      {dept.name}
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#f15e1c] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>

                {/* Bottom Row: Percentage + Progress Bar + Sparkline */}
                <div className="flex items-end justify-between w-full mt-0.5">
                  <div className="min-w-0 flex-1 mr-2">
                    <span className="font-heading font-extrabold text-[#271812] text-xs xl:text-sm 2xl:text-base leading-none block mb-0.5 xl:mb-1">
                      {dept.progress}
                    </span>
                    <div className="w-full h-1 xl:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${dept.barColor} rounded-full`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: dept.progress }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.75,
                          delay: 0.2 + index * 0.07,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-7 xl:w-9 h-3.5 xl:h-4 shrink-0 flex items-center justify-end">
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
              </motion.div>
            );
          })}

          {/* ============================================================ */}
          {/* 3. SHARP, HIGH-DEFINITION COMPANY GOAL CARD                  */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setCompanyGoalModalOpen(true)}
            className="absolute z-20 rounded-xl xl:rounded-2xl cursor-pointer transition-all duration-200 select-none bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_rgba(46,147,111,0.3)] hover:border-[#2e936f] hover:scale-[1.01] p-2 xl:p-2.5 2xl:p-3 flex flex-col justify-between group overflow-hidden"
            style={{
              left: '41.0%',
              top: '62.0%',
              width: '25.5%',
              height: '11.5%',
            }}
            title="Company Goal: Launch Product V2 (72%) - Click to inspect"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-lg bg-[#fceade] flex items-center justify-center shrink-0">
                  <Target className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-[#f15e1c]" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] xl:text-xs font-mono font-bold text-[#2e936f] leading-none mb-0.5 uppercase tracking-wider">
                    Company Goal
                  </div>
                  <div className="font-heading font-extrabold text-[#271812] text-xs xl:text-sm 2xl:text-base leading-tight truncate">
                    Launch Product V2
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="font-heading font-extrabold text-[#2e936f] text-base xl:text-lg 2xl:text-xl">
                  72%
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#2e936f] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            {/* Full width Progress Bar */}
            <div className="w-full h-1.5 xl:h-2 bg-gray-100 rounded-full overflow-hidden mt-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2e936f] to-[#34d399] rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '72%' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
              />
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* 4. SHARP, HIGH-DEFINITION NOTIFICATION STACK                 */}
          {/* ============================================================ */}
          {NOTIFICATIONS.map((notif, idx) => (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: 0.25 + idx * 0.08, ease: 'easeOut' }}
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
                  <h5 className="font-heading font-extrabold text-[#271812] text-xs xl:text-sm leading-tight truncate">
                    {notif.dept}
                  </h5>
                  <p className="text-[11px] xl:text-xs text-gray-500 font-medium leading-none mt-0.5 truncate">
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
                  className={`text-[10.5px] xl:text-xs font-heading font-bold ${
                    notif.isCheck ? 'text-[#2e936f]' : 'text-[#ea580c]'
                  }`}
                >
                  {notif.time}
                </span>
              </div>
            </motion.div>
          ))}


          {/* ============================================================ */}
          {/* 5. FOUNDER SMARTPHONE HOTSPOT (BOTTOM-RIGHT)                 */}
          {/* ============================================================ */}
          <div
            onClick={() => setMobileSyncOpen(true)}
            className="absolute z-20 rounded-2xl cursor-pointer group transition-all duration-200 active:scale-[0.98]"
            style={{
              left: '77.5%',
              top: '56.0%',
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
              <button
                onClick={() => {
                  if (hoveredDeptId) navigate(`/department-workflow/${hoveredDeptId}`);
                }}
                className="font-heading font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
              >
                <span>Open Workflow</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
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
            {[
              {
                icon: Target,
                iconBg: 'bg-[#fceade] text-[#f15e1c]',
                title: 'Goal-Driven Execution',
                desc: 'Projects, milestones, and daily tasks roll up directly into company North Star goals.',
              },
              {
                icon: Sparkles,
                iconBg: 'bg-[#fef3dc] text-[#fab60a]',
                title: 'AI-Powered Planning',
                desc: 'Detects project blockers, overdue tasks, and resource clashes before delays happen.',
              },
              {
                icon: BarChart3,
                iconBg: 'bg-[#edf7f3] text-[#2e936f]',
                title: 'Real Progress Visibility',
                desc: 'Live, unfiltered execution velocity across Product, Engineering, Marketing, Sales, HR, and Finance.',
              },
              {
                icon: Users,
                iconBg: 'bg-[#fceade] text-[#f15e1c]',
                title: 'Built for Founders',
                desc: 'Total control of cross-team execution with zero micromanagement or status meetings.',
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-xs hover:border-brand-orange/60 hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
                >
                  <div className="mb-3">
                    <div className={`w-10 h-10 rounded-xl ${pillar.iconBg} flex items-center justify-center shadow-warm-2xs group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-espresso group-hover:text-brand-orange transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-terracotta leading-relaxed mt-1 text-left sm:text-justify">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE / TABLET VIEW (<1024px): CLOSE TO REFERENCE IMAGE 1   */}
      {/* ============================================================ */}
      <div className="lg:hidden max-w-xl mx-auto px-2.5 xs:px-3.5 sm:px-6 pt-2.5 sm:pt-4 space-y-6 sm:space-y-7 text-left pb-4 sm:pb-6">
        {/* 1. Headline & Supporting Text */}
        <div className="space-y-3.5">
          <h1 className="text-[30px] xs:text-[34px] sm:text-[40px] font-extrabold text-[#271812] leading-[1.1] tracking-[-0.03em] font-heading">
            Your Entire Company<br />
            In <span className="text-[#f15e1c]">One View.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#5a4138] font-body leading-relaxed text-left">
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
            <span>Explore Astrav</span>
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
        <div className="pt-2 border-t border-brand-peach/40 grid grid-cols-2 gap-x-4 gap-y-3 text-xs sm:text-sm font-heading font-semibold">
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
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet="/assets/golden_hour_tech_hub_mobile_sm.webp"
            />
            <source
              type="image/webp"
              media="(min-width: 641px)"
              srcSet="/assets/golden_hour_tech_hub_mobile.webp"
            />
            <img
              src="/assets/golden_hour_tech_hub_mobile_sm.webp"
              alt="Astrav Command Center Hub"
              width={680}
              height={454}
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>

          {/* Glowing Animated Warm Orange SVG Connector Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1000 667"
            fill="none"
          >
            {/* Vertical connector lines between Row 1 and Row 2 */}
            <path
              d="M 130 194 L 130 233"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.85"
            />
            <path
              d="M 365 194 L 365 233"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.85"
            />
            <path
              d="M 600 194 L 600 233"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.85"
            />

            {/* Connector Lines from Row 2 converging down into Company Goal */}
            {/* Sales (Col 1) to Goal left */}
            <path
              d="M 130 380 L 130 405 L 200 405 L 200 420"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.9"
            />
            {/* HR (Col 2) to Goal center */}
            <path
              d="M 365 380 L 365 405 L 350 405 L 350 420"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.9"
            />
            {/* Finance (Col 3) to Goal right */}
            <path
              d="M 600 380 L 600 405 L 500 405 L 500 420"
              stroke="#ea580c"
              strokeWidth="2.5"
              strokeDasharray="4 3"
              className="animate-dash-flow"
              opacity="0.9"
            />

            {/* Glowing Bus Junction Nodes */}
            <circle cx="130" cy="405" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="200" cy="405" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="365" cy="405" r="3.5" fill="#2e936f" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="350" cy="405" r="3.5" fill="#2e936f" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="500" cy="405" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="600" cy="405" r="3.5" fill="#ea580c" stroke="#ffffff" strokeWidth="1.5" />

            {/* Goal Top Anchor Nodes */}
            <circle cx="200" cy="420" r="3" fill="#2e936f" />
            <circle cx="350" cy="420" r="3.5" fill="#2e936f" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="500" cy="420" r="3.5" fill="#2e936f" />
          </svg>

          {/* Overlaid 6 Department Cards in 2 Rows of 3 */}
          {/* Row 1: Product, Engineering, Marketing */}
          {/* Row 2: Sales, HR, Finance */}
          {DEPARTMENTS.map((dept, index) => {
            return (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  delay: 0.08 + index * 0.05,
                  ease: 'easeOut',
                }}
                onClick={() => navigate(`/department-workflow/${dept.id}`)}
                className="absolute z-20 rounded-xl xs:rounded-2xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_4px_14px_rgba(0,0,0,0.12)] px-1 py-1 min-[375px]:px-1.5 min-[375px]:py-1.5 flex flex-col justify-between cursor-pointer select-none active:scale-95 transition-all group overflow-hidden hover:border-brand-orange/50 hover:ring-2 hover:ring-brand-orange/20"
                style={{
                  left: dept.mobileLeft,
                  top: dept.mobileTop,
                  width: dept.mobileWidth,
                  height: dept.mobileHeight,
                }}
                title={`Open ${dept.name} department workflow (${dept.progress} - ${dept.statusText})`}
              >
                {/* Top Row: Icon + Name */}
                <div className="flex items-center gap-1 min-[360px]:gap-1.25 min-w-0 w-full">
                  <div
                    className={`w-3.5 h-3.5 min-[375px]:w-4 min-[375px]:h-4 rounded-full ${dept.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <dept.icon className={`w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 ${dept.iconColor}`} />
                  </div>
                  <span className="font-heading font-extrabold text-[#271812] text-[8px] min-[360px]:text-[8.5px] min-[375px]:text-[9px] sm:text-xs leading-none whitespace-nowrap tracking-tight block">
                    {dept.name}
                  </span>
                </div>

                {/* Bottom Section: Percentage + Progress Bar + Sparkline */}
                <div className="w-full space-y-0.5 min-[375px]:space-y-1">
                  <span className="font-heading font-extrabold text-[#271812] text-[9.5px] min-[360px]:text-[10px] min-[375px]:text-[10.5px] sm:text-sm leading-none block">
                    {dept.progress}
                  </span>
                  <div className="flex items-center justify-between gap-1 w-full">
                    <div className="flex-1 h-1 min-[375px]:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${dept.barColor} rounded-full`}
                        initial={{ width: '0%' }}
                        whileInView={{ width: dept.progress }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.75,
                          delay: 0.15 + index * 0.05,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                    <div className="w-3 min-[360px]:w-3.5 min-[375px]:w-4 sm:w-6 h-2 min-[375px]:h-2.5 sm:h-3 shrink-0 flex items-center justify-end">
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
              </motion.div>
            );
          })}

          {/* Central Company Goal Card (Lower Middle Left) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.35, ease: 'easeOut' }}
            onClick={() => setCompanyGoalModalOpen(true)}
            className="absolute z-20 rounded-xl xs:rounded-2xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_6px_20px_rgba(46,147,111,0.22),0_2px_4px_rgba(0,0,0,0.06)] p-1.5 min-[360px]:p-2 min-[375px]:p-2 sm:p-2.5 cursor-pointer active:scale-95 transition-all select-none group flex flex-col justify-between"
            style={{
              left: '8.0%',
              top: '63.0%',
              width: '54.0%',
              height: '24.0%',
            }}
            title="Company Goal: Launch Product V2 (72%) - Click to inspect"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5 min-[375px]:gap-2 min-w-0 flex-1">
                <div className="w-5 h-5 min-[375px]:w-5.5 min-[375px]:h-5.5 sm:w-6 sm:h-6 rounded-lg bg-[#fceade] flex items-center justify-center shrink-0">
                  <Target className="w-2.5 h-2.5 min-[375px]:w-3 min-[375px]:h-3 sm:w-3.5 sm:h-3.5 text-[#f15e1c]" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[7px] min-[360px]:text-[7.5px] min-[375px]:text-[8px] sm:text-[11px] font-heading font-extrabold text-[#2e936f] uppercase tracking-wider block leading-none mb-0.5">
                    Company Goal
                  </span>
                  <span className="font-heading font-extrabold text-[#271812] text-[9px] min-[360px]:text-[9.5px] min-[375px]:text-[10px] sm:text-sm leading-tight block whitespace-nowrap tracking-tight">
                    Launch Product V2
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-0.5 shrink-0 ml-1">
                <span className="font-heading font-extrabold text-[#2e936f] text-xs min-[375px]:text-sm sm:text-base">
                  72%
                </span>
                <ChevronRight className="w-2.5 h-2.5 min-[375px]:w-3 min-[375px]:h-3 text-gray-400 group-hover:text-[#2e936f] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>

            <div className="w-full h-1 min-[375px]:h-1.5 bg-gray-100 rounded-full overflow-hidden mt-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2e936f] to-[#34d399] rounded-full"
                initial={{ width: '0%' }}
                whileInView={{ width: '72%' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
              />
            </div>
          </motion.div>

          {/* Three Recent Activity Notification Cards (Stacked Vertically on Right) */}
          <div
            className="absolute z-20 flex flex-col gap-1 xs:gap-1.5 sm:gap-2"
            style={{
              right: '1.2%',
              top: '7%',
              width: '26.0%',
            }}
          >
            {NOTIFICATIONS.map((notif, idx) => (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: 0.2 + idx * 0.06, ease: 'easeOut' }}
                onClick={() => setActiveNotif(notif)}
                className="rounded-lg xs:rounded-xl bg-white/95 backdrop-blur-md border border-black/[0.08] shadow-[0_3px_10px_rgba(0,0,0,0.1)] p-1 min-[375px]:p-1.25 flex flex-col justify-between cursor-pointer active:scale-95 transition-all select-none group"
                title={`Click to view ${notif.dept} update`}
              >
                {/* Row 1: Icon + Full Dept Name + Status Icon */}
                <div className="flex items-center justify-between w-full gap-0.5">
                  <div className="flex items-center gap-1 min-w-0">
                    <div
                      className={`w-3.5 h-3.5 min-[375px]:w-4 min-[375px]:h-4 rounded-full ${notif.iconBg} flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      <notif.icon className={`w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 ${notif.iconColor}`} />
                    </div>
                    <span className="font-heading font-extrabold text-[#271812] text-[8px] min-[360px]:text-[8.5px] min-[375px]:text-[9px] sm:text-xs leading-none block whitespace-nowrap tracking-tight">
                      {notif.dept}
                    </span>
                  </div>

                  {notif.isCheck ? (
                    <CheckCircle2 className="w-2.5 h-2.5 min-[375px]:w-3 min-[375px]:h-3 text-[#2e936f] shrink-0" />
                  ) : (
                    <AlertTriangle className="w-2.5 h-2.5 min-[375px]:w-3 min-[375px]:h-3 text-[#ea580c] shrink-0" />
                  )}
                </div>

                {/* Row 2: Action Description + Timestamp */}
                <div className="flex items-center justify-between w-full mt-0.5 text-[6.5px] min-[360px]:text-[7px] min-[375px]:text-[7.5px] sm:text-[10px] leading-none text-gray-600 gap-0.5">
                  <span className="truncate min-w-0 flex-1 font-medium text-gray-500">
                    {notif.action}
                  </span>
                  <span
                    className={`font-heading font-bold whitespace-nowrap shrink-0 ${
                      notif.isCheck ? 'text-[#2e936f]' : 'text-[#ea580c]'
                    }`}
                  >
                    {notif.time}
                  </span>
                </div>
              </motion.div>
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
        {/* 6. TAP DEPARTMENT TO INSPECT (3-COLUMN GRID ON MOBILE)       */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 'some' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="space-y-2 pt-0.5"
        >
          <h3 className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider text-terracotta-muted">
            TAP DEPARTMENT TO INSPECT
          </h3>

          <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3">
            {DEPARTMENTS.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.3, delay: index * 0.04, ease: 'easeOut' }}
                onClick={() => navigate(`/department-workflow/${dept.id}`)}
                className="px-1.5 py-1.5 min-[375px]:px-2 min-[375px]:py-2 sm:px-3.5 sm:py-3 rounded-2xl bg-white border border-[#f8e1d4] shadow-[0_2px_8px_rgba(42,26,20,0.04)] hover:border-brand-orange/60 hover:shadow-warm-sm transition-all cursor-pointer flex items-center justify-between group active:scale-[0.98] select-none"
                title={`Open ${dept.name} Department Workflow (${dept.progress})`}
              >
                <div className="flex items-center gap-1 min-[375px]:gap-1.5 min-w-0 flex-1">
                  <dept.icon className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 ${dept.iconColor} shrink-0`} />
                  <div className="min-w-0 flex-1">
                    <span className="font-heading font-extrabold text-[10px] min-[375px]:text-[10.5px] min-[410px]:text-[11.5px] sm:text-sm text-[#271812] leading-tight block truncate tracking-tight">
                      {dept.name}
                    </span>
                    <span className="font-heading font-bold text-[9.5px] min-[375px]:text-[10px] min-[410px]:text-[11px] sm:text-[13px] text-[#5a4138] leading-tight block mt-0.5">
                      {dept.progress}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-stone-300 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all shrink-0 ml-0.5 sm:ml-1.5" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

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
