import React from 'react';
import img from "../../../assets/services/Vastushastra.jpeg"
const VastServiceOverview = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Decorative blurred circles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute -top-10 left-0 w-72 h-72 bg-[#E62F35] rounded-full filter blur-3xl opacity-30 mix-blend-multiply"></div>
                <div className="absolute -bottom-10 right-0 w-72 h-72 bg-[#64C0ED] rounded-full filter blur-3xl opacity-30 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="text-sm uppercase font-semibold text-[#E62F35] tracking-wider mb-2 block">
                            Vastu Shastra Expertise
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Traditional <span className="text-[#64C0ED]">Vastu Wisdom</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            Vastu Shastra is an ancient Indian science of architecture and design that
                            aligns human dwellings with natural forces. Our experienced consultants help
                            you create balanced spaces for health, prosperity, and happiness.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Whether you're building new or improving an existing space, our Vastu solutions
                            harmonize energy flow while respecting modern aesthetics and functionality.
                        </p>

                    </div>

                    {/* Right Image */}
                    <div>
                        <div className="overflow-hidden rounded-xl shadow-xl">
                            <img
                                src={img}
                                alt="Vastu Consultation"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VastServiceOverview;
