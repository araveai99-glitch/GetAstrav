import React, { createContext, useContext, useState, useMemo } from 'react';
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
  OrgRole,
  ScopedPermission,
  OrgInvitation,
} from '../types';
import {
  mockOrganizations,
  mockProfiles,
  mockOrgMembers,
  mockDepartments,
  mockTeams,
  mockProjects,
  mockGoals,
  mockMilestones,
  mockTasks,
  mockSubtasks,
  mockTaskComments,
  mockActivityLog,
  mockProjectDocs,
  mockReminders,
  mockScopedPermissions,
  mockInvitations,
} from '../data/mockData';
import { calculateGoalProgress, calculateProjectProgress, calculateTaskRisk } from '../lib/rollupEngine';

interface AppContextType {
  currentUser: Profile;
  currentOrg: Organization;
  currentUserRole: OrgRole;
  organizations: Organization[];
  profiles: Profile[];
  departments: Department[];
  teams: Team[];
  projects: Project[];
  goals: Goal[];
  milestones: Milestone[];
  tasks: Task[];
  subtasks: Subtask[];
  comments: TaskComment[];
  activity: ActivityItem[];
  docs: ProjectDoc[];
  reminders: Reminder[];
  scopedPermissions: ScopedPermission[];
  invitations: OrgInvitation[];

  // State actions
  setCurrentUser: (user: Profile) => void;
  switchOrg: (orgId: string) => void;
  createDepartment: (name: string) => void;
  createTeam: (name: string, departmentId?: string, memberIds?: string[]) => void;
  createProject: (title: string, description: string, departmentId: string, teamIds?: string[]) => void;
  createGoal: (title: string, description: string, projectId: string, weight?: number) => void;
  overrideGoalProgress: (goalId: string, override: number | null) => void;
  createTask: (
    title: string,
    description: string,
    goalId: string,
    milestoneId?: string,
    weight?: number,
    deadline?: string,
    assigneeId?: string,
    requiresApproval?: boolean
  ) => void;
  toggleTaskCompletion: (taskId: string) => void;
  toggleSubtask: (subtaskId: string) => void;
  submitTaskForReview: (taskId: string) => void;
  approveTask: (taskId: string) => void;
  addComment: (taskId: string, content: string) => void;
  createDoc: (projectId: string, title: string, content: string) => void;
  updateDoc: (docId: string, content: string) => void;
  createReminder: (title: string, description: string, remindAt: string) => void;
  grantScopedPermission: (userId: string, scopeType: 'department' | 'project', scopeId: string, role: 'manager' | 'employee' | 'guest') => void;
  revokeScopedPermission: (permissionId: string) => void;
  inviteMember: (email: string, role: OrgRole) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<Profile>(mockProfiles[0]); // Arjun Sharma
  const [currentOrg, setCurrentOrg] = useState<Organization>(mockOrganizations[0]);
  const [organizations] = useState<Organization[]>(mockOrganizations);
  const [profiles] = useState<Profile[]>(mockProfiles);

  const [departments, setDepartments] = useState<Department[]>(mockDepartments);
  const [teams, setTeams] = useState<Team[]>(mockTeams);
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [goals, setGoals] = useState<Goal[]>(mockGoals);
  const [milestones, setMilestones] = useState<Milestone[]>(mockMilestones);
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [subtasks, setSubtasks] = useState<Subtask[]>(mockSubtasks);
  const [comments, setComments] = useState<TaskComment[]>(mockTaskComments);
  const [activity, setActivity] = useState<ActivityItem[]>(mockActivityLog);
  const [docs, setDocs] = useState<ProjectDoc[]>(mockProjectDocs);
  const [reminders, setReminders] = useState<Reminder[]>(mockReminders);
  const [scopedPermissions, setScopedPermissions] = useState<ScopedPermission[]>(mockScopedPermissions);
  const [invitations, setInvitations] = useState<OrgInvitation[]>(mockInvitations);

  // Derived current user role in active org
  const currentUserRole = useMemo<OrgRole>(() => {
    const member = mockOrgMembers.find(
      (m) => m.org_id === currentOrg.id && m.user_id === currentUser.id
    );
    return member ? member.role : 'owner';
  }, [currentOrg.id, currentUser.id]);

  const switchOrg = (orgId: string) => {
    const target = organizations.find((o) => o.id === orgId);
    if (target) {
      setCurrentOrg(target);
    }
  };

