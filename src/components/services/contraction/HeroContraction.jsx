import React from 'react';
import img from "../../../assets/services/contraction.jpeg";
const HeroContraction = () => {
    return (
        <>
            <section className="relative h-96 flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url('${img}')`
                    }}
                ></div>

                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/70 z-10"></div>

                {/* Content */}
                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Construction Services
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Building your dreams with precision, quality, and innovation
                    </p>
                </div>
            </section>
        </>
    );
};

export default HeroContraction;
