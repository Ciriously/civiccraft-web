import React from 'react';
import arrow from '../../assets/arrowupright.svg';

const Approach = () => {
    // Define an array to store card data
    const cards = [
        {
            image: "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
            title: "Announcing a free plan for small teams",
            description: "At Wake, our mission has always been focused on bringing openness.",
            author: "Lauren Waller",
        },
        {
            image: "https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
            title: "How Google Assistant now helps you record stories for kids",
            description: "Google is constantly updating its consumer AI, Google Assistant, with new features.",
            author: "Aaron Larsson",
        },
        {
            image: "https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80",
            title: "Front accounts - let's work together",
            description: "Are you an accountant? Are you a company formation advisor?",
            author: "Lauren Waller",
        },
    ];

    return (
        <>
            {/* Card Blog */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-3xl  mx-auto text-center mb-10 lg:mb-14">
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
                                    src={card.image}
                                    alt="Image Description"
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
                            <div className="mt-auto flex items-center gap-x-3">
                                <img
                                    className="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                    alt="Image Description"
                                />
                                <div>
                                    <h5 className="text-sm text-gray-800">
                                        By {card.author}
                                    </h5>
                                </div>
                            </div>
                        </a>
                    ))}
                    {/* End Map */}
                </div>
                {/* End Grid */}
                {/* Card */}
                <div className="mt-12 text-center">
                    <button className="bg-red-500 text-black text-lg font-gordita-bold py-4 px-6 rounded-3xl mt-8 flex items-center mx-auto">
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
