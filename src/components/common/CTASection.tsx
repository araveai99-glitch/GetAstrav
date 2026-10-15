import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Sparkles, Megaphone, CheckCircle2 } from 'lucide-react';
import { openDemoModal } from './DemoModal';

interface CTASectionProps {
  className?: string;
  paddingY?: string;
  paddingX?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  className = '',
  paddingY = 'py-6 sm:py-10 md:py-20',
  paddingX = 'px-4 sm:px-6 lg:px-10',
}) => {
  return (
    <section id="conversion-cta" className={`w-full ${paddingY} ${paddingX} bg-transparent ${className}`}>
      <div className="max-w-[1600px] mx-auto rounded-3xl bg-gradient-to-r from-[#fffbf7] via-[#fff5ee] to-[#fef2e8] p-8 sm:p-12 md:p-16 border border-brand-peach/80 shadow-architectural relative overflow-hidden">
        {/* Soft atmospheric background glow */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-brand-orange-light via-brand-peach/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-brand-yellow-light/20 via-surface-ambient to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* LEFT: Copy & Action Buttons */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="text-[32px] sm:text-[46px] font-extrabold text-[#271812] leading-[1.12] tracking-[-0.02em] font-heading"
            >
              Ready to See Your Company<br />
              <span className="text-[#f15e1c]">in One View?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
              className="text-base sm:text-lg text-[#5a4138] font-body leading-relaxed max-w-xl text-left sm:text-justify"
            >
              Join forward-thinking founders who run their organizations with clarity, velocity, and execution precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={openDemoModal}
                style={{ touchAction: 'manipulation' }}
                className="inline-flex items-center justify-center gap-2.5 text-base font-heading font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-8 py-3.5 rounded-full shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 active:translate-y-0 transition-all group cursor-pointer select-none"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 text-base font-heading font-bold text-espresso bg-white hover:bg-brand-orange-light px-7 py-3.5 rounded-full shadow-warm-sm border border-brand-peach transition-all hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Astrav</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Compact Brand Visual with 3D Logo & Handwritten Note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
              {/* Handwritten note & curly arrow */}
              <div className="absolute top-2 left-0 z-20 text-left pointer-events-none">
                <span className="font-heading italic font-bold text-sm text-[#f15e1c] block -rotate-6">
                  From vision<br />to real progress.
                </span>
                <svg className="w-10 h-8 text-[#f15e1c] mt-1 ml-4" viewBox="0 0 40 30" fill="none">
                  <path
                    d="M 5 5 Q 20 20 35 15"
                    stroke="#f15e1c"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 30 11 L 35 15 L 28 18"
                    stroke="#f15e1c"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* 3D Stacked Logo Icon in Hexagonal Pedestal */}
              <div className="relative w-36 h-36 rounded-3xl bg-gradient-to-tr from-[#f15e1c] via-[#fab60a] to-[#ffec69] p-1 shadow-warm-xl flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[22px] bg-gradient-to-tr from-[#f15e1c] to-[#fab60a] flex items-center justify-center shadow-inner">
                  <Layers className="w-16 h-16 text-white drop-shadow-md" />
                </div>

                {/* Floating Megaphone Badge (Bottom-Left) */}
                <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-full bg-white shadow-warm-md border border-brand-peach flex items-center justify-center">
                  <Megaphone className="w-5 h-5 text-brand-orange" />
                </div>

                {/* Floating Green Progress Badge (Bottom-Right) */}
                <div className="absolute -bottom-2 -right-3 w-9 h-9 rounded-full bg-white shadow-warm-md border border-brand-peach flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-brand-green" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

