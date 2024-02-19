import React from 'react';
import tele from '../../assets/partners/Tele.png';
import Uk from '../../assets/partners/Uk.png';
import Maha from '../../assets/partners/Maha.png';
import Jharkand from '../../assets/partners/Jharkand.png';
import ISRO from '../../assets/partners/ISRO.png';
import UP from '../../assets/partners/UP.png';

const OurPartners = () => {
  return (
    <div className="p-8 ml-72 mr-44">
      <h1 className="text-4xl font-bold mb-8">Our Partners</h1>
      <div className="bg-[#D9D9D9] font-bold font-inter text-xl p-4  rounded w-72 mb-24 flex items-center justify-center whitespace-nowrap">
    <p>Government Collaborations</p>
</div>

      <div className="grid grid-cols-4 ml-20  gap-12">
        <img className="w-48 h-auto" src={tele} alt="Partner 1" />
        <img className="w-48 h-auto" src={Uk} alt="Partner 2" />
        <img className="w-48 h-auto" src={Maha} alt="Partner 3" />
        <img className="w-48 h-auto" src={Jharkand} alt="Partner 4" />
        <img className="w-48 h-auto" src={ISRO} alt="Partner 5" />
        <img className="w-48 h-auto" src={UP} alt="Partner 6" />
      </div>
    </div>
  );
}

export default OurPartners;
