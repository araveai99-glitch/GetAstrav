import React from 'react';
import { RiskStatus } from '../../types';
import { AlertTriangle, Clock, ShieldCheck, Edit3 } from 'lucide-react';

interface GoalProgressProps {
  computed: number;
  override?: number | null;
  riskStatus: RiskStatus;
  weight?: number;
  onOverrideClick?: () => void;
}

export const GoalProgress: React.FC<GoalProgressProps> = ({
  computed,
  override,
  riskStatus,
  weight = 1.0,
  onOverrideClick,
}) => {
  const effective = override !== null && override !== undefined ? override : computed;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-terracotta-muted uppercase tracking-wider text-[10px]">Progress</span>
          <span className="font-extrabold text-espresso text-sm">{effective.toFixed(1)}%</span>
          {override !== null && override !== undefined && (
            <span className="px-2 py-0.5 rounded-full bg-brand-yellow/20 text-espresso text-[10px] font-bold border border-brand-yellow/40 flex items-center gap-1">
              <Edit3 className="w-3 h-3 text-brand-orange" />
              Executive Override
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {riskStatus === 'overdue' && (
            <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold flex items-center gap-1 border border-red-200">
              <Clock className="w-3 h-3" /> Overdue
            </span>
          )}
          {riskStatus === 'at_risk' && (
            <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold flex items-center gap-1 border border-amber-200">
              <AlertTriangle className="w-3 h-3" /> At Risk
            </span>
          )}
          {riskStatus === 'none' && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold flex items-center gap-1 border border-emerald-200">
              <ShieldCheck className="w-3 h-3" /> On Track
            </span>
          )}
          <span className="text-[11px] font-mono text-terracotta-muted">Weight: {weight}x</span>
        </div>
      </div>

      {/* Track rail */}
      <div className="w-full h-2.5 rounded-full bg-brand-peach/40 overflow-hidden relative">
        <div
          className={`h-full transition-all duration-500 rounded-full ${
            effective >= 100
              ? 'bg-brand-green'
              : riskStatus === 'overdue'
              ? 'bg-red-500'
              : riskStatus === 'at_risk'
              ? 'bg-brand-yellow'
              : 'bg-gradient-to-r from-brand-orange to-brand-yellow'
          }`}
          style={{ width: `${Math.min(100, Math.max(0, effective))}%` }}
        />
      </div>

      {onOverrideClick && (
        <button
          onClick={onOverrideClick}
          className="text-[11px] font-semibold text-brand-orange hover:underline flex items-center gap-1"
        >
          <Edit3 className="w-3 h-3" /> Set Executive Override
        </button>
      )}
    </div>
  );
};
