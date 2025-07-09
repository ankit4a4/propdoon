import React, { useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: 'Rajesh Sharma',
            role: 'Property Owner, Dehradun',
            content: 'PropDoon transformed our vision into reality. Their attention to detail and quality of work exceeded our expectations. Our new home is everything we dreamed of and more!',
            avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
            rating: 5
        },
        {
            name: 'Priya Gupta',
            role: 'Interior Design Client, Rishikesh',
            content: 'The interior design team created a beautiful and functional space that perfectly reflects our lifestyle. They understood our needs better than we did and delivered beyond expectations.',
            avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
            rating: 5
        },
        {
            name: 'Amit Verma',
            role: 'Commercial Project, Haridwar',
            content: 'Professional service, timely delivery, and excellent craftsmanship. Our commercial complex was completed 2 weeks ahead of schedule with zero compromises on quality. Highly recommended!',
            avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
            rating: 5
        },
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section className="relative py-6 md:py-16 px-4 bg-gradient-to-b from-[#002B5B] to-[#0A1F3D] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFB703] rounded-full filter blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 rounded-full filter blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <span className="inline-block px-4 py-2 bg-[#FFB703]/10 text-[#FFB703] font-medium rounded-full text-sm tracking-wider border border-[#FFB703]/20">
                            CLIENT TESTIMONIALS
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Voices of <span className="text-[#FFB703]">Satisfaction</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Don't just take our word for it - hear from those who've experienced our service firsthand
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Navigation arrows */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>

                    {/* Testimonial Card */}
                    <div className="p-8 md:p-12 bg-white rounded-xl shadow-2xl relative overflow-hidden transition-all duration-300">
                        {/* Decorative quote icon */}
                        <FaQuoteLeft className="absolute top-8 right-8 text-[#FFB703]/10 text-6xl" />

                        {/* Testimonial content */}
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <img
                                        src={testimonials[currentTestimonial].avatar}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#FFB703]/30"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-[#FFB703] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                        <FaStar className="mr-1" /> {testimonials[currentTestimonial].rating}.0
                                    </div>
                                </div>
                            </div>

                            <div className="text-center md:text-left">
                                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                                    "{testimonials[currentTestimonial].content}"
                                </blockquote>
                                <div>
                                    <div className="font-bold text-xl text-gray-900">
                                        {testimonials[currentTestimonial].name}
                                    </div>
                                    <div className="text-[#FFB703] font-medium">
                                        {testimonials[currentTestimonial].role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-[#FFB703] w-6' : 'bg-white/30'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;