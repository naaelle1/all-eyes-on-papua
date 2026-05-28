import React from 'react';
import { motion } from 'framer-motion';
import { statisticsData } from '../../data/statisticsData';

export default function StatisticsSection() {
  return (
    <section className="bg-[#080808] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <span className="text-xs uppercase font-sans tracking-widest text-blood-red">METRIK DESTRUKSI</span>
          <h2 className="font-serif text-3xl text-paper-beige mt-2">Dampak Kuantitatif Kebijakan Sentralisasi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statisticsData.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: stat.id * 0.15 }}
              className="bg-[#111111] border border-rust-brown/10 p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-blood-red transition-all duration-500 group-hover:h-full" />
              
              <div className="flex items-baseline space-x-2 text-soft-white mb-2">
                <span className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-blood-red drop-shadow-[0_0_12px_rgba(122,30,30,0.2)]">
                  {stat.value}
                </span>
                <span className="text-xs uppercase font-sans tracking-widest text-soft-white/40">{stat.unit}</span>
              </div>
              
              <h4 className="font-serif text-base text-paper-beige mb-2">{stat.label}</h4>
              <p className="text-xs text-soft-white/50 leading-relaxed font-light">{stat.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}