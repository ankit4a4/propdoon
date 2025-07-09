import React from "react";
import {
    FaHome,
    FaDraftingCompass,
    FaPaintRoller,
    FaYinYang,
    FaArrowRight
} from "react-icons/fa";

const services = [
    {
        icon: <FaHome className="text-3xl" />,
        title: "End-to-End Construction",
        desc: "From foundation to finishing, we deliver quality construction with premium materials and skilled craftsmanship.",
        service: "Construction",
    },
    {
        icon: <FaDraftingCompass className="text-3xl" />,
        title: "Innovative Architecture",
        desc: "Contemporary designs that blend aesthetics, functionality and compliance with local building regulations.",
        service: "Architecture",
    },
    {
        icon: <FaPaintRoller className="text-3xl" />,
        title: "Bespoke Interiors",
        desc: "Transform spaces with our interior designs that reflect your personality while maximizing utility.",
        service: "Interior Designing",
    },
    {
        icon: <FaYinYang className="text-3xl" />,
        title: "Vastu-Compliant Spaces",
        desc: "Harmonious designs that balance modern living with ancient Vastushastra principles for positive energy flow.",
        service: "Vastushastra",
    },
];

const WhyChooseUsSection = () => {
    return (
        <section className="py-20 bg-[#f5f5f5] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#DF8534]/10 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#DF8534]/5 rounded-full translate-x-32 translate-y-32"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-[#DF8534]">PropDoon</span> for Your Property Needs
                    </h2>
                    <div className="w-20 h-1 bg-[#DF8534] mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We bring together construction, architecture, interiors, and Vastu to offer holistic, end-to-end property solutions designed specifically for Indian homeowners.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((item, index) => (
                        <div key={index} className="group relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-200"></div>
                            <div className="relative p-8 h-full">
                                <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-xl bg-[#DF8534] text-white">
                                    {item.icon}
                                </div>
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#DF8534] bg-orange-50 rounded-full mb-3">
                                    {item.service}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-[#DF8534] cursor-pointer text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl flex items-center mx-auto">
                        Explore All Services
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
