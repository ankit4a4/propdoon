import React from "react";

const AboutPropDoonSection = () => {
    return (
        <section className="py-16 bg-[#FFFFFF]" data-aos="fade-up">
            <div className="container-max px-4">
                <div className="flex flex-col md:flex-row items-center gap-10 rounded-2xl shadow-xl p-3 md:p-5 border border-[#6764623b] bg-[#FFFFFF]">
                    {/* Left - Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#DF8534] mb-4">
                            About Us
                        </h2>
                        <p className="text-lg text-[#1C1C1C] mb-4">
                            At PropDoon, we understand that navigating the real estate market
                            can be complex and daunting. That’s why we’re here to simplify the
                            process for you.
                        </p>
                        <p className="text-lg text-[#1C1C1C]">
                            As a premier real estate consultancy service, we offer personalized
                            solutions tailored to your unique needs, ensuring transparency and
                            trust every step of the way.
                        </p>
                    </div>

                    {/* Right - Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80"
                            alt="About PropDoon"
                            className="rounded-xl shadow-md w-full h-80 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPropDoonSection;
