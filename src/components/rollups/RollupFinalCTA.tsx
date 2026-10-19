import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import { openDemoModal } from '../common/DemoModal';

export const RollupFinalCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="pt-2 sm:pt-4 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1720px] mx-auto"
    >
      <div className="rounded-3xl bg-gradient-to-r from-[#fffbf7] via-[#fff5ee] to-[#fef2e8] p-6 sm:p-10 md:p-12 border-2 border-brand-peach/80 shadow-warm-xl relative overflow-hidden text-center">
        {/* Soft Ambient Floating Glow */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.5, 0.3],
                }
          }
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-brand-orange-light via-brand-peach/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        />

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-espresso tracking-tight leading-tight lg:whitespace-nowrap"
          >
            Let Progress Speak for Itself.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-2xl mx-auto lg:whitespace-nowrap"
          >
            Keep your team aligned and see how everyday work moves your goals forward.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="pt-2 flex items-center justify-center"
          >
            <button
              type="button"
              onClick={openDemoModal}
              className="btn-brand-primary px-8 py-3.5 text-base font-heading font-bold shadow-md shadow-brand-orange/30 hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2.5 cursor-pointer"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.32 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-heading font-semibold text-terracotta-muted border-t border-brand-peach/50 max-w-md mx-auto"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-green" /> Automatic Calculations
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Team Visibility
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-brand-orange" /> Real-Time Goals
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
