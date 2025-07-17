import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <section className="relative bg-white py-20 px-4 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')]"></div>
            </div>

            <div className="max-w-6xl mx-auto relative">
                <motion.div
                    className="flex flex-col lg:flex-row gap-12 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Image/Video Section - Left Side */}
                    <motion.div
                        className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-2xl"
                        variants={fadeIn}
                    >
                        <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                alt="Our office"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <h3 className="text-xl font-semibold mb-2">Our Dehradun Office</h3>
                                    <p className="text-gray-200">Where innovation meets real estate expertise</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* Content Section - Right Side */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={fadeIn}
                    >
                        <div className="mb-6 flex items-center">
                            <div className="w-12 h-0.5 bg-[#64C0ED] mr-4"></div>
                            <span className="text-[#64C0ED] font-medium uppercase tracking-wider text-sm">About PropDoon</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Trusted Real Estate Partners in <span className="text-[#E62F35]">Dehradun</span>
                        </h2>
                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p className="mb-4">
                                Founded in 2015, PropDoon has established itself as Dehradun's premier real estate consultancy, helping clients navigate the property market with confidence and ease.
                            </p>
                            <p className="mb-6">
                                Our team of seasoned professionals combines local market knowledge with national real estate trends to deliver exceptional results for buyers, sellers, and investors alike.
                            </p>
                        </div>

                        {/* Key Services */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {[
                                'Property Valuation',
                                'Market Analysis',
                                'Legal Documentation',
                                'Investment Advisory',
                                'Home Staging',
                                'Negotiation Services'
                            ].map((service, index) => (
                                <div key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-[#E62F35] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700">{service}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
