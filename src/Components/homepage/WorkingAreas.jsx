import React from 'react';

const WorkingAreas = () => {
    return (
        <div className="working-areas mt-0 ml-44"> {/* Add margin top */}
            <div className="left-section pr-8"> {/* Add padding right */}
                <h2 className="text-4xl font-bold mb-4">Our Working Areas</h2>
                <ul className="space-y-12 mt-20 font-inter ">
                    <li className="text-gray-600 text-xl">Fin-tech</li>
                    <li className="text-gray-600 text-xl">Smart Governance</li>
                    <li className="text-gray-600 text-xl">Smart City Management</li>
                    <li className="text-gray-600 text-xl">Healthcare</li>
                    <li className="text-gray-600 text-xl">Agronomic Intelligence</li>
                    <li className="text-gray-600 text-xl">Tourism</li>
                </ul>
            </div>
            <div className="vertical-line bg-gray-900 h-full w-1 mx-4"></div> {/* Add vertical gray line */}
            <div className="right-section ml-8"> {/* Add margin left */}
                {/* Add your content for the right section here */}
            </div>
        </div>
    );
};

export default WorkingAreas;
