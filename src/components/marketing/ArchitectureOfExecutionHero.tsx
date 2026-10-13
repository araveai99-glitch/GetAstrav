import React from 'react';
import { Link } from 'react-router-dom';
import { HeroOfficeVisual } from './HeroOfficeVisual';
import { MotionWrapper } from '../common/MotionWrapper';
import {
  ArrowRight,
  Layers,
  Play,
  Target,
  Sparkles,
  BarChart3,
  Users,
} from 'lucide-react';

export const ArchitectureOfExecutionHero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-18 lg:pb-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-white via-surface-ambient to-ivory border-b border-brand-peach/50">
      {/* Sophisticated Atmospheric Light Fields & Subtle Alignment Architecture */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle Architectural Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#f7d7b0_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />

        {/* Large Low-Contrast Ambient Radial Light Fields */}
        <div className="absolute top-0 right-1/4 w-[750px] h-[750px] bg-gradient-to-bl from-brand-peach/25 via-brand-yellow-light/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-24 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-brand-orange-light/35 via-brand-peach/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-gradient-to-tl from-brand-green-light/40 via-surface-ambient to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: Clean Editorial Copy, CTAs, & Value Props */}
        <div className="lg:col-span-5 space-y-7 text-left z-10">
          {/* Brand Kicker Badge (Green Beacon Pill matching Reference Image) */}
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#edf7f3] border border-[#2e936f]/30 shadow-warm-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e936f] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e936f]"></span>
              </span>
              <span className="text-[11px] font-heading font-extrabold tracking-widest text-[#2e936f] uppercase">
                FOUNDEROS WORKSPACE V4.8
              </span>
            </div>
          </MotionWrapper>

          {/* Hero Headline & Supporting Text */}
          <MotionWrapper delay={0.1}>
            <div className="space-y-4">
              <h1 className="text-[40px] sm:text-[52px] xl:text-[62px] font-extrabold text-[#271812] leading-[1.08] tracking-[-0.03em] font-heading">
                Your Entire Company<br />
                In <span className="text-[#f15e1c]">One View.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#5a4138] font-body leading-relaxed max-w-xl">
                Connect goals, teams, projects and daily work across every department. Get real progress, spot delays early, and run your company with clarity.
              </p>
            </div>
          </MotionWrapper>

          {/* Action Buttons */}
          <MotionWrapper delay={0.2}>
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-heading font-bold text-white bg-[#f15e1c] hover:bg-[#d94e10] px-7 py-3.5 rounded-full shadow-lg shadow-[#f15e1c]/30 hover:-translate-y-0.5 transition-all group cursor-pointer"
              >
                <Layers className="w-5 h-5 text-white" />
                <span>Explore FounderOS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-heading font-bold text-[#271812] bg-white hover:bg-brand-orange-light px-6 py-3.5 rounded-full border border-brand-peach transition-all hover:border-[#f15e1c] hover:text-[#f15e1c] shadow-warm-sm cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#271812] fill-[#271812]/15" />
                <span>See How It Works</span>
              </a>
            </div>
          </MotionWrapper>

          {/* Four Value Propositions (Matching Reference Image) */}
          <MotionWrapper delay={0.3}>
            <div className="pt-5 border-t border-brand-peach/40 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs font-heading">
              <div className="flex items-center gap-2 font-bold text-[#271812]">
                <Target className="w-4.5 h-4.5 text-[#f15e1c] shrink-0" />
                <span>Goal-Driven Execution</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#271812]">
                <Sparkles className="w-4.5 h-4.5 text-[#fab60a] shrink-0" />
                <span>AI-Powered Planning</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#271812]">
                <BarChart3 className="w-4.5 h-4.5 text-[#2e936f] shrink-0" />
                <span>Real Progress Visibility</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#271812]">
                <Users className="w-4.5 h-4.5 text-[#f15e1c] shrink-0" />
                <span>Built for Founders</span>
              </div>
            </div>
          </MotionWrapper>
        </div>

        {/* RIGHT COLUMN: Isometric Office Visual */}
        <div className="lg:col-span-7 w-full flex items-center justify-center overflow-visible">
          <MotionWrapper delay={0.2} direction="up" className="w-full">
            <HeroOfficeVisual />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};
