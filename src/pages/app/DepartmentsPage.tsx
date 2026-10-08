import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DepartmentComparison } from '../../components/app/DepartmentComparison';
import { Building2, Plus } from 'lucide-react';

export const DepartmentsPage: React.FC = () => {
  const { departments, projects, goals, createDepartment } = useApp();
  const [name, setName] = useState('');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    createDepartment(name);
    setName('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-espresso">Departments & Divisions</h1>
          <p className="text-xs text-terracotta-muted">High-level organization divisions and weighted completion metrics</p>
        </div>
      </div>

      <form onSubmit={handleCreate} className="flex gap-3 p-4 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-sm">
        <input
          type="text"
          placeholder="New Department Name (e.g. Engineering, Operations)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover shadow-glow-orange flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Add Department
        </button>
      </form>

      <DepartmentComparison departments={departments} projects={projects} goals={goals} />
    </div>
  );
};
