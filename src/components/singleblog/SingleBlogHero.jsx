import React from 'react';
import img from "../../assets/services/serviceHero.webp";
import { useParams } from 'react-router-dom';
import img1 from "../../assets/home/blog1.jpg"
import img2 from "../../assets/home/blog2.png"
import img3 from "../../assets/home/blog3.webp"
import img4 from "../../assets/home/blog4.jpg"

const SingleBlogHero = () => {
    const { id } = useParams();

    const blogdata = [
        {
            id: 1,
            title: "Comparing investment potential in Indian vs US real estate markets",
            img : img1
        },
        {
            id: 2,
            title: "Understanding Circle Rates in Uttarakhand: A Comprehensive Guide",
            img : img2
        },
        {
            id: 3,
            title: "Uttarakhand Developers Conclave 2024",
            img : img3
        },
        {
            id: 4,
            title: "Unlocking Wealth: The Compelling Reasons to Invest in Real Estate",
            img : img4
        },
    ];

    const currentBlog = blogdata.find((b) => b.id === Number(id));

    if (!currentBlog) {
        return (
            <div className="text-center py-20 text-red-600 font-semibold">
                Blog not found!
            </div>
        );
    }

    return (
        <section className="relative h-96 flex items-center justify-center">
            {/* Dark transparent overlay */}
            <div className="absolute inset-0 bg-black/85 z-0"></div>

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-[-1]"
                style={{ backgroundImage: `url('${currentBlog.img}')` }}
            ></div>

            {/* Text content */}
            <div className="relative z-10 text-center text-white px-4">
                <p className="text-3xl max-w-2xl mx-auto">
                    {currentBlog.title}
                </p>
            </div>
        </section>
    );
};

export default SingleBlogHero;
