import React from 'react';
import { Link } from 'react-router-dom';
import { CTASection } from '../../components/common/CTASection';
import { Layers, ShieldCheck, Zap, ArrowRight, BarChart3, CheckSquare, Target } from 'lucide-react';

export const Product: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-8 sm:space-y-14 md:space-y-24 pt-20 sm:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 text-xs font-heading font-bold text-brand-orange uppercase">
          Product Command Center
        </span>
        <h1 className="brand-h1 text-espresso">
          The Executive Command Operating System
        </h1>
        <p className="brand-subtitle text-terracotta text-left sm:text-justify max-w-2xl mx-auto">
          Astrav bridges executive strategy with daily execution across a strict 7-level organizational hierarchy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
          <Target className="w-6 h-6 text-brand-orange" />
          <h3 className="text-lg font-bold text-espresso">Automated Rollup Engine</h3>
          <p className="text-xs text-terracotta text-left sm:text-justify">
            Task completions propagate mathematically up through milestones, goals, projects, and departments.
          </p>
          <Link to="/features/goals-progress" className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1">
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
          <Zap className="w-6 h-6 text-brand-yellow" />
          <h3 className="text-lg font-bold text-espresso">AI Execution Intelligence</h3>
          <p className="text-xs text-terracotta text-left sm:text-justify">
            AI-powered goal decomposition proposals and automated daily priority recommendations.
          </p>
          <Link to="/features/ai" className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1">
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
          <ShieldCheck className="w-6 h-6 text-brand-green" />
          <h3 className="text-lg font-bold text-espresso">Composable Enterprise RBAC</h3>
          <p className="text-xs text-terracotta text-left sm:text-justify">
            Granular department and project permissions with automated zero-owner safeguards.
          </p>
          <Link to="/features/governance" className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1">
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <CTASection paddingY="pt-0 pb-2 sm:py-6 md:py-10" paddingX="px-0" />
    </div>
  );
};
