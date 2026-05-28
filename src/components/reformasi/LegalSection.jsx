import React from 'react';
import { motion } from 'framer-motion';
import { legalData } from '../../data/legalData';
import SectionTitle from '../ui/SectionTitle';

export default function LegalSection() {
  return (
    <section className="bg-[#080808] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="02 / DIGITAL LEGAL ARCHIVE" title="Pilar Perlindungan Hukum" center={true} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {legalData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: item.id * 0.15 }}
                className="relative bg-[#111111] border border-rust-brown/10 p-8 flex flex-col justify-between group cursor-pointer transition-all duration-500 hover:border-dark-red/40"
              >
                <div>
                  <div className="text-paper-beige/50 group-hover:text-blood-red transition-colors duration-500 mb-6">
                    <Icon size={26} strokeWidth={1.2} />
                  </div>
                  <h3 className="font-serif text-lg text-paper-beige mb-1 group-hover:text-soft-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-sans tracking-widest text-soft-white/30 uppercase block mb-4">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-soft-white/60 leading-relaxed font-light group-hover:text-soft-white/80 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
                
                {/* Visual Accent Corner Border Indicator */}
                <div className="absolute top-0 right-0 w-0 h-px bg-blood-red transition-all duration-500 group-hover:w-12" />
                <div className="absolute top-0 right-0 w-px h-0 bg-blood-red transition-all duration-500 group-hover:h-12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}