import React, { useEffect } from 'react';
import ForumHero from '../components/forum/ForumHero';
import DiscussionCard from '../components/forum/DiscussionCard';
import OpinionWall from '../components/forum/OpinionWall';
import SupportSection from '../components/forum/SupportSection';

export default function Forum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-pri-bg text-soft-white overflow-x-hidden">
      <ForumHero />
      <OpinionWall />
      <SupportSection />
      {/* Assuming DiscussionCard might be used within OpinionWall or elsewhere, added basic composition */}
    </div>
  );
}