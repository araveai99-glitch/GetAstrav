import React from 'react';
import { useApp } from '../../context/AppContext';
import { Bell, Shield, Menu } from 'lucide-react';

interface AppHeaderProps {
  onToggleSidebar?: () => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({ onToggleSidebar }) => {
  const { currentUser, currentOrg, currentUserRole, reminders } = useApp();
  const activeRemindersCount = reminders.filter((r) => !r.sent).length;

  return (
    <header className="h-16 bg-white border-b border-brand-peach/80 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 shadow-warm-sm">
      <div className="flex items-center gap-3">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="md:hidden p-2 rounded-xl text-terracotta-muted hover:text-brand-orange hover:bg-surface-tier1 transition-colors"
            aria-label="Open command menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <div className="flex flex-col">
          <h1 className="text-base sm:text-sm font-extrabold text-espresso leading-tight">{currentOrg.name} Console</h1>
          <div className="flex items-center gap-2 text-xs sm:text-[11px] text-terracotta-muted">
            <span className="flex items-center gap-1 font-bold text-brand-orange">
              <Shield className="w-3.5 h-3.5" /> Role: {currentUserRole}
            </span>
            <span>•</span>
            <span className="hidden min-[400px]:inline">Real-Time Telemetry Active</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {/* Reminders Indicator */}
        <div className="relative">
          <button className="p-2 rounded-xl bg-surface-tier1 border border-brand-peach/60 text-terracotta-muted hover:text-brand-orange transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          {activeRemindersCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-orange text-white text-xs sm:text-[10px] font-bold flex items-center justify-center animate-pulse">
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
            <div className="text-sm sm:text-xs font-bold text-espresso">{currentUser.full_name}</div>
            <div className="text-xs sm:text-[10px] text-terracotta-muted">{currentUser.email}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
