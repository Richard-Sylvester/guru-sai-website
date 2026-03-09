"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // This state controls whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Brand Logo & Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              <img 
                src="/logos/gurusai-logo.png" 
                alt="Guru Sai Logo" 
                className="h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                  GURU SAI
                </span>
                <span className="text-xs font-bold text-slate-500 tracking-widest uppercase mt-1">
                  Constructions & Developers
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Center Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-amber-600 font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-amber-600 font-medium transition-colors">About Us</Link>
            <Link href="/services" className="text-slate-600 hover:text-amber-600 font-medium transition-colors">Services</Link>
            <Link href="/projects" className="text-slate-600 hover:text-amber-600 font-medium transition-colors">Projects</Link>
          </div>

          {/* Desktop Contact Button (Hidden on Mobile) */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-slate-800 transition shadow-sm">
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Button (Visible ONLY on Mobile) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-900 hover:text-amber-500 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {/* This swaps between a Hamburger icon (open) and an X icon (close) */}
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

      {/* Mobile Dropdown Menu */}
      {/* This section ONLY appears if 'isOpen' is true and you are on a small screen */}
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