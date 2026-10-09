import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Target, FolderGit2, CheckSquare, Sparkles, BarChart3, ShieldCheck, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export const OSMapInfographic: React.FC = () => {
  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Visual J • Master Architectural Map of FounderOS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-espresso tracking-tight">
          A Unified Operating System in One View
        </h2>
        <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-[800px] mx-auto font-normal">
          The goal-driven organization operating system connecting strategy, projects, leaf tasks, AI decomposition, real-time rollups, and PostgreSQL governance.
        </p>
      </div>

      {/* ONE LARGE OPERATING SYSTEM MAP */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-ivory via-surface-ambient to-white border border-brand-peach/80 shadow-warm-lg space-y-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-brand-peach/50 pb-4 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold shadow-glow-orange border border-brand-orange">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-espresso">FounderOS Master Operating Kernel</h3>
              <span className="text-xs text-terracotta font-mono font-bold">UNIFIED GRAPH ARCHITECTURE V4.8</span>
            </div>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-mint-soft border border-brand-green/30 text-brand-green text-xs font-mono font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> 100% Connected Circuit
          </span>
        </div>

        {/* 7 Connected Nodes Grid Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 relative w-full">
          {[
            { step: '01', title: 'Strategy', desc: 'Founder OKRs & vision', icon: Target, badge: 'Top-Down' },
            { step: '02', title: 'Target Goals', desc: 'Impact weights & SLAs', icon: Target, badge: 'Weighted' },
            { step: '03', title: 'Project Pods', desc: 'Execution containers', icon: FolderGit2, badge: 'Scoped' },
            { step: '04', title: 'Leaf Tasks', desc: 'Subtasks & checklists', icon: CheckSquare, badge: 'Tracked' },
            { step: '05', title: 'AI Engine', desc: 'Gemini 2.5 decomposition', icon: Sparkles, badge: 'Automated' },
            { step: '06', title: 'Rollup Radar', desc: 'Real-time progress rollup', icon: BarChart3, badge: '<12ms Sync' },
            { step: '07', title: 'Governance', desc: 'RBAC & RLS security', icon: ShieldCheck, badge: 'SOC2 Aligned' },
          ].map((node, idx) => {
            const Icon = node.icon;
            return (
              <MotionWrapper key={idx} delay={idx * 0.05} direction="up">
                <div className="p-4 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-2xs hover:border-brand-orange hover:shadow-warm-md transition-all space-y-3 relative w-full group h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-terracotta-muted">{node.step}</span>
                      <span className="px-2 py-0.5 rounded-full bg-brand-orange-light text-brand-orange text-[10px] font-mono font-bold border border-brand-orange/30">
                        {node.badge}
                      </span>
                    </div>

                    <div className="w-9 h-9 rounded-xl bg-surface-tier1 border border-brand-peach/60 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      <Icon className="w-4.5 h-4.5" />
                    </div>

                    <h4 className="text-xs sm:text-sm font-extrabold text-espresso">{node.title}</h4>
                    <p className="text-[11px] text-terracotta leading-tight">{node.desc}</p>
                  </div>

                  {/* Connector Arrow */}
                  {idx < 6 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-white border border-brand-peach/80 shadow-warm-2xs flex items-center justify-center text-brand-orange">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
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
