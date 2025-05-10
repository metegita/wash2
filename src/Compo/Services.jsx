import React from 'react';
import img from '../assets/9.png';
import img2 from '../assets/7.png';
import img3 from '../assets/8.png';

const services = [
    {
        title: 'Wash & Fold',
        description: 'Hassle-free laundry folding and fresh delivery.',
        image: img,
    },
    {
        title: 'Dry Cleaning',
        description: 'Professional dry cleaning for delicate fabrics.',
        image: img2,
    },
    {
        title: 'Wash & Iron',
        description: 'Freshly washed and neatly ironed clothes, ready to wear.',
        image: img3,
    },
];

export default function Service() {
    return (
        <section className="bg-blue-50 py-8 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-2 text-gray-800">Our Service</h2>
                <p className="text-gray-600 mb-10">
                    Affordable. Convenient. Hygienic. Explore what we do best.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-md"
                        >
                            <div className="relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 w-full backdrop-blur-sm bg-gray-300/50 text-black text-left px-4 py-3">
                                    <h3 className="text-lg font-bold">{service.title}</h3>
                                    <p className="text-sm">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
