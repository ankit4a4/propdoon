import { Link } from 'react-router-dom';
import HeroContraction from '../../components/services/contraction/HeroContraction';
import ConstructionOverview from '../../components/services/contraction/ConstructionOverview';
import ArchitectureTypes from "../../components/services/architecture/ArchitectureTypes"
import con1 from "../../assets/services/contraction/con1.jpg"
import con2 from "../../assets/services/contraction/con2.jpg"
import con3 from "../../assets/services/contraction/con3.jpg"
import bgHero from "../../assets/services/contraction/con4.jpg"
import ContractionProcess from '../../components/services/contraction/ContractionProcess';
import HomeCTA from "../../components/home/HomeCTA"
const Construction = () => {


  const constructionServices = [
    {
      title: 'Residential Construction',
      description: 'High-quality custom homes designed to suit your lifestyle, needs, and budget.',
      image: con1, // replace with your actual image import
      features: [
        'Custom House Builds',
        'Bungalows & Villas',
        'Extensions & Additions',
        'Turnkey Projects'
      ],
      color: 'from-[#E62F35] to-[#ff8a8a]',
    },
    {
      title: 'Commercial Projects',
      description: 'Durable and efficient commercial construction for business success and scalability.',
      image: con2, // replace with your actual image import
      features: [
        'Office Complexes',
        'Retail & Malls',
        'Industrial Sheds',
        'Hotels & Restaurants'
      ],
      color: 'from-[#64C0ED] to-[#a5d8f5]',
    },
    {
      title: 'Renovation & Remodeling',
      description: 'Upgrade existing structures with smart renovation and remodeling solutions.',
      image: con3, // replace with your actual image import
      features: [
        'Interior & Exterior Revamp',
        'Structural Modifications',
        'Space Optimization',
        'Modern Design Integration'
      ],
      color: 'from-[#68D391] to-[#9ae6b4]',
    }
  ];


  return (
    <div className="pt-20">
      <HeroContraction />
      <ConstructionOverview />
      <ArchitectureTypes
        services={constructionServices}
        bgImage={bgHero}
        sectionHeading="Construction Services"
        subHeading="Reliable and innovative construction solutions for residential, commercial, and structural framing projects."
      />
      <ContractionProcess />
      <HomeCTA />
     
    </div>
  );
};

export default Construction;