import React from 'react';
import { motion } from 'framer-motion';

export default function MuseumIntro() {
  return (
    <section className="bg-[#111111] py-32 px-6 md:px-12 relative overflow-hidden border-b border-neutral-900">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.01] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#4B0F0F] bg-neutral-900 border border-neutral-800 px-3 py-1">
          PENGANTAR KURATORIAL
        </span>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="font-serif text-xl md:text-3xl text-[#D8C7A3] leading-relaxed font-light"
        >
          “Di satu sisi terdapat janji perlindungan hukum tertulis. Di sisi lain, terdapat rekam jejak perjuangan fisik masyarakat hukum adat dalam mempertahankan tanah leluhur mereka dari kepunahan ekologis.”
        </motion.p>
        
        <div className="w-12 h-px bg-[#4B0F0F] mx-auto pt-2" />
      </div>
    </section>
  );
}