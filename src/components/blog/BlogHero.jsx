import hero from "../../assets/blog/hero.jpeg"

const BlogHero = () => {

  
  return (
    <>
      <section className="relative h-96 flex items-center justify-center">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{
            backgroundImage: `url('${hero}')`
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Insights, tips, and updates from the world of construction and real estate
          </p>
        </div>
      </section>
    </>
  );
};

export default BlogHero;
