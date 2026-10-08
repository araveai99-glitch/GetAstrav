import {
  Organization,
  Profile,
  Department,
  Team,
  Project,
  Goal,
  Milestone,
  Task,
  Subtask,
  TaskComment,
  ActivityItem,
  ProjectDoc,
  Reminder,
  OrgMember,
  OrgInvitation,
  ScopedPermission,
} from '../types';

export const mockProfiles: Profile[] = [
  {
    id: 'u-01',
    full_name: 'Anupam Shrivastava',
    email: 'anupam@founderos.app',
    phone: '+1 (555) 019-2834',
    age: 34,
    gender: 'Male',
    created_at: '2026-01-15T08:00:00Z',
  },
  {
    id: 'u-02',
    full_name: 'Sarah Jenkins',
    email: 'sarah.j@founderos.app',
    phone: '+1 (555) 482-9102',
    age: 31,
    gender: 'Female',
    created_at: '2026-02-01T09:30:00Z',
  },
  {
    id: 'u-03',
    full_name: 'Alex Rivera',
    email: 'alex.r@founderos.app',
    phone: '+1 (555) 739-1048',
    age: 29,
    gender: 'Non-binary',
    created_at: '2026-02-10T11:15:00Z',
  },
  {
    id: 'u-04',
    full_name: 'Maya Lin',
    email: 'maya.l@founderos.app',
    phone: '+1 (555) 293-8471',
    age: 28,
    gender: 'Female',
    created_at: '2026-03-01T14:20:00Z',
  },
  {
    id: 'u-05',
    full_name: 'David Vance',
    email: 'david.vance@consulting.io',
    phone: '+1 (555) 918-2736',
    age: 41,
    gender: 'Male',
    created_at: '2026-04-12T16:45:00Z',
  },
];

export const mockOrganizations: Organization[] = [
  {
    id: 'org-01',
    name: 'GETASTRAV FounderOS',
    billing_tier: 'Enterprise Scale Pilot',
    created_at: '2026-01-01T00:00:00Z',
  },
  {
    id: 'org-02',
    name: 'Acme Global Ventures',
    billing_tier: 'Pilot',
    created_at: '2026-02-15T00:00:00Z',
  },
];

export const mockOrgMembers: OrgMember[] = [
  { org_id: 'org-01', user_id: 'u-01', role: 'owner', created_at: '2026-01-01T00:00:00Z', profile: mockProfiles[0] },
  { org_id: 'org-01', user_id: 'u-02', role: 'manager', created_at: '2026-02-01T00:00:00Z', profile: mockProfiles[1] },
  { org_id: 'org-01', user_id: 'u-03', role: 'employee', created_at: '2026-02-10T00:00:00Z', profile: mockProfiles[2] },
  { org_id: 'org-01', user_id: 'u-04', role: 'employee', created_at: '2026-03-01T00:00:00Z', profile: mockProfiles[3] },
  { org_id: 'org-01', user_id: 'u-05', role: 'guest', created_at: '2026-04-12T00:00:00Z', profile: mockProfiles[4] },
];

export const mockDepartments: Department[] = [
  { id: 'dept-01', org_id: 'org-01', name: 'Engineering & Infrastructure', created_at: '2026-01-05T00:00:00Z', projects_count: 2, computed_progress: 78.4 },
  { id: 'dept-02', org_id: 'org-01', name: 'Product Strategy & AI', created_at: '2026-01-06T00:00:00Z', projects_count: 1, computed_progress: 88.0 },
  { id: 'dept-03', org_id: 'org-01', name: 'Revenue & Operations', created_at: '2026-01-10T00:00:00Z', projects_count: 1, computed_progress: 62.5 },
];

export const mockTeams: Team[] = [
  { id: 'team-01', org_id: 'org-01', department_id: 'dept-01', name: 'Core Kernel Pod', member_ids: ['u-01', 'u-03'], created_at: '2026-01-08T00:00:00Z', members: [mockProfiles[0], mockProfiles[2]] },
  { id: 'team-02', org_id: 'org-01', department_id: 'dept-01', name: 'AI & Machine Learning Guild', member_ids: ['u-03', 'u-04'], created_at: '2026-01-09T00:00:00Z', members: [mockProfiles[2], mockProfiles[3]] },
  { id: 'team-03', org_id: 'org-01', department_id: 'dept-02', name: 'Executive Strategy Pod', member_ids: ['u-01', 'u-02'], created_at: '2026-01-12T00:00:00Z', members: [mockProfiles[0], mockProfiles[1]] },
];

