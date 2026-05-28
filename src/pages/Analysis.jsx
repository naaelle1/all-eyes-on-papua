import React, { useEffect } from 'react';
import AnalysisHero from '../components/analysis/AnalysisHero';
import DigitalMovement from '../components/analysis/DigitalMovement';
import HistoryPattern from '../components/analysis/HistoryPattern';
import ProtestWall from '../components/analysis/ProtestWall';

export default function Analysis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-pri-bg text-soft-white overflow-x-hidden">
      <AnalysisHero />
      <DigitalMovement />
      <HistoryPattern />
      <ProtestWall />
    </div>
  );
}