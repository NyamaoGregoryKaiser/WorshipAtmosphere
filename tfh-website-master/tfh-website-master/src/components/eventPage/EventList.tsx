import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import Pagination from '@/common/Pagination';
import { sendCatchFeedback } from '@/functions/feedback';
import { EventType } from '@/types/types';
import Image from 'next/image';
import React, { useState } from 'react';
import BrandImage from '@/assets/brand/logo1.png';
import Link from 'next/link';

const EventList = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<EventType[] | undefined>(undefined);
  const [totalResults, setTotalResults] = React.useState(0);

  const getEventsCall = async () => {
    try {
      setLoading(true);
      const response = await appAxios.get(`/event?page=${page || 1}`);
      setEvents(response.data.data.data);
      setTotalResults(response.data.data?.totalResults);
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getEventsCall();
  }, [page]);

  return (
    <>
      <div className='pt-[98px] px-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {loading ? (
          <LoadingIndicator />
        ) : events && events.length > 0 ? (
          events.map((item) => (
            <Link
              key={item.id}
              className='w-full flex flex-col'
              href={'/events/details?id=' + item.id}
            >
              <Image
                src={item.poster || BrandImage}
                alt='Event'
                height={316}
                width={600}
                className='object-cover h-[316px] w-full rounded-[20px] mb-[25px]'
                style={{
                  boxShadow: '0px 15px 50px 0px rgba(143, 143, 143, 0.61);',
                }}
              />
              <p className='text-primary font-bold text-[26px] font-secondary mb-[10px]'>
                {item.name}
              </p>
              <p className='mb-4'>{new Date(item.date).toDateString()}</p>
              <p
                className='text-sm'
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              />
            </Link>
          ))
        ) : (
          <p className='text-center'>No event found</p>
        )}
      </div>
      <div className='w-full justify-center flex pb-[98px]'>
        {!loading && events && events.length > 0 && (
          <Pagination page={page} totalResults={totalResults} setPage={setPage} />
        )}
      </div>
    </>
  );
};

export default EventList;
