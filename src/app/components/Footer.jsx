import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold tracking-widest mb-4 uppercase">
              Guru Sai Constructions
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Built to Last, Paved to Perfection.
            </p>
            <p className="text-sm text-amber-500 font-semibold tracking-wide uppercase">
              100% Top Quality Guaranteed
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold tracking-widest mb-4 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-white transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold tracking-widest mb-4 uppercase">
              Corporate Office
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="mr-3 text-amber-500">📍</span>
                <span> Benson Town,<br />Bangalore - 560046</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-amber-500">📞</span>
                <span>+91-9008342182 / +91-9964847399</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-amber-500">✉️</span>
                <span>gurusaidevelopers97@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
  
          <p>&copy; {new Date().getFullYear()} Guru Sai Constructions. All rights reserved.</p>
          
          {/* The Subtle Portfolio Link */}
          <p className="mt-4 md:mt-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
            Engineered by{" "}
            <a 
              href="https://richardsylvester.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold hover:text-amber-500 transition-colors duration-300"
            >
              Richard
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}