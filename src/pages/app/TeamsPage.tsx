import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Users, Plus, Shield } from 'lucide-react';

export const TeamsPage: React.FC = () => {
  const { teams, departments, profiles, createTeam } = useApp();
  const [name, setName] = useState('');
  const [deptId, setDeptId] = useState(departments[0]?.id || '');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    createTeam(name, deptId, ['u-01', 'u-03']);
    setName('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-espresso">Cross-Functional Teams & Pods</h1>
          <p className="text-xs text-terracotta-muted">Agile pods grouping organization members</p>
        </div>
      </div>

      <form onSubmit={handleCreate} className="flex flex-wrap gap-3 p-4 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-sm">
        <input
          type="text"
          placeholder="Team Pod Name (e.g. Core Kernel Pod)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 min-w-[200px] px-4 py-2.5 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
        <select
          value={deptId}
          onChange={(e) => setDeptId(e.target.value)}
          className="px-3 py-2.5 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
        >
          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              Dept: {d.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover shadow-glow-orange flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Create Team
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {teams.map((tm) => (
          <div key={tm.id} className="p-5 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-md space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-espresso">{tm.name}</h3>
              <span className="text-xs font-mono text-terracotta-muted">{tm.member_ids.length} Members</span>
            </div>
            <div className="space-y-1 pt-2 border-t border-brand-peach/40">
              {tm.members?.map((m) => (
                <div key={m.id} className="text-xs text-terracotta flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                  <span>{m.full_name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