export const mockProjects: Project[] = [
  { id: 'proj-01', org_id: 'org-01', department_id: 'dept-01', title: 'FounderOS Execution Kernel v4.8', description: 'Real-time mathematical rollup engine & edge caching proxy', department_name: 'Engineering & Infrastructure', assigned_team_ids: ['team-01', 'team-02'], computed_progress: 78.4, created_at: '2026-01-15T00:00:00Z' },
  { id: 'proj-02', org_id: 'org-01', department_id: 'dept-01', title: 'SOC2 Type II Evidence Vault', description: 'Row-level security audit logger and zero-owner protections', department_name: 'Engineering & Infrastructure', assigned_team_ids: ['team-01'], computed_progress: 54.0, created_at: '2026-02-01T00:00:00Z' },
  { id: 'proj-03', org_id: 'org-01', department_id: 'dept-02', title: 'Gemini 2.5 AI Goal Decomposition', description: 'Autonomous task proposal engine for founder OKRs', department_name: 'Product Strategy & AI', assigned_team_ids: ['team-03'], computed_progress: 88.0, created_at: '2026-02-10T00:00:00Z' },
];

export const mockGoals: Goal[] = [
  { id: 'goal-01', project_id: 'proj-01', title: 'Sub-50ms Global Query Latency Rollout', description: 'Distributed edge proxy configured with zero stale reads across multi-region clusters', weight: 1.5, progress_computed: 92.0, progress_override: null, risk_status: 'none', created_at: '2026-01-20T00:00:00Z' },
  { id: 'goal-02', project_id: 'proj-02', title: 'SOC2 Type II Evidence Lockbox Preparation', description: 'Snapshot validation pending for multi-region access logs and RBAC policies', weight: 2.0, progress_computed: 54.0, progress_override: null, risk_status: 'at_risk', created_at: '2026-02-05T00:00:00Z' },
  { id: 'goal-03', project_id: 'proj-01', title: 'Legacy Redis Session Cluster Deprecation', description: 'Route session auth tokens into Edge storage pool with executive override', weight: 1.0, progress_computed: 31.0, progress_override: 75.0, risk_status: 'overdue', created_at: '2026-02-15T00:00:00Z' },
];

export const mockMilestones: Milestone[] = [
  { id: 'ms-01', goal_id: 'goal-01', title: 'Distributed Edge Proxy Setup', description: '6/6 deliverables completed on Edge nodes', weight: 1.0, progress_computed: 100.0, progress_override: null, created_at: '2026-01-22T00:00:00Z' },
  { id: 'ms-02', goal_id: 'goal-02', title: 'Audit Trail Log Immutability', description: 'SHA-256 hash validation on task mutations', weight: 1.5, progress_computed: 50.0, progress_override: null, created_at: '2026-02-07T00:00:00Z' },
  { id: 'ms-03', goal_id: 'goal-03', title: 'Edge Session Token Migration', description: 'Migrate active session keys', weight: 1.0, progress_computed: 31.0, progress_override: null, created_at: '2026-02-18T00:00:00Z' },
];

export const mockTasks: Task[] = [
  { id: 'task-01', goal_id: 'goal-01', milestone_id: 'ms-01', title: 'Configure zero-stale edge caches', description: 'Set TTL parameters and invalidation webhooks across 14 edge regions', weight: 2.0, deadline: '2026-10-15T18:00:00Z', assignee_id: 'u-03', assigner_id: 'u-01', reviewer_id: 'u-02', completed: true, completed_at: '2026-10-05T14:30:00Z', approval_status: 'approved', blocked_by: null, overdue_email_sent: false, created_at: '2026-01-25T00:00:00Z', assignee: mockProfiles[2], reviewer: mockProfiles[1] },
  { id: 'task-02', goal_id: 'goal-02', milestone_id: 'ms-02', title: 'Implement RLS scoped policy checks', description: 'Verify row level security rules on scoped_permissions join table', weight: 1.0, deadline: '2026-10-12T12:00:00Z', assignee_id: 'u-04', assigner_id: 'u-02', reviewer_id: 'u-02', completed: false, completed_at: null, approval_status: 'pending', blocked_by: null, overdue_email_sent: false, created_at: '2026-02-08T00:00:00Z', assignee: mockProfiles[3], reviewer: mockProfiles[1] },
  { id: 'task-03', goal_id: 'goal-03', milestone_id: 'ms-03', title: 'Deprecate old auth tokens in edge pool', description: 'Flush legacy session keys and force re-issue on JWT refresh', weight: 3.0, deadline: '2026-09-28T09:00:00Z', assignee_id: 'u-03', assigner_id: 'u-01', reviewer_id: 'u-01', completed: false, completed_at: null, approval_status: 'not_required', blocked_by: 'task-01', overdue_email_sent: true, created_at: '2026-02-20T00:00:00Z', assignee: mockProfiles[2], reviewer: mockProfiles[0] },
];

