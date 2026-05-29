import React from 'react';

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Lapisan Gradasi Gelap Sinematik */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-[#080808] to-black" />
      <div className="absolute inset-0 bg-linear-to-r from-[#4B0F0F]/5 via-transparent to-[#2A1B14]/5" />
      
      {/* Pendaran Cahaya Merah Redup di Pusat */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#4B0F0F]/5 rounded-full blur-[180px]" />
      
      {/* Tekstur Kertas Berbutir Makro (Grain Overlay) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.015] mix-blend-overlay" />
    </div>
  );
}