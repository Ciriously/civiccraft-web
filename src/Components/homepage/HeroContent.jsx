import React from 'react';
import Navbar from '../../elements/Navbar';

const HeroContent = () => {
  return (
    <div>
    {/* Navbar component */}
    <Navbar />

    <div className="landing-page flex mt-12 flex-col items-center justify-center">
      {/* Title and subtitle */}
      
      <h1 className="title text-center text-4xl font-bold font-arimo">Transforming Governance through Digital Solutions</h1>
      <p className="subtitle text-center font-arimo">We are an independent nonprofit institute developing AI-based solutions for underserved communities in developing countries.</p>
      
      {/* Cards section */}
      <div className="flex justify-center mt-8">
        {/* Card 1 */}
        <div className="max-w-md mx-4 bg-white rounded-lg shadow-md overflow-hidden"> 
          <div className="h-72 bg-gray-300"> 
            <img className="h-full w-full object-cover" src="https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Header 1" />
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Card Title 1</h2>
              <p className="mt-2 text-gray-600">Subtitle for Card 1</p>
            </div>
            <svg className="w-6 h-6 text-gray-400 fill-current transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.293 4.293a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4zM16 10a1 1 0 01-1 1H4a1 1 0 010-2h11a1 1 0 011 1z"/></svg>
          </div>
        </div>
        {/* Card 2 */}
        <div className="max-w-md mx-4 bg-white rounded-lg shadow-md overflow-hidden"> 
          <div className="h-72 bg-gray-300"> {/* Make the card taller */}
            <img className="h-full w-full object-cover" src="https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Header 1" />
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Card Title 1</h2>
              <p className="mt-2 text-gray-600">Subtitle for Card 1</p>
            </div>
            <svg className="w-6 h-6 text-gray-400 fill-current transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.293 4.293a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4zM16 10a1 1 0 01-1 1H4a1 1 0 010-2h11a1 1 0 011 1z"/></svg>
          </div>
        </div>
        {/* Card 3 */}
        <div className="max-w-md mx-4 bg-white rounded-lg shadow-md overflow-hidden"> 
          <div className="h-72 bg-gray-300"> 
            <img className="h-full w-full object-cover" src="https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card Header 1" />
          </div>
          <div className="p-4 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Card Title 1</h2>
              <p className="mt-2 text-gray-600">Subtitle for Card 1</p>
            </div>
            <svg className="w-6 h-6 text-gray-400 fill-current transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.293 4.293a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4zM16 10a1 1 0 01-1 1H4a1 1 0 010-2h11a1 1 0 011 1z"/></svg>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
