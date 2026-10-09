import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, FolderGit2, CheckSquare, Sparkles, ArrowRight, Layers, Activity, Lock, CheckCircle2 } from 'lucide-react';

export const HeroArchitecturalStructure: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number | 'all'>('all');

  const tiers = [
    {
      id: 1,
      name: 'TIER 1 • VISION & OKRS',
      title: 'Global Executive Target ARR: $24M',
      subtitle: 'Organization-wide root objective',
      progress: '88.4% Rollup',
      progressVal: 88.4,
      icon: Target,
      badgeColor: 'bg-brand-green/10 text-brand-green border-brand-green/30',
      borderColor: 'border-brand-orange/40 hover:border-brand-orange',
      bgGlow: 'bg-gradient-to-r from-brand-orange/5 via-brand-yellow/5 to-transparent',
      detail: 'Weighted impact multiplier: 1.5x • Propagates to executive command console.',
    },
    {
      id: 2,
      name: 'TIER 2 • DEPARTMENTS & PODS',
      title: 'Engineering & Product Operations',
      subtitle: 'VP of Engineering Governance Scope',
      progress: '6 Active Pods',
      progressVal: 92.0,
      icon: Shield,
      badgeColor: 'bg-brand-orange/10 text-brand-orange border-brand-orange/30',
      borderColor: 'border-brand-peach hover:border-brand-orange',
      bgGlow: 'bg-white',
      detail: 'Infrastructure Squad (96% SLA) • Security & RBAC Squad (92% SLA).',
    },
    {
      id: 3,
      name: 'TIER 3 • PROJECTS & SPECS',
      title: 'Project: Payment Gateway & SSO',
      subtitle: 'Container ID: prj_sec_99',
      progress: 'Active Sprint',
      progressVal: 78.0,
      icon: FolderGit2,
      badgeColor: 'bg-brand-yellow/20 text-espresso border-brand-yellow/40',
      borderColor: 'border-brand-peach hover:border-brand-orange',
      bgGlow: 'bg-white',
      detail: 'Linked Architecture Doc: spec_payment_v2.md (Version v3.4 History).',
    },
    {
      id: 4,
      name: 'TIER 4 • LEAF EXECUTION & TASKS',
      title: 'OAuth PKCE Token Redis Key Lock',
      subtitle: 'Assigned: Alex M. (DevOps Lead)',
      progress: 'Signed Off',
      progressVal: 100.0,
      icon: CheckSquare,
      badgeColor: 'bg-brand-green/10 text-brand-green border-brand-green/30',
      borderColor: 'border-brand-green/40 hover:border-brand-green',
      bgGlow: 'bg-gradient-to-r from-brand-green/5 via-brand-yellow/5 to-transparent',
      detail: 'SLA Status: Passed (0ms delay) • 4 Checklist Items Verified.',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-10 pb-16 px-4 sm:px-6 lg:px-12 bg-white border-b border-brand-peach/40">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Asymmetric Editorial Headline & Positioning */}
        <div className="lg:col-span-5 space-y-7 text-left lg:sticky lg:top-28">
          {/* Editorial Kicker */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach/80 shadow-warm-2xs">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-mono font-extrabold tracking-widest text-espresso uppercase">
              The Living Operating Architecture
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="font-extrabold text-[40px] sm:text-[56px] xl:text-[68px] leading-[1.05] tracking-tight text-espresso">
              Strategy to <br />
              Execution, <br />
              <span className="bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green bg-clip-text text-transparent italic">
                Engineered.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-md pt-1">
              FounderOS connects high-level company objectives down to individual leaf tasks across an immutable 4-tier architectural system with automated mathematical rollups.
            </p>
          </div>

          {/* CTAs */}
          <div className="space-y-4 pt-1">
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#conversion-cta"
                className="inline-flex items-center justify-center gap-2.5 text-sm font-bold text-white bg-brand-orange hover:bg-primary-hover px-7 py-3.5 rounded-xl shadow-glow-orange hover:-translate-y-0.5 transition-all group"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/app/dashboard"
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-espresso bg-surface-tier1 hover:bg-white px-6 py-3.5 rounded-xl border border-brand-peach/80 transition-all hover:border-brand-orange shadow-warm-2xs"
              >
                <Layers className="w-4.5 h-4.5 text-brand-orange" />
                <span>Launch Console</span>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-1 text-xs font-mono text-terracotta">
              <span className="flex items-center gap-1.5 font-bold text-espresso">
                <Activity className="w-3.5 h-3.5 text-brand-green" /> 99.998% Synced
              </span>
              <span className="flex items-center gap-1.5 font-bold text-espresso">
                <Lock className="w-3.5 h-3.5 text-brand-orange" /> PostgreSQL RLS
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Clean Aligned Architectural Tiers (NO OVERLAPPING) */}
        <div className="lg:col-span-7 space-y-5 w-full">
          {/* Top Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-surface-ambient border border-brand-peach/80 shadow-warm-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-extrabold text-espresso uppercase">SYSTEM ARCHITECTURE TIERS</span>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-mono font-extrabold">
                ALIGNED CASCADE VIEW
              </span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSelectedTier('all')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedTier === 'all'
                    ? 'bg-brand-orange text-white shadow-glow-orange'
                    : 'bg-white text-terracotta hover:bg-surface-tier1 border border-brand-peach'
                }`}
              >
                SHOW ALL
              </button>
              {[1, 2, 3, 4].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedTier === tier
                      ? 'bg-brand-orange text-white shadow-glow-orange'
                      : 'bg-white text-terracotta hover:bg-surface-tier1 border border-brand-peach'
                  }`}
                >
                  T{tier}
                </button>
              ))}
            </div>
          </div>

          {/* Connected Architectural Spine Container */}
          <div className="relative space-y-4 pl-4 sm:pl-6 border-l-2 border-brand-orange/30">
            {tiers
              .filter((tier) => selectedTier === 'all' || selectedTier === tier.id)
              .map((tier) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.id}
                    className={`relative p-5 sm:p-6 rounded-2xl ${tier.bgGlow} border ${tier.borderColor} shadow-warm-md hover:shadow-warm-lg transition-all space-y-3.5 group`}
                  >
                    {/* Node Spine Marker */}
                    <div className="absolute -left-[25px] sm:-left-[33px] top-6 w-4 h-4 rounded-full bg-white border-2 border-brand-orange flex items-center justify-center shadow-warm-2xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    </div>

                    {/* Tier Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-peach/40 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-tier1 border border-brand-peach text-brand-orange flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-extrabold text-brand-orange tracking-wider uppercase">
                            {tier.name}
                          </span>
                          <h3 className="text-base sm:text-lg font-extrabold text-espresso">{tier.title}</h3>
                          <span className="text-xs text-terracotta font-medium">{tier.subtitle}</span>
                        </div>
                      </div>

                      <span className={`self-start sm:self-center px-3 py-1 rounded-full text-xs font-bold border ${tier.badgeColor} shrink-0`}>
                        {tier.progress}
                      </span>
                    </div>

                    {/* Tier Detail & Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-terracotta">{tier.detail}</span>
                        <span className="font-mono font-bold text-espresso ml-2">{tier.progressVal}%</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-surface-tier1 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green rounded-full transition-all duration-500"
                          style={{ width: `${tier.progressVal}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Bottom Summary Bar */}
          <div className="p-4 rounded-2xl bg-surface-tier1 border border-brand-peach/80 flex items-center justify-between text-xs text-terracotta">
            <span className="flex items-center gap-1.5 font-bold text-espresso">
              <Sparkles className="w-4 h-4 text-brand-orange" /> Gemini 2.5 AI Engine Active
            </span>
            <span className="flex items-center gap-1.5 font-mono font-bold text-brand-green">
              <CheckCircle2 className="w-4 h-4" /> 100% Cascade Aligned
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
