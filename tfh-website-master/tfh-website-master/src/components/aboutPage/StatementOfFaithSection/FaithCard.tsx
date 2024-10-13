import React from 'react';
import { FaithType } from './data';

const FaithCard = ({ item }: { item: FaithType }) => {
  return (
    <div className='w-full faith-bg p-8 md:p-[42px] lg:p-[52px] text-white min-h-[279px] rounded-[10px]'>
      <p className='font-bold text-lg font-secondary mb-[5px]'>{item.title}</p>
      <p className='font-normal text-[15px]'>{item.description}</p>
    </div>
  );
};

export default FaithCard;
