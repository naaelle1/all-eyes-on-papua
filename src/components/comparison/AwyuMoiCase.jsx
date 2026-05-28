import React from 'react';
import { motion } from 'framer-motion';

export default function AwyuMoiCase() {
  return (
    <section className="bg-black py-28 px-6 md:px-12 border-y border-rust-brown/10 relative overflow-hidden">
      {/* Visual background atmospheric representation */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none hidden lg:block">
        <div className="w-full h-full bg-[radial-gradient(#7A1E1E_1px,transparent_1px)] bg-size-[16px_16px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-sans tracking-[0.25em] text-blood-red uppercase block mb-4">STUDI KASUS INVESTIGASI</span>
        <h2 className="font-serif text-3xl md:text-4xl text-paper-beige leading-tight mb-8">
          Suku Awyu & Moi: <br /><span className="italic font-light text-soft-white/80">Benteng Hukum Terakhir Menjaga Hutan Adat</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm font-sans font-light text-soft-white/70 leading-relaxed">
          <div className="md:col-span-7 space-y-4">
            <p>
              Perjuangan hukum Suku Awyu di Boven Digoel dan Suku Moi di Sorong menjadi lambang hidup dari benturan keras desentralisasi masa lalu melawan arus balik modal modern. Di tengah bayang-bayang ekspansi perkebunan sawit berskala masif, mereka menempuh jalan kasasi di Mahkamah Agung guna membatalkan izin lingkungan hidup korporasi yang diterbitkan tanpa persetujuan ulayat sahih.
            </p>
            <p>
              Rimba adat Suku Awyu seluas puluhan ribu hektar bukan sekadar jajaran pohon ekonomis; melainkan identitas kultural purba, situs sakral leluhur, serta sumber kelangsungan generasi yang terancam lenyap sepenuhnya di bawah roda alat berat pembersih lahan korporasi.
            </p>
          </div>
          
          <div className="md:col-span-5 bg-[#111111] border border-rust-brown/10 p-6 flex flex-col justify-center space-y-4">
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#8B6B4A]">Status Hukum Terkini</span>
            <div className="w-6 h-px bg-blood-red" />
            <p className="text-xs italic text-paper-beige/80">
              “Masyarakat adat dipaksa bertumpu pada celah pembuktian birokrasi perizinan yang rumit, menjauh dari substansi keadilan moral konstitusi.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}