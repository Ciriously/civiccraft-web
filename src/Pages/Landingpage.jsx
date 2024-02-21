import React from 'react';
import HeroContent from '../Components/homepage/HeroContent';
import WorkingAreas from '../Components/homepage/WorkingAreas';
import Vision from '../Components/homepage/Vision';
import CaseStudy from '../Components/homepage/CaseStudy';
import Carrers from '../Components/homepage/Carrers';
import OurPartners from '../Components/homepage/Partners';
import Footer from '../elements/Footer';
const LandingPage = () => {
  return (
    <div className="app ">
      <HeroContent />
      <WorkingAreas />
      <Vision />
      <CaseStudy />
      <Carrers />
      <OurPartners />
      <Footer />
    </div>
  );
}

export default LandingPage;
