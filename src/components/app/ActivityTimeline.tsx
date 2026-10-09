import React from 'react';
import { ActivityItem } from '../../types';
import { Activity, User, Clock } from 'lucide-react';

interface ActivityTimelineProps {
  activity: ActivityItem[];
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activity }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-espresso flex items-center gap-2">
          <Activity className="w-5 h-5 text-brand-orange" />
          Organization Activity Audit Stream
        </h3>
        <span className="text-xs text-terracotta-muted font-mono">{activity.length} Events</span>
      </div>

      <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-peach/60">
        {activity.map((act) => (
          <div key={act.id} className="relative flex items-start gap-4 pl-8">
            <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-brand-orange ring-4 ring-white" />

            <div className="flex-1 p-3 rounded-xl bg-surface-tier1 border border-brand-peach/60 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-espresso flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-brand-green" />
                  {act.actor?.full_name || 'System Actor'}
                </span>
                <span className="text-[10px] text-terracotta-muted flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3" />
                  {new Date(act.created_at).toLocaleString()}
                </span>
              </div>
              <p className="text-xs text-terracotta">
                Action: <span className="font-semibold text-brand-orange">{act.action}</span> on{' '}
                <span className="font-mono text-espresso">{act.entity_type}</span>
              </p>
              {act.metadata && (
                <div className="text-[11px] font-mono text-terracotta-muted bg-white/60 p-1.5 rounded-lg border border-brand-peach/40 truncate">
                  {JSON.stringify(act.metadata)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
