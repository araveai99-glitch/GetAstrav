import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Layers, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';
import { openDemoModal } from '../common/DemoModal';

export const ProductFinalCTA: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1600px] mx-auto">
      <div className="rounded-3xl bg-gradient-to-r from-[#fffbf7] via-[#fff5ee] to-[#fef2e8] p-6 sm:p-8 md:p-10 border border-brand-peach/80 shadow-warm-lg relative overflow-hidden text-center">
        {/* Soft Warm Ambient Sheen with Gentle Decorative Floating Movement */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 15, 0],
                  y: [0, -10, 0],
                }
          }
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-12 w-[420px] h-[420px] bg-gradient-to-bl from-brand-orange-light via-brand-peach/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        />

        <div className="max-w-2xl mx-auto space-y-5 relative z-10">
          {/* Subtle Brand Icon Badge with Repeat-on-Scroll */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35 }}
            className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center mx-auto shadow-md shadow-brand-orange/25"
          >
            <Layers className="w-6 h-6" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="text-[26px] min-[375px]:text-[28px] sm:text-3xl lg:text-4xl font-heading font-extrabold text-espresso tracking-tight leading-tight lg:whitespace-nowrap"
          >
            Bring Your Goals and Teams <span className="text-brand-orange">Together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.14 }}
            className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-2xl mx-auto lg:whitespace-nowrap"
          >
            Keep everyone aligned and see what moves your work forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
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

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.35, delay: 0.26 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-[13px] sm:text-sm font-heading font-semibold text-terracotta-muted border-t border-brand-peach/50 max-w-md mx-auto"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-green" /> Zero Commitment
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Enterprise RBAC
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-brand-orange" /> Real-Time Rollups
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
