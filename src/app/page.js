"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// 1. YOUR HERO IMAGES ARRAY
// Add or remove as many as you want. The code will automatically loop through them!
const heroImages = [
  "/hero-1.jpg", // The beautiful palm tree road image you just uploaded
  "/hero-2.jpg", // Placeholder - Add a real image to public folder later
  "/hero-3.jpg"  // Placeholder - Add a real image to public folder later
];

export default function Home() {
  // State to track which image is currently showing
  const [currentSlide, setCurrentSlide] = useState(0);

  // The Timer: Changes the slide every 5000 milliseconds (5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer); // Cleanup to prevent memory leaks
  }, []);

  return (
    <main className="flex flex-col w-full bg-white">
      
      {/* 1. DYNAMIC HERO SLIDESHOW SECTION */}
      <section className="relative w-full min-h-screen md:min-h-[700px] flex items-center justify-center overflow-hidden">
        
        {/* Background Images Map */}
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          ></div>
        ))}

        {/* Dark Gradient Overlay - Ensures text is ALWAYS readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 z-10"></div>

        {/* Hero Content - Sits on top of the images (z-20) */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-32 pb-24 md:pt-0 md:pb-0">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              A Legacy of Quality Since 2020
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight"
        >
            Built to Last.<br />
            <span className="text-amber-500">Paved to perfection.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl leading-relaxed"
          >
            Delivering 100% top-quality turnkey infrastructure and premium plotted development solutions across Bengaluru.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/projects" className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/25">
              View Our Projects
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-slate-900 transition-all">
              Partner With Us
            </Link>
          </motion.div>

        </div>

        {/* Optional: Little Slider Dots at the bottom to show which image is active */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-amber-500 w-8" : "bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

      </section>

     {/* 2.Trust Banner (Logo Farm) */}
      <section className="w-full bg-white py-12 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-8"
          >
            Trusted by Industry Leaders
          </motion.p>
          
          {/* Logo Grid with Framer Motion Stagger */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="flex flex-wrap justify-center items-end gap-12 md:gap-24 mt-6"
          >
            
            {/* Logo 1 - Century */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <img src="/logos/century-logo.png" alt="Century Real Estate" className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">Century</span>
            </motion.div>
            
            {/* Logo 2 - Sattva */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <img src="/logos/sattva-logo.png" alt="Sattva Group" className="h-20 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">Sattva</span>
            </motion.div>
            
            {/* Logo 3 - Living Walls */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <img src="/logos/living walls-logo.png" alt="Living Walls" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">Living Walls</span>
            </motion.div>

            {/* Logo 4 - Manipal */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <img src="/logos/manipal-logo.png" alt="Manipal" className="h-24 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">Manipal</span>
            </motion.div>

            {/* Logo 5 - Vihana */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <img src="/logos/vihana-logo.png" alt="Vihana" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">Vihana</span>
            </motion.div>

            {/* Logo 6 - Chanakya University */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="flex flex-col items-center gap-4 group cursor-pointer"
            >
              <img src="/logos/chanakya university-logo.png" alt="Chanakya University" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest group-hover:text-amber-600 transition-colors duration-300">Chanakya University</span>
            </motion.div>

          </motion.div>
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