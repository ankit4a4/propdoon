import React from "react";
import { motion } from "framer-motion";

/*  Type of each service item:
    {
      title: string,
      description: string,
      image: string,
      features: string[],
      color: "from-[#HEX] to-[#HEX]"  // tailwind gradient class
    }
*/

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 10, duration: 0.8 },
    },
};

const ServiceCardsSection = ({
    services = [],
    bgImage,
    sectionHeading = "Our Services",
    subHeading = "Comprehensive solutions tailored to your needs",
}) => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* background + overlay */}
            {bgImage && (
                <>
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center bg-fixed"
                        style={{ backgroundImage: `url('${bgImage}')` }}
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                    />
                    <div className="absolute inset-0 bg-black/90" />
                </>
            )}

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                {/* heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-sm font-semibold tracking-wider text-[#64C0ED] uppercase mb-3">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {sectionHeading.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className="text-[#E62F35]">
                            {sectionHeading.split(" ").slice(-1)}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subHeading}</p>
                </motion.div>

                {/* card grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {services.map((svc, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                            }}
                            className="group"
                        >
                            <div className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-white/10">
                                {/* image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={svc.image}
                                        alt={svc.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    
                                </div>

                                {/* text */}
                                <div className="p-8 flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {svc.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">{svc.description}</p>

                                    <div className="space-y-3">
                                        {svc.features?.map((f, i) => (
                                            <div key={i} className="flex items-start">
                                                <div className="flex-shrink-0 mt-1">
                                                    <div className="w-5 h-5 rounded-full bg-[#64C0ED] flex items-center justify-center text-white">
                                                        <svg
                                                            className="w-3 h-3"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="ml-3 text-gray-700">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceCardsSection;
