import React from 'react';
import { motion } from 'framer-motion';

export default function ReflectionSection() {
  return (
    <section className="bg-[#080808] min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Subtle paper-like grain texture layer mask over absolute dark */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-4xl relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.3, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-16 h-px bg-[#B33A3A] mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.2 }}
          className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-paper-beige/90 leading-relaxed font-light max-w-3xl mx-auto"
        >
          “Ketika jalur hukum kehilangan ruangnya, solidaritas digital berubah menjadi pengeras suara terakhir.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.3, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="w-16 h-px bg-[#B33A3A] mx-auto"
        />
      </div>
    </section>
  );
}