import { Link } from 'react-router-dom';
import InteriorHero from '../../components/services/Interior/InteriorHero';
import InteriorServiceOverview from '../../components/services/Interior/InteriorServiceOverview';
import ArchitectureTypes from "../../components/services/architecture/ArchitectureTypes"
import inte1 from "../../assets/services/interior/2-13.webp"
import inte2 from "../../assets/services/interior/2.png"
import inte3 from "../../assets/services/interior/3.webp"
import inte4 from "../../assets/services/interior/4.jpeg"
import InteDesignProcess from '../../components/services/Interior/InteDesignProcess';
import HomeCTA from "../../components/home/HomeCTA"

const Interior = () => {
  const interiorServices = [
    {
      title: 'Residential Interiors',
      description: 'Transform your home into a beautiful and functional living space.',
      image: inte1,
      features: [
        'Living Room Design',
        'Bedroom Styling',
        'Kitchen Planning',
        'Bathroom Design',
      ],
      color: 'from-[#E62F35] to-[#ff8a8a]', // red gradient
    },
    {
      title: 'Commercial Interiors',
      description: 'Professional interior solutions for offices and commercial spaces.',
      image: inte2,
      features: [
        'Office Design',
        'Retail Spaces',
        'Restaurant Interiors',
        'Hotel Design',
      ],
      color: 'from-[#64C0ED] to-[#a5d8f5]', // blue gradient
    },
    {
      title: 'Complete Makeovers',
      description: 'Full-scale interior renovation and redesign projects.',
      image: inte3,
      features: [
        'Space Planning',
        'Furniture Selection',
        'Color Schemes',
        'Lighting Design',
      ],
      color: 'from-[#68D391] to-[#9ae6b4]', // green gradient
    },
  ];

  return (
    <div className="pt-20">

      <InteriorHero />
      <InteriorServiceOverview />
      <ArchitectureTypes
        services={interiorServices}
        bgImage={inte4}
        sectionHeading="Interior Design Services"
        subHeading="Tailored interior solutions for residential and commercial spaces"
      />
      <InteDesignProcess />
   

    </div>
  );
};

export default Interior;