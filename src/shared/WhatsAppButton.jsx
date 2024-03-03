import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a href="https://wa.me/9004038609" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 rounded-full hover:bg-green-600 text-white rounded-full p-3 shadow-lg inline-flex items-center justify-center">
                <FaWhatsapp className="h-6  w-6" /> {/* WhatsApp icon */}
            </button>
        </a>
    );
};

export default WhatsAppButton;
