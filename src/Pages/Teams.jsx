import React, { useState } from 'react';
import facebookLogo from '../assets/socials/meta.png';
import twitterLogo from '../assets/socials/twitter.png';
import instagramLogo from '../assets/socials/instagram.png';
import linkedinLogo from '../assets/socials/linkedin.png';
import gmail from '../assets/socials/gmail.png';
import Arabhya from '../assets/Team/Arabhya.jpeg';
import Animesh from '../assets/Team/Animesh.jpeg';
import Prerna from '../assets/Team/Prerana.jpg';
import Chinmay from '../assets/Team/Chinmay.jpg';

const TeamPage = () => {
    const [activeTab, setActiveTab] = useState('Core Founding');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Team member data
    const teamMembers = {
        'Core Founding': [
            {
                name: 'R. Arabhaya Yadav',
                role: 'App Developer ',
                image: Arabhya,
                socials: [
                    // { icon: facebookLogo, url: '#', label: 'Facebook' },
                    { icon: gmail, url: 'mailto:arabhaya@civiccraft.in', label: 'Email' },
                    { icon: instagramLogo, url: 'https://www.instagram.com/arabhya07/', label: 'Instagram' },
                    { icon: linkedinLogo, url: 'https://www.linkedin.com/in/r-arabhya-70b487238/', label: 'LinkedIn' }
                ]
            },
            {
                name: 'Chinmay Awade',
                role: 'AI-ML Lead',
                image: Chinmay,
                socials: [
                    // { icon: facebookLogo, url: '#', label: 'Facebook' },
                    { icon: gmail, url: 'mailto:chinmay@civiccraft.in', label: 'Twitter' },
                    { icon: instagramLogo, url: 'https://www.instagram.com/alatus1904/', label: 'Instagram' },
                    { icon: linkedinLogo, url: 'https://www.linkedin.com/in/chinmay4012/', label: 'LinkedIn' }
                ]
            },
            {
                name: 'R. Animesh Yadav',
                role: 'Research Lead',
                image: Animesh,
                socials: [
                    // { icon: facebookLogo, url: '#', label: 'Facebook' },
                    { icon: gmail, url: 'mailto:animesh@civiccraft.in', label: 'Twitter' },
                    { icon: instagramLogo, url: 'https://www.instagram.com/i.amanimesh/', label: 'Instagram' },
                    { icon: linkedinLogo, url: 'https://www.linkedin.com/in/animeshmedibey/', label: 'LinkedIn' }
                ]
            },
            {
                name: 'Prerana Bhandari',
                role: 'Product Lead',
                image: Prerna,
                socials: [
                    // { icon: facebookLogo, url: '#', label: 'Facebook' },
                    { icon: gmail, url: 'mailto:prerana@civiccraft.in', label: 'Twitter' },
                    { icon: instagramLogo, url: 'https://www.linkedin.com/in/prerana-bhandari-01865721b/', label: 'Instagram' },
                    { icon: linkedinLogo, url: 'https://www.linkedin.com/in/animeshmedibey/', label: 'LinkedIn' }
                ]
            },

        ],

        'Technical': [
            // Add technical team members here
        ],
        'Marketing': [
            // Add marketing team members here
        ],
    };

    return (
        <section>
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-4xl font-gordita-bold text-center text-gray-800 capitalize lg:text-3xl">
                    Team Civiccraft
                </h1>
                <p className="max-w-2xl mx-auto font-gordita-medium my-6 text-center text-gray-400">
                    Meet our team of talented individuals dedicated to making a difference.
                </p>
                <div className="flex items-center justify-center">
                    <div className="flex items-center p-1 border border-yellow-600 rounded-xl">
                        <button
                            className={`px-4 py-2 text-lg font-gordita-medium text-blue capitalize ${activeTab === 'Core Founding' ? 'bg-yellow-300 text-white' : 'text-yellow-600'
                                } md:py-3 rounded-xl md:px-12`}
                            onClick={() => handleTabClick('Core Founding')}
                        >
                            Core Founding
                        </button>
                        <button
                            className={`px-4 py-2 mx-4 text-lg font-gordita-medium capitalize transition-colors duration-300 ${activeTab === 'Technical' ? 'bg-yellow-300 text-white' : 'text-yellow-600'
                                } hover:bg-yellow-300 hover:text-white rounded-xl md:mx-8 md:px-12`}
                            onClick={() => handleTabClick('Technical')}
                        >
                            Technical
                        </button>
                        <button
                            className={`px-4 py-2 text-lg font-gordita-medium capitalize transition-colors duration-300 ${activeTab === 'Marketing' ? 'bg-yellow-600 text-white' : 'text-yellow-600'
                                } hover:bg-yellow-300 hover:text-white rounded-xl md:px-12`}
                            onClick={() => handleTabClick('Marketing')}
                        >
                            Marketing
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
                            <h1 className="mt-4 text-2xl font-gordita-bold text-gray-700 capitalize ">
                                {member.name}
                            </h1>
                            <p className="mt-2 text-gray-800 font-gordita-regular capitalize">
                                {member.role}
                            </p>
                            {/* Add social links if available */}
                            <div className="flex mt-3 -mx-2">
                                {member.socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="mx-2 text-gray-600 hover:text-blue-500"
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
