import { Disclosure } from '@headlessui/react';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Working Areas', href: '#', current: false },
    { name: 'Careers', href: '#', current: false },
    { name: 'Blogs', href: '#', current: false },
    { name: 'Contact Us', href: '#', current: false }
];

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <div className="mx-auto max-w-7xl mt-4 px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-center"> {/* Center the content */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`${
                                            item.current ? 'bg-[#D9D9D9] font-bold  text-[#40393B]' : 'text-[#40393B] font-medium hover:bg-gray-300 hover:text-white'
                                        } rounded-3xl px-6 py-4 text-lg font-gordita-regular ${item.current ? 'font-extrabold' : 'font-medium'}`}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Disclosure>
    );
}
