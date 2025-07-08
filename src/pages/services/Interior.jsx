import { Link } from 'react-router-dom';

const Interior = () => {
  const services = [
    {
      title: 'Residential Interiors',
      description: 'Transform your home into a beautiful and functional living space',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Living Room Design', 'Bedroom Styling', 'Kitchen Planning', 'Bathroom Design']
    },
    {
      title: 'Commercial Interiors',
      description: 'Professional interior solutions for offices and commercial spaces',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Office Design', 'Retail Spaces', 'Restaurant Interiors', 'Hotel Design']
    },
    {
      title: 'Complete Makeovers',
      description: 'Full-scale interior renovation and redesign projects',
      image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Space Planning', 'Furniture Selection', 'Color Schemes', 'Lighting Design']
    }
  ];

  const designStyles = [
    {
      name: 'Modern Contemporary',
      description: 'Clean lines, minimalist approach, and functional design',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Traditional Classic',
      description: 'Timeless elegance with rich textures and warm colors',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Industrial Chic',
      description: 'Raw materials, exposed elements, and urban aesthetics',
      image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Scandinavian',
      description: 'Light colors, natural materials, and cozy functionality',
      image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understanding your lifestyle, preferences, and design goals'
    },
    {
      step: '02',
      title: 'Space Assessment',
      description: 'Detailed analysis of the space, measurements, and existing conditions'
    },
    {
      step: '03',
      title: 'Design Concept',
      description: 'Creating mood boards, color palettes, and initial design concepts'
    },
    {
      step: '04',
      title: 'Design Development',
      description: 'Detailed plans, 3D visualizations, and material selections'
    },
    {
      step: '05',
      title: 'Implementation',
      description: 'Project management, procurement, and installation coordination'
    },
    {
      step: '06',
      title: 'Final Styling',
      description: 'Finishing touches, accessories, and final styling details'
    }
  ];

  const features = [
    {
      icon: '🎨',
      title: 'Custom Design',
      description: 'Personalized designs tailored to your unique style and needs'
    },
    {
      icon: '📐',
      title: 'Space Planning',
      description: 'Optimal space utilization for maximum functionality and flow'
    },
    {
      icon: '💡',
      title: 'Lighting Design',
      description: 'Strategic lighting solutions to enhance ambiance and functionality'
    },
    {
      icon: '🪑',
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that complement your design theme'
    },
    {
      icon: '🎭',
      title: 'Color Coordination',
      description: 'Expert color schemes that create harmony and visual appeal'
    },
    {
      icon: '🏠',
      title: 'Complete Solutions',
      description: 'End-to-end interior design services from concept to completion'
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
            backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interior Design Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Creating beautiful, functional spaces that reflect your personality
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Transform Your Space
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our interior design team specializes in creating spaces that are not only 
                visually stunning but also highly functional and comfortable. We believe 
                that great interior design should enhance your daily life while reflecting 
                your personal style and preferences.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From concept development to final installation, we handle every aspect 
                of your interior design project. Our comprehensive approach ensures that 
                every element works together harmoniously to create a cohesive and 
                beautiful living or working environment.
              </p>
              <Link to="/contact" className="btn-primary">
                Start Your Design Journey
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior Design Services"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interior Services */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Interior Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive interior design solutions for residential and commercial spaces
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

      {/* Design Styles */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Design Styles We Specialize In
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From modern contemporary to traditional classic, we create interiors in various styles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designStyles.map((style, index) => (
              <div key={index} className="card overflow-hidden">
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach that ensures your vision becomes a beautiful reality
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
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Why Choose Our Interior Design Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine creativity, functionality, and attention to detail to create exceptional interiors
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

      {/* Portfolio Showcase */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Recent Interior Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest interior design transformations and creative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Modern Living Room"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text mb-2">Modern Living Room</h3>
                <p className="text-gray-600 text-sm mb-3">Contemporary design with neutral tones and clean lines</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Residential</span>
                  <span className="text-gray-500">2024</span>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Office Interior"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text mb-2">Corporate Office</h3>
                <p className="text-gray-600 text-sm mb-3">Professional workspace with modern amenities</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Commercial</span>
                  <span className="text-gray-500">2024</span>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Bedroom Design"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text mb-2">Master Bedroom</h3>
                <p className="text-gray-600 text-sm mb-3">Luxurious bedroom with custom furniture and lighting</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Luxury</span>
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
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's create an interior that perfectly reflects your style and enhances your daily life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get Design Consultation
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

export default Interior;