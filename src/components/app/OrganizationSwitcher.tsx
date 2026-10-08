import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Building2, ChevronDown, Check, Plus } from 'lucide-react';

export const OrganizationSwitcher: React.FC = () => {
  const { currentOrg, organizations, switchOrg, currentUserRole } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl bg-surface-tier1 border border-brand-peach/80 hover:bg-surface-container transition-colors group"
      >
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-brand-orange text-white flex items-center justify-center font-bold text-sm shrink-0">
            {currentOrg.name.charAt(0)}
          </div>
          <div className="text-left truncate">
            <div className="text-xs font-bold text-espresso truncate group-hover:text-brand-orange transition-colors">
              {currentOrg.name}
            </div>
            <div className="text-[10px] font-semibold text-terracotta-muted uppercase tracking-wider">
              {currentOrg.billing_tier} • Role: {currentUserRole}
            </div>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-terracotta-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-warm-xl border border-brand-peach/80 p-2 space-y-1">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-terracotta-muted">
            Workspaces ({organizations.length})
          </div>
          {organizations.map((org) => (
            <button
              key={org.id}
              onClick={() => {
                switchOrg(org.id);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-espresso hover:bg-surface-tier1 hover:text-brand-orange transition-colors"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-orange" />
                <span>{org.name}</span>
              </div>
              {org.id === currentOrg.id && <Check className="w-4 h-4 text-brand-green" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
