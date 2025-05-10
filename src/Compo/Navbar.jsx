import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import img from '../assets/18.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#d9f7ff] shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={img} alt="Logo" className="w-14 h-14" />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
                    {["home", "services", "about", "how-it-works"].map((section) => (
                        <li key={section}>
                            <Link
                                to={section}
                                smooth={true}
                                duration={100}
                                offset={-70}
                                className="cursor-pointer hover:text-blue-500 capitalize"
                            >
                                {section.replace("-", " ")}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <Link
                    to="download"
                    smooth={true}
                    duration={800}
                    offset={-70}
                    className="hidden md:block text-sm text-blue-500 border border-blue-400 px-4 py-1 rounded hover:bg-blue-50 transition cursor-pointer"
                >
                    Download Our App
                </Link>

                {/* Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-2xl text-blue-500 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Animated Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 ease-in-out ${isOpen
                    ? 'max-h-[500px] opacity-100 scale-100 translate-y-0'
                    : 'max-h-0 opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    } transform origin-top bg-[#d9f7ff]`}
            >
                <ul className="px-6 pb-4 pt-2 space-y-4 text-sm font-medium text-gray-700">
                    {["home", "services", "about", "how-it-works"].map((section) => (
                        <li key={section}>
                            <Link
                                to={section}
                                smooth={true}
                                duration={0.1}
                                offset={-70}
                                onClick={() => setIsOpen(false)}
                                className="block cursor-pointer hover:text-blue-500 capitalize"
                            >
                                {section.replace("-", " ")}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="download"
                            smooth={true}
                            duration={800}
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-blue-500 border border-blue-400 px-4 py-2 rounded hover:bg-blue-50 transition text-center cursor-pointer"
                        >
                            Download Our App
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
