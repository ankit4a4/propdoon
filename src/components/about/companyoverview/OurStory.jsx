import React from 'react'
import { Link } from 'react-router-dom'

const OurStory = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#E62F35] mb-6">
                            Our Story
                        </h2>
                        <p className="text-lg leading-relaxed text-[#333] mb-6">
                            Founded in 2012, <strong className="text-[#E62F35]">PropDoon</strong> has established itself as
                            Dehradun's premier real estate consultancy, helping clients navigate
                            the property market with confidence and ease.
                        </p>
                        <p className="leading-relaxed text-[#333] mb-8">
                            Our team of seasoned professionals combines local market knowledge with
                            national real estate trends to deliver exceptional results for buyers,
                            sellers, and investors alike.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block px-6 py-3 rounded-md text-white font-medium bg-[#64C0ED] hover:bg-[#4DA8D8] transition duration-300"
                        >
                            Work With Us
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div>
                        <img
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Our Story"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStory
