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
      content: "In the dynamic landscape of financial technology, we are revolutionizing traditional banking and finance models. Through the integration of cutting-edge technologies such as blockchain, artificial intelligence, and data analytics, we aim to enhance accessibility, security, and efficiency in financial transactions and services. From digital payments to personalized financial management solutions, we are shaping the future of finance.",
    },
    {
      title: "Smart Governance",
      value: "Smart Governance",
      content: "Empowering governments with intelligent solutions is at the core of our mission. By leveraging advanced technologies, including machine learning, big data analytics, and IoT, we are redefining governance practices. Our solutions streamline bureaucratic processes, improve decision-making, and foster greater citizen engagement, ultimately leading to more transparent, efficient, and responsive governance.",
    },
    {
      title: "Smart City Management",
      value: "Smart City Management ",
      content: " As urban populations continue to grow, the need for smarter, more sustainable cities becomes increasingly imperative. Through smart city management solutions, we are transforming urban environments into interconnected ecosystems. By integrating IoT sensors, data analytics, and predictive modeling, we optimize infrastructure, utilities, and services to enhance efficiency, sustainability, and quality of life for residents.",
    },
    {
      title: "Healthcare",
      value: "Healthcare ",
      content: " As urban populations continue to grow, the need for smarter, more sustainable cities becomes increasingly imperative. Through smart city management solutions, we are transforming urban environments into interconnected ecosystems. By integrating IoT sensors, data analytics, and predictive modeling, we optimize infrastructure, utilities, and services to enhance efficiency, sustainability, and quality of life for residents.",
    },
    {
      title: "Agronomic Intelligence",
      value: "Agronomic Intelligence",
      content: "Agriculture is the backbone of our society, and we are dedicated to advancing agricultural practices through the application of agronomic intelligence. By combining data analytics, satellite imagery, and IoT sensors, we provide farmers with valuable insights to optimize crop yield, conserve resources, and promote sustainability. From precision farming techniques to crop health monitoring, our solutions enable farmers to make informed decisions and maximize productivity.",
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
