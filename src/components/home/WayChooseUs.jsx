import React from 'react';

const WayChooseUs = () => {
    return (
        <section
            style={{
                backgroundColor: '#F9FAFB',
                padding: '6rem 1rem',
                position: 'relative',
            }}
        >
            {/* Decorative elements */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '8px',
                    background: 'linear-gradient(90deg, #FFB703 0%, #FB8500 100%)',
                }}
            />

            <div style={{
                maxWidth: '80rem',
                margin: '0 auto',
                position: 'relative',
            }}>
                <div className="text-center mb-16">
                    <span
                        style={{
                            display: 'inline-block',
                            color: '#FB8500',
                            fontWeight: '600',
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            fontSize: '0.875rem'
                        }}
                    >
                        Why Choose Us
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            color: '#1A202C',
                            lineHeight: '1.2',
                        }}
                    >
                        Why Choose <span style={{ color: '#FB8500' }}>PropDoon</span>?
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{
                            color: '#4A5568',
                            fontSize: '1.125rem',
                            lineHeight: '1.6',
                        }}
                    >
                        We combine experience, expertise, and innovation to deliver exceptional results that exceed expectations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div
                        className="text-center p-8 rounded-xl transition-all duration-300 hover:shadow-xl"
                        style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            transform: 'translateY(0)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                            style={{
                                backgroundColor: '#FFF4E5',
                                border: '2px solid #FFB703'
                            }}
                        >
                            <svg
                                className="w-10 h-10"
                                style={{ color: '#FB8500' }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{ color: '#1A202C' }}
                        >
                            Quality Assurance
                        </h3>
                        <p style={{
                            color: '#4A5568',
                            fontSize: '1rem',
                            lineHeight: '1.7',
                        }}>
                            We maintain the highest standards of quality in every project with rigorous testing protocols and attention to detail.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="text-center p-8 rounded-xl transition-all duration-300 hover:shadow-xl"
                        style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            transform: 'translateY(0)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                            style={{
                                backgroundColor: '#FFF4E5',
                                border: '2px solid #FFB703'
                            }}
                        >
                            <svg
                                className="w-10 h-10"
                                style={{ color: '#FB8500' }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{ color: '#1A202C' }}
                        >
                            On-Time Delivery
                        </h3>
                        <p style={{
                            color: '#4A5568',
                            fontSize: '1rem',
                            lineHeight: '1.7',
                        }}>
                            We respect your time with strict deadlines and efficient project management to ensure timely completion.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="text-center p-8 rounded-xl transition-all duration-300 hover:shadow-xl"
                        style={{
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            transform: 'translateY(0)',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                            style={{
                                backgroundColor: '#FFF4E5',
                                border: '2px solid #FFB703'
                            }}
                        >
                            <svg
                                className="w-10 h-10"
                                style={{ color: '#FB8500' }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{ color: '#1A202C' }}
                        >
                            Expert Team
                        </h3>
                        <p style={{
                            color: '#4A5568',
                            fontSize: '1rem',
                            lineHeight: '1.7',
                        }}>
                            Our certified professionals bring decades of combined experience and specialized knowledge to your project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WayChooseUs;