import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Building2, Shield, Users, FolderGit2, Target, Flag, CheckSquare, Layers, ArrowRight } from 'lucide-react';

interface HierarchyNode {
  id: string;
  level: string;
  name: string;
  subtitle: string;
  metrics: string;
  status: string;
  icon: any;
  color: string;
}

const hierarchyNodes: HierarchyNode[] = [
  {
    id: 'org',
    level: 'L1 • Root Governance',
    name: 'GetAstrav Enterprise',
    subtitle: 'Multi-Tenant Organization Root',
    metrics: '4 Departments • 18 Teams • $24M Target ARR',
    status: '100% Operational',
    icon: Building2,
    color: 'from-brand-orange to-brand-yellow',
  },
  {
    id: 'dept',
    level: 'L2 • Strategic Division',
    name: 'Engineering & Product Ops',
    subtitle: 'VP of Engineering Governance Scope',
    metrics: '6 Squads • 12 Active Projects',
    status: '91.4% Velocity',
    icon: Shield,
    color: 'from-brand-orange to-brand-peach',
  },
  {
    id: 'team',
    level: 'L3 • Cross-Functional Squad',
    name: 'Core Platform & Infra Pod',
    subtitle: '6 Staff Engineers & Product Managers',
    metrics: '4 Active Sprint Containers',
    status: '96.2% On-Time SLA',
    icon: Users,
    color: 'from-brand-yellow to-brand-green',
  },
  {
    id: 'project',
    level: 'L4 • Execution Container',
    name: 'Project: SSO & Security Hardening',
    subtitle: 'PRJ-8820 • Spec Version v3.4',
    metrics: '8 Key Milestones • 24 Tasks',
    status: '78% Sprint Complete',
    icon: FolderGit2,
    color: 'from-brand-green to-brand-yellow',
  },
  {
    id: 'goal',
    level: 'L5 • Strategic Goal (OKR)',
    name: 'OKR-01: Pass SOC2 & SAML SSO',
    subtitle: '1.5x Multiplier Weight Impact',
    metrics: 'Target Impact: +18.4% ARR',
    status: '88% Computed Rollup',
    icon: Target,
    color: 'from-brand-orange to-brand-green',
  },
  {
    id: 'milestone',
    level: 'L6 • Delivery Milestone',
    name: 'M-02: OAuth PKCE Session Security',
    subtitle: 'Intermediate Delivery Gate',
    metrics: 'Due Nov 15 • 4 Tasks Linked',
    status: '3 of 4 Tasks Completed',
    icon: Flag,
    color: 'from-brand-yellow to-brand-orange',
  },
  {
    id: 'task',
    level: 'L7 • Actionable Leaf Task',
    name: 'Implement Redis Token Key Locks',
    subtitle: 'Assigned: Alex M. (DevOps Lead)',
    metrics: '4 Subtask Checklists Passed',
    status: 'Manager Sign-off Verified',
    icon: CheckSquare,
    color: 'from-brand-green to-brand-peach',
  },
];

export const HierarchyInfographic: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('org');

  const currentNode = hierarchyNodes.find((n) => n.id === selectedNode) || hierarchyNodes[0];

  return (
    <div className="w-full bg-white p-4 sm:p-6 lg:p-7 rounded-2xl border border-brand-peach/80 shadow-warm-xl space-y-5">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Visual A • Connected Organization Hierarchy
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Organization → Departments → Teams → Projects → Goals → Tasks
        </h3>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto">
          Every entity in FounderOS is connected in a real-time 7-level structural graph. Click any node below to inspect live permissions, metrics, and rollup connections.
        </p>
      </div>

      {/* Interactive Hierarchical Graph Node Selector */}
      <div className="relative p-4 sm:p-8 rounded-xl bg-surface-ambient border border-brand-peach/70 shadow-warm-sm space-y-8 w-full">
        {/* Node Flow Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full">
          {hierarchyNodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;
            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => setSelectedNode(node.id)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-brand-orange text-white shadow-glow-orange scale-105 border border-brand-orange'
                      : 'bg-white text-espresso hover:bg-surface-tier1 border border-brand-peach/80 shadow-warm-2xs'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-brand-orange'}`} />
                  <span>{node.name.split(':')[0]}</span>
                </button>
                {idx < hierarchyNodes.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-brand-peach hidden sm:block shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Selected Node Live Inspector Card */}
        <MotionWrapper key={currentNode.id} direction="up" className="w-full max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-peach shadow-warm-lg space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-brand-peach/50 pb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentNode.color} text-white flex items-center justify-center shadow-glow-orange shrink-0`}>
                  <currentNode.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-mono font-extrabold text-brand-orange uppercase">{currentNode.level}</span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-espresso">{currentNode.name}</h4>
                  <p className="text-xs text-terracotta">{currentNode.subtitle}</p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold shrink-0">
                {currentNode.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-surface-ambient border border-brand-peach/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">NODE METRICS</span>
                <p className="text-xs sm:text-sm font-bold text-espresso">{currentNode.metrics}</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-ambient border border-brand-peach/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">RBAC GOVERNANCE</span>
                <p className="text-xs sm:text-sm font-bold text-espresso">PostgreSQL RLS Protected</p>
              </div>

              <div className="p-4 rounded-xl bg-surface-ambient border border-brand-peach/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">REAL-TIME ROLLUP</span>
                <p className="text-xs sm:text-sm font-bold text-brand-orange">Sub-50ms Synchronized</p>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};
