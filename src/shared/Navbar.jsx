import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/shared/logo.svg";
import WorkingAreas from '../Components/homepage/WorkingAreas';
import Latestupdate from '../Components/homepage/Latestupdate';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Working Areas', href: '#WorkingAreas', current: false },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Blogs', href: '#Latestupdate', current: false },
    { name: 'Team', href: '/teams', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
];

export default function Navbar() {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNavLinkClick = (href) => {
        if (href.startsWith("#")) {
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
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
                            className="group h-14 w-14 rounded-lg border-2 border-black flex justify-center items-center text-sm font-semibold transition-all transform duration-300 hover:border-gray-300"
                            onClick={toggleDropdown}
                            aria-expanded={isDropdownOpen ? 'true' : 'false'}
                        >
                            <div className="grid justify-items-center gap-1.5">
                                <span className={`h-1 w-6 rounded-full bg-black transition transform ${isDropdownOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                                <span className={`h-1 w-6 rounded-full bg-black transition transform ${isDropdownOpen ? 'scale-x-0' : ''}`}></span>
                                <span className={`h-1 w-6 rounded-full bg-black transition transform ${isDropdownOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                            </div>
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
                                onClick={() => handleNavLinkClick(item.href)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
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
