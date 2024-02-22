import React from 'react';
import Navbar from '../../elements/Navbar';
import './scroll.css';
import { HeroCard, heroCardData } from './heroCardData';

const HeroContent = () => {
  const handleScrollDown = () => {
    // Smooth scroll to the next section
    window.scrollTo({
      top: window.innerHeight, // Scrolls down by the height of the viewport
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      <div className="flex mt-16  flex-col items-center justify-center ml-4 md:ml-36">
        {/* Title and subtitle */}
        <h1 className="text-center text-3xl md:text-5xl font-gordita-bold ">Transforming Governance through  <span className='bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-violet-500 via-purple-400 to-blue-400 bg-clip-text text-transparent'>Digital Solutions.</span> </h1>
        <p className="text-lg text-center mt-6 font-gordita-regular">We are an independent nonprofit institute developing AI-based solutions for underserved communities in developing countries.</p>

        {/* Cards section with scroll feature */}
        <HeroCard heroCardData={heroCardData} />
      </div>

      <div className=" mt-16 flex justify-center">
        <button type="button" onClick={handleScrollDown} className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12">
            <path d="M16.59 8L12 12.59 7.41 8 6 9.41l6 6 6-6z" />
          </svg>
        </button>
      </div>
    </div>

  );
}

export default HeroContent;