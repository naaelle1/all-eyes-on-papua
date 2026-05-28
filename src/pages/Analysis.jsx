import React, { useEffect } from 'react';
import AnalysisHero from '../components/analysis/AnalysisHero';
import PatternSection from '../components/analysis/PatternSection';
import RepressionSection from '../components/analysis/RepressionSection';
import OmnibusLawSection from '../components/analysis/OmnibusLawSection';
import DigitalMovement from '../components/analysis/DigitalMovement';
import ProtestWall from '../components/analysis/ProtestWall';
import ReflectionSection from '../components/analysis/ReflectionSection';

export default function Analysis() {
  // Reset window position to view summit upon entering view route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#080808] text-soft-white selection:bg-[#7A1E1E] selection:text-white overflow-x-hidden">
      <AnalysisHero />
      <PatternSection />
      <RepressionSection />
      <OmnibusLawSection />
      <DigitalMovement />
      <ProtestWall />
      <ReflectionSection />
    </div>
  );
}