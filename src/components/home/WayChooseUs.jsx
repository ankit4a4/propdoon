import React from 'react';
import { motion } from 'framer-motion';
import {
    FaCheckCircle,
    FaClock,
    FaUsers,
    FaChartLine,
    FaHandshake,
    FaLightbulb
} from 'react-icons/fa';
import bg from "../../assets/home/bg2.webp";

const WayChooseUs = () => {
    const features = [
        {
            icon: <FaCheckCircle className="w-8 h-8" />,
            title: "Quality Assurance",
            description: "Rigorous quality checks at every stage ensure flawless execution and lasting results for your property investments.",
            stat: "99.7% Satisfaction"
        },
        {
            icon: <FaClock className="w-8 h-8" />,
            title: "On-Time Delivery",
            description: "Precision scheduling and proactive management guarantee your projects are completed as promised, every time.",
            stat: "On Schedule 98%"
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Expert Team",
            description: "Certified professionals with 15+ years average experience handling Uttarakhand's unique property challenges.",
            stat: "50+ Experts"
        },
        {
            icon: <FaChartLine className="w-8 h-8" />,
            title: "Market Insight",
            description: "Data-driven strategies leveraging our proprietary Uttarakhand real estate intelligence platform.",
            stat: "12% Better ROI"
        },
        {
            icon: <FaHandshake className="w-8 h-8" />,
            title: "Trusted Partners",
            description: "Exclusive partnerships with top builders, architects, and financial institutions across the region.",
            stat: "200+ Partners"
        },
        {
            icon: <FaLightbulb className="w-8 h-8" />,
            title: "Innovative Solutions",
            description: "Cutting-edge technology and creative approaches tailored to Himalayan property development.",
            stat: "15 Patents"
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section
            style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="relative py-6 md:py-16 px-4 overflow-hidden"
        >
            {/* Black overlay on background */}
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFB703] rounded-full filter blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="text-center mb-20"
                >
                    <motion.div variants={fadeIn} className="mb-6">
                        <span className="inline-block px-4 py-2 bg-[#FFB703]/10 text-[#FFB703] font-medium rounded-full text-sm tracking-wider border border-[#FFB703]/20">
                            OUR DIFFERENCE
                        </span>
                    </motion.div>
                    <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Why <span className="relative">
                            <span className="text-[#FFB703]">Choose PropDoon</span>
                            <svg className="absolute -bottom-3 left-0 w-full h-3 text-[#FFB703]" viewBox="0 0 200 20">
                                <path d="M0,10 Q100,25 200,10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        We redefine real estate excellence through unmatched expertise, innovative solutions, and
                        client-focused service in the Uttarakhand property market
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative"
                        >
                            <div className="h-full p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                                {/* Feature icon */}
                                <div className="relative z-10 mb-6 w-16 h-16 rounded-2xl bg-[#FFF3D8] text-[#FFB703] flex items-center justify-center group-hover:bg-[#FFB703] group-hover:text-white transition-all duration-300">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="transition-transform duration-300"
                                    >
                                        {feature.icon}
                                    </motion.div>
                                </div>

                                {/* Feature content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FFB703] transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {feature.description}
                                    </p>
                                    <span className="inline-block px-3 py-1 bg-[#FFB703]/10 text-[#FFB703] text-sm font-medium rounded-full">
                                        {feature.stat}
                                    </span>
                                </div>

                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FFB703]/5 to-[#FFB703]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

              
            </div>
        </section>
    );
};

export default WayChooseUs;
