import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { sendEmailReminder } from '../../services/api';
import { Bell, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ReminderPanel: React.FC = () => {
  const { reminders, createReminder, currentUser } = useApp();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [remindAt, setRemindAt] = useState(
    new Date(Date.now() + 86400000).toISOString().slice(0, 16)
  );
  const [statusMsg, setStatusMsg] = useState('');

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    createReminder(title, description, new Date(remindAt).toISOString());
    const res = await sendEmailReminder(currentUser.email, title, description);
    setStatusMsg(res.message);

    setTitle('');
    setDescription('');
    setTimeout(() => setStatusMsg(''), 4000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-brand-peach/60 shadow-warm-md space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-espresso flex items-center gap-2">
              <Bell className="w-5 h-5 text-brand-orange" />
              Automated Reminders & Email Notifications
            </h3>
            <p className="text-xs text-terracotta-muted">
              Scheduled notifications via Deno Edge Functions and Resend API
            </p>
          </div>
        </div>

        {statusMsg && (
          <div className="p-3 rounded-xl bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-800 flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4" /> {statusMsg}
          </div>
        )}

        {/* Schedule Form */}
        <form onSubmit={handleSchedule} className="space-y-3 p-4 rounded-xl bg-surface-tier1 border border-brand-peach/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Reminder Title (e.g. Executive Quarterly Review)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
            <input
              type="datetime-local"
              value={remindAt}
              onChange={(e) => setRemindAt(e.target.value)}
              className="px-3 py-2 rounded-xl border border-brand-peach text-xs font-semibold text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <input
            type="text"
            placeholder="Description / Notes for email dispatch..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 rounded-xl border border-brand-peach text-xs text-espresso bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover transition-colors shadow-glow-orange flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" /> Schedule Email Reminder
          </button>
        </form>

        {/* Reminders List */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta-muted">
            Scheduled Reminders ({reminders.length})
          </h4>
          {reminders.map((rem) => (
            <div
              key={rem.id}
              className="flex items-center justify-between p-3 rounded-xl bg-white border border-brand-peach/60 shadow-warm-sm text-xs"
            >
              <div>
                <div className="font-bold text-espresso">{rem.title}</div>
                <div className="text-[11px] text-terracotta-muted">{rem.description}</div>
              </div>
              <div className="flex items-center gap-2 font-mono text-terracotta-muted text-[11px]">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                {new Date(rem.remind_at).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
