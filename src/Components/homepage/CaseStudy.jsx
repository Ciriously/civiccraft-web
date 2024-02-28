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
    title: 'Empowering Municipalities with Cutting-Edge Technology and Data Analytics',
    description: 'We Civiccraft serves as a gateway to innovative solutions designed to transform municipal governance. Leveraging advanced technologies such as Machine Learning and Data Analytics, we enable municipalities to make informed decisions, optimize resource allocation, and enhance service delivery for their communities.',
    image: cs3,
    switchContent: true // Content on the left, image on the right
  },
  {
    title: 'Revolutionizing Farming in Maharashtra: Collaborative Tech Solutions with District Administration - Ratnagiri.',
    description: 'At Civiccraft, where we`re at the forefront of revolutionizing farming practices. In collaboration with the District Agriculture Department of Ratnagiri and the State Agricultural Department of Maharashtra, we`ve developed cutting-edge solutions. Our innovative tech-driven Machine Learning solutions, comprising mobile apps and websites, empower farmers with tools to boost productivity, streamline resource management, and promote sustainable agricultural methods.',
    image: cs4,
    switchContent: false // Image on the left, content on the right
  },
  {
    title: 'Transforming Rural Livelihoods with Tech-Driven Solutions: Partnership with UPSRLM',
    description: 'We at Civiccraft showcases pioneering initiatives in collaboration with the Uttar Pradesh State Rural Livelihood Mission (UPSRLM) to revolutionize workforce management and empower self-help groups through innovative technological and AI-powered solutions. From optimizing resource utilization to fostering sustainable community development, explore how we`re driving positive change in Uttar Pradesh`s rural landscape.',
    image: cs2,
    switchContent: true // Content on the left, image on the right
  },
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
  // Function to replace keywords in title with colored and bold spans
  const highlightKeywords = (title) => {
    let newTitle = title;
    keywords.forEach(({ keyword, color }) => {
      const regex = new RegExp(keyword, 'gi'); // Case-insensitive global match
      newTitle = newTitle.replace(regex, `<strong style="color: ${color};">${keyword}</strong>`);
    });
    return <span dangerouslySetInnerHTML={{ __html: newTitle }} />;
  };


  const gradientColors = [
  ];


  return (
    <div>
      <CSbtns />

      {sectionsData.map((section, index) => (
        <section key={index} className="text-gray-600 bg-gradient-to-b from-white from-30% via-[rgba(247,212,93,0.3)] via-50% to-white to-70% ">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            {section.switchContent ? (
              <>
                <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={section.image}
                  />
                </div>
                <div className={`lg:flex-grow md:w-1/2 lg:pr-24  md:pr-16 flex flex-col md:items-start md:text-left ml-20 mr-20 mb-16 mt-4 md:mb-0 items-center text-center ${gradientColors[index]}`}>
                  <div className="bg-opacity-50 p-6 rounded-lg">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4  font-gordita-medium text-gray-900">
                      {highlightKeywords(section.title)}
                    </h1>
                    <p className="mb-8 font-gordita-regular leading-relaxed ">
                      {section.description}
                    </p>
                    <div className="flex justify-center">
                      <button className="bg-gray-300 text-black text-lg font-gordita-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
                        See Case Study
                        <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={`lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ${gradientColors[index]}`}>
                  <div className="bg-opacity-50 p-6 rounded-lg">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-gordita-medium text-gray-900">
                      {highlightKeywords(section.title)}
                    </h1>
                    <p className="mb-8 w-full font-gordita-regular leading-relaxed">
                      {section.description}
                    </p>
                    <div className="flex justify-center">
                      <button className="bg-gray-300 text-black text-lg font-gordita-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
                        See Case Study
                        <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
                      </button>
                    </div>
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
