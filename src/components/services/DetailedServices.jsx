import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaDraftingCompass, FaCouch, FaYinYang } from 'react-icons/fa';
import img1 from "../../assets/services/contraction.jpeg";
import img2 from "../../assets/services/architecture.webp";
import img3 from "../../assets/services/inteior.jpeg";
import img4 from "../../assets/services/Vastushastra.jpeg";

const DetailedServices = () => {
    const services = [
        {
            id: 'construction',
            title: 'Construction',
            icon: <FaTools className="text-4xl text-[#64C0ED] mr-4" />,
            description: 'Professional construction services for residential and commercial projects',
            image: img1,
            features: [
                'Residential Construction',
                'Commercial Buildings',
                'Renovation & Remodeling',
                'Infrastructure Development',
                'Quality Material Sourcing',
                'Project Management'
            ],
            process: [
                'Initial Consultation & Planning',
                'Design & Approval',
                'Material Selection',
                'Construction Phase',
                'Quality Control',
                'Final Handover'
            ]
        },
        {
            id: 'architecture',
            title: 'Architecture',
            icon: <FaDraftingCompass className="text-4xl text-[#64C0ED] mr-4" />,
            description: 'Innovative architectural designs that blend aesthetics with functionality',
            image: img2,
            features: [
                'Residential Design',
                'Commercial Architecture',
                'Sustainable Design',
                '3D Visualization',
                'Structural Planning',
                'Landscape Design'
            ],
            process: [
                'Concept Development',
                'Design Sketching',
                '3D Modeling',
                'Technical Drawings',
                'Approval Process',
                'Construction Support'
            ]
        },
        {
            id: 'interior',
            title: 'Interior Designing',
            icon: <FaCouch className="text-4xl text-[#64C0ED] mr-4" />,
            description: 'Transform your spaces with beautiful and functional interior designs',
            image: img3,
            features: [
                'Space Planning',
                'Furniture Selection',
                'Color Coordination',
                'Lighting Design',
                'Custom Furnishings',
                'Complete Makeovers'
            ],
            process: [
                'Space Assessment',
                'Design Concept',
                'Material Selection',
                'Implementation',
                'Installation',
                'Final Styling'
            ]
        },
        {
            id: 'vastu',
            title: 'Vastushastra',
            icon: <FaYinYang className="text-4xl text-[#64C0ED] mr-4" />,
            description: 'Traditional Vastu consultation for harmonious and prosperous living',
            image: img4,
            features: [
                'Residential Vastu',
                'Commercial Vastu',
                'Site Analysis',
                'Directional Planning',
                'Remedial Solutions',
                'Ongoing Consultation'
            ],
            process: [
                'Site Evaluation',
                'Vastu Analysis',
                'Recommendation Report',
                'Implementation Plan',
                'Guidance & Support',
                'Follow-up Consultation'
            ]
        }
    ];

    return (
        <>
            {services.map((service, index) => {
                const isImageBackground = index % 2 === 0;

                return (
                    <section
                        key={service.id}
                        id={service.id}
                        className={`relative section-padding ${isImageBackground ? 'text-white' : 'bg-white text-gray-800'}`}
                    >
                        {isImageBackground && (
                            <>
                                <div
                                    className="absolute inset-0 bg-cover bg-center z-0"
                                    style={{ backgroundImage: `url('${service.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/80 z-0"></div>
                            </>
                        )}

                        <div className="container-max relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className={`rounded-lg shadow-xl ${isImageBackground ? 'hidden lg:block' : ''}`}
                                    />
                                </div>
                                <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                                    <div className="flex items-center mb-6">
                                        {service.icon}
                                        <h2 className="text-3xl md:text-4xl font-bold">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="text-lg mb-8">{service.description}</p>

                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {service.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center">
                                                        <svg className="w-4 h-4 text-[#64C0ED] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                                            <div className="space-y-2">
                                                {service.process.map((step, stepIndex) => (
                                                    <div key={stepIndex} className="flex items-center">
                                                        <div className="w-6 h-6 bg-[#E62F35] text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                                                            {stepIndex + 1}
                                                        </div>
                                                        <span>{step}</span>
                                                    </div>
                                                ))}
                                            </div>
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

export default DetailedServices;
