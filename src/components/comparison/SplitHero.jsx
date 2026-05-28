import React from 'react';
import { motion } from 'framer-motion';
import SplitLayout from '../ui/SplitLayout';

export default function SplitIntro() {
  return (
    <SplitLayout
      left={
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-4"
        >
          <span className="text-xs uppercase font-sans tracking-widest text-[#8B6B4A]">KOMITMEN AWAL 2001</span>
          <p className="font-serif text-2xl md:text-3xl italic text-[#D8C7A3] leading-relaxed">
            “Negara menjanjikan desentralisasi penuh, perlindungan hak ulayat, dan kedaulatan kultural bagi masyarakat adat Papua.”
          </p>
        </motion.div>
      }
      right={
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-4"
        >
          <span className="text-xs uppercase font-sans tracking-widest text-blood-red">KONDISI REALIATAS HARI INI</span>
          <p className="font-serif text-2xl md:text-3xl text-[#F2EEE6] leading-relaxed">
            “Kekuasaan secara perlahan ditarik kembali ke pusat melalui instrumen hukum baru demi melicinkan arus masuk investasi industri.”
          </p>
        </motion.div>
      }
    />
  );
}