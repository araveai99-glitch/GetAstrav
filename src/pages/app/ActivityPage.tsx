import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { ActivityTimeline } from '../../components/app/ActivityTimeline';
import {
  Activity,
  ArrowLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Building2,
} from 'lucide-react';

export const ActivityPage: React.FC = () => {
  const { activity } = useApp();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('all');

  const stats = useMemo(() => {
    const tasksCount = activity.filter((a) => a.entity_type === 'task').length;
    const goalsCount = activity.filter((a) => a.entity_type === 'goal').length;
    const deptsCount = activity.filter((a) => a.entity_type === 'department').length;
    const overdueCount = activity.filter(
      (a) =>
        a.action === 'tasks_overdue' ||
        (a.metadata?.title as string)?.toLowerCase().includes('overdue')
    ).length;
    return { tasksCount, goalsCount, deptsCount, overdueCount };
  }, [activity]);

  const filteredActivity = useMemo(() => {
    if (filter === 'all') return activity;
    if (filter === 'task') return activity.filter((a) => a.entity_type === 'task');
    if (filter === 'goal') return activity.filter((a) => a.entity_type === 'goal');
    if (filter === 'department') return activity.filter((a) => a.entity_type === 'department');
    if (filter === 'overdue') {
      return activity.filter(
        (a) =>
          a.action === 'tasks_overdue' ||
          (a.metadata?.title as string)?.toLowerCase().includes('overdue')
      );
    }
    return activity;
  }, [activity, filter]);

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-medium">
          <Link
            to="/app/dashboard"
            className="text-terracotta-muted hover:text-brand-orange transition-colors flex items-center gap-1.5"
          >
            <span>Dashboard</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
          <span className="font-heading font-bold text-espresso bg-white px-2.5 py-0.5 rounded-full border border-brand-peach/60 shadow-warm-2xs">
            Recent Activity & Audit
          </span>
        </nav>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-surface-tier1 text-espresso border border-brand-peach shadow-warm-xs text-xs sm:text-sm font-heading font-bold transition-all active:scale-95 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 text-brand-orange group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Dashboard</span>
        </button>
      </div>

      {/* Page Title & Overview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-brand-peach/60">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-espresso font-heading tracking-tight flex items-center gap-2.5">
            <Activity className="w-7 h-7 text-brand-orange shrink-0" />
            <span>Recent Activity & Audit Log</span>
          </h1>
          <p className="text-xs sm:text-sm text-terracotta-muted mt-1 max-w-2xl">
            Complete telemetry of company milestones, department signals, task changes, overdue alerts, and strategic goal rollups.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#edf7f3] text-[#2e936f] border border-[#2e936f]/30 shadow-warm-2xs flex items-center gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
            Live Audit Sync
          </span>
        </div>
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div
          onClick={() => setFilter('all')}
          className={`p-3.5 sm:p-4 rounded-2xl bg-white border transition-all cursor-pointer ${
            filter === 'all'
              ? 'border-brand-orange ring-2 ring-brand-orange/20 shadow-warm-sm'
              : 'border-brand-peach/60 hover:border-brand-orange/40 shadow-warm-2xs'
          }`}
        >
          <span className="text-[11px] sm:text-xs font-heading font-bold text-terracotta-muted uppercase tracking-wider block">
            Total Logged Events
          </span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xl sm:text-2xl font-extrabold text-espresso font-heading">
              {activity.length}
            </span>
            <Activity className="w-4 h-4 text-brand-orange" />
          </div>
        </div>

        <div
          onClick={() => setFilter('department')}
          className={`p-3.5 sm:p-4 rounded-2xl bg-white border transition-all cursor-pointer ${
            filter === 'department'
              ? 'border-brand-orange ring-2 ring-brand-orange/20 shadow-warm-sm'
              : 'border-brand-peach/60 hover:border-brand-orange/40 shadow-warm-2xs'
          }`}
        >
          <span className="text-[11px] sm:text-xs font-heading font-bold text-terracotta-muted uppercase tracking-wider block">
            Department Signals
          </span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xl sm:text-2xl font-extrabold text-espresso font-heading">
              {stats.deptsCount}
            </span>
            <Building2 className="w-4 h-4 text-[#2e936f]" />
          </div>
        </div>

        <div
          onClick={() => setFilter('task')}
          className={`p-3.5 sm:p-4 rounded-2xl bg-white border transition-all cursor-pointer ${
            filter === 'task'
              ? 'border-brand-orange ring-2 ring-brand-orange/20 shadow-warm-sm'
              : 'border-brand-peach/60 hover:border-brand-orange/40 shadow-warm-2xs'
          }`}
        >
          <span className="text-[11px] sm:text-xs font-heading font-bold text-terracotta-muted uppercase tracking-wider block">
            Task Mutations
          </span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xl sm:text-2xl font-extrabold text-espresso font-heading">
              {stats.tasksCount}
            </span>
            <CheckCircle2 className="w-4 h-4 text-[#fab60a]" />
          </div>
        </div>

        <div
          onClick={() => setFilter('overdue')}
          className={`p-3.5 sm:p-4 rounded-2xl bg-white border transition-all cursor-pointer ${
            filter === 'overdue'
              ? 'border-amber-500 ring-2 ring-amber-500/20 shadow-warm-sm'
              : 'border-brand-peach/60 hover:border-amber-400 shadow-warm-2xs'
          }`}
        >
          <span className="text-[11px] sm:text-xs font-heading font-bold text-terracotta-muted uppercase tracking-wider block">
            Overdue Alerts
          </span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xl sm:text-2xl font-extrabold text-amber-700 font-heading">
              {stats.overdueCount}
            </span>
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-1 pb-1">
        <span className="text-xs font-heading font-bold text-terracotta-muted flex items-center gap-1.5 mr-1">
          <Filter className="w-3.5 h-3.5 text-brand-orange" />
          <span>Filter Stream:</span>
        </span>
        {[
          { id: 'all', label: 'All Activities' },
          { id: 'department', label: 'Department Updates' },
          { id: 'task', label: 'Tasks & Milestones' },
          { id: 'goal', label: 'Goal Rollups' },
          { id: 'overdue', label: 'Overdue & Risks' },
        ].map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-brand-orange text-white shadow-warm-xs scale-[1.02]'
                  : 'bg-white hover:bg-surface-tier1 text-terracotta border border-brand-peach/70'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Main Activity Timeline Component */}
      <ActivityTimeline activity={filteredActivity} />
    </div>
  );
};
