import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from './AppSidebar';
import { AppHeader } from './AppHeader';
import { BackgroundMotion } from '../common/BackgroundMotion';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-ambient flex relative">
      <BackgroundMotion intensity="subtle" />
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <AppHeader />
        <main className="flex-1 p-6 md:p-8 max-w-[1400px] w-full mx-auto space-y-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
