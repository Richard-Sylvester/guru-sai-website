export default function About() {
  return (
    <main className="flex flex-col w-full bg-white">
      {/* Header Banner */}
      <section className="w-full bg-slate-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight animate-fade-in-up">
          About Us
        </h1>
        <div 
          className="w-16 h-1 bg-amber-500 mx-auto mt-6 animate-fade-in-up" 
          style={{ animationDelay: '0.3s' }}
        ></div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">A Legacy of Quality Since 2020</h2>
        <div className="prose prose-lg text-slate-600 space-y-6">
          <p>
            Guru Sai Constructions, Established in the year 2020 has completed construction projects in Bengaluru majorly for Century Real Estate, providing all scope of construction related works.
          </p>
          <p>
            Since then, our focal point has been on serving property management firms with developing premium plots, civil constructions, and fabrication works. We have progressed remarkably in the field of construction. Our unique business model has proven our expertise in achieving expected quality and desired economy.
          </p>
          <p>
            We have progressed remarkably in the field of construction. Our business model has proven our expertise in achieving expected Quality and desired economy. All raw materials procured are checked at our quality inspection unit to ensure quality for our clients. We undertake turnkey plotted development projects. We have completed plotted development works for around 270 acres of area.
          </p>
        </div>
      </section>
    </main>
  );
}