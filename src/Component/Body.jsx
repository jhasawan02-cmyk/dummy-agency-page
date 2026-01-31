import React from 'react';
import Service from './Service';
import OurWork from './OurWork';
import Feedback from './Feedback';

function Body() {
  return (
    /* flex-grow ensures this container expands to push the footer down */
    /* flex-col with gap-16 provides consistent vertical spacing between sections */
    <div className=' w-full flex flex-col gap-16 py-12 '>
        <Service />
        <OurWork />
        <Feedback />
    </div>
  );
}

export default Body;