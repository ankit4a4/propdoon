import React from "react";
import { FaShieldAlt, FaLightbulb, FaCity } from "react-icons/fa";
import bg from "../../assets/home/bg2.webp";

const WoWeAreAbout = () => {
    return (
        <section
            className="relative py-6 md:md:-py-16 py-6 overflow-hidden"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            data-aos="fade-up"
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

            {/* Decorative blobs */}
            <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
                <div className="absolute top-20 left-10 w-40 h-40 bg-[#E62F35] rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#E62F35] rounded-full filter blur-3xl"></div>
            </div>

            <div className="container-max px-4 max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center mb-4">
                        <div className="w-12 h-0.5 bg-[#E62F35] mr-3"></div>
                        <span className="text-[#E62F35] font-medium uppercase tracking-wider text-sm">Who We Are</span>
                        <div className="w-12 h-0.5 bg-[#E62F35] ml-3"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 relative inline-block">
                        Your Trusted Real Estate Allies in Dehradun
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E62F35] to-[#c9341e] transform translate-y-2 scale-x-90"></span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
                    <div className="space-y-8">
                        {/* Card 1 */}
                        <div className="p-8 bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#E62F35] text-gray-800">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <FaShieldAlt className="text-[#E62F35] mr-2" />
                                Our Foundation
                            </h3>
                            <p>
                                <strong className="text-[#E62F35]">PropDoon</strong> is a client-focused real estate consultancy based in the heart of Dehradun. Since our inception in 2015, we've been committed to simplifying property transactions with integrity, transparency, and local expertise.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#E62F35] text-gray-800">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <FaLightbulb className="text-[#E62F35] mr-2" />
                                Our Approach
                            </h3>
                            <p>
                                Our strength lies in personalized solutions backed by data-driven insights, legal accuracy, and honest guidance. We're not just agents — we're your long-term real estate partners.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative">
                        <div className="p-8 bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#E62F35] text-gray-800 transform hover:-translate-y-2">
                            <h3 className="text-2xl font-bold mb-4 flex items-center">
                                <FaCity className="text-[#E62F35] mr-2" />
                                Our Expertise
                            </h3>
                            <p className="mb-6">
                                With a deep understanding of Dehradun's growing real estate landscape, we offer tailored services that support buyers, sellers, and investors at every stage. Whether it's finding your dream home, investing smartly, or selling with confidence — PropDoon stands by your side.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Market Insights",
                                    "Legal Accuracy",
                                    "Tailored Solutions",
                                    "Long-term Support",
                                ].map((point, idx) => (
                                    <div key={idx} className="flex items-center">
                                        <div className="w-2 h-2 bg-[#E62F35] rounded-full mr-2"></div>
                                        <span className="text-sm font-medium text-gray-800">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Shape */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#E62F35] opacity-20 rounded-full filter blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WoWeAreAbout;
