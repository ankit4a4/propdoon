import React from "react";

const AboutPropDoonSection = () => {
    return (
        <section className="py-6 md:md:-py-16 py-6 bg-[#FFFFFF]" data-aos="fade-up">
            <div className="container-max px-4">
                <div className="flex flex-col md:flex-row items-center gap-10 rounded-2xl shadow-xl p-3 md:p-6 border border-[#6764623b] bg-[#FFFFFF]">
                    {/* Left - Text Content */}
                    <div className="md:w-1/2 space-y-5">
                        {/* Section title line */}
                        <div className="flex items-center">
                            <div className="w-12 h-0.5 bg-[#64C0ED] mr-3"></div>
                            <span className="text-[#64C0ED] font-medium uppercase tracking-wider text-sm">About PropDoon</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Trusted Real Estate Partners in <span className="text-[#E62F35]">Dehradun</span>
                        </h2>

                        <p className="text-lg text-[#1C1C1C]">
                            Founded in 2012, <strong>PropDoon</strong> has emerged as Dehradun's most trusted name in real estate consultancy. We simplify property transactions and empower clients with market clarity and professional support.
                        </p>

                        <p className="text-lg text-[#1C1C1C]">
                            With a dedicated team of seasoned experts, we bridge local knowledge with broader real estate trends — ensuring success for first-time buyers, property investors, and sellers alike. From transparent documentation to high-ROI advisory, every step is crafted for your ease.
                        </p>

                        {/* Services / Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                            {[
                                "Property Valuation",
                                "Market Analysis",
                                "Legal Documentation",
                                "Investment Advisory",
                                "Home Staging",
                                "Negotiation Services"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <svg className="w-5 h-5 text-[#E62F35] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <span className="text-gray-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image */}
                    <div className="md:w-1/2">
                        <div className="relative rounded-xl overflow-hidden shadow-lg h-80 w-full">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Dehradun Office"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent p-4 flex items-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold">Our Dehradun Headquarters</h3>
                                    <p className="text-sm text-gray-200">
                                        Where innovation meets real estate expertise
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPropDoonSection;
