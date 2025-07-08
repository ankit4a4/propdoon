import { Link } from 'react-router-dom';

const Architecture = () => {
  const services = [
    {
      title: 'Residential Architecture',
      description: 'Custom home designs that reflect your lifestyle and preferences',
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Custom Home Design', 'Villa Architecture', 'Apartment Planning', 'Renovation Design']
    },
    {
      title: 'Commercial Architecture',
      description: 'Functional and aesthetic designs for business and commercial spaces',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Office Buildings', 'Retail Spaces', 'Hotels & Restaurants', 'Industrial Design']
    },
    {
      title: 'Sustainable Design',
      description: 'Eco-friendly architectural solutions for a sustainable future',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Green Building Design', 'Energy Efficiency', 'Natural Lighting', 'Sustainable Materials']
    }
  ];

  const designProcess = [
    {
      step: '01',
      title: 'Consultation & Brief',
      description: 'Understanding your vision, requirements, and project constraints'
    },
    {
      step: '02',
      title: 'Site Analysis',
      description: 'Comprehensive site study including topography, climate, and regulations'
    },
    {
      step: '03',
      title: 'Concept Development',
      description: 'Initial design concepts and spatial planning based on your needs'
    },
    {
      step: '04',
      title: 'Design Development',
      description: 'Detailed architectural drawings and 3D visualizations'
    },
    {
      step: '05',
      title: 'Technical Drawings',
      description: 'Construction documents, specifications, and technical details'
    },
    {
      step: '06',
      title: 'Project Support',
      description: 'Construction administration and project supervision'
    }
  ];

  const specializations = [
    {
      icon: '🏠',
      title: 'Modern Design',
      description: 'Contemporary architectural styles with clean lines and open spaces'
    },
    {
      icon: '🌿',
      title: 'Sustainable Architecture',
      description: 'Environmentally conscious designs that minimize ecological impact'
    },
    {
      icon: '🏛️',
      title: 'Traditional Fusion',
      description: 'Blending traditional elements with modern functionality'
    },
    {
      icon: '📐',
      title: 'Space Optimization',
      description: 'Maximizing functionality and efficiency in every square foot'
    },
    {
      icon: '💡',
      title: 'Smart Integration',
      description: 'Incorporating smart home technology and automation systems'
    },
    {
      icon: '🎨',
      title: 'Aesthetic Excellence',
      description: 'Creating visually stunning designs that inspire and delight'
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
            backgroundImage: `url('https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Architecture Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Innovative designs that blend form, function, and sustainability
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Architectural Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our architectural team combines creativity with technical expertise to create 
                spaces that are not only beautiful but also functional and sustainable. We 
                believe that great architecture should enhance the way people live and work 
                while respecting the environment and local context.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From initial concept to final construction, we work closely with our clients 
                to ensure that every design reflects their vision while meeting the highest 
                standards of architectural excellence. Our portfolio spans residential, 
                commercial, and institutional projects of all scales.
              </p>
              <Link to="/contact" className="btn-primary">
                Discuss Your Project
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Architecture Services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Types */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Architectural Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive architectural solutions for residential, commercial, and sustainable projects
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

      {/* Design Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collaborative approach that ensures your vision becomes reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
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

      {/* Specializations */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Specializations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Areas of expertise that set us apart in architectural design and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{spec.icon}</div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {spec.title}
                </h3>
                <p className="text-gray-600">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Featured Architectural Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our architectural excellence across different project types
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern Villa Design"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2">Modern Villa Design</h3>
                <p className="text-gray-600 mb-4">
                  Contemporary villa featuring clean lines, large windows, and seamless indoor-outdoor living spaces.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Residential • 2024</span>
                  <Link to="/contact" className="text-primary font-medium hover:text-accent transition-colors">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Commercial Complex"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2">Commercial Complex</h3>
                <p className="text-gray-600 mb-4">
                  Multi-use commercial building with innovative facade design and energy-efficient systems.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Commercial • 2023</span>
                  <Link to="/contact" className="text-primary font-medium hover:text-accent transition-colors">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sustainable Home"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2">Sustainable Home</h3>
                <p className="text-gray-600 mb-4">
                  Eco-friendly residence with solar panels, rainwater harvesting, and natural ventilation systems.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Sustainable • 2024</span>
                  <Link to="/contact" className="text-primary font-medium hover:text-accent transition-colors">
                    View Details →
                  </Link>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Office Building"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text mb-2">Modern Office Building</h3>
                <p className="text-gray-600 mb-4">
                  State-of-the-art office complex with flexible workspaces and smart building technologies.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Commercial • 2023</span>
                  <Link to="/contact" className="text-primary font-medium hover:text-accent transition-colors">
                    View Details →
                  </Link>
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
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to design a space that perfectly reflects your vision and exceeds your expectations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Design
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

export default Architecture;