  const createDepartment = (name: string) => {
    const newDept: Department = {
      id: `dept-${Date.now()}`,
      org_id: currentOrg.id,
      name,
      created_at: new Date().toISOString(),
      projects_count: 0,
      computed_progress: 0,
    };
    setDepartments((prev) => [...prev, newDept]);
  };

  const createTeam = (name: string, departmentId?: string, memberIds: string[] = []) => {
    const newTeam: Team = {
      id: `team-${Date.now()}`,
      org_id: currentOrg.id,
      department_id: departmentId,
      name,
      member_ids: memberIds,
      created_at: new Date().toISOString(),
      members: profiles.filter((p) => memberIds.includes(p.id)),
    };
    setTeams((prev) => [...prev, newTeam]);
  };

  const createProject = (
    title: string,
    description: string,
    departmentId: string,
    teamIds: string[] = []
  ) => {
    const dept = departments.find((d) => d.id === departmentId);
    const newProj: Project = {
      id: `proj-${Date.now()}`,
      org_id: currentOrg.id,
      department_id: departmentId,
      title,
      description,
      department_name: dept ? dept.name : '',
      assigned_team_ids: teamIds,
      computed_progress: 0,
      created_at: new Date().toISOString(),
    };
    setProjects((prev) => [...prev, newProj]);
  };

  const createGoal = (title: string, description: string, projectId: string, weight = 1.0) => {
    const newGoal: Goal = {
      id: `goal-${Date.now()}`,
      project_id: projectId,
      title,
      description,
      weight,
      progress_computed: 0,
      progress_override: null,
      risk_status: 'none',
      created_at: new Date().toISOString(),
    };
    setGoals((prev) => [...prev, newGoal]);
  };

