import React, { useState } from 'react';

const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');

    return (
        <nav className="bg-white py-4">
            <div className="navbar-container mt-6 font-inter text-lg flex justify-center space-x-8">
                <div 
                    className={`navbar-section text-black ${activeTab === 'Home' ? 'bg-gray-200 rounded-3xl text-center font-bold' : ''}`}
                    onClick={() => setActiveTab('Home')}
                    style={{ cursor: 'pointer', fontSize: '1.2rem', width: '120px', height: '40px' }}
                >
                    Home
                </div>
                <div 
                    className={`navbar-section  text-black ${activeTab === 'Working Areas' ? 'bg-gray-200 rounded-3xl  text-center font-bold' : ''} `}
                    onClick={() => setActiveTab('Working Areas')}
                    style={{ cursor: 'pointer', fontSize: '1.2rem', width: '160px', height: '50px' }}
                >
                    Working Areas
                </div>
                <div 
                    className={`navbar-section text-black ${activeTab === 'Careers' ? 'bg-gray-200 rounded-3xl text-center font-bold' : ''}`}
                    onClick={() => setActiveTab('Careers')}
                    style={{ cursor: 'pointer', fontSize: '1.2rem', width: '120px', height: '40px' }}
                >
                    Careers
                </div>
                <div 
                    className={`navbar-section text-black ${activeTab === 'Blogs' ? 'bg-gray-200 rounded-3xl text-center font-bold' : ''}`}
                    onClick={() => setActiveTab('Blogs')}
                    style={{ cursor: 'pointer', fontSize: '1.2rem', width: '120px', height: '40px' }}
                >
                    Blogs
                </div>
                <div 
                    className={`navbar-section text-black ${activeTab === 'Contact Us' ? 'bg-gray-200 rounded-3xl text-center font-bold' : ''}`}
                    onClick={() => setActiveTab('Contact Us')}
                    style={{ cursor: 'pointer', fontSize: '1.2rem', width: '120px', height: '40px' }}
                >
                    Contact Us
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
