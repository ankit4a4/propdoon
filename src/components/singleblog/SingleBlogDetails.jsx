import { useParams } from 'react-router-dom';
import img1 from "../../assets/home/blog1.jpg"
import img2 from "../../assets/home/blog2.png"
import img3 from "../../assets/home/blog3.webp"
import img4 from "../../assets/home/blog4.jpg"

export const blogsData = [
    {
        id: '1',
        title: 'Comparing investment potential in Indian vs US real estate markets',
        author: 'propdoon',
        category: 'Real Estate News',
        date: 'December 19, 2023',
        image: img1,
        content: [
            'Over the last several decades, real estate has been considered a very safe and stable option to park hard-earned savings. As a standard, across the world, real estate is always going to escalate in value, and over time, as the global economy continues to evolve, investors are increasingly exploring opportunities beyond their borders. Two prominent destinations that attract significant attention because of the rapid escalations in value across each country are the Indian and US real estate market ..',
            'As we look to evaluate the real estate investment opportunities in both markets, it is critical to start right at the top by trying to understand the economic dynamics of each country. The United States boasts a robust and diverse economy, supported by a stable political environment and a well-established legal system. The Indian economy, on the other hand, is marked by rapid growth and a large population, making it an emerging market with immense potential. However, it is also characterised by  ..',
            'Keeping the above facts in mind, the US real estate market has demonstrated consistent appreciation, particularly in major cities and desirable neighborhoods. The diverse geography of the US allows investors to choose from a wide range of markets, catering to various preferences and risk appetites across cities like New York, Los Angeles, and San Francisco with newer attractive markets like Dallas, Chicago, and Atlanta, among a host of others all making their presence felt when it comes to safe.',
            'It is important to remember the role that Government policies and Central Bank regulations play a pivotal role in shaping the investment landscape. In the US, property rights are well-protected, and the legal framework is conducive to foreign investment. Additionally, the US government provides various incentives for real estate investors, enhancing the overall investment climate. In India, navigating the regulatory environment can be complex, with bureaucratic procedures and sometimes ambiguous.',
            'Deciding between investing in either the Indian or US real estate markets ultimately depends on an investor’s risk tolerance, financial goals, and understanding of the unique dynamics of each market. The US offers stability, a mature market, and transparent legal systems, making it an attractive option for risk-averse investors. On the other hand, India presents exciting growth prospects, but the regulatory landscape and potential volatility require a more strategic and informed approach. For bo ..'
        ]
    },
    {
        id: '2',
        title: 'Understanding Circle Rates in Uttarakhand: A Comprehensive Guide',
        author: 'propdoon',
        category: 'Real Estate News',
        date: 'December 13, 2021',
        image: img2,
        content: [
            'Circle rates play a crucial role in real estate transactions, determining the minimum value at which a property can be registered during a sale. In Uttarakhand, the circle rates are set by the local authorities and are a key factor in calculating stamp duty and registration charges. Let’s delve into the details of circle rates in Uttarakhand and their impact on property transactions.',
            'Circle rates, also known as guidance values or ready reckoner rates, are the minimum rates set by the government for the sale or transfer of a property. These rates vary based on the locality, type of property, and other factors. The main objective is to prevent the undervaluation of properties during transactions and ensure fair revenue collection for the government.',
            'Local authorities, such as the sub-registrar’s office or the municipal corporation, typically publish circle rates for different localities. These rates can also be available online on the official government portal. Property buyers and sellers should refer to the latest circle rates applicable in their specific location.',
            'Understanding circle rates in Uttarakhand is crucial for anyone involved in property transactions. Whether you are a buyer, seller, or real estate investor, being aware of the circle rates applicable to your property can help you make informed decisions and avoid any complications during the transaction process. Stay updated with the latest circulars and announcements from the local authorities to ensure compliance with the prevailing circle rates in Uttarakhand.',
            'The circle rates in Dehradun, Uttarakhand, vary based on the locality. To find the current rates for specific areas, it is recommended to check the official government portal or consult with the local sub-registrar’s office.',
            'Circle rates in Uttarakhand are subject to periodic revisions based on market trends, economic conditions, and other factors. The frequency of revisions can vary, and it is advisable to stay updated with official announcements from the local authorities.',
            'Circle rates primarily affect stamp duty and registration charges during property transactions. While they are not directly linked to property taxes, they play a crucial role in determining the minimum transaction value for tax purposes.',
            'Generally, challenging circle rates is a complex process. However, property owners can approach the local authorities and provide evidence to support their claim if they believe the assigned circle rate is unjustifiably high.',
            'Stamp duty is typically calculated based on the higher of the property’s actual transaction value and its circle rate. The exact calculation may vary, and it is recommended to consult with a local legal professional or use online stamp duty calculators for accurate results.'
        ]
    },
    {
        id: '3',
        title: 'Uttarakhand Developers Conclave 2024',
        author: 'propdoon',
        category: 'Real Estate News',
        date: 'June 16, 2020',
        image: img3,
        content: [
            'During the occasion, Cabinet Minister Ganesh Joshi honored the developers present at the conclave. Speaking at the event, he remarked that Uttarakhand, renowned for its natural beauty, mountainous regions, and historical richness, is now entering a new era.',
            'He highlighted the crucial role of developers, stating that their involvement can be instrumental in the implementation of new initiatives, housing projects, and the development of secure residential areas. He mentioned collaboration with “Propound” as a platform to work together and advance towards new and sustainable solutions.',
            'Minister Joshi emphasized the need to ensure that the new projects strengthen the social and economic structure of the state, providing benefits to all residents. He stressed the importance of social responsibility, directing attention towards working on water conservation initiatives.',
            'On this occasion, Cabinet Minister Ganesh Joshi & Cabinet Minister Premchand Aggarwal , MLA, Rajpur- Khajan Das, Mahanagar Adhyaksh BJP Dehradun -Siddharth Agrawal and other dignitaries were also present.'
        ]
    },
    {
        id: '4',
        title: 'Unlocking Wealth: The Compelling Reasons to Invest in Real Estate',
        author: 'propdoon',
        category: 'Real Estate News',
        date: 'June 15, 2020',
        image: img4,
        content: [
            'In the ever-evolving landscape of investment opportunities, real estate continues to stand as a resilient and lucrative option for individuals seeking wealth creation and financial stability. The tangible nature of real estate, coupled with its potential for long-term growth, makes it a compelling asset class. In this blog, we delve into the key reasons why investing in real estate remains a wise and strategic choice.',
            'Real estate is a tangible, physical asset that holds intrinsic value. Unlike other investment options like stocks or bonds, you own a piece of land or property, which has inherent worth and utility. This tangibility provides a sense of security and stability, especially during economic fluctuations.',
            'One of the primary attractions of real estate investment is the potential for property value appreciation over time. Historically, real estate has demonstrated a tendency to appreciate, often outpacing inflation rates. This capital appreciation can significantly contribute to the growth of your investment portfolio.',
            'Investing in rental properties offers a consistent income stream through rental yields. Rental income provides a stable cash flow, and with proper management, the returns can serve as a reliable source of passive income. This predictable revenue stream can be instrumental in achieving financial goals and mitigating market volatility.',
            'Real estate serves as an effective diversification tool for investment portfolios. Diversifying across asset classes helps spread risk, and real estate, with its relatively low correlation to traditional financial markets, adds a layer of stability to your overall investment strategy.',
            'Real estate has historically proven to be an effective hedge against inflation. As the cost of living rises, so do property values and rental prices. Real assets like property tend to retain their value, making them a strategic choice to protect your wealth from the erosive effects of inflation.',
            'Real estate investment allows for the use of leverage, whereby you can finance a significant portion of the property’s value through a mortgage. This amplifies your potential returns, as the property’s appreciation benefits the entire value, not just the equity you initially invested.',
            'Governments often incentivize real estate investment through tax benefits. Deductions on mortgage interest, property taxes, and depreciation can significantly reduce your overall tax liability. These advantages contribute to the overall profitability of real estate investments.',
            'In conclusion, investing in real estate remains an attractive avenue for wealth creation and portfolio diversification. The combination of tangible assets, potential for appreciation, steady rental income, and tax advantages makes real estate a versatile and compelling investment choice. As with any investment, thorough research, strategic planning, and a long-term perspective are crucial for maximizing the benefits of real estate investment.'
        ]
    }
];


const SingleBlogDetails = () => {
    const { id } = useParams();
    const blog = blogsData.find((b) => b.id === id);

    if (!blog) {
        return <div className="text-center py-20 text-red-600 font-semibold text-xl">Blog not found.</div>;
    }

    return (
        <section className="section-padding bg-white text-gray-800">
            <div className="container-max">
                <div className="mb-10">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-[400px] object-contain rounded-lg "
                    />
                </div>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#DF8534] mb-4">
                        {blog.title}
                    </h1>
                    <p className="text-sm text-gray-500 mb-6">
                        By {blog.author} &bull; {blog.category} &bull; {blog.date}
                    </p>
                    <div className="space-y-6 leading-relaxed text-lg">
                        {blog.content.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleBlogDetails;
