"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projectsData"; // Importing your new database!

export default function Projects() {
  return (
    <main className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="w-full bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight animate-fade-in-up">Our Projects</h1>
        <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto px-4 animate-fade-in-up"style={{ animationDelay: '0.3s' }}>Over 530 acres of premium plotted development executed.</p>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}></div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.15, ease: "easeOut" }}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col group"
            >
              {/* THE LINK WRAPPER - This makes the whole card clickable! */}
              <Link href={`/projects/${project.id}`} className="flex flex-col flex-grow cursor-pointer">
                
                {/* Image Placeholder with Hover Zoom */}
                <div className="h-48 bg-slate-200 w-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-300 transform transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${project.mainImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  
                  <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded z-10 shadow-sm ${
                    project.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
                  
                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  {/* NEW: Location Row with SVG Pin */}
                  {project.location && (
                    <div className="flex items-center text-slate-500 text-sm mb-3">
                      <svg className="w-4 h-4 mr-1.5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {project.location}
                    </div>
                  )}

                  {/* Project Size */}
                  <p className="text-amber-600 font-semibold text-sm mb-4">
                    {project.size}
                  </p>
                  
                  {/* The 5 Bullet Points Summary */}
                  <ul className="grid grid-cols-1 gap-2 mb-4">
                    {Array.isArray(project.details) ? (
                      project.details.map((bullet, i) => (
                        <li key={i} className="flex items-start text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          <span>{bullet}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-slate-600 text-sm">{project.details}</li>
                    )}
                  </ul>

                  <p className="text-slate-400 text-sm font-bold mt-auto flex items-center group-hover:text-amber-500 transition-colors">
                    View More <span className="ml-2">→</span>
                  </p>
                </div>

              </Link>
            </motion.div>
          ))}

        </div>
      </section>
    </main>
  );
}