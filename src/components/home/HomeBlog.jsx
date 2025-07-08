import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/home/blog1.jpg"
import img2 from "../../assets/home/blog2.png"
import img3 from "../../assets/home/blog3.webp"
import img4 from "../../assets/home/blog4.jpg"

const HomeBlog = () => {
  const blogPosts = [
    {
      title: 'Comparing Investment Potential in Indian vs US Real Estate Markets',
      excerpt: 'Over the last several decades, real estate has been considered a very safe and stable option to park hard-earned savings...',
      date: 'December 19, 2023',
      image: img,
    },
    {
      title: 'Understanding Circle Rates in Uttarakhand: A Comprehensive Guide',
      excerpt: 'Circle rates play a crucial role in real estate transactions, determining the minimum value at which a property can be registered during a sale...',
      date: 'December 13, 2021',
      image: img2,
    },
    {
      title: 'Uttarakhand Developers Conclave 2024: Cabinet Ministers Attend Dehradun Event',
      excerpt: 'Cabinet Minister Ganesh Joshi honored the developers present at the conclave. He remarked that Uttarakhand is now entering a new era...',
      date: 'June 16, 2020',
      image: img3,
    },
    {
      title: 'Unlocking Wealth: The Compelling Reasons to Invest in Real Estate',
      excerpt: 'Real estate continues to stand as a resilient and lucrative option for individuals seeking wealth creation and financial stability...',
      date: 'June 15, 2020',
      image: img4,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-[#FB8500] text-sm font-semibold tracking-wider uppercase mb-2">
            Insights & News
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Insights, updates, and stories from the world of real estate and investment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#FFF4E5] text-[#FB8500] text-xs font-medium px-3 py-1 rounded-full">
                    Real Estate
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <Link
                  // to="/blog"
                  to={"/#"}
                  className="inline-flex items-center text-[#FB8500] font-medium hover:text-[#D56F00] transition-colors mt-auto"
                >
                  Read More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            // to="/blog"
            to={"/#"}
            className="inline-flex items-center justify-center bg-[#FB8500] hover:bg-[#D56F00] text-white font-semibold text-lg px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;