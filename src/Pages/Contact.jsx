import React from 'react';
import ContactForm from '../Components/Contact/Contactform';

const ContactUs = () => {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-1/2  font-gordita-medium bg-gradient-to-br from-indigo-500 via-indigo-300 to-indigo-100 text-white text-lg p-8 flex flex-col  justify-center">
        <div className="mb-8">
          <h2 className="text-5xl font-gordita-bold  mb-4 text-center">Get in Touch</h2>
          <p className="text-center">123 Main Street</p>
          <p className="text-center">City, State, ZIP</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2 text-center">Chat with Us</h3>
          <p className="text-center">Email: info@example.com</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-2 text-center">Contact Us</h3>
          <p className="text-center">Phone: +1234567890</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-center">Connect with Us</h3>
          {/* <div className="flex items-center space-x-4">
            <a href="#" className="text-white">
              <img src={facebookLogo} alt="Facebook Logo" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white">
              <img src={twitterLogo} alt="Twitter Logo" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white">
              <img src={instagramLogo} alt="Instagram Logo" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white">
              <img src={linkedin} alt="LinkedIn Logo" className="h-6 w-6" />
            </a>
            <a href="#" className="text-white">
              <img src={websiteLogo} alt="Website Logo" className="h-6 w-6" />
            </a>
          </div> */}
        </div>
      </div>
      <div className="w-1/2 p-16">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
