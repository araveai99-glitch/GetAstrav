import React from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Target, Sparkles, BarChart3, ShieldCheck, FileText, Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const pillars = [
  {
    num: 'PILLAR 01',
    title: 'Automated Rollup Engine',
    desc: 'Propagates leaf task completion mathematically into strategic OKRs with manual executive override controls.',
    icon: Target,
    color: 'text-brand-orange',
    link: '/features/goals-progress',
    badge: 'Mathematical Rollups',
  },
  {
    num: 'PILLAR 02 • GEMINI',
    title: 'AI Intelligence: Today Focus',
    desc: 'Gemini Flash Lite heuristic engine decomposes high-level goals into tactical daily execution units.',
    icon: Sparkles,
    color: 'text-brand-yellow',
    link: '/features/ai',
    badge: 'Gemini 2.5 API',
  },
  {
    num: 'PILLAR 03 • DUAL VIEW',
    title: 'Dual-Mode Analytics',
    desc: 'Toggle friction-free between Executive Radar views and focused Contributor Workspaces.',
    icon: BarChart3,
    color: 'text-brand-green',
    link: '/features/analytics',
    badge: 'Org Radar & Streaks',
  },
  {
    num: 'PILLAR 04 • SECURITY',
    title: 'Composable Scoped RBAC',
    desc: 'Global roles merged with project-level privileges, zero-owner safeguards, and PostgreSQL RLS.',
    icon: ShieldCheck,
    color: 'text-brand-orange',
    link: '/features/governance',
    badge: 'Row Level Security',
  },
  {
    num: 'PILLAR 05 • AUDITABLE',
    title: 'Project Documentation',
    desc: 'Integrated rich-text spec editor attached directly to execution nodes with version history logs.',
    icon: FileText,
    color: 'text-tertiary',
    link: '/features/documentation',
    badge: 'TipTap Editor',
  },
  {
    num: 'PILLAR 06 • EDGE ENGINE',
    title: 'Edge Automation & Overdue Alerts',
    desc: 'Autonomous daemons flagging drift, instantly dispatching escalations when items slip 15+ days.',
    icon: Bell,
    color: 'text-brand-green',
    link: '/features/automation',
    badge: 'Resend API Dispatch',
  },
];

export const CorePillars: React.FC = () => {
  return (
    <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase">
            Engineering Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-espresso mt-2">
            Core Operating Pillars
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-terracotta max-w-md">
          Architectural guarantees engineered for precision execution, ambient AI context, and strict governance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <MotionWrapper key={idx} delay={idx * 0.08} direction="up">
              <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md hover:border-brand-orange hover:shadow-warm-lg transition-all group flex flex-col justify-between h-full space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-surface-tier1 border border-brand-peach/60 flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase tracking-wider">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-espresso group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-terracotta leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-brand-peach/40 flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach text-[10px] font-bold text-espresso">
                    {item.badge}
                  </span>
                  <Link
                    to={item.link}
                    className="text-xs font-bold text-brand-orange group-hover:translate-x-1 transition-transform flex items-center gap-1"
                  >
                    Inspect <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </MotionWrapper>
          );
        })}
      </div>
    </section>
  );
};
