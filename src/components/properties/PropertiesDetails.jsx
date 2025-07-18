import React from 'react';
import { FaHome, FaBuilding, FaChartLine } from 'react-icons/fa';
import img1 from "../../assets/home/image1.jpg";
import img2 from "../../assets/properties/Com/img3.jpeg";
import img4 from "../../assets/properties/roi/roi.jpeg";

const PropertiesDetails = () => {
    const properties = [
        {
            id: 'residential',
            title: 'Residential Properties',
            icon: <FaHome className="text-4xl text-[#64C0ED] mr-4" />,
            description:
                'Uttarakhand has witnessed steady growth in real estate value over the years. With its scenic beauty, pleasant climate, and increasing urbanization, residential properties in Uttarakhand have strong long-term investment potential.',
            image: img1,
            highlights: [
                'Scenic surroundings and peaceful living',
                'Steady appreciation and resale value',
                'Wide range of options: apartments, villas, plots',
                'Built by trusted and reputed developers',
            ],
        },
        {
            id: 'commercial',
            title: 'Commercial Properties',
            icon: <FaBuilding className="text-4xl text-[#64C0ED] mr-4" />,
            description:
                'Uttarakhand offers growing opportunities in commercial real estate. Ideal for businesses looking to establish offices, retail outlets, or hospitality ventures in a serene yet connected region.',
            image: img2,
            highlights: [
                'Ideal for offices, shops & co-working spaces',
                'Strategic locations with growing footfall',
                'Backed by upcoming infrastructure',
                'High rental income potential',
            ],
        },
        {
            id: 'roi',
            title: 'R.O.I. Focused Investments',
            icon: <FaChartLine className="text-4xl text-[#64C0ED] mr-4" />,
            description:
                'Propdoon helps you discover investment-worthy properties with high ROI potential. Our curated portfolio includes assets with strong capital growth, rental yields, and future marketability.',
            image: img4,
            highlights: [
                'Thoroughly vetted listings for ROI',
                'Market insights & appreciation projections',
                'Rental yield and resale consultation',
                'End-to-end investment support',
            ],
        },
    ];

    return (
        <>
            {properties.map((property, index) => {
                const isImageBackground = index % 2 === 0;

                return (
                    <section
                        key={property.id}
                        id={property.id}
                        className={`relative section-padding ${isImageBackground ? 'text-white' : 'bg-white text-gray-800'}`}
                    >
                        {isImageBackground && (
                            <>
                                <div
                                    className="absolute inset-0 bg-cover bg-center z-0"
                                    style={{ backgroundImage: `url('${property.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/80 z-0"></div>
                            </>
                        )}

                        <div className="container-max relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className={isImageBackground ? 'order-2' : 'order-1'}>
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className={`rounded-lg h-[330px] object-cover w-full shadow-xl ${isImageBackground ? 'hidden lg:block' : ''}`}
                                    />
                                </div>

                                <div className={isImageBackground ? 'order-1' : 'order-2'}>
                                    <div className="flex items-center mb-6">
                                        {property.icon}
                                        <h2 className="text-3xl md:text-4xl font-bold">{property.title}</h2>
                                    </div>
                                    <p className="text-lg mb-8">{property.description}</p>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Why Invest?</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {property.highlights.map((point, i) => (
                                                <div key={i} className="flex items-center">
                                                    <svg
                                                        className="w-4 h-4 text-[#64C0ED] mr-3"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default PropertiesDetails;
