import React from 'react';
import arrow from '../../assets/arrowupright.svg';
import AI from '../../assets/approach/AI.gif';
import rocket from '../../assets/approach/rocket.gif';
import teamwork from '../../assets/approach/teamwork.gif';

const Approach = () => {
    // Define an array to store card data
    const cards = [
        {
            gif: AI,
            title: "Transformative AI Solutions",
            description: "We combine rigorous research with real-world data to develop impactful solutions.",
        },
        {
            gif: teamwork,
            title: "Collaborative Approach",
            description: "We prioritize the voices and needs of the communities we partner with.",
        },
        {
            gif: rocket,
            title: "Meaningful Impact",
            description: "We focus on solutions that make a real difference in people's lives",
        },
    ];

    return (
        <>
            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-3xl font-gordita-bold md:text-5xl md:leading-tight">
                        Automate. Integrate.Streamline.
                    </h2>
                    <p className="max-w-126 mt-6 font-gordita-regular text-gray-600">
                        At CivicCraft, we address pressing societal issues where AI presents transformative possibilities.
                        We integrate rigorous scientific inquiry with empathetic collaboration, ensuring that the voices and
                        needs of the communities we serve guide our initiatives toward meaningful impact.
                    </p>
                    <p className="mt-4 font-gordita-regular text-gray-600">
                        We are currently building AI-based solutions in the agriculture and health domains, such as pest management for cotton farms, maternal,
                        newborn and child health and tuberculosis.
                    </p>
                </div>
                {/* End Title */}
                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Map over the cards array to render each card */}
                    {cards.map((card, index) => (
                        <a
                            key={index}
                            className="group flex flex-col h-full border-4 border-yellow-200 hover:border-yellow-500 hover:shadow-lg shadow-yellow-700 transition-all duration-300 rounded-xl p-5 focus:outline-none focus:ring-1 focus:ring-yellow-600"
                            href="#"
                        >
                            <div className="aspect-w-16 aspect-h-11">
                                <img
                                    className="w-full object-cover rounded-xl"
                                    src={card.gif}
                                    alt="GIF Description"
                                />
                            </div>
                            <div className="my-6">
                                <h3 className="text-xl font-gordita-medium text-gray-800">
                                    {card.title}
                                </h3>
                                <p className="mt-5 font-gordita-regular text-gray-600">
                                    {card.description}
                                </p>
                            </div>
                        </a>
                    ))}
                    {/* End Map */}
                </div>
                {/* End Grid */}
                {/* Card */}
                <div className="mt-12 text-center">
                    <button className="bg-[#F78D4C] text-black text-lg font-gordita-bold py-4 px-6 rounded-3xl mt-8 flex items-center mx-auto">
                        Our Approach
                        <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
                    </button>
                </div>
                {/* End Card */}
            </div>
            {/* End Card Blog */}
        </>
    );
}

export default Approach;
