import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/shared/logo.svg";

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Working Areas', href: '/about', current: false },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Blogs', href: '/teams', current: false },
    { name: 'Team', href: '/teams', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
];

export default function Navbar() {
    const location = useLocation(); // Get current location using useLocation hook
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to track dropdown visibility

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="flex flex-wrap mt-8 text-lg sm:justify-start sm:flex-nowrap z-50 w-full bg-white  py-3 sm:py-0">
            <nav
                className="relative max-w-7xl w-full mx-auto px-6 sm:flex sm:items-center sm:justify-between sm:px-8 lg:px-8"
                aria-label="Global"
            >
                <div className="flex items-center justify-between">
                    <a
                        className="flex-none"
                        href="#"
                        aria-label="Brand"
                    >
                        <img
                            src={logo}
                            alt="Brand Logo"
                            className="h-14 w-auto"
                        />
                    </a>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={toggleDropdown} // Add onClick event to toggle dropdown
                            aria-expanded={isDropdownOpen ? 'true' : 'false'} // Accessibility attribute
                        >
                            <svg
                                className={`hs-collapse-open:hidden size-4 ${isDropdownOpen ? 'hidden' : 'block'}`}
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                            <svg
                                className={`hs-collapse-open:block flex-shrink-0 hidden size-4 ${isDropdownOpen ? 'block' : 'hidden'}`}
                                width={16}
                                height={16}
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="navbar-collapse-with-animation"
                    className={`hs-collapse ${isDropdownOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:block`}
                >
                    <div className="flex flex-col font-gordita-medium gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`font-gordita-bold ${location.pathname === item.href
                                    ? 'text-[#F78D4C]'
                                    : 'text-gray-500 hover:text-gray-400 font-gordita-medium'
                                    } sm:py-6`}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                            {/* Dropdown menu content */}
                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2">
                                <a
                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    href="#"
                                >
                                    About
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
