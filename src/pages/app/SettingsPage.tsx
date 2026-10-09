import React from 'react';
import { RBACPanel } from '../../components/app/RBACPanel';
import { useApp } from '../../context/AppContext';
import { Settings, Shield } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const { currentOrg } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-espresso">Organization Settings & RBAC</h1>
          <p className="text-xs text-terracotta-muted">Manage workspace title, billing plan tier, and composable RBAC grants</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
        <h3 className="text-base font-bold text-espresso flex items-center gap-2">
          <Settings className="w-5 h-5 text-brand-orange" />
          Workspace Parameters
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">
              Active Organization Title
            </label>
            <input
              type="text"
              readOnly
              value={currentOrg.name}
              className="w-full px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-surface-tier1"
            />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">
              Billing Tier Status
            </label>
            <input
              type="text"
              readOnly
              value={currentOrg.billing_tier}
              className="w-full px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-surface-tier1"
            />
          </div>
        </div>
      </div>

      <RBACPanel />
    </div>
  );
};
