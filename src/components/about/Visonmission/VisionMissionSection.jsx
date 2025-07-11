import React from "react";
import { motion } from "framer-motion";
import img from "../../../assets/about/vision/Vision-Mission.jpg";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const VisionMissionSection = () => {
    return (
        <>
            {/* Vision Section */}
            <section className="relative md:-py-16 py-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#E62F35] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div variants={fadeIn}>
                            <div className="flex items-center mb-6">
                                <div className="w-3 h-8 bg-[#E62F35] mr-3 rounded-full"></div>
                                <span className="text-sm font-semibold tracking-wider text-[#E62F35] uppercase">Our Vision</span>
                            </div>
                            <motion.h2
                                variants={fadeIn}
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
                            >
                                Redefining Real Estate <span className="text-[#E62F35]">Consultancy</span>
                            </motion.h2>

                            <motion.p variants={fadeIn} className="text-lg text-gray-600 leading-relaxed mb-6">
                                At <strong className="text-[#E62F35]">PropDoon</strong>, we envision a future where real estate transactions are seamless, transparent, and empowering for everyone involved.
                            </motion.p>

                            <motion.p variants={fadeIn} className="text-gray-600 leading-relaxed mb-8">
                                We're building a global platform with local expertise, combining cutting-edge technology with human insight to create exceptional property experiences.
                            </motion.p>

                            <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        ),
                                        title: "Innovation",
                                        desc: "Pioneering modern solutions in property consultancy"
                                    },
                                    {
                                        icon: (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        ),
                                        title: "Client-Centricity",
                                        desc: "Your needs drive every decision we make"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E62F35]/10"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-[#E62F35] to-[#ff6b6b] rounded-lg flex items-center justify-center mb-4 text-white">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            className="relative"
                        >
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#64C0ED] rounded-full opacity-20 filter blur-xl"></div>
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#E62F35] rounded-full opacity-20 filter blur-xl"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Our Vision"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Global Vision</h3>
                                        <p className="text-gray-200">Local expertise with worldwide reach</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section

                className="md:-py-16  py-6  relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    >
                        <motion.div
                            variants={fadeIn}
                            className="relative lg:order-first"
                        >
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#64C0ED] rounded-full opacity-20 filter blur-xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#E62F35] rounded-full opacity-20 filter blur-xl"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                                <img
                                    src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Our Mission"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Our Commitment</h3>
                                        <p className="text-gray-200">Transforming real estate experiences</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <div className="flex items-center mb-6">
                                <div className="w-3 h-8 bg-[#64C0ED] mr-3 rounded-full"></div>
                                <span className="text-sm font-semibold tracking-wider text-[#64C0ED] uppercase">Our Mission</span>
                            </div>
                            <motion.h2
                                variants={fadeIn}
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
                            >
                                Empowering <span className="text-[#64C0ED]">Your Journey</span>
                            </motion.h2>

                            <motion.p variants={fadeIn} className="text-lg text-gray-600 leading-relaxed mb-8">
                                To deliver transformative real estate experiences by integrating advanced technology, market intelligence, and human-centric service.
                            </motion.p>

                            <motion.div variants={fadeIn} className="space-y-6">
                                {[
                                    {
                                        title: "Empowerment Through Knowledge",
                                        desc: "Providing insights and tools for confident property decisions"
                                    },
                                    {
                                        title: "Radical Transparency",
                                        desc: "Complete honesty in every transaction and communication"
                                    },
                                    {
                                        title: "Innovative Solutions",
                                        desc: "Leveraging technology to simplify complex processes"
                                    },
                                    {
                                        title: "Sustainable Value Creation",
                                        desc: "Building long-term wealth for clients and communities"
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        variants={cardVariants}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="flex items-start space-x-5 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#64C0ED]/20"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-8 h-8 bg-gradient-to-br from-[#64C0ED] to-[#E62F35] rounded-full flex items-center justify-center text-white">
                                                <span className="font-bold text-sm">{index + 1}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h4>
                                            <p className="text-gray-600">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default VisionMissionSection;