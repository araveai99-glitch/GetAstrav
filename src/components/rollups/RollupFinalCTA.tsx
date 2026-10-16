import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { openDemoModal } from '../common/DemoModal';

export const RollupFinalCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
    >
      <div className="rounded-3xl bg-gradient-to-r from-[#fffbf7] via-[#fff5ee] to-[#fef2e8] p-8 sm:p-12 md:p-14 border border-brand-peach/80 shadow-warm-lg relative overflow-hidden text-center">
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
          {/* Minimal Decorative Progress Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-orange/30 shadow-warm-2xs mx-auto"
          >
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-3.5 rounded-full bg-brand-green" />
              <span className="w-1.5 h-4.5 rounded-full bg-brand-yellow" />
              <span className="w-1.5 h-5.5 rounded-full bg-brand-orange" />
            </div>
            <span className="text-xs font-heading font-extrabold text-brand-orange uppercase tracking-wider">
              CONTINUOUS HARMONIZATION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="brand-h2 text-espresso"
          >
            Let Progress Speak for Itself.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="brand-subtitle text-terracotta text-base sm:text-lg font-normal max-w-lg mx-auto"
          >
            Keep your team aligned and see how everyday work moves your goals forward.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="pt-2"
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
