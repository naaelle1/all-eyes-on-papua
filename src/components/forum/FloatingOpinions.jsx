import React, { useMemo } from 'react';
import OpinionCard from './OpinionCard';

export default function FloatingOpinions({ opinions }) {
  // Membuat preset koordinat acak statis untuk mencegah re-render posisi kartu melayang
  const layoutPresets = useMemo(() => {
    const positions = [
      { top: "10%", left: "5%", width: "280px", yAxisMove: -15, xAxisMove: 8, duration: 7 },
      { top: "18%", left: "70%", width: "320px", yAxisMove: -25, xAxisMove: -12, duration: 9 },
      { top: "42%", left: "40%", width: "300px", yAxisMove: -20, xAxisMove: 10, duration: 8 },
      { top: "65%", left: "8%", width: "290px", yAxisMove: -12, xAxisMove: -8, duration: 6 },
      { top: "72%", left: "68%", width: "310px", yAxisMove: -30, xAxisMove: 15, duration: 11 },
      { top: "35%", left: "2%", width: "270px", yAxisMove: -18, xAxisMove: 5, duration: 7.5 },
      { top: "52%", left: "73%", width: "300px", yAxisMove: -22, xAxisMove: -10, duration: 8.5 }
    ];
    return positions;
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-10 overflow-hidden pointer-events-auto">
      {/* RENDER DESKTOP CONFIG: Tampilan Mengambang Sinematik */}
      <div className="hidden lg:block w-full h-full">
        {opinions.slice(0, layoutPresets.length).map((opinion, idx) => (
          <OpinionCard 
            key={opinion.id} 
            opinion={opinion} 
            stylePreset={layoutPresets[idx]} 
          />
        ))}
      </div>

      {/* RENDER MOBILE/TABLET FEED BACKUP: Tampil vertikal jika di bawah ukuran layar lg */}
      <div className="block lg:hidden w-full h-full overflow-y-auto px-4 pb-32 pt-24 md:pt-32 space-y-6">
        <div className="text-center mb-8">
          <span className="text-[10px] font-mono tracking-widest text-[#D8C7A3]/50 uppercase">DIGITAL ARCHIVE FEED</span>
        </div>
        {opinions.map((opinion) => (
          <div 
            key={opinion.id} 
            className="bg-[#111111]/90 border border-[#D8C7A3]/30 p-5 rounded-none backdrop-blur-md"
          >
            <div className="flex justify-between text-[10px] font-mono text-[#D8C7A3]/60 mb-2">
              <span>{opinion.username}</span>
              <span className="uppercase">{opinion.category}</span>
            </div>
            <p className="text-xs text-[#F2EEE6] leading-relaxed text-justify mb-2">{opinion.content}</p>
            <span className="text-[8px] font-mono text-soft-white/30 block text-right">
              {new Date(opinion.createdAt).toLocaleDateString("id-ID")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}