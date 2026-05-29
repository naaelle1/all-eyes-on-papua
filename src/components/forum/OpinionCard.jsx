import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function OpinionCard({ opinion, stylePreset }) {
  // Format tanggal buatan sipil
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("id-ID", { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ 
        opacity: [0.65, 0.85, 0.65],
        y: [0, stylePreset.yAxisMove, 0],
        x: [0, stylePreset.xAxisMove, 0]
      }}
      whileHover={{ 
        opacity: 1, 
        scale: 1.03,
        borderColor: "#7A1E1E",
        boxShadow: "0 0 25px rgba(122, 30, 30, 0.25)",
        transition: { duration: 0.4, y: { duration: 0 } }
      }}
      transition={{
        y: { repeat: Infinity, duration: stylePreset.duration, ease: "easeInOut" },
        x: { repeat: Infinity, duration: stylePreset.duration * 1.2, ease: "easeInOut" },
        opacity: { repeat: Infinity, duration: stylePreset.duration * 1.5, ease: "easeInOut" },
        duration: 0.6
      }}
      style={{
        position: 'absolute',
        top: stylePreset.top,
        left: stylePreset.left,
        width: stylePreset.width,
        backgroundColor: "rgba(17, 17, 17, 0.75)",
        backdropFilter: "blur(8px)",
      }}
      className="border border-[#D8C7A3]/40 p-6 shadow-xl relative select-none cursor-default forum-card-grain hidden md:block"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <Quote size={14} className="text-[#D8C7A3]/60" />
          <span className="font-serif text-xs text-[#D8C7A3] tracking-wide font-semibold">{opinion.username}</span>
        </div>
        <span className="text-[9px] font-mono uppercase bg-black/60 px-2 py-0.5 border border-neutral-800 text-soft-white/50">
          {opinion.category}
        </span>
      </div>

      <p className="font-sans text-xs md:text-sm font-light leading-relaxed text-[#F2EEE6] mb-4 text-justify">
        {opinion.content}
      </p>

      <div className="flex justify-between items-center text-[9px] font-mono text-soft-white/30 border-t border-neutral-900 pt-3">
        <span>ARCHIVE / VOL-{opinion.id.substring(0, 4).toUpperCase()}</span>
        <span>{formatDate(opinion.createdAt)}</span>
      </div>
    </motion.div>
  );
}