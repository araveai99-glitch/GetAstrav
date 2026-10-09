import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GoalCard } from '../../components/app/GoalCard';
import { AIProposalPanel } from '../../components/app/AIProposalPanel';
import { Goal } from '../../types';
import { Target, Plus } from 'lucide-react';

export const GoalsPage: React.FC = () => {
  const { goals, milestones, tasks, projects, overrideGoalProgress, createGoal } = useApp();
  const [targetAIGoal, setTargetAIGoal] = useState<Goal | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState(projects[0]?.id || '');
  const [weight, setWeight] = useState('1.0');
  const [isCreating, setIsCreating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !projectId) return;
    createGoal(title, description, projectId, parseFloat(weight) || 1.0);
    setTitle('');
    setDescription('');
    setIsCreating(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-espresso">Strategic Goals & OKRs</h1>
          <p className="text-xs text-terracotta-muted">High-level strategic objectives with mathematical progress rollups</p>
        </div>

        <button
          onClick={() => setIsCreating(!isCreating)}
          className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover shadow-glow-orange flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Create Strategic Goal
        </button>
      </div>

      {isCreating && (
        <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-md space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-espresso">New Goal Spec</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder="Goal Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
            <select
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  Project: {p.title}
                </option>
              ))}
            </select>
            <input
              type="number"
              step="0.1"
              placeholder="Weight (default 1.0)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <textarea
            placeholder="Goal Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-brand-peach text-xs text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange h-20"
          />
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
              Save Goal
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {goals.map((g) => (
          <GoalCard
            key={g.id}
            goal={g}
            milestones={milestones}
            tasks={tasks}
            onOverride={overrideGoalProgress}
            onRequestAITasks={(goal) => setTargetAIGoal(goal)}
          />
        ))}
      </div>

      <AIProposalPanel
        goal={targetAIGoal}
        isOpen={Boolean(targetAIGoal)}
        onClose={() => setTargetAIGoal(null)}
      />
    </div>
  );
};
