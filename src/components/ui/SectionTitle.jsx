import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ label, title, center = false }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        whileInView={{ opacity: 0.4, letterSpacing: '0.25em' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-xs uppercase font-sans text-paper-beige block mb-3"
      >
        {label}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="font-serif text-3xl md:text-4xl text-paper-beige leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}