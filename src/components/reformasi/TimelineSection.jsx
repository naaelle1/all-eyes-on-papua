import React from 'react';
import { motion } from 'framer-motion';
import { reformasiTimeline } from '../../data/reformasiTimeline';
import SectionTitle from '../ui/SectionTitle';

export default function TimelineSection() {
  return (
    <section className="bg-[#111111] py-28 px-6 md:px-12 border-y border-rust-brown/10">
      <div className="max-w-5xl mx-auto">
        <SectionTitle label="03 / DOKUMENTASI KRONOLOGIS" title="Garis Waktu Kebijakan Transisi" center={true} />

        <div className="relative mt-20">
          {/* Vertical Center Spine Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-rust-brown/20 -translate-x-1/2" />

          {reformasiTimeline.map((node, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start mb-24 last:mb-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#080808] border-2 border-paper-beige/50 -translate-x-1/2 top-2 z-20 shadow-[0_0_10px_rgba(216,199,163,0.2)]" />

                {/* Left/Right Blank Spacer Placeholder */}
                <div className="hidden md:block w-1/2" />

                {/* Content Panel Box */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12"
                >
                  <div className="bg-[#080808] border border-rust-brown/10 p-6 relative group">
                    {/* Embedded Archival Grayscale Asset */}
                    <div className="w-full h-36 overflow-hidden mb-4 bg-neutral-900">
                      <img 
                        src={node.image} 
                        alt={node.title} 
                        className="w-full h-full object-cover grayscale contrast-125 brightness-75 mix-blend-luminosity group-hover:scale-102 transition-transform duration-700"
                      />
                    </div>

                    <span className="font-serif text-xl font-bold text-blood-red block mb-1">
                      {node.year}
                    </span>
                    <h3 className="text-sm font-sans uppercase tracking-wider text-paper-beige mb-3 font-medium">
                      {node.title}
                    </h3>
                    <p className="text-xs text-soft-white/60 leading-relaxed font-light">
                      {node.desc}
                    </p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}