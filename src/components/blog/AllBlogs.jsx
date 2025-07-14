import React from 'react';
import { FaRegNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../assets/home/blog1.jpg';
import img2 from '../../assets/home/blog2.png';
import img3 from '../../assets/home/blog3.webp';
import img4 from '../../assets/home/blog4.jpg';

const AllBlogs = () => {
    const blogs = [
        {
            id: 1,
            title: "Comparing investment potential in Indian vs US real estate markets",
            author: "propdoon",
            date: "December 19, 2023",
            category: "Real Estate News",
            excerpt: "Over the last several decades, real estate has been considered a very safe and stable option to park hard-earned savings. Investors are increasingly exploring opportunities beyond their borders...",
            image: img1,
        },
        {
            id: 2,
            title: "Understanding Circle Rates in Uttarakhand: A Comprehensive Guide",
            author: "propdoon",
            date: "December 13, 2021",
            category: "Real Estate News",
            excerpt: "Circle rates play a crucial role in real estate transactions, determining the minimum value at which a property can be registered. Let’s delve into the circle rates in Uttarakhand...",
            image: img2,
        },
        {
            id: 3,
            title: "Uttarakhand Developers Conclave 2024",
            author: "propdoon",
            date: "June 16, 2020",
            category: "Real Estate News",
            excerpt: "Cabinet Minister Ganesh Joshi honored developers present at the conclave, marking Uttarakhand's entry into a new era of development and opportunity.",
            image: img3,
        },
        {
            id: 4,
            title: "Unlocking Wealth: The Compelling Reasons to Invest in Real Estate",
            author: "propdoon",
            date: "June 15, 2020",
            category: "Real Estate News",
            excerpt: "In the ever-evolving landscape of investment, real estate continues to stand as a resilient and lucrative option. We explore the key reasons why...",
            image: img4,
        }
    ];

    return (
        <>
            {blogs.map((blog, index) => {
                const isImageBg = index % 2 !== 0;

                return (
                    <section
                        key={blog.id}
                        className={`relative section-padding ${isImageBg ? 'text-white' : 'bg-white text-gray-900'}`}
                    >
                        {isImageBg && (
                            <>
                                <div
                                    className="absolute inset-0 bg-cover bg-center z-0"
                                    style={{ backgroundImage: `url('${blog.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/80 z-0"></div>
                            </>
                        )}

                        <div className="container-max relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                <div className={isImageBg ? 'order-2' : 'order-1'}>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className={`rounded-lg shadow-xl ${isImageBg ? 'hidden lg:block' : ''}`}
                                    />
                                </div>
                                <div className={isImageBg ? 'order-1' : 'order-2'}>
                                    <div className="flex items-center mb-4">
                                        <FaRegNewspaper className="text-4xl mr-3" style={{ color: '#64C0ED' }} />
                                        <h2 className="text-2xl md:text-3xl font-bold">{blog.title}</h2>
                                    </div>
                                    <p className={`mb-4 text-sm ${isImageBg ? 'text-gray-300' : 'text-gray-500'}`}>
                                        By {blog.author} • {blog.category} • {blog.date}
                                    </p>
                                    <p className={`${isImageBg ? 'text-gray-100' : 'text-gray-700'} mb-6`}>{blog.excerpt}</p>
                                    <Link
                                        to={`/singleblog/${blog.id}`}
                                        className="inline-block bg-[#E62F35] text-white px-6 py-2 rounded-full hover:bg-[#c92b2f] transition"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}
        </>
    );
};

export default AllBlogs;
