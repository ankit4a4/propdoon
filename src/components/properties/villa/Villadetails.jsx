import React from 'react';

const VillaDetails = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#64C0ED] mb-6 leading-snug">
                            Farmhouses & Villas in <span className="text-[#E62F35]">Uttarakhand</span>
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Uttarakhand, surrounded by the Himalayan foothills, offers a serene and picturesque environment. Farmhouses or villas in this region provide a tranquil escape from urban life, creating an idyllic setting for relaxation and rejuvenation.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            These homes often come with extensive land, allowing you to be close to nature. The lush greenery, clean air, and scenic landscapes contribute to a healthy and peaceful lifestyle.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            From private gardens and outdoor activities to sustainable farming options — Propdoon helps you explore every opportunity with ease.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Our team ensures a smooth experience by offering legal guidance, due diligence, and end-to-end consultancy tailored to villa and farmhouse investments.
                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center pt-4">
                            <div>
                                <div className="text-1xl font-bold text-[#E62F35] mb-1">7–12%</div>
                                <div className="text-gray-600 text-sm">Expected ROI</div>
                            </div>
                            <div>
                                <div className="text-1xl font-bold text-[#E62F35] mb-1">50+</div>
                                <div className="text-gray-600 text-sm">Premium Listings</div>
                            </div>
                            <div>
                                <div className="text-1xl font-bold text-[#E62F35] mb-1">Nature-Focused</div>
                                <div className="text-gray-600 text-sm">Green Living Lifestyle</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div>
                        <img
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Farmhouse and Villa"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VillaDetails;
