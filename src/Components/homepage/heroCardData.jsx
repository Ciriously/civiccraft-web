import React, { useRef } from 'react';
import h1 from '../../assets/hero/h1.jpg';
import h2 from '../../assets/hero/h2.jpg';
import scrollLeftIcon from '../../assets/shared/left.png';
import scrollRightIcon from '../../assets/shared/right.png';

const heroCardData = [
    {
        imageUrl: h1,
        title: 'Healthare',
        description: 'Decision-making support and models to help civic authorities respond to the pandemic.',
        link: '#',
        color: 'blue'
    },
    {
        imageUrl: h2,
        title: 'Agri-Tech',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#',
        color: 'green'
    },
    {
        imageUrl: h1,
        title: 'Some title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#',
        color: 'blue'
    },
    {
        imageUrl: h2,
        title: 'Some title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#',
        color: 'green'
    },
    {
        imageUrl: h1,
        title: 'Some title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#',
        color: 'blue'
    },
    {
        imageUrl: h2,
        title: 'Some title goes here',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam',
        link: '#',
        color: 'green'
    }
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
        <div className="container px-2 flex-grow w-full py-4 sm:py-16 mx-auto px-0 relative ">
            <div className="mx-auto w-full md:w-11/13 px-2">
                <div className="container my-8 relative">
                    <div
                        ref={scrollContainerRef}
                        id="scrollContainer"
                        className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar
                    >
                        {heroCardData.map((card, index) => (
                            <div key={index} className="flex-none w-96 md:w-2/5 mr-8 md:pb-4">
                                <a href={card.link} className="space-y-4">
                                    <div className="aspect-w-16 aspect-h-8">
                                        <img
                                            className={`object-cover shadow-md hover:shadow-xl rounded-lg w-full h-96 border-b-8 border-${card.color}-500`} // Set fixed height for uniformity and add border to image
                                            src={card.imageUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className="px-4 py-2">
                                        <div className="text-lg leading-6 font-medium space-y-1 flex items-center justify-between">
                                            <h3 className="font-gordita-bold text-gray-800 text-xl mb-2">
                                                {card.title}
                                            </h3>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="h-5 w-5  ml-44">
                                                <path style={{ fill: '#232326' }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
                                            </svg>
                                        </div>
                                        <div className="text-lg font-gordita-regular text-gray-400">
                                            <p className="">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <img onClick={scrollLeft} className="absolute w-auto h-12 right-10 bottom-15 px-8 py-1 rounded-md" src={scrollLeftIcon} alt="Scroll Left" />
                    <img onClick={scrollRight} className="absolute w-auto h-12 right-0 px-2 py-1 rounded-md" src={scrollRightIcon} alt="Scroll Right" />
                </div>
            </div>
        </div>
    );
}

export { HeroCard, heroCardData };
