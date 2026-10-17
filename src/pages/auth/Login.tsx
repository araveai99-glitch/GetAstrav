import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers, ArrowRight } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('arjun@astrav.app');
  const [password, setPassword] = useState('password123');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen bg-surface-ambient flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-peach/80 shadow-warm-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-yellow p-0.5 mx-auto flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
              <Layers className="w-6 h-6 text-brand-orange" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold text-espresso">Sign In to Astrav</h2>
          <p className="text-xs text-terracotta-muted">Access your Executive Command Console</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted block mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-brand-peach text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-terracotta-muted">Password</label>
              <Link to="/forgot-password" className="text-[11px] font-semibold text-brand-orange hover:underline">Forgot password?</Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-brand-peach text-xs font-semibold text-espresso focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-brand-orange-hover shadow-md shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>Authenticate & Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Alternative Console Access Option */}
        <div className="space-y-3 pt-1">
          <div className="relative flex items-center justify-center">
            <div className="border-t border-brand-peach/80 w-full" />
            <span className="bg-white px-3 text-[10px] font-heading font-bold text-terracotta-muted uppercase tracking-wider shrink-0">
              Direct Console Access
            </span>
            <div className="border-t border-brand-peach/80 w-full" />
          </div>

          <Link
            to="/app/dashboard"
            className="w-full py-3 rounded-xl bg-surface-ambient hover:bg-brand-orange-light text-espresso hover:text-brand-orange border border-brand-peach/90 hover:border-brand-orange/60 text-xs font-heading font-bold shadow-warm-xs transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-[0.98] group"
          >
            <Layers className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
            <span>Launch Console</span>
            <ArrowRight className="w-3.5 h-3.5 text-terracotta-muted group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>

        <div className="text-center text-xs text-terracotta-muted">
          Don't have an account? <Link to="/signup" className="font-bold text-brand-orange hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
