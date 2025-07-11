import React from 'react'
import img from "../../../assets/services/Vastushastra.jpeg"

const VastuHero = () => {
    return (
        <section className="relative h-96 flex items-center justify-center">
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/80 z-0"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-0"></div>

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-[-1]"
                style={{
                    backgroundImage: `url('${img}')`
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Vastu Shastra Consultation</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Ancient wisdom for modern living - creating harmony and prosperity
                </p>
            </div>
        </section>

    )
}

export default VastuHero
