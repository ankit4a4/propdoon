import React from 'react';
import bg from "../../../assets/home/image4.jpg";

const RoiOverview = () => {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Decorative blur circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#64C0ED] rounded-full blur-3xl opacity-10 -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E62F35] rounded-full blur-3xl opacity-10 -z-10" />

            <div className="container-max space-y-16">
                {/* TOP ROW: Image + Short Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT: Heading + Brief Paragraph + Stats */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#64C0ED] leading-snug">
                            Smart Investment <span className="text-[#E62F35]">Opportunities</span>
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our ROI properties are carefully selected to offer attractive returns through rental income and capital appreciation.
                        </p>
                        <p>
                            Investing in properties in Uttarakhand through <strong>Propdoon</strong>, a reputable real estate consultancy service,
                            can offer a compelling proposition with the potential for high return on investment (ROI).
                        </p>
                        <p>
                            Uttarakhand is known for its stunning landscapes, spiritual destinations, and adventure tourism.
                            The growing influx of tourists creates opportunities for investments in hospitality properties,
                            such as hotels, resorts, and vacation rentals, yielding potential high returns.
                        </p>
                        <p>
                            The region has seen a steady increase in property value. Propdoon’s local expertise helps identify
                            areas with appreciation potential, ensuring maximized returns over time.
                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center pt-4">
                            <div>
                                <div className="text-2xl font-bold text-[#E62F35] mb-1">12–20%</div>
                                <div className="text-gray-600 text-sm">Annual ROI</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[#E62F35] mb-1">5–8 Years</div>
                                <div className="text-gray-600 text-sm">Payback Period</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-[#E62F35] mb-1">100+</div>
                                <div className="text-gray-600 text-sm">Successful Projects</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Image */}
                    <div>
                        <img
                            src={bg}
                            alt="ROI Properties"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>

                {/* BOTTOM ROW: Long Content (full width) */}
                <div className="text-gray-700 space-y-3 container mx-auto leading-relaxed">

                    <p>
                        Government initiatives to boost tourism, infrastructure, and business growth add to the state’s
                        favorable investment climate. We keep you informed about these opportunities for strategic decisions.
                    </p>
                    <p>
                        With top-tier educational institutions nearby, rental potential increases around such zones.
                        Properties near universities can attract both students and faculty, contributing to regular rental income.
                    </p>
                    <p>
                        The Himalayan belt makes Uttarakhand a hotspot for adventure tourism.
                        Lodges, cottages, and resorts dedicated to adventure seekers perform well during seasonal peaks.
                    </p>
                    <p>
                        Our deep understanding of the market ensures your investment is backed by research, trends,
                        and risk analysis — making your move smarter and safer.
                    </p>
                    <p>
                        Including Uttarakhand properties in your portfolio diversifies your strategy —
                        whether it's commercial, hospitality, or residential, Propdoon offers you the best choices.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RoiOverview;
