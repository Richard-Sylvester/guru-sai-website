import Link from "next/link";
import { projectsData } from "@/data/projectsData";

// 1. We added 'async' here!
export default async function ProjectDetail({ params }) {
  
  // 2. We 'await' the params so Next.js has time to read the URL
  const { id } = await params;

  // Find the exact project from our database that matches the URL ID
  const project = projectsData.find((p) => p.id.toString() === id);

  // If they type a wrong URL, show an error safely
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-2xl font-bold text-slate-900">Project not found.</h1>
      </div>
    );
  }

  return (
    <main className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
      
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
        
        {/* Gallery Grid - Nice masonry-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Main Image Banner */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 h-[400px] md:h-[600px] bg-slate-300 rounded-xl overflow-hidden shadow-sm relative">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${project.mainImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </div>

          {/* Sub-Images Map */}
          {project.gallery.map((imgSrc, index) => (
            <div key={index} className="h-64 md:h-80 bg-slate-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
               <div className="absolute inset-0 hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
               {/* Fallback text */}
               <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-200/50 -z-10">Gallery Image {index + 1}</div>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}