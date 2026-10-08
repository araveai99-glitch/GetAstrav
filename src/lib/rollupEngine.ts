// Mathematical Rollup Engine (rollupEngine.ts)
// Implements strict formulas defined in Section 6 of product audit.

import { Goal, Milestone, Task, Subtask, Project, RiskStatus } from '../types';

/**
 * 1. Task Completion Percentage
 */
export function calculateTaskProgress(task: Task, subtasks: Subtask[] = []): number {
  if (subtasks.length > 0) {
    const totalWeight = subtasks.reduce((sum, st) => sum + Number(st.weight || 1), 0);
    if (totalWeight === 0) return 0;
    const completedWeight = subtasks
      .filter((st) => st.completed)
      .reduce((sum, st) => sum + Number(st.weight || 1), 0);
    return Math.min(100, Math.max(0, (completedWeight / totalWeight) * 100));
  }

  // Task without subtasks
  if (task.completed) {
    if (task.approval_status === 'pending') {
      return 0; // Not approved yet
    }
    return 100;
  }
  return 0;
}

/**
 * 2. Milestone Computed Progress
 */
export function calculateMilestoneProgress(
  milestone: Milestone,
  milestoneTasks: { task: Task; subtasks: Subtask[] }[]
): number {
  if (milestone.progress_override !== null && milestone.progress_override !== undefined) {
    return Number(milestone.progress_override);
  }

  if (milestoneTasks.length === 0) return 0;

  const totalTaskWeight = milestoneTasks.reduce((sum, item) => sum + Number(item.task.weight || 1), 0);
  if (totalTaskWeight === 0) return 0;

  const weightedSum = milestoneTasks.reduce((sum, item) => {
    const taskProg = calculateTaskProgress(item.task, item.subtasks);
    return sum + Number(item.task.weight || 1) * taskProg;
  }, 0);

  return Math.min(100, Math.max(0, weightedSum / totalTaskWeight));
}

/**
 * 3. Goal Effective Progress Resolution
 */
export function calculateGoalProgress(
  goal: Goal,
  goalMilestones: { milestone: Milestone; tasks: { task: Task; subtasks: Subtask[] }[] }[],
  standaloneGoalTasks: { task: Task; subtasks: Subtask[] }[] = []
): number {
  // Executive Override takes precedence
  if (goal.progress_override !== null && goal.progress_override !== undefined) {
    return Number(goal.progress_override);
  }

  if (goalMilestones.length > 0) {
    const totalMilestoneWeight = goalMilestones.reduce((sum, item) => sum + Number(item.milestone.weight || 1), 0);
    if (totalMilestoneWeight === 0) return 0;

    const weightedSum = goalMilestones.reduce((sum, item) => {
      const msProgress = calculateMilestoneProgress(item.milestone, item.tasks);
      return sum + Number(item.milestone.weight || 1) * msProgress;
    }, 0);

    return Math.min(100, Math.max(0, weightedSum / totalMilestoneWeight));
  }

  // Fallback for goals without milestones (legacy tasks directly under goal)
  if (standaloneGoalTasks.length > 0) {
    const totalTaskWeight = standaloneGoalTasks.reduce((sum, item) => sum + Number(item.task.weight || 1), 0);
    if (totalTaskWeight === 0) return 0;

    const weightedSum = standaloneGoalTasks.reduce((sum, item) => {
      const taskProg = calculateTaskProgress(item.task, item.subtasks);
      return sum + Number(item.task.weight || 1) * taskProg;
    }, 0);

    return Math.min(100, Math.max(0, weightedSum / totalTaskWeight));
  }

  return 0;
}

/**
 * 4. Project Progress
 */
export function calculateProjectProgress(
  projectGoals: { goal: Goal; progress: number }[]
): number {
  if (projectGoals.length === 0) return 0;
  const totalGoalWeight = projectGoals.reduce((sum, item) => sum + Number(item.goal.weight || 1), 0);
  if (totalGoalWeight === 0) return 0;

  const weightedSum = projectGoals.reduce((sum, item) => {
    return sum + Number(item.goal.weight || 1) * item.progress;
  }, 0);

  return Math.min(100, Math.max(0, weightedSum / totalGoalWeight));
}

/**
 * 5. Department Progress
 */
export function calculateDepartmentProgress(projectProgresses: number[]): number {
  if (projectProgresses.length === 0) return 0;
  const sum = projectProgresses.reduce((acc, p) => acc + p, 0);
  return Math.min(100, Math.max(0, sum / projectProgresses.length));
}

/**
 * Risk Flag Calculation Algorithm
 */
export function calculateTaskRisk(task: Task): RiskStatus {
  if (task.completed) return 'none';
  if (!task.deadline) return 'none';

  const deadlineTime = new Date(task.deadline).getTime();
  const now = Date.now();
  const hoursRemaining = (deadlineTime - now) / (1000 * 60 * 60);

  if (hoursRemaining < 0) {
    return 'overdue';
  }
  if (hoursRemaining <= 48) {
    return 'at_risk';
  }
  return 'none';
}

/**
 * Cascade Risk Status to Goal
 */
export function calculateGoalRisk(tasks: Task[]): RiskStatus {
  const risks = tasks.map(calculateTaskRisk);
  if (risks.includes('overdue')) return 'overdue';
  if (risks.includes('at_risk')) return 'at_risk';
  return 'none';
}
