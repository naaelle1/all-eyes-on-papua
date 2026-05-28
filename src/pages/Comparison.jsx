import React, { useEffect } from 'react';
import ComparisonHero from '../components/comparison/ComparisonHero';
import DecentralizationSection from '../components/comparison/DecentralizationSection';
import LandRightsSection from '../components/comparison/LandRightsSection';
import AwyuMoiCase from '../components/comparison/AwyuMoiCase';
import StatisticsSection from '../components/comparison/StatisticsSection';
import ClosingStatement from '../components/comparison/ClosingStatement';

export default function Comparison() {
  // Ensure router viewport scrolls back to top upon load mount execution
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#080808] text-soft-white select-none overflow-x-hidden">
      <ComparisonHero />
      <DecentralizationSection />
      <LandRightsSection />
      <AwyuMoiCase />
      <StatisticsSection />
      <ClosingStatement />
    </div>
  );
}