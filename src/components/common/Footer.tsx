import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { openDemoModal } from './DemoModal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-peach/80 pt-12 sm:pt-14 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-10 xl:px-12">
      <div className="max-w-[1600px] mx-auto space-y-12">
        {/* TOP BRAND STATEMENT & POSITIONING */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-brand-peach/60 pb-12"
        >
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green p-0.5 shadow-warm-sm flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Layers className="w-5.5 h-5.5 text-brand-orange" />
                </div>
              </div>
              <span className="font-extrabold text-2xl text-espresso tracking-tight">Astrav</span>
            </div>
            <p className="text-base sm:text-lg text-terracotta leading-relaxed max-w-xl font-normal text-left sm:text-justify">
              The goal-driven operating system with automated progress rollups, AI planning, and enterprise governance.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap lg:justify-end items-center gap-3 pt-2">
            <span className="px-3.5 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-espresso flex items-center gap-1.5 shadow-warm-2xs">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Composable RBAC
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-espresso flex items-center gap-1.5 shadow-warm-2xs">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Row-Level Security (RLS)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-espresso flex items-center gap-1.5 shadow-warm-2xs">
              <ShieldCheck className="w-4 h-4 text-brand-green" /> Zero-Owner Safeguard
            </span>
          </div>
        </motion.div>

        {/* 5 ENTERPRISE FOOTER COLUMNS */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.08, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {/* Column 1: PRODUCT */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Product</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><Link to="/product" className="hover:text-brand-orange transition-colors">Command Center</Link></li>
              <li><Link to="/product/automated-progress-rollups" className="hover:text-brand-orange transition-colors">Automated Progress Rollups</Link></li>
              <li><Link to="/features/goals-progress" className="hover:text-brand-orange transition-colors">Goals & Progress</Link></li>
              <li><Link to="/features/ai" className="hover:text-brand-orange transition-colors">AI Intelligence</Link></li>
              <li><Link to="/features/task-management" className="hover:text-brand-orange transition-colors">Task Execution</Link></li>
              <li><Link to="/features/analytics" className="hover:text-brand-orange transition-colors">Analytics Radar</Link></li>
            </ul>
          </div>

          {/* Column 2: SOLUTIONS */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><Link to="/solutions/founders" className="hover:text-brand-orange transition-colors">Founders</Link></li>
              <li><Link to="/solutions/managers" className="hover:text-brand-orange transition-colors">Managers</Link></li>
              <li><Link to="/features/teams" className="hover:text-brand-orange transition-colors">Teams & Pods</Link></li>
              <li><Link to="/solutions/use-cases" className="hover:text-brand-orange transition-colors">Enterprise Use Cases</Link></li>
            </ul>
          </div>

          {/* Column 3: RESOURCES */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><Link to="/resources" className="hover:text-brand-orange transition-colors">Resources</Link></li>
              <li><Link to="/resources" className="hover:text-brand-orange transition-colors">Insights & Articles</Link></li>
              <li><Link to="/features/documentation" className="hover:text-brand-orange transition-colors">Documentation Specs</Link></li>
            </ul>
          </div>

          {/* Column 4: COMPANY */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Astrav</Link></li>
              <li><a href="#conversion-cta" className="hover:text-brand-orange transition-colors">Contact Engineering</a></li>
              <li><button type="button" onClick={openDemoModal} className="hover:text-brand-orange transition-colors cursor-pointer text-left">Book a Demo</button></li>
            </ul>
          </div>

          {/* Column 5: LEGAL */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Legal & Trust</h4>
            <ul className="space-y-2.5 text-sm sm:text-base text-terracotta font-medium">
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">Terms of Service</span></li>
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">SOC2 Compliance</span></li>
              <li><span className="cursor-pointer hover:text-brand-orange transition-colors">Security Architecture</span></li>
            </ul>
          </div>
        </motion.div>

        {/* BOTTOM COPYRIGHT & COMPLIANCE BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.12, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="pt-8 border-t border-brand-peach/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-terracotta font-semibold">
            <div>© 2026 Astrav Operating Engine. All rights reserved.</div>
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-1 hover:text-brand-orange transition-colors">
                Audited Trust Anchor <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="flex items-center gap-1 hover:text-brand-orange transition-colors">
                SOC2 Type II Aligned <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span>99.99% Availability SLA</span>
            </div>
          </div>

          {/* ARAV INNOVATIONS FOOTER BRAND ATTRIBUTION */}
          <div className="pt-6 border-t border-brand-peach/40 flex items-center justify-start">
            <a
              href="https://aravinnovations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-start gap-4 sm:gap-6 hover:opacity-95 transition-opacity group"
              title="Arav Innovations - Elevating Brands, One Click at a Time"
            >
              <picture>
                <source type="image/webp" srcSet="/assets/arav-logo.webp" />
                <img
                  src="/assets/arav-logo.png"
                  alt="Arav Innovations Ribbon Logo"
                  width={160}
                  height={166}
                  loading="lazy"
                  decoding="async"
                  className="h-12 sm:h-14 md:h-14 lg:h-[58px] w-auto object-contain drop-shadow-sm shrink-0 group-hover:scale-105 transition-transform"
                />
              </picture>
              <picture>
                <source type="image/webp" srcSet="/assets/powered-by-arav.webp" />
                <img
                  src="/assets/powered-by-arav.png"
                  alt="Powered by Arav Innovations - Elevating Brands, One Click at a Time"
                  width={380}
                  height={127}
                  loading="lazy"
                  decoding="async"
                  className="h-14 sm:h-16 md:h-16 lg:h-[68px] w-auto object-contain drop-shadow-sm shrink-0 group-hover:scale-[1.02] transition-transform"
                />
              </picture>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

