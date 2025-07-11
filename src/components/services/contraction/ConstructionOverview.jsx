import React from 'react';
import img from "../../../assets/services/contraction.jpeg"
const ConstructionOverview = () => {
    return (
        <section className="relative md:-py-16  py-6 px-4 md:px-0 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#E62F35] rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-3xl opacity-10 mix-blend-multiply"></div>
            </div>

            <div className="container-max relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Side */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="w-2 h-8 bg-[#E62F35] mr-3 rounded-full"></div>
                            <span className="text-sm font-semibold tracking-wider text-[#E62F35] uppercase">
                                Excellence in Construction
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Building the Future with <span className="text-[#E62F35]">Integrity</span> & <span className="text-[#64C0ED]">Innovation</span>
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            For over <strong>15 years</strong>, we’ve been crafting durable, modern, and beautiful spaces. Whether it's a
                            luxury home, multi-story apartment, commercial complex, or industrial facility — our construction
                            approach is rooted in <strong>engineering precision</strong>, safety-first execution, and timeless design.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-4">
                            Our expertise covers the entire project lifecycle — from <strong>site planning</strong> and material sourcing
                            to <strong>on-site execution</strong> and final handover. We follow strict quality protocols and use
                            advanced technology to ensure every square foot we build stands the test of time.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            With a focus on sustainable materials, trained manpower, and professional project management,
                            we’ve earned the trust of hundreds of clients across residential, hospitality, corporate, and
                            institutional sectors.
                        </p>

                    </div>

                    {/* Image Side */}
                    <div className="relative">
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#64C0ED] rounded-full opacity-20 filter blur-2xl"></div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#E62F35] rounded-full opacity-20 filter blur-2xl"></div>

                        <img
                            src={img}
                            alt="Construction Services"
                            className="relative z-10 w-full rounded-xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConstructionOverview;
