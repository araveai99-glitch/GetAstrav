import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TaskList } from '../../components/app/TaskList';
import { Plus } from 'lucide-react';

export const TasksPage: React.FC = () => {
  const { tasks, goals, milestones, profiles, createTask } = useApp();
  const [filterStatus, setFilterStatus] = useState<'All' | 'Pending' | 'Done' | 'Overdue'>('All');
  const [isCreating, setIsCreating] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goalId, setGoalId] = useState(goals[0]?.id || '');
  const [milestoneId, setMilestoneId] = useState(milestones[0]?.id || '');
  const [assigneeId, setAssigneeId] = useState(profiles[0]?.id || '');
  const [requiresApproval, setRequiresApproval] = useState(false);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !goalId) return;
    createTask(
      title,
      description,
      goalId,
      milestoneId || undefined,
      1.0,
      new Date(Date.now() + 86400000 * 3).toISOString(),
      assigneeId,
      requiresApproval
    );
    setTitle('');
    setDescription('');
    setIsCreating(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-espresso">Task Management & Execution</h1>
          <p className="text-xs text-terracotta-muted">Individual leaf work items and SLAs</p>
        </div>

        <button
          onClick={() => setIsCreating(!isCreating)}
          className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover shadow-glow-orange flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Create Task
        </button>
      </div>

      {isCreating && (
        <form onSubmit={handleCreate} className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-md space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-espresso">New Task Spec</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
            <select
              value={goalId}
              onChange={(e) => setGoalId(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              {goals.map((g) => (
                <option key={g.id} value={g.id}>
                  Goal: {g.title}
                </option>
              ))}
            </select>
            <select
              value={assigneeId}
              onChange={(e) => setAssigneeId(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              {profiles.map((p) => (
                <option key={p.id} value={p.id}>
                  Assignee: {p.full_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="reqApproval"
              checked={requiresApproval}
              onChange={(e) => setRequiresApproval(e.target.checked)}
              className="rounded text-brand-orange focus:ring-brand-orange"
            />
            <label htmlFor="reqApproval" className="text-xs text-espresso font-semibold">
              Requires Manager Approval upon completion
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="px-4 py-2 rounded-xl bg-surface-tier1 border border-brand-peach text-xs font-semibold text-terracotta-muted hover:text-espresso"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover shadow-glow-orange"
            >
              Save Task
            </button>
          </div>
        </form>
      )}

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 p-1 bg-white rounded-xl border border-brand-peach/60 shadow-warm-sm w-fit">
        {(['All', 'Pending', 'Done', 'Overdue'] as const).map((st) => (
          <button
            key={st}
            onClick={() => setFilterStatus(st)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              filterStatus === st
                ? 'bg-brand-orange text-white shadow-glow-orange'
                : 'text-terracotta-muted hover:text-espresso'
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      <TaskList tasks={tasks} filterStatus={filterStatus} />
    </div>
  );
};
