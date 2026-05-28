import React from 'react';
import { motion } from 'framer-motion';
import { omnibusPoints } from '../../data/analysisData';

export default function OmnibusLawSection() {
  return (
    <section className="bg-[#111111] py-28 px-6 md:px-12 border-y border-neutral-900 relative overflow-hidden">
      {/* Background industrial asset texture representation */}
      <div className="absolute left-0 bottom-0 w-full h-64 bg-linear-to-t from-[#4B0F0F]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Bureaucratic Document Aesthetic Mockup */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="bg-[#080808] border border-neutral-800 p-8 shadow-2xl relative archive-card-grain">
            <div className="flex justify-between items-center border-b border-neutral-800 pb-4 mb-6">
              <span className="text-[10px] uppercase font-sans tracking-widest text-[#B33A3A]">BERKAS REGULASI PASCA-REFORMASI</span>
              <span className="w-2 h-2 rounded-full bg-[#7A1E1E] animate-ping" />
            </div>
            <h4 className="font-serif text-lg text-paper-beige mb-4">Klaster Kemudahan Investasi</h4>
            <div className="space-y-3 font-sans text-xs text-soft-white/50 leading-relaxed">
              <p className="border-l border-neutral-800 pl-3">Ref: UU Nomor 6 Tahun 2023 tentang Penetapan Perppu Cipta Kerja.</p>
              <p className="border-l border-neutral-800 pl-3">Dampak Sektoral: Penghapusan kewajiban kecukupan luas kawasan hutan minimal 30 persen untuk kelangsungan ekosistem daerah aliran sungai.</p>
            </div>
          </div>
        </div>

        {/* Right: Structural Breakdown */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <span className="text-xs uppercase font-sans tracking-widest text-[#B33A3A]">REGULASI MODERN</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F2EEE6]">Instrumen Hukum Sentralisasi Investasi</h2>
          <p className="text-sm text-soft-white/60 font-light font-sans max-w-2xl leading-relaxed">
            Pemberlakuan regulasi omnibus membalikkan arah jarum jam desentralisasi hak adat, memangkas birokrasi lingkungan yang dianggap menghambat modal asing, dan menyisakan celah sempit bagi pertahanan ruang hidup lokal.
          </p>

          <div className="space-y-4 pt-4">
            {omnibusPoints.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex items-start space-x-4 bg-[#080808]/40 border border-neutral-800/60 p-4"
              >
                <span className="text-xs font-mono text-[#B33A3A] font-bold">0{idx+1}/</span>
                <div>
                  <h4 className="text-sm font-sans font-semibold text-paper-beige mb-1">{point.title}</h4>
                  <p className="text-xs text-soft-white/50 font-light leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}