import hero from "../../assets/properties/hero.jpg"

const HeroProperties = () => {
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Properties</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Discover premium real estate opportunities with excellent returns
                </p>
            </div>
        </section>
    );
};

export default HeroProperties;
