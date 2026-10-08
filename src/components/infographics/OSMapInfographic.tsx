import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Target, FolderGit2, CheckSquare, Sparkles, BarChart3, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

export const OSMapInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Section 10 • Unified Product Map
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight">
          FounderOS in One View
        </h2>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-[800px] mx-auto">
          The complete goal-driven organization operating system connecting strategy, projects, tasks, AI intelligence, analytics, and governance.
        </p>
      </div>

      {/* ONE LARGE OPERATING SYSTEM MAP */}
      <div className="relative p-6 sm:p-10 rounded-2xl bg-surface-ambient border border-brand-peach/80 shadow-warm-lg space-y-8 w-full">
        <div className="flex items-center justify-between border-b border-brand-peach/50 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green text-white flex items-center justify-center font-bold shadow-glow-orange">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-espresso">ASTRAV Operating Engine Kernel</h3>
              <span className="text-xs text-terracotta font-mono">Unified Org Graph v4.8</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
            100% Connected Architecture
          </span>
        </div>

        {/* 7 Connected Nodes Grid Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative w-full">
          {[
            { step: '01', title: 'Strategy', desc: 'Founder OKRs & vision', icon: Target, badge: 'Top-Down' },
            { step: '02', title: 'Goals', desc: 'Target metrics & weights', icon: Target, badge: 'Weighted' },
            { step: '03', title: 'Projects', desc: 'Execution containers', icon: FolderGit2, badge: 'Scoped' },
            { step: '04', title: 'Tasks', desc: 'Leaf work & subtasks', icon: CheckSquare, badge: 'SLA Tracked' },
            { step: '05', title: 'AI Engine', desc: 'Gemini 2.5 decomposition', icon: Sparkles, badge: 'Automated' },
            { step: '06', title: 'Analytics', desc: 'Real-time progress rollup', icon: BarChart3, badge: 'Sub-50ms' },
            { step: '07', title: 'Governance', desc: 'RBAC & RLS security', icon: ShieldCheck, badge: 'SOC2 Aligned' },
          ].map((node, idx) => {
            const Icon = node.icon;
            return (
              <MotionWrapper key={idx} delay={idx * 0.06} direction="up">
                <div className="p-4 rounded-xl bg-white border border-brand-peach/80 shadow-warm-2xs hover:border-brand-orange hover:shadow-warm-md transition-all space-y-2 relative w-full group">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-terracotta-muted">{node.step}</span>
                    <span className="px-2 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-bold">
                      {node.badge}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-espresso">{node.title}</h4>
                    <p className="text-[11px] text-terracotta leading-tight mt-0.5">{node.desc}</p>
                  </div>

                  {/* Connector Arrow */}
                  {idx < 6 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                    </div>
                  )}
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};
