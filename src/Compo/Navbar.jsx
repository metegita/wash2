import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import img from '../assets/18.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#d9f7ff] shadow-md py-3">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={img} alt="Logo" className="w-14 h-14" />
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-blue-500 focus:outline-none">
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-10 text-sm font-medium text-gray-700">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer text-blue-500"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="services"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-blue-500"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-blue-500"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="how-it-works"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-blue-500"
                        >
                            How It Works?
                        </Link>
                    </li>
                </ul>

                {/* App Button */}
                <button className="hidden md:block text-sm text-blue-500 border border-blue-400 px-4 py-1 rounded hover:bg-blue-50 transition">
                    Download Our App
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="space-y-3 text-sm font-medium text-gray-700">
                        <li>
                            <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block text-blue-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block hover:text-blue-500">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block hover:text-blue-500">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="how-it-works" smooth={true} duration={500} onClick={() => setIsOpen(false)} className="block hover:text-blue-500">
                                How It Works?
                            </Link>
                        </li>
                        <li>
                            <button className="w-full text-blue-500 border border-blue-400 px-4 py-1 rounded hover:bg-blue-50 transition">
                                Download Our App
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
