import Button from '@/common/Button';
import TextChange from '@/common/TextChange';
import Link from 'next/link';
import React from 'react';
import { serviceTimelines } from './data';

const DirectionSection = () => {
  return (
    <section
      id='direction'
      className='direction-bg px-primary py-[190px] flex items-center justify-center flex-col text-white text-center'
    >
      <TextChange texts={serviceTimelines} time={10} />
      <p className='text-lg lg:text-xl font-normal mb-[34px] max-w-[752px] mt-[46px]'>
      worship atmosphere House is a place for praising the Lord. We would love you
        to be a part of us. Join in on of our worship services and you'll be blessed
      </p>
      <Link href='/church-locations'>
        <Button className='!w-[280px] !max-w-full'>Get Direction</Button>
      </Link>
    </section>
  );
};

export default DirectionSection;
