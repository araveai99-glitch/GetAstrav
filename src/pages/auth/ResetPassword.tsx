import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers } from 'lucide-react';

export const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-ambient flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-peach/80 shadow-warm-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-yellow p-0.5 mx-auto flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Layers className="w-6 h-6 text-brand-orange" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-espresso">Set New Password</h2>
          <p className="text-xs text-terracotta-muted">Enter your new secure credential</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); navigate('/login'); }} className="space-y-4">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">New Password</label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-brand-peach text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover shadow-glow-orange transition-all"
          >
            Update Password & Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
