import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts', count: 12 },
    { id: 'construction', name: 'Construction', count: 4 },
    { id: 'interior', name: 'Interior Design', count: 3 },
    { id: 'realestate', name: 'Real Estate', count: 3 },
    { id: 'vastu', name: 'Vastu Tips', count: 2 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Interior Design Trends for 2024',
      excerpt: 'Discover the latest interior design trends that will transform your living space into a modern sanctuary.',
      content: 'From sustainable materials to bold color palettes, interior design in 2024 is all about creating spaces that reflect personality while embracing environmental consciousness.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-03-15',
      author: 'Sunita Gupta',
      category: 'interior',
      categoryName: 'Interior Design',
      readTime: '5 min read',
      tags: ['Trends', 'Design', 'Modern', 'Tips']
    },
    {
      id: 2,
      title: 'Sustainable Construction Practices: Building for the Future',
      excerpt: 'Learn about eco-friendly building materials and sustainable construction methods that benefit both the environment and your wallet.',
      content: 'Sustainable construction is no longer just a trend—it\'s a necessity. From green building materials to energy-efficient designs, discover how modern construction practices are reshaping the industry.',
      image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-03-10',
      author: 'Amit Verma',
      category: 'construction',
      categoryName: 'Construction',
      readTime: '7 min read',
      tags: ['Sustainability', 'Green Building', 'Environment', 'Construction']
    },
    {
      id: 3,
      title: 'Real Estate Investment Guide: Making Smart Decisions',
      excerpt: 'Essential tips for making smart real estate investments in today\'s market. Understand market trends and investment strategies.',
      content: 'Real estate investment requires careful planning and market understanding. This comprehensive guide covers everything from location analysis to ROI calculations.',
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-03-05',
      author: 'Vikram Singh',
      category: 'realestate',
      categoryName: 'Real Estate',
      readTime: '8 min read',
      tags: ['Investment', 'Market', 'Tips', 'ROI']
    },
    {
      id: 4,
      title: 'Vastu Shastra: Ancient Wisdom for Modern Homes',
      excerpt: 'How to incorporate traditional Vastu principles into contemporary home design for harmony and prosperity.',
      content: 'Vastu Shastra offers timeless principles for creating harmonious living spaces. Learn how to apply these ancient guidelines to modern architecture.',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-28',
      author: 'Anita Patel',
      category: 'vastu',
      categoryName: 'Vastu Tips',
      readTime: '6 min read',
      tags: ['Vastu', 'Traditional', 'Harmony', 'Design']
    },
    {
      id: 5,
      title: 'Modern Construction Techniques: Building Better and Faster',
      excerpt: 'Explore innovative construction methods that are revolutionizing the building industry with efficiency and quality.',
      content: 'From 3D printing to modular construction, discover how modern techniques are making buildings stronger, faster, and more affordable.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-20',
      author: 'Rajesh Kumar',
      category: 'construction',
      categoryName: 'Construction',
      readTime: '9 min read',
      tags: ['Innovation', 'Technology', 'Efficiency', 'Modern']
    },
    {
      id: 6,
      title: 'Small Space, Big Impact: Interior Design Tips',
      excerpt: 'Maximize your small living spaces with clever design solutions and space-saving techniques.',
      content: 'Living in a small space doesn\'t mean compromising on style. Learn how to create beautiful, functional interiors in compact areas.',
      image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-15',
      author: 'Sunita Gupta',
      category: 'interior',
      categoryName: 'Interior Design',
      readTime: '6 min read',
      tags: ['Small Space', 'Tips', 'Maximization', 'Design']
    },
    {
      id: 7,
      title: 'The Rise of Smart Homes: Technology Meets Comfort',
      excerpt: 'Discover how smart home technology is transforming the way we live, work, and interact with our living spaces.',
      content: 'Smart homes are no longer a luxury but a practical solution for modern living. Explore the latest technologies and their benefits.',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-10',
      author: 'Priya Sharma',
      category: 'realestate',
      categoryName: 'Real Estate',
      readTime: '7 min read',
      tags: ['Smart Homes', 'Technology', 'Automation', 'Innovation']
    },
    {
      id: 8,
      title: 'Choosing the Right Colors: Psychology of Interior Design',
      excerpt: 'Understanding how colors affect mood and behavior can help you create the perfect atmosphere in your home.',
      content: 'Color psychology plays a crucial role in interior design. Learn how different colors can influence emotions and create desired atmospheres.',
      image: 'https://images.pexels.com/photos/1571451/pexels-photo-1571451.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-02-05',
      author: 'Sunita Gupta',
      category: 'interior',
      categoryName: 'Interior Design',
      readTime: '5 min read',
      tags: ['Colors', 'Psychology', 'Mood', 'Design']
    },
    {
      id: 9,
      title: 'Commercial Real Estate: Opportunities and Challenges',
      excerpt: 'Navigate the commercial real estate market with insights into current opportunities and potential challenges.',
      content: 'Commercial real estate offers unique investment opportunities but also comes with specific challenges. Get expert insights on market dynamics.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-30',
      author: 'Vikram Singh',
      category: 'realestate',
      categoryName: 'Real Estate',
      readTime: '8 min read',
      tags: ['Commercial', 'Investment', 'Market', 'Analysis']
    },
    {
      id: 10,
      title: 'Vastu for Office Spaces: Enhancing Productivity',
      excerpt: 'Learn how Vastu principles can be applied to office spaces to improve productivity and create positive work environments.',
      content: 'Applying Vastu principles to office design can significantly impact productivity and employee well-being. Discover practical tips for workspace harmony.',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-25',
      author: 'Anita Patel',
      category: 'vastu',
      categoryName: 'Vastu Tips',
      readTime: '6 min read',
      tags: ['Office', 'Productivity', 'Workspace', 'Harmony']
    },
    {
      id: 11,
      title: 'Quality Control in Construction: Ensuring Excellence',
      excerpt: 'Understand the importance of quality control in construction projects and learn about best practices for maintaining standards.',
      content: 'Quality control is essential for successful construction projects. Learn about inspection processes, standards, and best practices.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-20',
      author: 'Amit Verma',
      category: 'construction',
      categoryName: 'Construction',
      readTime: '7 min read',
      tags: ['Quality', 'Standards', 'Inspection', 'Excellence']
    },
    {
      id: 12,
      title: 'Budget-Friendly Home Renovation Ideas',
      excerpt: 'Transform your home without breaking the bank with these creative and affordable renovation ideas.',
      content: 'Home renovation doesn\'t have to be expensive. Discover creative solutions and budget-friendly ideas that deliver maximum impact.',
      image: 'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      author: 'Rajesh Kumar',
      category: 'construction',
      categoryName: 'Construction',
      readTime: '6 min read',
      tags: ['Budget', 'Renovation', 'DIY', 'Affordable']
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=1600')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights, tips, and updates from the world of construction and real estate
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center card p-8">
                <div>
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {filteredPosts[0].categoryName}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {formatDate(filteredPosts[0].date)}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {filteredPosts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500">By {filteredPosts[0].author}</span>
                    </div>
                    <Link to="/contact" className="btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map(post => (
              <article key={post.id} className="card overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary text-white px-2 py-1 rounded text-sm">
                      {post.categoryName}
                    </span>
                    <span className="text-xs text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{formatDate(post.date)}</span>
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="text-primary font-medium hover:text-accent transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-alternate">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights, tips, and updates from the construction and real estate industry
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">
              Popular Topics
            </h2>
            <p className="text-lg text-gray-600">
              Explore our most popular topics and trending discussions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="text-lg font-semibold text-text mb-2">Construction Tips</h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional advice and best practices for construction projects
              </p>
              <span className="text-primary font-medium">4 Articles</span>
            </div>
            
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-text mb-2">Interior Design</h3>
              <p className="text-gray-600 text-sm mb-4">
                Creative ideas and trends for beautiful interior spaces
              </p>
              <span className="text-primary font-medium">3 Articles</span>
            </div>
            
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-semibold text-text mb-2">Investment Guide</h3>
              <p className="text-gray-600 text-sm mb-4">
                Smart strategies for real estate investment and ROI
              </p>
              <span className="text-primary font-medium">3 Articles</span>
            </div>
            
            <div className="card p-6 text-center">
              <div className="text-3xl mb-4">🧭</div>
              <h3 className="text-lg font-semibold text-text mb-2">Vastu Tips</h3>
              <p className="text-gray-600 text-sm mb-4">
                Traditional wisdom for harmonious living spaces
              </p>
              <span className="text-primary font-medium">2 Articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Ready to turn your ideas into reality? Let's discuss your project and explore how we can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Project
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

export default Blog;