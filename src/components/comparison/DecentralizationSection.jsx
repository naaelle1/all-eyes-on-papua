import React from 'react';
import { motion } from 'framer-motion';
import SplitLayout from '../ui/SplitLayout';
import { decentralizationData } from '../../data/comparisonData';

export default function DecentralizationSection() {
  const { left, right } = decentralizationData;
  return (
    <SplitLayout 
      left={
        <div className="space-y-6">
          <span className="text-xs font-sans tracking-widest uppercase text-[#8B6B4A]">{left.era}</span>
          <h2 className="font-serif text-3xl text-[#D8C7A3]">{left.title}</h2>
          <h4 className="text-xs font-sans tracking-wide text-soft-white/40 italic uppercase">{left.subtitle}</h4>
          
          <div className="w-12 h-px bg-rust-brown/40 my-4" />
          
          <ul className="space-y-4 text-sm font-sans font-light leading-relaxed text-soft-white/70">
            {left.points.map((pt, i) => (
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i*0.2 }} key={i} className="flex items-start">
                <span className="text-[#8B6B4A] mr-3 font-serif">•</span>
                <span>{pt}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      }
      right={
        <div className="space-y-6">
          <span className="text-xs font-sans tracking-widest uppercase text-blood-red">{right.era}</span>
          <h2 className="font-serif text-3xl text-soft-white">{right.title}</h2>
          <h4 className="text-xs font-sans tracking-wide text-blood-red/60 uppercase">{right.subtitle}</h4>
          
          <div className="w-12 h-px bg-blood-red/40 my-4" />
          
          <ul className="space-y-4 text-sm font-sans font-light leading-relaxed text-soft-white/70">
            {right.points.map((pt, i) => (
              <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i*0.2 }} key={i} className="flex items-start">
                <span className="text-blood-red mr-3 font-serif">•</span>
                <span>{pt}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      }
    />
  );
}