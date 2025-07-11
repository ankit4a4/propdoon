import CompanyHero from '../../components/about/companyoverview/CompanyHero';
import OurStory from '../../components/about/companyoverview/OurStory';
import OurAchievements from '../../components/about/companyoverview/OurAchievements';
import Timeline from '../../components/about/companyoverview/Timeline';
import HomeService from '../../components/home/HomeService';
import HomeCTA from '../../components/home/HomeCTA';

const Overview = () => {
  return (
    <div className="pt-20">
      <CompanyHero />
      <OurStory />
      <OurAchievements />
      <Timeline />
      <HomeService />
      <HomeCTA />
    </div>
  );
};

export default Overview;