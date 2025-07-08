import React, { useState } from 'react';

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            name: 'Rajesh Sharma',
            role: 'Property Owner',
            content:
                'PropDoon transformed our vision into reality. The attention to detail and quality of work exceeded our expectations.',
            avatar:
                'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        {
            name: 'Priya Gupta',
            role: 'Interior Design Client',
            content:
                'The interior design team created a beautiful and functional space that perfectly reflects our lifestyle.',
            avatar:
                'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        {
            name: 'Amit Verma',
            role: 'Construction Project',
            content:
                'Professional service, timely delivery, and excellent craftsmanship. Highly recommended for any construction project.',
            avatar:
                'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
    ];

    return (
        <section
            style={{
                backgroundColor: '#002B5B',
                color: '#FFFFFF',
                paddingTop: '4rem',
                paddingBottom: '4rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
            }}
        >
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What Our Clients Say
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: '#D1D5DB' }}
                    >
                        Don't take our word for it - hear from our satisfied clients
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div
                        className="p-8 text-center"
                        style={{
                            backgroundColor: '#FFFFFF',
                            color: '#1C1C1C',
                            borderRadius: '0.5rem',
                            boxShadow:
                                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <div className="flex justify-center mb-6">
                            <img
                                src={testimonials[currentTestimonial].avatar}
                                alt={testimonials[currentTestimonial].name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>
                        <blockquote className="text-lg mb-6">
                            "{testimonials[currentTestimonial].content}"
                        </blockquote>
                        <div>
                            <div
                                className="font-semibold"
                                style={{ color: '#002B5B' }}
                            >
                                {testimonials[currentTestimonial].name}
                            </div>
                            <div style={{ color: '#4B5563' }}>
                                {testimonials[currentTestimonial].role}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                style={{
                                    width: '0.75rem',
                                    height: '0.75rem',
                                    borderRadius: '9999px',
                                    transition: 'background-color 0.3s ease',
                                    backgroundColor:
                                        index === currentTestimonial
                                            ? '#FFB703'
                                            : 'rgba(255,255,255,0.3)',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
