import HeroProperties from "../components/properties/HeroProperties";
import PropertiesDetails from "../components/properties/PropertiesDetails";
import HomeCTA from "../components/home/HomeCTA"
import PropertyCategories from "../components/properties/PropertyCategories";

const Properties = () => {


  return (
    <div className="pt-20">
      <HeroProperties />
      <PropertyCategories />
      <PropertiesDetails />
      <HomeCTA />
    </div>
  );
};

export default Properties;