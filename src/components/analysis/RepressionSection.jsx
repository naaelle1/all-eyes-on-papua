import React from 'react';
import { motion } from 'framer-motion';
import { repressionCards } from '../../data/analysisData';

export default function RepressionSection() {
  return (
    <section className="bg-[#080808] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <span className="text-xs uppercase font-sans tracking-widest text-[#B33A3A]">EVOLUSI REPRESI</span>
          <h2 className="font-serif text-3xl text-paper-beige mt-2">Bentuk Pembungkaman yang Bermutasi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {repressionCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: card.id * 0.15 }}
              className="bg-[#111111] border border-neutral-800 p-8 relative overflow-hidden group hover:border-[#7A1E1E]/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#4B0F0F]/5 rounded-full blur-xl group-hover:bg-[#7A1E1E]/10 transition-all duration-500" />
              
              <span className="text-[10px] font-sans tracking-widest text-soft-white/30 uppercase block mb-1">
                KATEGORI / 0{card.id}
              </span>
              <h3 className="font-serif text-xl text-paper-beige mb-1 group-hover:text-soft-white transition-colors">
                {card.title}
              </h3>
              <span className="text-[11px] font-sans text-[#B33A3A]/80 tracking-wide block mb-4">
                {card.subtitle}
              </span>
              <p className="text-xs text-soft-white/60 font-light leading-relaxed">
                {card.desc}
              </p>
              
              <div className="w-full h-px bg-neutral-800 group-hover:bg-[#7A1E1E] transition-colors duration-500 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}