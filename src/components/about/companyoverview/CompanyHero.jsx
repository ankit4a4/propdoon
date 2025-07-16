import img from "../../../assets/about/companyoverview/heroimage.webp"
const CompanyHero = () => {
    return (
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url('${img}')`,
                }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000cc] to-[#00000066] z-10"></div>

            {/* Text Content */}
            <div className="relative z-20 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Overview</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Building excellence for over 10 years with innovation and integrity
                </p>
            </div>
        </section>
    );
};

export default CompanyHero;
