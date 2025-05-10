import React from "react";
import img from '../assets/11.png'
import img2 from '../assets/12.png'

import img3 from '../assets/13.png'

import img4 from '../assets/14.png'


const steps = [
    {
        step: "STEP 1",
        title: "Pickup",
        image: img, // Replace with your image path
    },
    {
        step: "STEP 2",
        title: "Wash & Dry",
        image: img2,
    },
    {
        step: "STEP 3",
        title: "Fold",
        image: img3,
    },
    {
        step: "STEP 4",
        title: "Delivery",
        image: img4,
    },
];

const Steps = () => {
    return (
        <div className="bg-[#f5faff] py-12 px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                How We Make Laundry Easy
            </h2>
            <p className="text-gray-500 mb-10">
                From doorstep pickup to fresh delivery in 4 simple steps
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-4 w-full max-w-md text-center"
                    >
                        <p className="text-xl text-blue-500 font-medium mb-1">
                            {step.step}
                        </p>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            {step.title}
                        </h3>
                        <img
                            src={step.image}
                            alt={step.title}
                            className="h-60 mx-auto object-cover"
                        />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Steps;
