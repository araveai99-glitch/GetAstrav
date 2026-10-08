import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AIInsightPanel } from '../../components/app/AIInsightPanel';
import { GoalCard } from '../../components/app/GoalCard';
import { TaskList } from '../../components/app/TaskList';
import { AIProposalPanel } from '../../components/app/AIProposalPanel';
import { Goal } from '../../types';
import { Target, ListCheck } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { goals, milestones, tasks, overrideGoalProgress } = useApp();
  const [targetAIGoal, setTargetAIGoal] = useState<Goal | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-espresso">Command Center Dashboard</h1>
          <p className="text-xs text-terracotta-muted">Real-time executive goal progression and daily AI focus</p>
        </div>
      </div>

      {/* AI Today Focus Section */}
      <AIInsightPanel />

      {/* Strategic Goals & Mathematical Rollups */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-espresso flex items-center gap-2">
          <Target className="w-5 h-5 text-brand-orange" />
          Active Strategic Goals & Rollups ({goals.length})
        </h2>
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
      </div>

      {/* Task Stream Section */}
      <div className="bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
        <h2 className="text-lg font-bold text-espresso flex items-center gap-2">
          <ListCheck className="w-5 h-5 text-brand-green" />
          Active Execution Tasks ({tasks.length})
        </h2>
        <TaskList tasks={tasks} />
      </div>

      {/* AI Goal Decomposition Proposal Modal */}
      <AIProposalPanel
        goal={targetAIGoal}
        isOpen={Boolean(targetAIGoal)}
        onClose={() => setTargetAIGoal(null)}
      />
    </div>
  );
};
