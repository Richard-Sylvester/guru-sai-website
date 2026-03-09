import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* UPDATED: Brand Logo & Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              
              {/* The Logo Image - Make sure the file name exactly matches what's in your public folder! */}
              <img 
                src="/logos/gurusai-logo.png" 
                alt="Guru Sai Logo" 
                className="h-10 w-auto md:h-12 transition-transform duration-300 group-hover:scale-105" 
              />
              
              {/* The Company Name Stacked */}
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

          {/* Center Links (Hidden on mobile for now) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900 font-medium transition">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-slate-900 font-medium transition">About Us</Link>
            <Link href="/services" className="text-slate-600 hover:text-slate-900 font-medium transition">Services</Link>
            <Link href="/projects" className="text-slate-600 hover:text-slate-900 font-medium transition">Projects</Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link href="/contact" className="bg-slate-900 text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-slate-800 transition">
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}