import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Megaphone,
  Code,
  BarChart3,
  X,
  CheckCircle2,
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
  deepDive: string;
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
    top: '12%',
    left: '26%',
    deepDive: 'Campaign acquisition costs reduced by 14% with automated content rollups.',
  },
  {
    id: 'engineering',
    title: 'Engineering',
    status: '2 tasks overdue',
    delta: 'Attention needed',
    icon: AlertTriangle,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    top: '32%',
    left: '52%',
    isAlert: true,
    deepDive: 'Blocking issues detected in API gateway. 2 team leads reallocated to unblock.',
  },
  {
    id: 'sales',
    title: 'Sales',
    status: 'Deal stage updated',
    delta: '+5% this week',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    top: '52%',
    right: '3%',
    deepDive: '3 enterprise contract approvals pushed to final signature stage.',
  },
];

export const FounderInsightsSection: React.FC = () => {
  const [selectedInsight, setSelectedInsight] = useState<FloatingInsightCard | null>(null);

  return (
    <section
      id="founder-insights"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-brand-peach/50"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ============================================================ */}
        {/* LEFT COLUMN: Founder at Desk Scene with REAL HTML CARDS      */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 w-full">
          <MotionWrapper direction="right" delay={0.1}>
            <div className="relative w-full rounded-3xl overflow-hidden border border-brand-peach/60 shadow-architectural bg-surface-ambient group">
              {/* Founder Desk Scene Image */}
              <img
                src="/assets/founder_desk_scene.png"
                alt="Founder reviewing real-time company performance insights on dual displays"
                className="w-full h-auto object-cover block select-none pointer-events-none"
                loading="lazy"
                decoding="async"
              />

              {/* REAL CRISP HTML FLOATING CARDS */}
              {INSIGHT_CARDS.map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.id}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedInsight(card)}
                    className="absolute bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-white/90 shadow-[0_8px_20px_rgba(42,26,20,0.16)] cursor-pointer z-20 transition-all hover:border-brand-orange/60 flex items-center gap-2.5 sm:gap-3"
                    style={{
                      top: card.top,
                      left: card.left,
                      right: card.right,
                    }}
                    title={`Click to inspect ${card.title} performance details`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl ${card.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${card.iconColor}`} />
                    </div>

                    <div className="leading-tight">
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading font-extrabold text-xs sm:text-sm text-espresso">
                          {card.title}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                      </div>
                      <span
                        className={`text-[10px] sm:text-xs block font-heading ${
                          card.isAlert ? 'text-amber-700 font-bold' : 'text-terracotta-muted'
                        }`}
                      >
                        {card.status}
                      </span>
                      <span
                        className={`text-[9px] sm:text-[10px] block font-mono font-bold ${
                          card.isAlert ? 'text-amber-600' : 'text-brand-green'
                        }`}
                      >
                        {card.delta}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
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
              <p className="text-base sm:text-lg text-[#5a4138] font-body leading-relaxed max-w-lg">
                Get a clear view of what's happening across your company, without chasing updates or sitting in endless status meetings.
              </p>
            </div>
          </MotionWrapper>

          {/* 4 Checkmark Items (Orange circle with white check icon) */}
          <div className="space-y-3.5 pt-2">
            {[
              'Real-time progress across all departments',
              'Automatic rollups from tasks to company goals',
              'Identify risks and overdue work instantly',
              'Stay focused on what matters most',
            ].map((text, idx) => (
              <MotionWrapper key={idx} delay={0.15 + idx * 0.08} direction="left">
                <div className="flex items-center gap-3 group">
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

      {/* Detail Modal when Insight card clicked */}
      <AnimatePresence>
        {selectedInsight && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-brand-peach space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-xl ${selectedInsight.iconBg} flex items-center justify-center`}>
                    <selectedInsight.icon className={`w-4 h-4 ${selectedInsight.iconColor}`} />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-espresso">
                    {selectedInsight.title} Intelligence
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="p-1.5 rounded-full hover:bg-surface-tier1 text-terracotta cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-ambient border border-brand-peach/50 text-xs text-espresso leading-relaxed">
                {selectedInsight.deepDive}
              </div>

              <button
                onClick={() => setSelectedInsight(null)}
                className="w-full py-2.5 rounded-full bg-brand-orange text-white font-heading font-bold text-xs shadow-md shadow-brand-orange/20 cursor-pointer"
              >
                Dismiss
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
