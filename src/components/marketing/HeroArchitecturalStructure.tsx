import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Shield, Users, FolderGit2, CheckSquare, Sparkles, ArrowRight, Layers, Activity, TrendingUp, Lock } from 'lucide-react';

export const HeroArchitecturalStructure: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-12 bg-white border-b border-brand-peach/40">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Oversized Editorial Typography & Concise Positioning */}
        <div className="lg:col-span-5 space-y-8 text-left z-10">
          {/* Editorial Kicker Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach/80">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-mono font-extrabold tracking-widest text-espresso uppercase">
              The Living Operating Architecture
            </span>
          </div>

          {/* Oversized Asymmetric Editorial Headline */}
          <div className="space-y-3">
            <h1 className="font-extrabold text-[42px] sm:text-[60px] xl:text-[72px] leading-[1.04] tracking-tight text-espresso">
              Strategy to <br />
              Execution, <br />
              <span className="bg-gradient-to-r from-brand-orange via-brand-yellow to-brand-green bg-clip-text text-transparent italic">
                Engineered.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-terracotta leading-relaxed font-normal max-w-md pt-2">
              FounderOS connects high-level company objectives down to individual leaf tasks across an immutable 7-layer architectural system with automated mathematical rollups.
            </p>
          </div>

          {/* Distinctive CTAs & Status Meta */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#conversion-cta"
                className="inline-flex items-center justify-center gap-3 text-sm font-bold text-white bg-brand-orange hover:bg-primary-hover px-7 py-4 rounded-xl shadow-glow-orange hover:-translate-y-0.5 transition-all group"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/app/dashboard"
                className="inline-flex items-center justify-center gap-2.5 text-sm font-bold text-espresso bg-surface-tier1 hover:bg-white px-6 py-4 rounded-xl border border-brand-peach/80 transition-all hover:border-brand-orange"
              >
                <Layers className="w-4.5 h-4.5 text-brand-orange" />
                <span>Launch Console</span>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2 text-xs font-mono text-terracotta">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-brand-green" /> 99.998% Uptime
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-brand-orange" /> PostgreSQL RLS
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Signature Architectural 3D Layered Composition */}
        <div className="lg:col-span-7 relative w-full pt-6 lg:pt-0">
          <div className="relative w-full aspect-[4/3] max-h-[640px] rounded-3xl bg-surface-ambient border border-brand-peach/80 p-4 sm:p-8 shadow-warm-xl overflow-hidden flex flex-col justify-between"
               style={{ perspective: '1200px' }}>
            
            {/* Background Ambient Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-radial from-brand-orange/10 via-brand-peach/20 to-transparent pointer-events-none blur-2xl" />

            {/* Top Architectural Controls */}
            <div className="flex items-center justify-between z-10 pb-4 border-b border-brand-peach/60">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-espresso uppercase">SYSTEM ARCHITECTURE MAP</span>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-mono font-bold">
                  4 DIMENSIONAL TIERS
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4].map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setActiveLayer(tier)}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                      activeLayer === tier
                        ? 'bg-brand-orange text-white shadow-glow-orange scale-110'
                        : 'bg-white text-terracotta hover:bg-surface-tier1 border border-brand-peach'
                    }`}
                  >
                    T{tier}
                  </button>
                ))}
              </div>
            </div>

            {/* 3D Stacked Architectural Layer Cards */}
            <div className="relative flex-1 my-4 flex items-center justify-center">
              
              {/* TIER 1: Organization Vision (Top Layer) */}
              <div
                onClick={() => setActiveLayer(1)}
                className={`absolute w-full max-w-lg transition-all duration-500 ease-out cursor-pointer p-5 rounded-2xl bg-white border border-brand-orange/40 shadow-warm-lg ${
                  activeLayer === 1
                    ? 'z-40 translate-y-[-40px] scale-105 border-brand-orange ring-2 ring-brand-orange/20 shadow-glow-orange'
                    : 'z-10 translate-y-[-70px] scale-95 opacity-80'
                }`}
                style={{ transform: `translate3d(0px, ${activeLayer === 1 ? -40 : -70}px, 40px) rotateX(12deg) rotateY(-6deg)` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-brand-orange text-white flex items-center justify-center">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-brand-orange font-bold uppercase">TIER 1 • VISION & OKRs</span>
                      <h4 className="text-sm font-extrabold text-espresso">Global Executive Target ARR: $24M</h4>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
                    88.4% Rollup
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface-tier1 overflow-hidden mt-3">
                  <div className="h-full bg-gradient-to-r from-brand-orange to-brand-green rounded-full w-[88%]" />
                </div>
              </div>

              {/* TIER 2: Departments & Squads (Middle Layer) */}
              <div
                onClick={() => setActiveLayer(2)}
                className={`absolute w-full max-w-lg transition-all duration-500 ease-out cursor-pointer p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-md ${
                  activeLayer === 2
                    ? 'z-40 translate-y-[0px] scale-105 border-brand-orange ring-2 ring-brand-orange/20 shadow-glow-orange'
                    : 'z-20 translate-y-[-20px] scale-98 opacity-90'
                }`}
                style={{ transform: `translate3d(15px, ${activeLayer === 2 ? 0 : -20}px, 20px) rotateX(12deg) rotateY(-6deg)` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-brand-yellow/20 text-brand-orange flex items-center justify-center">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-brand-orange font-bold uppercase">TIER 2 • DEPARTMENTS</span>
                      <h4 className="text-sm font-extrabold text-espresso">Engineering & Product Operations</h4>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-surface-tier1 text-espresso text-[10px] font-mono font-bold">
                    6 Active Pods
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2 text-xs text-terracotta">
                  <div className="p-2 rounded bg-surface-ambient border border-brand-peach/40">Infrastructure Squad (96% SLA)</div>
                  <div className="p-2 rounded bg-surface-ambient border border-brand-peach/40">Security & RBAC Squad (92% SLA)</div>
                </div>
              </div>

              {/* TIER 3: Projects & Specs (Operational Layer) */}
              <div
                onClick={() => setActiveLayer(3)}
                className={`absolute w-full max-w-lg transition-all duration-500 ease-out cursor-pointer p-5 rounded-2xl bg-white border border-brand-peach shadow-warm-md ${
                  activeLayer === 3
                    ? 'z-40 translate-y-[40px] scale-105 border-brand-orange ring-2 ring-brand-orange/20 shadow-glow-orange'
                    : 'z-30 translate-y-[30px] scale-100 opacity-95'
                }`}
                style={{ transform: `translate3d(-10px, ${activeLayer === 3 ? 40 : 30}px, 0px) rotateX(12deg) rotateY(-6deg)` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-brand-peach/40 text-espresso flex items-center justify-center">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-terracotta font-bold uppercase">TIER 3 • PROJECTS</span>
                      <h4 className="text-sm font-extrabold text-espresso">Project: Payment Gateway & SSO</h4>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold">
                    Active Sprint
                  </span>
                </div>
                <p className="text-xs text-terracotta">Linked Document: spec_payment_v2.md (Version v3.4)</p>
              </div>

              {/* TIER 4: Tasks & Subtasks (Leaf Foundation) */}
              <div
                onClick={() => setActiveLayer(4)}
                className={`absolute w-full max-w-lg transition-all duration-500 ease-out cursor-pointer p-5 rounded-2xl bg-white border border-brand-green/40 shadow-warm-lg ${
                  activeLayer === 4
                    ? 'z-40 translate-y-[80px] scale-105 border-brand-green ring-2 ring-brand-green/20 shadow-glow-green'
                    : 'z-35 translate-y-[75px] scale-[1.02] opacity-100'
                }`}
                style={{ transform: `translate3d(0px, ${activeLayer === 4 ? 80 : 75}px, -20px) rotateX(12deg) rotateY(-6deg)` }}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                      <CheckSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-brand-green font-bold uppercase">TIER 4 • LEAF EXECUTION</span>
                      <h4 className="text-sm font-extrabold text-espresso">OAuth PKCE Token Redis Lock</h4>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold">
                    Signed Off
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-terracotta pt-1">
                  <span>Assigned: Alex M. (DevOps Lead)</span>
                  <span>SLA: Passed (0ms delay)</span>
                </div>
              </div>
            </div>

            {/* Bottom Architectural Info Footprint */}
            <div className="z-10 pt-4 border-t border-brand-peach/60 flex items-center justify-between text-xs text-terracotta">
              <span className="flex items-center gap-1.5 font-bold text-espresso">
                <Sparkles className="w-4 h-4 text-brand-orange" /> Gemini 2.5 AI Co-Pilot Active
              </span>
              <span className="font-mono text-brand-orange font-bold">PostgreSQL Audit Logged</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
