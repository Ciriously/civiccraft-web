import React from 'react';
import arrow from '../../assets/arrowupright.svg';
import cs2 from '../../assets/casestudy/cs2.jpg';
import cs3 from '../../assets/casestudy/cs3.jpg';
import cs4 from '../../assets/casestudy/cs4.jpg';

const caseStudies = [
  {
    title: 'Case Study Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt magna eget ex fermentum consequat.',
    image: cs2,
    reverse: false // Image on the left
  },
  {
    title: 'Case Study Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt magna eget ex fermentum consequat.',
    image: cs3,
    reverse: true // Image on the right
  },
  {
    title: 'Case Study Title 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt magna eget ex fermentum consequat.',
    image: cs4,
    reverse: false // Image on the left
  },
  {
    title: 'Case Study Title 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt magna eget ex fermentum consequat.',
    image: cs4,
    reverse: true // Image on the right
  }
];

const CaseStudy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {caseStudies.map((caseStudy, index) => (
        <div key={index} className={`flex flex-wrap items-center mb-8 ${caseStudy.reverse ? 'flex-row-reverse' : ''}`}>
          <div className="w-full md:w-1/2">
            <div className="p-8">
              <h1 className="text-3xl font-bold">{caseStudy.title}</h1>
              <p className="text-gray-700 mt-4">{caseStudy.description}</p>
              <button className="bg-gray-300 text-black text-lg font-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
                Our Approach
                <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="p-8">
              <img src={caseStudy.image} alt="Case Study Image" className="mx-auto max-w-full h-auto" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CaseStudy;
