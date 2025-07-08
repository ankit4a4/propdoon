import { useState } from 'react';
import { Link } from 'react-router-dom';

const Updates = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'residential', name: 'Residential', count: 6 },
    { id: 'commercial', name: 'Commercial', count: 4 },
    { id: 'infrastructure', name: 'Infrastructure', count: 2 }
  ];

  const constructionUpdates = [
    {
      id: 1,
      title: 'Himalayan Heights Residential Complex',
      type: 'residential',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Dehradun Hills',
      progress: 85,
      status: 'On Track',
      startDate: 'January 2023',
      expectedCompletion: 'June 2024',
      totalUnits: 50,
      description: 'Luxury residential complex with modern amenities and hill views.',
      recentUpdates: [
        'Interior work completed in Phase 1 (25 units)',
        'Landscaping and garden development in progress',
        'Swimming pool construction 90% complete',
        'Electrical and plumbing work finalized'
      ],
      nextMilestones: [
        'Final inspections and approvals',
        'Handover of Phase 1 units',
        'Completion of common areas',
        'Final landscaping and finishing'
      ],
      images: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 2,
      title: 'Business Plaza Commercial Complex',
      type: 'commercial',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Business District',
      progress: 60,
      status: 'On Track',
      startDate: 'March 2023',
      expectedCompletion: 'December 2024',
      totalUnits: 30,
      description: 'Modern commercial complex with office spaces and retail outlets.',
      recentUpdates: [
        'Structural work completed for all floors',
        'Facade installation 70% complete',
        'MEP (Mechanical, Electrical, Plumbing) work in progress',
        'Elevator installation completed'
      ],
      nextMilestones: [
        'Interior fit-out for office spaces',
        'Retail area development',
        'Parking area completion',
        'Final safety and compliance checks'
      ],
      images: [
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 3,
      title: 'Green Valley Eco Villas',
      type: 'residential',
      image: 'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Green Valley',
      progress: 25,
      status: 'On Track',
      startDate: 'August 2023',
      expectedCompletion: 'March 2025',
      totalUnits: 25,
      description: 'Sustainable villa project with eco-friendly features and green technology.',
      recentUpdates: [
        'Site preparation and excavation completed',
        'Foundation work for 15 villas completed',
        'Solar panel installation framework ready',
        'Rainwater harvesting system design finalized'
      ],
      nextMilestones: [
        'Ground floor construction',
        'Installation of eco-friendly systems',
        'Landscaping and garden planning',
        'Infrastructure development'
      ],
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 4,
      title: 'Tech Hub Office Complex',
      type: 'commercial',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'IT Hub Area',
      progress: 40,
      status: 'On Track',
      startDate: 'May 2023',
      expectedCompletion: 'October 2024',
      totalUnits: 20,
      description: 'State-of-the-art office complex designed for technology companies.',
      recentUpdates: [
        'Structural work completed up to 6th floor',
        'High-speed internet infrastructure installation',
        'Smart building systems integration in progress',
        'Conference room layouts finalized'
      ],
      nextMilestones: [
        'Completion of remaining floors',
        'Interior design and fit-out',
        'Technology infrastructure testing',
        'Amenities area development'
      ],
      images: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 5,
      title: 'Riverside Apartments',
      type: 'residential',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Riverside Area',
      progress: 70,
      status: 'Ahead of Schedule',
      startDate: 'October 2022',
      expectedCompletion: 'April 2024',
      totalUnits: 80,
      description: 'Modern apartment complex with river views and premium amenities.',
      recentUpdates: [
        'All apartment units structurally complete',
        'Balcony railings and safety features installed',
        'Common area amenities 80% complete',
        'Parking area construction finished'
      ],
      nextMilestones: [
        'Final interior finishing',
        'Amenities testing and commissioning',
        'Landscaping completion',
        'Handover preparation'
      ],
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      id: 6,
      title: 'Highway Access Road',
      type: 'infrastructure',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Highway Corridor',
      progress: 90,
      status: 'Near Completion',
      startDate: 'June 2022',
      expectedCompletion: 'February 2024',
      totalUnits: 1,
      description: 'New access road connecting residential areas to the main highway.',
      recentUpdates: [
        'Road surface laying completed',
        'Street lighting installation 95% done',
        'Drainage system fully functional',
        'Traffic signage installation in progress'
      ],
      nextMilestones: [
        'Final road markings',
        'Traffic signal installation',
        'Safety barrier completion',
        'Official opening ceremony'
      ],
      images: [
        'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    }
  ];

  const filteredUpdates = activeFilter === 'all' 
    ? constructionUpdates 
    : constructionUpdates.filter(update => update.type === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'On Track':
        return 'bg-blue-100 text-blue-800';
      case 'Ahead of Schedule':
        return 'bg-green-100 text-green-800';
      case 'Delayed':
        return 'bg-red-100 text-red-800';
      case 'Near Completion':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
            backgroundImage: `url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Construction Updates</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay informed about the progress of our ongoing construction projects
          </p>
        </div>
      </section>

      {/* Updates Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Real-Time Project Updates
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe in complete transparency with our clients. Our construction 
                updates provide real-time information about project progress, milestones 
                achieved, and upcoming phases. Each project is monitored closely to ensure 
                timely delivery and quality standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From foundation laying to final handover, we document every significant 
                milestone and share regular updates with our stakeholders. Our project 
                management team ensures that all construction activities are on schedule 
                and meet our stringent quality requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">12</div>
                  <div className="text-gray-600 text-sm">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">95%</div>
                  <div className="text-gray-600 text-sm">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">500+</div>
                  <div className="text-gray-600 text-sm">Units Under Construction</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction Updates"
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

          {/* Construction Updates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredUpdates.map(update => (
              <div key={update.id} className="card overflow-hidden">
                <div className="relative">
                  <img
                    src={update.image}
                    alt={update.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {update.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(update.status)}`}>
                      {update.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text mb-2">
                    {update.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {update.location}
                  </p>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {update.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm font-bold text-primary">{update.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-primary h-3 rounded-full transition-all duration-300" 
                        style={{width: `${update.progress}%`}}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Started:</span>
                      <div className="text-gray-600">{update.startDate}</div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Completion:</span>
                      <div className="text-gray-600">{update.expectedCompletion}</div>
                    </div>
                  </div>
                  
                  {/* Recent Updates */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Recent Updates:</h4>
                    <div className="space-y-1">
                      {update.recentUpdates.slice(0, 2).map((updateItem, index) => (
                        <div key={index} className="flex items-start">
                          <svg className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 text-sm">{updateItem}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Progress Images */}
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Progress Photos:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {update.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Progress ${index + 1}`}
                          className="w-full h-20 object-cover rounded"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link to="/contact" className="btn-primary flex-1 text-center">
                      Get Updates
                    </Link>
                    <button className="btn-secondary flex-1">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Construction Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures quality construction and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Planning & Design</h3>
              <p className="text-gray-600 text-sm">
                Detailed project planning, architectural design, and regulatory approvals
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Foundation Work</h3>
              <p className="text-gray-600 text-sm">
                Site preparation, excavation, and foundation construction with quality checks
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Structure & MEP</h3>
              <p className="text-gray-600 text-sm">
                Structural construction and mechanical, electrical, plumbing installations
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                04
              </div>
              <h3 className="text-lg font-semibold text-text mb-3">Finishing & Handover</h3>
              <p className="text-gray-600 text-sm">
                Interior finishing, quality inspections, and final handover to clients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Quality Assurance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rigorous quality control measures at every stage of construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Regular Inspections</h3>
              <p className="text-gray-600">
                Daily quality checks and weekly progress reviews by certified engineers.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Material Testing</h3>
              <p className="text-gray-600">
                All construction materials undergo rigorous testing for quality and durability.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Documentation</h3>
              <p className="text-gray-600">
                Comprehensive documentation of all construction phases and quality checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated on Your Investment
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get regular updates on your property's construction progress and be the first to know about important milestones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Subscribe to Updates
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

export default Updates;