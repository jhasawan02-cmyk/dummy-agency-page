import React from 'react';

function Feedback() {
  return (
    /* justify-center: Centers the whole block on the page */
    /* w-full: Ensures it spans the width to allow centering */
    <div className="flex flex-row justify-center items-start gap-12 p-8 border-t border-gray-100 w-full">
      
      {/* Title section - Fixed width to keep alignment neat */}
      <div className="text-2xl font-bold uppercase tracking-wider whitespace-nowrap w-32">
        Feedback
      </div>

      {/* Content section */}
      <div className="max-w-3xl flex flex-col gap-6">
        <div className="font-sans text-lg italic leading-relaxed text-gray-700 bg-gray-50 p-6 rounded-xl border-l-4 border-orange-300">
          "The level of responsibility and attention to detail provided was exceptional. 
          It is rare to find a partner who operates with such pure intentions and 
          genuine care for the final outcome. Their humble approach made the entire 
          collaboration seamless and productive."
          <span className="block mt-4 text-sm font-bold not-italic uppercase tracking-wide text-gray-500">
            — Senior Project Stakeholder
          </span>
        </div>

        <div className="font-sans text-lg italic leading-relaxed text-gray-700 bg-gray-50 p-6 rounded-xl border-l-4 border-orange-300">
          "Professional, polite, and deeply committed to the task at hand. They took 
          full ownership of the project's challenges, delivering results that 
          surpassed our expectations while maintaining complete transparency."
          <span className="block mt-4 text-sm font-bold not-italic uppercase tracking-wide text-gray-500">
            — Creative Director
          </span>
        </div>
      </div>
    </div>
  );
}

export default Feedback;