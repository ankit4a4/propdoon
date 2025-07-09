import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero1 from "../../assets/home/hero1.webp";
import hero2 from "../../assets/home/hero2.jpg";

const HeroHome = () => {
    const images = [hero1, hero2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 500);
        }, 7000); // Smooth transition every 7s

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${fade ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundAttachment: 'fixed'
                }}
            ></div>

            {/* Dark Overlay with Grain Texture */}
            <div className="absolute inset-0 bg-black/50 z-10">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 w-full max-w-6xl mx-auto">
                {/* Animated Border */}
                <div className="w-20 h-1 bg-[#FFB703] mx-auto mb-8"></div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    <span className="text-white">Building the Future</span>
                    <span className="block text-[#FFB703] mt-2">One Space at a Time</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                    Empowering Dehradun with modern infrastructure, smart spaces, and a vision you can trust.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/properties"
                        className="px-8 py-3.5 bg-[#FFB703] hover:bg-[#e6a500] text-black font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                        <span>Explore Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link
                        to="/contact"
                        className="px-8 py-3.5 backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        Book Consultation
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default HeroHome;
