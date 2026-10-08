// FounderOS / ASTRAV Command Center Domain Type Definitions

export type OrgRole = 'owner' | 'manager' | 'employee' | 'guest';
export type ScopedRole = 'manager' | 'employee' | 'guest';
export type ScopeType = 'department' | 'project';
export type RiskStatus = 'none' | 'at_risk' | 'overdue';
export type ApprovalStatus = 'not_required' | 'pending' | 'approved';
export type InvitationStatus = 'pending' | 'joined' | 'revoked';

export interface Profile {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  age?: number;
  gender?: string;
  created_at: string;
}

export interface Organization {
  id: string;
  name: string;
  billing_tier: string;
  created_at: string;
}

export interface OrgMember {
  org_id: string;
  user_id: string;
  role: OrgRole;
  created_at: string;
  profile?: Profile;
}

export interface Department {
  id: string;
  org_id: string;
  name: string;
  created_at: string;
  projects_count?: number;
  computed_progress?: number;
}

export interface Team {
  id: string;
  org_id: string;
  department_id?: string;
  name: string;
  created_at: string;
  member_ids: string[];
  members?: Profile[];
}

export interface Project {
  id: string;
  org_id: string;
  department_id: string;
  title: string;
  description: string;
  created_at: string;
  department_name?: string;
  assigned_team_ids?: string[];
  computed_progress?: number;
}

export interface Goal {
  id: string;
  project_id: string;
  title: string;
  description: string;
  weight: number;
  progress_computed: number;
  progress_override?: number | null;
  risk_status: RiskStatus;
  created_at: string;
}

export interface Milestone {
  id: string;
  goal_id: string;
  title: string;
  description: string;
  weight: number;
  progress_computed: number;
  progress_override?: number | null;
  progress_override_previous?: number | null;
  created_at: string;
}

export interface Subtask {
  id: string;
  task_id: string;
  title: string;
  weight: number;
  completed: boolean;
  completed_at?: string | null;
  created_at: string;
}

export interface Task {
  id: string;
  goal_id: string;
  milestone_id?: string | null;
  title: string;
  description: string;
  weight: number;
  deadline: string;
  assignee_id?: string | null;
  assigner_id?: string | null;
  reviewer_id?: string | null;
  completed: boolean;
  completed_at?: string | null;
  approval_status: ApprovalStatus;
  blocked_by?: string | null;
  overdue_email_sent?: boolean;
  created_at: string;
  assignee?: Profile;
  reviewer?: Profile;
  subtasks?: Subtask[];
}

export interface TaskComment {
  id: string;
  task_id: string;
  user_id: string;
  content: string;
  created_at: string;
  author?: Profile;
}

export interface ActivityItem {
  id: string;
  org_id: string;
  actor_id: string;
  action: string;
  entity_type: string;
  entity_id: string;
  metadata?: Record<string, any>;
  created_at: string;
  actor?: Profile;
}

export interface ProjectDoc {
  id: string;
  project_id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectDocEdit {
  id: string;
  doc_id: string;
  editor_id: string;
  content_snapshot: string;
  created_at: string;
  editor?: Profile;
}

export interface Reminder {
  id: string;
  user_id: string;
  org_id: string;
  title: string;
  description?: string;
  remind_at: string;
  sent: boolean;
  created_at: string;
}

export interface OrgInvitation {
  id: string;
  org_id: string;
  email: string;
  role: OrgRole;
  token: string;
  status: InvitationStatus;
  created_at: string;
}

export interface ScopedPermission {
  id: string;
  org_id: string;
  user_id: string;
  scope_type: ScopeType;
  scope_id: string;
  scoped_role: ScopedRole;
  created_at: string;
  user?: Profile;
}

export interface ExecutiveAnalytics {
  orgGoalCompletionRate: number;
  overdueTasksCount: number;
  productivityScore: number;
  departmentProgresses: { id: string; name: string; progress: number }[];
}

export interface EmployeeAnalytics {
  personalStreak: number;
  productivityScore: number;
  urgencySortedTasks: Task[];
}

export interface AIInsightResponse {
  focusToday: string[];
  risk: string;
  insight: string;
}

export interface AIProposalItem {
  title: string;
  description: string;
  deadline: string;
  suggested_assignee_id?: string;
}

export interface AIProposalResponse {
  proposals: AIProposalItem[];
}
