import React from 'react';
import { useApp } from '../../context/AppContext';
import { MilestoneView } from '../../components/app/MilestoneView';

export const MilestonesPage: React.FC = () => {
  const { milestones, tasks } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-espresso">Milestones & Delivery Targets</h1>
          <p className="text-xs text-terracotta-muted">Intermediate delivery checkpoints under goals</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {milestones.map((ms) => (
          <MilestoneView key={ms.id} milestone={ms} tasks={tasks} />
        ))}
      </div>
    </div>
  );
};
