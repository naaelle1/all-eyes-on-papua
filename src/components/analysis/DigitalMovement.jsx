import React from 'react';
import { motion } from 'framer-motion';

export default function DigitalMovementSection() {
  return (
    <section className="bg-[#080808] py-32 px-6 relative overflow-hidden text-center border-b border-neutral-900">
      {/* Background Glow Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#4B0F0F]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-xs uppercase font-sans tracking-[0.4em] text-[#B33A3A] mb-4 font-bold"
        >
          MAKSIMALISASI RESISTENSI ORGANIK
        </motion.span>
        
        <h2 className="font-serif text-3xl md:text-5xl text-[#F2EEE6] mb-8 leading-tight">
          Lahirnya Episentrum Kolektif <br />
          <span className="italic font-light text-soft-white/80">#AllEyesOnPapua</span>
        </h2>

        <div className="w-16 h-px bg-neutral-800 mb-8" />

        <p className="text-sm md:text-base text-soft-white/70 font-sans font-light max-w-2xl leading-relaxed mb-12">
          Ketika kanal-kanal hukum formal tersumbat oleh benteng birokrasi korporatis, jutaan individu mengonsolidasikan kemarahan mereka ke dalam algoritma digital. Tagar <span className="text-soft-white font-semibold border-b border-[#B33A3A] pb-1">#AllEyesOnPapua</span> merobohkan sekat geografi, mendesak pertanggungjawaban institusi hukum, dan mengubah isu lokal pedalaman menjadi beban moral masyarakat sipil internasional.
        </p>

        {/* Streaming Banner Simulation */}
        <div className="w-full overflow-hidden bg-[#111111] border-y border-neutral-800 py-4 select-none relative flex flex-wrap justify-center gap-6 md:gap-12 text-xs font-mono text-[#B33A3A] tracking-widest uppercase">
          <span className="animate-pulse">#ALLEYESONPAPUA</span>
          <span className="text-soft-white/20 hidden md:inline">|</span>
          <span className="animate-pulse">#SAVEPAPUAFOREST</span>
          <span className="text-soft-white/20 hidden md:inline">|</span>
          <span className="animate-pulse">#PROTECTINDIGENOUSRIGHTS</span>
        </div>
      </div>
    </section>
  );
}