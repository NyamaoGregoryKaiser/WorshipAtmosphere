import React from 'react';
import { PastorType } from './data';
import Image from 'next/image';

const PastorCard = ({ data }: { data: PastorType }) => {
  return (
    <div className='h-[450px] w-full rounded-[10px] relative group'>
      {/* Gradient */}
      <div
        className='invisible absolute top-0 left-0 right-0 bottom-0 rounded-[10px] z-10 duration-500 group-hover:visible'
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 48.22%, rgba(0, 0, 0, 0.80) 74.89%)',
        }}
      />

      {/* Image */}
      <div className='absolute top-0 left-0 right-0 bottom-0 rounded-[10px]'>
        <Image
          src={data.image}
          alt='Pastor'
          className='w-full h-full object-cover rounded-[10px]'
        />
      </div>

      {/* Info */}
      <div className='invisible group-hover:visible flex flex-col absolute top-0 left-0 right-0 bottom-0 rounded-[10px] gap-2px justify-end px-[33px] pb-5 duration-500 z-20'>
        <p className='text-white uppercase font-secondary text-2xl font-semibold'>
          {data.name}
        </p>
        <p className='italic text-secondary '>{data.title}</p>
      </div>
    </div>
  );
};

export default PastorCard;
