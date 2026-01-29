import React from "react";

function OurWork() {
  return (
    <div className="flex flex-row items-start gap-8 p-8">
      
      <div className="text-2xl font-bold uppercase tracking-wider whitespace-nowrap">
        Our Work
      </div>

      
      <div className="max-w-3xl">
        <div className="font-sans text-lg leading-relaxed bg-orange-100 p-8 rounded-2xl border border-orange-200 text-gray-800">
          <p className="mb-4">
            We believe that impactful work starts with a foundation of integrity
            and a deep sense of responsibility toward our clients and community.
            Our approach isn’t just about technical precision; it’s about aligning
            our intentions with your goals to ensure every project we undertake
            serves a meaningful purpose. We prioritize clear communication and
            humble collaboration, treating every challenge as an opportunity to
            deliver results that are both reliable and refined.
          </p>
          <p>
            Our portfolio represents a commitment to excellence that goes beyond
            surface-level aesthetics. We dive deep into the mechanics of every
            problem, ensuring that every deliverable is a reflection of our 
            dedication to quality and our respect for the trust you place in us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurWork;