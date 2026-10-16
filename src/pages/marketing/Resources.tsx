import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, ArrowRight, Target, Sparkles, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CTASection } from '../../components/common/CTASection';

export const Resources: React.FC = () => {
  useEffect(() => {
    document.title = 'Resources, Whitepapers & OKR Guides — Astrav';
    window.scrollTo(0, 0);
  }, []);

  const resources = [
    {
      tag: 'ARCHITECTURE WHITEPAPER',
      title: 'The Mathematics of Organizational Rollups',
      description: 'A deep architectural dive into calculating deterministic progress across subtasks, projects, and multi-tier milestones.',
      link: '/product/automated-progress-rollups',
      icon: Target,
      tagBg: 'bg-brand-orange-light text-brand-orange',
    },
    {
      tag: 'EXECUTIVE GUIDE',
      title: '7-Level Organization Hierarchy Framework',
      description: 'How modern venture-backed technology companies structure executive vision, departments, autonomous pods, and individual contributors.',
      link: '/features/teams',
      icon: Layers,
      tagBg: 'bg-brand-green-light text-brand-green',
    },
    {
      tag: 'AI PLANNING PLAYBOOK',
      title: 'Goal Decomposition with Human-in-the-Loop',
      description: 'Using generative AI co-pilots to scaffold complex quarterly objectives into actionable task proposals without hallucinations.',
      link: '/features/ai',
      icon: Sparkles,
      tagBg: 'bg-amber-50 text-amber-800',
    },
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 shadow-warm-2xs">
          <BookOpen className="w-3.5 h-3.5 text-brand-orange" />
          <span className="text-xs font-heading font-extrabold text-brand-orange uppercase tracking-wider">
            RESOURCES & ARCHITECTURE BRIEFS
          </span>
        </div>
        <h1 className="brand-h1 text-espresso tracking-tight">
          Executive Whitepapers & Engineering Frameworks
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Explore research whitepapers, architectural blueprints, and execution frameworks developed for technology founders and operational leaders.
        </p>
      </div>

      {/* 3 Symmetric Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {resources.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${item.tagBg}`}>
                    {item.tag}
                  </span>
                  <Icon className="w-4 h-4 text-terracotta-muted group-hover:text-brand-orange transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-espresso mb-2 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-terracotta leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-brand-peach/40">
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-brand-orange hover:text-brand-orange-hover transition-colors"
                >
                  <span>Read Brief</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Simulator Callout Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-orange-light/60 via-white to-surface-tier1 rounded-3xl border border-brand-orange/30 shadow-warm-md flex flex-wrap items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
            LIVE INTERACTIVE SPECIFICATION
          </span>
          <h3 className="text-lg sm:text-xl font-heading font-bold text-espresso">
            Experience the Automated Rollup Simulator
          </h3>
          <p className="text-xs sm:text-sm text-terracotta leading-relaxed">
            Test the ground-truth mathematical formulas live in your browser. Check off daily tasks to see how project, milestone, and strategic goals update dynamically.
          </p>
        </div>

        <Link
          to="/product/automated-progress-rollups"
          className="btn-brand-primary px-6 py-3 text-sm font-heading font-bold shadow-md shadow-brand-orange/30 inline-flex items-center gap-2 shrink-0"
        >
          <span>Launch Interactive Demo</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
