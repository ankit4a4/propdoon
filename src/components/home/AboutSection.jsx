import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-6">
                        About Us
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                        At <span className="font-semibold text-[#FFB703]">PropDoon</span>, we understand that navigating the real estate market can be complex and daunting.
                        That’s why we’re here to simplify the process for you.
                    </p>
                    <p className="text-gray-600 text-lg mb-6">
                        As a premier real estate consultancy service, we pride ourselves on offering comprehensive solutions tailored to meet your unique needs.
                    </p>
                    <Link
                        // to={'/about'}
                        to={'/#'}
                        className="inline-block bg-[#FFB703] text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition duration-300"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Balanced Video Height */}
                <div className="w-full h-[250px] md:h-[300px] lg:h-[320px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/4SO39rR4wBI?si=m-n-EsEQ5PUDnZkz"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
