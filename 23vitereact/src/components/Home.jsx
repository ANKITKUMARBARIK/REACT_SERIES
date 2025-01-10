import React from 'react'

function Home() {
    return (
        <>
            <div className="bg-gray-900 font-sans min-h-screen">
                <section className="bg-indigo-100 py-16">
                    <div className="max-w-7xl mx-auto text-center px-6">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">
                            Build Amazing Experiences
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            We create beautiful and functional websites to empower your business
                            and ideas. Join us in shaping the future of the web.
                        </p>
                        <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400">
                            Get Started
                        </button>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-6">
                        <h3 className="text-4xl font-bold text-center text-gray-200 mb-12">
                            What We Offer
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h4 className="text-2xl font-semibold text-green-600 mb-4">
                                    Web Development
                                </h4>
                                <p className="text-gray-700">
                                    High-quality, responsive websites tailored to your needs.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h4 className="text-2xl font-semibold text-green-600 mb-4">
                                    App Design
                                </h4>
                                <p className="text-gray-700">
                                    Stunning designs to elevate your mobile and web apps.
                                </p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <h4 className="text-2xl font-semibold text-green-600 mb-4">
                                    Consulting
                                </h4>
                                <p className="text-gray-700">
                                    Expert advice to help you achieve your goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home