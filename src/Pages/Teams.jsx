import React, { useState } from 'react';

const TeamPage = () => {
    const [activeTab, setActiveTab] = useState('Core Founding');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Dummy team member data
    const teamMembers = {
        'Core Founding': [
            { name: 'Arthur Melo', role: 'Design Director', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', socials: [] },
            { name: 'Emma Smith', role: 'Graphic Designer', image: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', socials: [] },
            // Add more design team members here
        ],
        'Technical': [
            { name: 'John Doe', role: 'Lead Developer', image: 'https://via.placeholder.com/150', socials: [] },
            { name: 'Jane Doe', role: 'Frontend Developer', image: 'https://via.placeholder.com/150', socials: [] },
            // Add more development team members here
        ],
        'Marketing': [
            { name: 'Michael Johnson', role: 'Marketing Manager', image: 'https://via.placeholder.com/150', socials: [] },
            { name: 'Sarah Lee', role: 'Content Creator', image: 'https://via.placeholder.com/150', socials: [] },
            // Add more marketing team members here
        ],
    };

    return (
        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-4xl font-gordita-bold text-center text-gray-800 capitalize lg:text-3xl">
                    Team Civiccraft
                </h1>
                <p className="max-w-2xl mx-auto font-gordita-medium my-6 text-center text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex
                    placeat modi magni quia error alias, adipisci rem similique, at omnis
                    eligendi optio eos harum.
                </p>
                <div className="flex items-center justify-center">
                    <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
                        <button
                            className={`px-4 py-2 text-lg font-gordita-medium text-white capitalize ${activeTab === 'Core Founding' ? 'bg-blue-600' : 'text-blue-600'
                                } md:py-3 rounded-xl md:px-12`}
                            onClick={() => handleTabClick('Core Founding')}
                        >
                            Core Founding
                        </button>
                        <button
                            className={`px-4 py-2 mx-4 text-lg font-gordita-medium capitalize transition-colors duration-300 ${activeTab === 'Technical' ? 'bg-blue-600 text-white' : 'text-blue-600 dark:text-blue-400 dark:hover:text-white'
                                } hover:bg-blue-600 hover:text-white rounded-xl md:mx-8 md:px-12`}
                            onClick={() => handleTabClick('Technical')}
                        >
                            Technical
                        </button>
                        <button
                            className={`px-4 py-2 text-lg font-gordita-medium capitalize transition-colors duration-300 ${activeTab === 'Marketing' ? 'bg-blue-600 text-white' : 'text-blue-600 dark:text-blue-400 dark:hover:text-white'
                                } hover:bg-blue-600 hover:text-white rounded-xl md:px-12`}
                            onClick={() => handleTabClick('Marketing')}
                        >
                            marketing
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {/* Render team members based on activeTab */}
                    {teamMembers[activeTab].map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                className="object-cover w-full rounded-xl aspect-square"
                                src={member.image}
                                alt={member.name}
                            />
                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
                                {member.name}
                            </h1>
                            <p className="mt-2 text-gray-800 capitalize">
                                {member.role}
                            </p>
                            {/* Add social links if available */}
                            <div className="flex mt-3 -mx-2">
                                {member.socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        aria-label={social.label}
                                    >
                                        <img
                                            src={social.icon}
                                            alt={social.label}
                                            className="w-6 h-6 fill-current"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamPage;
