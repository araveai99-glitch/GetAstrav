import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Compass,
  Target,
  FolderKanban,
  Users,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Clock,
  ArrowRight,
  Calendar,
  Activity,
  MessageSquareWarning,
  HelpCircle,
  RefreshCw,
} from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';
import { IllustratedCardBadge, type IllustratedBadgeVariant } from '../../../components/common/IllustratedCardBadge';

const VISION_STEPS = [
  {
    id: 'vision',
    number: '01',
    label: 'Vision',
    icon: Compass,
    illustrationVariant: 'goal' as IllustratedBadgeVariant,
    accent: 'text-brand-orange',
    containerBg: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6]',
    borderColor: 'border-brand-orange/25',
    title: 'Strategic Direction',
    desc: 'Set the company destination and long-term vision.',
  },
  {
    id: 'goals',
    number: '02',
    label: 'Goals',
    icon: Target,
    illustrationVariant: 'goal' as IllustratedBadgeVariant,
    accent: 'text-amber-700',
    containerBg: 'bg-gradient-to-br from-[#fefbf0] via-[#fef6dc] to-[#fdeec0]',
    borderColor: 'border-brand-yellow/35',
    title: 'Company Objectives',
    desc: 'Break vision into measurable quarterly targets.',
  },
  {
    id: 'projects',
    number: '03',
    label: 'Projects',
    icon: FolderKanban,
    illustrationVariant: 'projects' as IllustratedBadgeVariant,
    accent: 'text-brand-green',
    containerBg: 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7]',
    borderColor: 'border-brand-green/25',
    title: 'Core Initiatives',
    desc: 'Group high-impact work into clear deliverables.',
  },
  {
    id: 'teams',
    number: '04',
    label: 'Teams',
    icon: Users,
    illustrationVariant: 'teams' as IllustratedBadgeVariant,
    accent: 'text-brand-orange',
    containerBg: 'bg-gradient-to-br from-[#fff4ed] to-[#ffe5d6]',
    borderColor: 'border-brand-orange/25',
    title: 'Team Ownership',
    desc: 'Assign clear accountability to dedicated pods.',
  },
  {
    id: 'results',
    number: '05',
    label: 'Results',
    icon: TrendingUp,
    illustrationVariant: 'progress' as IllustratedBadgeVariant,
    accent: 'text-brand-green',
    containerBg: 'bg-gradient-to-br from-[#edf7f3] to-[#daf1e7]',
    borderColor: 'border-brand-green/25',
    title: 'Automated Outcomes',
    desc: 'Real progress updates automatically as work gets done.',
  },
];

