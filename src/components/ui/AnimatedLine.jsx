import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedLine({ vertical = false, delay = 0 }) {
  return (
    <motion.div
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
      className={`bg-linear-to-r from-transparent via-rust-brown/30 to-transparent origin-center ${
        vertical ? 'w-px h-full origin-top' : 'w-full h-px'
      }`}
    />
  );
}