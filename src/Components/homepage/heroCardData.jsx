import React, { useRef } from 'react';
import h1 from '../../assets/hero/h1.jpg';
import h2 from '../../assets/hero/h2.jpg';

const heroCardData = [
    {
        imageUrl: h1,
        title: 'Some title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#'
    },
    {
        imageUrl: h2,
        title: 'Some title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#'
    },
    {
        imageUrl: h2,
        title: 'Some title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#'
    },
    {
        imageUrl: h1,
        title: 'Some title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#'
    },
    {
        imageUrl: h1,
        title: 'Some title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#'
    },
];

const HeroCard = ({ heroCardData }) => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft -= 300; // Adjust scroll amount as needed
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += 300; // Adjust scroll amount as needed
        }
    };

    return (
        <div className="container px-4 mr-40 flex-grow w-full py-4 sm:py-16 mx-auto px-0 relative">
            <div className="mx-auto w-full md:w-4/5 px-4">
                <div className="container my-8  relative">
                    <div
                        ref={scrollContainerRef}
                        id="scrollContainer"
                        className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar
                    >
                        {heroCardData.map((card, index) => (
                            <div key={index} className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4">
                                <a href={card.link} className="space-y-4">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <img
                                            className="object-cover shadow-md hover:shadow-xl rounded-lg w-full h-64" // Set fixed height for uniformity
                                            src={card.imageUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="px-4 py-2">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                            <h3 className="font-gordita-bold text-gray-800 text-3xl mb-2">
                                                {card.title}
                                            </h3>
                                        </div>
                                        <div className="text-lg font-gordita-regular text-gray-400">
                                            <p className="">
                                                {card.description}
                                            </p>
                                            <p className="font-medium text-sm text-indigo-600 mt-2">
                                                Read more<span className="text-indigo-600">…</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <button onClick={scrollLeft} className="absolute right-10 bottom-0 bg-gray-200 px-2 py-1 rounded-md">←</button>
                    <button onClick={scrollRight} className="absolute right-0 bottom-0 bg-gray-200 px-2 py-1 rounded-md">→</button>
                </div>
            </div>
        </div>
    );
}

export { HeroCard, heroCardData };
