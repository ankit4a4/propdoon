import img from "../../../assets/home/image4.jpg"

const RoiHero = () => {
    return (
        <>
            <section className="relative h-96 flex items-center justify-center">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-0"></div>

                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-[-1]"
                    style={{
                        backgroundImage: `url('${img}')`
                    }}
                ></div>

                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/80 z-0"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">ROI Properties</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        High-return investment opportunities with guaranteed income potential
                    </p>
                </div>
            </section>
        </>
    )
}

export default RoiHero
