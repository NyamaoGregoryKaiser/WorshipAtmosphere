import React, { useState } from 'react';
import Button from '@/common/Button';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';

const SubscribeSection = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const submitValues = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await appAxios.post('/bulletin/subscriber/new', {
        address: input,
      });
      sendFeedback(response.data?.message, 'success');
      setInput('');
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id='subscribe'
      className='px-primary py-[138px] subscriber-bg text-white flex flex-col justify-center items-center gap-[34px]'
    >
      <h2 className='font-semibold font-secondary text-[30px] md:text-[40px]'>
        Subscribe to our newsletter
      </h2>
      <form
        onSubmit={submitValues}
        className='max-w-[815px] flex items-center w-full flex-wrap md:flex-nowrap gap-5 md:gap-0'
      >
        <input
          type='email'
          placeholder='Your Email'
          name='email'
          id='email'
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='p-3 text-lg text-white bg-transparent border-white md:rounded-r-none rounded-l-[5px] rounded-[5px] border-[1.5px] h-[60px] w-full md:border-r-0 placeholder:text-lightGrey outline-none focus-within:!border-lightGrey duration-300'
        />

        <Button
          type='submit'
          className='md:!w-[231px] md:!rounded-l-none !w-full'
          loading={loading}
        >
          Subscribe
        </Button>
      </form>
    </section>
  );
};

export default SubscribeSection;
