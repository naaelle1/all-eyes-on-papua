import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Reformasi', path: '/reformasi' },
    { name: 'Dulu vs Sekarang', path: '/comparison' },
    { name: 'Analisis', path: '/analysis' },
    { name: 'Arsip', path: '/archive' },
    { name: 'Forum', path: '/forum' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 border-b ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-white/5 py-5' 
        : 'bg-transparent border-transparent py-8'
    }`}>
      <div className="max-w-350 mx-auto px-8 md:px-16 flex justify-between items-center">
        <Link to="/" className="font-serif text-lg md:text-xl tracking-[0.3em] text-paper-beige uppercase font-light">
          All Eyes On <span className="text-white">Papua</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-colors duration-500 relative group py-2 
                ${location.pathname === item.path ? 'text-paper-beige' : 'text-soft-white/60 hover:text-paper-beige'}`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-px transition-all duration-500 
                ${location.pathname === item.path ? 'w-full bg-paper-beige' : 'w-0 bg-paper-beige/50 group-hover:w-full'}`} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-soft-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/5 py-8 px-8 flex flex-col space-y-6">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-xs uppercase tracking-[0.2em] transition-colors font-light
                ${location.pathname === item.path ? 'text-paper-beige' : 'text-soft-white/60 hover:text-paper-beige'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}