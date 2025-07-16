import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from "../../assets/home/image1.jpg";
import img2 from "../../assets/properties/Com/img3.jpeg";
import img4 from "../../assets/home/image4.jpg";

const HomeProperty = () => {
    const categories = [
        {
            title: 'Residential Properties',
            description: 'Uttarakhand has witnessed steady growth in real estate value over the years. With its scenic beauty, pleasant climate, and increasing urbanization, residential properties in Uttarakhand have the potential for long-term appreciation.',
            link: '/properties/residential',
            image: img1,
            stats: '12% Annual Growth'
        },
        {
            title: 'Commercial Properties',
            description: 'Uttarakhand offers excellent commercial opportunities with growing tourism and infrastructure. Our commercial properties provide high visibility and strategic locations for businesses.',
            link: '/properties/commercial',
            image: img2,
            stats: '8.5% Rental Yield'
        },

        {
            title: 'ROI Properties',
            description: 'Our carefully selected high-ROI properties offer investors exceptional returns. With our market expertise, we identify properties with the highest appreciation potential.',
            link: '/properties/roi',
            image: img4,
            stats: '15-20% ROI'
        },
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section className="relative py-6 md:md:-py-16 py-6 px-4 bg-gradient-to-b from-[#f8fafc] to-[#E5EDF5] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-15">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-[100px] mix-blend-multiply"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#E62F35] rounded-full filter blur-[100px] mix-blend-multiply"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-20">
                    <motion.div variants={fadeIn} className="mb-6">
                        <span className="inline-block px-4 py-1.5 bg-[#64C0ED]/10 text-[#64C0ED] font-medium rounded-full text-sm tracking-wide border border-[#64C0ED]/20">
                            PROPERTY PORTFOLIO
                        </span>
                    </motion.div>
                    <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Discover Uttarakhand's <br className="hidden md:block" />
                        <span className="text-[#E62F35] relative inline-block">
                            Finest Properties
                            <svg className="absolute -bottom-3 left-0 w-full h-3 text-[#E62F35]" viewBox="0 0 200 20">
                                <path d="M0,10 Q100,25 200,10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Curated selection of premium properties offering exceptional lifestyle and investment opportunities in the heart of Himalayas
                    </motion.p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="md:grid md:grid-cols-3 md:gap-8 space-y-8 md:space-y-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {categories.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={`${index === 2 ? 'mx-auto lg:mx-0' : ''}`}
                        >
                            <Link
                                to={item.link}
                                className="group relative block h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative h-80 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <div className="relative z-10">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-[#64C0ED] transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-200 mb-6 line-clamp-2">
                                            {item.description}
                                        </p>
                                        <span className="inline-flex items-center text-white group-hover:text-[#64C0ED] font-medium">
                                            Explore Properties
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>


                {/* Button */}
                <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-20">
                    <Link to={'/properties'} className="inline-flex items-center px-8 py-4 bg-[#64C0ED]  text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg relative overflow-hidden ">
                        <span className="relative z-10">Browse All Properties</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 relative z-10 transition-transform group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#E62F35] to-[#64C0ED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                </motion.div>
            </div>
        </section>

    );
};

export default HomeProperty;