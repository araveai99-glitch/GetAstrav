import React from 'react';
import {
  FolderKanban,
  Code,
  Megaphone,
  BarChart3,
  Users,
  Coins,
} from 'lucide-react';

export interface DepartmentWorkflowItem {
  id: string;
  name: string;
  progress: string;
  progressNum: number;
  status: 'on_track' | 'attention' | 'optimal';
  statusText: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  barColor: string;
  sparklineColor: string;
  sparklinePath: string;
  left: string;
  top: string;
  width: string;
  height: string;
  mobileLeft: string;
  mobileTop: string;
  mobileWidth: string;
  mobileHeight: string;
  head: string;
  activeTasks: number;
  milestones: string;
  deliverables: string[];
}

export const DEPARTMENTS: DepartmentWorkflowItem[] = [
  {
    id: 'product',
    name: 'Product',
    progress: '78%',
    progressNum: 78,
    status: 'on_track',
    statusText: 'On Track',
    icon: FolderKanban,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 12 Q 10 14, 18 8 T 34 3',
    left: '36.0%',
    top: '17.5%',
    width: '13.4%',
    height: '11.5%',
    mobileLeft: '2.0%',
    mobileTop: '7%',
    mobileWidth: '22.0%',
    mobileHeight: '22%',
    head: 'Elena Vance (VP Product)',
    activeTasks: 14,
    milestones: '3/4 Milestones Completed',
    deliverables: [
      'Product V2 Core Architecture (Done)',
      'Design System Glassmorphism v4.8 (Done)',
      'Cross-departmental Rollup Engine (85% In Progress)',
      'Enterprise UX Accessibility Audit (Planned)',
    ],
  },
  {
    id: 'engineering',
    name: 'Engineering',
    progress: '62%',
    progressNum: 62,
    status: 'attention',
    statusText: '2 Overdue Tasks',
    icon: Code,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 13 Q 10 15, 20 8 T 34 3',
    left: '51.0%',
    top: '17.5%',
    width: '13.4%',
    height: '11.5%',
    mobileLeft: '25.5%',
    mobileTop: '7%',
    mobileWidth: '22.0%',
    mobileHeight: '22%',
    head: 'Marcus Thorne (CTO)',
    activeTasks: 22,
    milestones: '4/6 Milestones Completed',
    deliverables: [
      'Distributed Task Engine v2 (Done)',
      'Real-time WebSocket Push Synchronization (Done)',
      'Fix 2 API Latency Bottlenecks (Overdue - Reviewing)',
      'SOC2 Automated Compliance Controls (In Progress)',
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing',
    progress: '54%',
    progressNum: 54,
    status: 'attention',
    statusText: 'Campaign Live',
    icon: Megaphone,
    iconBg: 'bg-[#fceade]',
    iconColor: 'text-[#f15e1c]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 14 Q 10 11, 20 9 T 34 4',
    left: '66.0%',
    top: '17.5%',
    width: '13.4%',
    height: '11.5%',
    mobileLeft: '49.0%',
    mobileTop: '7%',
    mobileWidth: '22.0%',
    mobileHeight: '22%',
    head: 'Sarah Jenkins (Growth Lead)',
    activeTasks: 9,
    milestones: '2/4 Milestones Completed',
    deliverables: [
      'Q3 Product Launch Distribution (Launched)',
      'Interactive Product Tour & SEO Landing Pages (Done)',
      'Founder Retargeting Funnel Optimizations (In Progress)',
      'Customer Video Case Studies & Trust Badges (Pending)',
    ],
  },
  {
    id: 'sales',
    name: 'Sales',
    progress: '71%',
    progressNum: 71,
    status: 'on_track',
    statusText: 'On Track',
    icon: BarChart3,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 14 Q 10 14, 18 7 T 34 2',
    left: '36.0%',
    top: '40.0%',
    width: '13.4%',
    height: '11.5%',
    mobileLeft: '2.0%',
    mobileTop: '35%',
    mobileWidth: '22.0%',
    mobileHeight: '22%',
    head: 'Priya Roy (Head of Revenue)',
    activeTasks: 18,
    milestones: '3/5 Milestones Completed',
    deliverables: [
      'Close 15 Enterprise Pilot Agreements (87% Achieved)',
      'Sales Demo Environment Self-Service Sandbox (Done)',
      'Contract Lifecycle & Renewal Automation (In Progress)',
      'Global SDR Expansion & Territory Mapping (Planned)',
    ],
  },
  {
    id: 'hr',
    name: 'HR',
    progress: '88%',
    progressNum: 88,
    status: 'optimal',
    statusText: 'All Onboarded',
    icon: Users,
    iconBg: 'bg-[#edf7f3]',
    iconColor: 'text-[#2e936f]',
    barColor: 'bg-[#2e936f]',
    sparklineColor: '#2e936f',
    sparklinePath: 'M 2 13 Q 12 14, 20 6 T 34 2',
    left: '51.0%',
    top: '40.0%',
    width: '13.4%',
    height: '11.5%',
    mobileLeft: '25.5%',
    mobileTop: '35%',
    mobileWidth: '22.0%',
    mobileHeight: '22%',
    head: 'Devon Lee (People Operations)',
    activeTasks: 6,
    milestones: '4/4 Milestones Completed',
    deliverables: [
      'Senior Infrastructure Engineer Onboarding (Completed)',
      'Annual Performance Calibration (Completed)',
      'Founder 360 Feedback Rollout (Completed)',
      'Remote Pod Offsite Planning (In Progress)',
    ],
  },
  {
    id: 'finance',
    name: 'Finance',
    progress: '66%',
    progressNum: 66,
    status: 'attention',
    statusText: 'Runway Clear',
    icon: Coins,
    iconBg: 'bg-[#fef3dc]',
    iconColor: 'text-[#fab60a]',
    barColor: 'bg-[#fab60a]',
    sparklineColor: '#fab60a',
    sparklinePath: 'M 2 12 Q 12 15, 20 10 T 34 4',
    left: '66.0%',
    top: '40.0%',
    width: '13.4%',
    height: '11.5%',
    mobileLeft: '49.0%',
    mobileTop: '35%',
    mobileWidth: '22.0%',
    mobileHeight: '22%',
    head: 'Arthur Pendelton (Finance VP)',
    activeTasks: 8,
    milestones: '2/4 Milestones Completed',
    deliverables: [
      '24-Month Operating Runway & Cash Flow Model (Done)',
      'Multi-currency Subscription Billing Gateway (Done)',
      'Departmental SaaS Spend Audit (In Progress)',
      'Board of Directors Q3 Financial Packet (In Progress)',
    ],
  },
];

export const ORGANIZATION_OVERVIEW = {
  title: 'Organization Execution & Department Workflows',
  description:
    'Explore departmental execution, track deliverables, and understand progress across your organization.',
  northStarGoal: 'Launch Product V2',
  northStarProgress: '72%',
  targetDate: 'Q3 Enterprise GA',
  totalActiveTasks: 77,
  totalDepartments: 6,
  meshStatus: 'Live connection to Astrav Mesh',
};
