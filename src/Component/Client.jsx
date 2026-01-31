import React from 'react';

function Client() {
  const testimonials = [
    {
      initials: "JD",
      name: "John Doe",
      role: "CEO, TechCorp",
      message: "The team delivered exceptional results ahead of schedule. Their attention to detail is unmatched.",
      accent: "bg-blue-500"
    },
    {
      initials: "SS",
      name: "Sarah Smith",
      role: "Product Manager",
      message: "An absolute pleasure to work with. They transformed our vision into a high-quality reality.",
      accent: "bg-purple-500"
    },
    {
      initials: "AM",
      name: "Arjun Mehta",
      role: "Founder, StartupX",
      message: "Professional, responsive, and highly skilled. I would recommend them to anyone looking for excellence.",
      accent: "bg-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 flex flex-col items-center ml-40 mt-6 mb-6 border rounded-md">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">Testimonials</span>
        <h2 className="text-4xl font-extrabold text-slate-900 mt-2">
          Our Clients Say<span className="text-blue-600">...</span>
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {testimonials.map((client, index) => (
          <div 
            key={index} 
            className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
          >
            <div className={`absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-t-2xl ${client.accent}`}></div>
            
            <div className="text-4xl text-slate-200 font-serif absolute top-6 right-8 leading-none group-hover:text-blue-100 transition-colors">
              &ldquo;
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 relative z-10 italic">
              {client.message}
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-bold shadow-inner ${client.accent}`}>
                {client.initials}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {client.name}
                </h4>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-tighter">
                  {client.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Client;