import React from 'react';
import Jobs from '../Components/Carrers/Jobs';

const Careers = () => {
    // Assuming you have jobListings stored somewhere
    const jobListings = [
        { title: 'Job Title 1', description: 'Description for Job 1' },
        { title: 'Job Title 2', description: 'Description for Job 2' },
        // Add more job listings as needed
    ];

    return (
        <div className="container mx-auto flex flex-col items-center justify-start pt-12">
            <h1 className="text-5xl font-gordita-bold text-gray-800 mb-4">Join our world-class Team of 
creators and Developers</h1>
            <p className="text-lg font-gordita-medium text-gray-400 mb-8">Our philosophy is simple - hire a team of diverse, passionate people 
and foster a culture that empowers you to do your best work. </p>
            <Jobs jobListings={jobListings} /> {/* Pass the jobListings as a prop */}
        </div>
    );
}

export default Careers;
