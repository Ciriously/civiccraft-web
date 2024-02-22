import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Team', href: '/teams', current: false },
    { name: 'Contact Us', href: '/contact', current: false }
];

export default function Navbar() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <div className="mx-auto max-w-7xl mt-0 px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-20 items-center font-gordita-regular justify-center">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`relative ${item.current ? 'font-gordita-bold text-[#40393B]' : 'text-[#40393B] font-medium'
                                            } rounded-3xl px-6 py-4 text-lg font-gordita`}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                        {item.current && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-black rounded-full"></div>}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Disclosure>
    );
}
