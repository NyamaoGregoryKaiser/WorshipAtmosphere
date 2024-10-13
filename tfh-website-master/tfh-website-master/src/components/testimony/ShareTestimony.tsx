import Button from '@/common/Button';
import Link from 'next/link';
import React from 'react';

const ShareTestimony = ({ className }: { className?: string }) => {
  return (
    <div className={'flex items-center flex-col gap-8 w-full text-center ' + className}>
      <h2 className='text-primary text-xl md:text-xl lg:text-3xl font-bold'>
        Has God done Wondrous works for you?
      </h2>
      <Link href='/testimony/new'>
        <Button className='!w-[280px] !max-w-full '>Share your Testimony</Button>
      </Link>
    </div>
  );
};

export default ShareTestimony;
