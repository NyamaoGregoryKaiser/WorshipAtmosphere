import Image from 'next/image';
import React from 'react';
import TestimonyImage from '@/assets/images/resources/testimony/testimony-bg.webp';
import Link from 'next/link';
import Button from '@/common/Button';

const TestimoniesSection = () => {
  return (
    <section id='testimony' className='px-primary pb-[100px] '>
      <div className='relative min-h-[682px] flex flex-col gap-[11px] w-full'>
        <div className='md:absolute right-0 left-0 bottom-0 z-10 top-0 flex items-center'>
          <div className='testimony-content-bg rounded-[10px] lg:rounded-[20px] px-10 lg:px-20 py-[45px] lg:py-[90px] flex flex-col gap-[46px] md:w-[50%]'>
            <h2 className='text-white text-[35px] md:text-[48px] lg:text-[60px] font-bold mb-[29px]'>
              Testimonies help us to count our blessings
            </h2>
            <Link href='/testimony'>
              <Button className='!w-[280px] !max-w-full !bg-white !text-secondary'>
                Testimonies
              </Button>
            </Link>
          </div>
        </div>
        <div className='md:absolute right-0 top-0 bottom-0 left-0 flex justify-end '>
          <Image
            src={TestimonyImage}
            alt='people rejoicing'
            className='h-full object-cover md:w-[80%] rounded-[10px] lg:rounded-[20px]'
          />
        </div>
      </div>
    </section>
  );
};

export default TestimoniesSection;
