import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black px-6 md:px-12">
      {/* Background Cinematic Asset */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1920" 
          alt="Papua Forest Canopy" 
          className="w-full h-full object-cover opacity-25 filter grayscale contrast-75 brightness-75 scale-105 animate-slow-zoom blur-[2px]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-t from-pri-bg via-pri-bg/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-212.5 text-center flex flex-col items-center mt-12 md:mt-20">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-paper-beige mb-10 md:mb-12 font-light"
        >
          Dokumenter Digital & Arsip Politik
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl lg:text-[4.5rem] text-soft-white leading-[1.2] md:leading-[1.15] mb-12 max-w-200 font-light tracking-tight"
        >
          Ketika janji otonomi berbenturan <br className="hidden md:block" />dengan investasi masa kini
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.0, duration: 1.5, ease: "easeOut" }}
          className="text-xs md:text-sm text-soft-white/80 font-sans max-w-150 leading-relaxed font-light mb-16"
        >
          Selamat datang di ruang refleksi digital. Di sini kita tidak sedang membaca lembaran hukum, melainkan menguliti realitas di balik regulasi. Gerakan Reformasi melahirkan komitmen besar untuk melindungi hak yang sekian lama terpinggirkan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.5, ease: "easeOut" }}
        >
          <a 
            href="#timeline"
            className="inline-block border border-paper-beige/20 hover:border-paper-beige/40 bg-transparent px-10 py-4 text-[11px] uppercase tracking-widest text-paper-beige/80 hover:text-soft-white transition-all duration-700 bg-linear-to-r hover:from-white/5 hover:to-transparent relative overflow-hidden group"
          >
            <span className="relative z-10 transition-colors duration-500">Mulai Eksplorasi Arsip</span>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-40 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-soft-white mb-2">Scroll</span>
        <ChevronDown size={16} className="text-soft-white" />
      </div>
    </section>
  );
}