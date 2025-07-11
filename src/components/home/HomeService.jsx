import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaBuilding,
    FaDraftingCompass,
    FaCouch,
    FaSun,
    FaArrowRight
} from 'react-icons/fa';
import bg from "../../assets/home/bg.jpg";

const HomeService = () => {
    const services = [
        {
            icon: <FaBuilding className="w-8 h-8" />,
            title: 'Construction',
            description: 'Quality construction services with modern techniques and premium materials for lasting structures.',
            href: '/services#construction'
        },
        {
            icon: <FaDraftingCompass className="w-8 h-8" />,
            title: 'Architecture',
            description: 'Innovative architectural designs that blend aesthetic appeal with functional excellence.',
            href: '/services#architecture'
        },
        {
            icon: <FaCouch className="w-8 h-8" />,
            title: 'Interior Design',
            description: 'Transform your spaces with bespoke interior designs that reflect your unique personality.',
            href: '/services#interior'
        },
        {
            icon: <FaSun className="w-8 h-8" />,
            title: 'Vastushastra',
            description: 'Harmonious living through traditional Vastu principles combined with modern design.',
            href: '/services#vastu'
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
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
        <section
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
            className="relative py-6  md:md:-py-16 py-6 px-4 overflow-hidden"
        >
            {/* Animated gradient elements */}
            <div className="absolute inset-0 overflow-hidden opacity-20 z-0">
                <motion.div
                    initial={{ x: -100, y: -100 }}
                    animate={{ x: [0, 100, 0], y: [0, 100, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-3xl mix-blend-overlay"
                ></motion.div>
                <motion.div
                    initial={{ x: 100, y: 100 }}
                    animate={{ x: [0, -100, 0], y: [0, -100, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-0 w-64 h-64 bg-[#E62F35] rounded-full filter blur-3xl mix-blend-overlay"
                ></motion.div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center mb-16 md:mb-20"
                >
                    <motion.div variants={fadeIn} className="flex justify-center mb-4">
                        <div className="w-16 h-1 bg-[#64C0ED] rounded-full"></div>
                    </motion.div>
                    <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-[#E62F35]">Premium</span> Services
                    </motion.h2>
                    <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Delivering excellence through comprehensive solutions tailored for your construction and real estate vision
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                to={'/#'}
                                className="group relative h-full block p-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:border-[#64C0ED]/50"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute -inset-1 bg-[#64C0ED]/20 blur-md group-hover:blur-lg transition-all duration-500"></div>
                                </div>

                                {/* Icon container */}
                                <div className="relative z-10 mb-6 w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-[#E6F4FD] text-[#64C0ED] group-hover:bg-[#64C0ED] group-hover:text-white transition-all duration-300 shadow-sm">
                                    <motion.div
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    >
                                        {service.icon}
                                    </motion.div>
                                </div>

                                <div className="relative z-10 text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#64C0ED] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center justify-center text-[#64C0ED] font-medium group-hover:underline">
                                        Explore service
                                        <motion.span
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 500 }}
                                        >
                                            <FaArrowRight className="ml-2" />
                                        </motion.span>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        to={'/#'}
                        className="inline-flex items-center px-8 py-3.5 bg-[#64C0ED] hover:bg-[#4AAEDB] text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg group"
                    >
                        <span className="mr-2">Discover All Services</span>
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="inline-block"
                        >
                            <FaArrowRight />
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeService;
