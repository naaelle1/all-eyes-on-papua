import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ReformasiHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#080808] px-6 md:px-12">
      {/* Visual Backplane (Archival Demonstration Overlay) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1920" 
          alt="Reformasi 1998 Archive" 
          className="w-full h-full object-cover opacity-20 filter grayscale contrast-125 brightness-50 mix-blend-luminosity animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/50 to-black/90" />
      </div>

      {/* Main Composition */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, tracking: '0.1em' }}
          animate={{ opacity: 0.5, tracking: '0.4em' }}
          transition={{ duration: 1.8 }}
          className="text-xs uppercase text-paper-beige mb-6 font-sans tracking-[0.4em]"
        >
          ERA TRANSISI POLITIK INDONESIA
        </motion.span>

        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.3, scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="w-16 h-px bg-paper-beige mb-8"
        />

        <motion.h1 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-soft-white leading-tight mb-8"
        >
          Ketika Reformasi <br /><span className="italic font-light text-paper-beige/80">Menjanjikan Perubahan</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="text-sm md:text-base text-soft-white/75 font-sans max-w-2xl leading-relaxed font-light mb-12 text-center"
        >
          Salah satu buah terbesar dari runtuhnya rezim otoriter Orde Baru adalah upaya penataan ulang hubungan antara pemerintah pusat dan daerah. Untuk meredam konflik berkepanjangan serta menjawab tuntutan keadilan di Bumi Cendrawasih, pemerintah era Reformasi mengambil langkah mendasar dengan memberikan hak otonomi yang bersifat khusus.
        </motion.p>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-30 animate-pulse">
        <span className="text-[10px] uppercase tracking-[0.25em] text-soft-white mb-2 font-sans">Jelajahi Arsip</span>
        <ChevronDown size={14} className="text-soft-white" />
      </div>
    </section>
  );
}