import React from 'react';
import { ActivityItem } from '../../types';
import {
  Activity,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  TrendingUp,
  UserCheck,
  Target,
  Sparkles,
  Building2,
} from 'lucide-react';

interface ActivityTimelineProps {
  activity: ActivityItem[];
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activity }) => {
  // Helper to get action badge styling and icon
  const getActionInfo = (act: ActivityItem) => {
    switch (act.action) {
      case 'campaign_launched':
        return {
          label: 'Campaign Launched',
          icon: TrendingUp,
          badgeBg: 'bg-brand-orange-light text-brand-orange border-brand-orange/30',
          avatarBg: 'bg-brand-orange-light text-brand-orange',
          dotBg: 'bg-brand-orange',
        };
      case 'tasks_overdue':
        return {
          label: 'Overdue Alert',
          icon: AlertTriangle,
          badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
          avatarBg: 'bg-amber-100 text-amber-700',
          dotBg: 'bg-amber-500',
        };
      case 'deal_stage_updated':
        return {
          label: 'Pipeline Progress',
          icon: BarChart3,
          badgeBg: 'bg-[#edf7f3] text-[#2e936f] border-[#2e936f]/30',
          avatarBg: 'bg-emerald-100 text-emerald-700',
          dotBg: 'bg-brand-green',
        };
      case 'completed':
        return {
          label: 'Task Completed',
          icon: CheckCircle2,
          badgeBg: 'bg-[#edf7f3] text-[#2e936f] border-[#2e936f]/30',
          avatarBg: 'bg-emerald-100 text-emerald-700',
          dotBg: 'bg-brand-green',
        };
      case 'submitted_for_review':
        return {
          label: 'Review Pending',
          icon: UserCheck,
          badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
          avatarBg: 'bg-blue-100 text-blue-700',
          dotBg: 'bg-blue-500',
        };
      case 'goal_overridden':
        return {
          label: 'Goal Override',
          icon: Target,
          badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
          avatarBg: 'bg-purple-100 text-purple-700',
          dotBg: 'bg-purple-500',
        };
      default:
        return {
          label: act.action.replace(/_/g, ' '),
          icon: Sparkles,
          badgeBg: 'bg-surface-tier1 text-terracotta border-brand-peach/60',
          avatarBg: 'bg-brand-orange-light text-brand-orange',
          dotBg: 'bg-brand-orange',
        };
    }
  };

  const getActorInitial = (name?: string) => {
    if (!name) return 'S';
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-brand-peach/40">
        <h3 className="text-base sm:text-lg font-heading font-extrabold text-espresso flex items-center gap-2">
          <Activity className="w-5 h-5 text-brand-orange" />
          <span>Activity Audit Stream</span>
        </h3>
        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-surface-ambient border border-brand-peach text-terracotta-muted">
          {activity.length} Events
        </span>
      </div>

      <div className="space-y-3.5 relative before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-brand-peach/60">
        {activity.map((act) => {
          const actionInfo = getActionInfo(act);
          const Icon = actionInfo.icon;
          const actorName = act.actor?.full_name || 'System Actor';
          const title = (act.metadata?.title as string) || `${act.action.replace(/_/g, ' ')} on ${act.entity_type}`;
          const department = act.metadata?.department as string | undefined;
          const highlight = act.metadata?.highlight as string | undefined;
          const relativeTime = act.metadata?.relativeTime as string | undefined;

          return (
            <div key={act.id} className="relative flex items-start gap-3.5 pl-8 sm:pl-9 group">
              {/* Timeline Node Dot */}
              <div
                className={`absolute left-2 top-2.5 w-3.5 h-3.5 rounded-full ${actionInfo.dotBg} ring-4 ring-white shadow-warm-2xs group-hover:scale-110 transition-transform`}
              />

              <div className="flex-1 p-3.5 sm:p-4 rounded-xl bg-surface-ambient border border-brand-peach/60 hover:border-brand-orange/40 hover:shadow-warm-xs transition-all space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    {/* Actor Initial Avatar */}
                    <div
                      className={`w-6 h-6 rounded-full ${actionInfo.avatarBg} font-heading font-bold text-xs flex items-center justify-center shrink-0 shadow-warm-2xs`}
                    >
                      {getActorInitial(actorName)}
                    </div>
                    <span className="font-heading font-extrabold text-xs sm:text-sm text-espresso truncate">
                      {actorName}
                    </span>
                    {department && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-heading font-bold bg-white border border-brand-peach/70 text-terracotta shrink-0 flex items-center gap-1">
                        <Building2 className="w-2.5 h-2.5 text-brand-orange" />
                        <span>{department}</span>
                      </span>
                    )}
                  </div>

                  {/* Timestamp & Action Pill */}
                  <div className="flex items-center gap-2 shrink-0 ml-auto">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10.5px] sm:text-xs font-heading font-bold border flex items-center gap-1 shrink-0 ${actionInfo.badgeBg}`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{actionInfo.label}</span>
                    </span>
                    <span className="text-[11px] text-terracotta-muted flex items-center gap-1 font-mono shrink-0">
                      <Clock className="w-3 h-3 text-terracotta-muted/70" />
                      {relativeTime || new Date(act.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>

                {/* Activity Headline */}
                <div className="font-heading font-semibold text-xs sm:text-sm text-espresso">
                  {title}
                </div>

                {/* Subtitle / Contextual Note */}
                {highlight && (
                  <p className="text-xs text-terracotta bg-white/80 p-2 rounded-lg border border-brand-peach/40 leading-relaxed">
                    {highlight}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
