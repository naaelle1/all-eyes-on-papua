import React from 'react';

export default function GrainOverlay() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden opacity-[0.04]">
      <div className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] animate-grain" />
    </div>
  );
}