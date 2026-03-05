import Link from "next/link";

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
    status: "On-Going",
    size: "23 Acre Development",
    details: "BIAPPA approved plots. Executed paved roads, kerbs, drains, plumbing works, and parks.",
  },
  {
    id: 5,
    name: "Century Sports Village, Devanahalli",
    status: "On-Going",
    size: "51 Acre Development",
    details: "Paved & asphalt roads, kerbs, drains, plumbing works, external electrical works, overhead tank, parks & sports amenities.",
  }
];

export default function Projects() {
  return (
    <main className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Header */}
      <section className="w-full bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Our Projects</h1>
        <p className="text-slate-400 mt-4 text-lg">Over 270 acres of premium plotted development executed.</p>
        <div className="w-16 h-1 bg-amber-500 mx-auto mt-6"></div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 2. THE MAP FUNCTION: Looping through our data */}
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg transition flex flex-col">
              
              {/* Image Placeholder */}
              <div className="h-48 bg-slate-200 w-full relative">
                {/* Status Badge */}
                <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded ${
                  project.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                <p className="text-amber-600 font-semibold text-sm mb-4">{project.size}</p>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {project.details}
                </p>
              </div>
              
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}