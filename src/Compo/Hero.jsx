import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/1.png';
import img1 from '../assets/2.png';
import img2 from '../assets/3.png';
import img3 from '../assets/4.png';
import img4 from '../assets/5.png';
import img5 from '../assets/6.png';
import hero from '../assets/20.png';
import hero2 from '../assets/21.png';

const images = [img, img1, img2, img3, img4, img5];

export default function LaundryPromo() {
    return (
        <div className="min-h-screen bg-[#f9fcff] flex flex-col md:flex-row  ">
            {/* Left Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center relative space-y-4 px-4 sm:px-6 py-16">
                {/* Bubble Images */}
                <img
                    src={hero}
                    alt="bubbles"
                    className="absolute top-4 left-4 w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 opacity-70 z-0"
                />
                <img
                    src={hero2}
                    alt="bubbles"
                    className="absolute bottom-6 right-6 w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 opacity-70 z-0"
                />

                {/* Text Content */}
                <div className="z-10 text-center sm:text-left">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-6xl font-semibold text-gray-800 leading-snug">
                        Clean Clothes <br className="hidden sm:block" /> Happy Life
                    </h1>

                    <p className="text-xs sm:text-sm text-gray-600 max-w-xs sm:max-w-sm mx-auto sm:mx-0 mt-2">
                        Get your laundry picked up, cleaned, and delivered — fast and fresh
                    </p>

                    <button className="mt-4 bg-blue-300  hover:bg-blue-600 text-white px-4 py-1.5 rounded shadow text-xs sm:text-sm">
                        Download Our App
                    </button>
                </div>
            </div>





            {/* Right Section - Marquee */}
            <div className="w-full md:w-1/2 flex gap-4 h-[600px] overflow-hidden px-4">
                {/* Column 1 - Scroll Up */}
                <motion.div
                    className="flex flex-col gap-4"
                    animate={{ y: ['0%', '-100%'] }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                >
                    {[...images, ...images].map((src, i) => (
                        <img
                            key={`up-${i}`}
                            src={src}
                            alt={`Laundry ${i}`}
                            className="w-full rounded-lg object-cover"
                        />
                    ))}
                </motion.div>

                {/* Column 2 - Scroll Down */}
                <motion.div
                    className="flex flex-col gap-4"
                    animate={{ y: ['-100%', '0%'] }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                >
                    {[...images, ...images].map((src, i) => (
                        <img
                            key={`down-${i}`}
                            src={src}
                            alt={`Laundry ${i}`}
                            className="w-full rounded-lg object-cover"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
