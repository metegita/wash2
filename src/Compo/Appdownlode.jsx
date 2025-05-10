import React from "react";
import img from '../assets/16.png';
import { FaAndroid, FaApple } from "react-icons/fa";

const AppDownlode = () => {
    return (
        <div className="bg-[#00B5E2] py-10 px-6 md:px-14">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Text Section */}
                <div className="text-white w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                        Download Our App
                    </h2>
                    <p className="text-base sm:text-lg mb-6">
                        Book laundry pickups, track orders &<br />
                        manage payments — all in one app
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <button className="flex items-center justify-center gap-2 bg-white text-blue-500 font-medium py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition">
                            <FaAndroid className="text-xl" />
                            Android
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white text-blue-500 font-medium py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition">
                            <FaApple className="text-xl" />
                            iOS
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={img}
                        alt="Mobile App Preview"
                        className="w-3/4 sm:w-2/3 md:w-full max-w-xs md:max-w-sm rounded-lg object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default AppDownlode;
