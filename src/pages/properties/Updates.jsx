import VillaHero from '../../components/properties/villa/VillaHero';
import VillaDetails from '../../components/properties/villa/Villadetails';
import VillaProperties from '../../components/properties/villa/VillaProperties';
import HomeCTA from "../../components/home/HomeCTA"
import VillaType from '../../components/properties/villa/VillaType';
const Updates = () => {

  return (
    <div className="pt-20">
      <VillaHero />
      <VillaDetails />
      <VillaProperties />
      <VillaType />
      <HomeCTA />

    </div>
  );
};

export default Updates;