import { useState } from 'react';
import { Link } from 'react-router-dom';

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filters = [
    { id: 'all', name: 'All Properties', count: 24 },
    { id: 'roi', name: 'ROI Properties', count: 8 },
    { id: 'residential', name: 'Residential', count: 12 },
    { id: 'commercial', name: 'Commercial', count: 4 }
  ];

  const properties = [
    {
      id: 1,
      title: 'Luxury Villa Complex',
      type: 'residential',
      category: 'ROI Property',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 25000000,
      location: 'Dehradun Hills',
      beds: 4,
      baths: 3,
      area: 3200,
      status: 'Available',
      features: ['Swimming Pool', 'Garden', 'Security', 'Parking'],
      roi: '12%',
      description: 'Elegant villa complex with modern amenities and stunning hill views.'
    },
    {
      id: 2,
      title: 'Modern Apartment',
      type: 'residential',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 8500000,
      location: 'City Center',
      beds: 3,
      baths: 2,
      area: 1800,
      status: 'Available',
      features: ['Gym', 'Elevator', 'Security', 'Parking'],
      description: 'Contemporary apartment in the heart of the city with all modern amenities.'
    },
    {
      id: 3,
      title: 'Commercial Plaza',
      type: 'commercial',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 50000000,
      location: 'Business District',
      beds: 0,
      baths: 8,
      area: 8000,
      status: 'Available',
      features: ['Prime Location', 'Parking', 'Security', 'High Speed Internet'],
      roi: '15%',
      description: 'Prime commercial space perfect for offices and retail businesses.'
    },
    {
      id: 4,
      title: 'Boutique Hotel',
      type: 'roi',
      category: 'ROI Property',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 75000000,
      location: 'Tourist Area',
      beds: 20,
      baths: 25,
      area: 12000,
      status: 'Under Construction',
      features: ['Restaurant', 'Spa', 'Conference Hall', 'Parking'],
      roi: '18%',
      description: 'Boutique hotel project with excellent investment potential.'
    },
    {
      id: 5,
      title: 'Family Home',
      type: 'residential',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 6500000,
      location: 'Suburban Area',
      beds: 3,
      baths: 2,
      area: 2200,
      status: 'Available',
      features: ['Garden', 'Garage', 'Study Room', 'Terrace'],
      description: 'Spacious family home with garden and modern interiors.'
    },
    {
      id: 6,
      title: 'Office Complex',
      type: 'commercial',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 35000000,
      location: 'IT Hub',
      beds: 0,
      baths: 12,
      area: 6000,
      status: 'Available',
      features: ['Modern Design', 'High Speed Internet', 'Conference Rooms', 'Cafeteria'],
      roi: '14%',
      description: 'State-of-the-art office complex designed for modern businesses.'
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesType = activeFilter === 'all' || property.type === activeFilter;
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'low' && property.price < 10000000) ||
      (priceRange === 'mid' && property.price >= 10000000 && property.price < 30000000) ||
      (priceRange === 'high' && property.price >= 30000000);
    
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
            backgroundImage: `url('https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Properties</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover premium real estate opportunities with excellent returns
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-white">
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
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                <option value="mid">₹1 Cr - ₹3 Cr</option>
                <option value="high">Above ₹3 Cr</option>
              </select>
            </div>
          </div>

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
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {property.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      property.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
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
                  <div className="flex items-center justify-between mb-2">
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
                  
                  {property.type !== 'commercial' && (
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
                  )}
                  
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
                      View Details
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

      {/* Construction Updates */}
      <section id="updates" className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Construction Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the progress of our ongoing construction projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Construction Progress"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-text">Himalayan Heights</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">75% Complete</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Luxury residential complex with 50 units. Foundation and structure work completed.
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-primary h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Expected completion: June 2024</p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Construction Progress"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-text">Business Plaza</h3>
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">40% Complete</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Commercial complex with office spaces and retail outlets. Structural work in progress.
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-primary h-2 rounded-full" style={{width: '40%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Expected completion: December 2024</p>
              </div>
            </div>
            
            <div className="card overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Construction Progress"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-text">Green Valley Villas</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Just Started</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Eco-friendly villa project with sustainable design features. Site preparation underway.
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-primary h-2 rounded-full" style={{width: '10%'}}></div>
                </div>
                <p className="text-sm text-gray-500">Expected completion: March 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Guide */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Estate Investment Guide
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Make informed investment decisions with our expert guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">High ROI Properties</h3>
              <p className="text-gray-300">
                Carefully selected properties with proven track records of excellent returns on investment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Locations</h3>
              <p className="text-gray-300">
                Strategic locations with growth potential, connectivity, and infrastructure development.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Investment</h3>
              <p className="text-gray-300">
                Legal compliance, clear documentation, and transparent processes for safe investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Perfect Property
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're looking for a dream home or a profitable investment, we're here to help you find the perfect property
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Schedule Site Visit
            </Link>
            <Link to="/services" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              Investment Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;