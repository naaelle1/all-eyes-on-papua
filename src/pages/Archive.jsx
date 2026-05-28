import React, { useEffect } from 'react';
import ArchiveGallery from '../components/archive/ArchiveGallery';
import DocumentViewer from '../components/archive/DocumentViewer';
import InteractiveMap from '../components/archive/InteractiveMap';
import VideoSection from '../components/archive/VideoSection';

export default function Archive() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-pri-bg text-soft-white overflow-x-hidden">
      <ArchiveGallery />
      <DocumentViewer />
      <InteractiveMap />
      <VideoSection />
    </div>
  );
}