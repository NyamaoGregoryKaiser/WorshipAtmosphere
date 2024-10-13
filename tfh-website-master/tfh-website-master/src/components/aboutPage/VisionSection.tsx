import React from 'react';
import VisionImage from '@/assets/images/about/vision.webp';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <section id='vision' className='px-primary mt-[118px]'>
      <h2 className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-[51px] font-secondary'>
        Vision and Purpose
      </h2>

      <div className='flex flex-col gap-8 md:flex-row items-center md:items-start text-center md:text-left'>
        <div className='-mt-10 md:flex-[50%]'>
          <Image src={VisionImage} alt='vision' />
        </div>
        <div className='flex flex-col gap-[56px] text-[#00050D] md:flex-[50%]'>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>Vision</p>
            <p className='text-2xl'>...Raising sons</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>core values</p>
            <p className='text-2xl'>Love, Relationship, Responsibility & integrity</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>our purpose</p>
            <p className='text-2xl'>
              Through Evangelism, we would bring people into membership. By edification,
              they would come to maturity. Shall be equipped for ministry through training
              adequately exercised for mission opportunities and constantly exalt the Lord
              for the opportunity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
