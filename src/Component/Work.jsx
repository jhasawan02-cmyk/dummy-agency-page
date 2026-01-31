import React from 'react';

function Work() {
  const projects = [
    {
      category: "Development",
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      description: "A full-scale retail solution with real-time inventory tracking."
    },
    {
      category: "Branding",
      title: "Modern Identity",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      description: "Complete visual redesign focusing on clean, professional aesthetics."
    },
    {
      category: "UI/UX",
      title: "Finance App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      description: "A user-centric dashboard designed for complex data analysis."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-24 px-6 ml-15">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Portfolio</h2>
            <h1 className="text-5xl font-black text-slate-900">
              Selected <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Work.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-lg max-w-sm">
            We focus on precision, quality, and the small details that make a big difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl bg-slate-100 aspect-4/3 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-tighter group-hover:gap-4 transition-all">
                View Project <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;