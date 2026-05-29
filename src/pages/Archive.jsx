import React, { useEffect } from 'react';
import ArchiveHero from '../components/archive/ArchiveHero';
import MuseumIntro from '../components/archive/MuseumIntro';
import StoryArchive from '../components/archive/StoryArchive';
import ArchiveGallery from '../components/archive/ArchiveGallery';
import NewsSection from '../components/archive/NewsSection';
import VideoArchive from '../components/archive/VideoArchive';
import ReflectionSection from '../components/archive/ReflectionSection';

export default function Archive() {
  // Enforce zero viewport displacement coordinate resetting upon route change execution
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#080808] text-soft-white selection:bg-[#4B0F0F] selection:text-[#D8C7A3] overflow-x-hidden">
      <ArchiveHero />
      <MuseumIntro />
      <StoryArchive />
      <ArchiveGallery />
      <NewsSection />
      <VideoArchive />
      <ReflectionSection />
    </div>
  );
}