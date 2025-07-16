import { Link } from 'react-router-dom';
import VastuHero from '../../components/services/Vastu/VastuHero';
import VastServiceOverview from '../../components/services/Vastu/VastServiceOverview';
import ArchitectureTypes from "../../components/services/architecture/ArchitectureTypes"
import vastu1 from "../../assets/services/vastu/1.jpeg"
import vastu2 from "../../assets/services/vastu/2.jpeg"
import vastu3 from "../../assets/services/vastu/img3.jpg"
import vastu4 from "../../assets/services/vastu/img4.jpeg"
import HomeCTA from '../../components/home/HomeCTA';
import VasstuProcess from '../../components/services/Vastu/VasstuProcess';

const Vastu = () => {
  const vastuServices = [
    {
      title: 'Residential Vastu',
      description: 'Harmonious home design following traditional Vastu principles.',
      image: vastu1,
      features: [
        'Home Layout Planning',
        'Room Positioning',
        'Entrance Direction',
        'Garden & Landscaping',
      ],
      color: 'from-[#E62F35] to-[#ff8a8a]', // red gradient
    },
    {
      title: 'Commercial Vastu',
      description: 'Vastu consultation for offices, shops, and business establishments.',
      image: vastu2,
      features: [
        'Office Layout',
        'Cash Counter Position',
        'Meeting Room Planning',
        'Employee Seating',
      ],
      color: 'from-[#64C0ED] to-[#a5d8f5]', // blue gradient
    },
    {
      title: 'Vastu Remedies',
      description: 'Corrective solutions for existing properties with Vastu defects.',
      image: vastu3,
      features: [
        'Defect Analysis',
        'Remedial Solutions',
        'Crystal Placement',
        'Color Corrections',
      ],
      color: 'from-[#E62F35] to-[#ff8a8a]',
    },
  ];

  return (
    <div className="pt-20">
      <VastuHero />
      <VastServiceOverview />
      <ArchitectureTypes
        services={vastuServices}
        bgImage={vastu4}
        sectionHeading="Vastu Consultation Services"
        subHeading="Traditional wisdom for modern spaces — aligning energy and architecture"
      />
         <VasstuProcess />
         <HomeCTA />
      
    </div>
  );
};

export default Vastu;