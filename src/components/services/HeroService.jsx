import React from 'react';
import img from "../../assets/services/serviceHero.webp"

const HeroService = () => {
    return (
        <>
            <section className="relative h-96 flex items-center justify-center">
                {/* Dark transparent overlay */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                {/* Gradient overlay using brand colors */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>

                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-[-1]"
                    style={{
                        backgroundImage: `url('${img}')`,
                    }}
                ></div>

                {/* Text content */}
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Comprehensive solutions for all your construction and design needs
                    </p>
                </div>
            </section>
        </>
    );
};

export default HeroService;
