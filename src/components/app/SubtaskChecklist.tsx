import React from 'react';
import { Subtask } from '../../types';
import { CheckSquare, Square } from 'lucide-react';

interface SubtaskChecklistProps {
  subtasks: Subtask[];
  onToggle: (subtaskId: string) => void;
}

export const SubtaskChecklist: React.FC<SubtaskChecklistProps> = ({ subtasks, onToggle }) => {
  if (subtasks.length === 0) {
    return <div className="text-xs text-terracotta-muted italic">No subtasks created for this task yet.</div>;
  }

  const completedCount = subtasks.filter((s) => s.completed).length;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-bold text-espresso">
        <span>Checklist Progress ({completedCount}/{subtasks.length})</span>
        <span>{((completedCount / subtasks.length) * 100).toFixed(0)}%</span>
      </div>

      <div className="space-y-2">
        {subtasks.map((st) => (
          <button
            key={st.id}
            onClick={() => onToggle(st.id)}
            className="w-full flex items-center gap-3 p-2.5 rounded-xl bg-surface-tier1 hover:bg-surface-container border border-brand-peach/60 transition-colors text-left group"
          >
            {st.completed ? (
              <CheckSquare className="w-4 h-4 text-brand-green shrink-0" />
            ) : (
              <Square className="w-4 h-4 text-terracotta-muted group-hover:text-brand-orange shrink-0" />
            )}
            <span
              className={`text-xs font-medium text-espresso ${
                st.completed ? 'line-through text-terracotta-muted' : ''
              }`}
            >
              {st.title}
            </span>
            <span className="ml-auto text-[10px] font-mono text-terracotta-muted">
              Weight: {st.weight}x
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
