import React from 'react'

function Footer() {
    return (
        <>
            <div>
                <footer className="bg-gray-900 text-gray-300 py-16 flex flex-col justify-center items-center">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* About Section */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-white text-xl font-bold mb-4">About Us</h3>
                            <p className="text-sm leading-relaxed mb-4"><span className="text-indigo-400 font-bold">Developers</span> and Tech enthusiasts
                            </p>
                            <ul className="text-sm space-y-2">
                                <li className="flex items-center">
                                    <span className="text-indigo-400 text-lg mr-2">✓</span> Access free tools & resources.
                                </li>
                                <li className="flex items-center">
                                    <span className="text-indigo-400 text-lg mr-2">✓</span> Collaborate on open-source projects.
                                </li>
                                <li className="flex items-center">
                                    <span className="text-indigo-400 text-lg mr-2">✓</span> Learn and share knowledge.
                                </li>
                            </ul>
                            <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition">
                                Learn More
                            </button>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors duration-200">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors duration-200">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors duration-200">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors duration-200">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-5">
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    <i className="fab fa-facebook"></i> Facebook
                                </a>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                        <p className="text-sm">
                            © 2025 Your Website. All rights reserved. | Built with ❤️ by Ankit Kumar Barik
                        </p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer