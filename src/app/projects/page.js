"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// 1. THIS IS OUR DATA ARRAY (Mocking a Database)
const projectsData = [
  {
    id: 1,
    name: "Century Artizan, Yelahanka",
    status: "Completed",
    size: "49 Acre Development, 246 Plots",
    details: "Successfully executed asphalt & paved roads, parks, plumbing works (sewerage, water supply, storm water), & external electrical works.",
  },
  {
    id: 2,
    name: "Century Eden, Doddaballapur",
    status: "Completed",
    size: "42 Acre Development, 521 Plots",
    details: "Paved roads, kerbs, drains, plumbing works, external electrical works & parks.",
  },
  {
    id: 3,
    name: "Century Wintersun, Doddaballapur",
    status: "Completed",
    size: "47 Acre Development",
    details: "Ultra-luxury villa development. Executed paved roads, kerbs, drains, plumbing works, and external electrical works.",
  },
  {
    id: 4,
    name: "Century Greens, Devanahalli",
    status: "Completed",
    size: "23 Acre Development",
    details: "BIAPPA approved plots. Executed paved roads, kerbs, drains, plumbing works, and parks.",
  },
  {
    id: 5,
    name: "Century Sports Village, Devanahalli",
    status: "Completed",
    size: "51 Acre Development",
    details: "Paved & asphalt roads, kerbs, drains, plumbing works, external electrical works, overhead tank, parks & sports amenities.",
  },
  {
    id: 6,
    name: "Century Seasons",
    status: "Completed",
    size: "51 Acre Development",
    details: "Paved & asphalt roads, kerbs, drains, plumbing works, external electrical works, overhead tank, parks & sports amenities.",
  },
  {
    id: 7,
    name: "Century Trails",
    status: "Completed",
    size: "51 Acre Development",
    details: "Paved & asphalt roads, kerbs, drains, plumbing works, external electrical works, overhead tank, parks & sports amenities.",
  },
  {
    id: 8,
    name: "Hush Fields by Living Walls",
    status: "Completed",
    size: "51 Acre Development",
    details: "Paved & asphalt roads, kerbs, drains, plumbing works, external electrical works, overhead tank, parks & sports amenities.",
  },
  {
    id: 9,
    name: "Sattva Bhumi",
    status: "Completed",
    size: "51 Acre Development",
    details: "Paved & asphalt roads, kerbs, drains, plumbing works, external electrical works, overhead tank, parks & sports amenities.",
  },
  {
    id: 10,
    name: "MAHE - Manipal Academy of Higher Education",
    status: "Completed",
    size: "51 Acre Development",
    details: "Paved & asphalt roads, kerbs, drains, plumbing works, external electrical works, overhead tank, parks & sports amenities.",
  },
  {
    id: 11,
    name: "Century Seraya One World",
    status: "On-Going",
    size: "51 Acre Development",
    details: "Paved & asphalt roads, kerbs, drains, plumbing works, external electrical works, overhead tank, parks & sports amenities.",
  },
  {
    id: 12,
    name: "Windsor Park",
    status: "On-Going",
    size: "51 Acre Development",
    details: "Paved & asphalt roads, kerbs, drains, plumbing works, external electrical works, overhead tank, parks & sports amenities.",
  } 
];

export default function Projects() {
  return (
    <main className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Header - CSS Animation */}
      <section className="w-full bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight animate-fade-in-up">Our Projects</h1>
        <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto px-4 animate-fade-in-up"style={{ animationDelay: '0.3s' }}>Over 270 acres of premium plotted development executed.</p>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}></div>
      </section>

     {/* Projects Grid - Individual Sensors */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full overflow-hidden">
        
        {/* Standard Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* THE MAP FUNCTION: Using 'index' for row-based staggering */}
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }} // Waits for the user to scroll to it
              transition={{ duration: 0.5, delay: (index % 3) * 0.15, ease: "easeOut" }}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              
              {/* Image Placeholder with Hover Zoom */}
              <div className="h-48 bg-slate-200 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-300 transform transition-transform duration-500 group-hover:scale-105"></div>
                
                <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded z-10 shadow-sm ${
                  project.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{project.name}</h3>
                <p className="text-amber-600 font-semibold text-sm mb-4">{project.size}</p>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {project.details}
                </p>
              </div>
              
            </motion.div>
          ))}

        </div>
      </section>

    </main>
  );
}