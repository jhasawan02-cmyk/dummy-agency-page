import React from 'react';

function CopyRight() {
  return (
    <div className='w-full py-4 text-center text-xs uppercase tracking-widest text-gray-600'>
      © {new Date().getFullYear()} All Rights Reserved | Dummy-Agency
    </div>
  );
}

export default CopyRight;