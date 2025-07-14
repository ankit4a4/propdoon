import React from 'react';
import img from "../../../assets/home/image2.jpeg";

const ComDetails = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT: Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#64C0ED] mb-6">
                            Strategic <span className="text-[#E62F35]">Commercial Investments</span>
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Our commercial properties are strategically located in prime business
                            districts, offering excellent connectivity, modern infrastructure, and
                            high growth potential. Whether you're looking for office spaces, retail
                            outlets, or warehouse facilities, we have options that cater to diverse
                            business needs.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Each commercial property is selected for its location advantages,
                            rental potential, and long-term appreciation prospects. Our portfolio
                            includes ready-to-move properties as well as under-construction projects
                            with attractive pre-launch pricing.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#E62F35] mb-1">12–18%</div>
                                <div className="text-gray-600 text-sm">Annual ROI</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#E62F35] mb-1">100+</div>
                                <div className="text-gray-600 text-sm">Business Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-[#E62F35] mb-1">25+</div>
                                <div className="text-gray-600 text-sm">Commercial Projects</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Image */}
                    <div>
                        <img
                            src={img}
                            alt="Commercial Properties"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComDetails;
