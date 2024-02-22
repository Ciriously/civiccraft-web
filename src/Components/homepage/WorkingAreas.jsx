import React, { useState } from 'react';

const WorkingAreas = () => {
    const [selectedArea, setSelectedArea] = useState('');

    const handleAreaClick = (area) => {
        setSelectedArea(area);
    };

    const areaInfo = {
        'Fin-tech': 'Information about Fin-tech',
        'Smart Governance': 'Information about Smart Governance',
        'Smart City Management': 'Information about Smart City Management',
        'Healthcare': 'Information about Healthcare',
        'Agronomic Intelligence': 'Information about Agronomic Intelligence',
        'Tourism': 'Information about Tourism',
    };

    return (
        <div className="working-areas mt-96 ml-72 mb-28 flex">
            <div className="left-section pr-8">
                <h2 className="text-4xl  font-gordita-medium mb-4">Our Working Areas</h2>
                <ul className="space-y-12 mt-20 font-inter ">
                    {Object.keys(areaInfo).map((area, index) => (
                        <li
                            key={index}
                            className={`text-xl cursor-pointer ${selectedArea === area ? 'text-blue-600 font-bold' : 'text-gray-600'
                                }`}
                            onClick={() => handleAreaClick(area)}
                        >
                            {area}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="partition border-r border-gray-300"></div>
            <div className="right-section flex justify-center items-center">
                {selectedArea && (
                    <div className="ml-40 ">
                        <h2 className="text-3xl font-bold mb-4">{selectedArea}</h2>
                        <p className="text-gray-600 text-xl">{areaInfo[selectedArea]}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WorkingAreas;
