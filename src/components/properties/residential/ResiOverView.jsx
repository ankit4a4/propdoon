import React from 'react';
import bg from "../../../assets/home/image1.jpg";

const ResiOverView = () => {
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
                            Your Dream Home <span className="text-[#E62F35]">Awaits</span>
                        </h2>

                        <p>
                            Investing in properties in Uttarakhand through Propdoon offers a compelling opportunity for long-term growth and consistent ROI.
                        </p>
                        <p>
                            With its breathtaking landscapes and increasing demand for quality housing, Uttarakhand has become a hotspot for smart residential investments.
                        </p>
  <p>
                        Propdoon leverages deep market knowledge and local expertise to help clients find high-performing residential properties across Uttarakhand.
                    </p>
                    <p>
                        We align your investment strategy with government-backed growth corridors, tourism potential, and infrastructure upgrades for optimal appreciation.
                    </p>
                    <p>
                        From family homes to vacation retreats, our portfolio offers tailored options that balance lifestyle needs and return on investment.
                    </p>
                       
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

                {/* BOTTOM ROW: Shortened Content */}
                <div className="text-gray-700 space-y-4 container mx-auto leading-relaxed">
                  
                </div>
            </div>
        </section>
    );
};

export default ResiOverView;
