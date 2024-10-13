import { EventGalleryType } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const Gallery = ({ gallery }: { gallery: EventGalleryType }) => {
  return (
    <div className='w-full mt-[92px] flex flex-col'>
      {gallery.length > 0 && (
        <>
          <h2 className='text-primary font-bold font-secondary text-center mb-[52px] text-[30px] md:text-[40px]'>
            Pictures from the Event
          </h2>
          <div className='grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5'>
            {gallery.map((item) => (
              <Image
                src={item.imageURL}
                key={item.id}
                alt='Gallery'
                width={500}
                height={500}
                className='rounded-[5px] w-full h-full object-cover'
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