export const mockSubtasks: Subtask[] = [
  { id: 'st-01', task_id: 'task-01', title: 'Verify cache control headers', weight: 1.0, completed: true, completed_at: '2026-10-04T10:00:00Z', created_at: '2026-01-26T00:00:00Z' },
  { id: 'st-02', task_id: 'task-01', title: 'Run benchmark load testing under 100k rps', weight: 1.0, completed: true, completed_at: '2026-10-05T14:00:00Z', created_at: '2026-01-26T00:00:00Z' },
  { id: 'st-03', task_id: 'task-02', title: 'Add RLS policy for org_members table', weight: 1.0, completed: true, completed_at: '2026-10-06T11:00:00Z', created_at: '2026-02-09T00:00:00Z' },
  { id: 'st-04', task_id: 'task-02', title: 'Add RLS policy for scoped_permissions table', weight: 1.0, completed: false, completed_at: null, created_at: '2026-02-09T00:00:00Z' },
];

export const mockTaskComments: TaskComment[] = [
  { id: 'tc-01', task_id: 'task-01', user_id: 'u-03', content: 'Benchmarking shows 38ms average propagation time across all North America nodes!', created_at: '2026-10-05T14:15:00Z', author: mockProfiles[2] },
  { id: 'tc-02', task_id: 'task-02', user_id: 'u-02', content: 'Please ensure Zero-Owner protection trigger tests pass before submitting for final manager approval.', created_at: '2026-10-07T09:30:00Z', author: mockProfiles[1] },
];

export const mockActivityLog: ActivityItem[] = [
  { id: 'act-01', org_id: 'org-01', actor_id: 'u-03', action: 'completed', entity_type: 'task', entity_id: 'task-01', metadata: { title: 'Configure zero-stale edge caches' }, created_at: '2026-10-05T14:30:00Z', actor: mockProfiles[2] },
  { id: 'act-02', org_id: 'org-01', actor_id: 'u-04', action: 'submitted_for_review', entity_type: 'task', entity_id: 'task-02', metadata: { reviewer: 'Sarah Jenkins' }, created_at: '2026-10-07T10:00:00Z', actor: mockProfiles[3] },
  { id: 'act-03', org_id: 'org-01', actor_id: 'u-01', action: 'goal_overridden', entity_type: 'goal', entity_id: 'goal-03', metadata: { previous: 31.0, override: 75.0 }, created_at: '2026-10-08T11:20:00Z', actor: mockProfiles[0] },
];

export const mockProjectDocs: ProjectDoc[] = [
  { id: 'doc-01', project_id: 'proj-01', title: 'Execution Kernel Architecture & Edge Proxy Spec', content: '<h1>FounderOS Execution Kernel v4.8</h1><p>This document details the high-performance mathematical progress rollup pipeline. Calculated metrics cascade automatically from leaf subtasks up to organizational executive dashboards.</p><h2>Edge Cache Invalidation</h2><p>Cache invalidation runs on <code>sub-50ms</code> telemetry triggers.</p>', created_at: '2026-01-16T00:00:00Z', updated_at: '2026-10-02T15:00:00Z' },
  { id: 'doc-02', project_id: 'proj-02', title: 'SOC2 Type II Evidence Vault & RLS Specifications', content: '<h1>SOC2 Compliance Blueprint</h1><p>Every mutation is logged with SHA-256 immutable snapshots in <code>project_doc_edits</code> and <code>activity_log</code>.</p>', created_at: '2026-02-02T00:00:00Z', updated_at: '2026-10-04T12:00:00Z' },
];

export const mockReminders: Reminder[] = [
  { id: 'rem-01', user_id: 'u-01', org_id: 'org-01', title: 'Q4 Executive Strategic Planning Session', description: 'Review mathematical progress rollups and AI focus items', remind_at: '2026-10-10T15:00:00Z', sent: false, created_at: '2026-10-01T00:00:00Z' },
  { id: 'rem-02', user_id: 'u-03', org_id: 'org-01', title: 'Verify Legacy Redis Flush', description: 'Check overdue task escalations', remind_at: '2026-10-09T09:00:00Z', sent: false, created_at: '2026-10-02T00:00:00Z' },
];

export const mockScopedPermissions: ScopedPermission[] = [
  { id: 'scoped-01', org_id: 'org-01', user_id: 'u-04', scope_type: 'project', scope_id: 'proj-02', scoped_role: 'manager', created_at: '2026-03-05T00:00:00Z', user: mockProfiles[3] },
];

export const mockInvitations: OrgInvitation[] = [
  { id: 'inv-01', org_id: 'org-01', email: 'vp.eng@enterprise.com', role: 'manager', token: 'a7b8c9d0e1f234567890abcd', status: 'pending', created_at: '2026-10-05T00:00:00Z' },
];
