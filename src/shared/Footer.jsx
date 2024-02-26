import slack from "../assets/socials/slack.png";
import github from "../assets/socials/github.png";
import discord from "../assets/socials/discord.png";
import whatsapp from "../assets/socials/whatsapp.png";

import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#192023] py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-5xl font-gordita-medium mb-8">
                    Experience the Change,
                    <br />
                    You want to see.
                </h1>
                <div className="flex font-gordita-regular text-3xl py-4 flex-wrap mb-8">
                    <a href="https://linkedin.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 mr-4 text-[#868B91] hover:text-white underline">LinkedIn</a>
                    <a href="https://facebook.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 mr-4 text-[#868B91] hover:text-white underline">Facebook</a>
                    <a href="https://instagram.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 mr-4 text-[#868B91] hover:text-white underline">Instagram</a>
                    <a href="https://twitter.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 mr-4 text-[#868B91] hover:text-white underline">Twitter</a>
                    <a href="https://medium.com/offcrunch" target="_blank" rel="noopener noreferrer" className="mb-4 text-[#868B91] hover:text-white underline">Medium</a>
                </div>

                <div className="flex flex-wrap justify-between mb-8">
                    <div className="w-full md:w-1/2 lg:w-1/5">
                        <div className="font-bold mb-4 font-gordita-medium text-[#868B91]">Join our Community</div>
                        <div className="flex gap-4">
                            <img src={slack} alt="Slack" width="42" height="42" />
                            <img src={discord} alt="Discord" width="50" height="42" />
                            <img src={github} alt="GitHub" width="100" height="42" />
                            <img src={whatsapp} alt="WhatsApp" width="42" height="42" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5">
                        <div className="font-bold mb-2  ml-4 font-gordita-medium text-[#868B91]">elArise For</div>
                        <ul className="list-none ml-4 font-gordita-regular ">
                            <li className="text-[#868B91]">Governments</li>
                            <li className="text-[#868B91]">Institutes</li>
                            <li className="text-[#868B91]">Industries</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5">
                        <div className="font-bold mb-2 font-gordita-medium text-[#868B91]">Legal</div>
                        <ul className="list-none font-gordita-regular">
                            <li className="text-[#868B91]">Terms and Conditions</li>
                            <li className="text-[#868B91]">Privacy Policy</li>
                            <li className="text-[#868B91]">GDPR</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5">
                        <div className="font-bold mb-2 font-gordita-medium text-[#868B91]">Company</div>
                        <ul className="list-none font-gordita-medium">
                            <li className="text-[#868B91]">Terms and Conditions</li>
                            <li className="text-[#868B91]">Privacy Policy</li>
                            <li className="text-[#868B91]">GDPR</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5">
                        <div className="font-gordita-medium mb-2 text-[#868B91]">Corporate Address</div>
                        <p className="text-[#868B91] font-gordita-medium">Chennai, Tamil Nadu - 600001</p>
                    </div>
                </div>
                <hr className="mb-8" />
                <div className="text-center font-gordita-medium text-[#868B91]">&copy; 2019-2023 elArise India Pvt. Ltd.</div>
            </div>
        </div>
    );
}
export default Footer;
