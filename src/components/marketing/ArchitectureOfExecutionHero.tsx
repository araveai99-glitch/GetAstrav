import React from 'react';
import { Link } from 'react-router-dom';
import { FounderOSHeroVisual } from './FounderOSHeroVisual';
import { MotionWrapper } from '../common/MotionWrapper';
import { ArrowRight, CheckCircle2, Layers, Activity, ShieldCheck, Sparkles } from 'lucide-react';

export const ArchitectureOfExecutionHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-24 pb-12 sm:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-white via-surface-ambient to-ivory border-b border-brand-peach/50">
      {/* Sophisticated Light-Theme Atmospheric Light Fields & Subtle Alignment Architecture */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle Architectural Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#f7d7b0_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />
        
        {/* Large Low-Contrast Ambient Radial Light Fields */}
        <div className="absolute top-0 right-1/4 w-[750px] h-[750px] bg-gradient-to-bl from-brand-peach/25 via-brand-yellow-light/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-24 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-brand-orange-light/35 via-brand-peach/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-gradient-to-tl from-brand-green-light/40 via-surface-ambient to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* LEFT COLUMN: Clean Editorial Copy & CTAs */}
        <div className="lg:col-span-5 space-y-7 text-left">
          
          {/* Brand Kicker Badge */}
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-green-light border border-brand-green/30 shadow-warm-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
              </span>
              <span className="text-[11px] font-heading font-extrabold tracking-widest text-brand-green uppercase">
                FOUNDEROS WORKSPACE V4.8
              </span>
            </div>
          </MotionWrapper>

          {/* Hero Headline & Supporting Text */}
          <MotionWrapper delay={0.1}>
            <div className="space-y-4">
              <h1 className="brand-h1 text-espresso">
                Run Your Company on <span className="text-brand-orange">Real Progress</span>, Not Status Meetings.
              </h1>
              <p className="brand-subtitle text-terracotta pt-1 max-w-2xl">
                Connect company goals, team projects, and daily tasks in one unified workspace. Track execution automatically and see exactly what needs your attention.
              </p>
            </div>
          </MotionWrapper>

          {/* Action Buttons */}
          <MotionWrapper delay={0.2}>
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-heading font-bold text-white bg-brand-orange hover:bg-brand-orange-hover px-7 py-3.5 rounded-full shadow-lg shadow-brand-orange/30 hover:-translate-y-0.5 transition-all group cursor-pointer"
              >
                <Layers className="w-4.5 h-4.5" />
                <span>Explore FounderOS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#everything-connected"
                className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-heading font-bold text-espresso bg-white hover:bg-brand-orange-light px-6 py-3.5 rounded-full border border-brand-peach transition-all hover:border-brand-orange hover:text-brand-orange shadow-warm-sm"
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
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span>SOC2 Type II Aligned</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-espresso">
                <Sparkles className="w-4 h-4 text-brand-yellow" />
                <span>AI Intelligence</span>
              </div>
            </div>
          </MotionWrapper>

        </div>

        {/* RIGHT COLUMN: Responsive FounderOS Organizational Execution Visual */}
        <div className="lg:col-span-7 w-full flex items-center justify-center">
          <MotionWrapper delay={0.2} direction="up" className="w-full">
            <FounderOSHeroVisual />
          </MotionWrapper>
        </div>

      </div>
    </section>
  );
};

