import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppSidebar } from './AppSidebar';
import { AppHeader } from './AppHeader';
import { ThreeBackground } from '../common/ThreeBackground';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-ambient flex relative">
      <ThreeBackground intensity="subtle" />
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <AppHeader />
        <main className="flex-1 p-5 md:p-6 max-w-[1400px] w-full mx-auto space-y-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
