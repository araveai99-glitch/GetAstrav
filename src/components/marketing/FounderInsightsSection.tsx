import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  TrendingUp,
  AlertTriangle,
  BarChart3,
  X,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
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
  // Responsive desktop percentage positions
  desktopTop: string;
  desktopLeft?: string;
  desktopRight?: string;
  isAlert?: boolean;
  deepDive: string;
  metrics: string[];
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
    desktopTop: '12%',
    desktopLeft: '26%',
    deepDive:
      'Brand acquisition channels and automated milestone rollups are exceeding targets. CAC down 14% over the last 30 days.',
    metrics: ['Organic Traffic: +28%', 'Conversion Velocity: 4.2%', 'Active Pipeline: 42 Leads'],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    status: '2 tasks overdue',
    delta: 'Attention needed',
    icon: AlertTriangle,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    desktopTop: '32%',
    desktopLeft: '50%',
    isAlert: true,
    deepDive:
      'Two critical API gateway optimization deliverables have missed their SLA deadline by 48 hours. CTO Marcus has reallocated 2 senior engineers to resolve by EOD.',
    metrics: ['Gateway Latency: 240ms (Target: 80ms)', 'Sprint Progress: 78%', '2 Blockers Flagged'],
  },
  {
    id: 'sales',
    title: 'Sales',
    status: 'Deal stage updated',
    delta: '+5% this week',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    desktopTop: '54%',
    desktopRight: '4%',
    deepDive:
      'Enterprise pipeline advanced 3 tier-1 deals into legal review. Founder signoff scheduled for Thursday morning.',
    metrics: ['ARR Pipeline: $480K', 'Win Rate: 34%', '3 Enterprise MSA Signoffs Pending'],
  },
];

export const FounderInsightsSection: React.FC = () => {
  const [selectedInsight, setSelectedInsight] = useState<FloatingInsightCard | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="founder-insights"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-brand-peach/50"
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
                <img
                  src="/assets/founder_desk_scene_hq.jpg"
                  alt="Founder reviewing real-time company performance insights on dual displays in modern executive suite"
                  className="w-full h-full object-cover block select-none pointer-events-none transition-transform duration-700 group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle ambient light gradient at top/edges for seamless contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/10 pointer-events-none" />

                {/* ============================================================ */}
                {/* 3 CRISP, VECTOR-PERFECT FLOATING CARDS (RESPONSIVE ALIGNMENT)*/}
                {/* ============================================================ */}
                {INSIGHT_CARDS.map((card) => {
                  const Icon = card.icon;
                  const isHovered = hoveredId === card.id;

                  return (
                    <motion.div
                      key={card.id}
                      onMouseEnter={() => setHoveredId(card.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => setSelectedInsight(card)}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className={`absolute z-20 cursor-pointer transition-all duration-200
                        bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl
                        p-2 sm:p-2.5 md:p-3
                        border shadow-[0_10px_25px_-5px_rgba(42,26,20,0.2)]
                        ${
                          isHovered
                            ? 'border-brand-orange ring-2 ring-brand-orange/40 shadow-[0_12px_28px_rgba(241,94,28,0.25)]'
                            : 'border-white/90 hover:border-brand-orange/60'
                        }
                      `}
                      style={{
                        top: card.desktopTop,
                        left: card.desktopLeft,
                        right: card.desktopRight,
                      }}
                      title={`Click to inspect ${card.title} performance intelligence`}
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
                        <div className="leading-tight">
                          <div className="flex items-center gap-1.5">
                            <span className="font-heading font-extrabold text-[11px] sm:text-xs md:text-sm text-espresso">
                              {card.title}
                            </span>
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                card.isAlert ? 'bg-amber-500 animate-ping' : 'bg-brand-orange'
                              }`}
                            />
                            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-terracotta-muted ml-auto hidden sm:inline-block opacity-60 group-hover:opacity-100" />
                          </div>

                          <span
                            className={`text-[9px] sm:text-[11px] md:text-xs block font-heading ${
                              card.isAlert
                                ? 'text-amber-800 font-bold'
                                : 'text-terracotta-muted font-medium'
                            }`}
                          >
                            {card.status}
                          </span>

                          <span
                            className={`text-[8.5px] sm:text-[10px] md:text-[11px] block font-mono font-bold ${
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

              {/* Mobile Quick Inspector Bar (Visible on mobile screens < 640px) */}
              <div className="sm:hidden px-3 py-2.5 bg-white border-t border-brand-peach/40 flex items-center justify-between text-xs">
                <span className="text-[11px] font-heading font-bold text-espresso flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                  3 Live Department Signals
                </span>
                <span className="text-[10px] font-heading font-bold text-brand-orange">
                  Tap cards to inspect
                </span>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: Built For Founders Copy & Value Checkmarks     */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 space-y-7 text-left z-10">
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#edf7f3] border border-[#2e936f]/30 shadow-warm-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e936f] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e936f]"></span>
              </span>
              <span className="text-[11px] font-heading font-extrabold tracking-widest text-[#2e936f] uppercase">
                BUILT FOR FOUNDERS
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#271812] leading-[1.12] tracking-[-0.02em] font-heading">
                Make Faster Decisions<br />
                with <span className="text-[#f15e1c]">Real Insights.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#5a4138] font-body leading-relaxed max-w-lg text-left sm:text-justify">
                Real-time visibility across your entire company—without chasing updates or sitting in status meetings.
              </p>
            </div>
          </MotionWrapper>

          {/* 4 Checkmark Items (Orange circle with white check icon) */}
          <div className="space-y-3.5 pt-2">
            {[
              'Live execution velocity across every department',
              'Automated mathematical rollups to North Star goals',
              'Instant blocker, risk, and overdue task alerts',
              'Zero micromanagement, total strategic clarity',
            ].map((text, idx) => (
              <MotionWrapper key={idx} delay={0.15 + idx * 0.08} direction="left">
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

      {/* Detail Modal when Insight card is clicked */}
      <AnimatePresence>
        {selectedInsight && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-brand-peach space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-xl ${selectedInsight.iconBg} flex items-center justify-center`}
                  >
                    <selectedInsight.icon className={`w-5 h-5 ${selectedInsight.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg text-espresso">
                      {selectedInsight.title} Intelligence
                    </h3>
                    <span className="text-xs font-mono font-semibold text-terracotta-muted">
                      Status: {selectedInsight.status} ({selectedInsight.delta})
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="p-1.5 rounded-full hover:bg-surface-tier1 text-terracotta cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-ambient border border-brand-peach/50 text-xs text-espresso leading-relaxed">
                {selectedInsight.deepDive}
              </div>

              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-espresso block">
                  Active Metrics
                </span>
                <div className="space-y-1.5">
                  {selectedInsight.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-espresso bg-white px-3 py-1.5 rounded-xl border border-brand-peach/40"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedInsight(null)}
                className="w-full py-2.5 rounded-full bg-brand-orange text-white font-heading font-bold text-xs shadow-md shadow-brand-orange/20 cursor-pointer hover:bg-brand-orange-hover transition-colors"
              >
                Close Inspection
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
