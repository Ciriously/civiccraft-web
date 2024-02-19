import React from 'react';
import arrow from '../../assets/arrowupright.svg';

const CaseStudy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* First Case Study */}
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold">Case Study Title</h1>
            <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt magna eget ex fermentum consequat.</p>
            <button className="bg-gray-300 text-black text-lg font-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
              Our Approach
              <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Case Study Image" className="mx-auto" />
        </div>
      </div>
      
      {/* Second Case Study */}
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Case Study Image" className="mx-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold">Case Study Title</h1>
            <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt magna eget ex fermentum consequat.</p>
            <button className="bg-gray-300 text-black text-lg font-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
              Our Approach
              <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Third Case Study */}
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold">Case Study Title</h1>
            <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt magna eget ex fermentum consequat.</p>
            <button className="bg-gray-300 text-black text-lg font-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
              Our Approach
              <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Case Study Image" className="mx-auto" />
        </div>
      </div>
       {/* fourth Case Study */}
       <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Case Study Image" className="mx-auto" />
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold">Case Study Title</h1>
            <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt magna eget ex fermentum consequat.</p>
            <button className="bg-gray-300 text-black text-lg font-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
              Our Approach
              <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
