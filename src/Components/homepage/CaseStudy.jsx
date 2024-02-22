import React from 'react';
import arrow from '../../assets/arrowupright.svg';
import cs2 from '../../assets/casestudy/cs2.jpg';
import cs3 from '../../assets/casestudy/cs3.jpg';
import cs4 from '../../assets/casestudy/cs4.jpg';
import { CSbtns } from './CSbtns';

const sectionsData = [
  {
    title: 'Overhauling Healthcare in Maharashtra: Leveraging Tech-Driven ML Solutions with Primary Healthcare Centers.',
    description: 'Through partnerships with the District Healthcare Department of Ratnagiri and the State Healthcare Department of Maharashtra, we have developed groundbreaking tech-driven Machine Learning solutions. These solutions, crafted in collaboration with primary health care centers, provide decision-makers with invaluable data-driven insights. Discover how we`re utilizing technology to transform healthcare delivery, optimize decision-making, and elevate outcomes throughout Maharashtra.',
    button1: 'Button 1',
    image: cs2,
    switchContent: false // Image on the left, content on the right
  },
  {
    title: 'Before they sold out readymade gluten',
    description: 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.',
    image: cs3,
    switchContent: true // Content on the left, image on the right
  },
  {
    title: 'Before they sold out readymade gluten',
    description: 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.',
    image: cs4,
    switchContent: false // Image on the left, content on the right
  }
];

// Define keywords and their associated colors
const keywords = [
  { keyword: 'Maharashtra', color: '#FF5733' },
  { keyword: 'they', color: '#33FF6A' },
  { keyword: 'gluten', color: '#33B4FF' },
  { keyword: 'Healthcare ', color: '#FF33E9' },
];

const CaseStudy = () => {
  // Function to replace keywords in title with colored spans
  const highlightKeywords = (title) => {
    let newTitle = title;
    keywords.forEach(({ keyword, color }) => {
      const regex = new RegExp(keyword, 'gi'); // Case-insensitive global match
      newTitle = newTitle.replace(regex, `<span style="color: ${color};">${keyword}</span>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: newTitle }} />;
  };

  return (
    <div>
      <CSbtns />

      {sectionsData.map((section, index) => (
        <section key={index} className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            {section.switchContent ? (
              <>

                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={section.image}
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24  md:pr-16 flex flex-col md:items-start md:text-left ml-20 mr-20 mb-16 mt-4 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4  font-gordita-medium text-gray-900">
                    {highlightKeywords(section.title)}
                  </h1>
                  <p className="mb-8  font-gordita-regular leading-relaxed">
                    {section.description}
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-gray-300 text-black text-lg font-gordita-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
                      See Case Study
                      <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-gordita-medium text-gray-900">
                    {highlightKeywords(section.title)}
                  </h1>
                  <p className="mb-8 font-gordita-regular leading-relaxed">
                    {section.description}
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-gray-300 text-black text-lg font-gordita-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
                      See Case Study
                      <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
                    </button>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={section.image}
                  />
                </div>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default CaseStudy;
