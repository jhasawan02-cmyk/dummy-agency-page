import React from 'react';
import Header from './Component/Header';
import Body from './Component/Body'; // Assuming Body contains your sections
import Footer from './Component/Footer';

function App() {
  return (
    /* min-h-screen: ensures the page is at least the full height of the browser */
    /* flex-col: stacks header, body, and footer vertically */
    <div className='flex flex-col min-h-screen w-full'>
      
      {/* Header stays at the top */}
      <Header />
      
      {/* Main/Body takes maximum available space */}
      <main className='flex'>
        <Body />
      </main>

      {/* Footer stays at the lowest portion of the page */}
      <Footer />
      
    </div>
  );
}

export default App;