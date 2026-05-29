import React from 'react';
import { motion } from 'framer-motion';
import { archiveNews } from '../../data/archiveNews';
import SectionTitle from '../ui/SectionTitle';
import { ArrowUpRight } from 'lucide-react';

export default function NewsSection() {
  return (
    <section className="bg-[#080808] py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="03 / JURNALISME INVESTIGASI" title="Arsip Pemberitaan Resmi Perjuangan Hukum" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {archiveNews.map((news) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#111111] border border-neutral-800 p-8 flex flex-col justify-between relative group hover:border-[#4B0F0F]/60 transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase text-[#D8C7A3] tracking-widest">
                  <span>PUBLIKASI MEDIA</span>
                  <span className="text-[#4B0F0F]">{news.source}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl text-[#F2EEE6] group-hover:text-[#D8C7A3] transition-colors leading-snug">
                  {news.headline}
                </h3>
                <p className="text-xs text-soft-white/60 font-light leading-relaxed">
                  {news.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-end">
                <a 
                  href={news.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-wider text-soft-white/40 group-hover:text-white transition-colors"
                >
                  <span>Buka Lembar Dokumen</span>
                  <ArrowUpRight size={12} className="text-[#4B0F0F] group-hover:text-[#D8C7A3]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}