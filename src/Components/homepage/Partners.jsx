import React from 'react';
import tele from '../../assets/partners/Tele.png';
import Uk from '../../assets/partners/Uk.png';
import Maha from '../../assets/partners/Maha.png';
import Jharkand from '../../assets/partners/Jharkand.png';
import ISRO from '../../assets/partners/ISRO.png';
import UP from '../../assets/partners/UP.png';
import BG from '../../assets/partners/bg.jpg';

const OurPartners = () => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${BG})` }}>
      <div className="p-8 mx-auto max-w-7xl">
        <div className="text-left mb-8">
          <h2 className="text-5xl mt-20 font-gordita-bold text-white">Our Partners</h2>
          <p className="text-xl mt-4 font-gordita-medium text-gray-100">Collaborating for a better future</p>
          <p className="mt-4 font-gordita-regular text-gray-300">We collaborate with diverse organizations and governments to amplify our impact,
            combine expertise, and drive positive change. Explore our partnerships and see how,
            together, we make a difference.</p>
        </div>

        <div className="grid mb-20 grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <img className="w-44 h-auto" src={Maha} alt="Partner 3" />
          <img className="w-44 h-auto" src={UP} alt="Partner 6" />
          <img className="w-44 h-auto" src={ISRO} alt="Partner 5" />
          <img className="w-44 h-auto" src={Uk} alt="Partner 2" />
          <img className="w-44 h-auto" src={Jharkand} alt="Partner 4" />
          <img className="w-44 h-auto" src={tele} alt="Partner 1" />
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
