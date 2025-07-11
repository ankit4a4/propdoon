import React from 'react';
import img from "../../../assets/services/inteior.jpeg"

const InteriorHero = () => {
    return (
        <section className="relative h-96 flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${img}')`
                }}
            ></div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Interior Design Services
                </h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Creating beautiful, functional spaces that reflect your personality
                </p>
            </div>
        </section>
    );
};

export default InteriorHero;
