import FeedbackForm from '@/components/feedbackPage/FeedbackForm';
import Header from '@/components/feedbackPage/Header';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

const FeedbackPage = () => {
  return (
    <AppLayout>
      <Header />
      <div className='px-primary py-[100px]'>
        <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-3'>
          We love to hear your feedback
        </h2>
        <p className='text-lg lg:text-2xl text-center font-medium mb-[59px]'>
          We'll love you hear what you think
        </p>
        <FeedbackForm />
      </div>
    </AppLayout>
  );
};

export default FeedbackPage;
