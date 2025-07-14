import BlogHero from '../components/blog/BlogHero';
import AllBlogs from '../components/blog/AllBlogs';
import HomeCTA from '../components/home/HomeCTA';

const Blog = () => {
  return (
    <div className="pt-20">
      <BlogHero />
      <AllBlogs />
      <HomeCTA />
    </div>
  );
};

export default Blog;