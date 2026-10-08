import React from 'react';
import { Milestone, Task } from '../../types';
import { Flag, CheckCircle2, Clock } from 'lucide-react';

interface MilestoneViewProps {
  milestone: Milestone;
  tasks: Task[];
}

export const MilestoneView: React.FC<MilestoneViewProps> = ({ milestone, tasks }) => {
  const milestoneTasks = tasks.filter((t) => t.milestone_id === milestone.id);
  const completedCount = milestoneTasks.filter((t) => t.completed).length;

  return (
    <div className="bg-surface-tier1 rounded-xl p-4 border border-brand-peach/60 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flag className="w-4 h-4 text-brand-orange" />
          <h4 className="text-sm font-bold text-espresso">{milestone.title}</h4>
        </div>
        <span className="text-xs font-mono text-terracotta-muted">
          {completedCount}/{milestoneTasks.length} Done ({milestone.progress_computed.toFixed(0)}%)
        </span>
      </div>
      <p className="text-xs text-terracotta">{milestone.description}</p>
      <div className="w-full h-1.5 rounded-full bg-brand-peach/40 overflow-hidden">
        <div
          className="h-full bg-brand-orange rounded-full transition-all duration-300"
          style={{ width: `${milestone.progress_computed}%` }}
        />
      </div>
    </div>
  );
};
