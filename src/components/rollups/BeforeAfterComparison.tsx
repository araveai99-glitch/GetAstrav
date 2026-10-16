import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  XCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';

export const BeforeAfterComparison: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  const withoutPoints = [
    'Update progress manually.',
    'Chase project updates.',
    'Recalculate overall status.',
  ];

  const withPoints = [
    'Complete the task.',
    'Progress updates automatically.',
    'See the bigger goal at a glance.',
  ];

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 shadow-warm-2xs"
        >
          <span className="w-2 h-2 rounded-full bg-brand-orange" />
          <span className="text-xs font-heading font-extrabold text-brand-orange uppercase tracking-wider">
            BEFORE & AFTER
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="brand-h2 text-espresso"
        >
          Less Manual Tracking. More Clarity.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="brand-subtitle text-terracotta text-base sm:text-lg max-w-md mx-auto font-normal"
        >
          Stop spending time managing spreadsheets. Let your real work keep everyone in sync.
        </motion.p>
      </div>

      {/* Two Compact Comparison Panels */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {/* Panel 1: Without automatic rollups */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="bg-surface-tier1/70 rounded-3xl p-6 sm:p-7 border border-brand-peach/70 shadow-warm-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-peach/40">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-terracotta-muted">
                TRADITIONAL WORKFLOW
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                <AlertCircle className="w-3 h-3" />
                Manual Overhead
              </span>
            </div>

            <h3 className="text-lg font-heading font-bold text-espresso mb-4">
              Without automatic rollups
            </h3>

            <div className="space-y-3.5">
              {withoutPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium text-terracotta leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Visual Card */}
          <div className="mt-6 pt-4 border-t border-brand-peach/40">
            <div className="p-3 rounded-xl bg-white/70 border border-brand-peach/50 flex items-center justify-between text-xs text-terracotta-muted">
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Weekly Status Reports
              </span>
              <span className="font-heading font-semibold text-amber-800">
                Often Out of Date
              </span>
            </div>
          </div>
        </motion.div>

        {/* Panel 2: With Astrav */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-brand-orange/40 shadow-warm-lg flex flex-col justify-between relative overflow-hidden group"
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-brand-orange-light/40 rounded-full blur-2xl pointer-events-none -z-10" />

          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-brand-peach/40">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange">
                ASTRAV ARCHITECTURE
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-brand-green bg-brand-green-light px-2.5 py-0.5 rounded-full border border-brand-green/30">
                <Sparkles className="w-3 h-3" />
                Always Live
              </span>
            </div>

            <h3 className="text-lg font-heading font-bold text-espresso mb-4">
              With Astrav
            </h3>

            <div className="space-y-3.5">
              {withPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green-light text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-heading font-semibold text-espresso leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Visual Card */}
          <div className="mt-6 pt-4 border-t border-brand-peach/40">
            <div className="p-3 rounded-xl bg-brand-orange-light/50 border border-brand-orange/30 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-heading font-bold text-espresso">
                <TrendingUp className="w-3.5 h-3.5 text-brand-orange" />
                Live Goal Alignment
              </span>
              <span className="font-heading font-extrabold text-brand-orange">
                Zero Friction
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
