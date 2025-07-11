import React from 'react';
import { motion } from 'framer-motion';
import img from "../../../assets/about/companyoverview/properties.jpg"

const OurAchievements = () => {
    const stats = [
        { number: '500+', label: 'Projects Completed', icon: '🏗️' },
        { number: '15+', label: 'Years Experience', icon: '📅' },
        { number: '1000+', label: 'Happy Clients', icon: '😊' },
        { number: '50+', label: 'Expert Team', icon: '👥' }
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100, damping: 10 }
        }
    };

    return (
        <section className="relative md:-md:-py-16 py-6 py-6 overflow-hidden">
            {/* Background image + overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={img}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Overlay: gradient + dark */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#64C0ED]/70 to-[#E62F35]/70 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            {/* Content wrapper with relative z-10 */}
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our <span className="text-[#E62F35]">Achievements</span>
                    </h2>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Numbers that reflect our commitment to excellence
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
                            }}
                            className="group"
                        >
                            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-[#E62F35]/30 transition-all duration-300 h-full flex flex-col items-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#64C0ED]/15 to-[#E62F35]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-6 text-white backdrop-blur-sm group-hover:bg-[#E62F35] transition-all duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-bold text-white mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-200 font-medium text-lg text-center">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurAchievements;
