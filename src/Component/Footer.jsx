import React from "react";
import CopyRight from "./CopyRight";

function Footer() {
  return (
    /* Reduced overall padding from p-5 to py-4 */
    <div className="border-t border-gray-300 bg-amber-200 px-10 py-4">
      {/* Reduced mb-12 to mb-4 to bring columns and copyright closer */}
      <div className="grid grid-cols-3 items-center w-full mb-4">
        {/* Left Side: Name & Address */}
        <div className="flex flex-col">
          <h2 className="text-md font-bold">Dummy-Agency</h2>
          <p className="text-xs">123 Business Avenue</p>
          <p className="text-xs">City, State, Zip</p>
        </div>

        {/* Middle Side: Logo (Reduced image height and padding) */}
        <div className="flex justify-center">
          <img
            alt="logo"
            className="h-18 w-auto object-contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThx8bw8l4fnelyUxI37n95JH2k0Gqev9mJbA&s"
          />
        </div>

        {/* Right Side: Contact Details */}
        <div className="flex flex-col text-right">
          <h2 className="text-md font-bold uppercase">Contact</h2>
          <p className="text-xs">+1 234 567 890</p>
          <p className="text-xs">contact@company.com</p>
        </div>
      </div>

      {/* Bottom Section: Copyright (Reduced top padding) */}
      <div className="">
        <CopyRight />
      </div>
    </div>
  );
}

export default Footer;
