import React from 'react';
import arrow from '../../assets/arrowupright.svg';
import cs2 from '../../assets/casestudy/cs2.jpg';
import cs3 from '../../assets/casestudy/cs3.jpg';
import cs4 from '../../assets/casestudy/cs4.jpg';

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
          <img src={cs2} alt="Case Study Image" className="mx-auto" style={{ width: '80%', height: '80%' }} />
        </div>
      </div>
      
      {/* Second Case Study */}
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src={cs3} alt="Case Study Image" className="mx-auto" style={{ width: '80%', height: '80%' }} />
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
          <img src={cs4} alt="Case Study Image" className="mx-auto" style={{ width: '80%', height: '80%' }} />
        </div>
      </div>
      
      {/* Fourth Case Study */}
      <div className="flex flex-wrap items-center mb-8">
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <img src={cs4} alt="Case Study Image" className="mx-auto" style={{ width: '80%', height: '80%' }} />
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
