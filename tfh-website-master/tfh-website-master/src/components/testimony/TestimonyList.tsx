import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator/LoadingIndicator';
import Pagination from '@/common/Pagination';
import { sendCatchFeedback } from '@/functions/feedback';
import { TestimonyType } from '@/types/types';
import React, { useState } from 'react';

const TestimonyList = () => {
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = React.useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TestimonyType[] | undefined>(undefined);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await appAxios.post(`/testimony/approved?page=${page || 1}`);

      setData(response.data.data.data);
      setTotalResults(response.data.data?.totalResults);
    } catch (error: any) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, [page]);

  return (
    <section id='testimonies' className='py-[60px]'>
      <div className='flex gap-[70px] w-full flex-col'>
        {loading ? (
          <LoadingIndicator />
        ) : data && data.length > 0 ? (
          data.map((item) => (
            <article
              key={item.test_id}
              className='shadow bg-white px-[34px] pt-[46px] pb-10 rounded-[7px]'
            >
              <p className='text-2xl md:text-[32px] lg:text-[40px] text-primary mb-4 font-bold'>
                {item.titles}
              </p>
              <p
                className='text-lg md:text-2xl mb-[42px]'
                dangerouslySetInnerHTML={{
                  __html: item.main_gist,
                }}
              />
              <div className='h-[0.5px] w-full bg-[#002F7280] mb-[25px]' />
              <div className='flex w-full items-center flex-wrap justify-between gap-2'>
                <span className='text-lg md:text-2xl lg:text-[32px] text-primary'>
                  {item.names}
                </span>
                <span className='text-lg md:text-2xl'>
                  {new Date(item.ditto).toDateString()}
                </span>
              </div>
            </article>
          ))
        ) : (
          <p className='text-center'>No testimony found</p>
        )}
      </div>
      <div className='w-full justify-center flex pb-[98px]'>
        {!loading && data && data.length > 0 && (
          <Pagination page={page} totalResults={totalResults} setPage={setPage} />
        )}
      </div>
    </section>
  );
};

export default TestimonyList;
