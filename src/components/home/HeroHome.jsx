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
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with fade animation */}
            <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                }}
            ></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
                    Building Dreams with
                    <span className="block mt-2 text-[#FFB703]">Excellence</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in">
                    Your trusted partner for premium construction, architecture, and real estate solutions in Dehradun
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                    <Link
                        // to="/properties"
                        to={"/#"}
                        className="text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: '#FFB703' }}
                    >
                        View Properties
                    </Link>
                    <Link
                        // to="/contact"
                        to={"/#"}
                        className="text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: '#002B5B' }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,43,91,0.9)')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#002B5B')}
                    >
                        Get Consultation
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
