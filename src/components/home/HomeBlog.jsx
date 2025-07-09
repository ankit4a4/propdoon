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
    <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-6 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FB8500] via-[#FFB703] to-[#FB8500]"></div>
      <div className="absolute top-20 right-0 w-32 h-32 rounded-full bg-[#FFB703]/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-40 h-40 rounded-full bg-[#FB8500]/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="inline-block text-[#FB8500] text-sm font-semibold tracking-wider uppercase mb-3 px-4 py-1.5 rounded-full bg-[#FFF4E5]">
            Insights & News
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 mt-3">
            <span className="relative inline-block">
              <span className="relative z-10">Latest from Our Blog</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFB703]/30 -rotate-1 z-0"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge insights and updates from the world of real estate investment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {featuredPosts.map((post, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FB8500] to-[#FFB703] rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <article className="relative h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-gray-100">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-[#FB8500] text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#FB8500] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-5 flex-grow">{post.excerpt}</p>
                  <Link
                    to="#"
                    className="inline-flex items-center text-[#FB8500] font-medium hover:text-[#D56F00] transition-colors group/readmore"
                  >
                    <span className="relative">
                      Read More
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FB8500] group-hover/readmore:w-full transition-all duration-300"></span>
                    </span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/readmore:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#FB8500] to-[#FFB703] hover:from-[#D56F00] hover:to-[#E6A602] text-white font-semibold text-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group/button"
          >
            <span className="relative z-10">View All Articles</span>
            <svg className="w-5 h-5 ml-2 transition-transform group-hover/button:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;