export const Founders: React.FC = () => {
  useEffect(() => {
    document.title = 'Astrav for Founders — Turn Your Vision Into Results';
    window.scrollTo(0, 0);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  // Section A: From Vision to Action
  const sectionARef = useRef<HTMLDivElement>(null);
  const isSectionAInView = useInView(sectionARef, { once: false, amount: 0.2 });
  const [selectedStep, setSelectedStep] = useState(0);

  // Section B: Know Where Your Business Stands
  const sectionBRef = useRef<HTMLDivElement>(null);
  const isSectionBInView = useInView(sectionBRef, { once: false, amount: 0.2 });

  // Section C: Less Chasing. More Progress
  const sectionCRef = useRef<HTMLDivElement>(null);
  const isSectionCInView = useInView(sectionCRef, { once: false, amount: 0.2 });

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-24 sm:pt-28 pb-8 sm:pb-12 flex flex-col space-y-10 sm:space-y-12">
      {/* ==================================================================== */}
      {/* DIRECT OPENING (PROPER NAVBAR CLEARANCE, NO HERO BANNER, NO BADGES) */}
      {/* ==================================================================== */}
      <div className="max-w-4xl xl:max-w-5xl space-y-3">
        <h1 className="text-3xl min-[390px]:text-[32px] sm:text-4xl lg:text-[42px] xl:text-5xl font-extrabold text-espresso tracking-tight font-heading leading-tight lg:whitespace-nowrap">
          Turn Your Vision <span className="text-brand-orange">Into Results.</span>
        </h1>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-3xl">
          Connect your goals, teams, and projects in one view. See what is moving forward, spot delays early, and make clear decisions without chasing updates.
        </p>
      </div>

      {/* ==================================================================== */}
      {/* SECTION A — From Vision to Action (Animated Workflow Diagram)        */}
      {/* ==================================================================== */}
      <section
        ref={sectionARef}
        className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm relative overflow-hidden space-y-6"
      >
        <div className="max-w-2xl space-y-1 text-left">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            From Vision to Action
          </h2>
          <p className="text-base text-terracotta mt-1 leading-relaxed">
            See how everyday work connects to big company goals in 5 clear steps.
          </p>
        </div>

        {/* Diagram Flow */}
        <div className="relative pt-2">
          {/* Animated Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[3px] bg-brand-peach/40 -z-0">
            <motion.div
              initial={{ width: '0%' }}
              animate={{
                width: isSectionAInView || shouldReduceMotion ? '100%' : '0%',
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {VISION_STEPS.map((step, idx) => {
              const isSelected = selectedStep === idx;
              const delay = shouldReduceMotion ? 0 : 0.1 * idx;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={
                    isSectionAInView || shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 14 }
                  }
                  transition={{ duration: 0.4, delay }}
                  onClick={() => setSelectedStep(idx)}
                  className={`cursor-pointer rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-white border-brand-orange shadow-warm-md scale-[1.02] ring-2 ring-brand-orange/30'
                      : 'bg-white hover:bg-surface-ambient border-brand-peach/80 hover:border-brand-orange/50 shadow-[0_4px_20px_-4px_rgba(241,94,28,0.06),0_2px_6px_-2px_rgba(39,24,18,0.04)] hover:-translate-y-1 hover:shadow-warm-md'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-7 h-7 rounded-full text-xs font-mono font-bold bg-[#fff4ed] text-brand-orange border border-brand-orange/20 flex items-center justify-center">
                        {step.number}
                      </span>
                      <IllustratedCardBadge variant={step.illustrationVariant} size="sm" />
                    </div>

                    <div className="space-y-0.5 text-left">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-orange">
                        {step.label}
                      </div>
                      <h3 className="font-heading font-extrabold text-[17px] sm:text-base text-espresso">
                        {step.title}
                      </h3>
                      <p className="text-sm text-terracotta leading-relaxed pt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-terracotta-muted">
                    <span className={isSelected ? 'text-brand-orange font-bold' : ''}>
                      {isSelected ? 'Active Step' : 'Click to inspect'}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? 'text-brand-orange translate-x-1' : 'text-terracotta-muted'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detail Callout for Active Step */}
          <div className="mt-4 p-4 rounded-2xl bg-surface-ambient border border-brand-peach/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-orange to-[#d94e10] text-white flex items-center justify-center shrink-0 shadow-sm shadow-brand-orange/20">
                {React.createElement(VISION_STEPS[selectedStep].icon, { className: 'w-4.5 h-4.5', strokeWidth: 2 })}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-brand-orange uppercase">
                  Step {VISION_STEPS[selectedStep].number} • {VISION_STEPS[selectedStep].label}
                </span>
                <div className="text-sm sm:text-sm font-heading font-bold text-espresso">
                  {VISION_STEPS[selectedStep].title}: {VISION_STEPS[selectedStep].desc}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-green bg-white px-3 py-1 rounded-full border border-brand-green/30 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Live Telemetry Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION B — See the Bigger Picture (Dashboard Progress Telemetry)    */}
      {/* ==================================================================== */}
      <section
        ref={sectionBRef}
        className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm space-y-6"
      >
        <div className="max-w-2xl space-y-1 text-left">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            Know Where Your Business Stands.
          </h2>
          <p className="text-base text-terracotta mt-1 leading-relaxed">
            A quick view of your company's progress, healthy projects, and upcoming milestones.
          </p>
        </div>

        {/* 4 Telemetry Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Overall Goal Progress */}
          <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/80 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between text-sm sm:text-xs font-heading font-bold text-terracotta mb-1">
                <span className="flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-brand-orange" /> Goal Progress
                </span>
                <span className="font-mono text-brand-orange font-bold">78%</span>
              </div>
              <div className="text-[20px] font-extrabold font-heading text-espresso">
                Q3 Strategy
              </div>
              <p className="text-sm sm:text-xs text-terracotta-muted mt-0.5">
                Calculated from 18 verified deliverables
              </p>
            </div>

            <div className="space-y-1">
              <div className="w-full h-2.5 rounded-full bg-white border border-brand-peach/60 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: isSectionBInView || shouldReduceMotion ? '78%' : '0%',
                  }}
                  transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-yellow"
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-terracotta-muted">
                <span>Paced for Oct 31</span>
                <span>+6% this week</span>
              </div>
            </div>
          </div>

          {/* Card 2: Projects On Track */}
          <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/80 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between text-sm sm:text-xs font-heading font-bold text-terracotta mb-1">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-brand-green" /> Projects On Track
                </span>
                <span className="font-mono text-brand-green font-bold">14 / 16</span>
              </div>
              <div className="text-[20px] font-extrabold font-heading text-espresso">
                14 Healthy
              </div>
              <p className="text-sm sm:text-xs text-terracotta-muted mt-0.5">
                87.5% of active initiatives on schedule
              </p>
            </div>

            <div className="space-y-1">
              <div className="w-full h-2.5 rounded-full bg-white border border-brand-peach/60 overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{
                    width: isSectionBInView || shouldReduceMotion ? '87.5%' : '0%',
                  }}
                  transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
                  className="h-full rounded-full bg-brand-green"
                />
              </div>
              <div className="flex justify-between text-xs font-mono text-terracotta-muted">
                <span>Across 5 Teams</span>
                <span>2 In Review</span>
              </div>
            </div>
          </div>

          {/* Card 3: Work Needing Attention */}
          <div className="p-4 rounded-2xl bg-[#fffbf7] border-2 border-brand-orange/60 shadow-warm-xs flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between text-sm sm:text-xs font-heading font-bold text-brand-orange mb-1">
                <span className="flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-brand-orange" /> Needs Attention
                </span>
                <span className="font-mono font-bold">1 Delay</span>
              </div>
              <div className="text-[18px] sm:text-base font-extrabold font-heading text-espresso leading-snug">
                Security Sign-Off
              </div>
              <p className="text-sm sm:text-xs text-terracotta mt-0.5">
                Review waiting &gt; 48h for approval
              </p>
            </div>

            <div className="pt-2 border-t border-brand-peach/50 flex items-center justify-between text-sm font-heading font-bold text-brand-orange">
              <span>Unblock in 1 Click</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 4: Upcoming Milestones */}
          <div className="p-4 rounded-2xl bg-surface-ambient border border-brand-peach/80 flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between text-sm sm:text-xs font-heading font-bold text-terracotta mb-1">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-yellow" /> Next 14 Days
                </span>
                <span className="font-mono font-bold text-espresso">3 Gates</span>
              </div>
              <div className="text-[20px] font-extrabold font-heading text-espresso">
                Upcoming Gates
              </div>
              <p className="text-sm sm:text-xs text-terracotta-muted mt-0.5">
                Beta Rollout, SOC2 Audit, Billing v2
              </p>
            </div>

            <div className="text-xs font-mono text-brand-green font-semibold">
              ✓ All requirements assigned
            </div>
          </div>
        </div>

        <div className="text-left text-xs font-mono text-terracotta-muted">
          * Illustrative sample data demonstrating live progress telemetry.
        </div>
      </section>

      {/* ==================================================================== */}
      {/* SECTION C — Focus on What Matters (Comparison Flows)                */}
      {/* ==================================================================== */}
      <section
        ref={sectionCRef}
        className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-sm space-y-6"
      >
        <div className="max-w-2xl space-y-1 text-left">
          <h2 className="text-[26px] min-[375px]:text-[28px] sm:text-3xl font-heading font-extrabold text-espresso">
            Less Chasing. More Progress.
          </h2>
          <p className="text-base text-terracotta mt-1 leading-relaxed">
            Spend less time in status meetings and more time moving the company forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Flow 1: Manual */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={
              isSectionCInView || shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }
            }
            transition={{ duration: 0.45 }}
            className="p-5 rounded-2xl bg-[#fff7f5] border border-red-200/80 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-red-600 uppercase">
                The Manual Way
              </span>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-white border border-red-100 flex items-center gap-3">
                  <Clock className="w-4 h-4 text-red-500 shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-[16px] sm:text-sm text-espresso">
                      Manual follow-ups
                    </h4>
                    <p className="text-sm sm:text-xs text-terracotta">
                      Constant messages, status check-ins, and recap emails.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-red-100 flex items-center gap-3">
                  <MessageSquareWarning className="w-4 h-4 text-red-500 shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-[16px] sm:text-sm text-espresso">
                      Scattered updates
                    </h4>
                    <p className="text-sm sm:text-xs text-terracotta">
                      Information spread across chat, documents, and spreadsheets.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-red-100 flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-red-500 shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-[16px] sm:text-sm text-espresso">
                      Unclear progress
                    </h4>
                    <p className="text-sm sm:text-xs text-terracotta">
                      Decisions based on gut feelings and outdated status reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-red-100/70 text-red-800 text-sm font-heading font-semibold text-center">
              Hours wasted chasing updates each week
            </div>
          </motion.div>

          {/* Flow 2: Astrav */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={
              isSectionCInView || shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }
            }
            transition={{ duration: 0.45, delay: 0.1 }}
            className="p-5 rounded-2xl bg-gradient-to-b from-[#f9fffb] to-[#f0fbf5] border-2 border-brand-green/70 shadow-warm-xs flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-brand-green uppercase">
                With Astrav
              </span>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-white border border-brand-green/40 flex items-center gap-3">
                  <Target className="w-4 h-4 text-brand-green shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-[16px] sm:text-sm text-espresso">
                      Connected goals
                    </h4>
                    <p className="text-sm sm:text-xs text-terracotta">
                      High-level strategy connects directly to daily tasks.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-brand-green/40 flex items-center gap-3">
                  <RefreshCw className="w-4 h-4 text-brand-green shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-[16px] sm:text-sm text-espresso">
                      Automatic progress updates
                    </h4>
                    <p className="text-sm sm:text-xs text-terracotta">
                      Completed work recalculates progress in real time.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-brand-green/40 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-[16px] sm:text-sm text-espresso">
                      Clear decisions
                    </h4>
                    <p className="text-sm sm:text-xs text-terracotta">
                      Spot problems early and lead with live, accurate numbers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-brand-green text-white text-sm font-heading font-bold text-center shadow-sm">
              Complete progress visibility without status meetings
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FINAL CTA                                                            */}
      {/* ==================================================================== */}
      <CTASection
        title="Move Your Vision"
        highlightTitle="Forward."
        description="Connect your strategy to daily execution and gain real-time visibility into your entire organization."
        showLaunchConsole={false}
        paddingY="pt-2 pb-2"
        paddingX="px-0"
      />
    </div>
  );
};
