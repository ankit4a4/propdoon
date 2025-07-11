import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img from "../../../assets/services/inteior.jpeg"

const InteriorServiceOverview = () => {
    return (
        <section className="relative md:-py-16  py-6  px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Decorative background circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#E62F35] rounded-full opacity-10 filter blur-3xl mix-blend-multiply"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#64C0ED] rounded-full opacity-10 filter blur-3xl mix-blend-multiply"></div>

            <div className="container-max relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center mb-4">
                            <div className="w-3 h-8 bg-[#64C0ED] rounded-full mr-3"></div>
                            <span className="uppercase text-sm font-semibold tracking-wide text-[#64C0ED]">
                                Interior Design
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Transform Your <span className="text-[#E62F35]">Space</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            Our interior design team specializes in creating spaces that are not only visually stunning but also highly functional and comfortable.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            From concept to completion, we ensure that every element harmonizes to reflect your personality while enhancing your lifestyle. Whether it's a cozy home or a dynamic workspace — we make it exceptional.
                        </p>


                    </motion.div>

                    {/* Image section */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -top-6 -left-6 w-28 h-28 bg-[#64C0ED] rounded-full filter blur-xl opacity-20 z-0"></div>
                        <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-[#E62F35] rounded-full filter blur-xl opacity-20 z-0"></div>

                        <img
                            src={img}
                            alt="Interior Design Services"
                            className="rounded-2xl shadow-2xl relative z-10 w-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InteriorServiceOverview;
