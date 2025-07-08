import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../assets/home/image1.jpg"
import img2 from "../../assets/home/image2.jpeg"
import img3 from "../../assets/home/image3.webp"
import img4 from "../../assets/home/image4.jpg"
const HomeProperty = () => {
    const categories = [
        {
            title: 'Residential Properties',
            description:
                'Uttarakhand has witnessed steady growth in real estate value over the years. With its scenic beauty, pleasant climate, and increasing urbanization, residential properties in Uttarakhand have the potential for long-term appreciation, making it an attractive investment destination.',
            link: '/residential-properties',
            image:
                img1,
        },
        {
            title: 'Commercial Properties',
            description:
                'Uttarakhand, surrounded by the Himalayan foothills, offers a serene and picturesque environment. Farmhouses or villas in this region provide a tranquil escape from urban life, creating an idyllic setting for relaxation and rejuvenation.',
            link: '/commercial-properties',
            image:
                img2,
        },
        {
            title: 'Villa & Farmhouses',
            description:
                'Farmhouses and villas in Uttarakhand often come with extensive land, allowing you to be close to nature. The lush greenery, clean air, and scenic landscapes contribute to a healthy and peaceful lifestyle.',
            link: '/villas-farmhouses',
            image:
                img3,
        },
        {
            title: 'ROI Properties',
            description:
                'Investing in properties in Uttarakhand through Propdoon, a reputable real estate consultancy service, can offer a compelling proposition with the potential for high return on investment (ROI).',
            link: '/roi-properties',
            image:
                img4,
        },
    ];

    return (
        <section className="bg-[#E5EDF5] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
                        Our Property Categories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our curated range of investment opportunities in Uttarakhand
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-52 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[#002B5B] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 mb-5">{item.description}</p>
                                <Link
                                    // to={item.link}
                                    to={"/#"}
                                    className="inline-block bg-[#FFB703] text-white font-medium px-5 py-2 rounded-md hover:shadow-lg transition-all duration-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeProperty;
