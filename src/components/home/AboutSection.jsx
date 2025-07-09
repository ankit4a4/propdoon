import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="relative bg-gradient-to-b from-gray-50 to-white py-6  md:py-16 px-4 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-20 left-10 w-40 h-40 bg-[#FFB703] rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Text Section */}
                    <motion.div variants={fadeIn}>
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-1 bg-[#FFB703] mr-4"></div>
                            <span className="text-[#FFB703] font-semibold uppercase tracking-wider">Who We Are</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Redefining <span className="text-[#FFB703]">Real Estate</span> Excellence
                        </h2>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At <span className="font-semibold text-[#FFB703]">PropDoon</span>, we understand that navigating the real estate market can be complex and daunting. That's why we're here to simplify the process for you.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                As a premier real estate consultancy service, we pride ourselves on offering comprehensive solutions tailored to meet your unique needs, whether you're buying, selling, or investing.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-[#FFB703] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Personalized Property Matching</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-[#FFB703] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Market Analysis & Insights</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-[#FFB703] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">End-to-End Transaction Support</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-[#FFB703] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">Legal & Documentation Assistance</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link
                                to={'/about'}
                                className="px-8 py-4 bg-[#FFB703] hover:bg-[#FFA000] text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                            >
                                Learn More About Us
                            </Link>
                            <Link
                                to={'/contact'}
                                className="px-8 py-4 border-2 border-[#FFB703] text-[#FFB703] hover:bg-[#FFF3D8] font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Contact Our Team
                            </Link>
                        </div>
                    </motion.div>

                    {/* Media Section */}
                    <motion.div variants={fadeIn} className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    className="w-full h-full min-h-[400px]"
                                    src="https://www.youtube.com/embed/4SO39rR4wBI?si=m-n-EsEQ5PUDnZkz"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        
                        {/* Stats overlay */}
                        <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl w-3/4">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-4xl font-bold text-[#FFB703]">10+</h3>
                                    <p className="text-gray-600 mt-2">Years Experience</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-[#FFB703]">500+</h3>
                                    <p className="text-gray-600 mt-2">Happy Clients</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;