import React from 'react'
import hero from "../../../assets/home/image1.jpg"

const ResiHero = () => {
    return (
        <section className="relative h-96 flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('${hero}')`
                }}
            ></div>

            {/* Enhanced Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Properties</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Find your perfect home with our premium residential properties
                </p>
            </div>
        </section>
    )
}

export default ResiHero
