import React from 'react';
import { motion } from 'framer-motion';
import { protestPhrases } from '../../data/protestData';

export default function ProtestWall() {
  return (
    <section className="bg-black py-28 px-6 md:px-12 overflow-hidden relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-md">
          <span className="text-xs uppercase font-sans tracking-widest text-soft-white/30">DIGITAL RESISTANCE WALL</span>
          <h2 className="font-serif text-2xl text-paper-beige mt-2">Dinding Aspirasi Sipil</h2>
        </div>

        {/* Dynamic Typography Grid Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {protestPhrases.map((phrase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0.15, y: 15 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ opacity: 1, scale: 1.02, color: "#F2EEE6" }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="bg-[#080808] border border-neutral-900 p-6 flex items-center justify-center min-h-30 text-center cursor-default group transition-colors duration-500 hover:border-[#7A1E1E]/40"
            >
              <p className="font-serif text-sm md:text-base font-semibold tracking-wide text-soft-white/60 group-hover:text-[#B33A3A] transition-colors duration-300">
                {phrase}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}