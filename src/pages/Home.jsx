import HeroHome from '../components/home/HeroHome';
import HomeService from '../components/home/HomeService';
import HomeProperty from '../components/home/HomeProperty';
import WayChooseUs from '../components/home/WayChooseUs';
import Testimonials from '../components/home/Testimonials';
import HomeBlog from '../components/home/HomeBlog';
import HomeCTA from '../components/home/HomeCTA';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
  return (
    < >
      <HeroHome />
      <AboutSection />
      <HomeService />
      <HomeProperty />
      <WayChooseUs />
      <Testimonials />
      <HomeBlog />
      <HomeCTA />
    </>
  );
};

export default Home;