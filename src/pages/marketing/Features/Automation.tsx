import React from 'react';
import { CTASection } from '../../../components/common/CTASection';
import { Bell } from 'lucide-react';

export const Automation: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase">
          Features • Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-espresso">
          Automated Reminders & Overdue Alerts
        </h1>
        <p className="text-base text-terracotta leading-relaxed">
          Deno Edge Functions and Resend API dispatch automated email reminders for custom scheduled events and tasks overdue by 15+ days.
        </p>
      </div>
      <CTASection />
    </div>
  );
};
