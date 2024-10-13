import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import Pagination from '@/common/Pagination';
import { sendCatchFeedback } from '@/functions/feedback';
import { DevotionalType, EventType } from '@/types/types';
import Image from 'next/image';
import React, { useState } from 'react';
import MenuImage from '@/assets/images/devotional/menu.webp';
import Link from 'next/link';
import { capitalize } from '@/functions/stringManipulations';

const DevotionalList = () => {
  const [loading, setLoading] = useState(true);
  const [devotionals, setDevotionals] = useState<DevotionalType[] | undefined>(undefined);

  const getDevotionals = async () => {
    try {
      setLoading(true);
      const response = await appAxios.get(`/devotional/user`);
      setDevotionals(response.data.data.data);
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getDevotionals();
  }, []);

  return (
    <>
      <div className='py-[98px] px-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {loading ? (
          <LoadingIndicator />
        ) : devotionals && devotionals.length > 0 ? (
          devotionals.map((item) => (
            <Link key={item.dish_id} href={'/devotional/details?id=' + item.dish_id}>
              <div className='w-full flex rounded-[10px] gap-5 items-center group bg-white border-[0.5px] border-[#0D57BE] px-[27px] py-5 hover:bg-primary duration-300'>
                <Image
                  src={MenuImage}
                  alt='Event'
                  className='object-cover w-[121.188px] rounded-[10px] h-[113.79px]'
                />
                <div className='flex flex-col gap-5'>
                  <p className='text-primary font-bold text-[20px] font-secondary group-hover:text-white'>
                    {capitalize(item.titles)}
                  </p>
                  <p className='group-hover:text-white text-secondary text-lg'>
                    {new Date(item.ditto).toDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className='text-center'>No event found</p>
        )}
      </div>
    </>
  );
};

export default DevotionalList;
