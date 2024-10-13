import AppLayout from '@/components/layout/AppLayout';
import SendTestimonyForm from '@/components/testimony/SendTestimonyForm';
import SendTestimonyHeader from '@/components/testimony/SendTestimonyHeader';
import React from 'react';

const NewTestimony = () => {
  return (
    <AppLayout>
      <SendTestimonyHeader />
      <div className='px-primary py-[100px]'>
        <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-3'>
          Give us the full details
        </h2>
        <p className='text-lg lg:text-2xl text-center font-medium mb-[78px]'>
          Share the details of your testimony to encourage others
        </p>
        <SendTestimonyForm />
      </div>
    </AppLayout>
  );
};

export default NewTestimony;
