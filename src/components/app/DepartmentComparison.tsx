import React from 'react';
import { Department, Project, Goal } from '../../types';
import { calculateDepartmentProgress, calculateProjectProgress } from '../../lib/rollupEngine';
import { Building2 } from 'lucide-react';

interface DepartmentComparisonProps {
  departments: Department[];
  projects: Project[];
  goals: Goal[];
}

export const DepartmentComparison: React.FC<DepartmentComparisonProps> = ({
  departments,
  projects,
  goals,
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-espresso flex items-center gap-2">
          <Building2 className="w-5 h-5 text-brand-orange" />
          Departmental Progress Comparison
        </h3>
        <span className="text-xs text-terracotta-muted">Real-time mathematical rollups</span>
      </div>

      <div className="space-y-4">
        {departments.map((dept) => {
          const deptProjects = projects.filter((p) => p.department_id === dept.id);
          const deptProjectProgresses = deptProjects.map((p) => {
            const projGoals = goals.filter((g) => g.project_id === p.id);
            const goalItems = projGoals.map((g) => ({
              goal: g,
              progress:
                g.progress_override !== null && g.progress_override !== undefined
                  ? g.progress_override
                  : g.progress_computed,
            }));
            return calculateProjectProgress(goalItems);
          });

          const deptProgress = calculateDepartmentProgress(deptProjectProgresses);

          return (
            <div key={dept.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-espresso font-bold">{dept.name}</span>
                <span className="font-mono text-espresso">{deptProgress.toFixed(1)}%</span>
              </div>
              <div className="w-full h-3 rounded-full bg-brand-peach/30 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-orange to-brand-green rounded-full transition-all duration-500"
                  style={{ width: `${deptProgress}%` }}
                />
              </div>
              <div className="text-[10px] text-terracotta-muted flex items-center justify-between">
                <span>{deptProjects.length} Projects linked</span>
                <span>Weighted math rollup</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
