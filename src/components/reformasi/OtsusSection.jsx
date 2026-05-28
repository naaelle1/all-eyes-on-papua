import React from 'react';
import { motion } from 'framer-motion';

export default function OtsusSection() {
  return (
    <section className="bg-[#111111] py-32 px-6 md:px-12 relative overflow-hidden border-b border-rust-brown/10">
      {/* Background Text Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[12rem] md:text-[22rem] text-white/1 font-bold select-none pointer-events-none tracking-tighter">
        2001
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blood-red text-6xl md:text-7xl font-serif font-semibold tracking-wide drop-shadow-[0_0_15px_rgba(75,15,15,0.4)] mb-4"
        >
          2001
        </motion.div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-20 h-px bg-rust-brown/40 mb-8"
        />

        <h2 className="font-serif text-2xl md:text-4xl text-paper-beige mb-6 max-w-2xl leading-snug">
          Lahirnya Sebuah Komitmen Politik Tertinggi
        </h2>

        <p className="text-sm md:text-base text-soft-white/70 font-sans font-light max-w-3xl leading-relaxed mb-8">
          Komitmen politik tersebut diwujudkan secara formal melalui disahkannya <span className="text-paper-beige font-medium underline decoration-blood-red/60 underline-offset-4">Undang-Undang Otonomi Khusus Papua Nomor 21 Tahun 2001</span>. Regulasi ini bukan sekadar lembaran hukum tata negara biasa, melainkan pengakuan struktural pertama bahwa penyelesaian konflik Papua harus bertumpu pada pendekatan kultural dan kemanusiaan.
        </p>

        <p className="text-xs md:text-sm text-soft-white/50 font-sans font-light max-w-2xl leading-relaxed">
          Asas desentralisasi ditekankan untuk memberikan kedaulatan kepada daerah dalam mengelola anggarannya sendiri, memulihkan perlindungan hak ulayat atas tanah adat, mengafirmasi identitas budaya Papua, serta membangun ruang pengelolaan legislatif yang representatif secara adat.
        </p>
      </div>
    </section>
  );
}