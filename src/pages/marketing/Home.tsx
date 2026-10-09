import React from 'react';
import { HeroArchitecturalStructure } from '../../components/marketing/HeroArchitecturalStructure';
import { HierarchyInfographic } from '../../components/infographics/HierarchyInfographic';
import { GoalToExecutionWorkflow } from '../../components/infographics/GoalToExecutionWorkflow';
import { RollupInfographic } from '../../components/infographics/RollupInfographic';
import { ProductInMotion } from '../../components/infographics/ProductInMotion';
import { AIDecompositionInfographic } from '../../components/infographics/AIDecompositionInfographic';
import { AccountabilityWorkflowInfographic } from '../../components/infographics/AccountabilityWorkflowInfographic';
import { ProjectKnowledgeInfographic } from '../../components/infographics/ProjectKnowledgeInfographic';
import { AnalyticsInfographic } from '../../components/infographics/AnalyticsInfographic';
import { GovernanceInfographic } from '../../components/infographics/GovernanceInfographic';
import { OSMapInfographic } from '../../components/infographics/OSMapInfographic';
import { CTASection } from '../../components/common/CTASection';

export const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col space-y-16 lg:space-y-24 pt-18">
      {/* ==================================================
          SECTION 01 — SIGNATURE HERO ARCHITECTURAL CONCEPT
         ================================================== */}
      <HeroArchitecturalStructure />

      {/* ==================================================
          SECTION 02 — THE ORGANIZATIONAL PICTURE (Visual A)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <HierarchyInfographic />
      </section>

      {/* ==================================================
          SECTION 03 — FROM GOALS TO EXECUTION (Visual B)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <GoalToExecutionWorkflow />
      </section>

      {/* ==================================================
          SECTION 04 — PROGRESS THAT REFLECTS ACTUAL WORK (Visual C)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <RollupInfographic />
      </section>

      {/* ==================================================
          INTERACTIVE PRODUCT IN MOTION SHOWCASE
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <ProductInMotion />
      </section>

      {/* ==================================================
          SECTION 05 — AI-ASSISTED PLANNING (Visual D)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <AIDecompositionInfographic />
      </section>

      {/* ==================================================
          SECTION 06 — WORK EXECUTION & ACCOUNTABILITY (Visual E)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <AccountabilityWorkflowInfographic />
      </section>

      {/* ==================================================
          SECTION 07 — KNOWLEDGE & DOCUMENTATION (Visual G)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <ProjectKnowledgeInfographic />
      </section>

      {/* ==================================================
          SECTION 08 — EXECUTIVE VISIBILITY (Visual F)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <AnalyticsInfographic />
      </section>

      {/* ==================================================
          SECTION 09 — GOVERNANCE & RBAC INFOGRAPHIC
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <GovernanceInfographic />
      </section>

      {/* ==================================================
          SECTION 10 — A UNIFIED OPERATING SYSTEM (OS Map)
         ================================================== */}
      <section className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <OSMapInfographic />
      </section>

      {/* ==================================================
          SECTION 11 — FINAL CONVERSION CTA
         ================================================== */}
      <section id="conversion-cta" className="max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 pb-12">
        <CTASection />
      </section>
    </div>
  );
};
