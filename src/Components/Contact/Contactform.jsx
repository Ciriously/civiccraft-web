// ContactForm.jsx
import React, { useState } from 'react';
import facebookLogo from '../../assets/socials/meta.png';
import twitterLogo from '../../assets/socials/twitter.png';
import instagramLogo from '../../assets/socials/instagram.png';
import linkedinLogo from '../../assets/socials/linkedin.png';
import websiteLogo from '../../assets/socials/internet.png';
import attachmentIcon from '../../assets/shared/paperclip.png';

const ContactForm = () => {
    // State variables for form fields, social media selection, and error handling
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [howHeard, setHowHeard] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [error, setError] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        howHeard: '',
        attachment: ''
    });

    // Function to handle social media selection
    const handleSocialClick = (social) => {
        setHowHeard((prevHowHeard) => {
            // Check if prevHowHeard already contains the selected social media
            if (prevHowHeard.includes(social)) {
                // If it does, return the previous value without appending
                return prevHowHeard;
            } else {
                // If it doesn't, append the selected social media with a comma
                return prevHowHeard ? `${prevHowHeard}, ${social}` : social;
            }
        });
    };
    // Function to handle attachment selection
    const handleAttachmentChange = (file) => {
        setAttachment(file);
    };

    // Function to handle form submission
    const handleSubmit = () => {
        let formValid = true;
        const errors = {
            fullName: '',
            phoneNumber: '',
            email: '',
            howHeard: '',
            attachment: ''
        };

        // Validate full name
        if (!fullName.trim()) {
            errors.fullName = 'Please enter your full name.';
            formValid = false;
        } else if (fullName.length < 3) {
            errors.fullName = 'Full name must be at least 3 characters long.';
            formValid = false;
        }

        // Validate phone number
        if (!phoneNumber.trim()) {
            errors.phoneNumber = 'Please enter your phone number.';
            formValid = false;
        } else if (!/^\d{10}$/.test(phoneNumber)) {
            errors.phoneNumber = 'Please enter a valid 10-digit phone number.';
            formValid = false;
        }

        // Validate email
        if (!email.trim()) {
            errors.email = 'Please enter your email address Eg: name@domain.com';
            formValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Please enter a valid email address.';
            formValid = false;
        }

        // Validate how heard
        if (!howHeard.trim()) {
            errors.howHeard = 'Please select how you heard about us.';
            formValid = false;
        }

        // Validate attachment
        if (!attachment) {
            errors.attachment = 'Please attach a file.';
            formValid = false;
        }

        // Update error state
        setError(errors);

        // Submit form if valid
        if (formValid) {
            // Proceed with form submission logic here
        }
    };

    return (
        <div className="border border-gray-300 rounded-lg">
            <form className="bg-white font-gordita-medium rounded-t-lg px-8 pt-10 md:pt-40 pb-8 mb-4">
                {/* Full Name */}
                <div className="mb-4">
                    <input
                        className={`shadow-none appearance mb-2 md:mb-4 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg ${error.fullName && 'border-red-500'}`}
                        id="fullName"
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    {error.fullName && <p className="text-red-500">{error.fullName}</p>}
                </div>
                {/* Phone Number */}
                <div className="mb-4">
                    <input
                        className={`shadow-none appearance-none mb-2 md:mb-4 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg ${error.phoneNumber && 'border-red-500'}`}
                        id="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {error.phoneNumber && <p className="text-red-500">{error.phoneNumber}</p>}
                </div>
                {/* Email */}
                <div className="mb-4">
                    <input
                        className={`shadow-none appearance-none mb-2 md:mb-4 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg ${error.email && 'border-red-500'}`}
                        id="email"
                        type="email"
                        placeholder="Email ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error.email && <p className="text-red-500">{error.email}</p>}
                </div>
                {/* How did you hear about us? */}
                <div className="mb-4">
                    <input
                        className={`shadow-none appearance-none mb-2 md:mb-4 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg ${error.howHeard && 'border-red-500'}`}
                        id="howHeard"
                        type="text"
                        placeholder="How did you hear about us?"
                        value={howHeard}
                        readOnly
                    />
                    {error.howHeard && <p className="text-red-500">{error.howHeard}</p>}
                </div>
                {/* Social Media Selection */}
                <div className="flex flex-wrap mb-4 ml-3 font-gordita-medium">
                    <button
                        type="button"
                        onClick={() => handleSocialClick('Facebook')}
                        className="flex items-center space-x-2 px-2 py- rounded-md border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out focus:outline-none mb-2 mr-2"
                    >
                        <img src={facebookLogo} alt="Facebook Logo" className="h-4 w-4" />
                        <span>Facebook</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSocialClick('Twitter')}
                        className="flex items-center space-x-2 px-2 py-1 rounded-md border border-light-blue-500 text-light-blue-500 hover:bg-light-blue-500 hover:text-gray-400 transition duration-300 ease-in-out focus:outline-none mb-2 mr-2"
                    >
                        <img src={twitterLogo} alt="Twitter Logo" className="h-4 w-4" />
                        <span>Twitter</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSocialClick('Instagram')}
                        className="flex items-center space-x-2 px-2 py-1 rounded-md border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out focus:outline-none mb-2 mr-2"
                    >
                        <img src={instagramLogo} alt="Instagram Logo" className="h-4 w-4" />
                        <span>Instagram</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSocialClick('LinkedIn')}
                        className="flex items-center space-x-2 px-2 py-1 rounded-md border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out focus:outline-none mb-2 mr-2"
                    >
                        <img src={linkedinLogo} alt="LinkedIn Logo" className="h-4 w-4" />
                        <span>LinkedIn</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSocialClick('Website')}
                        className="flex items-center space-x-2 px-2 py-1 rounded-md border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out focus:outline-none mb-2 mr-2"
                    >
                        <img src={websiteLogo} alt="Website Logo" className="h-4 w-4" />
                        <span>Others</span>
                    </button>
                </div>

                {/* Project Description */}
                <div className="mb-4">
                    <textarea
                        className="shadow-none appearance-none mb-2 md:mb-4 border-b border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 text-lg"
                        id="projectDescription"
                        placeholder="Project Description"
                    />
                </div>
                {/* Attachment */}
                <div className="mb-4 relative">
                    <input
                        type="file"
                        className="hidden"
                        id="attachment"
                        onChange={(e) => handleAttachmentChange(e.target.files[0])}
                    />
                    <label
                        htmlFor="attachment"
                        className={`shadow-none appearance-none border-b border-gray-300 w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-blue-500 text-lg flex items-center ${error.attachment && 'border-red-500'}`}
                    >
                        <img
                            src={attachmentIcon}
                            alt="Attachment Icon"
                            className="h-4 w-4 mr-2"
                        />
                        Attachments if any
                    </label>
                    {attachment && <p className="text-gray-500">Attachment: {attachment.name}</p>}
                    {error.attachment && <p className="text-red-500">{error.attachment}</p>}
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 text-white font-bold py-2 px-6 rounded focus:outline-none text-lg transform transition duration-500 ease-in-out hover:scale-110"
                        type="button"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;