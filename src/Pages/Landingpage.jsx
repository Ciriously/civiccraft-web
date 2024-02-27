import React from 'react';
import HeroContent from '../Components/homepage/HeroContent';
import WorkingAreas from '../Components/homepage/WorkingAreas';
import Vision from '../Components/homepage/Vision';
import CaseStudy from '../Components/homepage/CaseStudy';
import Carrers from '../Components/homepage/Carrers';
import OurPartners from '../Components/homepage/Partners';
import Footer from '../shared/Footer';
import Latestupdate from '../Components/homepage/Latestupdate';
// import Tabs from '../Components/homepage/tabs';
import Approach from '../Components/homepage/Approach';




const LandingPage = () => {
  return (
    <div className="app ">
      <HeroContent />
      {/* <WorkingAreas /> */}
      <Vision />
      <Approach />
      {/* <Tabs /> */}
      <CaseStudy />
      <Carrers />
      <OurPartners />
      <Latestupdate />
      <Footer />
    </div>
  );
}

export default LandingPage;
