import React from 'react';
import { useApp } from '../../context/AppContext';
import { Building2, Check, ArrowRight } from 'lucide-react';

export const OrganizationsPage: React.FC = () => {
  const { organizations, currentOrg, switchOrg } = useApp();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-espresso">Organization Workspaces</h1>
          <p className="text-xs text-terracotta-muted">Multi-tenant workspace isolation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {organizations.map((org) => (
          <div
            key={org.id}
            className={`p-6 rounded-2xl bg-white border transition-all ${
              org.id === currentOrg.id
                ? 'border-brand-orange shadow-warm-md ring-2 ring-brand-orange/20'
                : 'border-brand-peach/60 shadow-warm-sm hover:border-brand-peach'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange text-white font-bold text-base flex items-center justify-center shadow-glow-orange">
                  {org.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-espresso">{org.name}</h3>
                  <p className="text-xs text-terracotta-muted font-mono">{org.billing_tier}</p>
                </div>
              </div>

              {org.id === currentOrg.id ? (
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Active Workspace
                </span>
              ) : (
                <button
                  onClick={() => switchOrg(org.id)}
                  className="px-3 py-1.5 rounded-xl bg-surface-tier1 border border-brand-peach text-espresso text-xs font-bold hover:bg-brand-orange hover:text-white transition-colors flex items-center gap-1"
                >
                  Switch <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
