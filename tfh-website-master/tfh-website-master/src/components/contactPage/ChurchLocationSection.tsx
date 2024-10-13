import Button from '@/common/Button';
import Link from 'next/link';
import React from 'react';

const ChurchLocationSection = () => {
  return (
    <div className='mt-[85px] flex flex-col w-full items-center'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-3'>
        Find the closest centre to you
      </h2>
      <p className='text-lg lg:text-2xl text-center font-medium mb-[47px]'>
        Let’s help you find the worship atmosphere close to you.
      </p>
      <Link href='/church-locations'>
        <Button>Find closest branch</Button>
      </Link>
    </div>
  );
};

export default ChurchLocationSection;
