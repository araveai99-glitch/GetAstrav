import React from 'react';
import { ApprovalStatus as ApprovalType } from '../../types';
import { CheckCircle2, Clock, ShieldAlert } from 'lucide-react';

interface ApprovalStatusProps {
  status: ApprovalType;
  onSubmitReview?: () => void;
  onApprove?: () => void;
  canApprove?: boolean;
}

export const ApprovalStatus: React.FC<ApprovalStatusProps> = ({
  status,
  onSubmitReview,
  onApprove,
  canApprove = false,
}) => {
  if (status === 'not_required') return null;

  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> Pending Manager Review
        </span>
      )}
      {status === 'approved' && (
        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Approved by Manager
        </span>
      )}

      {status === 'pending' && canApprove && onApprove && (
        <button
          onClick={onApprove}
          className="px-3 py-1 rounded-lg bg-brand-green text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-warm-sm"
        >
          Approve Task
        </button>
      )}

      {onSubmitReview && (
        <button
          onClick={onSubmitReview}
          className="px-3 py-1 rounded-lg bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover transition-colors shadow-warm-sm"
        >
          Submit for Review
        </button>
      )}
    </div>
  );
};
