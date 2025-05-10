import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img from '../assets/18.png';
import img2 from '../assets/19.png';

export default function Footer() {
    return (
        <footer className="bg-[#d9f7ff] text-gray-800">
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
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
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
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-base mb-1">Company</h4>
                        <p>How it works</p>
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

            {/* ✅ Desktop Footer (your original) */}
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
                        <ul className="space-y-1 text-sm">
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Company</h4>
                        <p className="text-sm">How it works</p>
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
                        <div className="flex justify-center md:justify-start space-x-4 text-blue-800 text-lg">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>

                <hr className="border-t border-gray-300 max-w-6xl mx-auto" />

                <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 max-w-7xl mx-auto text-sm text-center sm:text-left gap-2">
                    <p className="w-full sm:w-auto  text-center ">
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
