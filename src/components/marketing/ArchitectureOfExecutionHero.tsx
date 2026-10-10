import React from 'react';
import { Link } from 'react-router-dom';
import { ArchitectureOfExecutionCanvas } from './ArchitectureOfExecutionCanvas';
import { MotionWrapper } from '../common/MotionWrapper';
import { ArrowRight, CheckCircle2, Layers, Activity, ShieldCheck, Sparkles } from 'lucide-react';

export const ArchitectureOfExecutionHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-ivory via-surface-ambient to-white border-b border-brand-peach/50">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-champagne/40 via-sage-light/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-coral-soft/30 via-brand-peach/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* LEFT COLUMN: Clean Editorial Copy & CTAs */}
        <div className="lg:col-span-5 space-y-7 text-left">
          
          {/* Brand Kicker Badge */}
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-brand-peach/80 shadow-warm-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
              </span>
              <span className="text-[11px] font-mono font-extrabold tracking-widest text-espresso uppercase">
                FOUNDEROS WORKSPACE V4.8
              </span>
            </div>
          </MotionWrapper>

          {/* Hero Headline & Supporting Text */}
          <MotionWrapper delay={0.1}>
            <div className="space-y-4">
              <h1 className="font-extrabold text-[38px] sm:text-[54px] xl:text-[64px] leading-[1.06] tracking-tight text-espresso">
                From Founder Strategy <br />
                to Execution on <span className="text-brand-orange">Autopilot.</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-terracotta leading-relaxed font-normal pt-1 max-w-xl">
                Bring your company's goals, projects, and team tasks together in one place. See how work is progressing and what needs attention.
              </p>
            </div>
          </MotionWrapper>

          {/* Action Buttons */}
          <MotionWrapper delay={0.2}>
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-7 py-3.5 rounded-2xl shadow-glow-orange hover:-translate-y-0.5 transition-all group cursor-pointer"
              >
                <Layers className="w-4.5 h-4.5" />
                <span>Explore FounderOS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#everything-connected"
                className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-espresso bg-white hover:bg-surface-tier1 px-6 py-3.5 rounded-2xl border border-brand-peach/80 transition-all hover:border-brand-orange shadow-warm-sm"
              >
                <span>See How It Works</span>
              </a>
            </div>
          </MotionWrapper>

          {/* Key Trust & Feature Indicators */}
          <MotionWrapper delay={0.3}>
            <div className="pt-4 border-t border-brand-peach/40 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-terracotta">
              <div className="flex items-center gap-2 font-bold text-espresso">
                <Activity className="w-4 h-4 text-brand-green" />
                <span>Real-Time Sync</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-espresso">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>SOC2 Type II Aligned</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-espresso">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span>Gemini 2.5 AI</span>
              </div>
            </div>
          </MotionWrapper>

        </div>

        {/* RIGHT COLUMN: 3D Interactive Architecture Scene */}
        <div className="lg:col-span-7 w-full">
          <MotionWrapper delay={0.2} direction="up">
            <ArchitectureOfExecutionCanvas />
          </MotionWrapper>
        </div>

      </div>
    </section>
  );
};

