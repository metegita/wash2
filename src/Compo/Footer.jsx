import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img from '../assets/18.png';
import img2 from '../assets/19.png';
import { Link } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom'; // Add this at the top


export default function Footer() {
    return (
        <footer className="bg-[#d9f7ff] text-gray-800 scroll-smooth">
            {/* ✅ Mobile Footer */}
            <div className="block md:hidden px-6 pt-8 pb-4">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col items-start">
                        <img src={img} alt="PlanetWash Logo" className="w-14 h-14 mb-1" />
                        <h3 className="font-bold text-lg">PLANETWASH</h3>
                    </div>
                    <div className="text-right">
                        <h4 className="font-semibold mb-2">Check us out</h4>
                        <div className="flex justify-end space-x-4 text-blue-800 text-lg">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-300 mb-4" />

                <div className="space-y-6 text-sm">
                    <div>
                        <h4 className="font-semibold text-base mb-1">Contact Us</h4>
                        <p>+91 7584561146</p>
                        <p>planetwash21@gmail.com</p>
                        <p>Prozon Mall, Golden City Center</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-base mb-1">About us</h4>
                        <a href="#about" className="hover:underline block">About us</a>
                        <a href="#contact" className="hover:underline block">Contact us</a>
                    </div>

                    <div>
                        <h4 className="font-semibold text-base mb-1">Company</h4>
                        <a href="#how-it-works" className="hover:underline text-blue-500 block">How it works</a>
                    </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-2 text-sm">
                    <div className="flex gap-2 items-center">
                        <span>Developed by</span>
                        <a href="https://techsuryaitsolution.com/" target="_blank" rel="noopener noreferrer">
                            <img src={img2} alt="Tech Surya Logo" className="w-24" />
                        </a>
                    </div>
                    <p className="sm:text-right w-full sm:w-auto mt-2 sm:mt-0">
                        © 2025 Planetwash. All rights reserved.
                    </p>
                </div>
            </div>

            {/* ✅ Desktop Footer */}
            <div className="hidden md:block">
                <div className="max-w-7xl px-6 py-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={img} alt="PlanetWash Logo" className="w-16 h-16 mb-2" />
                        <h3 className="font-bold mb-2">PLANETWASH</h3>
                        <p className="text-sm text-blue-500">Fresh, Fast, Flawless Laundry</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Contact Us</h4>
                        <p className="text-sm">+91 7584561146</p>
                        <p className="text-sm">planetwash21@gmail.com</p>
                        <p className="text-sm">Prozon Mall, Golden City Center</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">About Us</h4>
                        <ul className="space-y-1 text-sm flex flex-col">
                            {/* <li><a href="#about" className="hover:underline">About us</a></li> */}
                            <Link
                                to={"about"}
                                smooth={true}
                                duration={800}
                                offset={-70}
                                className="cursor-pointer hover:text-blue-500 capitalize"
                            >
                                About Us       {/* {section.replace("-", " ")} */}
                            </Link>
                            <Link
                                to={"contact"}
                                smooth={true}
                                duration={800}
                                offset={-70}
                                className="cursor-pointer hover:text-blue-500 capitalize"
                            >
                                Contact us       {/* {section.replace("-", " ")} */}
                            </Link>

                            <li><a href="#contact" className="hover:underline"></a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Company</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    to="how-it-works"
                                    smooth={true}
                                    duration={800}
                                    offset={-70}
                                    className="cursor-pointer hover:text-blue-500 capitalize"
                                >
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <RouterLink
                                    to="/privacy-policy"
                                    className="cursor-pointer hover:text-blue-500 capitalize"
                                >
                                    Privacy Policy
                                </RouterLink>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="font-semibold mb-2">Services</h4>
                        <ul className="space-y-1 text-sm">
                            <li>Dry Clean</li>
                            <li>Washing</li>
                            <li>Iron</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Check us out</h4>
                        <div className="flex justify-center md:justify-start space-x-4 text-lg text-blue-800">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-gray-300 max-w-6xl mx-auto" />

                <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 max-w-7xl mx-auto text-sm text-center sm:text-left gap-2">
                    <p className="w-full sm:w-auto text-center">
                        © 2025 Planetwash. All rights reserved.
                    </p>
                    <div className="flex items-center justify-center gap-2">
                        <span>Developed by</span>
                        <a href="https://techsuryaitsolution.com/" target="_blank" rel="noopener noreferrer">
                            <img src={img2} alt="Tech Surya Logo" className="w-24" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
