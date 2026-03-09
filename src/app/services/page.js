import Link from "next/link";

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
    description: "Industrial-grade mild steel fabrication for heavy infrastructure, structural supports, and custom engineering requirements within our plotted developments.",
    icon: "⚙️",
  }
];

export default function Services() {
  return (
    <main className="flex flex-col w-full bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <section className="w-full bg-slate-900 py-20 text-center">
        
        {/* Step 1: Headline (Fades in immediately) */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight animate-fade-in-up">
          Our Services
        </h1>
        
        {/* Step 2: Subtitle (Waits 0.3 seconds) */}
        <p 
          className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto px-4 animate-fade-in-up" 
          style={{ animationDelay: '0.3s' }}
        >
            Delivering 100% Top Quality turnkey infrastructure solutions across the B2B sector.
        </p>
        
        {/* Step 3: Amber Underline (Waits 0.6 seconds) */}
        <div 
          className="w-16 h-1 bg-amber-500 mx-auto mt-6 animate-fade-in-up" 
          style={{ animationDelay: '0.6s' }}
        ></div>
        
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* 2. THE MAP FUNCTION: Dynamically creating the Service Cards */}
          {servicesData.map((service) => (
            <div key={service.id} className="bg-white p-10 rounded-lg shadow-sm border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              
              {/* Icon Container */}
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm">
                 {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              
            </div>
          ))}

        </div>

        {/* Call to Action Row */}
        <div className="mt-20 bg-slate-100 p-8 rounded-lg text-center border border-slate-200">
           <h3 className="text-2xl font-bold text-slate-900 mb-4">Need a Reliable Execution Partner?</h3>
           <p className="text-slate-600 mb-6 max-w-2xl mx-auto">Contact us today to discuss your next major infrastructure or plotted development project.</p>
           <Link href="/contact" className="inline-block bg-amber-500 text-slate-900 px-8 py-3 rounded font-bold hover:bg-amber-400 transition">
              Get in Touch
            </Link>
        </div>

      </section>

    </main>
  );
}