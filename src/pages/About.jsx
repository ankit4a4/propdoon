import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 20 years of experience in construction and real estate'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Architect',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning architect specializing in sustainable design'
    },
    {
      name: 'Amit Verma',
      role: 'Construction Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in project management and quality control'
    },
    {
      name: 'Sunita Gupta',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative designer with expertise in modern interiors'
    },
    {
      name: 'Vikram Singh',
      role: 'Real Estate Consultant',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specialist in property investment and market analysis'
    },
    {
      name: 'Anita Patel',
      role: 'Vastu Consultant',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Traditional Vastu expert with modern applications'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '50+', label: 'Expert Team' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Building excellence through innovation, integrity, and dedication
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Our Vision & Mission
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading construction and real estate company in North India, 
                    known for our innovative designs, quality construction, and exceptional 
                    customer service. We envision creating sustainable communities that 
                    enhance the quality of life for generations to come.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our mission is to deliver exceptional construction and real estate 
                    solutions that exceed our clients' expectations. We are committed to 
                    sustainable building practices, innovative design, and creating value 
                    for our stakeholders while maintaining the highest standards of 
                    quality and integrity.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:order-first">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our Vision"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="overview" className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Company Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded in 2008, PropDoon has grown from a small construction 
              company to a comprehensive real estate and construction solutions provider
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Company Overview"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">
                Excellence in Every Project
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  For over 15 years, we have been at the forefront of the construction 
                  and real estate industry in Dehradun and surrounding areas. Our journey 
                  began with a simple mission: to build quality homes and spaces that 
                  people love to live and work in.
                </p>
                <p>
                  Today, we offer a comprehensive range of services including residential 
                  and commercial construction, architectural design, interior design, 
                  real estate development, and traditional Vastu consultation. Our team 
                  of skilled professionals combines modern technology with traditional 
                  craftsmanship to deliver exceptional results.
                </p>
                <p>
                  We take pride in our commitment to sustainability, innovation, and 
                  customer satisfaction. Every project we undertake reflects our values 
                  of quality, integrity, and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our relationships with clients, 
              partners, and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every material, every process, and every 
                detail is carefully selected and executed to the highest standards.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honesty and transparency are at the core of our business. We build trust 
                through consistent, ethical practices and clear communication.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and innovative approaches to deliver better 
                results, improve efficiency, and create sustainable solutions.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Teamwork</h3>
              <p className="text-gray-600">
                Our success comes from the collaborative effort of our skilled team members, 
                each bringing their expertise to achieve common goals.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmental responsibility and sustainable practices 
                that benefit both our clients and the community.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises. Our clients can count on us to complete projects 
                on time, within budget, and to the agreed specifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our success is built on the expertise, dedication, and passion of our 
              professional team members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-text mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our expertise can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get in Touch
            </Link>
            <Link to="/services" className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;