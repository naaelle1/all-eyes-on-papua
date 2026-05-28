import React from 'react';
import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.3, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-24 h-px bg-paper-beige mx-auto mb-12"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="font-serif italic text-2xl md:text-4xl text-paper-beige/90 leading-relaxed tracking-wide max-w-3xl mx-auto"
        >
          “Jika dahulu tanah dirampas dengan kekuatan senjata, hari ini ia dapat hilang melalui lembar izin yang ditandatangani secara legal.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-8 text-[11px] uppercase tracking-[0.3em] text-soft-white/60"
        >
          — Catatan Singkat Investigasi Adat
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.3, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-24 h-px bg-paper-beige mx-auto mt-12"
        />
      </div>
    </section>
  );
}