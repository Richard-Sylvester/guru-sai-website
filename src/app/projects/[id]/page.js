"use client";

import { useState, use } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function ProjectDetail({ params }) {
  // 1. Unwrap the dynamic URL parameters for a Client Component
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // 2. Lightbox State Management
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Find the exact project
  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-900">Project not found.</h1>
      </div>
    );
  }

  // Combine the main image and gallery images into one smooth slideshow array
  const allImages = [project.mainImage, ...project.gallery];

  // Lightbox Navigation Functions
  const closeLightbox = () => setSelectedIndex(null);
  
  const nextImage = (e) => {
    e.stopPropagation(); // Stops the click from accidentally closing the background
    setSelectedIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
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

      {/* Details Box */}
      <section className="max-w-7xl mx-auto px-4 w-full mb-16">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-4">Scope of Work executed</h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-4xl">
            {project.details}
          </p>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Main Image Banner - Now Clickable (Index 0) */}
          <div 
            onClick={() => setSelectedIndex(0)}
            className="col-span-1 md:col-span-2 lg:col-span-3 h-[400px] md:h-[600px] bg-slate-300 rounded-xl overflow-hidden shadow-sm relative cursor-pointer group"
          >
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${project.mainImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">View Full Screen</span>
            </div>
          </div>

          {/* Sub-Images Map - Now Clickable (Index 1+) */}
          {project.gallery.map((imgSrc, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedIndex(index + 1)} // +1 because the main image is index 0
              className="h-64 md:h-80 bg-slate-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative cursor-pointer group"
            >
               <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}

        </div>
      </section>

      {/* 3. THE FULL SCREEN LIGHTBOX MODAL */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox} // Clicking the background closes it
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors bg-black/50 hover:bg-black p-3 rounded-full"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          {/* Previous Arrow */}
          <button 
            className="absolute left-4 md:left-8 text-white hover:text-amber-500 transition-colors bg-black/50 hover:bg-black p-3 rounded-full"
            onClick={prevImage}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          {/* The Actual Image */}
          <img 
            src={allImages[selectedIndex]} 
            alt={`Gallery Image ${selectedIndex + 1}`} 
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevents clicking the image from closing the modal
          />

          {/* Next Arrow */}
          <button 
            className="absolute right-4 md:right-8 text-white hover:text-amber-500 transition-colors bg-black/50 hover:bg-black p-3 rounded-full"
            onClick={nextImage}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 text-white font-semibold tracking-widest text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {allImages.length}
          </div>
        </div>
      )}

    </main>
  );
}