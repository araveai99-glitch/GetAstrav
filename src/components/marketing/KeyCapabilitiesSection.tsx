import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, Sparkles, BarChart3, ArrowUpRight } from 'lucide-react';
import { MotionWrapper } from '../common/MotionWrapper';

interface CapabilityCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  link: string;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: 'goals',
    title: 'Goals & Milestones',
    description: 'Set strategic North Star goals with automated mathematical rollups.',
    icon: Target,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-brand-orange',
    link: '/features/goals-progress',
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    description: 'Cross-functional alignment with clear ownership and zero friction.',
    icon: Users,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    link: '/features/teams',
  },
  {
    id: 'ai',
    title: 'AI-Powered Planning',
    description: 'Predictive planning, daily focus priorities, and blocker detection.',
    icon: Sparkles,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    link: '/features/ai',
  },
  {
    id: 'visibility',
    title: 'Real-Time Visibility',
    description: 'Live organizational velocity, early risk signals, and executive clarity.',
    icon: BarChart3,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    link: '/features/analytics',
  },
];

export const KeyCapabilitiesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="capabilities"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-surface-ambient border-b border-brand-peach/50"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* ============================================================ */}
        {/* LEFT COLUMN: Section Badge, Headline & Subtitle              */}
        {/* ============================================================ */}
        <div className="lg:col-span-5 space-y-6 text-left z-10">
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#edf7f3] border border-[#2e936f]/30 shadow-warm-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e936f] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2e936f]"></span>
              </span>
              <span className="text-[11px] font-heading font-extrabold tracking-widest text-[#2e936f] uppercase">
                KEY CAPABILITIES
              </span>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <div className="space-y-4">
              <h2 className="text-[32px] sm:text-[44px] font-extrabold text-[#271812] leading-[1.12] tracking-[-0.02em] font-heading">
                Everything You Need to Run<br />
                <span className="text-[#f15e1c]">Your Organization.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#5a4138] font-body leading-relaxed max-w-lg text-left sm:text-justify">
                FounderOS unifies your strategy, teams, and execution into one executive workspace.
              </p>
            </div>
          </MotionWrapper>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: 4 Capability Cards in 2x2 Grid                 */}
        {/* ============================================================ */}
        <div className="lg:col-span-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {CAPABILITIES.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = activeCard === card.id;

            return (
              <MotionWrapper key={card.id} delay={0.1 + idx * 0.08} direction="up">
                <Link
                  to={card.link}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`relative p-5 sm:p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-xs transition-all duration-300 flex items-start gap-4 group cursor-pointer block ${
                    isHovered
                      ? 'shadow-warm-lg -translate-y-1 border-brand-orange/50 ring-1 ring-brand-orange/20'
                      : 'hover:shadow-warm-md hover:-translate-y-0.5'
                  }`}
                >
                  {/* Circular Icon Container */}
                  <div
                    className={`w-11 h-11 rounded-2xl ${card.iconBg} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading font-extrabold text-base text-espresso group-hover:text-brand-orange transition-colors">
                        {card.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-terracotta-muted opacity-0 group-hover:opacity-100 group-hover:text-brand-orange transition-all duration-200" />
                    </div>
                    <p className="text-xs sm:text-sm text-terracotta leading-relaxed mt-1.5 font-body text-left sm:text-justify">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
