"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // This tells us exactly which page the user is currently on
  const pathname = usePathname();
  const isHome = pathname === '/';

  // This watches the user's scroll position
  useEffect(() => {
    const handleScroll = () => {
      // If they scroll down more than 20px, trigger the shrink effect
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call it once on load just in case they refresh while halfway down the page
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pro-Tip: If the mobile menu is open, we force the navbar to be solid so it's readable
  const showSolidNav = !isHome || isScrolled || isOpen;

  return (
    <nav 
      className={`w-full z-50 transition-all duration-500 ${
        isHome ? 'fixed top-0' : 'sticky top-0'
      } ${
        showSolidNav 
          ? 'bg-white border-b border-slate-200 shadow-sm' 
          : 'bg-transparent border-transparent pt-4' // Added pt-4 to push it down slightly when massive
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Container Height - Dynamically Shrinks */}
        <div className={`flex justify-between items-center transition-all duration-500 ${
          showSolidNav ? 'h-20' : 'h-28 md:h-32'
        }`}>
          
          {/* Brand Logo & Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              
              {/* The Logo Image - Dynamically Shrinks */}
              <img 
                src="/logos/gurusai-logo.png" 
                alt="Guru Sai Logo" 
                className={`w-auto transition-all duration-500 group-hover:scale-105 ${
                  showSolidNav ? 'h-10 md:h-12' : 'h-14 md:h-16'
                }`} 
              />
              
              <div className="flex flex-col">
                <span className={`font-extrabold tracking-tight leading-none transition-all duration-500 ${
                  showSolidNav ? 'text-xl md:text-2xl text-slate-900' : 'text-2xl md:text-3xl text-slate-900'
                }`}>
                  GURU SAI
                </span>
                <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mt-1">
                  Constructions & Developers
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Center Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-800 hover:text-amber-600 font-bold transition-colors">Home</Link>
            <Link href="/about" className="text-slate-800 hover:text-amber-600 font-bold transition-colors">About Us</Link>
            <Link href="/services" className="text-slate-800 hover:text-amber-600 font-bold transition-colors">Services</Link>
            <Link href="/projects" className="text-slate-800 hover:text-amber-600 font-bold transition-colors">Projects</Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-amber-500 text-slate-900 px-6 py-2.5 rounded text-sm font-bold hover:bg-amber-400 transition shadow-sm hover:shadow-md">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-900 hover:text-amber-500 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-8 h-8 drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
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