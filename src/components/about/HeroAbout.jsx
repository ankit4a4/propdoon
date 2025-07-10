import React from 'react'
import img from "../../assets/about/hero.webp"

const HeroAbout = () => {
    return (
        <>
            <section className=" mt-20 relative h-96 flex items-center justify-center overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url('${img}')`
                    }}
                ></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10"></div>

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/70 z-20"></div>

                {/* Content */}
                <div className="relative z-30 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Building excellence through innovation, integrity, and dedication
                    </p>
                </div>
            </section>
        </>
    )
}

export default HeroAbout
