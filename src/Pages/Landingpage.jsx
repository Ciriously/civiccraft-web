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
  const tabs = [
    {
      title: "Fin-tech",
      value: "Fin-tech",
      content: "Empowering governments with intelligent solutions is at the core of our mission. By leveraging advanced technologies, including machine learning, big data analytics, and IoT, we are redefining governance practices. Our solutions streamline bureaucratic processes, improve decision-making, and foster greater citizen engagement, ultimately leading to more transparent, efficient, and responsive governance.",
    },
    {
      title: "Smart Governance",
      value: "Smart Governance",
      content: "Empowering governments with intelligent solutions is at the core of our mission. By leveraging advanced technologies, including machine learning, big data analytics, and IoT, we are redefining governance practices. Our solutions streamline bureaucratic processes, improve decision-making, and foster greater citizen engagement, ultimately leading to more transparent, efficient, and responsive governance.",
    },
    {
      title: "Smart City Management",
      value: "Smart City Management ",
      content: "Empowering governments with intelligent solutions is at the core of our mission. By leveraging advanced technologies, including machine learning, big data analytics, and IoT, we are redefining governance practices. Our solutions streamline bureaucratic processes, improve decision-making, and foster greater citizen engagement, ultimately leading to more transparent, efficient, and responsive governance.",
    },
    {
      title: "Healthcare",
      value: "Healthcare ",
      content: "Empowering governments with intelligent solutions is at the core of our mission. By leveraging advanced technologies, including machine learning, big data analytics, and IoT, we are redefining governance practices. Our solutions streamline bureaucratic processes, improve decision-making, and foster greater citizen engagement, ultimately leading to more transparent, efficient, and responsive governance.",
    },
    {
      title: "Agronomic Intelligence",
      value: "Agronomic Intelligence",
      content: "Empowering governments with intelligent solutions is at the core of our mission. By leveraging advanced technologies, including machine learning, big data analytics, and IoT, we are redefining governance practices. Our solutions streamline bureaucratic processes, improve decision-making, and foster greater citizen engagement, ultimately leading to more transparent, efficient, and responsive governance.",
    },
    {
      title: "Tourism",
      value: "Tourism",
      content: "Empowering governments with intelligent solutions is at the core of our mission. By leveraging advanced technologies, including machine learning, big data analytics, and IoT, we are redefining governance practices. Our solutions streamline bureaucratic processes, improve decision-making, and foster greater citizen engagement, ultimately leading to more transparent, efficient, and responsive governance.",
    }
  ];

  return (
    <div className="app ">
      <HeroContent />
      <WorkingAreas tabs={tabs} />
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
