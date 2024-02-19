import React from 'react';
import arrow from '../../assets/arrowupright.svg';

const Vision = () => {
  return (
    <div className="container mx-auto mt-8 px-4 py-8">
      <h1 className="text-4xl font-inter font-bold">Vision</h1>
      <h2 className="text-xl font-medium font-inter mt-10 text-[#40393B] mb-16">Systems that are sustainable and scalable can transform the lives of billions of people. We 
believe that using AI to solve problems at the bottom of the pyramid can lead to a better, more 
equitable world for all.</h2>
      <p className="text-[#40393B] w-126  font-inter text-lg font-bold mt-6">“We are in an age where efforts to achieve the UN Sustainable Development Goals are accompanied by a revolutionary explosion of digitally available data and the penetration of internet-enabled smartphones into previously inaccessible rural locales. AI technology is the natural tool for leveraging this vast scaleup in the quantity and breadth of data into actionable machine learning models that direct on-the-ground interventions for underserved populations. “It is expected that while we are in the midst of this accelerated growth, data sources will be unstable, incomplete, and erroneous, presenting a key challenge in developing AI models. At the other end of the tech pipeline, AI solutions should be designed to facilitate delivery to the last mile user without significantly perturbing existing public systems.”</p>
      <p className="text-black font-bold mt-8">– Chinmay Awade, Chief Enginer, AI/ML</p>

      <div className="flex mt-16">
        <div className="w-1/2 pr-8">
          {/* <h1 className="text-4xl font-inter font-bold">Our Approach</h1> */}
          <p className="text-xl font-medium font-inter mt-10 text-[#40393B] mb-16">At Civiccraft, we address pressing societal issues where AI presents transformative possibilities. We integrate rigorous scientific inquiry with empathetic collaboration, ensuring that the voices and needs of the communities we serve guide our initiatives toward meaningful impact..</p>
          <p className="text-xl font-medium font-inter mt-10 text-[#000] mb-16">We are currently building AI-based solutions in the agriculture and health domains, such as pest management for cotton farms, maternal, newborn and child health and tuberculosis.</p>
        <button className="bg-gray-300 text-black text-lg font-bold py-4 px-6 rounded-3xl mt-8 flex items-center">
            Our Approach
            <img className="ml-3 w-4 h-5" src={arrow} alt="Arrow" />
        </button>
        </div>
        <div className="w-1/2">
  <img className="w-full h-auto rounded-full" src="https://images.unsplash.com/photo-1569939012617-bd8f156b934a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Our Approach" />
</div>

      </div>
    </div>
  );
}

export default Vision;
