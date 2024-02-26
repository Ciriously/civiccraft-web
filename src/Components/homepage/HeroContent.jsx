import React from 'react';
import Navbar from '../../shared/Navbar';
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
      <Navbar />
      <section className="flex items-center justify-center h-screen bg-gradient-to-b from-white from-10% via-[rgba(247,212,93,0.5)] via-30% to-white to-100% ">

        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
          <div className="flex w-full mx-auto text-left">
            <div className="relative inline-flex items-center mx-auto align-middle">
              <div className="text-center">
                <h1 className="max-w-6xl text-6xl font-gordita-bold leading-none tracking-tighter text-neutral-600 md:text-6xl lg:text-8xl lg:max-w-7xl">
                  Transforming Governance <br className="lg:hidden" /> through <br className="hidden lg:inline" /> Digital Solutions
                </h1>
                <p className="max-w-2xl mx-auto mt-14  font-gordita-regular text-xl leading-relaxed text-gray-500">
                  We are an independent nonprofit institute developing AI-based solutions for
                  undeserved communities in developing countries.
                </p>
                <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <button className="px-5 py-4 w-auto mt-6 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#F78D4C] lg:px-10 rounded-3xl hover:[F78D4C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F78D4C] animate-spin">
                      Get Started
                    </button>

                  </div>
                  <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container my-auto bg-white max-w-full'>
        <HeroCard heroCardData={heroCardData} />
      </div>


    </div>


  );
}

export default HeroContent;



{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12">
<path d="M16.59 8L12 12.59 7.41 8 6 9.41l6 6 6-6z" />
</svg> */}