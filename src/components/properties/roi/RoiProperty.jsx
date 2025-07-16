import React, { useState } from 'react';
import { FaMapMarkerAlt, FaChartLine, FaHotel, FaBuilding, FaHome, FaFilter } from 'react-icons/fa';

import img1 from '../../../assets/properties/roi/1.jpg';
import img2 from '../../../assets/properties/roi/img1.jpeg';
import img3 from '../../../assets/properties/roi/3.webp';
import img4 from '../../../assets/properties/roi/hotels.jpeg';
import img5 from '../../../assets/properties/roi/5.jpeg';
import img6 from '../../../assets/properties/roi/img2.jpeg';
import bg from "../../../assets/home/image4.jpg"
const RoiProperty = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const primaryColor = '#64C0ED';   // Sky‑blue
    const accentColor = '#E62F35';   // Red

    const roiProperties = [
        {
            id: 1,
            title: 'Property in the lap of hills',
            type: 'Residential',
            image: img1,
            location: 'Mussoorie Hills',
            roi: '18%',
            payback: '5.5 years',
            description:
                'A serene boutique resort nestled in the lush hills of Mussoorie, offering an unforgettable hospitality experience for tourists and nature lovers.',
            highlights: [
                'Located in high-demand tourist destination',
                'Fully managed and maintained by professionals',
                'Attractive returns from seasonal rentals',
            ],
        },
        {
            id: 2,
            title: 'Dehradun Commercial Arcade',
            type: 'commercial',
            image: img2,
            location: ' Dehradun',
            roi: '16%',
            payback: '6.2 years',
            description:
                "Premium retail and office spaces in one of Dehradun's busiest commercial zones, attracting steady rental income.",
            highlights: [
                'High footfall zone with anchor tenants',
                'Modern facilities & easy access',
                'Ideal for long-term rental yield',
            ],
        },
        {
            id: 3,
            title: 'Luxury Villas in Nature',
            type: 'residential',
            image: img3,
            location: ' Dehradun',
            roi: '13%',
            payback: '7.5 years',
            description:
                'Exclusive gated community of villas surrounded by forest views and mountain peace—ideal for holiday homes.',
            highlights: [
                'Private gated layout with premium features',
                'Popular among NRIs and holiday buyers',
                'Steady rental income via vacation stays',
            ],
        },
        {
            id: 4,
            title: 'Hotels',
            type: 'hotel',
            image: img4,
            location: 'Dehradun',
            roi: '20%',
            payback: '4.8 years',
            description:
                'Modern business hotel with corporate facilities and consistent demand from airport travelers and business guests.',
            highlights: [
                'Strategically located near the airport',
                'Tie‑ups with travel aggregators',
                'Low vacancy risk due to location',
            ],
        },
        {
            id: 5,
            title: 'City Center Retail Hub',
            type: 'commercial',
            image: img5,
            location: 'Dehradun',
            roi: '15%',
            payback: '6.5 years',
            description:
                "High‑visibility retail investment opportunity in the city's heart, surrounded by heavy local traffic and commerce.",
            highlights: [
                'Anchor retail chains already signed',
                'Sustained foot traffic and strong branding',
                'Ideal for brand showrooms and franchisees',
            ],
        },
        {
            id: 6,
            title: 'Serviced Apartments',
            type: 'residential',
            image: img6,
            location: 'Dehradun',
            roi: '14%',
            payback: '7.1 years',
            description:
                'Fully furnished studio apartments aimed at tech professionals and short‑term corporate stays.',
            highlights: [
                'High demand in IT corridor',
                'Furnished units with management service',
                'Low maintenance and operational costs',
            ],
        },
    ];

    const filteredProperties =
        activeFilter === 'all'
            ? roiProperties
            : roiProperties.filter((p) => p.type === activeFilter);

    const getTypeIcon = (type) => {
        switch (type) {
            case 'hotel':
                return <FaHotel className="mr-1" />;
            case 'commercial':
                return <FaBuilding className="mr-1" />;
            case 'residential':
                return <FaHome className="mr-1" />;
            default:
                return null;
        }
    };

    return (
        <section
            className="relative py-16 text-white bg-cover bg-center"
            style={{ backgroundImage: `url('${bg}')` }}
        >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/90 z-0"></div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">High ROI Property Investments</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Discover premium investment opportunities with attractive returns across Uttarakhand
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {['all', 'hotel', 'commercial', 'residential'].map((filter) => {
                        const Icon =
                            filter === 'all'
                                ? FaFilter
                                : filter === 'hotel'
                                    ? FaHotel
                                    : filter === 'commercial'
                                        ? FaBuilding
                                        : FaHome;
                        return (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`flex items-center px-4 py-2 rounded-full font-medium transition-colors duration-200 ${activeFilter === filter ? 'text-white' : 'text-gray-300 hover:bg-gray-700'
                                    }`}
                                style={{
                                    backgroundColor: activeFilter === filter ? accentColor : '#1f2937',
                                }}
                            >
                                <Icon className="mr-2" />
                                {filter === 'all' ? 'All Properties' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        );
                    })}
                </div>

                {/* Property Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-1 group"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    loading="lazy"
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/80 text-sm text-white">
                                        {getTypeIcon(property.type)}
                                        {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-1">{property.title}</h3>
                                    <p className="flex items-center text-sm text-gray-600">
                                        <FaMapMarkerAlt className="mr-2" style={{ color: primaryColor }} />
                                        {property.location}
                                    </p>
                                </div>

                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{property.description}</p>

                              
                                <div className="space-y-2 mb-5">
                                    {property.highlights.map((point, index) => (
                                        <p key={index} className="flex items-start text-sm text-gray-700">
                                            <FaChartLine className="w-4 h-4 mr-2 mt-0.5" style={{ color: primaryColor }} />
                                            <span>{point}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProperties.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-400">No properties found for this filter.</p>
                    </div>
                )}
            </div>
        </section>

    );
};

export default RoiProperty;
