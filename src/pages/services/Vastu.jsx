import { Link } from 'react-router-dom';

const Vastu = () => {
  const services = [
    {
      title: 'Residential Vastu',
      description: 'Harmonious home design following traditional Vastu principles',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Home Layout Planning', 'Room Positioning', 'Entrance Direction', 'Garden & Landscaping']
    },
    {
      title: 'Commercial Vastu',
      description: 'Vastu consultation for offices, shops, and business establishments',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Office Layout', 'Cash Counter Position', 'Meeting Room Planning', 'Employee Seating']
    },
    {
      title: 'Vastu Remedies',
      description: 'Corrective solutions for existing properties with Vastu defects',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Defect Analysis', 'Remedial Solutions', 'Crystal Placement', 'Color Corrections']
    }
  ];

  const principles = [
    {
      direction: 'North',
      element: 'Water',
      color: 'Blue/Black',
      benefits: 'Career growth, opportunities, and financial stability',
      icon: '🧭'
    },
    {
      direction: 'East',
      element: 'Air',
      color: 'Green',
      benefits: 'Health, vitality, and new beginnings',
      icon: '🌅'
    },
    {
      direction: 'South',
      element: 'Fire',
      color: 'Red',
      benefits: 'Fame, recognition, and social status',
      icon: '🔥'
    },
    {
      direction: 'West',
      element: 'Earth',
      color: 'Yellow/Brown',
      benefits: 'Creativity, children, and joy',
      icon: '🌍'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Site Analysis',
      description: 'Comprehensive study of the property, its orientation, and surroundings'
    },
    {
      step: '02',
      title: 'Vastu Assessment',
      description: 'Detailed analysis based on traditional Vastu principles and guidelines'
    },
    {
      step: '03',
      title: 'Report Preparation',
      description: 'Comprehensive report with findings, recommendations, and solutions'
    },
    {
      step: '04',
      title: 'Implementation Plan',
      description: 'Step-by-step guidance for implementing Vastu recommendations'
    },
    {
      step: '05',
      title: 'Remedial Solutions',
      description: 'Practical remedies for existing Vastu defects and imbalances'
    },
    {
      step: '06',
      title: 'Follow-up Support',
      description: 'Ongoing consultation and support for optimal results'
    }
  ];

  const benefits = [
    {
      icon: '🏠',
      title: 'Harmonious Living',
      description: 'Create balanced and peaceful living environments'
    },
    {
      icon: '💰',
      title: 'Prosperity',
      description: 'Attract wealth, success, and financial abundance'
    },
    {
      icon: '❤️',
      title: 'Health & Wellness',
      description: 'Promote physical and mental well-being for all residents'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Harmony',
      description: 'Strengthen relationships and family bonds'
    },
    {
      icon: '🎯',
      title: 'Career Success',
      description: 'Enhance professional growth and business opportunities'
    },
    {
      icon: '🧘',
      title: 'Spiritual Growth',
      description: 'Foster spiritual development and inner peace'
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
            backgroundImage: `url('https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vastu Shastra Consultation</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ancient wisdom for modern living - creating harmony and prosperity
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Traditional Vastu Wisdom
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vastu Shastra is an ancient Indian science of architecture and design 
                that creates harmony between human dwellings and natural forces. Our 
                experienced Vastu consultant combines traditional knowledge with modern 
                applications to help you create spaces that promote health, wealth, 
                and happiness.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're planning a new construction or looking to improve an 
                existing property, our Vastu consultation services provide practical 
                solutions that align your space with positive cosmic energies while 
                maintaining modern functionality and aesthetics.
              </p>
              <Link to="/contact" className="btn-primary">
                Book Vastu Consultation
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Vastu Consultation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vastu Services */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Vastu Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive Vastu consultation for residential and commercial properties
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

      {/* Vastu Principles */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Fundamental Vastu Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding the five elements and directional energies in Vastu Shastra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  {principle.direction}
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Element:</span>
                    <span className="text-gray-600 ml-2">{principle.element}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Color:</span>
                    <span className="text-gray-600 ml-2">{principle.color}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4">
                  {principle.benefits}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Consultation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to Vastu analysis and implementation
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

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Benefits of Vastu Consultation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How Vastu Shastra can positively impact various aspects of your life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-text mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vastu Tips */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Essential Vastu Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple Vastu guidelines you can implement in your home or office
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-text mb-6">For Home</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Main Entrance</h4>
                    <p className="text-gray-600 text-sm">Face north or east for positive energy flow</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Kitchen Placement</h4>
                    <p className="text-gray-600 text-sm">Southeast corner is ideal for kitchen location</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Master Bedroom</h4>
                    <p className="text-gray-600 text-sm">Southwest direction promotes stability and rest</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Water Elements</h4>
                    <p className="text-gray-600 text-sm">Place in north or northeast for prosperity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-semibold text-text mb-6">For Office</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Desk Position</h4>
                    <p className="text-gray-600 text-sm">Face north or east while working for better focus</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Cash Counter</h4>
                    <p className="text-gray-600 text-sm">Southeast direction attracts wealth and prosperity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Meeting Room</h4>
                    <p className="text-gray-600 text-sm">Northwest corner promotes successful negotiations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-text">Reception Area</h4>
                    <p className="text-gray-600 text-sm">Northeast entrance welcomes positive energy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your Space with Vastu
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the benefits of ancient Vastu wisdom in your modern life. Book a consultation today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Book Consultation
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

export default Vastu;