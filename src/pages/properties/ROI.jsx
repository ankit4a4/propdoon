import { useState } from 'react';
import { Link } from 'react-router-dom';

const ROI = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Properties', count: 12 },
    { id: 'hotel', name: 'Hotels', count: 4 },
    { id: 'commercial', name: 'Commercial', count: 5 },
    { id: 'residential', name: 'Residential', count: 3 }
  ];

  const roiProperties = [
    {
      id: 1,
      title: 'Boutique Hotel Project',
      type: 'hotel',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 75000000,
      location: 'Tourist Area, Dehradun',
      roi: '18%',
      payback: '5.5 years',
      area: 12000,
      rooms: 20,
      status: 'Under Construction',
      features: ['Restaurant', 'Spa', 'Conference Hall', 'Parking', '24/7 Service'],
      description: 'Premium boutique hotel in prime tourist location with excellent ROI potential.',
      highlights: [
        'Prime tourist location with high footfall',
        'Fully managed by professional hotel management',
        'Guaranteed rental income for first 3 years',
        'Modern amenities and luxury facilities'
      ]
    },
    {
      id: 2,
      title: 'Commercial Plaza Investment',
      type: 'commercial',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 50000000,
      location: 'Business District',
      roi: '15%',
      payback: '6.7 years',
      area: 8000,
      units: 12,
      status: 'Ready to Move',
      features: ['Prime Location', 'High Speed Internet', 'Security', 'Parking', 'Elevator'],
      description: 'Modern commercial complex with multiple rental units and steady income.',
      highlights: [
        'Multiple income streams from various tenants',
        'Located in rapidly developing business district',
        'High appreciation potential',
        'Professional property management available'
      ]
    },
    {
      id: 3,
      title: 'Luxury Villa Complex',
      type: 'residential',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 35000000,
      location: 'Dehradun Hills',
      roi: '12%',
      payback: '8.3 years',
      area: 3200,
      villas: 25,
      status: 'Available',
      features: ['Swimming Pool', 'Garden', 'Security', 'Club House', 'Gym'],
      description: 'Premium villa complex with rental guarantee and high appreciation potential.',
      highlights: [
        'Rental guarantee for first 2 years',
        'High-end amenities attract premium tenants',
        'Excellent location with hill views',
        'Strong capital appreciation expected'
      ]
    },
    {
      id: 4,
      title: 'Business Hotel Chain',
      type: 'hotel',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 120000000,
      location: 'Airport Road',
      roi: '20%',
      payback: '5 years',
      area: 15000,
      rooms: 50,
      status: 'Pre-Launch',
      features: ['Business Center', 'Restaurant', 'Gym', 'Conference Rooms', 'Airport Shuttle'],
      description: 'Strategic business hotel investment with franchise partnership.',
      highlights: [
        'Partnership with established hotel chain',
        'Strategic location near airport',
        'Corporate clientele ensures steady occupancy',
        'Professional management and branding'
      ]
    },
    {
      id: 5,
      title: 'Retail Shopping Complex',
      type: 'commercial',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 80000000,
      location: 'City Center',
      roi: '16%',
      payback: '6.25 years',
      area: 10000,
      shops: 30,
      status: 'Under Construction',
      features: ['Food Court', 'Parking', 'Security', 'Central AC', 'Escalators'],
      description: 'Modern shopping complex in prime retail location with anchor tenants.',
      highlights: [
        'Anchor tenants already committed',
        'High footfall location in city center',
        'Mix of retail and F&B opportunities',
        'Excellent public transportation connectivity'
      ]
    },
    {
      id: 6,
      title: 'Service Apartments',
      type: 'residential',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 45000000,
      location: 'IT Hub Area',
      roi: '14%',
      payback: '7.1 years',
      area: 6000,
      units: 40,
      status: 'Ready to Move',
      features: ['Furnished Units', 'Housekeeping', 'Security', 'Gym', 'Laundry'],
      description: 'Fully furnished service apartments catering to corporate professionals.',
      highlights: [
        'High demand from IT professionals',
        'Fully furnished and managed',
        'Premium rental rates',
        'Low maintenance investment'
      ]
    }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? roiProperties 
    : roiProperties.filter(property => property.type === activeFilter);

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else {
      return `₹${(price / 100000).toFixed(0)} Lakh`;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ROI Properties</h1>
          <p className="text-xl max-w-2xl mx-auto">
            High-return investment opportunities with guaranteed income potential
          </p>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Smart Investment Opportunities
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our ROI properties are carefully selected investment opportunities that 
                offer attractive returns through rental income and capital appreciation. 
                Each property is analyzed for its income potential, location advantages, 
                and long-term growth prospects.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We provide comprehensive investment analysis, including projected returns, 
                market trends, and risk assessment to help you make informed investment 
                decisions. Our properties range from commercial complexes to hospitality 
                projects, each offering unique advantages.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">12-20%</div>
                  <div className="text-gray-600 text-sm">Annual ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5-8 Years</div>
                  <div className="text-gray-600 text-sm">Payback Period</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-gray-600 text-sm">Successful Projects</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ROI Properties"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeFilter === filter.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProperties.map(property => (
              <div key={property.id} className="card overflow-hidden">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      ROI: {property.roi}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.status === 'Ready to Move' 
                        ? 'bg-green-100 text-green-800' 
                        : property.status === 'Under Construction'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-text">
                      {property.title}
                    </h3>
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(property.price)}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {property.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-medium text-gray-700">Annual ROI</div>
                      <div className="text-primary font-bold">{property.roi}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="font-medium text-gray-700">Payback Period</div>
                      <div className="text-primary font-bold">{property.payback}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Key Highlights:</h4>
                    <div className="space-y-1">
                      {property.highlights.slice(0, 2).map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link to="/contact" className="btn-primary flex-1 text-center">
                      Investment Details
                    </Link>
                    <button className="btn-secondary flex-1">
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Why Invest in ROI Properties?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic advantages that make our ROI properties attractive investment opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">High Returns</h3>
              <p className="text-gray-600">
                Attractive annual returns ranging from 12% to 20% through rental income and appreciation.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Prime Locations</h3>
              <p className="text-gray-600">
                Strategic locations with high growth potential and excellent connectivity.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Secure Investment</h3>
              <p className="text-gray-600">
                Legal compliance, clear documentation, and transparent investment process.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Regular Income</h3>
              <p className="text-gray-600">
                Steady monthly rental income with potential for annual rent escalations.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Capital Appreciation</h3>
              <p className="text-gray-600">
                Long-term capital growth potential in rapidly developing areas.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Professional Management</h3>
              <p className="text-gray-600">
                Expert property management services to maximize your investment returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Investment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple and transparent process to start your real estate investment journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Property Selection</h3>
              <p className="text-gray-600 text-sm">
                Choose from our curated portfolio of high-ROI investment properties
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Due Diligence</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis and site visit to understand the investment potential
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Documentation</h3>
              <p className="text-gray-600 text-sm">
                Complete legal documentation and registration process with transparency
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                04
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Income Generation</h3>
              <p className="text-gray-600 text-sm">
                Start receiving regular rental income and track your investment performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Investment Journey
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover high-return investment opportunities that can secure your financial future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Investment Consultation
            </Link>
            <Link to="/properties" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              View All Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ROI;