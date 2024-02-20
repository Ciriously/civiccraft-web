import React from 'react';
import arrow from '../../assets/arrowupright.svg';

const Careers = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap items-stretch">
                {/* Left Section */}
                <div className="w-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-indigo-400 via-indigo-200 to-indigo-100 md:w-1/2 flex items-center">
                    <div className="p-8">
                        <h1 className="text-4xl text-[#40393B] font-bold mb-4">Meet Prerana Bhandari, Lead Product Designer, UI/UX</h1>
                        <p className="text-black text-lg mb-8">We are one of the only institutes of our kind in the world, and our team consists of researchers, scientists, domain experts, technologists, and entrepreneurs from some of the leading international institutions.</p>
                        <button className="bg-white text-black text-lg font-bold font-inter py-4 px-6 rounded-3xl flex items-center">
                            Explore Open Positions
                            <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
                        </button>
                    </div>
                </div>
                {/* Right Section */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
                    <img src="https://images.unsplash.com/photo-1473830394358-91588751b241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Careers;
