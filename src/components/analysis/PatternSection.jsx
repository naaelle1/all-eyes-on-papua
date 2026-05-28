import React from 'react';
import { motion } from 'framer-motion';

export default function PatternSection() {
  return (
    <section className="bg-[#111111] py-28 px-6 md:px-12 border-y border-neutral-900 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        {/* Left Aspect: Analysis Context Paragraph */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <span className="text-xs uppercase font-sans tracking-widest text-[#B33A3A] font-semibold">ANALISIS POLA SEJARAH</span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F2EEE6] leading-snug">Siklus Penaklukan yang Berulang</h2>
          
          <p className="text-sm md:text-base text-soft-white/70 font-sans font-light leading-relaxed text-justify">
            Viralnya gerakan "All Eyes on Papua" di ruang digital adalah alarm keras bahwa pola pembungkaman struktural belum benar-benar hilang, melainkan hanya berganti format. Jika dahulu di era Orde Baru perampasan tanah dilakukan dengan moncong senjata atas nama stabilitas keamanan, hari ini pencaplokan ruang hidup masyarakat adat dikemas secara legal melalui dokumen perizinan resmi atas nama pembangunan dan pertumbuhan ekonomi.
          </p>
          <p className="text-sm md:text-base text-soft-white/70 font-sans font-light leading-relaxed text-justify">
            Ketika aturan hukum pasca-Reformasi justru mempermudah korporasi menguasai tanah ulayat dan menutup ruang protes di tingkat lokal, masyarakat adat terpaksa mengalihkan perjuangan mereka. Solidaritas digital lahir sebagai pengeras suara massal ketika jalur hukum formal mengalami kebuntuan, membuktikan bahwa perjuangan mempertahankan hak asasi dan lingkungan kini harus berhadapan dengan tembok birokrasi yang sangat terpusat.
          </p>
        </div>

        {/* Right Aspect: Contrast Dashboard Visual Box */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#080808] border border-neutral-800 p-6 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-sans tracking-widest text-soft-white/30 uppercase">ERA ORDE BARU</span>
              <h4 className="font-serif text-lg text-paper-beige mt-2 mb-3">Pendekatan Keamanan Terbuka</h4>
              <p className="text-xs text-soft-white/50 font-light leading-relaxed">Ekspansi agraria dikawal langsung oleh kekuatan militeristik aktif. Hak veto masyarakat adat dibungkam total di lapangan.</p>
            </div>
            <div className="w-full h-0.5 bg-[#4B0F0F]/40 mt-6" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#080808] border border-[#4B0F0F]/30 p-6 flex flex-col justify-between shadow-[0_0_15px_rgba(75,15,15,0.1)]"
          >
            <div>
              <span className="text-[10px] font-sans tracking-widest text-[#B33A3A] uppercase">ERA KORPORASI MODERN</span>
              <h4 className="font-serif text-lg text-[#F2EEE6] mt-2 mb-3">Pendekatan Legalisasi Dokumen</h4>
              <p className="text-xs text-soft-white/50 font-light leading-relaxed">Pemberian izin korporasi diputuskan sepihak dari ibu kota melalui sistem perizinan digital terpadu yang memangkas AMDAL daerah.</p>
            </div>
            <div className="w-full h-0.5 bg-[#7A1E1E] mt-6 animate-pulse" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}