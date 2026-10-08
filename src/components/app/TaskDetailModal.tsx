import React, { useState } from 'react';
import { Task, Subtask, TaskComment, ActivityItem } from '../../types';
import { Modal } from '../common/Modal';
import { SubtaskChecklist } from './SubtaskChecklist';
import { ApprovalStatus } from './ApprovalStatus';
import { useApp } from '../../context/AppContext';
import { CheckSquare, MessageSquare, History, Send, Calendar, UserCheck } from 'lucide-react';

interface TaskDetailModalProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TaskDetailModal: React.FC<TaskDetailModalProps> = ({ task, isOpen, onClose }) => {
  const {
    subtasks,
    comments,
    activity,
    toggleSubtask,
    addComment,
    submitTaskForReview,
    approveTask,
    currentUserRole,
  } = useApp();

  const [activeTab, setActiveTab] = useState<'checklist' | 'comments' | 'history'>('checklist');
  const [commentText, setCommentText] = useState('');

  if (!task) return null;

  const taskSubtasks = subtasks.filter((s) => s.task_id === task.id);
  const taskComments = comments.filter((c) => c.task_id === task.id);
  const taskActivity = activity.filter((a) => a.entity_id === task.id);

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addComment(task.id, commentText);
    setCommentText('');
  };

  const canApprove = currentUserRole === 'owner' || currentUserRole === 'manager';

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={task.title}>
      {/* Task Meta Header */}
      <div className="space-y-3 pb-4 border-b border-brand-peach/60">
        <p className="text-xs text-terracotta">{task.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-terracotta-muted">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-brand-orange" />
            Deadline: {new Date(task.deadline).toLocaleDateString()}
          </span>
          {task.assignee && (
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-brand-green" />
              Assignee: {task.assignee.full_name}
            </span>
          )}
          <span className="font-mono text-xs">Weight: {task.weight}x</span>
        </div>

        <ApprovalStatus
          status={task.approval_status}
          onSubmitReview={() => submitTaskForReview(task.id)}
          onApprove={() => approveTask(task.id)}
          canApprove={canApprove}
        />
      </div>

      {/* Segmented Tabs */}
      <div className="flex items-center gap-2 p-1 bg-surface-tier1 rounded-xl border border-brand-peach/60">
        <button
          onClick={() => setActiveTab('checklist')}
          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'checklist'
              ? 'bg-white text-espresso shadow-warm-sm border border-brand-peach/40'
              : 'text-terracotta-muted hover:text-espresso'
          }`}
        >
          <CheckSquare className="w-3.5 h-3.5 text-brand-orange" />
          Checklist ({taskSubtasks.length})
        </button>
        <button
          onClick={() => setActiveTab('comments')}
          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'comments'
              ? 'bg-white text-espresso shadow-warm-sm border border-brand-peach/40'
              : 'text-terracotta-muted hover:text-espresso'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5 text-brand-green" />
          Comments ({taskComments.length})
        </button>
        <button
          onClick={() => setActiveTab('history')}
          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'history'
              ? 'bg-white text-espresso shadow-warm-sm border border-brand-peach/40'
              : 'text-terracotta-muted hover:text-espresso'
          }`}
        >
          <History className="w-3.5 h-3.5 text-tertiary" />
          Audit Log ({taskActivity.length})
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'checklist' && (
        <SubtaskChecklist subtasks={taskSubtasks} onToggle={toggleSubtask} />
      )}

      {activeTab === 'comments' && (
        <div className="space-y-4">
          <div className="space-y-3 max-h-60 overflow-y-auto p-1">
            {taskComments.length === 0 ? (
              <div className="text-xs text-terracotta-muted italic">No comments yet. Start the discussion below.</div>
            ) : (
              taskComments.map((tc) => (
                <div key={tc.id} className="p-3 rounded-xl bg-surface-tier1 border border-brand-peach/60 space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold text-espresso">
                    <span>{tc.author?.full_name || 'Team Member'}</span>
                    <span className="text-[10px] text-terracotta-muted font-normal">
                      {new Date(tc.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-xs text-terracotta">{tc.content}</p>
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleSendComment} className="flex gap-2">
            <input
              type="text"
              placeholder="Post a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl border border-brand-peach text-xs text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover transition-colors flex items-center gap-1"
            >
              <Send className="w-3.5 h-3.5" /> Post
            </button>
          </form>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {taskActivity.length === 0 ? (
            <div className="text-xs text-terracotta-muted italic">No recorded activity for this task yet.</div>
          ) : (
            taskActivity.map((act) => (
              <div key={act.id} className="flex items-center justify-between text-xs p-2 rounded-lg bg-surface-tier1 border border-brand-peach/40">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-espresso">{act.actor?.full_name || 'System'}</span>
                  <span className="text-terracotta font-mono text-[11px]">{act.action}</span>
                </div>
                <span className="text-[10px] text-terracotta-muted">
                  {new Date(act.created_at).toLocaleDateString()}
                </span>
              </div>
            ))
          )}
        </div>
      )}
    </Modal>
  );
};
