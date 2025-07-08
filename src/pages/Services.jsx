import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 'construction',
      title: 'Construction',
      icon: '🏗️',
      description: 'Professional construction services for residential and commercial projects',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Residential Construction',
        'Commercial Buildings',
        'Renovation & Remodeling',
        'Infrastructure Development',
        'Quality Material Sourcing',
        'Project Management'
      ],
      process: [
        'Initial Consultation & Planning',
        'Design & Approval',
        'Material Selection',
        'Construction Phase',
        'Quality Control',
        'Final Handover'
      ]
    },
    {
      id: 'architecture',
      title: 'Architecture',
      icon: '🏛️',
      description: 'Innovative architectural designs that blend aesthetics with functionality',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Residential Design',
        'Commercial Architecture',
        'Sustainable Design',
        '3D Visualization',
        'Structural Planning',
        'Landscape Design'
      ],
      process: [
        'Concept Development',
        'Design Sketching',
        '3D Modeling',
        'Technical Drawings',
        'Approval Process',
        'Construction Support'
      ]
    },
    {
      id: 'interior',
      title: 'Interior Designing',
      icon: '🏠',
      description: 'Transform your spaces with beautiful and functional interior designs',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Space Planning',
        'Furniture Selection',
        'Color Coordination',
        'Lighting Design',
        'Custom Furnishings',
        'Complete Makeovers'
      ],
      process: [
        'Space Assessment',
        'Design Concept',
        'Material Selection',
        'Implementation',
        'Installation',
        'Final Styling'
      ]
    },
    {
      id: 'vastu',
      title: 'Vastushastra',
      icon: '🧭',
      description: 'Traditional Vastu consultation for harmonious and prosperous living',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Residential Vastu',
        'Commercial Vastu',
        'Site Analysis',
        'Directional Planning',
        'Remedial Solutions',
        'Ongoing Consultation'
      ],
      process: [
        'Site Evaluation',
        'Vastu Analysis',
        'Recommendation Report',
        'Implementation Plan',
        'Guidance & Support',
        'Follow-up Consultation'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive solutions for all your construction and design needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide end-to-end services to bring your 
              vision to life with quality, innovation, and attention to detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card p-6 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <a
                  href={`#${service.id}`}
                  className="text-primary font-medium hover:text-accent transition-colors"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-alternate' : 'bg-white'}`}
        >
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={index % 2 === 0 ? 'order-2' : 'order-1'}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{service.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-text">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  {service.description}
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-text mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <svg className="w-4 h-4 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-text mb-4">
                      Our Process
                    </h3>
                    <div className="space-y-2">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-medium mr-3">
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-600">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/contact" className="btn-primary">
                    Get Started with {service.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Our Services */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">
                We stay ahead of trends and use the latest technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-300">
                Every project undergoes rigorous quality checks to ensure the highest standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-300">
                Our skilled professionals bring years of experience and expertise to every project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p className="text-gray-300">
                We respect deadlines and ensure projects are completed on time without compromising quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Value for Money</h3>
              <p className="text-gray-300">
                We provide transparent pricing and deliver exceptional value for your investment.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-300">
                We provide ongoing support and maintenance to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a customized solution that meets your needs and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Quote
            </Link>
            <Link to="/properties" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;