import React, { useState } from "react";
import search from "../../assets/shared/search.png";
import arrow from "../../assets/arrowupright.svg";

const Jobs = ({ jobListings }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobListings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
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
          <div
            key={index}
            className="border-b border-gray-300 py-8 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="md:w-3/4 ml-4 md:mr-4">
              <h3 className="text-lg font-gordita-medium">{job.title}</h3>
              <p className="text-gray-600 font-gordita-regular">
                {job.description}
              </p>
              <div className="flex flex-wrap  mt-4 font-gordita-medium">
                {job.remote && (
                  <button
                    className="mr-2 mb-2 px-2 py-1 rounded-md border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    100% Remote
                  </button>
                )}
                {job.fullTime && (
                  <button
                    className="mr-2 mb-2 px-2 py-1 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    Full Time
                  </button>
                )}
                {job.internship && (
                  <button
                    className="mr-2 mb-2 px-2 py-1 rounded-md border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out"
                  >
                    Internship
                  </button>
                )}
              </div>
            </div>
            <a href="https://form.jotform.com/240506388876468" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 md:mt-0 ml-0 flex items-center font-gordita-bold text-2xl text-black px-4 py-2 rounded-md focus:outline-none transition duration-300 ease-in-out hover:text-transparent bg-gradient-to-r from-purple-300 via-violet-800 to-lime-800 bg-clip-text">
                Apply
                <img src={arrow} alt="Apply" className="h-4 w-5 ml-4 mt-1 md:mt-0" />
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
