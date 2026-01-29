import React from 'react';
import CopyRight from './CopyRight';

function Footer() {
  return (
    <div className='border-t border-gray-300 bg-amber-200 p-10 pb-4'>
      {/* Top Section: Three Column Info */}
      <div className='grid grid-cols-3 items-start w-full mb-12'>
        
        {/* Left Side: Name & Address */}
        <div className='flex flex-col'>
          <h2 className='text-lg font-bold'>Your Name</h2>
          <p className='text-sm'>123 Business Avenue</p>
          <p className='text-sm'>City, State, Zip</p>
        </div>

        {/* Middle Side: Logo */}
        <div className='flex justify-center'>
          <div className='font-bold text-2xl tracking-widest'>LOGO</div>
        </div>

        {/* Right Side: Contact Details */}
        <div className='flex flex-col text-right'>
          <h2 className='text-lg font-bold uppercase'>Contact</h2>
          <p className='text-sm'>+1 234 567 890</p>
          <p className='text-sm'>contact@company.com</p>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className=' pt-4'>
        <CopyRight />
      </div>
    </div>
  );
}

export default Footer;