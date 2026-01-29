import React from 'react'
import ServiceCard from './ServiceCard'

function Service() {
  return (
    <div className='py-16 px-8 flex flex-col items-center w-full'>
      {/* Section Title */}
      <h1 className='text-3xl font-bold uppercase tracking-widest border-b-2 border-orange-600 pb-2 mb-12 text-blue-800'>
        Our Services
      </h1>

      {/* Cards Container */}
      <div className='w-full max-w-7xl px-4 border-3 rounded-2xl border-slate-600 '>
        <ServiceCard />
      </div>
    </div>
  )
}

export default Service