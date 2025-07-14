import ResiHero from '../../components/properties/residential/ResiHero';
import ResiOverView from '../../components/properties/residential/ResiOverView';
import ResiProperties from '../../components/properties/residential/ResiProperties';
import AmenitiesSection from '../../components/properties/residential/AmenitiesSection';
import HomeCTA from "../../components/home/HomeCTA"
const Residential = () => {
  return (
    <div className="pt-20">
      <ResiHero />
      <ResiOverView />
      <ResiProperties />
      <AmenitiesSection />
      <HomeCTA />
    </div>
  );
};

export default Residential;