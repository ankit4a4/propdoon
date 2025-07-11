import React from 'react';
import { motion } from 'framer-motion';

const DesignProcess = () => {
    const designProcess = [
        {
            step: '01',
            title: 'Consultation & Brief',
            description: 'Understanding your vision, requirements, and project constraints',
            icon: '🗣️'
        },
        {
            step: '02',
            title: 'Site Analysis',
            description: 'Comprehensive site study including topography, climate, and regulations',
            icon: '📍'
        },
        {
            step: '03',
            title: 'Concept Development',
            description: 'Initial design concepts and spatial planning based on your needs',
            icon: '💡'
        },
        {
            step: '04',
            title: 'Design Development',
            description: 'Detailed architectural drawings and 3D visualizations',
            icon: '✏️'
        },
        {
            step: '05',
            title: 'Technical Drawings',
            description: 'Construction documents, specifications, and technical details',
            icon: '📐'
        },
        {
            step: '06',
            title: 'Project Support',
            description: 'Construction administration and project supervision',
            icon: '👷'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                duration: 0.5
            }
        }
    };

    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#E62F35] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold tracking-wider text-[#E62F35] uppercase mb-3">
                        Our Methodology
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Design <span className="text-[#64C0ED]">Process</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A collaborative approach that ensures your vision becomes reality
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {designProcess.map((step, index) => (
                        <motion.div 
                            key={index}
                            variants={item}
                            whileHover={{ 
                                y: -5,
                                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                            }}
                            className="group"
                        >
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 group-hover:border-[#64C0ED]/20 relative overflow-hidden">
                                {/* Step number */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#E62F35] text-white font-bold text-lg flex items-center justify-center rounded-bl-xl">
                                    {step.step}
                                </div>
                                
                                {/* Icon */}
                                <div className="w-16 h-16 bg-[#64C0ED]/10 rounded-full flex items-center justify-center text-3xl mb-6 text-[#64C0ED] group-hover:bg-[#64C0ED]/20 transition-colors duration-300">
                                    {step.icon}
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 mb-0 flex-grow">
                                    {step.description}
                                </p>
                                
                                {/* Connector line (hidden on last item) */}
                                {index !== designProcess.length - 1 && (
                                    <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gray-200 group-hover:bg-[#64C0ED] transition-colors duration-300">
                                        <div className="absolute right-0 w-4 h-1 bg-[#64C0ED] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default DesignProcess;