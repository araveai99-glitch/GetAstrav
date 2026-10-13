import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, AlertTriangle, Sparkles, ArrowRight } from 'lucide-react';
import { MotionWrapper } from '../common/MotionWrapper';

export const FounderInsightsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="founder-insights"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white border-b border-brand-peach/50"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ============================================================ */}
        {/* LEFT COLUMN: Founder at Desk Scene with Floating Badges      */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 w-full">
          <MotionWrapper direction="right" delay={0.1}>
            <div className="relative w-full rounded-3xl overflow-hidden border border-brand-peach/60 shadow-architectural bg-surface-ambient group">
              {/* Founder Desk Scene Image */}
              <img
                src="/assets/founder_desk_scene.png"
                alt="Founder reviewing real-time company performance insights on dual displays"
                className="w-full h-auto object-cover block select-none transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
                decoding="async"
              />

              {/* Interactive Hotspot 1: Marketing Badge (Top-Left) */}
              <div
                onMouseEnter={() => setActiveCard('marketing')}
                onMouseLeave={() => setActiveCard(null)}
                className="absolute top-[8%] left-[28%] w-[26%] h-[28%] rounded-2xl cursor-pointer z-20 group/mkt"
                title="Marketing execution velocity"
              >
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover/mkt:border-brand-green/40 group-hover/mkt:bg-brand-green/5 transition-all" />
              </div>

              {/* Interactive Hotspot 2: Engineering Badge (Top-Center) */}
              <div
                onMouseEnter={() => setActiveCard('engineering')}
                onMouseLeave={() => setActiveCard(null)}
                className="absolute top-[28%] left-[53%] w-[28%] h-[28%] rounded-2xl cursor-pointer z-20 group/eng"
                title="Engineering risk detection"
              >
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover/eng:border-brand-orange/40 group-hover/eng:bg-brand-orange/5 transition-all" />
              </div>

              {/* Interactive Hotspot 3: Sales Badge (Center-Right) */}
              <div
                onMouseEnter={() => setActiveCard('sales')}
                onMouseLeave={() => setActiveCard(null)}
                className="absolute top-[48%] right-[2%] w-[28%] h-[28%] rounded-2xl cursor-pointer z-20 group/sales"
                title="Sales revenue momentum"
              >
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover/sales:border-brand-green/40 group-hover/sales:bg-brand-green/5 transition-all" />
              </div>

              {/* Detail Popover when hovered */}
              {activeCard && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-warm-lg border border-brand-peach text-xs font-heading font-semibold text-espresso flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>
                    {activeCard === 'marketing' && 'Marketing: +12% growth pace this week'}
                    {activeCard === 'engineering' && 'Engineering: Attention needed on 2 blocking items'}
                    {activeCard === 'sales' && 'Sales: Deal pipeline velocity +5% this week'}
                  </span>
                </motion.div>
              )}
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
    </section>
  );
};
