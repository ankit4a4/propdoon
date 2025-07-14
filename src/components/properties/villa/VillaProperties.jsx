import React, { useState } from 'react';
import {
    FaMapMarkerAlt,
    FaChartLine,
    FaFilter,
    FaHome,
    FaBuilding,
} from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';

/*  LOCAL ASSETS  */
import bg from '../../../assets/home/image4.jpg';
import img1 from '../../../assets/properties/Villa/1.jpeg';
import img2 from '../../../assets/properties/Villa/2.jpg';
import img3 from '../../../assets/properties/Villa/3.jpg';
import img4 from '../../../assets/properties/Villa/4.webp';
import img5 from '../../../assets/properties/Villa/5.jpeg';
import img6 from '../../../assets/properties/Villa/6.webp';

const VillaProperties = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    /*  THEME COLORS  */
    const primaryColor = '#64C0ED';  // sky‑blue
    const accentColor = '#E62F35';   // red

    /*  PROPERTY DATA: 2 villas, 2 apartments, 2 houses  */
    const ResiProperty = [
        {
            id: 1,
            title: 'Himalayan View Farmhouse',
            type: 'villa',
            image: img1,
            location: 'Maldevta, Dehradun',
            roi: '14%',
            payback: '7.5 years',
            description:
                'Peaceful farmhouse retreat surrounded by forested hills and clean air.',
            highlights: [
                'Lush private land with fruit trees',
                'Eco‑friendly design with solar power',
                'Mountain stream nearby',
                'Perfect for weekend retreats',
            ],
        },
        {
            id: 2,
            title: 'Luxury Hilltop Penthouse',
            type: 'apartment',
            image: img2,
            location: 'Jakhan, Dehradun',
            roi: '11%',
            payback: '9 years',
            description:
                'Panoramic city views, smart‑home automation and concierge facilities.',
            highlights: [
                'Private terrace garden & jacuzzi',
                'Smart access & security',
                'Gym + co‑working lounge',
                'High rental demand area',
            ],
        },
        {
            id: 3,
            title: 'Classic Family Home',
            type: 'house',
            image: img3,
            location: 'Clement Town, Dehradun',
            roi: '10%',
            payback: '9.5 years',
            description:
                'Traditional independent house with spacious layout and backyard.',
            highlights: [
                'Secure, peaceful locality',
                'Proximity to schools & parks',
                'Ample parking, driveway',
                'Ideal for large families',
            ],
        },
        {
            id: 4,
            title: 'Eco‑Friendly Villa',
            type: 'villa',
            image: img4,
            location: 'Sahastradhara Road, Dehradun',
            roi: '13%',
            payback: '7.8 years',
            description:
                'Sustainable living villa featuring rainwater harvesting & EV charging.',
            highlights: [
                'Organic garden space',
                'Energy‑efficient materials',
                'Gated community security',
                'Yoga deck with valley view',
            ],
        },
        {
            id: 5,
            title: 'Modern Tech Apartment',
            type: 'apartment',
            image: img5,
            location: 'Rajpur Road, Dehradun',
            roi: '10%',
            payback: '10 years',
            description:
                'Contemporary apartment with high‑street shopping at your doorstep.',
            highlights: [
                'Walk‑in closets & modular kitchen',
                '24/7 power backup',
                'Clubhouse & rooftop café',
                'Excellent public transport',
            ],
        },
        {
            id: 6,
            title: 'Suburban Garden House',
            type: 'house',
            image: img6,
            location: 'Dalanwala, Dehradun',
            roi: '9%',
            payback: '11 years',
            description:
                'Spacious bungalow with private lawns and old‑growth trees.',
            highlights: [
                'Large gazebo & barbecue area',
                'Tool shed for hobby gardening',
                'Separate servant quarters',
                'High resale appreciation',
            ],
        },
    ];

    /*  FILTERED LIST  */
    const filteredProperties =
        activeFilter === 'all'
            ? ResiProperty
            : ResiProperty.filter((p) => p.type === activeFilter);

    /*  ICON MAP  */
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
            {/*  Black overlay  */}
            <div className="absolute inset-0 bg-black/90 z-0"></div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/*  Heading  */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Residential Property Collection
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Discover hand‑picked villas, apartments & houses tailored for luxury
                        living and smart investment.
                    </p>
                </div>

                {/*  Filter Buttons  */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {[
                        { key: 'all', label: 'All Types', icon: FaFilter },
                        { key: 'villa', label: 'Villa', icon: GiFamilyHouse },
                        { key: 'apartment', label: 'Apartment', icon: FaBuilding },
                        { key: 'house', label: 'House', icon: FaHome },
                    ].map(({ key, label, icon: Icon }) => (
                        <button
                            key={key}
                            onClick={() => setActiveFilter(key)}
                            className={`flex items-center px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-md ${activeFilter === key
                                ? 'bg-[#E62F35] text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-[#64C0ED] hover:text-white'
                                }`}
                        >
                            <Icon className="mr-2" />
                            {label}
                        </button>
                    ))}
                </div>

                {/*  Card Grid  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProperties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:-translate-y-1 group"
                        >
                            {/*  Image  */}
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

                            {/*  Card Content  */}
                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold mb-1">{property.title}</h3>
                                    <p className="flex items-center text-sm text-gray-600">
                                        <FaMapMarkerAlt className="mr-2" style={{ color: primaryColor }} />
                                        {property.location}
                                    </p>
                                </div>

                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                    {property.description}
                                </p>

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

                                <div className="space-y-2">
                                    {property.highlights.map((point, idx) => (
                                        <p key={idx} className="flex items-start text-sm text-gray-700">
                                            <FaChartLine
                                                className="w-4 h-4 mr-2 mt-0.5"
                                                style={{ color: primaryColor }}
                                            />
                                            <span>{point}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/*  Empty State  */}
                {filteredProperties.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-xl text-gray-400">No properties found for this filter.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default VillaProperties;
