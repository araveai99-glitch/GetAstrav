import React from 'react';
import { CTASection } from '../../../components/common/CTASection';
import { FileText } from 'lucide-react';

export const Documentation: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-6 sm:space-y-10 md:space-y-16 pt-20 sm:pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1340px] mx-auto">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full bg-surface-tier1 border border-brand-peach text-xs font-bold text-brand-orange uppercase">
          Features • Documentation
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-espresso">
          Project Documentation & Version Specs
        </h1>
        <p className="text-base text-terracotta leading-relaxed text-left sm:text-justify max-w-2xl mx-auto">
          Rich documentation and technical specs attached directly to project execution containers with version logs.
        </p>
      </div>
      <CTASection paddingY="pt-0 pb-2 sm:py-6 md:py-10" paddingX="px-0" />
    </div>
  );
};
