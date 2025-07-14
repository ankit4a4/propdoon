import React from 'react'
import SingleBlogHero from '../components/singleblog/SingleBlogHero'
import SingleBlogDetails from '../components/singleblog/SingleBlogDetails'

const SingleBlog = () => {
    return (
        <div className='pt-20'>
            <SingleBlogHero />
            <SingleBlogDetails />
        </div>
    )
}

export default SingleBlog
