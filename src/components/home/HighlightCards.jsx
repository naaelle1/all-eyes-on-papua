import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Trees, Share2 } from 'lucide-react';

const cards = [
  {
    title: "Janji Otonomi Khusus",
    desc: "Retorika proteksi hak adat dan otonomi politik penuh yang terbentur dinding realisasi praktis.",
    icon: ShieldCheck,
    img: "/images/janji otonomi khusus.jpeg"
  },
  {
    title: "Konflik Hutan Adat",
    desc: "Hutan hujan Boven Digoel dibabat habis demi bentangan perkebunan sawit skala korporasi raksasa.",
    icon: Trees,
    img: "/images/konflik hutan 2.jpeg"
  },
  {
    title: "Solidaritas Digital",
    desc: "Ketika ribuan suara organik bersatu di jejaring digital meneriakkan satu pesan kolektif.",
    icon: Share2,
    img: "/images/solidaritas digital.jpeg"
  }
];

export default function HighlightCards() {
  return (
    <section className="bg-pri-bg py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-paper-beige/40">Fokus Investigasi</span>
          <div className="w-12 h-px bg-blood-red mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                className="relative group bg-sec-bg border border-rust-brown/10 overflow-hidden min-h-105 flex flex-col justify-end p-8 cursor-pointer"
              >
                {/* Background Image Setup */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={card.img} 
                    alt={card.title} 
                    className="w-full h-full object-cover cinematic-img group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent transition-all duration-700 group-hover:via-dark-red/50" />
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="text-paper-beige/60 group-hover:text-soft-white transition-colors duration-500 mb-4 inline-block">
                    <IconComponent size={24} strokeWidth={1.2} />
                  </div>
                  <h3 className="font-serif text-xl text-paper-beige group-hover:text-soft-white transition-colors duration-300 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-soft-white/60 group-hover:text-soft-white/80 leading-relaxed font-light">
                    {card.desc}
                  </p>
                  
                  {/* Subtle Border Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blood-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}