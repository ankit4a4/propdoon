import HeroAbout from "../components/about/HeroAbout"
import AboutPropDoonSection from '../components/about/AboutPropDoonSection';
import WoWeAewAbout from '../components/about/WoWeAewAbout';
import WayChooseUs from '../components/home/WayChooseUs';
import HomeCTA from '../components/home/HomeCTA';
import Testimonials from '../components/home/Testimonials';

const About = () => {
  return (
    <>
      <HeroAbout />
      <AboutPropDoonSection />
      <WoWeAewAbout />
      <Testimonials />
      <WayChooseUs />
      {/* <TeamSection /> */}
      <HomeCTA />
    </>
  );
};

export default About;