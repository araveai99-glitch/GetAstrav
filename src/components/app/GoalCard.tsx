import React, { useState } from 'react';
import { Goal, Milestone, Task } from '../../types';
import { GoalProgress } from './GoalProgress';
import { Sparkles, Layers, ListCheck } from 'lucide-react';

interface GoalCardProps {
  goal: Goal;
  milestones: Milestone[];
  tasks: Task[];
  onOverride: (goalId: string, override: number | null) => void;
  onRequestAITasks?: (goal: Goal) => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({
  goal,
  milestones,
  tasks,
  onOverride,
  onRequestAITasks,
}) => {
  const [isOverriding, setIsOverriding] = useState(false);
  const [overrideInput, setOverrideInput] = useState<string>(
    goal.progress_override !== null && goal.progress_override !== undefined
      ? String(goal.progress_override)
      : ''
  );

  const goalMilestones = milestones.filter((m) => m.goal_id === goal.id);
  const goalTasks = tasks.filter((t) => t.goal_id === goal.id);

  const handleSaveOverride = () => {
    const val = overrideInput.trim() === '' ? null : parseFloat(overrideInput);
    onOverride(goal.id, isNaN(val as number) ? null : val);
    setIsOverriding(false);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-warm-md border border-brand-peach/60 space-y-4 hover:shadow-warm-lg transition-all">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach text-[10px] font-bold uppercase tracking-wider text-brand-orange">
              Strategic Goal
            </span>
            <span className="text-xs text-terracotta-muted flex items-center gap-1 font-medium">
              <Layers className="w-3.5 h-3.5 text-brand-orange" /> {goalMilestones.length} Milestones
            </span>
            <span className="text-xs text-terracotta-muted flex items-center gap-1 font-medium">
              <ListCheck className="w-3.5 h-3.5 text-brand-green" /> {goalTasks.length} Tasks
            </span>
          </div>
          <h3 className="text-lg font-bold text-espresso">{goal.title}</h3>
          <p className="text-xs text-terracotta mt-1">{goal.description}</p>
        </div>

        {onRequestAITasks && (
          <button
            onClick={() => onRequestAITasks(goal)}
            className="px-3 py-2 rounded-xl bg-gradient-to-r from-brand-orange to-brand-yellow text-white text-xs font-bold shadow-glow-orange hover:opacity-95 transition-all flex items-center gap-1.5 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            AI Suggest Tasks
          </button>
        )}
      </div>

      <GoalProgress
        computed={goal.progress_computed}
        override={goal.progress_override}
        riskStatus={goal.risk_status}
        weight={goal.weight}
        onOverrideClick={() => setIsOverriding(!isOverriding)}
      />

      {isOverriding && (
        <div className="p-3 bg-surface-tier1 rounded-xl border border-brand-peach flex items-center gap-3 animate-fadeIn">
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Enter override % (e.g. 85)"
            value={overrideInput}
            onChange={(e) => setOverrideInput(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-brand-peach text-xs font-bold text-espresso bg-white w-40 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
          <button
            onClick={handleSaveOverride}
            className="px-3 py-1.5 rounded-lg bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover transition-colors"
          >
            Save Override
          </button>
          <button
            onClick={() => {
              setOverrideInput('');
              onOverride(goal.id, null);
              setIsOverriding(false);
            }}
            className="px-3 py-1.5 rounded-lg bg-white border border-brand-peach text-espresso text-xs font-semibold hover:bg-surface-ambient transition-colors"
          >
            Clear Override
          </button>
        </div>
      )}
    </div>
  );
};
