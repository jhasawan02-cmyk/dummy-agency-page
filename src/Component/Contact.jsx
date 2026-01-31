import React from "react";

function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 ml-140 w-md border rounded-md mt-6 mb-6">
      <div className="w-full max-w-md bg-white p-8 border border-gray-200 shadow-s rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 ">Contact Us</h2>
        
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-sm  font-semibold text-gray-600 mb-1">Name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              className="px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">Email</label>
            <input 
              type="email" 
              placeholder="name@email.com" 
              className="px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">Contact</label>
            <input 
              type="number"  
              placeholder="Your contact number" 
              className="px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none "
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">Location</label>
            <input 
              type="text" 
              placeholder="Delhi, India" 
              className="px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">Message</label>
            <textarea 
              rows={4} 
              placeholder="Your message" 
              className="px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900 transition-colors font-medium"
          >
            Submit
          </button>
          <p>*Average response in 12 working hours</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;