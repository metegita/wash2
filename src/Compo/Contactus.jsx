// import React from "react";
// import img from '../assets/17.png'

// const ContactUs = () => {

//     return (
//         <div className="flex flex-col md:flex-row min-h-screen">
//             {/* Left - Form Section */}
//             <div className="w-full md:w-1/2 bg-[#f5fbfd] flex flex-col justify-center px-8 py-12">
//                 <div className="max-w-md mx-auto">
//                     <h1 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h1>
//                     <p className="text-gray-600 mb-6">
//                         We're here to help you keep things clean and green. Reach out to us for
//                         inquiries, feedback, or support!
//                     </p>
//                     <form className="space-y-4">
//                         <input
//                             type="text"
//                             placeholder="Name"
//                             className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-[#00b5e2] bg-[#F4F4F4] py-2"
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             className="w-full border-b-2  border-gray-200 focus:outline-none focus:border-[#00b5e2] bg-[#F4F4F4] py-2"
//                         />
//                         <textarea
//                             placeholder="Address"
//                             rows="4"
//                             className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-[#00b5e2] bg-[#F4F4F4] py-2"
//                         />
//                         <button
//                             type="submit"
//                             className="w-full bg-[#00b5e2] text-white font-medium py-2 rounded-md hover:bg-[#00a0c7] transition"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>

//             {/* Right - Image Section */}
//             <div className="w-full md:w-1/2">
//                 <img
//                     src={img} // Replace with your image path
//                     alt="Contact Image"
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ContactUs;


import React, { useState } from "react";
// import { useCreateContactMutation } from "../redux/contactApi"; // Import the mutation hook
import img from "../assets/17.png";
import { useCreateContactMutation } from "../redux/ContactApi";

const ContactUs = () => {
    // Use a single useState to store all form values
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        address: "",
    });

    // Calling the mutation hook
    const [createContact, { isLoading, error, data }] = useCreateContactMutation();

    const handleChange = (e) => {
        // Update form data state dynamically based on input name
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value, // Update the specific field
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Call the mutation to post the data
        try {
            await createContact(formData);
        } catch (err) {
            console.error("Error submitting contact:", err);
        }

        // Clear the form fields after submission
        setFormData({
            name: "",
            contact: "",
            address: "",
        });
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left - Form Section */}
            <div className="w-full md:w-1/2 bg-[#f5fbfd] flex flex-col justify-center px-8 py-12">
                <div className="max-w-md mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h1>
                    <p className="text-gray-600 mb-6">
                        We're here to help you keep things clean and green. Reach out to us for
                        inquiries, feedback, or support!
                    </p>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name" // Added name attribute
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-[#00b5e2] bg-[#F4F4F4] py-2"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Contact    "
                            name="contact" // Added name attribute
                            value={formData.contact}
                            onChange={handleChange}
                            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-[#00b5e2] bg-[#F4F4F4] py-2"
                            required
                        />
                        <textarea
                            placeholder="Address"
                            name="address" // Added name attribute
                            rows="4"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border-b-2 border-gray-200 focus:outline-none focus:border-[#00b5e2] bg-[#F4F4F4] py-2"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#00b5e2] text-white font-medium py-2 rounded-md hover:bg-[#00a0c7] transition"
                            disabled={isLoading}
                        >
                            {isLoading ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                    {error && <p className="mt-4 text-sm text-red-600">Error: {error.message}</p>}
                    {data && !error && <p className="mt-4 text-sm text-green-600">Contact submitted successfully!</p>}
                </div>
            </div>

            {/* Right - Image Section */}
            <div className="w-full md:w-1/2">
                <img
                    src={img} // Replace with your image path
                    alt="Contact Image"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default ContactUs;
