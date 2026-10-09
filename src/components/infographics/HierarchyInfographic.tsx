import React, { useState } from 'react';
import { MotionWrapper } from '../common/MotionWrapper';
import { Building2, Shield, Users, FolderGit2, Target, Flag, CheckSquare, ArrowRight, CheckCircle2, Lock, Sparkles } from 'lucide-react';

interface HierarchyNode {
  id: string;
  level: string;
  name: string;
  subtitle: string;
  metrics: string;
  status: string;
  icon: any;
  accentBg: string;
  accentText: string;
  borderAccent: string;
  detailText: string;
  permissionScope: string;
}

const hierarchyNodes: HierarchyNode[] = [
  {
    id: 'org',
    level: 'L1 • MULTI-TENANT ORG ROOT',
    name: 'GetAstrav Enterprise',
    subtitle: 'Root Governance Container',
    metrics: '4 Strategic Divisions • 18 Squads • $24M Target ARR',
    status: '100% Operational',
    icon: Building2,
    accentBg: 'bg-brand-orange-light text-brand-orange',
    accentText: 'text-brand-orange',
    borderAccent: 'border-brand-orange/40 hover:border-brand-orange',
    detailText: 'Master tenant boundary with encrypted audit logs and global SSO policies.',
    permissionScope: 'Super Admin Access Gate',
  },
  {
    id: 'dept',
    level: 'L2 • STRATEGIC DIVISION',
    name: 'Engineering & Product Ops',
    subtitle: 'VP Governance Domain',
    metrics: '6 Active Squad Pods • 12 Active Projects',
    status: '91.4% Velocity',
    icon: Shield,
    accentBg: 'bg-brand-green-light text-brand-green',
    accentText: 'text-brand-green',
    borderAccent: 'border-brand-green/40 hover:border-brand-green',
    detailText: 'Infrastructure Squad (96% SLA) • Security & RBAC Squad (92% SLA).',
    permissionScope: 'Division Lead Scope',
  },
  {
    id: 'team',
    level: 'L3 • CROSS-FUNCTIONAL SQUAD',
    name: 'Core Platform & Infra Pod',
    subtitle: '6 Staff Engineers & PMs',
    metrics: '4 Active Sprint Containers',
    status: '96.2% SLA On-Time',
    icon: Users,
    accentBg: 'bg-champagne text-espresso',
    accentText: 'text-espresso',
    borderAccent: 'border-brand-peach hover:border-brand-orange',
    detailText: 'Assigned to high-availability authentication and real-time rollup engine.',
    permissionScope: 'Squad Manager Scope',
  },
  {
    id: 'project',
    level: 'L4 • EXECUTION CONTAINER',
    name: 'Project: SSO & Security Hardening',
    subtitle: 'PRJ-8820 • Spec Version v3.4',
    metrics: '8 Key Milestones • 24 Tasks',
    status: '78% Sprint Complete',
    icon: FolderGit2,
    accentBg: 'bg-sage-light text-brand-green',
    accentText: 'text-brand-green',
    borderAccent: 'border-brand-peach hover:border-brand-green',
    detailText: 'Linked Architecture Spec: spec_payment_v2.md with immutable git audit hash.',
    permissionScope: 'Project Contributor Scope',
  },
  {
    id: 'goal',
    level: 'L5 • STRATEGIC GOAL (OKR)',
    name: 'OKR-01: Pass SOC2 & SAML SSO',
    subtitle: '1.5x Multiplier Weight Impact',
    metrics: 'Target Impact: +18.4% ARR',
    status: '88% Computed Rollup',
    icon: Target,
    accentBg: 'bg-brand-orange-light text-brand-orange',
    accentText: 'text-brand-orange',
    borderAccent: 'border-brand-orange/40 hover:border-brand-orange',
    detailText: 'Progress automatically rolled up from linked sub-tasks and milestones.',
    permissionScope: 'Executive Owner Gate',
  },
  {
    id: 'milestone',
    level: 'L6 • DELIVERY MILESTONE',
    name: 'M-02: OAuth PKCE Session Security',
    subtitle: 'Intermediate Delivery Gate',
    metrics: 'Due Nov 15 • 4 Tasks Linked',
    status: '3 of 4 Tasks Verified',
    icon: Flag,
    accentBg: 'bg-brand-yellow-light text-espresso',
    accentText: 'text-espresso',
    borderAccent: 'border-brand-peach hover:border-brand-orange',
    detailText: 'Blocks production deployment gate until all 4 checklist items pass.',
    permissionScope: 'Reviewer Sign-off Scope',
  },
  {
    id: 'task',
    level: 'L7 • ACTIONABLE LEAF TASK',
    name: 'Implement Redis Token Key Locks',
    subtitle: 'Assigned: Alex M. (DevOps Lead)',
    metrics: '4 Subtask Checklists Passed',
    status: 'Manager Sign-off Verified',
    icon: CheckSquare,
    accentBg: 'bg-mint-soft text-brand-green',
    accentText: 'text-brand-green',
    borderAccent: 'border-brand-green/40 hover:border-brand-green',
    detailText: 'SLA Status: Passed (0ms delay) • Verified by Automated Integration Test.',
    permissionScope: 'Individual Assignee Scope',
  },
];

