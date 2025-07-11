import React from 'react';
import img from "../../../assets/services/architecture.webp"

const ArchiHero = () => {
    return (
        <>
            <section className="relative h-96 flex items-center justify-center">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url('${img}')`,
                    }}
                ></div>

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/70 z-10"></div>

                {/* Content */}
                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Architecture Services</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Innovative designs that blend form, function, and sustainability
                    </p>
                </div>
            </section>
        </>
    );
};

export default ArchiHero;
