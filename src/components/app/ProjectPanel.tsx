import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FolderGit2, Plus, Users, Building2, TrendingUp } from 'lucide-react';

export const ProjectPanel: React.FC = () => {
  const { projects, departments, teams, createProject } = useApp();
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [departmentId, setDepartmentId] = useState(departments[0]?.id || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !departmentId) return;
    createProject(title, description, departmentId);
    setTitle('');
    setDescription('');
    setIsCreating(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-espresso flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-brand-orange" />
            Projects & Execution Containers
          </h2>
          <p className="text-xs text-terracotta-muted">
            Projects map strategic goals to cross-functional teams under parent departments
          </p>
        </div>

        <button
          onClick={() => setIsCreating(!isCreating)}
          className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover transition-colors shadow-glow-orange flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Create Project
        </button>
      </div>

      {isCreating && (
        <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-white border border-brand-peach/80 shadow-warm-md space-y-4 animate-fadeIn">
          <h3 className="text-sm font-bold text-espresso">New Project Spec</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Project Title (e.g. Mobile App v2)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
            <select
              value={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              {departments.map((d) => (
                <option key={d.id} value={d.id}>
                  Dept: {d.name}
                </option>
              ))}
            </select>
          </div>
          <textarea
            placeholder="Project Description & Strategic Objectives..."
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
              Save Project
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="p-5 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3 hover:border-brand-orange transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-tier1 border border-brand-peach text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                  {proj.department_name || 'Department Project'}
                </span>
                <h3 className="text-base font-bold text-espresso mt-1">{proj.title}</h3>
              </div>
              <span className="text-xs font-extrabold text-brand-green">
                {(proj.computed_progress || 0).toFixed(0)}% Done
              </span>
            </div>

            <p className="text-xs text-terracotta">{proj.description}</p>

            <div className="w-full h-2 rounded-full bg-brand-peach/30 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-orange to-brand-green rounded-full"
                style={{ width: `${proj.computed_progress || 0}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
