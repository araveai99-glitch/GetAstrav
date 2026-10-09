import React, { useState } from 'react';
import { Task } from '../../types';
import { useApp } from '../../context/AppContext';
import { TaskDetailModal } from './TaskDetailModal';
import { CheckCircle2, Circle, Clock, AlertCircle, ChevronRight, UserCheck } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  filterStatus?: 'All' | 'Pending' | 'Done' | 'Overdue';
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, filterStatus = 'All' }) => {
  const { toggleTaskCompletion } = useApp();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const filteredTasks = tasks.filter((t) => {
    if (filterStatus === 'Pending') return !t.completed;
    if (filterStatus === 'Done') return t.completed;
    if (filterStatus === 'Overdue') {
      return !t.completed && t.deadline && new Date(t.deadline).getTime() < Date.now();
    }
    return true;
  });

  return (
    <div className="space-y-3">
      {filteredTasks.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-2xl border border-brand-peach/60 text-xs text-terracotta-muted">
          No tasks found matching current filter.
        </div>
      ) : (
        filteredTasks.map((t) => {
          const isOverdue = !t.completed && t.deadline && new Date(t.deadline).getTime() < Date.now();

          return (
            <div
              key={t.id}
              className={`group flex items-center justify-between p-4 rounded-2xl bg-white border transition-all ${
                isOverdue
                  ? 'border-red-300 bg-red-50/30'
                  : 'border-brand-peach/60 hover:border-brand-orange shadow-warm-sm hover:shadow-warm-md'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <button
                  onClick={() => toggleTaskCompletion(t.id)}
                  className="text-terracotta-muted hover:text-brand-orange transition-colors shrink-0"
                >
                  {t.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </button>

                <div
                  onClick={() => setSelectedTask(t)}
                  className="cursor-pointer truncate text-left"
                >
                  <h4
                    className={`text-sm font-bold text-espresso group-hover:text-brand-orange transition-colors truncate ${
                      t.completed ? 'line-through text-terracotta-muted' : ''
                    }`}
                  >
                    {t.title}
                  </h4>
                  <div className="flex items-center gap-3 text-[11px] text-terracotta-muted mt-0.5">
                    {t.assignee && (
                      <span className="flex items-center gap-1 font-medium">
                        <UserCheck className="w-3 h-3 text-brand-green" /> {t.assignee.full_name}
                      </span>
                    )}
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-brand-orange" />
                      Due: {new Date(t.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {t.approval_status === 'pending' && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold border border-amber-200">
                    Review Pending
                  </span>
                )}
                {isOverdue && (
                  <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold flex items-center gap-1 border border-red-200">
                    <AlertCircle className="w-3 h-3" /> Overdue
                  </span>
                )}
                <button
                  onClick={() => setSelectedTask(t)}
                  className="p-1.5 rounded-lg text-terracotta-muted hover:text-brand-orange hover:bg-surface-tier1 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })
      )}

      <TaskDetailModal
        task={selectedTask}
        isOpen={Boolean(selectedTask)}
        onClose={() => setSelectedTask(null)}
      />
    </div>
  );
};
