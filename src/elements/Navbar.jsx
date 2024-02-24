import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Team', href: '/teams', current: false },
    { name: 'Contact Us', href: '/contact', current: false }
];

export default function Navbar() {
    const location = useLocation(); // Get current location using useLocation hook

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <div className="mx-auto max-w-7xl mt-0 px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-20 items-center font-gordita-regular justify-center">
                        <div className="flex items-center justify-between w-full">
                            <img src="/path/to/logo.png" alt="Logo" className="h-12 w-auto sm:h-14" />
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`relative ${location.pathname === item.href ? 'font-gordita-bold text-[#40393B]' : 'text-[#40393B] font-medium'
                                                } rounded-3xl px-6 py-4 text-lg font-gordita`}
                                        >
                                            {item.name}
                                            {location.pathname === item.href && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-black rounded-full"></div>}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Disclosure>
    );
}
