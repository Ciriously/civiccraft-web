import React from 'react';
import arrow from '../../assets/arrowupright.svg';
import h1 from '../../assets/hero/h1.jpg';
import h2 from '../../assets/hero/h2.jpg';

const heroCardData = [
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

    {
        image: 'https://images.unsplash.com/photo-1708201354289-63be47c13eb3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Title',
        description: 'Description',
        borderColor: 'border-yellow-500' // Customizable border color
    },
    {
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Titlvvve',
        description: 'Description',
        borderColor: 'border-purple-500' // Customizable border color
    }
];

const HeroCard = ({ image, title, description, borderColor }) => (
    <div className={`max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-2 bg-white rounded-lg overflow-hidden flex-shrink-0`}>
        <div className="h-80 w-4/5 md:w-full bg-gray-300">
            <img className={`h-full w-full object-cover border-b-8 ${borderColor}`} src={image} alt={`Card Header`} />
        </div>
        <div className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3">
                <h2 className="text-2xl mt-5 mb-5 text-[#40393B] font-bold font-gordita-medium">{title}</h2>
                <p className="mt-2 text-[#40393B] text-md font-gordita-regular">{description}</p>
            </div>
            <svg className="hidden md:block w-10 h-8 mb-16 text-black fill-current transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.293 4.293a1 1 0 011.414 1.414L6.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4zM16 10a1 1 0 01-1 1H4a1 1 0 010-2h11a1 1 0 011 1z" /></svg>
        </div>
    </div>
);

export { HeroCard, heroCardData };
