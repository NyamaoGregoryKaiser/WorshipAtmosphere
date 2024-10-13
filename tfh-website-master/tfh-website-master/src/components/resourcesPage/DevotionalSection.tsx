import React, { useEffect, useState } from 'react';
import DevotionalImage from '@/assets/images/home/devotional.webp';
import Image from 'next/image';
import { DevotionalType } from '@/types/types';
import { sendCatchFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import Button from '@/common/Button';
import Link from 'next/link';

const DevotionalSection = () => {
  return (
    <section
      id='devotional'
      className='px-primary py-[100px] lg:py-[148px] devotional-bg'
    >
      <div className='flex items-center justify-center text-center lg:text-start gap-[50px] lg:gap-[81px] flex-wrap lg:flex-nowrap'>
        <Image src={DevotionalImage} alt='Devotional' />
        <div className='items-center flex flex-col lg:items-start'>
          <h2 className='text-white text-[35px] md:text-[48px] lg:text-[60px] font-bold mb-[29px]'>
            The Father’s Menu
          </h2>

          <p className='text-white font-normal md:text-xl lg:text-2xl max-w-[672px] mb-[50px]'>
            Just as we are being fed daily by our earthly father, our heavenly father also
            feeds us daily through some carefully selected meals (as word of God) to bless
            us daily. Have you had your meal from the Father today?
          </p>

          <Link href='/devotional'>
            <Button className='!w-[280px] !max-w-full'>Read Devotional</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DevotionalSection;
