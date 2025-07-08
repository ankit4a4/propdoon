import { Link } from 'react-router-dom';

const Construction = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes, apartments, and residential complexes built to the highest standards',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Custom Home Design', 'Apartment Buildings', 'Villa Complexes', 'Renovation Projects']
    },
    {
      title: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and commercial complexes for modern businesses',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Industrial Facilities']
    },
    {
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects including roads, utilities, and public facilities',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Road Construction', 'Utility Installation', 'Public Buildings', 'Site Development']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Planning & Design',
      description: 'Detailed project planning, site analysis, and architectural design development'
    },
    {
      step: '02',
      title: 'Permits & Approvals',
      description: 'Obtaining all necessary permits, approvals, and regulatory clearances'
    },
    {
      step: '03',
      title: 'Site Preparation',
      description: 'Site clearing, excavation, and foundation preparation work'
    },
    {
      step: '04',
      title: 'Construction Phase',
      description: 'Systematic construction following approved plans with quality monitoring'
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Regular inspections and quality checks at every stage of construction'
    },
    {
      step: '06',
      title: 'Final Handover',
      description: 'Project completion, final inspection, and handover to the client'
    }
  ];

  const features = [
    {
      icon: '🏗️',
      title: 'Modern Techniques',
      description: 'Latest construction methods and technologies for efficient building'
    },
    {
      icon: '🔧',
      title: 'Quality Materials',
      description: 'Premium grade materials sourced from trusted suppliers'
    },
    {
      icon: '👷',
      title: 'Skilled Workforce',
      description: 'Experienced professionals and certified construction workers'
    },
    {
      icon: '📋',
      title: 'Project Management',
      description: 'Systematic project management ensuring timely completion'
    },
    {
      icon: '🛡️',
      title: 'Safety Standards',
      description: 'Strict adherence to safety protocols and industry standards'
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Competitive pricing without compromising on quality'
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
            backgroundImage: `url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Construction Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Building your dreams with precision, quality, and innovation
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Professional Construction Services
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience in the construction industry, we deliver 
                exceptional building solutions that combine traditional craftsmanship with 
                modern technology. Our comprehensive construction services cover everything 
                from residential homes to large commercial complexes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We pride ourselves on our attention to detail, commitment to quality, and 
                ability to deliver projects on time and within budget. Every project is 
                managed by experienced professionals who ensure the highest standards of 
                construction and safety.
              </p>
              <Link to="/contact" className="btn-primary">
                Get Construction Quote
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction Services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Construction Types */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Construction Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial complexes, we handle all types of construction projects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <svg className="w-4 h-4 text-accent mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Construction Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality, efficiency, and timely completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-text">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Why Choose Our Construction Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine experience, expertise, and innovation to deliver exceptional construction results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Recent Construction Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest construction achievements and quality workmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Luxury Villa Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text mb-2">Luxury Villa Complex</h3>
                <p className="text-gray-600 text-sm mb-3">25 premium villas with modern amenities</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
                  <span className="text-gray-500">2024</span>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Commercial Plaza"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text mb-2">Business Plaza</h3>
                <p className="text-gray-600 text-sm mb-3">Modern commercial complex with offices</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>
                  <span className="text-gray-500">2024</span>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Residential Apartments"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text mb-2">Residential Apartments</h3>
                <p className="text-gray-600 text-sm mb-3">50-unit apartment complex with amenities</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>
                  <span className="text-gray-500">2023</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/properties" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your construction needs and create a customized solution that meets your requirements and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get Free Estimate
            </Link>
            <Link to="/services" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;