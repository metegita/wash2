import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col justify-between">
            <Navbar />

            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 pt-24">
                <div className="max-w-3xl mx-auto text-gray-800">
                    <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy & Terms and Conditions</h1>
                    <p className="text-center text-sm text-gray-500 mb-10">
                        Last Updated: 12/02/2024
                    </p>

                    {/* Introduction */}
                    <section className="mb-8">
                        <p className="text-gray-600">
                            Welcome to <span className="font-semibold">PlanetWash</span>. We are dedicated to protecting your privacy and ensuring a secure and seamless experience. By accessing our website or using our app, you agree to the policies and terms outlined below.
                        </p>
                    </section>

                    {/* Privacy Policy Section */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

                        <h3 className="text-lg font-semibold mb-2">What We Collect</h3>
                        <p className="text-gray-600 mb-4">
                            We collect personal information such as your name, phone number, email address, pickup and delivery addresses, and payment details. This data helps us provide timely laundry pickups, deliveries, and support.
                        </p>

                        <p className="text-gray-600 mb-4">
                            We may also collect non-personal data like device type, browser version, IP address, and location to optimize performance and personalize your experience.
                        </p>

                        <h3 className="text-lg font-semibold mb-2">How We Use Your Data</h3>
                        <p className="text-gray-600 mb-4">
                            Your information is used solely to fulfill bookings, process payments, and improve services. We may send updates or offers, but we never sell your data. Select partners (like payment gateways and delivery agents) may receive your data under strict confidentiality.
                        </p>

                        <h3 className="text-lg font-semibold mb-2">Data Security</h3>
                        <p className="text-gray-600 mb-4">
                            We use encryption and standard security protocols to protect your data. However, no online system is fully secure, and usage is at your own risk.
                        </p>

                        <h3 className="text-lg font-semibold mb-2">Your Rights</h3>
                        <p className="text-gray-600 mb-4">
                            You can contact us at any time to update, correct, or delete your personal data.
                        </p>
                    </section>

                    {/* Terms & Conditions Section */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>

                        <p className="text-gray-600 mb-4">
                            By using PlanetWash, you confirm that you are at least 18 years old or have guardian consent. You agree to provide accurate information and keep your account credentials secure.
                        </p>

                        <p className="text-gray-600 mb-4">
                            When you book a laundry service, you agree to the pricing, pickup and delivery terms, and garment care details provided during booking. While we handle your items with care, PlanetWash is not liable for damage due to wear and tear, pre-existing conditions, or items left in garments. In rare cases of loss or damage, compensation is at our discretion and may be limited to a portion of the item’s declared value.
                        </p>

                        <p className="text-gray-600 mb-4">
                            Misuse, unauthorized access, or fraudulent activity is strictly prohibited. We may refuse service, suspend accounts, or cancel access for violations. Offers and discounts may change and vary by location.
                        </p>

                        <p className="text-gray-600 mb-4">
                            Payments must be made using available options like UPI, cards, or cash. Refunds, if applicable, will follow our refund policy. Availability of services, pickup slots, and delivery times may be impacted by location, weather, or unforeseen events.
                        </p>

                        <p className="text-gray-600 mb-4">
                            We may update this policy anytime. Continued use of our service means you accept any changes. Please check this page periodically for updates.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                        <p className="text-gray-600">
                            For questions about our Privacy Policy or Terms & Conditions, email us at{' '}
                            <a href="mailto:support@planetwash.in" className="text-blue-600 font-medium">
                                support@planetwash.in
                            </a>
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
