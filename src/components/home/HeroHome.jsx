import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { HiPaperAirplane } from 'react-icons/hi2';
import { BsChevronDoubleDown } from 'react-icons/bs';

const HeroHome = () => {
    const images = [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 500);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative md:h-screen pb-8 md:pb-0   pt-8 md:pt-0 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    transform: fade ? 'scale(1)' : 'scale(1.05)'
                }}
            ></div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] z-10"></div>

            {/* Content */}
            <div className="relative z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side */}
                    <div className="text-white">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-16 h-1 bg-[#64C0ED]"></div>
                            <span className="text-[#64C0ED] font-medium tracking-wider">DEHRADUN DEVELOPERS</span>
                        </div>
                        <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6">
                            Crafting <span className="text-[#64C0ED]">Modern</span> Living
                            <span className="block mt-3">Spaces in Dehradun</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                            We transform visions into reality with innovative architecture, sustainable design, and unparalleled craftsmanship.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/properties"
                                className="px-8 py-3.5 bg-[#64C0ED] hover:bg-[#50a8d3] text-black font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group"
                            >
                                <span>View Our Property</span>
                                <HiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-3.5 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                <FiPhoneCall className="h-5 w-5" />
                                <span>Schedule Call</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Form */}
                    <div className="bg-gradient-to-br from-[#64C0ED]/10 via-[#64C0ED]/5 to-white/5 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-white/20 max-w-md w-full mx-auto shadow-xl">
                        <div className="mb-6">
                            <h2 className="text-white text-2xl font-bold mb-2">Contact Us</h2>
                        </div>
                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#64C0ED]/50 transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#64C0ED]/50 transition-all"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#64C0ED]/50 transition-all"
                            />
                            <textarea
                                rows={3}
                                placeholder="Your Requirements"
                                className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#64C0ED]/50 transition-all resize-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full cursor-pointer py-3.5 bg-[#64C0ED] hover:bg-[#50a8d3] text-black text-base font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                <HiPaperAirplane className="h-5 w-5" />
                                <span>Submit</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="animate-bounce flex flex-col items-center">
                    <span className="text-xs text-white/80 mb-1">Scroll Down</span>
                    <BsChevronDoubleDown className="h-6 w-6 text-white opacity-80" />
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
