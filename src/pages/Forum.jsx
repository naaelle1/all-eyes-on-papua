import React from 'react';
import FloatingBackground from '../components/forum/FloatingBackground';
import FloatingOpinions from '../components/forum/FloatingOpinions';
import SubmissionForm from '../components/forum/SubmissionForm';
import { useOpinions } from '../hooks/useOpinions';
import { Loader2 } from 'lucide-react';

export default function Forum() {
  const { opinions, loading } = useOpinions();

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#080808] flex items-center justify-center px-4 md:px-12 select-none">
      {/* Lapisan Efek Latar Belakang & Tekstur Arsitektural */}
      <FloatingBackground />

      {/* Instalasi Kartu Opini Mengambang Realtime */}
      {loading ? (
        <div className="absolute z-10 flex flex-col items-center space-y-3 text-soft-white/40">
          <Loader2 size={24} className="animate-spin text-[#D8C7A3]" />
          <span className="font-mono text-[10px] tracking-widest uppercase">Sinkronisasi Pangkalan Data...</span>
        </div>
      ) : (
        <FloatingOpinions opinions={opinions} />
      )}

      {/* Judul Teks Sinematik Latar Belakang */}
      <div className="absolute top-12 left-12 z-20 pointer-events-none hidden lg:block max-w-xs">
        <span className="text-[9px] font-mono tracking-[0.3em] text-[#D8C7A3]/40 block mb-2">
          INSTALLATION SYSTEM VOL. 04
        </span>
        <h1 className="font-serif text-2xl text-[#F2EEE6] leading-tight font-light">
          Living Archive of <br />Public Voices
        </h1>
      </div>

      {/* Komponen Form Pengiriman Utama */}
      <SubmissionForm />
    </main>
  );
}