import React from 'react';
import { useApp } from '../../context/AppContext';
import { Bell, Shield, User } from 'lucide-react';

export const AppHeader: React.FC = () => {
  const { currentUser, currentOrg, currentUserRole, reminders } = useApp();
  const activeRemindersCount = reminders.filter((r) => !r.sent).length;

  return (
    <header className="h-16 bg-white border-b border-brand-peach/80 px-6 flex items-center justify-between sticky top-0 z-30 shadow-warm-sm">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <h1 className="text-sm font-extrabold text-espresso">{currentOrg.name} Console</h1>
          <div className="flex items-center gap-2 text-[11px] text-terracotta-muted">
            <span className="flex items-center gap-1 font-bold text-brand-orange">
              <Shield className="w-3 h-3" /> Role: {currentUserRole}
            </span>
            <span>•</span>
            <span>Real-Time Telemetry Active</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Reminders Indicator */}
        <div className="relative">
          <button className="p-2 rounded-xl bg-surface-tier1 border border-brand-peach/60 text-terracotta-muted hover:text-brand-orange transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          {activeRemindersCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-orange text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
              {activeRemindersCount}
            </span>
          )}
        </div>

        {/* User Profile Tag */}
        <div className="flex items-center gap-2.5 p-1.5 rounded-xl bg-surface-tier1 border border-brand-peach/60">
          <div className="w-7 h-7 rounded-lg bg-brand-green text-white font-bold text-xs flex items-center justify-center">
            {currentUser.full_name.charAt(0)}
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-espresso">{currentUser.full_name}</div>
            <div className="text-[10px] text-terracotta-muted">{currentUser.email}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
