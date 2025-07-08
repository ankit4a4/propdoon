import React from 'react'
import { Link } from 'react-router-dom';
const HomeService = () => {
    const services = [
        {
            icon: '🏗️',
            title: 'Construction',
            description: 'Quality construction services with modern techniques and materials.',
            href: '/services#construction'
        },
        {
            icon: '🏛️',
            title: 'Architecture',
            description: 'Innovative architectural designs that blend form and function.',
            href: '/services#architecture'
        },
        {
            icon: '🏠',
            title: 'Interior Design',
            description: 'Beautiful interior spaces that reflect your style and personality.',
            href: '/services#interior'
        },
        {
            icon: '🧭',
            title: 'Vastushastra',
            description: 'Traditional Vastu consultation for harmonious living spaces.',
            href: '/services#vastu'
        }
    ];
    return (
        <>
            <section style={{ backgroundColor: '#FFFFFF', paddingTop: '4rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1C1C1C' }}>
                            Our Services
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
                            We offer comprehensive solutions for all your construction and real estate needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <Link
                                key={index}
                                // to={service.href}
                                to={"/#"}
                                className="p-6 text-center group transition-all duration-300 transform hover:-translate-y-1"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1C1C1C' }}>
                                    {service.title}
                                </h3>
                                <p style={{ color: '#4B5563' }}>{service.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeService
