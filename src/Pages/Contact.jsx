import React, { useState } from 'react';
import facebookLogo from '../assets/socials/meta.png';
import twitterLogo from '../assets/socials/twitter.png';
import instagramLogo from '../assets/socials/instagram.png';
import linkedin from '../assets/socials/linkedin.png';
import websiteLogo from '../assets/socials/internet.png';
import attachmentIcon from '../assets/shared/paperclip.png';

const ContactUs = () => {
  const [howHeard, setHowHeard] = useState('');

  const handleSocialClick = (social) => {
    setHowHeard((prevHowHeard) => prevHowHeard + (prevHowHeard ? `, ${social}` : social));
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-indigo-500 via-indigo-300 to-indigo-100 text-white flex items-center justify-center text-2xl">
        <p>Welcome to our Contact Us page!</p>
      </div>

      <div className="w-1/2 p-16">
        <form className="bg-white font-gordita-medium  rounded-t-lg px-8 pt-40 pb-8 mb-4">
          <div className="mb-8">
            <input className="shadow-none appearance mb-4 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg" id="fullName" type="text" placeholder="Full Name" />
          </div>
          <div className="mb-8">
            <input className="shadow-none appearance-none mb-4 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg" id="phoneNumber" type="tel" placeholder="Phone Number" />
          </div>
          <div className="mb-8">
            <input className="shadow-none appearance-none mb-4 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg" id="email" type="email" placeholder="Email ID" />
          </div>
          <div className="mb-8">
            <input className="shadow-none appearance-none mb-2 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg" id="howHeard" type="text" placeholder="How did you hear about us?" value={howHeard} readOnly />
          </div>
          <div className="flex space-x-2 mb-8 ml-3 font-gordita-medium">
            <button
              onClick={() => handleSocialClick('Facebook')}
              className="flex items-center space-x-2 px-2 py-1 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out focus:outline-none"
            >
              <img src={facebookLogo} alt="Facebook Logo" className="h-4 w-4" />
              <span>Facebook</span>
            </button>
            <button
              onClick={() => handleSocialClick('Twitter')}
              className="flex items-center space-x-2 px-2 py-1 rounded-md border border-light-blue-500 text-light-blue-500 hover:bg-light-blue-500 hover:text-white transition duration-300 ease-in-out focus:outline-none"
            >
              <img src={twitterLogo} alt="Twitter Logo" className="h-4 w-4" />
              <span>Twitter</span>
            </button>
            <button
              onClick={() => handleSocialClick('Instagram')}
              className="flex items-center space-x-2 px-2 py-1 rounded-md border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out focus:outline-none"
            >
              <img src={instagramLogo} alt="Instagram Logo" className="h-4 w-4" />
              <span>Instagram</span>
            </button>
            <button
              onClick={() => handleSocialClick('LinkedIn')}
              className="flex items-center space-x-2 px-2 py-1 rounded-md border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out focus:outline-none"
            >
              <img src={linkedin} alt="LinkedIn Logo" className="h-4 w-4" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={() => handleSocialClick('Website')}
              className="flex items-center space-x-2 px-2 py-1 rounded-md border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out focus:outline-none"
            >
              <img src={websiteLogo} alt="Website Logo" className="h-4 w-4" />
              <span>Website</span>
            </button>
          </div>


          <div className="mb-8">
            <textarea className="shadow-none appearance-none mb-4 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg" id="projectDescription" placeholder="Project Description"></textarea>
          </div>
          <div className="mb-8 relative">
            <input
              type="file"
              className="hidden"
              id="attachment"
              onChange={(e) => handleAttachmentChange(e.target.files[0])}
            />
            <label
              htmlFor="attachment"
              className="shadow-none appearance-none border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg flex items-center"
            >
              <img
                src={attachmentIcon}
                alt="Attachment Icon"
                className="h-4 w-4 mr-2"
              />
              Attach File
            </label>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-6 rounded focus:outline-none focus:shadow-outline text-lg" type="button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
