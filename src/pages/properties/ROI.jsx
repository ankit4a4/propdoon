
import RoiHero from '../../components/properties/roi/RoiHero';
import RoiOverview from '../../components/properties/roi/RoiOverview';
import RoiProperty from '../../components/properties/roi/RoiProperty';
import RoiInvestmentProcess from '../../components/properties/roi/RoiInvestmentProcess';
import HomeCTA from "../../components/home/HomeCTA"

const ROI = () => {


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <RoiHero />
      <RoiOverview />
      <RoiProperty />
      <RoiInvestmentProcess />
      <HomeCTA />




    </div>
  );
};

export default ROI;