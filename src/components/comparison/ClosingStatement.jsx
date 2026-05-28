import React from 'react';
import { motion } from 'framer-motion';

export default function ClosingStatement() {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl relative z-10 space-y-12">
        <div className="w-16 h-px bg-blood-red mx-auto" />
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="font-serif italic text-2xl md:text-4xl text-paper-beige/90 leading-relaxed font-light max-w-3xl mx-auto"
        >
          “Reformasi pernah menjanjikan bahwa masyarakat adat tidak lagi kehilangan tanahnya. Namun sejarah memperlihatkan bahwa kekuasaan hanya berganti bentuk.”
        </motion.p>
        
        <div className="w-16 h-px bg-blood-red mx-auto" />
      </div>
    </section>
  );
}