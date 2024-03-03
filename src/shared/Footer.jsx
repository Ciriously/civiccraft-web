import slack from "../assets/socials/slack.png";
import github from "../assets/socials/github.png";
import discord from "../assets/socials/discord.png";
import whatsapp from "../assets/socials/whatsapp.png";

import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#192023] py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-5xl font-gordita-medium mb-8 text-center md:text-left">
                    Experience the Change,
                    <br />
                    You want to see.
                </h1>
                <div className="flex flex-wrap justify-center md:justify-start font-gordita-regular text-3xl py-4 mb-8">
                    <a href="https://linkedin.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 mr-4 text-[#868B91] hover:text-white underline">LinkedIn</a>
                    <a href="https://facebook.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 mr-4 text-[#868B91] hover:text-white underline">Facebook</a>
                    <a href="https://instagram.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 mr-4 text-[#868B91] hover:text-white underline">Instagram</a>
                    <a href="https://twitter.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 mr-4 text-[#868B91] hover:text-white underline">Twitter</a>
                    <a href="https://medium.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 text-[#868B91] hover:text-white underline">Medium</a>
                </div>

                <div className="flex flex-wrap justify-center md:justify-between mb-8">
                    <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-4">
                        <div className="font-bold mb-4 font-gordita-medium text-[#868B91] text-center md:text-left">Join our Community</div>
                        <div className="flex justify-center md:justify-start gap-4">
                            <img src={slack} alt="Slack" width="42" height="42" />
                            <img src={discord} alt="Discord" width="50" height="42" />
                            <img src={github} alt="GitHub" width="100" height="42" />
                            <img src={whatsapp} alt="WhatsApp" width="42" height="42" />
                        </div>
                    </div>
                    <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-4">
                        <div className="font-bold mb-2 font-gordita-medium text-[#868B91] text-center md:text-left">elArise For</div>
                        <ul className="list-none text-center md:text-left ml-0 md:ml-4 font-gordita-regular ">
                            <li className="text-[#868B91]">Governments</li>
                            <li className="text-[#868B91]">Institutes</li>
                            <li className="text-[#868B91]">Industries</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-4">
                        <div className="font-bold mb-2 font-gordita-medium text-[#868B91] text-center md:text-left">Legal</div>
                        <ul className="list-none text-center md:text-left ml-0 md:ml-4 font-gordita-regular">
                            <li className="text-[#868B91]">Terms and Conditions</li>
                            <li className="text-[#868B91]">Privacy Policy</li>
                            <li className="text-[#868B91]">GDPR</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-auto mb-8 md:mb-0 md:mr-4">
                        <div className="font-bold mb-2 font-gordita-medium text-[#868B91] text-center md:text-left">Company</div>
                        <ul className="list-none text-center md:text-left ml-0 md:ml-4 font-gordita-regular">
                            <li className="text-[#868B91]">Terms and Conditions</li>
                            <li className="text-[#868B91]">Privacy Policy</li>
                            <li className="text-[#868B91]">GDPR</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-auto mb-8 md:mb-0">
                        <div className="font-gordita-medium mb-2 text-[#868B91] text-center md:text-left">Corporate Address</div>
                        <p className="text-[#868B91] font-gordita-medium text-center md:text-left">Chennai, Tamil Nadu - 600001</p>
                    </div>
                </div>
                <hr className="mb-8" />
                <div className="text-center font-gordita-medium text-[#868B91]">&copy; 2019-2024 CivicCraft online solution Pvt. ltd</div>
            </div>
        </div>
    );
}

export default Footer;
