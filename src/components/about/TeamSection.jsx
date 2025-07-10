import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
    {
        name: "Amit Sharma",
        role: "Senior Advisor",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        bio: "Over a decade of experience in property consultation and investment strategy."
    },
    {
        name: "Neha Verma",
        role: "Legal Expert",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        bio: "Expert in real estate legalities and compliance across Uttarakhand."
    },
    {
        name: "Rajeev Raina",
        role: "Operations Head",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
        bio: "Ensures seamless property transactions with precision and professionalism."
    },
    {
        name: "Priya Joshi",
        role: "Client Relations",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        bio: "Dedicated to building long-term client relationships through trust."
    }
];

const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -left-5 top-1/2 transform -translate-y-1/2 text-[#E62F35] hover:text-[#64C0ED] z-10"
    >
        <FaArrowLeft size={24} />
    </button>
);

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute -right-5 top-1/2 transform -translate-y-1/2 text-[#E62F35] hover:text-[#64C0ED] z-10"
    >
        <FaArrowRight size={24} />
    </button>
);

const TeamSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <section className="py-20 bg-[#F9FAFB] relative">
            <div className="container-max px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center mb-4">
                        <div className="w-12 h-0.5 bg-[#64C0ED] mr-3"></div>
                        <span className="text-[#64C0ED] font-medium uppercase tracking-wider text-sm">Our Team</span>
                        <div className="w-12 h-0.5 bg-[#64C0ED] ml-3"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Meet Our Expert Team
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our success is built on the expertise, dedication, and passion of our
                        professional team members.
                    </p>
                </div>

                <Slider {...settings}>
                    {team.map((member, index) => (
                        <div key={index} className="px-4">
                            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border-t-4 border-[#E62F35]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-[#64C0ED]"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-[#E62F35] font-medium mb-3 uppercase text-sm tracking-wide">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default TeamSlider;
