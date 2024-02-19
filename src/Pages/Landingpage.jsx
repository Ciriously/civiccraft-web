import React from 'react';
import HeroContent from '../Components/homepage/HeroContent';
import WorkingAreas from '../Components/homepage/WorkingAreas';
import Vision from '../Components/homepage/Vision';
import CaseStudy from '../Components/homepage/CaseStudy';

const LandingPage = () => {
  return (
    <div className="app">
        <HeroContent />
        <WorkingAreas />
        <Vision />
        < CaseStudy />

    </div>
  );
}

export default LandingPage;
