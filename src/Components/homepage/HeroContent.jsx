import React from 'react';
import Navbar from '../../elements/Navbar';
import './scroll.css';
import h1 from '../../assets/hero/h1.jpg';
import h2 from '../../assets/hero/h2.jpg';

const cardData = [
  {
    image: h1,
    title: 'Healthcare',
    description: 'Decision-making support and models to help civic authorities respond to the pandemic.',
    borderColor: 'border-red-500' // Customizable border color
  },
  {
    image: h2,
    title: 'Agri-Tech',
    description: 'Decision-making support and models to help civic authorities respond to the pandemic.',
    borderColor: 'border-blue-500' // Customizable border color
  },
  {
    image: 'https://images.unsplash.com/photo-1569396116180-210c182bedb8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Data-Driven',
    description: 'Subtitle for Card 1',
    borderColor: 'border-purple-500' // Customizable border color
  },
  // Add two more cards here
  {
    image: 'https://images.unsplash.com/photo-1708201354289-63be47c13eb3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Title',
    description: 'Description',
    borderColor: 'border-yellow-500' // Customizable border color
  },
  {
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Title',
    description: 'Description',
    borderColor: 'border-purple-500' // Customizable border color
  }
];

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

      <div className="flex mt-16 flex-col items-center justify-center ml-36">
        {/* Title and subtitle */}
        <h1 className="text-center text-5xl font-gordita-bold ">Transforming Governance through Digital Solutions</h1>
        <p className="text-lg text-center mt-6 font-gordita-regular">We are an independent nonprofit institute developing AI-based solutions for underserved communities in developing countries.</p>

        {/* Cards section with scroll feature */}
        <div className="cardScroll overflow-x-auto mt-14">
          <div className="flex justify-start w-full">
            {cardData.map((card, index) => (
              <div key={index} className={`max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-2 bg-white rounded-lg overflow-hidden flex-shrink-0`}>

                <div className="h-80 w-90 bg-gray-300">
                  <img className={`h-full w-full object-cover border-b-8 ${card.borderColor}`} src={card.image} alt={`Card Header ${index + 1}`} />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl mt-5 mb-5 text-[#40393B] font-bold font-gordita-medium">{card.title}</h2>
                    <p className="mt-2 text-[#40393B] text-md font-gordita-regular">{card.description}</p>
                  </div>
                  <svg className="w-10 h-8 mb-16 text-black fill-current transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.293 4.293a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4zM16 10a1 1 0 01-1 1H4a1 1 0 010-2h11a1 1 0 011 1z" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-downs" onClick={handleScrollDown}>
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
