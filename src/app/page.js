import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="w-full bg-slate-900 py-32 text-center flex flex-col items-center justify-center min-h-[70vh]">
        
        {/* Eyebrow text - Fades in instantly */}
        <p className="text-amber-500 font-bold tracking-widest text-sm mb-6 uppercase animate-fade-in-up">
          ESTABLISHED 2020
        </p>

        {/* Split Headline - Staggered Delays */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Built to Last
          </span>
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            Paved to Perfection
          </span>
        </h1>

        {/* Subtitle - Delays until after the headline finishes */}
        <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          Executing premium plotted developments, civil works, & civic amenities across Bengaluru.
        </p>

        {/* Buttons - The grand finale */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
          <Link href="/projects" className="bg-amber-500 text-slate-900 px-8 py-4 rounded font-bold hover:bg-amber-400 transition text-lg shadow-sm">
            View Our Projects
          </Link>
          <Link href="/contact" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded font-bold hover:bg-white/10 transition text-lg shadow-sm">
            Contact Us
          </Link>
        </div>
        
      </section>

     {/* 2. Trust Banner (CLient) */}
      <section className="w-full bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center"> 
          
          <p className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-8">
            Trusted by Industry Leaders
          </p>
          
         {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-end gap-12 md:gap-24 mt-6">
            
            {/* Logo 1 - Century */}
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <img 
                src="/logos/century.png" 
                alt="Century Real Estate" 
                className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">
                Century
              </span>
            </div>
            
            {/* Logo 2 - Sattva */}
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <img 
                src="/logos/sattva.png" 
                alt="Sattva Group" 
                className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">
                Sattva
              </span>
            </div>
            
            {/* Logo 3 - Living Walls */}
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <img 
                src="/logos/living walls.png" 
                alt="Living Walls" 
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">
                Living WallsS
              </span>
            </div>

            {/* Logo 4 - Manipal */}
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <img 
                src="/logos/manipal.png" 
                alt="Manipal" 
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">
                Manipal
              </span>
            </div>

            {/* Logo 5 - Vihana */}
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <img 
                src="/logos/vihana.png" 
                alt="Vihana" 
                className="h-24 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">
                Vihana
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="w-full py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Core Competencies</h2>
            <p className="text-lg text-slate-600">
              Delivering turnkey solutions with a commitment to 100% Top Quality and guaranteed on-time execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Premium Plotted Development</h3>
              <p className="text-slate-600 leading-relaxed">
                End-to-end turnkey plotted development projects. Successfully developed over 270 acres of area.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Road Works</h3>
              <p className="text-slate-600 leading-relaxed">
                Heavy-duty infrastructure execution including Concrete Roads, Asphalt Roads, and Paver Roads.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Civil & Hardscape Works</h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive civil construction, landscaping, Sewage Treatment Plants (STP), and Over Head Tanks.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}