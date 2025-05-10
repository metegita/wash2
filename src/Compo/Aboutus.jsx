import React from "react";
import img from "../assets/10.png"

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 p-8  bg-white">
            {/* Left Image */}
            <div className="w-full  md:w-1/2">
                <img
                    src={img}
                    alt="Laundry Worker"
                    className="rounded-lg shadow-md w-full object-cover"
                />
            </div>

            {/* Right Text */}
            <div className="w-full md:w-1/2 text-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">About Us</h2>
                <h3 className="text-lg font-medium text-blue-700 mb-4">
                    Making Laundry Effortless, Every Day
                </h3>
                <p className="text-base mb-6">
                    At Planetwash Laundry, we believe clean clothes lead to a happier life. With years of experience, eco-friendly solutions, and doorstep service, we’re redefining how you do laundry. From households to businesses, we handle every fabric with care and precision. <br />

                </p>
                <p className="text-base mb-6 mt-2">                    At Planetwash Laundry, we believe clean clothes lead to a happier life. With years of experience, eco-friendly solutions, and doorstep service, we’re redefining how you do laundry. From households to businesses, we handle every fabric with care and precision.
                </p>

                <ul className="space-y-3">
                    {[
                        "Eco-friendly Products",
                        "Expert Staff",
                        "Quick Turnaround",
                        "Quality Guarantee",
                    ].map((item, index) => (
                        <li key={index} className="flex items-center">
                            <span className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center mr-3">
                                ✓
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
