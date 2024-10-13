import React from 'react';
import { pastorData } from './data';
import PastorCard from './PastorCard';

const PastorsSection = () => {
  return (
    <section id='pastors' className='px-primary py-[152px]'>
      <h2 className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-[52px] font-secondary'>
        Meet Our Pastors
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]'>
        {pastorData.map((data) => (
          <PastorCard key={data.name} data={data} />
        ))}
      </div>
    </section>
  );
};

export default PastorsSection;
