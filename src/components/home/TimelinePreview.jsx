import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { year: '1998', title: 'Reformasi', desc: 'Tumbangnya Orde Baru memicu tuntutan keadilan mendasar.' },
  { year: '2001', title: 'UU Otsus Disahkan', desc: 'Lahir dengan janji proteksi kultural & hak ulayat.' },
  { year: 'Otsus Era', title: 'Realita Lapangan', desc: 'Eksploitasi terus berjalan di balik tirai birokrasi.' },
  { year: 'Omnibus', title: 'UU Cipta Kerja', desc: 'Izin korporasi dipermudah, ancaman ruang hidup meningkat.' },
  { year: 'Awyu & Moi', title: 'Gugatan Hukum', desc: 'Masyarakat adat berjuang di meja hijau melawan izin sawit.' },
  { year: 'Hari Ini', title: 'All Eyes on Papua', desc: 'Gelombang solidaritas digital global menuntut keadilan.' }
];

export default function TimelinePreview() {
  return (
    <section id="timeline" className="bg-sec-bg py-24 px-6 md:px-12 border-y border-rust-brown/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-16">
          <span className="text-xs uppercase tracking-widest text-blood-red font-semibold">Fragmen Regulasi</span>
          <h2 className="font-serif text-3xl md:text-4xl text-paper-beige mt-2 mb-4">Garis Waktu Penggerusan</h2>
          <p className="text-sm text-soft-white/60 leading-relaxed font-light">
            Sebagai respons atas tuntutan keadilan di Bumi Cendrawasih pasca-1998, pemerintah mengesahkan Otsus Papua dengan janji perlindungan masyarakat adat. Namun roda regulasi berputar ke arah berbeda.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative flex flex-col md:flex-row md:justify-between items-start space-y-12 md:space-y-0 md:space-x-6 pt-8">
          {/* Central Line for desktop */}
          <div className="hidden md:block absolute top-10.75 left-0 right-0 h-px bg-linear-to-r from-rust-brown/10 via-paper-beige/30 to-rust-brown/10 z-0" />

          {timelineData.map((item, idx) => (
            <motion.div 
              key={idx}
              className="relative z-10 w-full md:w-1/6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >
              {/* Point Indicator */}
              <div className="flex items-center md:flex-col md:items-start mb-4">
                <div className="text-xl font-serif font-bold text-paper-beige md:mb-6 tracking-wide group-hover:text-blood-red transition-colors duration-500">
                  {item.year}
                </div>
                <div className="absolute -left-6 md:relative md:left-0 w-3 h-3 rounded-full bg-dark-brown border border-paper-beige/40 group-hover:bg-blood-red group-hover:border-blood-red transition-all duration-500 shadow-[0_0_10px_rgba(122,30,30,0)] group-hover:shadow-[0_0_12px_#7A1E1E]" />
              </div>

              {/* Text Card */}
              <div className="pl-6 md:pl-0">
                <h3 className="text-xs uppercase tracking-cinematic text-soft-white font-medium mb-2">{item.title}</h3>
                <p className="text-xs text-soft-white/50 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}