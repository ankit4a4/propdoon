import React from 'react';
import { Link } from 'react-router-dom';

const HomeCTA = () => {
    return (
        <section
            style={{
                backgroundColor: '#D56F21',
                color: '#FFFFFF',
                paddingTop: '4rem',
                paddingBottom: '4rem',
                paddingLeft: '1rem',
                paddingRight: '1rem',
            }}
        >
            <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Build Your Dream?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Let's discuss your project and bring your vision to life with our expertise and dedication
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        // to="/contact"
                        to={"/#"}
                        className="text-lg font-semibold px-8 py-4 rounded-lg transition-all"
                        style={{
                            backgroundColor: '#002B5B',
                            color: '#FFFFFF',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(0,43,91,0.9)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#002B5B';
                        }}
                    >
                        Get Free Consultation
                    </Link>
                    <Link
                        // to="/properties"
                        to={"/#"}
                        className="text-lg font-semibold px-8 py-4 rounded-lg transition-colors"
                        style={{
                            backgroundColor: '#FFFFFF',
                            color: '#FFB703',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#F3F4F6';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#FFFFFF';
                        }}
                    >
                        Browse Properties
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeCTA;
