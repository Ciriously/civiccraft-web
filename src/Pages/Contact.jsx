import React from 'react';
import ContactForm from '../Components/Contact/Contactform';
import Navbar from '.././elements/Navbar'; // Import the Navbar component

const ContactUs = () => {
  return (
    <div>
      <div className="bg-white"><Navbar /></div>

      <div className="flex flex-col-reverse md:flex-row bg-white">

        <div className="md:w-1/2 font-gordita-medium bg-gradient-to-br from-indigo-500 via-indigo-300 to-indigo-100 text-white text-lg p-8 flex flex-col justify-center hidden md:flex">
          <div className="mb-8">
            <h2 className="text-5xl font-gordita-bold mb-4 text-center">Get in Touch</h2>
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
            {/* Social media links */}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-16">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
