import React, { useState } from 'react';
import { FaMapMarkerAlt, FaChartLine, FaFilter, FaHome, FaBuilding } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';
import bg from '../../../assets/home/image4.jpg';
import img1 from "../../../assets/properties/residential/property1.webp"
import img2 from "../../../assets/properties/residential/property2.jpg"
import img3 from "../../../assets/properties/residential/property3.jpeg"
import img4 from "../../../assets/properties/residential/property4.jpg"
import img5 from "../../../assets/properties/residential/property5.jpg"
import img6 from "../../../assets/properties/residential/property6.jpg"

const ResiProperties = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const primaryColor = '#64C0ED';
    const accentColor = '#E62F35';
    const ResiProperty = [
        {
            id: 1,
            title: 'Luxury Hill View Villa',
            type: 'villa',
            image: img1,
            location: 'Mussoorie Road, Dehradun',
            roi: '12%',
            payback: '8.5 years',
            description: 'Stunning villa with panoramic hill views and premium amenities.',
            highlights: [
                'Panoramic views of Dehradun hills',
                'Premium location with excellent connectivity',
                'Modern architecture with traditional elements',
                'Gated community with 24/7 security',
            ],
        },
        {
            id: 2,
            title: 'Modern City Apartment',
            type: 'apartment',
            image: img2,
            location: 'Rajpur Road, Dehradun',
            roi: '10%',
            payback: '10 years',
            description: 'Contemporary apartment in the heart of the city with modern amenities.',
            highlights: [
                'Prime city center location',
                'Walking distance to shopping and dining',
                'Modern amenities and facilities',
                'Excellent public transportation access',
            ],
        },
        {
            id: 3,
            title: 'Family Independent House',
            type: 'house',
            image: img3,
            location: 'Clement Town, Dehradun',
            roi: '9%',
            payback: '11 years',
            description: 'Spacious independent house perfect for families with children.',
            highlights: [
                'Quiet suburban neighborhood',
                'Large garden space for children',
                'Independent parking and storage',
                'Close to schools and hospitals',
            ],
        },
        {
            id: 4,
            title: 'Eco-Friendly Villa',
            type: 'villa',
            image: img4,
            location: 'Sahastradhara Road, Dehradun',
            roi: '13%',
            payback: '7.8 years',
            description: 'Sustainable villa with eco-friendly features and green technology.',
            highlights: [
                'Solar power and rainwater harvesting',
                'Energy-efficient design and materials',
                'Organic garden and composting area',
                'EV charging station included',
            ],
        },
        {
            id: 5,
            title: 'Smart Tech Apartment',
            type: 'apartment',
            image: img5,
            location: 'Jakhan, Dehradun',
            roi: '11%',
            payback: '9 years',
            description: 'Smart home apartment designed for modern living and automation.',
            highlights: [
                'Smart home automation systems',
                'Located in emerging tech hub',
                'Co-working spaces and modern amenities',
                'Perfect for young professionals',
            ],
        },
        {
            id: 6,
            title: 'Classic Family Home',
            type: 'house',
            image: img6,
            location: 'Dalanwala, Dehradun',
            roi: '10%',
            payback: '9.5 years',
            description: 'Traditional home with spacious layout, ideal for families seeking comfort and security.',
            highlights: [
                'Spacious front and backyard',
                'Ample parking and private driveway',
                'Proximity to parks and schools',
                'Secure and peaceful locality',
            ],
        },
    ];

    const filteredProperties =
        activeFilter === 'all'
            ? ResiProperty
            : ResiProperty.filter((p) => p.type === activeFilter);

    const getTypeIcon = (type) => {
        switch (type) {
            case 'villa':
                return <GiFamilyHouse className="mr-1" />;
            case 'apartment':
                return <FaBuilding className="mr-1" />;
            case 'house':
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
            <div className="absolute inset-0 bg-black/90 z-0"></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Residential Property Collection</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Discover handpicked homes, villas, and apartments tailored for living and investment
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {['all', 'villa', 'apartment', 'house'].map((filter) => {
                        const Icon =
                            filter === 'all'
                                ? FaFilter
                                : filter === 'villa'
                                    ? GiFamilyHouse
                                    : filter === 'apartment'
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
                                {filter === 'all' ? 'All Types' : filter.charAt(0).toUpperCase() + filter.slice(1)}
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
                            <div className="relative">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/80 text-sm text-white">
                                        {getTypeIcon(property.type)}
                                        {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-1">{property.title}</h3>
                                    <p className="flex items-center text-sm text-gray-600">
                                        <FaMapMarkerAlt className="mr-2" style={{ color: primaryColor }} />
                                        {property.location}
                                    </p>
                                </div>

                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{property.description}</p>

                                <div className="grid grid-cols-2 gap-4 mb-5">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <p className="text-xs text-gray-500">Annual ROI</p>
                                        <p className="text-xl font-bold" style={{ color: primaryColor }}>
                                            {property.roi}
                                        </p>
                                    </div>
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <p className="text-xs text-gray-500">Payback Period</p>
                                        <p className="text-xl font-bold" style={{ color: primaryColor }}>
                                            {property.payback}
                                        </p>
                                    </div>
                                </div>

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

                {filteredProperties.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-400">No properties found for this filter.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ResiProperties;
