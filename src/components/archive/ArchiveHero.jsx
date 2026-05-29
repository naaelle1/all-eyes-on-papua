import React from 'react';
import { motion } from 'framer-motion';

export default function ArchiveHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#080808] px-6 md:px-12">
      {/* Background Graphic Montage (Archive Wall) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1920" 
          alt="Archive Wall Background" 
          className="w-full h-full object-cover opacity-10 filter grayscale brightness-50 contrast-125 mix-blend-luminosity animate-pulse"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/40 to-black/90" />
      </div>

      {/* Narrative Matrix */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, tracking: '0.1em' }}
          animate={{ opacity: 0.5, tracking: '0.3em' }}
          transition={{ duration: 1.5 }}
          className="text-xs uppercase text-[#D8C7A3] mb-6 font-sans tracking-[0.3em]"
        >
          DIGITAL ARCHIVE & VISUAL MEMORY
        </motion.span>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          className="w-16 h-px bg-[#D8C7A3]/30 mb-8"
        />

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl text-[#F2EEE6] leading-tight mb-8"
        >
          Ketika Arsip Menjadi <br />
          <span className="italic font-light text-[#D8C7A3]/80">Saksi Perjuangan</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-sm md:text-base text-soft-white/70 font-sans max-w-2xl leading-relaxed font-light"
        >
          Lembaran arsip dan dokumentasi visual di halaman ini merekam benturan nyata antara teks hukum dengan realitas di hutan Papua.
        </motion.p>
      </div>
    </section>
  );
}