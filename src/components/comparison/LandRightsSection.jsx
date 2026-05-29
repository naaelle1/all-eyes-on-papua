import React from 'react';
import SplitLayout from '../ui/SplitLayout';
import { landRightsData } from '../../data/comparisonData';

export default function LandRightsSection() {
  const { left, right } = landRightsData;
  return (
    <SplitLayout
      left={
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#8B6B4A]">01 / ASPEK WILAYAH ADAT</span>
          <h3 className="font-serif text-2xl text-[#D8C7A3] italic">{left.title}</h3>
          <p className="text-sm font-sans font-light leading-relaxed text-soft-white/60">{left.desc}</p>
          <div className="w-full h-48 bg-[#2A1B14]/30 border border-rust-brown/10 overflow-hidden relative mt-8">
            <img 
              src="public\images\jnji proteksi ruang hidup.jpg" 
              alt="Archival Document Visual representation" 
              className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-20"
            />
          </div>
        </div>
      }
      right={
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-blood-red">02 / REALITA DEFORESTASI</span>
          <h3 className="font-serif text-2xl text-soft-white">{right.title}</h3>
          <p className="text-sm font-sans font-light leading-relaxed text-soft-white/60">{right.desc}</p>
          <div className="w-full h-48 bg-[#111111] border border-blood-red/10 overflow-hidden relative mt-8">
            <img 
              src="public\images\ekspansi hutan.jpg" 
              alt="Industrial logging site representation" 
              className="w-full h-full object-cover grayscale brightness-50 contrast-125 opacity-30"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#4B0F0F]/30 to-transparent" />
          </div>
        </div>
      }
    />
  );
}