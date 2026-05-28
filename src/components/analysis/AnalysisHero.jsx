import React from 'react';
import { motion } from 'framer-motion';
import { hashtagParticles } from '../../data/hashtagData';

export default function AnalysisHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#080808] px-6 md:px-12">
      {/* Glitch Overlay & Background Silhouette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern Protest Silhouette" 
          className="w-full h-full object-cover opacity-10 filter grayscale brightness-50 contrast-150 mix-blend-luminosity animate-pulse"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/70 to-black/90" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#4B0F0F]/10 to-transparent pointer-events-none" />
      </div>

      {/* Floating Interactive Hashtags (Digital Awareness Simulation) */}
      <div className="absolute inset-0 hidden md:block z-10 pointer-events-none">
        {hashtagParticles.map((tag, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0.15, 0.4, 0.15],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 6 + idx * 2,
              repeat: Infinity,
              delay: tag.delay,
              ease: "easeInOut"
            }}
            style={{ top: tag.top, left: tag.left }}
            className="absolute font-sans font-bold text-xs lg:text-sm tracking-widest text-[#B33A3A]/60 drop-shadow-[0_0_8px_rgba(122,30,30,0.4)]"
          >
            {tag.text}
          </motion.div>
        ))}
      </div>

      {/* Main Structural Typography */}
      <div className="relative z-20 max-w-4xl text-center flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, tracking: '0.1em' }}
          animate={{ opacity: 0.6, tracking: '0.3em' }}
          transition={{ duration: 1.5 }}
          className="text-xs uppercase text-soft-white font-sans tracking-[0.3em] bg-neutral-900/60 border border-neutral-800 px-4 py-2 mb-8"
        >
          POLITIK MODERN & AKTIVISME DIGITAL
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#F2EEE6] leading-tight mb-8"
        >
          Ketika Perlawanan <br />
          <span className="italic font-light text-[#B33A3A] drop-shadow-[0_0_15px_rgba(179,58,58,0.2)]">Berpindah ke Ruang Digital</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-sm md:text-base text-soft-white/70 font-sans max-w-2xl leading-relaxed font-light text-center"
        >
          Viralnya gerakan <span className="text-soft-white font-medium underline decoration-[#B33A3A] underline-offset-4">“All Eyes on Papua”</span> menjadi alarm keras bahwa pola pembungkaman struktural belum benar-benar hilang, melainkan hanya berubah bentuk.
        </motion.p>
      </div>
    </section>
  );
}