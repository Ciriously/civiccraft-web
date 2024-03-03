import React from 'react';
import Solana from '../../assets/casestudy/Solana.svg';
import Polygon from '../../assets/casestudy/Polygon.png';
import arrow from '../../assets/arrowupright.svg';

export const CSbtns = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5  py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center  bg-gradient-to-b from-white to-10% via-[rgba(247,212,93,0.5)] via-50% to-white to-80% ">
                    <h1 className="title-font  sm:text-4xl text-3xl mb-4 font-gordita-medium text-gray-900">
                        Blockchain District:
                        Digitizing the Records with Blockchain
                        Platforms
                    </h1>
                    <p className="mb-8 font-gordita-regular leading-relaxed">
                        Blockchain District is at the forefront of digitizing records using blockchain platforms. Our innovative solutions ensure secure, transparent, and tamper-proof record-keeping, revolutionizing data management for businesses and organizations. With cutting-edge blockchain technology, we offer efficient and reliable solutions to safeguard valuable records and streamline processes for enhanced productivity and trust.
                    </p>
                    <p className="mb-8 font-gordita-bold leading-relaxed">
                        In collaboration with:
                    </p>
                    <div className="flex  justify-center">
                        <img
                            className="object-cover object-center rounded w-20 h-20 mr-4"
                            alt="image1"
                            src={Solana}
                        />
                        <img
                            className="w-50 h-20"
                            alt="image2"
                            src={Polygon}
                        />
                    </div>

                    <div className="flex justify-center">
                        <button className="bg-gray-300 text-black text-lg font-gordita-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
                            See Case Study
                            <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-xl mb-24 lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://readwrite.com/wp-content/uploads/2019/09/6-Industries-Blockchain-Technology-Will-Revolutionize-825x500.jpg"
                    />
                </div>
            </div>
        </section>
    );
};
