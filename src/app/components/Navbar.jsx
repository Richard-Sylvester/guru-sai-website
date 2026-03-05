import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Text */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-slate-900 tracking-tight">
              GURU SAI <span className="text-slate-500 font-medium text-lg ml-1">CONSTRUCTIONS & DEVELOPERS</span>
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