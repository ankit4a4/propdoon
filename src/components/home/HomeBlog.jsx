import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/home/blog1.jpg";
import img2 from "../../assets/home/blog2.png";
import img3 from "../../assets/home/blog3.webp";

const HomeBlog = () => {
  const featuredPosts = [
    {
      title: 'Comparing Investment Potential in Indian vs US Real Estate Markets',
      excerpt: 'Over the last several decades, real estate has been considered a very safe and stable option to park hard-earned savings...',
      date: 'December 19, 2023',
      image: img,
      category: 'Market Trends',
      readTime: '5 min read'
    },
    {
      title: 'Understanding Circle Rates in Uttarakhand: A Comprehensive Guide',
      excerpt: 'Circle rates play a crucial role in real estate transactions, determining the minimum value at which a property can be registered...',
      date: 'December 13, 2021',
      image: img2,
      category: 'Legal Guide',
      readTime: '4 min read'
    },
    {
      title: 'Uttarakhand Developers Conclave 2024: Cabinet Ministers Attend Dehradun Event',
      excerpt: 'Cabinet Minister Ganesh Joshi honored the developers present at the conclave. He remarked that Uttarakhand is now entering a new era...',
      date: 'June 16, 2020',
      image: img3,
      category: 'Events',
      readTime: '3 min read'
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#64C0ED] via-[#E62F35] to-[#64C0ED]"></div>
      <div className="absolute top-20 right-0 w-32 h-32 rounded-full bg-[#64C0ED]/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-40 h-40 rounded-full bg-[#E62F35]/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="inline-block px-4 py-2 bg-[#64C0ED]/10 text-[#64C0ED] font-medium rounded-full text-sm tracking-wider border border-[#64C0ED]/20">
              INSIGHTS & NEWS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest from <span className="text-[#E62F35]">Our Blog</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge insights and updates from the world of real estate investment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {featuredPosts.map((post, index) => (
            <div key={index} className="relative group">
              {/* Gradient glow effect removed shadow hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#64C0ED] to-[#E62F35] rounded-xl blur opacity-0"></div>

              <article className="relative h-full bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-500 flex flex-col border border-gray-100">
                <div className="relative overflow-hidden h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="inline-block bg-white/90 text-[#E62F35] text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                    {post.date}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-[#64C0ED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-5 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center text-[#E62F35] font-medium">
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#E62F35] text-white font-semibold text-lg rounded-lg transition-all duration-300"
          >
            <span className="flex items-center">
              View All Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>


  );
};

export default HomeBlog;