  const overrideGoalProgress = (goalId: string, override: number | null) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === goalId) {
          const updated = { ...g, progress_override: override };
          // Log Activity
          const newAct: ActivityItem = {
            id: `act-${Date.now()}`,
            org_id: currentOrg.id,
            actor_id: currentUser.id,
            action: 'goal_overridden',
            entity_type: 'goal',
            entity_id: goalId,
            metadata: { previous: g.progress_computed, override },
            created_at: new Date().toISOString(),
            actor: currentUser,
          };
          setActivity((a) => [newAct, ...a]);
          return updated;
        }
        return g;
      })
    );
  };

  const createTask = (
    title: string,
    description: string,
    goalId: string,
    milestoneId?: string,
    weight = 1.0,
    deadline = new Date(Date.now() + 86400000 * 3).toISOString(),
    assigneeId?: string,
    requiresApproval = false
  ) => {
    const assignee = profiles.find((p) => p.id === assigneeId);
    const newTask: Task = {
      id: `task-${Date.now()}`,
      goal_id: goalId,
      milestone_id: milestoneId || null,
      title,
      description,
      weight,
      deadline,
      assignee_id: assigneeId || null,
      assigner_id: currentUser.id,
      reviewer_id: requiresApproval ? currentUser.id : null,
      completed: false,
      completed_at: null,
      approval_status: requiresApproval ? 'not_required' : 'not_required',
      overdue_email_sent: false,
      created_at: new Date().toISOString(),
      assignee,
    };
    setTasks((prev) => [...prev, newTask]);

    const newAct: ActivityItem = {
      id: `act-${Date.now()}`,
      org_id: currentOrg.id,
      actor_id: currentUser.id,
      action: 'task created',
      entity_type: 'task',
      entity_id: newTask.id,
      metadata: { title },
      created_at: new Date().toISOString(),
      actor: currentUser,
    };
    setActivity((a) => [newAct, ...a]);
  };

  const toggleTaskCompletion = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === taskId) {
          const nextCompleted = !t.completed;
          return {
            ...t,
            completed: nextCompleted,
            completed_at: nextCompleted ? new Date().toISOString() : null,
          };
        }
        return t;
      })
    );
  };

  const toggleSubtask = (subtaskId: string) => {
    setSubtasks((prev) =>
      prev.map((s) => {
        if (s.id === subtaskId) {
          const nextVal = !s.completed;
          return {
            ...s,
            completed: nextVal,
            completed_at: nextVal ? new Date().toISOString() : null,
          };
        }
        return s;
      })
    );
  };

  const submitTaskForReview = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, approval_status: 'pending' } : t))
    );
    const newAct: ActivityItem = {
      id: `act-${Date.now()}`,
      org_id: currentOrg.id,
      actor_id: currentUser.id,
      action: 'submitted_for_review',
      entity_type: 'task',
      entity_id: taskId,
      metadata: { actor_name: currentUser.full_name },
      created_at: new Date().toISOString(),
      actor: currentUser,
    };
    setActivity((a) => [newAct, ...a]);
  };

  const approveTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId
          ? {
              ...t,
              completed: true,
              completed_at: new Date().toISOString(),
              approval_status: 'approved',
            }
          : t
      )
    );
    const newAct: ActivityItem = {
      id: `act-${Date.now()}`,
      org_id: currentOrg.id,
      actor_id: currentUser.id,
      action: 'approved',
      entity_type: 'task',
      entity_id: taskId,
      metadata: { approver: currentUser.full_name },
      created_at: new Date().toISOString(),
      actor: currentUser,
    };
    setActivity((a) => [newAct, ...a]);
  };

  const addComment = (taskId: string, content: string) => {
    const newComment: TaskComment = {
      id: `tc-${Date.now()}`,
      task_id: taskId,
      user_id: currentUser.id,
      content,
      created_at: new Date().toISOString(),
      author: currentUser,
    };
    setComments((prev) => [...prev, newComment]);

    const newAct: ActivityItem = {
      id: `act-${Date.now()}`,
      org_id: currentOrg.id,
      actor_id: currentUser.id,
      action: 'commented',
      entity_type: 'task',
      entity_id: taskId,
      metadata: { content_snippet: content.substring(0, 30) },
      created_at: new Date().toISOString(),
      actor: currentUser,
    };
    setActivity((a) => [newAct, ...a]);
  };

  const createDoc = (projectId: string, title: string, content: string) => {
    const newDoc: ProjectDoc = {
      id: `doc-${Date.now()}`,
      project_id: projectId,
      title,
      content,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setDocs((prev) => [...prev, newDoc]);
  };

  const updateDoc = (docId: string, content: string) => {
    setDocs((prev) =>
      prev.map((d) =>
        d.id === docId ? { ...d, content, updated_at: new Date().toISOString() } : d
      )
    );
  };

  const createReminder = (title: string, description: string, remindAt: string) => {
    const newRem: Reminder = {
      id: `rem-${Date.now()}`,
      user_id: currentUser.id,
      org_id: currentOrg.id,
      title,
      description,
      remind_at: remindAt,
      sent: false,
      created_at: new Date().toISOString(),
    };
    setReminders((prev) => [...prev, newRem]);
  };

  const grantScopedPermission = (
    userId: string,
    scopeType: 'department' | 'project',
    scopeId: string,
    role: 'manager' | 'employee' | 'guest'
  ) => {
    const targetUser = profiles.find((p) => p.id === userId);
    const newScope: ScopedPermission = {
      id: `scoped-${Date.now()}`,
      org_id: currentOrg.id,
      user_id: userId,
      scope_type: scopeType,
      scope_id: scopeId,
      scoped_role: role,
      created_at: new Date().toISOString(),
      user: targetUser,
    };
    setScopedPermissions((prev) => [...prev, newScope]);
  };

  const revokeScopedPermission = (permissionId: string) => {
    setScopedPermissions((prev) => prev.filter((sp) => sp.id !== permissionId));
  };

  const inviteMember = (email: string, role: OrgRole) => {
    const newInv: OrgInvitation = {
      id: `inv-${Date.now()}`,
      org_id: currentOrg.id,
      email,
      role,
      token: Math.random().toString(36).substring(2, 15),
      status: 'pending',
      created_at: new Date().toISOString(),
    };
    setInvitations((prev) => [...prev, newInv]);
  };

  const value = {
    currentUser,
    currentOrg,
    currentUserRole,
    organizations,
    profiles,
    departments,
    teams,
    projects,
    goals,
    milestones,
    tasks,
    subtasks,
    comments,
    activity,
    docs,
    reminders,
    scopedPermissions,
    invitations,

    setCurrentUser,
    switchOrg,
    createDepartment,
    createTeam,
    createProject,
    createGoal,
    overrideGoalProgress,
    createTask,
    toggleTaskCompletion,
    toggleSubtask,
    submitTaskForReview,
    approveTask,
    addComment,
    createDoc,
    updateDoc,
    createReminder,
    grantScopedPermission,
    revokeScopedPermission,
    inviteMember,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
