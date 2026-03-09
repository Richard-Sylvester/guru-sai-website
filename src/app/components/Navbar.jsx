"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolidNav = !isHome || isScrolled || isOpen;

  return (
    <nav 
      className={`w-full z-50 transition-all duration-500 ${
        isHome ? 'fixed top-0' : 'sticky top-0'
      } ${
        showSolidNav 
          ? 'bg-white border-b border-slate-200 shadow-sm' 
          : 'bg-transparent border-transparent pt-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          showSolidNav ? 'h-20' : 'h-28 md:h-32'
        }`}>
          
          {/* Brand Logo & Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              
              <img 
                src="/logos/gurusai-logo.png" 
                alt="Guru Sai Logo" 
                className={`w-auto transition-all duration-500 group-hover:scale-105 ${
                  showSolidNav 
                    ? 'h-10 md:h-12' 
                    : 'h-14 md:h-16 brightness-0 invert drop-shadow-md'
                }`} 
              />
              
              <div className="flex flex-col">
                {/* UPGRADED: Text swaps to white when transparent */}
                <span className={`font-extrabold tracking-tight leading-none transition-all duration-500 ${
                  showSolidNav ? 'text-xl md:text-2xl text-slate-900' : 'text-2xl md:text-3xl text-white drop-shadow-md'
                }`}>
                  GURU SAI
                </span>
                {/* UPGRADED: Subtitle gets lighter when transparent */}
                <span className={`text-xs font-bold tracking-widest uppercase mt-1 transition-colors duration-500 ${
                  showSolidNav ? 'text-slate-500' : 'text-slate-300 drop-shadow-md'
                }`}>
                  Constructions & Developers
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Center Links - UPGRADED: Swaps to white when transparent */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`font-bold transition-colors ${showSolidNav ? 'text-slate-800 hover:text-amber-600' : 'text-white hover:text-amber-400 drop-shadow-md'}`}>Home</Link>
            <Link href="/about" className={`font-bold transition-colors ${showSolidNav ? 'text-slate-800 hover:text-amber-600' : 'text-white hover:text-amber-400 drop-shadow-md'}`}>About Us</Link>
            <Link href="/services" className={`font-bold transition-colors ${showSolidNav ? 'text-slate-800 hover:text-amber-600' : 'text-white hover:text-amber-400 drop-shadow-md'}`}>Services</Link>
            <Link href="/projects" className={`font-bold transition-colors ${showSolidNav ? 'text-slate-800 hover:text-amber-600' : 'text-white hover:text-amber-400 drop-shadow-md'}`}>Projects</Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded text-sm font-bold hover:bg-amber-400 transition shadow-sm hover:shadow-md">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button - UPGRADED: Swaps to white when transparent */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`hover:text-amber-500 focus:outline-none p-2 transition-colors duration-300 ${
                showSolidNav ? 'text-slate-900' : 'text-white drop-shadow-md'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (Stays the same!) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl pb-6 px-4 pt-2">
          <div className="flex flex-col space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-slate-800 hover:text-amber-600 hover:bg-slate-50 font-bold border-b border-slate-50 transition-colors">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-slate-800 hover:text-amber-600 hover:bg-slate-50 font-bold border-b border-slate-50 transition-colors">About Us</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-slate-800 hover:text-amber-600 hover:bg-slate-50 font-bold border-b border-slate-50 transition-colors">Services</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-slate-800 hover:text-amber-600 hover:bg-slate-50 font-bold border-b border-slate-50 transition-colors">Projects</Link>
            
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block mt-6 px-4 py-4 text-center bg-amber-500 text-slate-900 rounded-lg font-bold shadow-md hover:bg-amber-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}