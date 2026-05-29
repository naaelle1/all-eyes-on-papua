import React from 'react';
import { motion } from 'framer-motion';
import { archiveStories } from '../../data/archiveStories';
import SectionTitle from '../ui/SectionTitle';

export default function StoryArchive() {
  return (
    <section className="bg-[#080808] py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="01 / MANIFESTO DAN BUKTI NYATA" title="Kronik Perjuangan Fisik & Kultural" />

        <div className="space-y-32 mt-20">
          {archiveStories.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={story.id} 
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Visual Block Element */}
                <div className="w-full lg:w-1/2 group overflow-hidden border border-neutral-900 bg-neutral-950 p-4 relative archive-card-grain">
                  <motion.div 
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 0.6, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-72 md:h-96 overflow-hidden"
                  >
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                  <div className="absolute top-6 left-6 bg-[#080808] border border-neutral-800 text-[9px] font-mono tracking-widest px-3 py-1 text-[#D8C7A3]">
                    {story.tag}
                  </div>
                </div>

                {/* Narrative Element */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <span className="font-mono text-xs text-[#4B0F0F]">BERKAS ARSIP #00{story.id}</span>
                  <h3 className="font-serif text-2xl text-[#F2EEE6] leading-tight group-hover:text-[#D8C7A3] transition-colors">
                    {story.title}
                  </h3>
                  <div className="w-12 h-px bg-neutral-800 my-4" />
                  <p className="text-sm text-soft-white/70 font-sans font-light leading-relaxed text-justify">
                    {story.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}