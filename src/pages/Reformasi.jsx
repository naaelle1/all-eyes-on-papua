import React, { useEffect } from 'react';
import ReformasiHero from '../components/reformasi/ReformasiHero';
import BackgroundSection from '../components/reformasi/BackgroundSection';
import OtsusSection from '../components/reformasi/OtsusSection';
import LegalSection from '../components/reformasi/LegalSection';
import TimelineSection from '../components/reformasi/TimelineSection';
import ReflectionSection from '../components/reformasi/ReflectionSection';

export default function Reformasi() {
  // Ensure view resets to peak position upon entering the route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#080808] text-soft-white selection:bg-blood-red selection:text-white overflow-x-hidden">
      <ReformasiHero />
      <BackgroundSection />
      <OtsusSection />
      <LegalSection />
      <TimelineSection />
      <ReflectionSection />
    </div>
  );
}