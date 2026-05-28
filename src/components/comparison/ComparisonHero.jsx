import React from 'react';
import { motion } from 'framer-motion';

export default function ComparisonHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Split Hero Screen Imagery Layout */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        {/* Left Side Visual (Archival Sepia Content) */}
        <div className="relative w-full h-full border-b lg:border-b-0 lg:border-r border-rust-brown/20 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=1200" 
            alt="Historical Reform Archive" 
            className="w-full h-full object-cover opacity-20 filter grayscale sepia contrast-110 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-[#111111]/60 to-black/90" />
        </div>

        {/* Right Side Visual (Industrial Cold Content) */}
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200" 
            alt="Deforestation / Industrial Landscape" 
            className="w-full h-full object-cover opacity-15 filter grayscale contrast-125 brightness-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/70 to-black/90" />
        </div>
      </div>

      {/* Central Animated Separation Line Line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-blood-red/40 z-20 -translate-x-1/2"
      />

      {/* Text Overlay Layer */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4">
        <motion.span 
          initial={{ opacity: 0, tracking: "0.1em" }}
          animate={{ opacity: 0.4, tracking: "0.3em" }}
          transition={{ duration: 1.5 }}
          className="text-xs uppercase font-sans text-[#D8C7A3] mb-4 tracking-[0.3em]"
        >
          KOMPARASI HISTORIS & REGULASI
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#F2EEE6] leading-tight max-w-4xl"
        >
          Ketika Janji Reformasi <br />
          <span className="italic font-light text-blood-red">Bertemu Realitas Modern</span>
        </motion.h1>
      </div>
    </section>
  );
}