import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

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

  // Auto-rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [currentTestimonial]);

  return (
    <section className="relative py-6 md:md:-py-16 py-6 px-4 bg-gradient-to-b from-[#002B5B] to-[#0A1F3D] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E62F35] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-2 bg-[#64C0ED]/10 text-[#64C0ED] font-medium rounded-full text-sm tracking-wider border border-[#64C0ED]/20">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Voices of <span className="text-[#E62F35]">Satisfaction</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from those who've experienced our service firsthand
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative px-4 md:px-0">
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300"
          >
            <FaArrowRight className="w-5 h-5" />
          </button>

          <div className="p-8 md:p-12 bg-white rounded-xl shadow-2xl relative overflow-hidden transition-all duration-300">
            <FaQuoteLeft className="absolute top-8 right-8 text-[#64C0ED]/10 text-6xl" />

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-[#64C0ED]/30"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#E62F35] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
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
                  <div className="text-[#64C0ED] font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-[#E62F35] w-6' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
