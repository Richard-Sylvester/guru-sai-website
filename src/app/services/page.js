"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// 1. SERVICES DATA ARRAY - Now with Image Placeholders!
const servicesData = [
  {
    id: 1,
    title: "Premium Plotted Development",
    description: "End-to-end turnkey plotted development projects. We handle everything from land clearing to the final finished layout, successfully developing over 270 acres across Bengaluru.",
    icon: "🗺️", 
    image: "/century-sportsvillage-7.webp"
  },
  {
    id: 2,
    title: "Road Works",
    description: "Heavy-duty infrastructure execution. Our road work portfolio includes high-grade Concrete Roads, Asphalt Roads, and durable Paver Roads built to withstand heavy industrial and civic use.",
    icon: "🛣️",
    image: "/century-greens-6.webp"
  },
  {
    id: 3,
    title: "Civil & Hardscape Works",
    description: "Comprehensive civil construction and essential landscaping. This includes the development of complex Sewage Treatment Plants (STP) and large-scale Over Head Tanks.",
    icon: "🏗️",
    image: "/century-greens-7.webp"
  },
  {
    id: 4,
    title: "Sports & Entertainment Amenities",
    description: "Execution of premium civic amenities within large developments, including parks, clubhouses, and recreational sports facilities designed for longevity and high foot traffic.",
    icon: "⚽",
    image: "/century-sportsvillage-4.webp"
  },
  {
    id: 5,
    title: "MS Fabrication Works",
    description: "Industrial-grade mild steel fabrication for heavy infrastructure, structural supports, and custom engineering requirements within our plotted developments.",
    icon: "⚙️",
    image: "/century-sportsvillage-5.webp"
  }
];

export default function Services() {
  return (
    <main className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="w-full bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight animate-fade-in-up">
          Our Services
        </h1>
        <p 
          className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto px-4 animate-fade-in-up" 
          style={{ animationDelay: '0.3s' }}
        >
            Delivering 100% Top Quality turnkey infrastructure solutions across the B2B sector.
        </p>
        <div 
          className="w-16 h-1 bg-amber-500 mx-auto mt-6 animate-fade-in-up" 
          style={{ animationDelay: '0.6s' }}
        ></div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 w-full overflow-hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* THE MAP FUNCTION */}
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.15, ease: "easeOut" }}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group cursor-default"
            >
              
              {/* Top Image Banner with hover zoom */}
              <div className="h-56 bg-slate-200 w-full relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-slate-300 transform transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                {/* A subtle dark gradient so the transition to the white card is smooth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Bottom Content Area */}
              <div className="px-8 pb-10 pt-0 flex flex-col items-center text-center relative flex-grow bg-white">
                
                {/* Floating Icon Container */}
                <div className="w-16 h-16 bg-white border-4 border-white group-hover:border-amber-100 group-hover:bg-amber-100 rounded-full flex items-center justify-center text-3xl shadow-md transition-colors duration-300 -mt-8 mb-6 relative z-10">
                   {service.icon}
                </div>

                {/* Text */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
            </motion.div>
          ))}

        </div>

        {/* Call to Action Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-slate-100 p-8 rounded-lg text-center border border-slate-200 relative overflow-hidden"
        >
           <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">Need a Reliable Execution Partner?</h3>
           <p className="text-slate-600 mb-6 max-w-2xl mx-auto relative z-10">Contact us today to discuss your next major infrastructure or plotted development project.</p>
           <Link href="/contact" className="inline-block bg-amber-500 text-slate-900 px-8 py-3 rounded font-bold hover:bg-amber-400 transition shadow-md hover:shadow-lg relative z-10">
              Get in Touch
           </Link>
        </motion.div>

      </section>

    </main>
  );
}