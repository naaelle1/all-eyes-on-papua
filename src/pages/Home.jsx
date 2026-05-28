import React from 'react';
import Hero from '../components/home/Hero';
import TimelinePreview from '../components/home/TimelinePreview';
import HighlightCards from '../components/home/HighlightCards';
import QuoteSection from '../components/home/QuoteSection';

export default function Home() {
  return (
    <main className="relative z-10 bg-pri-bg">
      <Hero />
      <TimelinePreview />
      <HighlightCards />
      <QuoteSection />
    </main>
  );
}