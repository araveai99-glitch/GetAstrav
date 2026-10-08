import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserCheck, UserPlus, Mail, Shield, Check } from 'lucide-react';
import { OrgRole } from '../../types';

export const MembersPage: React.FC = () => {
  const { profiles, invitations, inviteMember, currentUserRole } = useApp();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<OrgRole>('manager');
  const [statusMsg, setStatusMsg] = useState('');

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    inviteMember(email, role);
    setStatusMsg(`Invitation token generated & sent to ${email}`);
    setEmail('');
    setTimeout(() => setStatusMsg(''), 4000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-espresso">Organization Members & Invitations</h1>
          <p className="text-xs text-terracotta-muted">Invite team members and manage member role assignments</p>
        </div>
      </div>

      {statusMsg && (
        <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-800 flex items-center gap-2 animate-fadeIn">
          <Check className="w-4 h-4" /> {statusMsg}
        </div>
      )}

      {/* Invite Member Form */}
      <form onSubmit={handleInvite} className="flex flex-wrap items-end gap-3 p-4 rounded-2xl bg-white border border-brand-peach/60 shadow-warm-sm">
        <div className="flex-1 min-w-[200px]">
          <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="colleague@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">
            Initial Org Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as OrgRole)}
            className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
          >
            <option value="owner">Owner</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
            <option value="guest">Guest</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover shadow-glow-orange flex items-center gap-1.5"
        >
          <UserPlus className="w-4 h-4" /> Send Invite
        </button>
      </form>

      {/* Members Grid */}
      <div className="bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
        <h3 className="text-base font-bold text-espresso flex items-center gap-2">
          <UserCheck className="w-5 h-5 text-brand-orange" />
          Active Workspace Members ({profiles.length})
        </h3>
        <div className="space-y-2">
          {profiles.map((p) => (
            <div key={p.id} className="flex items-center justify-between p-3 rounded-xl bg-surface-tier1 border border-brand-peach/60 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-orange text-white font-bold flex items-center justify-center">
                  {p.full_name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-espresso">{p.full_name}</div>
                  <div className="text-[11px] text-terracotta-muted">{p.email}</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white border border-brand-peach text-[10px] font-bold text-espresso uppercase">
                {p.id === 'u-01' ? 'Owner' : p.id === 'u-02' ? 'Manager' : p.id === 'u-05' ? 'Guest' : 'Employee'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Invitations */}
      <div className="bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
        <h3 className="text-base font-bold text-espresso flex items-center gap-2">
          <Mail className="w-5 h-5 text-brand-yellow" />
          Pending Invitations ({invitations.length})
        </h3>
        <div className="space-y-2">
          {invitations.map((inv) => (
            <div key={inv.id} className="flex items-center justify-between p-3 rounded-xl bg-surface-ambient border border-brand-peach/40 text-xs">
              <div>
                <div className="font-bold text-espresso">{inv.email}</div>
                <div className="text-[10px] text-terracotta-muted font-mono">Token: {inv.token}</div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                {inv.status} ({inv.role})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
