import React, { useState } from 'react';
import { Goal, AIProposalItem } from '../../types';
import { fetchAIGoalDecomposition } from '../../services/api';
import { useApp } from '../../context/AppContext';
import { Modal } from '../common/Modal';
import { Sparkles, Check, Trash2, Calendar, User } from 'lucide-react';

interface AIProposalPanelProps {
  goal: Goal | null;
  isOpen: boolean;
  onClose: () => void;
}

export const AIProposalPanel: React.FC<AIProposalPanelProps> = ({ goal, isOpen, onClose }) => {
  const { createTask, profiles } = useApp();
  const [proposals, setProposals] = useState<AIProposalItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!goal) return;
    setIsLoading(true);
    const res = await fetchAIGoalDecomposition(goal.title, goal.description);
    setProposals(res.proposals);
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (isOpen && goal) {
      handleGenerate();
    }
  }, [isOpen, goal?.id]);

  const handleAcceptProposal = (item: AIProposalItem, index: number) => {
    if (!goal) return;
    createTask(
      item.title,
      item.description,
      goal.id,
      undefined,
      1.0,
      item.deadline,
      item.suggested_assignee_id || profiles[0]?.id,
      false
    );
    setProposals((prev) => prev.filter((_, i) => i !== index));
  };

  if (!goal) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`AI Goal Decomposition: ${goal.title}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-terracotta-muted">
          <span>Gemini 2.5 Flash Lite generates actionable task proposals</span>
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="text-brand-orange hover:underline font-bold flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" /> Regenerate
          </button>
        </div>

        {isLoading ? (
          <div className="py-12 text-center text-xs text-terracotta-muted animate-pulse">
            Gemini AI is analyzing strategic objective and decomposing tasks...
          </div>
        ) : proposals.length === 0 ? (
          <div className="py-8 text-center text-xs text-terracotta-muted">
            All proposed tasks have been accepted or reviewed.
          </div>
        ) : (
          <div className="space-y-3">
            {proposals.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-surface-tier1 border border-brand-peach/80 space-y-3 shadow-warm-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-bold text-espresso">{item.title}</h4>
                    <p className="text-xs text-terracotta mt-1">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleAcceptProposal(item, idx)}
                      className="px-3 py-1.5 rounded-xl bg-brand-green text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-warm-sm flex items-center gap-1"
                    >
                      <Check className="w-3.5 h-3.5" /> Accept Task
                    </button>
                    <button
                      onClick={() => setProposals((prev) => prev.filter((_, i) => i !== idx))}
                      className="p-1.5 rounded-xl bg-white border border-brand-peach text-terracotta-muted hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-terracotta-muted pt-2 border-t border-brand-peach/40">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                    Due: {new Date(item.deadline).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-green" />
                    Suggested: {profiles.find((p) => p.id === item.suggested_assignee_id)?.full_name || 'Team Lead'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};
