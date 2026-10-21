import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  ArrowUpRight,
} from 'lucide-react';
import { MotionWrapper } from '../common/MotionWrapper';

interface FloatingInsightCard {
  id: string;
  title: string;
  status: string;
  delta: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  top: string;
  left?: string;
  right?: string;
  isAlert?: boolean;
}

const INSIGHT_CARDS: FloatingInsightCard[] = [
  {
    id: 'marketing',
    title: 'Marketing',
    status: 'On Track',
    delta: '+12% this week',
    icon: TrendingUp,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    top: '8%',
    left: '20%',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    status: '2 tasks overdue',
    delta: 'Attention needed',
    icon: AlertTriangle,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    top: '38%',
    left: '42%',
    isAlert: true,
  },
  {
    id: 'sales',
    title: 'Sales',
    status: 'Deal stage updated',
    delta: '+5% this week',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    top: '68%',
    right: '4%',
  },
];

export const FounderInsightsSection: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="founder-insights"
      className="relative w-full py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-10 xl:px-12 bg-white border-b border-brand-peach/50"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ============================================================ */}
        {/* LEFT COLUMN: Founder at Desk Scene (FULL UNLETTERBOXED)      */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 w-full">
          <MotionWrapper direction="right" delay={0.1}>
            <div className="relative w-full rounded-3xl overflow-hidden border border-brand-peach/30 shadow-warm-lg bg-surface-ambient group">
              {/* Full 16:9 Unblurred Founder Desk Artwork (Zero baked UI text) */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-transparent">
                <picture>
                  <source
                    type="image/webp"
                    media="(max-width: 768px)"
                    srcSet="/assets/founder_desk_scene_mobile.webp"
                  />
                  <source
                    type="image/webp"
                    srcSet="/assets/founder_desk_scene_desktop.webp 750w, /assets/founder_desk_scene_hq.webp 1000w"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1440px) 55vw, 750px"
                  />
                  <img
                    src="/assets/founder_desk_scene_desktop.webp"
                    alt="Founder reviewing real-time company performance insights on dual displays in modern executive suite"
                    width={750}
                    height={419}
                    className="w-full h-full object-cover block select-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>

                {/* Subtle ambient light gradient at top/edges for seamless contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/10 pointer-events-none" />

                {/* ============================================================ */}
                {/* 3 CRISP, VECTOR-PERFECT FLOATING CARDS (RESPONSIVE ALIGNMENT)*/}
                {/* ============================================================ */}
                {INSIGHT_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  const isHovered = hoveredId === card.id;

                  return (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      onMouseEnter={() => setHoveredId(card.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => navigate(`/department-workflow/${card.id}`)}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        opacity: { duration: 0.45, delay: 0.2 + idx * 0.1, ease: 'easeOut' },
                        y: { duration: 0.45, delay: 0.2 + idx * 0.1, ease: 'easeOut' },
                        scale: { type: 'spring', stiffness: 400, damping: 25 },
                      }}
                      className={`absolute z-20 cursor-pointer select-none transition-all duration-200
                        bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl
                        px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-3.5 md:py-2.5
                        border shadow-[0_8px_20px_-4px_rgba(42,26,20,0.18)]
                        ${
                          isHovered
                            ? 'border-brand-orange ring-2 ring-brand-orange/40 shadow-[0_12px_28px_rgba(241,94,28,0.25)]'
                            : 'border-white/90 hover:border-brand-orange/60'
                        }
                      `}
                      style={{
                        top: card.top,
                        left: card.left,
                        right: card.right,
                      }}
                      title={`View ${card.title} workflow`}
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                        {/* Department Icon Badge */}
                        <div
                          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg sm:rounded-xl ${card.iconBg} flex items-center justify-center shrink-0 shadow-warm-2xs`}
                        >
                          <Icon
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 ${card.iconColor}`}
                          />
                        </div>

                        {/* Text Metrics */}
                        <div className="leading-tight min-w-0">
                          <div className="flex items-center gap-1.5 whitespace-nowrap">
                            <span className="font-heading font-extrabold text-[11px] xs:text-xs sm:text-xs md:text-sm text-espresso">
                              {card.title}
                            </span>
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                card.isAlert ? 'bg-amber-500' : 'bg-brand-orange'
                              }`}
                            />
                            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-terracotta-muted ml-auto hidden sm:inline-block opacity-60 group-hover:opacity-100" />
                          </div>

                          <span
                            className={`text-[9.5px] xs:text-[10px] sm:text-[11px] md:text-xs block font-heading whitespace-nowrap mt-0.5 ${
                              card.isAlert
                                ? 'text-amber-800 font-bold'
                                : 'text-terracotta-muted font-medium'
                            }`}
                          >
                            {card.status}
                          </span>

                          <span
                            className={`text-[9px] xs:text-[9.5px] sm:text-[10.5px] md:text-xs block font-mono font-bold whitespace-nowrap mt-0.5 ${
                              card.isAlert ? 'text-amber-600' : 'text-brand-green'
                            }`}
                          >
                            {card.delta}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Department Signals Caption Bar */}
              <div
                onClick={() => navigate('/department-workflow/marketing')}
                className="px-4 py-3 sm:px-6 sm:py-3.5 bg-white border-t border-brand-peach/40 flex items-center justify-between text-xs sm:text-sm cursor-pointer hover:bg-surface-tier1 transition-colors group/caption select-none"
                title="View live department workflows"
              >
                <span className="font-heading font-bold text-espresso flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
                  </span>
                  <span>3 Live Department Signals</span>
                </span>
                <span className="font-heading font-bold text-brand-orange flex items-center gap-1 group-hover/caption:translate-x-0.5 transition-transform">
                  <span>Tap cards to inspect</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange" />
                </span>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: Copy & Value Checkmarks (Built for Founders)   */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-7 text-left z-10">
          <MotionWrapper delay={0.05}>
            <div className="space-y-3.5 sm:space-y-4">
              <h2 className="text-[28px] xs:text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold text-[#271812] leading-[1.14] tracking-[-0.02em] font-heading">
                Make Faster Decisions<br />
                with <span className="text-[#f15e1c]">Real Insights.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#5a4138] font-body leading-relaxed max-w-lg text-left sm:text-justify">
                Real-time visibility across your entire company—without chasing updates or sitting in status meetings.
              </p>
            </div>
          </MotionWrapper>

          {/* 5 Checkmark Items (Orange circle with white check icon) */}
          <div className="space-y-3.5">
            {[
              'Built for founders',
              'Live execution velocity across every department',
              'Automated mathematical rollups to North Star goals',
              'Instant blocker, risk, and overdue task alerts',
              'Zero micromanagement, total strategic clarity',
            ].map((text, idx) => (
              <MotionWrapper key={idx} delay={0.12 + idx * 0.07} direction="left">
                <div className="flex items-center gap-3 group cursor-default">
                  <div className="w-5 h-5 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-sm shadow-brand-orange/30 group-hover:scale-110 transition-transform">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-heading font-semibold text-espresso">
                    {text}
                  </span>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
