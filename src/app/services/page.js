"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// 1. SERVICES DATA ARRAY
const servicesData = [
  {
    id: 1,
    title: "Premium Plotted Development",
    description: "End-to-end turnkey plotted development projects. We handle everything from land clearing to the final finished layout, successfully developing over 270 acres across Bengaluru.",
    icon: "🗺️", 
  },
  {
    id: 2,
    title: "Road Works",
    description: "Heavy-duty infrastructure execution. Our road work portfolio includes high-grade Concrete Roads, Asphalt Roads, and durable Paver Roads built to withstand heavy industrial and civic use.",
    icon: "🛣️",
  },
  {
    id: 3,
    title: "Civil & Hardscape Works",
    description: "Comprehensive civil construction and essential landscaping. This includes the development of complex Sewage Treatment Plants (STP) and large-scale Over Head Tanks.",
    icon: "🏗️",
  },
  {
    id: 4,
    title: "Sports & Entertainment Amenities",
    description: "Execution of premium civic amenities within large developments, including parks, clubhouses, and recreational sports facilities designed for longevity and high foot traffic.",
    icon: "⚽",
  },
  {
    id: 5,
    title: "MS Fabrication Works",
    description: "Industrial-grade mild steel fabrication for heavy infrastructure, structural structural supports, and custom engineering requirements within our plotted developments.",
    icon: "⚙️",
  }
];

export default function Services() {
  return (
    <main className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner - Keeps the instant load CSS animation */}
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
        
        {/* Master Stagger Container */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 } // A snappy 0.15s delay between each card
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          
          {/* THE MAP FUNCTION: Now rendering Framer Motion elements */}
          {servicesData.map((service) => (
            <motion.div 
              key={service.id} 
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              className="bg-white p-10 rounded-lg shadow-sm border border-slate-200 hover:border-amber-500 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              
              {/* Icon Container with hover effect */}
              <div className="w-16 h-16 bg-slate-100 group-hover:bg-amber-100 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm transition-colors duration-300">
                 {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              
            </motion.div>
          ))}

        </motion.div>

        {/* Call to Action Row - Animates in after the grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
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