export const HierarchyInfographic: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('org');

  const currentNode = hierarchyNodes.find((n) => n.id === selectedNode) || hierarchyNodes[0];

  return (
    <div className="w-full bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-brand-peach/80 shadow-architectural space-y-8">
      {/* Header */}
      <div className="text-center max-w-[1000px] mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-orange-light border border-brand-orange/30 text-xs font-bold text-brand-orange uppercase tracking-wider">
          Visual A • Connected Organization Hierarchy
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-espresso tracking-tight">
          Organization → Divisions → Squads → Projects → OKRs → Milestones → Tasks
        </h2>
        <p className="text-sm sm:text-base text-terracotta leading-relaxed max-w-[800px] mx-auto">
          FounderOS operates on a connected 7-level structural graph. Select any architectural node to inspect real-time governance, live metrics, and mathematical cascade propagation.
        </p>
      </div>

      {/* Interactive Hierarchical Graph Node Selector */}
      <div className="relative p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-ivory to-surface-ambient border border-brand-peach/70 shadow-warm-sm space-y-8 w-full">
        
        {/* Node Flow Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full">
          {hierarchyNodes.map((node, idx) => {
            const Icon = node.icon;
            const isSelected = selectedNode === node.id;
            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => setSelectedNode(node.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
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
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-peach/90 shadow-warm-lg space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-brand-peach/50 pb-4">
              <div className="flex items-center gap-3.5">
                <div className={`w-12 h-12 rounded-2xl ${currentNode.accentBg} flex items-center justify-center shadow-warm-sm shrink-0`}>
                  <currentNode.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-extrabold text-brand-orange uppercase tracking-wider">{currentNode.level}</span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-espresso">{currentNode.name}</h3>
                  <p className="text-xs text-terracotta font-medium">{currentNode.subtitle}</p>
                </div>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-xs font-bold shrink-0 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {currentNode.status}
              </span>
            </div>

            <p className="text-sm text-terracotta leading-relaxed font-normal bg-surface-tier1 p-4 rounded-xl border border-brand-peach/60">
              {currentNode.detailText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-ivory border border-brand-peach/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase">LIVE NODE METRICS</span>
                <p className="text-xs sm:text-sm font-bold text-espresso">{currentNode.metrics}</p>
              </div>

              <div className="p-4 rounded-xl bg-ivory border border-brand-peach/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase flex items-center gap-1">
                  <Lock className="w-3 h-3 text-brand-orange" /> RBAC PERMISSION SCOPE
                </span>
                <p className="text-xs sm:text-sm font-bold text-espresso">{currentNode.permissionScope}</p>
              </div>

              <div className="p-4 rounded-xl bg-ivory border border-brand-peach/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-terracotta-muted uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-green" /> ROLLUP ENGINE
                </span>
                <p className="text-xs sm:text-sm font-bold text-brand-green">Sub-50ms Cascade Synced</p>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  );
};
