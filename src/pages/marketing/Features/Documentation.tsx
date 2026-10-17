import React, { useEffect } from 'react';
import { FileText, BookOpen, Layers, CheckCircle2, Search, Link2, Sparkles } from 'lucide-react';
import { CTASection } from '../../../components/common/CTASection';

export const Documentation: React.FC = () => {
  useEffect(() => {
    document.title = 'Living Documentation & PRD Architecture — Astrav';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pt-20 sm:pt-24 pb-8 sm:pb-12 flex flex-col space-y-8 sm:space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="brand-h1 text-espresso tracking-tight">
          Living Documentation & Knowledge Architecture
        </h1>
        <p className="brand-subtitle text-terracotta text-base sm:text-lg max-w-2xl mx-auto font-normal">
          Embed architectural specs, product requirement documents, and operational playbooks directly alongside live task execution.
        </p>
      </div>

      {/* 3 Symmetric Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
              <Link2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              In-Context Execution Docs
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              No more searching stale wikis or disconnected Notion documents. Attach technical specs, user personas, and acceptance criteria directly into the active deliverable modal.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-orange">
            <span>Direct Binding</span>
            <span>Zero Tab Switching</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-yellow flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              AI Spec Summaries
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Astrav’s AI extracts core constraints, architectural diagrams, and non-functional requirements from lengthy PRDs into executive briefs for engineering and product leads.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-amber-700">
            <span>Automated Digest</span>
            <span>Key Constraints</span>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-brand-peach/80 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-brand-green-light text-brand-green flex items-center justify-center mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-espresso mb-2">
              Organizational Memory
            </h3>
            <p className="text-sm text-terracotta leading-relaxed">
              Capture post-mortem learnings, architectural decision records (ADRs), and sprint retrospectives in an indexable command center for permanent institutional wisdom.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-brand-peach/40 flex items-center justify-between text-xs font-heading font-semibold text-brand-green">
            <span>Institutional Wisdom</span>
            <span>Full-Text Search</span>
          </div>
        </div>
      </div>

      {/* Wide Knowledge Architecture Framework */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-brand-peach/80 shadow-warm-md">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-brand-peach/50">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-bold text-espresso">
              Unified Knowledge Architecture
            </h3>
            <p className="text-xs text-terracotta-muted">
              Connect strategy, documentation, and live execution into a single coherent truth
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-brand-orange bg-brand-orange-light px-3 py-1 rounded-full border border-brand-orange/30">
            Real-Time Sync
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm text-terracotta">
          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Markdown & Rich PRD Editor
            </h4>
            <p className="text-xs leading-relaxed">
              Standard GitHub-flavored markdown with embedded Figma previews, Mermaid diagrams, and real-time multiplayer editing.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Versioned Architectural Records
            </h4>
            <p className="text-xs leading-relaxed">
              Track changes to project scope and technical blueprints with diff-level attribution and manager approvals.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-tier1 border border-brand-peach/50 space-y-2">
            <h4 className="font-heading font-bold text-espresso flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Automated Review Checklists
            </h4>
            <p className="text-xs leading-relaxed">
              Ensure engineers meet all defined PRD criteria before tasks transition into completed rollup milestones.
            </p>
          </div>
        </div>
      </div>

      <CTASection paddingY="pt-2 pb-2" paddingX="px-0" />
    </div>
  );
};
