import React from 'react';
import { Link } from 'react-router-dom';
import { CTASection } from '../../components/common/CTASection';
import { Layers, ShieldCheck, Zap, ArrowRight, BarChart3, CheckSquare, Target } from 'lucide-react';

export const Product: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 md:space-y-24 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase">
          Product Command Center
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-espresso">
          The Executive Command Operating System
        </h1>
        <p className="text-base text-terracotta leading-relaxed">
          FounderOS bridges executive strategy with operational execution across a strict 7-level hierarchy. Explore our core pillars below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
          <Target className="w-6 h-6 text-brand-orange" />
          <h3 className="text-lg font-bold text-espresso">Automated Rollup Engine</h3>
          <p className="text-xs text-terracotta">Leaf task completion mathematical ratios propagate continuously up into Milestones, Goals, Projects, and Departments.</p>
          <Link to="/features/goals-progress" className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1">
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
          <Zap className="w-6 h-6 text-brand-yellow" />
          <h3 className="text-lg font-bold text-espresso">AI Execution Intelligence</h3>
          <p className="text-xs text-terracotta">Gemini 2.5 Flash Lite engine delivers daily Focus Today recommendations and autonomous goal decomposition proposals.</p>
          <Link to="/features/ai" className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1">
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
          <ShieldCheck className="w-6 h-6 text-brand-green" />
          <h3 className="text-lg font-bold text-espresso">Composable Enterprise RBAC</h3>
          <p className="text-xs text-terracotta">Global roles plus scoped department and project rights. PostgreSQL triggers enforce zero-owner protection.</p>
          <Link to="/features/governance" className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1">
            Learn more <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <CTASection />
    </div>
  );
};
