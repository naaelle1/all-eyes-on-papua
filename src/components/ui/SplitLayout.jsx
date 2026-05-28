import React from 'react';

export default function SplitLayout({ left, right, className = "" }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 relative min-h-screen ${className}`}>
      {/* Invisible desktop center divider marker line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-rust-brown/20 z-20 -translate-x-1/2" />
      
      {/* Left Column (Warm Archive Style) */}
      <div className="bg-[#111111] text-[#D8C7A3] relative overflow-hidden flex flex-col justify-center py-20 px-6 md:px-16 border-b border-rust-brown/10 lg:border-b-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-r from-[#2A1B14]/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto lg:mr-12 w-full">{left}</div>
      </div>

      {/* Right Column (Cold Corporate/Industrial Style) */}
      <div className="bg-[#080808] text-[#F2EEE6] relative overflow-hidden flex flex-col justify-center py-20 px-6 md:px-16">
        <div className="absolute inset-0 bg-linear-to-l from-[#4B0F0F]/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-xl mx-auto lg:ml-12 w-full">{right}</div>
      </div>
    </div>
  );
}