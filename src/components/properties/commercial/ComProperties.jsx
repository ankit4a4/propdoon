import React, { useState } from 'react';
import { FaMapMarkerAlt, FaChartLine, FaFilter, FaStore, FaIndustry, FaBuilding } from 'react-icons/fa';
import bg from '../../../assets/home/image4.jpg'; 
import img1 from "../../../assets/properties/Com/1.jpg"
import img2 from "../../../assets/properties/Com/2.jpg"
import img3 from "../../../assets/properties/Com/3.webp"
import img4 from "../../../assets/properties/Com/4.webp"
import img5 from "../../../assets/properties/Com/5.jpg"
import img6 from "../../../assets/properties/Com/6.jpg"
const ComProperties = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const primaryColor = '#64C0ED';
    const accentColor = '#E62F35';

    const commercialProperties = [
        {
            id: 1,
            title: 'Premium Office Complex',
            type: 'office',
            image: img1, 
            location: 'Rajpur Road, Dehradun',
            roi: '15%',
            rental: '₹150/sq ft/month',
            description: 'State-of-the-art office complex in prime business location.',
            highlights: [
                'Prime business district location',
                'Modern infrastructure and amenities',
                'Excellent connectivity and parking',
                'Professional property management'
            ],
        },
        {
            id: 2,
            title: 'Retail Shopping Plaza',
            type: 'retail',
            image: img2, 
            location: 'Clock Tower, Dehradun',
            roi: '16%',
            rental: '₹200/sq ft/month',
            description: 'Modern shopping complex with high footfall potential.',
            highlights: [
                'High footfall city center location',
                'Mix of retail and F&B opportunities',
                'Anchor tenants already committed',
                'Excellent public transportation access'
            ],
        },
        {
            id: 3,
            title: 'Industrial Warehouse',
            type: 'warehouse',
            image: img3, 
            location: 'Selaqui Industrial Area, Dehradun',
            roi: '12%',
            rental: '₹80/sq ft/month',
            description: 'Spacious warehouse facility with modern logistics features.',
            highlights: [
                'Strategic location for logistics',
                'High ceiling and loading facilities',
                'Excellent road connectivity',
                'Suitable for various industries'
            ],
        },
        {
            id: 4,
            title: 'Corporate Office Tower',
            type: 'office',
            image: img4, 
            location: 'IT Park, Sahastradhara Road, Dehradun',
            roi: '18%',
            rental: '₹180/sq ft/month',
            description: 'Ultra-modern corporate tower with smart building features.',
            highlights: [
                'Smart building technology',
                'Located in emerging IT hub',
                'Premium amenities and facilities',
                'Sustainable and energy efficient'
            ],
        },
        {
            id: 5,
            title: 'Boutique Retail Spaces',
            type: 'retail',
            image: img5, 
            location: 'Paltan Bazaar, Dehradun',
            roi: '14%',
            rental: '₹250/sq ft/month',
            description: 'Premium retail spaces on busy commercial street.',
            highlights: [
                'High visibility street-facing location',
                'Established commercial area',
                'Perfect for boutique businesses',
                'Good footfall and accessibility'
            ],
        },
        {
            id: 6,
            title: 'Logistics Warehouse Hub',
            type: 'warehouse',
            image: img6, 
            location: 'Harrawala, Dehradun',
            roi: '13%',
            rental: '₹90/sq ft/month',
            description: 'Large-scale logistics facility with specialized features.',
            highlights: [
                'Direct highway access',
                'Multi-modal transportation hub',
                'Cold storage capabilities',
                'Suitable for e-commerce and logistics'
            ],
        }
    ];


    const filteredProperties =
        activeFilter === 'all'
            ? commercialProperties
            : commercialProperties.filter((p) => p.type === activeFilter);

    const getTypeIcon = (type) => {
        switch (type) {
            case 'office':
                return <FaBuilding className="mr-1" />;
            case 'retail':
                return <FaStore className="mr-1" />;
            case 'warehouse':
                return <FaIndustry className="mr-1" />;
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Commercial Property Collection</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Explore premium offices, retail spaces, and warehouses designed for investment and business growth.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {['all', 'office', 'retail', 'warehouse'].map((filter) => {
                        const Icon =
                            filter === 'all'
                                ? FaFilter
                                : filter === 'office'
                                    ? FaBuilding
                                    : filter === 'retail'
                                        ? FaStore
                                        : FaIndustry;

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
                                        <p className="text-xs text-gray-500">Rental</p>
                                        <p className="text-xl font-bold" style={{ color: primaryColor }}>
                                            {property.rental}
                                        </p>
                                    </div>
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <p className="text-xs text-gray-500">Annual ROI</p>
                                        <p className="text-xl font-bold" style={{ color: primaryColor }}>
                                            {property.roi}
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

export default ComProperties;
