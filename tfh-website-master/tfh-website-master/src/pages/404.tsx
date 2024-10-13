import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import Button from '@/common/Button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <AppLayout>
      <div className='w-full h-screen flex justify-center items-center flex-col text-center'>
        <h1 className='text-7xl font-bold text-secondary font-secondary'>404</h1>
        <p className='mt-[38px] text-primary text-[40px] font-bold max-w-[561px]'>
          Whoops, that page is gone!
        </p>
        <p className='mt-8 mb-[58px] text-2xl max-w-[561px]'>
          Please be patient, our team is working on it. This page will be restored
          shortly.
        </p>
        <Link href='/'>
          <Button className='w-[313px]'>Go to Home</Button>
        </Link>
      </div>
    </AppLayout>
  );
};

export default NotFoundPage;
