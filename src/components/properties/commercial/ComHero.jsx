import React from 'react';
import img from "../../../assets/properties/Com/img3.jpeg";

const ComHero = () => {
    return (
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url('${img}')` }}
            ></div>

            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/70 z-0"></div>

            {/* Text content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Properties</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Prime commercial spaces for your business growth and investment needs
                </p>
            </div>
        </section>
    );
};

export default ComHero;
