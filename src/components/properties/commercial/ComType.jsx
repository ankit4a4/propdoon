import React from 'react';
import { FaBuilding, FaStore, FaWarehouse } from 'react-icons/fa';

const ComType = () => {
    const types = [
        {
            title: 'Office Spaces',
            icon: <FaBuilding className="text-white text-3xl" />,
            color: 'bg-[#64C0ED]',
            description:
                'Modern office complexes with state-of-the-art facilities and infrastructure.',
            features: [
                'IT-ready infrastructure',
                'Conference facilities',
                'Parking and security',
                'Flexible layouts',
            ],
        },
        {
            title: 'Retail Spaces',
            icon: <FaStore className="text-white text-3xl" />,
            color: 'bg-[#E62F35]',
            description:
                'Prime retail locations with high footfall and excellent visibility.',
            features: [
                'High street locations',
                'Shopping complexes',
                'Food courts',
                'Anchor tenant spaces',
            ],
        },

    ];

    return (
        <section className="section-padding bg-alternate relative">
            {/* Decorative blur circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#E62F35] rounded-full blur-3xl opacity-10 -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#64C0ED] rounded-full blur-3xl opacity-10 -z-10" />

            <div className="container-max">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#64C0ED] mb-4">
                        Commercial <span className="text-[#E62F35]">Property Types</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Diverse commercial real estate options to suit different business needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    {types.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-xl border border-gray-100 shadow-md transform transition-all duration-300 hover:-translate-y-2    hover:shadow-2xl group"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 ${item.color} flex items-center justify-center rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                            >
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 text-center">
                                {item.description}
                            </p>

                            <ul className="text-sm text-gray-600 space-y-2">
                                {item.features.map((f, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-[#E62F35] mr-2 mt-0.5">•</span>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComType;
