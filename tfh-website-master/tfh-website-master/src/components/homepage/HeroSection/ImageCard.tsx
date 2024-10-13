import Image, { StaticImageData } from 'next/image';
import React from 'react';

function ImageCard({ image }: { image: StaticImageData }) {
  return (
    <Image
      src={image}
      alt=''
      className={'w-[243px] min-h-[331px] object-cover h-auto'}
      placeholder='blur'
    />
  );
}

export default ImageCard;
