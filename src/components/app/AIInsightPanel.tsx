import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { fetchAIInsights } from '../../services/api';
import { AIInsightResponse } from '../../types';
import { Sparkles, AlertTriangle, RefreshCw, CheckCircle2 } from 'lucide-react';

export const AIInsightPanel: React.FC = () => {
  const { tasks } = useApp();
  const [data, setData] = useState<AIInsightResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadInsights = async () => {
    setIsLoading(true);
    const res = await fetchAIInsights(tasks);
    setData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    loadInsights();
  }, [tasks.length]);

  return (
    <div className="bg-gradient-to-br from-white via-surface-ambient to-surface-tier1 rounded-2xl p-6 shadow-warm-md border border-brand-peach/80 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-brand-orange to-brand-yellow text-white flex items-center justify-center shadow-glow-orange">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-espresso">AI Productivity Insights</h3>
            <p className="text-[11px] text-terracotta-muted font-medium">
              Powered by Gemini 2.5 Flash Lite API
            </p>
          </div>
        </div>

        <button
          onClick={loadInsights}
          disabled={isLoading}
          className="p-2 rounded-xl bg-white border border-brand-peach text-terracotta-muted hover:text-brand-orange hover:bg-surface-tier1 transition-colors flex items-center gap-1 text-xs font-semibold"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {isLoading || !data ? (
        <div className="py-8 text-center text-xs text-terracotta-muted animate-pulse">
          Analyzing organization task telemetry...
        </div>
      ) : (
        <div className="space-y-4">
          {/* Focus Today */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-espresso uppercase tracking-wider text-[10px]">
              Today Focus — Top 3 Action Items
            </div>
            <div className="space-y-2">
              {data.focusToday.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-brand-peach/60 shadow-warm-sm text-xs font-medium text-espresso"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Statement */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-300 text-xs text-amber-900 font-medium flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-brand-yellow shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Risk Signal: </span>
              {data.risk}
            </div>
          </div>

          {/* General Insight */}
          <div className="p-3 rounded-xl bg-surface-tier1 border border-brand-peach/60 text-xs text-terracotta font-normal">
            💡 <span className="font-bold text-espresso">Insight: </span>
            {data.insight}
          </div>
        </div>
      )}
    </div>
  );
};
