import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-pri-bg border-t border-rust-brown/20 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-cinematic text-soft-white/40 uppercase space-y-4 md:space-y-0">
        <p>© 2026 Digital Historical Archive. All Rights Reserved.</p>
        <p className="font-serif italic text-paper-beige/60 capitalize text-sm">Mengingat, Mencatat, Menggugat.</p>
      </div>
    </footer>
  );
}