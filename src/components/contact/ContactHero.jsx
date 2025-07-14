import hero from "../../assets/contact/hero.webp"

const ContactHero = () => {
    return (
        <>
            <section className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/80 z-0"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-[-1]"
                    style={{
                        backgroundImage: `url('${hero}')`
                    }}
                ></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Ready to start your project? Let's discuss how we can bring your vision to life
                    </p>
                </div>
            </section>
        </>
    )
}

export default ContactHero
