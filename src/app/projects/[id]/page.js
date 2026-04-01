"use client";

import { useState, use } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function ProjectDetail({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // 1. Lightbox State
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  // 2. Accordion State (0 means the first section is open by default. Use 'null' if you want them all closed initially)
  const [openSection, setOpenSection] = useState(0);

  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-900">Project not found.</h1>
      </div>
    );
  }

  const allImages = [project.mainImage, ...project.gallery];

  // Lightbox Functions
  const closeLightbox = () => setSelectedIndex(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % allImages.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  // Accordion Toggle Function
  const toggleSection = (index) => {
    // If clicking the one that's already open, close it. Otherwise, open the new one.
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <main className="flex flex-col w-full bg-slate-50 min-h-screen pb-20 relative">
      
      {/* Back Button Bar */}
      <div className="bg-slate-900 w-full pt-28 pb-6 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto">
          <Link href="/projects" className="text-amber-500 hover:text-amber-400 font-bold flex items-center gap-2 transition-colors w-fit">
            <span>←</span> Back to All Projects
          </Link>
        </div>
      </div>

      {/* Main Project Header */}
      <section className="max-w-7xl mx-auto px-4 w-full mt-12 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
              {project.name}
            </h1>
            <p className="text-amber-600 text-xl font-bold">{project.size}</p>
          </div>
          <span className={`px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-lg w-fit ${
            project.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-amber-100 text-amber-800 border border-amber-200'
          }`}>
            {project.status}
          </span>
        </div>
      </section>

      {/* 1. Image Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 w-full mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            onClick={() => setSelectedIndex(0)}
            className="col-span-1 md:col-span-2 lg:col-span-3 h-[400px] md:h-[600px] bg-slate-300 rounded-xl overflow-hidden shadow-sm relative cursor-pointer group"
          >
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${project.mainImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">View Full Screen</span>
            </div>
          </div>
          {project.gallery.map((imgSrc, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedIndex(index + 1)} 
              className="h-64 md:h-80 bg-slate-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative cursor-pointer group"
            >
               <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Details Box (NOW WITH ACCORDION DROP-DOWNS) */}
      <section className="max-w-7xl mx-auto px-4 w-full mb-16">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200">
          
          <div className="mb-10">
            <h2 className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2">Technical Specifications</h2>
            <h3 className="text-3xl font-extrabold text-slate-900">Core Infrastructure & Development Services</h3>
            <div className="w-20 h-1 bg-amber-500 mt-4"></div>
          </div>
          
          {/* The Accordion Container */}
          <div className="flex flex-col gap-4">
            {project.fullScope?.map((section, secIndex) => (
              <div key={secIndex} className="w-full border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                
                {/* Accordion Header (Clickable) */}
                <button 
                  onClick={() => toggleSection(secIndex)}
                  className="w-full flex justify-between items-center bg-slate-50 hover:bg-slate-100 p-6 transition-colors duration-300 text-left"
                >
                  <h4 className="text-xl font-bold text-slate-900 text-amber-600">
                    {section.sectionTitle}
                  </h4>
                  {/* Rotating Chevron Arrow */}
                  <svg 
                    className={`w-6 h-6 text-slate-400 transform transition-transform duration-300 flex-shrink-0 ${openSection === secIndex ? 'rotate-180 text-amber-500' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {/* Accordion Body (Only shows if this section is the open one) */}
                {openSection === secIndex && (
                  <div className="p-6 md:p-8 bg-white border-t border-slate-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex flex-col">
                          <h5 className="text-lg font-bold text-slate-900 mb-2 flex items-start">
                            <span className="text-amber-500 mr-3 mt-1 text-lg leading-none flex-shrink-0">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            </span>
                            {item.title}
                          </h5>
                          <p className="text-slate-600 leading-relaxed border-l-2 border-slate-100 pl-4 ml-2.5">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. THE FULL SCREEN LIGHTBOX MODAL */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox} 
        >
          <button className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors bg-black/50 hover:bg-black p-3 rounded-full" onClick={closeLightbox}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          <button className="absolute left-4 md:left-8 text-white hover:text-amber-500 transition-colors bg-black/50 hover:bg-black p-3 rounded-full" onClick={prevImage}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center px-12 md:px-20" onClick={(e) => e.stopPropagation()}>
            <img src={allImages[selectedIndex]} alt={`Gallery Image ${selectedIndex + 1}`} className="w-full h-full object-contain rounded-md shadow-2xl" />
          </div>

          <button className="absolute right-4 md:right-8 text-white hover:text-amber-500 transition-colors bg-black/50 hover:bg-black p-3 rounded-full" onClick={nextImage}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          <div className="absolute bottom-6 text-white font-semibold tracking-widest text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {allImages.length}
          </div>
        </div>
      )}

    </main>
  );
}