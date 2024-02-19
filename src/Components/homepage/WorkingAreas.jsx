import React from 'react';

const WorkingAreas = () => {
    return (
        <div className="working-areas">
            <div className="left-section">
                <h2 className="text-2xl font-bold mb-4">Our Working Areas</h2>
                <ul className="space-y-2">
                    <li className="text-gray-600">Fin-tech</li>
                    <li className="text-gray-600">Smart Governance</li>
                    <li className="text-gray-600">Smart City Management</li>
                    <li className="text-gray-600">Healthcare</li>
                    <li className="text-gray-600">Agronomic Intelligence</li>
                    <li className="text-gray-600">Tourism</li>
                </ul>
            </div>
            <div className="vertical-line bg-gray-300"></div>
            <div className="right-section">
                {/* Add your content for the right section here */}
            </div>
        </div>
    );
};

export default WorkingAreas;
