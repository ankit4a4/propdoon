import React from 'react';
import { motion } from 'framer-motion';
import img from "../../../assets/services/archi/Architectural.jpg"

const ArchiServiceOverview = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="relative py-6 md:py-14 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#E62F35] rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
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
                            <div className="w-3 h-8 bg-[#64C0ED] mr-3 rounded-full"></div>
                            <span className="text-sm font-semibold tracking-wider text-[#64C0ED] uppercase">Our Expertise</span>
                        </div>

                        <motion.h2
                            variants={fadeIn}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
                        >
                            Architectural <span className="text-[#E62F35]">Innovation</span> & Excellence
                        </motion.h2>

                        <motion.p variants={fadeIn} className="text-lg text-gray-600 leading-relaxed mb-6">
                            At PropDoon, we believe great architecture is the perfect blend of vision, creativity,
                            and functionality. Our team brings together experienced architects and cutting-edge tools
                            to design spaces that are not only visually stunning but also structurally sound and user-focused.
                        </motion.p>

                        <motion.p variants={fadeIn} className="text-gray-600 leading-relaxed mb-6">
                            Whether it's residential, commercial, or institutional, each project we undertake is
                            deeply rooted in context and client aspiration. We work hand-in-hand with clients,
                            understanding their needs, lifestyle, and goals to deliver tailor-made design solutions.
                        </motion.p>



                    </motion.div>

                    <motion.div
                        variants={imageVariants}
                        className="relative"
                    >
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#64C0ED] rounded-full opacity-20 filter blur-xl"></div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#E62F35] rounded-full opacity-20 filter blur-xl"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
                            <img
                                src={img}
                                alt="Architecture Services"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Client-Centric Architecture</h3>
                                    <p className="text-gray-200">Driven by purpose, inspired by people</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ArchiServiceOverview;
