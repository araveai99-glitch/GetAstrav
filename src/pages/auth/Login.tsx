import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layers, ArrowRight, Lock } from 'lucide-react';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('arjun@founderos.app');
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
          <h2 className="text-2xl font-extrabold text-espresso">Sign In to FounderOS</h2>
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
            className="w-full py-3 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-primary-hover shadow-glow-orange transition-all flex items-center justify-center gap-2"
          >
            Authenticate & Access <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="text-center text-xs text-terracotta-muted">
          Don't have an account? <Link to="/signup" className="font-bold text-brand-orange hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};
