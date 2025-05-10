import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img from '../assets/18.png';
import img2 from '../assets/19.png';

export default function Footer() {
    return (
        <footer className="bg-[#d9f7ff] text-gray-800">
            {/* Mobile View */}
            <div className="block sm:hidden px-1 py-8 text-sm text-left">
                {/* 4-column grid in a single row */}
                <div className="grid grid-cols-4 gap-4 items-start text-[12px]">
                    {/* Logo */}
                    <div>
                        <img src={img} alt="PlanetWash Logo" className="w-12 h-12 mt-6 ml-2" />
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="font-semibold mb-1 text-[13px]">Contact</h4>
                        <p>+91 7584561146</p>
                        <p>21@gmail.com</p>
                        <p>Prozon Mall</p>
                    </div>

                    {/* About Us */}
                    <div>
                        <h4 className="font-semibold mb-1 text-[13px]">About</h4>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-1 text-[13px]">Company</h4>
                        <p>How it works</p>
                    </div>
                </div>

                {/* Socials */}
                <div className="mt-6 text-right mr-2">
                    <h4 className="font-semibold mb-2">Check us out</h4>
                    <div className="flex justify-end space-x-4 text-blue-800 text-lg">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>

                <hr className="my-4 border-gray-300" />

                {/* Copyright + Developer */}
                <div className="flex flex-col items-center text-center space-y-2">
                    <p>© 2025 Planetwash. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Develop by</span>
                        <img src={img2} alt="Tech Surya Logo" className="w-24" />
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden sm:block">
                <div className="max-w-7xl px-6 py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center md:text-left">
                    {/* Logo & tagline */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src={img} alt="PlanetWash Logo" className="w-16 h-16 mb-2" />
                        <h3 className="font-bold mb-2">PLANETWASH</h3>
                        <p className="text-sm text-blue-500">Fresh, Fast, Flawless Laundry</p>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="font-semibold mb-2">Contact Us</h4>
                        <p className="text-sm">+91 7584561146</p>
                        <p className="text-sm">planetwash21@gmail.com</p>
                        <p className="text-sm">Prozon Mall, Golden City Center</p>
                    </div>

                    {/* About Us */}
                    <div>
                        <h4 className="font-semibold mb-2">About Us</h4>
                        <ul className="space-y-1 text-sm">
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-2">Company</h4>
                        <p className="text-sm">How it works</p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-2">Services</h4>
                        <ul className="space-y-1 text-sm">
                            <li>Dry Clean</li>
                            <li>Washing</li>
                            <li>Iron</li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-semibold mb-2">Check us out</h4>
                        <div className="flex justify-center md:justify-start space-x-4 text-blue-800 text-lg">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>

                <hr className="border-t border-gray-300 max-w-6xl mx-auto" />

                <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 max-w-7xl mx-auto text-sm text-center sm:text-left gap-2">
                    <p className="w-full sm:w-auto">
                        © 2025 Planetwash. All rights reserved.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <span>Develop by</span>
                        <img src={img2} alt="Tech Surya Logo" className="w-24" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
