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
  const isInView = useInView(sectionRef, { once: true, amount: 0.05 });
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
      className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1720px] mx-auto relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-left w-full max-w-5xl space-y-1 sm:space-y-1.5 mb-4 sm:mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="text-2xl min-[375px]:text-[26px] sm:text-3xl lg:text-4xl font-heading font-extrabold text-espresso tracking-tight leading-tight text-left lg:whitespace-nowrap"
        >
          Less Manual Tracking. More Clarity.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-sm sm:text-base lg:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left lg:whitespace-nowrap"
        >
          Stop spending time managing spreadsheets. Let your real work keep everyone in sync.
        </motion.p>
      </div>

      {/* Two Large Comparison Panels (Full 1720px Width) */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-10 items-stretch">
        {/* Panel 1: Without automatic rollups */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="bg-surface-tier1/70 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border-2 border-brand-peach/70 shadow-warm-sm flex flex-col justify-between min-h-[300px] sm:min-h-[400px]"
        >
          <div>
            <div className="flex items-center justify-end pb-4 mb-5 border-b border-brand-peach/40">
              <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                <AlertCircle className="w-3.5 h-3.5" />
                Manual Overhead
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-espresso mb-5 sm:mb-6">
              Without automatic rollups
            </h3>

            <div className="space-y-4 sm:space-y-5">
              {withoutPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <XCircle className="w-4 h-4" />
                  </div>
                  <span className="text-base sm:text-lg font-medium text-terracotta leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Visual Card */}
          <div className="mt-8 pt-5 border-t border-brand-peach/40">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-brand-peach/50 flex items-center justify-between text-xs sm:text-sm text-terracotta-muted">
              <span className="flex items-center gap-2 font-medium">
                <Clock className="w-4 h-4 text-amber-600" />
                Weekly Status Reports
              </span>
              <span className="font-heading font-bold text-amber-800">
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
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-brand-orange/50 shadow-warm-lg flex flex-col justify-between relative overflow-hidden group min-h-[360px] sm:min-h-[400px]"
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute top-0 right-0 w-56 h-56 bg-brand-orange-light/40 rounded-full blur-2xl pointer-events-none -z-10" />

          <div>
            <div className="flex items-center justify-end pb-4 mb-5 border-b border-brand-peach/40">
              <span className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-green bg-brand-green-light px-3 py-1 rounded-full border border-brand-green/30">
                <Sparkles className="w-3.5 h-3.5" />
                Always Live
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-extrabold text-espresso mb-5 sm:mb-6">
              With Astrav
            </h3>

            <div className="space-y-4 sm:space-y-5">
              {withPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-brand-green-light text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-base sm:text-lg font-heading font-bold text-espresso leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Visual Card */}
          <div className="mt-8 pt-5 border-t border-brand-peach/40">
            <div className="p-4 sm:p-5 rounded-2xl bg-brand-orange-light/50 border border-brand-orange/30 flex items-center justify-between text-xs sm:text-sm">
              <span className="flex items-center gap-2 font-heading font-bold text-espresso">
                <TrendingUp className="w-4 h-4 text-brand-orange" />
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
