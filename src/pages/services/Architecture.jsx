import ArchiHero from '../../components/services/architecture/ArchiHero';
import ArchiServiceOverview from '../../components/services/architecture/ArchiServiceOverview';
import ArchitectureTypes from '../../components/services/architecture/ArchitectureTypes';
import DesignProcess from '../../components/services/architecture/DesignProcess';
import HomeCTA from "../../components/home/HomeCTA"
import bgHero from '../../assets/services/archi/archi4.jpg';
import img1 from '../../assets/services/archi/archi1.jpg';
import img2 from '../../assets/services/archi/archi2.jpg';
import img3 from '../../assets/services/archi/archi3.jpg';

const Architecture = () => {

  const architectureServices = [
    {
      title: 'Residential Architecture',
      description: 'Custom home designs that reflect your lifestyle and preferences.',
      image: img1,
      features: ['Custom Home Design', 'Villa Architecture', 'Apartment Planning', 'Renovation Design'],
      color: 'from-[#E62F35] to-[#ff8a8a]',
    },
    {
      title: 'Commercial Architecture',
      description: 'Functional and aesthetic designs for business and commercial spaces.',
      image: img2,
      features: ['Office Buildings', 'Retail Spaces', 'Hotels & Restaurants', 'Industrial Design'],
      color: 'from-[#64C0ED] to-[#a5d8f5]',
    },
    {
      title: 'Sustainable Design',
      description: 'Eco‑friendly architectural solutions for a sustainable future.',
      image: img3,
      features: ['Green Building Design', 'Energy Efficiency', 'Natural Lighting', 'Sustainable Materials'],
      color: 'from-[#68D391] to-[#9ae6b4]',
    },
  ];

  return (
    <div className="pt-20">
      <ArchiHero />
      <ArchiServiceOverview />
      <ArchitectureTypes
        services={architectureServices}
        bgImage={bgHero}
        sectionHeading="Architectural Services"
        subHeading="Comprehensive solutions for residential, commercial, and sustainable projects"
      />
      <DesignProcess />
      <HomeCTA />






    </div>
  );
};

export default Architecture;