import Image from 'next/image';
import React from 'react';
import WhiteLogo from '@/assets/brand/logo1.png';
import PlayStore from '@/common/AppButtons/PlayStore';

function LogoSection() {
  return (
    <div className='text-white flex-col'>
      <Image src={WhiteLogo} alt="worship atmosphere House" className='h-[138px] w-auto' />
      <p className='font-normal mt-[34px] mb-[27px] text-sm'>
        The worship atmosphere strongly believes in the Missions assignment of the New
        Testament Church and also impacting life in her immediate community through
        provision and meeting of some basic needs of life as well as putting in place some
        empowerment programmes and activities.
      </p>
      <p className='text-warning text-sm font-bold mb-3'> Together lets praise the lord</p>
      
    </div>
  );
}

export default LogoSection;
