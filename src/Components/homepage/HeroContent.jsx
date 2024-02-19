import React from 'react';
import Navbar from '../../elements/Navbar';
import './scroll.css';
import h1 from '../../assets/hero/h1.jpg';
import h2 from '../../assets/hero/h2.jpg';

const cardData = [
  {
    image: h1,
    title: 'Healthcare',
    description: 'Decision-making support and models to help civic authorities respond to the pandemic.'
  },
  {
    image: h2,
    title: 'Agri-Tech',
    description: 'Decision-making support and models to help civic authorities respond to the pandemic.'
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Data-Driven',
    description: 'Subtitle for Card 1'
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

      <div className="flex mt-8 flex-col items-center justify-center ml-40">
        {/* Title and subtitle */}
        <h1 className="text-center text-4xl font-bold font-inter">Transforming Governance through Digital Solutions</h1>
        <p className="text-lg text-center mt-6 font-inter">We are an independent nonprofit institute developing AI-based solutions for underserved communities in developing countries.</p>

        {/* Cards section */}
        <div className="flex justify-center w-125 mr-60 mt-14">
          {cardData.map((card, index) => (
            <div key={index} className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-4 bg-white rounded-lg overflow-hidden">
              <div className="h-96 bg-gray-300">
                <img className="h-full w-full object-cover" src={card.image} alt={`Card Header ${index + 1}`} />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl mt-5 mb-5 text-[#40393B] font-bold">{card.title}</h2>
                  <p className="mt-2 text-[#40393B] text-lg">{card.description}</p>
                </div>
                <svg className="w-10 h-8 mb-16 text-black fill-current transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.293 4.293a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4zM16 10a1 1 0 01-1 1H4a1 1 0 010-2h11a1 1 0 011 1z" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button to scroll down */}
      <div className="scroll-downs" onClick={handleScrollDown}>
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
