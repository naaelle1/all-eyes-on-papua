import React from 'react';
import { motion } from 'framer-motion';

export default function ReflectionSection() {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background Light Spill effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-62.5 bg-dark-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.2, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="w-20 h-px bg-paper-beige mx-auto mb-12"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.2 }}
          className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-paper-beige/90 leading-relaxed max-w-3xl mx-auto font-light"
        >
          “Reformasi pernah menjanjikan bahwa masyarakat adat tidak lagi kehilangan tanahnya dalam diam.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 0.2, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="w-20 h-px bg-paper-beige mx-auto mt-12"
        />
      </div>
    </section>
  );
}