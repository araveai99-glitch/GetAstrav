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
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-brand-orange to-brand-yellow text-white flex items-center justify-center shadow-glow-orange shrink-0">
            <Sparkles className="w-5.5 h-5.5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-base font-bold text-espresso">AI Productivity Insights</h3>
            <p className="text-xs sm:text-[11px] text-terracotta-muted font-medium">
              Powered by Gemini 2.5 Flash Lite API
            </p>
          </div>
        </div>

        <button
          onClick={loadInsights}
          disabled={isLoading}
          className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white border border-brand-peach text-terracotta-muted hover:text-brand-orange hover:bg-surface-tier1 transition-colors flex items-center gap-1.5 text-sm sm:text-xs font-semibold cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {isLoading || !data ? (
        <div className="py-8 text-center text-sm sm:text-xs text-terracotta-muted animate-pulse">
          Analyzing organization task telemetry...
        </div>
      ) : (
        <div className="space-y-4">
          {/* Focus Today */}
          <div className="space-y-2">
            <div className="text-xs sm:text-[11px] font-bold text-espresso uppercase tracking-wider">
              Today Focus — Top 3 Action Items
            </div>
            <div className="space-y-2">
              {data.focusToday.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-brand-peach/60 shadow-warm-sm text-sm sm:text-xs font-medium text-espresso"
                >
                  <div className="w-6 h-6 rounded-lg bg-brand-green/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="pt-0.5">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Statement */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-300 text-sm sm:text-xs text-amber-900 font-medium flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
            </div>
            <div className="pt-0.5">
              <span className="font-bold">Risk Signal: </span>
              {data.risk}
            </div>
          </div>

          {/* General Insight */}
          <div className="p-3.5 rounded-xl bg-surface-tier1 border border-brand-peach/60 text-sm sm:text-xs text-terracotta font-normal leading-relaxed">
            💡 <span className="font-bold text-espresso">Insight: </span>
            {data.insight}
          </div>
        </div>
      )}
    </div>
  );
};
