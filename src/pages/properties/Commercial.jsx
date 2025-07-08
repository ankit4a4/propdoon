import { useState } from 'react';
import { Link } from 'react-router-dom';

const Commercial = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filters = [
    { id: 'all', name: 'All Types', count: 15 },
    { id: 'office', name: 'Office Spaces', count: 6 },
    { id: 'retail', name: 'Retail Shops', count: 5 },
    { id: 'warehouse', name: 'Warehouses', count: 4 }
  ];

  const commercialProperties = [
    {
      id: 1,
      title: 'Premium Office Complex',
      type: 'office',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 50000000,
      location: 'Business District',
      area: 8000,
      floors: 5,
      parking: 50,
      status: 'Ready to Move',
      features: ['Central AC', 'High Speed Internet', 'Conference Rooms', 'Cafeteria', 'Security'],
      description: 'State-of-the-art office complex in prime business location.',
      highlights: [
        'Prime business district location',
        'Modern infrastructure and amenities',
        'Excellent connectivity and parking',
        'Professional property management'
      ],
      rental: '₹150/sq ft/month',
      roi: '15%'
    },
    {
      id: 2,
      title: 'Retail Shopping Plaza',
      type: 'retail',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 35000000,
      location: 'City Center',
      area: 6000,
      shops: 25,
      parking: 100,
      status: 'Under Construction',
      features: ['Food Court', 'Escalators', 'Central AC', 'Security', 'Parking'],
      description: 'Modern shopping complex with high footfall potential.',
      highlights: [
        'High footfall city center location',
        'Mix of retail and F&B opportunities',
        'Anchor tenants already committed',
        'Excellent public transportation access'
      ],
      rental: '₹200/sq ft/month',
      roi: '16%'
    },
    {
      id: 3,
      title: 'Industrial Warehouse',
      type: 'warehouse',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 25000000,
      location: 'Industrial Area',
      area: 12000,
      height: '30 ft',
      parking: 20,
      status: 'Available',
      features: ['Loading Dock', 'High Ceiling', 'Security', 'Power Backup', 'Office Space'],
      description: 'Spacious warehouse facility with modern logistics features.',
      highlights: [
        'Strategic location for logistics',
        'High ceiling and loading facilities',
        'Excellent road connectivity',
        'Suitable for various industries'
      ],
      rental: '₹80/sq ft/month',
      roi: '12%'
    },
    {
      id: 4,
      title: 'Corporate Office Tower',
      type: 'office',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 80000000,
      location: 'IT Hub',
      area: 15000,
      floors: 8,
      parking: 100,
      status: 'Pre-Launch',
      features: ['Smart Building', 'Fiber Internet', 'Gym', 'Restaurant', 'Helipad'],
      description: 'Ultra-modern corporate tower with smart building features.',
      highlights: [
        'Smart building technology',
        'Located in emerging IT hub',
        'Premium amenities and facilities',
        'Sustainable and energy efficient'
      ],
      rental: '₹180/sq ft/month',
      roi: '18%'
    },
    {
      id: 5,
      title: 'Boutique Retail Spaces',
      type: 'retail',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 15000000,
      location: 'Mall Road',
      area: 2500,
      shops: 8,
      parking: 30,
      status: 'Ready to Move',
      features: ['Street Facing', 'High Visibility', 'Parking', 'Security', 'Storage'],
      description: 'Premium retail spaces on busy commercial street.',
      highlights: [
        'High visibility street-facing location',
        'Established commercial area',
        'Perfect for boutique businesses',
        'Good footfall and accessibility'
      ],
      rental: '₹250/sq ft/month',
      roi: '14%'
    },
    {
      id: 6,
      title: 'Logistics Warehouse Hub',
      type: 'warehouse',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 40000000,
      location: 'Highway Access',
      area: 20000,
      height: '35 ft',
      parking: 50,
      status: 'Under Construction',
      features: ['Multiple Docks', 'Crane Facility', 'Cold Storage', 'Security', 'Office Complex'],
      description: 'Large-scale logistics facility with specialized features.',
      highlights: [
        'Direct highway access',
        'Multi-modal transportation hub',
        'Cold storage capabilities',
        'Suitable for e-commerce and logistics'
      ],
      rental: '₹90/sq ft/month',
      roi: '13%'
    }
  ];

  const filteredProperties = commercialProperties.filter(property => {
    const matchesType = activeFilter === 'all' || property.type === activeFilter;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'low' && property.price < 30000000) ||
      (priceRange === 'mid' && property.price >= 30000000 && property.price < 60000000) ||
      (priceRange === 'high' && property.price >= 60000000);
    
    return matchesType && matchesPrice;
  });

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
            backgroundImage: `url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Properties</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Prime commercial spaces for your business growth and investment needs
          </p>
        </div>
      </section>

      {/* Commercial Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Strategic Commercial Investments
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our commercial properties are strategically located in prime business 
                districts, offering excellent connectivity, modern infrastructure, and 
                high growth potential. Whether you're looking for office spaces, retail 
                outlets, or warehouse facilities, we have options that cater to diverse 
                business needs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Each commercial property is selected for its location advantages, 
                rental potential, and long-term appreciation prospects. Our portfolio 
                includes ready-to-move properties as well as under-construction projects 
                with attractive pre-launch pricing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">12-18%</div>
                  <div className="text-gray-600 text-sm">Annual ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">100+</div>
                  <div className="text-gray-600 text-sm">Business Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">25+</div>
                  <div className="text-gray-600 text-sm">Commercial Projects</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Commercial Properties"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 mb-6">
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
            
            <div className="flex items-center gap-4">
              <span className="font-medium text-gray-700">Price Range:</span>
              <select 
                value={priceRange} 
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Prices</option>
                <option value="low">Under ₹3 Cr</option>
                <option value="mid">₹3 Cr - ₹6 Cr</option>
                <option value="high">Above ₹6 Cr</option>
              </select>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <div key={property.id} className="card overflow-hidden">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {property.type}
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
                  {property.roi && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        ROI: {property.roi}
                      </span>
                    </div>
                  )}
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
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-medium text-gray-700">Area</div>
                      <div className="text-primary font-bold">{property.area} sq ft</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="font-medium text-gray-700">Rental Rate</div>
                      <div className="text-primary font-bold">{property.rental}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {property.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                      {property.features.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{property.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link to="/contact" className="btn-primary flex-1 text-center">
                      Inquire Now
                    </Link>
                    <button className="btn-secondary flex-1">
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Commercial Benefits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Why Choose Commercial Real Estate?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic advantages of investing in commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Higher Returns</h3>
              <p className="text-gray-600">
                Commercial properties typically offer higher rental yields compared to residential properties.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Stable Income</h3>
              <p className="text-gray-600">
                Long-term lease agreements provide predictable and stable rental income streams.
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
                Prime commercial locations offer excellent potential for long-term capital growth.
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
                Strategic locations in business districts with excellent connectivity and infrastructure.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Professional Tenants</h3>
              <p className="text-gray-600">
                Business tenants typically maintain properties well and have stable rental payments.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Tax Benefits</h3>
              <p className="text-gray-600">
                Commercial properties offer various tax advantages including depreciation benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Commercial Property Types
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diverse commercial real estate options to suit different business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-text mb-4">Office Spaces</h3>
              <p className="text-gray-600 mb-4">
                Modern office complexes with state-of-the-art facilities and infrastructure.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• IT-ready infrastructure</li>
                <li>• Conference facilities</li>
                <li>• Parking and security</li>
                <li>• Flexible layouts</li>
              </ul>
            </div>

            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold text-text mb-4">Retail Spaces</h3>
              <p className="text-gray-600 mb-4">
                Prime retail locations with high footfall and excellent visibility.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• High street locations</li>
                <li>• Shopping complexes</li>
                <li>• Food courts</li>
                <li>• Anchor tenant spaces</li>
              </ul>
            </div>

            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold text-text mb-4">Warehouses</h3>
              <p className="text-gray-600 mb-4">
                Industrial and logistics facilities with modern storage solutions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Loading docks</li>
                <li>• High ceilings</li>
                <li>• Cold storage options</li>
                <li>• Highway connectivity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Invest in Commercial Real Estate
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover lucrative commercial property opportunities that can grow your business and investment portfolio
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

export default Commercial;