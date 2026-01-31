import React from 'react';

function ServiceCard() {
  const services = ["Service 1", "Service 2", "Service 3", "Service 4"];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="h-64 border-3 cursor-pointer border-purple-950 rounded-xl p-6 bg-slate-50 text-shadow-violet-600 flex flex-col justify-between shadow-2xl hover:border-purple-400"
        >
          <div className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Frontend & Backend services {index + 1}
          </div>
          <div className="text-xl font-bold text-gray-800">
            {service}
          </div>
          <div className="text-sm text-gray-500 font-normal">
            Make more use of Frontend and backend applications !
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard;