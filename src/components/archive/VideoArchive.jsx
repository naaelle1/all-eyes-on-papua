import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { archiveVideos } from '../../data/archiveVideos';
import SectionTitle from '../ui/SectionTitle';
import { Play, X } from 'lucide-react';

export default function VideoArchive() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-[#111111] py-28 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="04 / MEMORIAL CINEMA" title="Koleksi Dokumenter Audio Visual" center={true} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {archiveVideos.map((video) => (
            <div 
              key={video.id}
              className="bg-[#080808] border border-neutral-800 p-4 relative group cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              {/* Cinematic Thumbnail Screen Placeholder Wrapper */}
              <div className="w-full h-48 bg-neutral-950 overflow-hidden relative flex items-center justify-center border border-neutral-900">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30 z-10" />
                <img 
                  src={`https://img.youtube.com/vi/${video.idYoutube}/hqdefault.jpg`} 
                  alt={video.title} 
                  className="w-full h-full object-cover opacity-30 filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-102"
                />
                
                {/* Embedded Centered Play button layout animation implementation */}
                <div className="absolute z-20 w-12 h-12 rounded-full border border-soft-white/30 bg-black/60 backdrop-blur-sm flex items-center justify-center text-[#D8C7A3] group-hover:scale-110 group-hover:border-[#D8C7A3] transition-all duration-300 shadow-2xl">
                  <Play size={16} fill="currentColor" className="ml-0.5" />
                </div>

                <span className="absolute bottom-3 right-3 z-20 font-mono text-[10px] text-soft-white/40 bg-black/50 px-2 py-0.5">
                  {video.duration}
                </span>
              </div>

              <div className="mt-4 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#4B0F0F]">DOKUMENTER</span>
                <h4 className="font-serif text-base text-paper-beige group-hover:text-soft-white transition-colors">
                  {video.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Iframe Modal Stream Window Backdrop */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4"
          >
            <div className="w-full max-w-4xl relative">
              <button 
                className="absolute -top-10 right-0 inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-soft-white/50 hover:text-white"
                onClick={() => setActiveVideo(null)}
              >
                <span>TUTUP BIOSKOP ARSIP</span>
                <X size={16} />
              </button>
              
              <div className="aspect-video w-full bg-black border border-neutral-800 shadow-2xl">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideo.idYoutube}?autoplay=1`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}