import React from 'react';
import { faithDeclarations } from './data';
import FaithCard from './FaithCard';

const StatementOfFaithSection = () => {
  return (
    <section id='statement-of-faith' className='mt-[157px] px-primary'>
      <h2 className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-[11px] font-secondary'>
        Statement of Faith
      </h2>
      <p className='text-center text-lg md:text-xl lg:text-2xl mb-[52px]'>
        How we see ourselves as believers of Christ Jesus
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] rounded-[10px]'>
        {faithDeclarations.map((item) => (
          <FaithCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default StatementOfFaithSection;
