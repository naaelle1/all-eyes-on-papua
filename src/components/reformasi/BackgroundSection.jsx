import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

export default function BackgroundSection() {
  return (
    <section className="bg-[#080808] py-24 px-6 md:px-12 border-b border-rust-brown/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Historical Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <SectionTitle label="01 / LATAR BELAKANG" title="Sentralisasi Kekuasaan dan Luka yang Menganga" />
          
          <div className="text-sm md:text-base text-soft-white/70 space-y-6 font-sans font-light leading-relaxed">
            <p>
              Dekade-dekade di bawah panji Orde Baru menempatkan Papua dalam cengkeraman sistemik birokrasi yang sangat terpusat. Seluruh keputusan strategis ekonomi, eksploitasi mineral skala masif, hingga pendekatan keamanan diputuskan sepihak dari meja-meja kekuasaan di ibu kota.
            </p>
            <p>
              Masyarakat adat Papua kerap tersisih dari tanah leluhurnya sendiri. Kehancuran ekosistem hutan ulayat berjalan beriringan dengan represi politik yang membungkam aspirasi lokal. Ketika fajar Reformasi 1998 menyingsing, tuntutan pengakuan atas hak dasar, identitas budaya, serta keadilan distributif meledak menjadi sebuah urgensi sejarah yang tidak bisa lagi diabaikan oleh negara.
            </p>
          </div>

          {/* Large Documentary Callout Editorial Quote */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="border-l border-blood-red/60 pl-6 mt-8 py-2"
          >
            <blockquote className="font-serif italic text-lg md:text-xl text-paper-beige/90">
              “Reformasi lahir dari tuntutan agar negara tidak lagi memusatkan kekuasaan secara mutlak.”
            </blockquote>
          </motion.div>
        </div>

        {/* Right Side: Archival Visual Split */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute inset-0 bg-dark-red/10 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 0.75, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative border border-rust-brown/20 bg-[#111111] p-4 shadow-2xl"
          >
            {/* Visual simulation of an old printed layout */}
            <img 
              src="/images/arsip%20kliping%20koran%20lama.jpeg" 
              alt="Historical Press Archive" 
              className="w-full h-auto grayscale filter contrast-130 brightness-75 mix-blend-luminosity"
            />
            <div className="mt-4 pt-3 border-t border-rust-brown/20 flex justify-between text-[10px] tracking-widest text-soft-white/40 uppercase font-sans">
              <span>Arsip Kliping Koran Lama / 1998</span>
              <span>Dokumentasi Publik</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}