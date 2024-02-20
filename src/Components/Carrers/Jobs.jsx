import React, { useState } from 'react';
import search from '../../assets/shared/search.png';
const Jobs = ({ jobListings }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredJobs = jobListings.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container  mx-auto">
            <div className="relative">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for current Openings."
                    className="w-full px-4 font-gordita-medium py-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#40393B]"
                />
                <img
                    src={search}
                    alt="Search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
            </div>
            <div className="mt-4">
                {filteredJobs.map((job, index) => (
                    <div key={index} className="border-b border-gray-300 py-4">
                        <h3 className="text-lg font-bold">{job.title}</h3>
                        <p className="text-gray-600">{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Jobs;
