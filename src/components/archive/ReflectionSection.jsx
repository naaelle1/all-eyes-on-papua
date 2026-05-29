import React from 'react';
import { motion } from 'framer-motion';

export default function ReflectionSection() {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Structural Grain overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-4xl relative z-10 space-y-12">
        <div className="w-16 h-px bg-[#4B0F0F] mx-auto" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="font-serif italic text-2xl md:text-4xl text-[#D8C7A3]/90 leading-relaxed font-light max-w-3xl mx-auto"
        >
          “Arsip bukan sekadar kumpulan dokumentasi mati. Ia adalah bukti absah di hadapan waktu bahwa perjuangan masyarakat adat tidak pernah benar-benar diam.”
        </motion.p>

        <div className="w-16 h-px bg-[#4B0F0F] mx-auto" />
      </div>
    </section>
  );
}