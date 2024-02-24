import React from 'react';
import Jobs from '../Components/Carrers/Jobs';
import Navbar from '.././elements/Navbar'; // Import the Navbar component

const Careers = () => {
    // Updated job listings data
    const jobListings = [
        { title: 'Frontend Developer', description: 'We are looking for a skilled Frontend Developer to join our team.', remote: true, fullTime: true },
        { title: 'Backend Developer', description: 'Join our Backend Development team and work on exciting projects.', remote: false, fullTime: true },
        { title: 'UI/UX Designer', description: 'Seeking a creative UI/UX Designer to help us create beautiful user interfaces.', remote: false, fullTime: true, internship: true },
        { title: 'Marketing Specialist', description: 'We need a Marketing Specialist to lead our marketing campaigns.', remote: true, fullTime: false },
        // Add more job listings as needed
    ];

    return (
        <div>
            <Navbar /> {/* Include the Navbar component */}
            <div className="container mx-auto flex flex-col items-center justify-start pt-12 px-4"> {/* Added px-4 for padding on smaller screens */}
                <h1 className="text-5xl font-gordita-bold text-gray-800 mb-8 text-center">
                    Join our World-class Team of <br />
                    <span className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-cyan-700 via-red-600 to-fuchsia-600 bg-clip-text text-transparent">Creators</span> and <span className="bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent"> Developers </span>🚀
                </h1>
                <p className="text-lg  text-center font-gordita-medium text-gray-400 mb-8">Our philosophy is simple - hire a team of diverse, passionate people<br /> and foster a culture that empowers you to do your best work. </p>
                <Jobs jobListings={jobListings} /> {/* Pass the jobListings as a prop */}
            </div>
        </div>
    );
}

export default Careers;
