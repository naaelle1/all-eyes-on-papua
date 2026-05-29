import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../../data/galleryData';
import SectionTitle from '../ui/SectionTitle';
import { X } from 'lucide-react';

export default function ArchiveGallery() {
  const [activeImg, setActiveImg] = useState(null);

  return (
    <section className="bg-[#111111] py-28 px-6 md:px-12 border-y border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="02 / MEMORIAL VISUAL" title="Galeri Dokumenter Bukti Sejarah Modern" center={true} />

        {/* Masonry Simulation Flex Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mt-16">
          {galleryData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => setActiveImg(item)}
              className="break-inside-avoid bg-[#080808] border border-neutral-800 p-3 relative group cursor-zoom-in"
            >
              <div className="overflow-hidden relative w-full h-auto bg-neutral-900">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-auto object-cover grayscale contrast-130 brightness-75 transition-all duration-700 group-hover:scale-102 group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4" />
              </div>
              
              <div className="mt-3 flex justify-between items-center text-[11px] font-sans">
                <span className="text-[#D8C7A3] uppercase tracking-wider font-semibold">{item.category}</span>
                <span className="text-soft-white/40 font-light">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Window Backdrop */}
      <AnimatePresence>
        {activeImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setActiveImg(null)}
          >
            <button className="absolute top-6 right-6 text-soft-white/50 hover:text-white" onClick={() => setActiveImg(null)}>
              <X size={24} strokeWidth={1.5} />
            </button>
            <motion.img 
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.97 }}
              src={activeImg.img} 
              alt={activeImg.title} 
              className="max-w-full max-h-[75vh] object-contain border border-neutral-800 shadow-2xl filter grayscale"
            />
            <div className="text-center mt-6 max-w-md">
              <span className="text-xs uppercase tracking-widest text-[#D8C7A3] font-mono block mb-1">{activeImg.category}</span>
              <h4 className="font-serif text-lg text-[#F2EEE6]">{activeImg.title}</h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}