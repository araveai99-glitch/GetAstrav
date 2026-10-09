import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, Lock, UserPlus, Trash2, CheckCircle2 } from 'lucide-react';

export const RBACPanel: React.FC = () => {
  const {
    profiles,
    departments,
    projects,
    scopedPermissions,
    grantScopedPermission,
    revokeScopedPermission,
    currentUserRole,
  } = useApp();

  const [selectedUser, setSelectedUser] = useState(profiles[0]?.id || '');
  const [scopeType, setScopeType] = useState<'department' | 'project'>('project');
  const [scopeId, setScopeId] = useState(projects[0]?.id || '');
  const [scopedRole, setScopedRole] = useState<'manager' | 'employee' | 'guest'>('manager');

  const handleGrant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !scopeId) return;
    grantScopedPermission(selectedUser, scopeType, scopeId, scopedRole);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-espresso flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-orange" />
              Composable Per-Scope RBAC Management
            </h3>
            <p className="text-xs text-terracotta-muted">
              Grant elevated role access on specific Departments or Projects without changing global Org Role
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase">
            Active Role: {currentUserRole}
          </span>
        </div>

        {/* Grant Permission Form */}
        <form onSubmit={handleGrant} className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-surface-tier1 border border-brand-peach/60">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">
              Select Member
            </label>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white border border-brand-peach text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              {profiles.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.full_name} ({p.email})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">
              Scope Target
            </label>
            <select
              value={scopeType}
              onChange={(e) => {
                const val = e.target.value as 'department' | 'project';
                setScopeType(val);
                setScopeId(val === 'project' ? projects[0]?.id || '' : departments[0]?.id || '');
              }}
              className="w-full px-3 py-2 rounded-xl bg-white border border-brand-peach text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              <option value="project">Project Scope</option>
              <option value="department">Department Scope</option>
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">
              Resource Entity
            </label>
            <select
              value={scopeId}
              onChange={(e) => setScopeId(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white border border-brand-peach text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              {scopeType === 'project'
                ? projects.map((pr) => (
                    <option key={pr.id} value={pr.id}>
                      {pr.title}
                    </option>
                  ))
                : departments.map((dp) => (
                    <option key={dp.id} value={dp.id}>
                      {dp.name}
                    </option>
                  ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">
              Scoped Role
            </label>
            <div className="flex gap-2">
              <select
                value={scopedRole}
                onChange={(e) => setScopedRole(e.target.value as any)}
                className="flex-1 px-3 py-2 rounded-xl bg-white border border-brand-peach text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option value="manager">Scoped Manager</option>
                <option value="employee">Scoped Employee</option>
                <option value="guest">Scoped Guest</option>
              </select>
              <button
                type="submit"
                className="px-3 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover transition-colors shrink-0 flex items-center gap-1 shadow-glow-orange"
              >
                <UserPlus className="w-3.5 h-3.5" /> Grant
              </button>
            </div>
          </div>
        </form>

        {/* Existing Scoped Grants List */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta-muted">
            Active Scoped Grants ({scopedPermissions.length})
          </h4>
          {scopedPermissions.length === 0 ? (
            <div className="text-xs text-terracotta-muted italic">No scoped grants configured yet.</div>
          ) : (
            scopedPermissions.map((sp) => {
              const targetName =
                sp.scope_type === 'project'
                  ? projects.find((pr) => pr.id === sp.scope_id)?.title
                  : departments.find((dp) => dp.id === sp.scope_id)?.name;

              return (
                <div
                  key={sp.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-brand-peach/60 shadow-warm-sm"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    <div>
                      <div className="text-xs font-bold text-espresso">
                        {sp.user?.full_name || 'Member'}
                      </div>
                      <div className="text-[11px] text-terracotta-muted">
                        Granted <span className="font-bold text-brand-orange">{sp.scoped_role}</span> on{' '}
                        <span className="font-semibold text-espresso">{sp.scope_type}</span>: {targetName || sp.scope_id}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => revokeScopedPermission(sp.id)}
                    className="p-1.5 rounded-lg text-terracotta-muted hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
