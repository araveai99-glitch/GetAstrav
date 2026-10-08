import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DepartmentComparison } from './DepartmentComparison';
import { TaskList } from './TaskList';
import { Award, AlertOctagon, TrendingUp, Zap, UserCheck, Shield } from 'lucide-react';

export const AnalyticsPanel: React.FC = () => {
  const { goals, tasks, departments, projects, currentUserRole, currentUser } = useApp();
  const [viewMode, setViewMode] = useState<'executive' | 'employee'>('executive');

  // Executive KPI calculations
  const totalGoalWeight = goals.reduce((sum, g) => sum + g.weight, 0);
  const weightedGoalSum = goals.reduce((sum, g) => {
    const eff = g.progress_override !== null && g.progress_override !== undefined ? g.progress_override : g.progress_computed;
    return sum + g.weight * eff;
  }, 0);
  const orgGoalCompletionRate = totalGoalWeight > 0 ? weightedGoalSum / totalGoalWeight : 0;

  const overdueTasksCount = tasks.filter(
    (t) => !t.completed && t.deadline && new Date(t.deadline).getTime() < Date.now()
  ).length;

  const completedTasksCount = tasks.filter((t) => t.completed).length;
  const totalTasksCount = tasks.length;
  const rawProductivity = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;
  const orgProductivityScore = Math.max(0, Math.min(100, rawProductivity - overdueTasksCount * 5));

  // Employee Personal KPI calculations
  const userTasks = tasks.filter((t) => t.assignee_id === currentUser.id);
  const userCompleted = userTasks.filter((t) => t.completed).length;
  const userProductivityScore = userTasks.length > 0 ? Math.round((userCompleted / userTasks.length) * 100) : 100;
  const userStreakDays = 14; // Personal streak counter

  if (currentUserRole === 'guest') {
    return (
      <div className="p-8 text-center bg-white rounded-2xl border border-brand-peach/80 text-xs text-terracotta-muted">
        <Shield className="w-8 h-8 text-brand-orange mx-auto mb-2" />
        Analytics access is restricted for Guest roles per enterprise RBAC security policies.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Mode Toggle Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-espresso">Analytics & Performance Radar</h2>
          <p className="text-xs text-terracotta-muted">
            {viewMode === 'executive' ? 'Executive Organization Metrics' : 'Employee Personal Dashboard'}
          </p>
        </div>

        <div className="flex items-center gap-1 p-1 bg-surface-tier1 rounded-xl border border-brand-peach/60">
          <button
            onClick={() => setViewMode('executive')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'executive'
                ? 'bg-white text-espresso shadow-warm-sm border border-brand-peach/40'
                : 'text-terracotta-muted hover:text-espresso'
            }`}
          >
            Executive Radar
          </button>
          <button
            onClick={() => setViewMode('employee')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              viewMode === 'employee'
                ? 'bg-white text-espresso shadow-warm-sm border border-brand-peach/40'
                : 'text-terracotta-muted hover:text-espresso'
            }`}
          >
            Personal Workspace
          </button>
        </div>
      </div>

      {viewMode === 'executive' ? (
        <div className="space-y-6">
          {/* Top KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-2">
              <div className="flex items-center justify-between text-xs text-terracotta-muted font-bold">
                <span>Org Goal Completion</span>
                <TrendingUp className="w-4 h-4 text-brand-green" />
              </div>
              <div className="text-2xl font-extrabold text-espresso">
                {orgGoalCompletionRate.toFixed(1)}%
              </div>
              <div className="text-[11px] text-terracotta-muted">Weighted cross-project average</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-2">
              <div className="flex items-center justify-between text-xs text-terracotta-muted font-bold">
                <span>Overdue Tasks</span>
                <AlertOctagon className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-2xl font-extrabold text-espresso">{overdueTasksCount}</div>
              <div className="text-[11px] text-terracotta-muted">Tasks past deadline (-5pt penalty)</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-2">
              <div className="flex items-center justify-between text-xs text-terracotta-muted font-bold">
                <span>Productivity Index</span>
                <Zap className="w-4 h-4 text-brand-orange" />
              </div>
              <div className="text-2xl font-extrabold text-espresso">
                {orgProductivityScore.toFixed(0)}/100
              </div>
              <div className="text-[11px] text-terracotta-muted">Real-time organizational velocity</div>
            </div>
          </div>

          {/* Department Comparison Chart */}
          <DepartmentComparison departments={departments} projects={projects} goals={goals} />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-2">
              <div className="flex items-center justify-between text-xs text-terracotta-muted font-bold">
                <span>Personal Daily Streak</span>
                <Award className="w-4 h-4 text-brand-orange" />
              </div>
              <div className="text-2xl font-extrabold text-espresso">{userStreakDays} Days 🔥</div>
              <div className="text-[11px] text-terracotta-muted">Consecutive task completions</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-2">
              <div className="flex items-center justify-between text-xs text-terracotta-muted font-bold">
                <span>My Productivity Score</span>
                <UserCheck className="w-4 h-4 text-brand-green" />
              </div>
              <div className="text-2xl font-extrabold text-espresso">{userProductivityScore}%</div>
              <div className="text-[11px] text-terracotta-muted">Assigned tasks completion ratio</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
            <h3 className="text-base font-bold text-espresso">Urgency-Sorted Assigned Tasks</h3>
            <TaskList tasks={userTasks} />
          </div>
        </div>
      )}
    </div>
  );
};
