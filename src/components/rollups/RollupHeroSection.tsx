import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';
import { CheckSquare, FolderGit2, Flag, Target, ArrowRight, Sparkles } from 'lucide-react';

interface RollupStep {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  example: string;
  progress: number;
  icon: React.ElementType;
  badgeBg: string;
  badgeText: string;
  barColor: string;
}

const ROLLUP_STEPS: RollupStep[] = [
  {
    id: 'tasks',
    step: '1',
    title: 'Tasks',
    subtitle: 'Everyday Work',
    example: 'Finish homepage layout',
    progress: 100,
    icon: CheckSquare,
    badgeBg: 'bg-brand-green-light',
    badgeText: 'text-brand-green',
    barColor: 'bg-brand-green',
  },
  {
    id: 'project',
    step: '2',
    title: 'Project',
    subtitle: 'Active Initiative',
    example: 'Website Redesign',
    progress: 80,
    icon: FolderGit2,
    badgeBg: 'bg-brand-orange-light',
    badgeText: 'text-brand-orange',
    barColor: 'bg-brand-orange',
  },
  {
    id: 'milestone',
    step: '3',
    title: 'Milestone',
    subtitle: 'Key Checkpoint',
    example: 'Q4 Brand Launch',
    progress: 85,
    icon: Flag,
    badgeBg: 'bg-amber-50',
    badgeText: 'text-brand-yellow',
    barColor: 'bg-brand-yellow',
  },
  {
    id: 'goal',
    step: '4',
    title: 'Goal',
    subtitle: 'Company Target',
    example: 'Market Expansion',
    progress: 90,
    icon: Target,
    badgeBg: 'bg-brand-orange-light',
    badgeText: 'text-brand-orange',
    barColor: 'bg-brand-orange',
  },
];

export const RollupHeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();

  // Staggered node animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.16,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-16 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1720px] mx-auto overflow-hidden"
    >
      {/* Subtle Ambient Decorative Glow */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                scale: [1, 1.06, 1],
                opacity: [0.35, 0.5, 0.35],
              }
        }
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-br from-brand-peach/30 via-brand-orange-light/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Header Container */}
      <div className="text-left w-full max-w-5xl 2xl:max-w-6xl space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight text-left lg:whitespace-nowrap"
        >
          Every Task Moves the Bigger Goal <span className="text-brand-orange">Forward.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-4xl text-left lg:whitespace-nowrap"
        >
          Complete everyday work and watch project and goal progress update automatically.
        </motion.p>
      </div>

      {/* 4 Connected Elements: Tasks → Project → Milestone → Goal (Expanded 1720px Width) */}
      <div className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 relative"
        >
          {ROLLUP_STEPS.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === ROLLUP_STEPS.length - 1;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="relative bg-white rounded-3xl p-6 sm:p-7 lg:p-8 min-h-[220px] sm:min-h-[240px] border-2 border-brand-peach/80 shadow-warm-md hover:shadow-warm-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Connector Arrow for Desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border-2 border-brand-peach shadow-warm-md items-center justify-center text-brand-orange hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}

                <div>
                  {/* Top row: step & badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-terracotta-muted/90 bg-surface-tier1 px-3 py-1 rounded-full border border-brand-peach/50">
                      STEP 0{item.step}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-heading font-extrabold px-3 py-1 rounded-lg ${item.badgeBg} ${item.badgeText}`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {item.title}
                    </span>
                  </div>

                  {/* Title and subtitle */}
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl lg:text-2xl text-espresso leading-snug group-hover:text-brand-orange transition-colors">
                    {item.example}
                  </h3>
                  <p className="text-[15px] sm:text-base text-terracotta-muted font-normal mt-1.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Progress bar visual indicator */}
                <div className="mt-6 pt-4 border-t border-brand-peach/50">
                  <div className="flex items-center justify-between text-xs sm:text-sm mb-2 font-medium">
                    <span className="text-terracotta-muted text-xs sm:text-sm font-semibold">Rollup Progress</span>
                    <span className="font-heading font-extrabold text-base sm:text-lg text-espresso">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="w-full h-3 sm:h-3.5 rounded-full bg-surface-tier1 overflow-hidden border border-brand-peach/50 p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView
                          ? { width: `${item.progress}%` }
                          : { width: 0 }
                      }
                      transition={{
                        duration: 0.7,
                        delay: 0.25 + index * 0.12,
                        ease: 'easeOut',
                      }}
                      className={`h-full rounded-full ${item.barColor}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Informative Flow Indicator Underneath */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          className="mt-4 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 border border-brand-peach/80 shadow-warm-xs text-[13px] sm:text-sm font-semibold text-terracotta">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange shrink-0" />
            <span>Zero manual status reports — every completed item automatically rolls up</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
