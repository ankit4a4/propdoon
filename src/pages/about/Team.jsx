import { Link } from 'react-router-dom';

const Team = () => {
  const leadership = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 20 years of experience in construction and real estate, Rajesh founded PropDoon with a vision to create exceptional living spaces.',
      education: 'B.Tech Civil Engineering, IIT Delhi',
      experience: '20+ years',
      specialization: 'Project Management, Business Strategy'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Architect',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning architect specializing in sustainable design and innovative architectural solutions for modern living.',
      education: 'M.Arch, School of Planning and Architecture',
      experience: '15+ years',
      specialization: 'Sustainable Design, Modern Architecture'
    },
    {
      name: 'Amit Verma',
      role: 'Construction Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expert in project management and quality control with a track record of delivering projects on time and within budget.',
      education: 'B.E. Civil Engineering, NIT Kurukshetra',
      experience: '18+ years',
      specialization: 'Quality Control, Project Execution'
    }
  ];

  const team = [
    {
      name: 'Sunita Gupta',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Design',
      experience: '12+ years'
    },
    {
      name: 'Vikram Singh',
      role: 'Real Estate Consultant',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Sales',
      experience: '10+ years'
    },
    {
      name: 'Anita Patel',
      role: 'Vastu Consultant',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Consultation',
      experience: '15+ years'
    },
    {
      name: 'Rohit Sharma',
      role: 'Site Engineer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Engineering',
      experience: '8+ years'
    },
    {
      name: 'Kavita Joshi',
      role: 'Finance Manager',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Finance',
      experience: '14+ years'
    },
    {
      name: 'Deepak Rana',
      role: 'Marketing Head',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      department: 'Marketing',
      experience: '11+ years'
    }
  ];

  const departments = [
    {
      name: 'Construction',
      icon: '🏗️',
      count: 15,
      description: 'Skilled engineers and construction professionals'
    },
    {
      name: 'Design',
      icon: '🎨',
      count: 8,
      description: 'Creative architects and interior designers'
    },
    {
      name: 'Sales & Marketing',
      icon: '📈',
      count: 12,
      description: 'Dedicated sales and marketing professionals'
    },
    {
      name: 'Administration',
      icon: '💼',
      count: 10,
      description: 'Support staff ensuring smooth operations'
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
            backgroundImage: `url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Meet the passionate professionals who bring your dreams to life
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced leaders guiding our vision and ensuring excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="card overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {leader.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 w-24">Education:</span>
                      <span className="text-gray-600">{leader.education}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 w-24">Experience:</span>
                      <span className="text-gray-600">{leader.experience}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="font-medium text-gray-700 w-24">Focus:</span>
                      <span className="text-gray-600">{leader.specialization}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working together to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-text mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {member.role}
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {member.department}
                  </span>
                  <span>{member.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Departments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized teams working in harmony to deliver comprehensive solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  {dept.name}
                </h3>
                <div className="text-2xl font-bold text-primary mb-3">
                  {dept.count}+ Members
                </div>
                <p className="text-gray-600 text-sm">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Culture
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Building a workplace where talent thrives and innovation flourishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of teamwork and open communication to achieve extraordinary results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">
                We encourage creative thinking and embrace new technologies to stay ahead of the curve.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth</h3>
              <p className="text-gray-300">
                We invest in our team's professional development and provide opportunities for career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-accent text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be part of a dynamic team that's shaping the future of construction and real estate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              View Careers
            </Link>
            <Link to="/contact" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              Contact HR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;