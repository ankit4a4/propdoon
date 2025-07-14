import ComHero from '../../components/properties/commercial/ComHero';
import ComDetails from '../../components/properties/commercial/ComDetails';
import ComProperties from '../../components/properties/commercial/ComProperties';
import ComType from '../../components/properties/commercial/ComType';
import HomeCTA from "../../components/home/HomeCTA"
const Commercial = () => {

  return (
    <div className="pt-20">
      <ComHero />
      <ComDetails />
      <ComProperties />
      <ComType />
      <HomeCTA />

    </div>
  );
};

export default Commercial;