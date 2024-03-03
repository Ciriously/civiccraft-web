import React, { useRef } from 'react';
import h1 from '../../assets/hero/h1.jpg';
import h2 from '../../assets/hero/h2.jpg';
import scrollLeftIcon from '../../assets/shared/left.png';
import scrollRightIcon from '../../assets/shared/right.png';

const heroCardData = [
    {
        imageUrl: h1,
        title: 'Healthcare',
        description: 'Amidst the pandemic, CivicCraft leverages AI, ML, and GIS to bolster decision-making for civic authorities. Our sophisticated models forecast trends, identify hotspots, and simulate intervention strategies, aiding in targeted responses. By visualizing data on interactive maps, we enable spatial analysis for resource allocation and effective communication. With continuous learning and adaptation, our solutions empower authorities to navigate the crisis and build resilience for the future.        ',
        link: '#',
        color: 'blue'
    },
    {
        imageUrl: h2,
        title: 'Agri-Tech',
        description: 'CivicCraft leads the charge in transforming Indian agriculture through cutting-edge AI, ML, and GIS technologies.Predictive analytics drive optimized crop management, resource allocation, and precision farming practices.Our innovative solutions empower civic authorities with data-driven decision-making models, fostering sustainable agricultural development. Join us in revolutionizing Indian agriculture for increased productivity, resilience, and prosperity',

        link: '#',
        color: 'green'
    },
    // {
    //     imageUrl: 'https://socialmobie.com/public/blog/36/80/01/6aaf80e0988f337553bbb1e6da14b2ce.png',
    //     title: 'Fin-Tech',
    //     description: 'CivicCraft is at the forefront of revolutionizing e-governance through the integration of AI and ML technologies. By seamlessly incorporating predictive analytics and machine learning algorithms, we`re optimizing decision-making processes and enhancing service delivery within government agencies. Our innovative solutions offer a streamlined approach to operations, empowering officials to make informed choices and provide efficient services to citizens. Through this integration, we`re reshaping e-governance, enabling greater efficiency, effectiveness, and citizen engagement. Experience the transformative power of AI and ML with Offcrunch, as we redefine the landscape of e-governance for the betterment of society        ',
    //     link: '#',
    //     color: 'blue'
    // },
    {
        imageUrl: 'https://jungleworks.com/wp-content/uploads/2020/05/shutterstock_1604386048-1-1024x512.jpg',
        title: ' E-governance',
        description: 'CivicCraft is at the forefront of revolutionizing e-governance through the integration of AI and ML technologies. By seamlessly incorporating predictive analytics and machine learning algorithms, we`re optimizing decision-making processes and enhancing service delivery within government agencies. Our innovative solutions offer a streamlined approach to operations, empowering officials to make informed choices and provide efficient services to citizens. Through this integration, we`re reshaping e-governance, enabling greater efficiency, effectiveness, and citizen engagement. Experience the transformative power of AI and ML with CivicCraft , as we redefine the landscape of e-governance for the betterment of society        ',
        link: '#',
        color: 'green'
    },
    {
        imageUrl: 'https://pbs.twimg.com/media/FoR_urDaAAEPps-.jpg',
        title: 'Tourism',
        description: 'CivicCraft utilizes AI and ML to personalize travel experiences, predict trends, and optimize pricing strategies in tourism. Our AI chatbots enhance customer service, while sentiment analysis helps improve online reputation. We develop smart destination management systems for sustainable tourism practices, driving innovation in the industry.',
        link: '#',
        color: 'blue'
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
