import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Data anggota kelompok diintegrasikan dengan metadata nomor absen historis
  const teamMembers = [
    { name: 'Amaris Wursita', abs: '01' },
    { name: 'Elok Chandra Kirana', abs: '12' },
    { name: 'M. Iqbal Maulana', abs: '25' }
  ];

  return (
    <footer className="relative bg-[#080808] border-t border-[#D8C7A3]/20 py-20 px-6 md:px-12 lg:px-24 overflow-hidden select-none">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.01] mix-blend-overlay pointer-events-none" />

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start relative z-10 text-center md:text-left">
        
        {/* LEFT COLUMN: Logo & Subtext */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="space-y-4"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-[#F2EEE6] tracking-wide uppercase">
            ALL EYES ON <span className="text-[#D8C7A3] font-light italic">PAPUA</span>
          </h3>
          <p className="font-sans text-xs text-[#F2EEE6]/65 max-w-xs mx-auto md:mx-0 leading-relaxed font-light">
            “Digital Archive of Indigenous Resistance & Historical Reflection”
          </p>
        </motion.div>

        {/* CENTER COLUMN: Attributions with Absence Metadata */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="space-y-4"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#D8C7A3] uppercase block">
            DOKUMENTASI KREATOR
          </span>
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-[#F2EEE6]/90 font-medium mb-3">Kelompok 2</h4>
            <ul className="font-sans text-xs text-[#F2EEE6]/60 space-y-3 font-light">
              {teamMembers.map((member, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 4, color: '#D8C7A3' }}
                  transition={{ duration: 0.3 }}
                  className="cursor-default transition-colors duration-300 flex items-center justify-center md:justify-start space-x-2 group"
                >
                  <span className="font-mono text-[9px] text-[#4B0F0F] bg-neutral-950 px-1.5 py-0.5 border border-neutral-900 group-hover:border-[#4B0F0F]/40 transition-colors">
                    ABS/{member.abs}
                  </span>
                  <span>{member.name}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Cinematic Political Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="space-y-3 md:text-right flex flex-col md:items-end"
        >
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#4B0F0F] uppercase block bg-neutral-950 px-2 py-0.5 border border-neutral-900 w-max mx-auto md:mx-0">
            EPILOG
          </span>
          <p className="font-serif italic text-lg text-[#D8C7A3] leading-relaxed max-w-xs">
            “History is not silent.<br className="hidden md:block"/> People make it speak.”
          </p>
        </motion.div>

      </div>

      {/* LOWER LEVEL: Archive Stamp & Legals */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-widest text-[#F2EEE6]/30 space-y-4 md:space-y-0 text-center uppercase relative z-10">
        <p>© {currentYear} DIGITAL HISTORICAL ARCHIVE. ALL RIGHTS RESERVED.</p>
        <p className="text-neutral-800 hidden md:block">///</p>
        <p className="font-serif italic lowercase tracking-normal text-xs text-[#D8C7A3]/40">
          mengingat, mencatat, menggugat.
        </p>
      </div>
    </footer>
  );
}