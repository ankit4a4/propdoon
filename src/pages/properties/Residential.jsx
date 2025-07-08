import { useState } from 'react';
import { Link } from 'react-router-dom';

const Residential = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filters = [
    { id: 'all', name: 'All Types', count: 18 },
    { id: 'villa', name: 'Villas', count: 6 },
    { id: 'apartment', name: 'Apartments', count: 8 },
    { id: 'house', name: 'Independent Houses', count: 4 }
  ];

  const residentialProperties = [
    {
      id: 1,
      title: 'Luxury Hill View Villa',
      type: 'villa',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 25000000,
      location: 'Dehradun Hills',
      beds: 4,
      baths: 3,
      area: 3200,
      status: 'Ready to Move',
      features: ['Swimming Pool', 'Garden', 'Security', 'Parking', 'Hill View'],
      description: 'Stunning villa with panoramic hill views and premium amenities.',
      highlights: [
        'Panoramic views of Dehradun hills',
        'Premium location with excellent connectivity',
        'Modern architecture with traditional elements',
        'Gated community with 24/7 security'
      ]
    },
    {
      id: 2,
      title: 'Modern City Apartment',
      type: 'apartment',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 8500000,
      location: 'City Center',
      beds: 3,
      baths: 2,
      area: 1800,
      status: 'Under Construction',
      features: ['Gym', 'Elevator', 'Security', 'Parking', 'Balcony'],
      description: 'Contemporary apartment in the heart of the city with modern amenities.',
      highlights: [
        'Prime city center location',
        'Walking distance to shopping and dining',
        'Modern amenities and facilities',
        'Excellent public transportation access'
      ]
    },
    {
      id: 3,
      title: 'Family Independent House',
      type: 'house',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 12000000,
      location: 'Suburban Area',
      beds: 3,
      baths: 2,
      area: 2200,
      status: 'Ready to Move',
      features: ['Garden', 'Garage', 'Study Room', 'Terrace', 'Store Room'],
      description: 'Spacious independent house perfect for families with children.',
      highlights: [
        'Quiet suburban neighborhood',
        'Large garden space for children',
        'Independent parking and storage',
        'Close to schools and hospitals'
      ]
    },
    {
      id: 4,
      title: 'Premium Penthouse',
      type: 'apartment',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 18000000,
      location: 'Business District',
      beds: 4,
      baths: 3,
      area: 2800,
      status: 'Available',
      features: ['Terrace Garden', 'Jacuzzi', 'Home Theater', 'Gym', 'Elevator'],
      description: 'Luxurious penthouse with exclusive amenities and city views.',
      highlights: [
        'Top floor with panoramic city views',
        'Private terrace garden and jacuzzi',
        'Premium finishes and fittings',
        'Exclusive elevator access'
      ]
    },
    {
      id: 5,
      title: 'Eco-Friendly Villa',
      type: 'villa',
      image: 'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 22000000,
      location: 'Green Valley',
      beds: 4,
      baths: 3,
      area: 3000,
      status: 'Under Construction',
      features: ['Solar Panels', 'Rainwater Harvesting', 'Garden', 'EV Charging', 'Security'],
      description: 'Sustainable villa with eco-friendly features and green technology.',
      highlights: [
        'Solar power and rainwater harvesting',
        'Energy-efficient design and materials',
        'Organic garden and composting area',
        'EV charging station included'
      ]
    },
    {
      id: 6,
      title: 'Compact Smart Apartment',
      type: 'apartment',
      image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 6500000,
      location: 'Tech Hub',
      beds: 2,
      baths: 2,
      area: 1200,
      status: 'Ready to Move',
      features: ['Smart Home', 'Gym', 'Co-working', 'Security', 'Parking'],
      description: 'Modern smart apartment with automated systems and tech features.',
      highlights: [
        'Smart home automation systems',
        'Located in emerging tech hub',
        'Co-working spaces and modern amenities',
        'Perfect for young professionals'
      ]
    }
  ];

  const filteredProperties = residentialProperties.filter(property => {
    const matchesType = activeFilter === 'all' || property.type === activeFilter;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'low' && property.price < 10000000) ||
      (priceRange === 'mid' && property.price >= 10000000 && property.price < 20000000) ||
      (priceRange === 'high' && property.price >= 20000000);
    
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
            backgroundImage: `url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential Properties</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find your perfect home with our premium residential properties
          </p>
        </div>
      </section>

      {/* Property Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Your Dream Home Awaits
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Discover a wide range of residential properties designed to meet 
                every lifestyle and budget. From luxury villas with stunning views 
                to modern apartments in prime locations, we offer homes that combine 
                comfort, convenience, and quality.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Each property is carefully selected for its location advantages, 
                construction quality, and amenities. Whether you're a first-time 
                buyer or looking to upgrade, our residential portfolio offers 
                something special for everyone.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-gray-600 text-sm">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-gray-600 text-sm">Residential Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-gray-600 text-sm">Prime Locations</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Residential Properties"
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
                <option value="low">Under ₹1 Cr</option>
                <option value="mid">₹1 Cr - ₹2 Cr</option>
                <option value="high">Above ₹2 Cr</option>
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
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      {property.baths} Baths
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {property.area} sq ft
                    </span>
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

      {/* Home Buying Guide */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Home Buying Guide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential steps to make your home buying journey smooth and successful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Define Your Needs</h3>
              <p className="text-gray-600 text-sm">
                Determine your budget, preferred location, and must-have features
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Property Search</h3>
              <p className="text-gray-600 text-sm">
                Browse our portfolio and shortlist properties that match your criteria
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Site Visits</h3>
              <p className="text-gray-600 text-sm">
                Visit properties, inspect amenities, and evaluate the neighborhood
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                04
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Documentation</h3>
              <p className="text-gray-600 text-sm">
                Complete legal formalities and registration with our assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Features */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Premium Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern amenities and features that enhance your living experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🏊‍♂️</div>
              <h3 className="text-lg font-semibold text-text mb-3">Swimming Pool</h3>
              <p className="text-gray-600 text-sm">
                Resort-style swimming pools with separate areas for adults and children
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🏋️‍♂️</div>
              <h3 className="text-lg font-semibold text-text mb-3">Fitness Center</h3>
              <p className="text-gray-600 text-sm">
                Fully equipped gymnasium with modern equipment and personal training
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-lg font-semibold text-text mb-3">Landscaped Gardens</h3>
              <p className="text-gray-600 text-sm">
                Beautiful gardens and green spaces for relaxation and recreation
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-lg font-semibold text-text mb-3">Covered Parking</h3>
              <p className="text-gray-600 text-sm">
                Secure covered parking spaces for residents and visitors
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-text mb-3">24/7 Security</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock security with CCTV surveillance and trained guards
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-lg font-semibold text-text mb-3">Recreation Areas</h3>
              <p className="text-gray-600 text-sm">
                Children's play areas, community halls, and recreational facilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Home Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you find the ideal residential property that matches your lifestyle and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Schedule Property Tour
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

export default Residential;