import React from 'react';
import img from "../../../assets/home/image3.webp"

const VillaHero = () => {
    return (
        <section className="relative h-96 flex items-center justify-center">
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/80 z-0"></div>

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-[-1]"
                style={{
                    backgroundImage: `url('${img}')`,
                }}
            ></div>

            {/* Text Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Villas & Farmhouses</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Discover scenic villas and peaceful farmhouses perfect for second homes, retreats, or nature living in Uttarakhand.
                </p>
            </div>
        </section>
    );
};

export default VillaHero;
