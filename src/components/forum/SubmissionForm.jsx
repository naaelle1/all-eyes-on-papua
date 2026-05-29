import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { addOpinion } from '../../services/opinionService';
import { Loader2, X, Plus } from 'lucide-react';

export default function SubmissionForm() {
  const [formData, setFormData] = useState({ name: '', title: '', category: 'Refleksi', content: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isFormOpen, setIsFormOpen] = useState(true);

  // Responsive default state
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsFormOpen(false);
    } else {
      setIsFormOpen(true);
    }
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.content.trim()) return;

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await addOpinion({
        username: formData.name.trim() || "Anonymous",
        title: formData.title.trim() || "Refleksi Publik",
        category: formData.category,
        content: formData.content.trim()
      });

      setStatus({ type: 'success', message: 'Suara Anda telah kekal tersimpan di dinding arsip.' });
      setFormData({ name: '', title: '', category: 'Refleksi', content: '' });
    } catch (err) {
      setStatus({ type: 'error', message: 'Gagal menghubungkan ke pangkalan data arsip. Coba lagi.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isFormOpen && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsFormOpen(true)}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 md:absolute md:top-8 md:right-8 md:bottom-auto md:left-auto md:translate-x-0 z-50 bg-[#111111]/80 backdrop-blur-md border border-[#D8C7A3]/30 px-6 py-3 flex items-center space-x-2 text-[#D8C7A3] hover:bg-[#4B0F0F]/40 hover:border-[#4B0F0F] transition-all duration-300 group shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Tulis Aspirasi</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, height: 'auto', scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, height: 0, scale: 0.95, filter: 'blur(10px)' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-40 w-full max-w-lg md:max-w-xl mx-auto max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
          >
            <div className="bg-[#111111]/90 border border-[#D8C7A3]/30 hover:border-[#D8C7A3]/50 p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(75,15,15,0.4)] backdrop-blur-xl forum-card-grain transition-all duration-500 overflow-hidden group rounded-sm relative">
              <button 
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-soft-white/40 hover:text-[#D8C7A3] hover:rotate-90 transition-all duration-300 z-10 p-2"
              >
                <X size={18} />
              </button>

              <div className="mb-6 border-b border-neutral-800 pb-4 pr-6">
                <h3 className="font-serif text-xl md:text-2xl text-[#F2EEE6] group-hover:text-[#D8C7A3] transition-colors">Sematkan Manifesto Pikiran</h3>
                <p className="text-[10px] md:text-[11px] text-soft-white/40 font-sans mt-1">Gunakan ruang ini untuk membagikan analisis sosial atau emosional.</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono uppercase text-[#D8C7A3]/60 tracking-wider">Nama / Anonim</label>
            <input 
              type="text" 
              maxLength={25}
              placeholder="Anonymous"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-black/50 border border-neutral-800 p-2.5 text-xs font-sans text-soft-white focus:outline-none focus:border-[#4B0F0F] transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-mono uppercase text-[#D8C7A3]/60 tracking-wider">Kategori Klaster</label>
            <select 
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full bg-black/50 border border-neutral-800 p-2.5 text-xs font-sans text-soft-white focus:outline-none focus:border-[#4B0F0F] transition-colors cursor-pointer"
            >
              <option value="Lingkungan">Lingkungan</option>
              <option value="Hak Adat">Hak Adat</option>
              <option value="Politik">Politik</option>
              <option value="Solidaritas">Solidaritas</option>
              <option value="Refleksi">Refleksi</option>
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[9px] font-mono uppercase text-[#D8C7A3]/60 tracking-wider">Isi Opini & Refleksi Tekstual</label>
          <textarea 
            required
            rows={3}
            maxLength={280}
            placeholder="Tulis refleksi Anda (Maksimal 280 karakter)..."
            value={formData.content}
            onChange={(e) => {
              setFormData({...formData, content: e.target.value});
              e.target.style.height = 'auto';
              e.target.style.height = e.target.scrollHeight + 'px';
            }}
            style={{ minHeight: '80px', maxHeight: '200px' }}
            className="w-full bg-black/50 border border-[#D8C7A3]/20 p-3 text-xs md:text-sm font-sans text-[#F2EEE6] focus:outline-none focus:border-[#4B0F0F] transition-colors resize-none leading-relaxed"
          />
          <div className="text-right text-[9px] font-mono text-soft-white/20">
            {formData.content.length}/280
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-neutral-900 border border-neutral-700 text-[10px] font-mono uppercase tracking-widest text-[#D8C7A3] py-3 hover:bg-[#4B0F0F] hover:text-white hover:border-[#4B0F0F] transition-all flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 size={12} className="animate-spin" />
              <span>Mengarsipkan Dokumen...</span>
            </>
          ) : (
            <span>Kirim Suara Sipil</span>
          )}
        </button>

        <AnimatePresence>
          {status.message && (
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`text-[11px] font-sans text-center p-2 border ${status.type === 'success' ? 'bg-[#2A1B14]/30 border-[#D8C7A3]/30 text-[#D8C7A3]' : 'bg-[#4B0F0F]/20 border-[#4B0F0F] text-red-400'}`}
            >
              {status.message}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}