import React from 'react';

function WhyUs() {
  const features = [
    {
      title: "Integrity",
      description: "We operate with pure intentions and transparent processes, ensuring every blunder is handled with honesty and responsibility.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m17.236 0 [3.04] a11.952 11.952 0 00-5.38 4.975 11.952 11.952 0 00-5.38-4.975"
    },
    {
      title: "Human-Centric",
      description: "We prioritize being humble and responsible toward the families and communities we serve.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Analytical Excellence",
      description: "We dive deep into complex problems, using detailed analysis to strip away ego and find intelligent solutions.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  ];

  return (
    <div className="min-h-screen flex items-center bg-white py-16 px-8 ml-13">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6">
          <h2 className="text-blue-600 font-bold uppercase tracking-tight">Why Choose Us?</h2>
          <h3 className="text-5xl font-black text-slate-900 leading-tight">
            We value <span className="text-blue-600 underline decoration-4 underline-offset-8">honesty</span> over perfection.
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            Our approach combines rigorous analysis with a grounded, humble perspective to deliver results that actually matter.
          </p>
          <div className="pt-4">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
              Learn Our Values
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex gap-6"
            >
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default WhyUs;