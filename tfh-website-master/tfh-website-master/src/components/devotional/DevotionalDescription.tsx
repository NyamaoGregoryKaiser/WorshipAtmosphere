import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { capitalize } from '@/functions/stringManipulations';
import { DevotionalType } from '@/types/types';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const DevotionalDescription = () => {
  const [details, setDetails] = useState<DevotionalType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const getData = async () => {
    try {
      setLoading(true);
      const response = await appAxios.get(`/devotional/view/${id}`);
      setDetails(response.data.devotional);
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  if (loading)
    return (
      <div className='p-10'>
        <LoadingIndicator />
      </div>
    );
  if (!details) return null;
  return (
    <div className='px-primary py-[98px]'>
      <h1 className='text-primary font-bold text-[40px] md:text-[50px] lg:text-[60px]'>
        {capitalize(details.titles)}
      </h1>
      <p className='mt-4 text-[20px] md:text-[25px] lg:text-[30px]'>
        {new Date(details.ditto).toDateString()}
      </p>
      <p className='mt-[22px] text-[20px] md:text-[25px] lg:text-[30px]'>
        Apostle Dr. Richard Udoh
      </p>
      <div className='bg-[#F2FFFC] px-10 md:px-20 py-[37px] text-lg md:text-2xl font-normal mt-9 flex flex-col gap-1'>
        <p>{details.scripture1}</p>
        <b>{details.scripture2}</b>
        <b>Main Text: {details.main_text}</b>
      </div>
      <p
        className='mt-12 text-lg md:text-2xl'
        dangerouslySetInnerHTML={{
          __html: details.contents,
        }}
      />
    </div>
  );
};

export default DevotionalDescription;
