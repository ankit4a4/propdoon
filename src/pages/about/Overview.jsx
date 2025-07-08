import { Link } from 'react-router-dom';

const Overview = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🏗️' },
    { number: '15+', label: 'Years Experience', icon: '📅' },
    { number: '1000+', label: 'Happy Clients', icon: '😊' },
    { number: '50+', label: 'Expert Team', icon: '👥' }
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Started as a small construction company with a vision to build quality homes'
    },
    {
      year: '2012',
      title: 'First Major Project',
      description: 'Completed our first residential complex with 25 units'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Expanded services to include architecture and interior design'
    },
    {
      year: '2018',
      title: 'Commercial Ventures',
      description: 'Entered commercial real estate development'
    },
    {
      year: '2020',
      title: 'Sustainable Focus',
      description: 'Adopted green building practices and sustainable construction'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading construction and real estate company'
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
            backgroundImage: `url('https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Company Overview</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Building excellence for over 15 years with innovation and integrity
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2008, PropDoon began as a small construction company 
                with a simple yet powerful vision: to build quality homes and spaces 
                that people love to live and work in. What started as a local business 
                has grown into one of the most trusted names in construction and real 
                estate in the region.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the years, we have evolved from a traditional construction company 
                to a comprehensive real estate solutions provider. Our journey has been 
                marked by continuous learning, adaptation, and an unwavering commitment 
                to excellence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today, we offer a full spectrum of services including residential and 
                commercial construction, architectural design, interior design, real 
                estate development, and traditional Vastu consultation. Our integrated 
                approach ensures that every project benefits from our collective expertise 
                and experience.
              </p>
              <Link to="/contact" className="btn-primary">
                Work With Us
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Story"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}>
                  <div className={`w-full lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                  }`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-text mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your construction and real estate needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-text mb-3">Construction</h3>
              <p className="text-gray-600 text-sm mb-4">
                Quality construction services for residential and commercial projects
              </p>
              <Link to="/services/construction" className="text-primary font-medium hover:text-accent transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-text mb-3">Architecture</h3>
              <p className="text-gray-600 text-sm mb-4">
                Innovative architectural designs that blend form and function
              </p>
              <Link to="/services/architecture" className="text-primary font-medium hover:text-accent transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-text mb-3">Interior Design</h3>
              <p className="text-gray-600 text-sm mb-4">
                Beautiful interior spaces that reflect your style and personality
              </p>
              <Link to="/services/interior" className="text-primary font-medium hover:text-accent transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="card p-6 text-center">
              <div className="text-4xl mb-4">🧭</div>
              <h3 className="text-xl font-semibold text-text mb-3">Vastu Consultation</h3>
              <p className="text-gray-600 text-sm mb-4">
                Traditional Vastu principles for harmonious living spaces
              </p>
              <Link to="/services/vastu" className="text-primary font-medium hover:text-accent transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build with Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted us with their dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Project
            </Link>
            <Link to="/properties" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              View Our Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;